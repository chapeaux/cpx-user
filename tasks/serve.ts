import { route, type Route } from "jsr:@std/http/unstable-route";
import { serveFile, serveDir } from "jsr:@std/http/file-server";

const routes: Route[] = [
  {
    method: ["GET"],
    pattern: new URLPattern({ pathname: "/" }),
    handler: async (req: Request) => {
      return await serveFile(req, `${Deno.cwd()}/demo/index.html`);
    }
  },
  {
    method: ["GET"],
    pattern: new URLPattern({ pathname: "/*" }),
    handler: async (req: Request) => {
      return await serveDir(req, {
        fsRoot: `${Deno.cwd()}`
      });
    }
  }  
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

const handler = route(routes, defaultHandler);

export default {
  fetch(req) {
    return handler(req);
  },
} satisfies Deno.ServeDefaultExport;

// Deno.serve(route(routes, defaultHandler));
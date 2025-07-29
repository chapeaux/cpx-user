import { doc } from "jsr:@deno/doc";

const path = `file://${Deno.cwd()}/src/cpx-user.ts`;
console.log(`PATH: ${path}`);
const docHtml = await doc([path]);

for (const node of docHtml) {
  console.log(`name: ${node.name} kind: ${node.kind}`);
}
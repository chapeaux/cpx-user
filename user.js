"use strict";
function getCookies(cookies, values) {
    let obj = {};
    let cookieMap = new Map();
    cookies.split(';').map(v => {
        const rec = v.trim().split('=');
        cookieMap.set(rec[0], rec[1]);
    });
    for (const [key, value] of values) {
        obj[value] = cookieMap.get(key) || '';
    }
    return obj;
}
function getToken(token, values) {
    let obj = {};
    for (const [key, value] of values) {
        obj[value] = token[key];
    }
    return obj;
}
onmessage = function (e) {
    if (e.data && e.data.action) {
        switch (e.data.action) {
            case 'getCookies':
                postMessage({ action: e.data.action, results: getCookies(e.data.payload, e.data.values) });
                break;
            case 'getToken':
                postMessage({ action: e.data.action, results: getToken(e.data.payload, e.data.values) });
            default:
                postMessage({});
                break;
        }
    }
};
class User {
    constructor(obj) {
        this.givenname = "";
        this.surname = "";
        this.custKey = "{custKey}";
        this.accountID = "<accountID>";
        this.accountIDType = "External";
        this.userID = "<userID>";
        this.lastLoginDate = "";
        this.loggedIn = "false";
        this.registered = "true";
        this.socialAccountsLinked = "";
        this.subscriptionFrequency = "";
        this.subscriptionLevel = "";
        this.hashedEmail = "";
    }
}

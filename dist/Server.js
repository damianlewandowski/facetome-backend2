"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
require("@tsed/socketio");
require("@tsed/swagger");
const bodyParser = require("body-parser");
const rootDir = __dirname;
let Server = class Server extends common_1.ServerLoader {
    $beforeRoutesInit() {
        this
            .use(common_1.GlobalAcceptMimesMiddleware)
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true
        }));
    }
};
Server = __decorate([
    common_1.ServerSettings({
        rootDir,
        acceptMimes: ["application/json"],
        mount: {
            "/": `${rootDir}/controllers/**/*.ts`
        },
        statics: {
            "/": [
                "./public",
                "./node_modules"
            ]
        },
        swagger: {
            path: "/docs"
        },
        socketIO: {}
    })
], Server);
exports.Server = Server;
//# sourceMappingURL=Server.js.map
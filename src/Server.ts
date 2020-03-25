import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from "@tsed/common";
import "@tsed/socketio";
import "@tsed/swagger";

const bodyParser = require("body-parser");
const rootDir = __dirname;

@ServerSettings({
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
export class Server extends ServerLoader {

  $beforeRoutesInit() {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }
}

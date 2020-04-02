import {
  GlobalAcceptMimesMiddleware,
  ServerLoader,
  ServerSettings
} from "@tsed/common";
import "@tsed/socketio";
import "@tsed/swagger";
import "@tsed/typeorm";
import {UserModel} from "./models/UserModel";
import * as cors from "cors";

const bodyParser = require("body-parser");
const rootDir = __dirname;

const whitelist = ["http://localhost:3000", "*"];
const corsOptions = {
  origin (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

@ServerSettings({
  rootDir,
  acceptMimes: ["application/json"],
  port: process.env.PORT,
  httpsPort: process.env.HTTPS_PORT,
  mount: {
    "/v1": [
      `${rootDir}/controllers/**/**Ctrl.{ts,js}`
    ]
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
  componentsScan: [
    // `${rootDir}/services/*{.ts,.js}`,
    // `${rootDir}/repositories/*{.ts,.js}`,
    // `${rootDir}/protocols/*{.ts,.js}`,
    // `${rootDir}/middlewares/**/**.ts`
  ],
  passport: {
    userInfoModel: UserModel
  },
  typeorm: [
    {
      name: "default",
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      logging: true,
      synchronize: true,
      entities: [
        `${rootDir}/entities/*{.ts,.js}`
      ],
      migrations: [
        `${rootDir}/migrations/*{.ts,.js}`
      ],
      subscribers: [
        `${rootDir}/subscriber/*{.ts,.js}`
      ]
    }
  ],
  socketIO: {
  }
})
export class Server extends ServerLoader {

  $beforeRoutesInit() {

    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cors(corsOptions))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));
  }

  public $onServerInitError(err) {
    console.error(err);
  }
}

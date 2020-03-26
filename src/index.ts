import {$log, ServerLoader} from "@tsed/common";
import {Server} from "./Server";

let config = null;
if (process.env.NODE_ENV === "production") {
  $log.info("Running in production");
  config = {
    port: parseInt(process.env.port),
    httpsPort: parseInt(process.env.httpsPort),
  };
} else {
  config = require("dotenv").config().parsed;
  $log.level = "debug";
}


async function bootstrap() {
  try {
    $log.debug("Start server...");
    const server = await ServerLoader.bootstrap(Server, config);

    await server.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();

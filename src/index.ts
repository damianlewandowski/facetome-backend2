import {$log, ServerLoader} from "@tsed/common";
import {Server} from "./Server";

const config = require("dotenv").config({ path: ".env" });
$log.level = "debug";

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const server = await ServerLoader.bootstrap(Server, config.parsed);

    await server.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();

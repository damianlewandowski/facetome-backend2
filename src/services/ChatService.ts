import {
  Args,
  Broadcast,
  BroadcastOthers,
  Emit,
  Input,
  IO,
  Nsp,
  Socket,
  SocketService,
  SocketSession
} from "@tsed/socketio";
import * as SocketIO from "socket.io";
import { $log } from "@tsed/common";
import {Namespace} from "@tsed/socketio/lib/decorators/nsp";

export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

@SocketService("/chat")
export class ChatService {

  @Nsp nsp: SocketIO.Namespace;

  constructor(@IO private io: SocketIO.Server) {
  }

  /**
   * Triggered the namespace is created
   */
  $onNamespaceInit(nsp: SocketIO.Namespace) {
    $log.info("$onNamespaceInit");
  }

  /**
   * Triggered when a new client connects to the Namespace.
   */
  $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    $log.info("New client connected: ", socket.client.id);
  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  $onDisconnect(@Socket socket: SocketIO.Socket) {
    $log.info("Client disconnected: ", socket.client.id);
  }

  @Input("newMessage")
  @BroadcastOthers("newMessage")
  myMethod(@Args(0) message: Message, @Socket socket: Socket, @Namespace nsp: Namespace) {
    $log.debug(message);

    return message;
  }
}
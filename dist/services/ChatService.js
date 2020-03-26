"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketio_1 = require("@tsed/socketio");
const SocketIO = require("socket.io");
const common_1 = require("@tsed/common");
const nsp_1 = require("@tsed/socketio/lib/decorators/nsp");
let ChatService = class ChatService {
    constructor(io) {
        this.io = io;
    }
    /**
     * Triggered the namespace is created
     */
    $onNamespaceInit(nsp) {
        common_1.$log.info("$onNamespaceInit");
    }
    /**
     * Triggered when a new client connects to the Namespace.
     */
    $onConnection(socket, session) {
        common_1.$log.info("New client connected: ", socket.client.id);
    }
    /**
     * Triggered when a client disconnects from the Namespace.
     */
    $onDisconnect(socket) {
        common_1.$log.info("Client disconnected: ", socket.client.id);
    }
    myMethod(message, socket, nsp) {
        common_1.$log.debug(message);
        return message;
    }
};
__decorate([
    socketio_1.Nsp,
    __metadata("design:type", Object)
], ChatService.prototype, "nsp", void 0);
__decorate([
    __param(0, socketio_1.Socket), __param(1, socketio_1.SocketSession),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatService.prototype, "$onConnection", null);
__decorate([
    __param(0, socketio_1.Socket),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatService.prototype, "$onDisconnect", null);
__decorate([
    socketio_1.Input("newMessage"),
    socketio_1.BroadcastOthers("newMessage"),
    __param(0, socketio_1.Args(0)), __param(1, socketio_1.Socket), __param(2, nsp_1.Namespace),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ChatService.prototype, "myMethod", null);
ChatService = __decorate([
    socketio_1.SocketService("/chat"),
    __param(0, socketio_1.IO),
    __metadata("design:paramtypes", [Object])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=ChatService.js.map
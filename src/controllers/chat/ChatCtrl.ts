import {BodyParams, Controller, Get, Patch} from "@tsed/common";
import {ChatService} from "../../services/ChatService";

@Controller("/chat")
export class ChatCtrl {

  constructor(private chatService: ChatService) {

  }
  //
  // @Get("/settings")
  // getSettings(): SquareGameSettings {
  //   const {maxPlayers, scoreMax} = this.squareGameService;
  //
  //   return {
  //     maxPlayers,
  //     scoreMax
  //   };
  // }
  //
  // @Patch("/settings")
  // patchSettings(@BodyParams("maxPlayers") maxPlayers: number, @BodyParams("scoreMax") scoreMax: number): SquareGameSettings {
  //   if (maxPlayers && maxPlayers >= 2) {
  //     this.squareGameService.maxPlayers = maxPlayers;
  //   }
  //
  //   if (scoreMax && scoreMax >= 5) {
  //     this.squareGameService.scoreMax = scoreMax;
  //   }
  //
  //   return this.getSettings();
  // }
}
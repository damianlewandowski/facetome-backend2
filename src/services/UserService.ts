// import {AfterRoutesInit, Injectable} from "@tsed/common";
// import {TypeORMService} from "@tsed/typeorm";
// import {Connection} from "typeorm";
// import {UserModel} from "../models/User";
//
// @Injectable()
// export class UsersService implements AfterRoutesInit {
//   private connection: Connection;
//
//   constructor(private typeORMService: TypeORMService) {
//
//   }
//
//   $afterRoutesInit() {
//     this.connection = this.typeORMService.get()!; // get connection by name
//   }
//
//   async create(user: UserModel): Promise<UserModel> {
//     // do something
//     // ...
//     // Then save
//     await this.connection.manager.save(user);
//     // console.log("Saved a new user with id: " + user.id);
//
//     return user;
//   }
//
//   async find(): Promise<UserModel[]> {
//     const users = await this.connection.manager.find(UserModel);
//     console.log("Loaded users: ", users);
//
//     return users;
//   }
//
// }
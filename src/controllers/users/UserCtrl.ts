// import {$log, BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
// import {Returns, ReturnsArray} from "@tsed/swagger";
// import {User} from "../../entities/User";
// import {UserModel} from "../../models/UserModel";
// import {UserRepository} from "../../repositories/UserRepository";
// import {getConnectionManager} from "typeorm";
//
// @Controller("/users")
// export class UsersCtrl {
//   constructor(private userRepository: UserRepository) {
//   }
//
//   @Post("/")
//   @Returns(User)
//   create(@BodyParams() user: UserModel): Promise<User> {
//     return this.userRepository.save(user);
//   }
//
//   @Get("/:id")
//   @Returns(User)
//   async get(@PathParams("id") id: string): Promise<User> {
//     return this.userRepository.findByID(id);
//   }
//
//   @Get("/")
//   @ReturnsArray(User)
//   async getList(): Promise<User[]> {
//     console.log(this.userRepository);
//     const x = getConnectionManager();
//
//     $log.debug(x);
//     console.log(x);
//
//     return this.userRepository.find();
//   }
// }
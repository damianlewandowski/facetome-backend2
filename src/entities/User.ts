import {IgnoreProperty} from "@tsed/common";
import {Description} from "@tsed/swagger";
import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserModel} from "../models/UserModel";

@Entity()
export class User {
  @Description("Database assigned id")
  @PrimaryGeneratedColumn()
  id: number;

  @IgnoreProperty()
  password: string;

  verifyPassword(password: string) {
    return this.password === password;
  }
}
import {Format, Minimum, Required} from "@tsed/common";
import {Description, Example} from "@tsed/swagger";
import {Column} from "typeorm";

export class UserModel {
  @Description("User password")
  @Example("/5gftuD/")
  @Column()
  @Required()
  password: string;

  @Description("User email")
  @Example("user@domain.com")
  @Format("email")
  @Column({unique: true})
  email: string;

  @Description("User first name")
  @Column()
  @Required()
  firstName: string;

  @Description("User last name")
  @Column()
  @Required()
  lastName: string;

  @Description("User age")
  @Column()
  @Minimum(18)
  @Example(18)
  age: number;
}
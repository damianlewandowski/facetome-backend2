import {EntityRepository, getConnectionManager, Repository} from "typeorm";
import {User} from "../entities/User";
import { $log } from "@tsed/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByID(id: string): Promise<User> {
    $log.debug(this);
    const x = getConnectionManager();

    $log.debug(x);

    return this.findOne(id);
  }
}
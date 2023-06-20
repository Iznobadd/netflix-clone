import { Repository } from "typeorm";
import User from "./entities/User";

export interface IService {
  db: Repository<User>;
}

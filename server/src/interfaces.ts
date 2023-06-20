import { Repository } from "typeorm";
import User from "./entities/User";

export interface IService {
  db: Repository<User>;
}

export interface ILogin {
  email: string;
  password: string;
}

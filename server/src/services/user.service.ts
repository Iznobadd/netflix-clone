import { datasource } from "src/db";
import User from "src/entities/User";
import { IService } from "src/interfaces";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
export default class UserService implements IService {
  db: Repository<User>;

  constructor() {
    this.db = datasource.getRepository(User);
  }

  async createUser(email: string, password: string): Promise<User> {
    try {
      const hashPassword = await bcrypt.hashSync(password, 10);
      const user = await this.db.create({ email, password: hashPassword });
      await this.db.save(user);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}

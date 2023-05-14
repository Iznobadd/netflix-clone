import { datasource } from "src/db";
import User from "src/entities/User";
import { ILogin, IService, ITokenParams } from "src/interfaces";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { sign } from "jsonwebtoken";
export default class UserService implements IService {
  db: Repository<User>;

  constructor() {
    this.db = datasource.getRepository(User);
  }

  // CREATION D'UN UTILISATEUR
  async create(email: string, password: string): Promise<User> {
    try {
      const hashPassword = await bcrypt.hashSync(password, 10);
      await this.isEmailExist(email);
      const user = await this.db.create({ email, password: hashPassword });
      await this.db.save(user);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  // RECUPERATION D'UN UTILISATEUR
  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.db.findOne({ where: { email } });
      if (!user) throw new Error("Utilisateur introuvable");
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }

  // RECUPERATION DE TOUS LES UTILISATEURS
  async findAll(): Promise<User[]> {
    try {
      const users = await this.db.find();
      if (!users || users.length == 0)
        throw new Error("Aucun utilisateur trouvé");
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }

  // VERIFICATION DE L'EXISTENCE D'UN UTILISATEUR
  async isEmailExist(email: string): Promise<boolean | string> {
    try {
      const user = await this.db.findOne({ where: { email } });
      if (!user) return false;
      throw new Error("Votre email existe déjà");
    } catch (err) {
      throw new Error(err);
    }
  }

  // GENERER UN TOKEN
  async generateToken(params: ITokenParams) {
    try {
      return sign(params, `${process.env.JWT_KEY}`, {
        expiresIn: "1h",
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  // RECUPERER PAYLOAD DU TOKEN
  async getPayload(token: string) {
    try {
      return jwt.verify(token, `${process.env.JWT_KEY}`);
    } catch (err) {
      throw new Error(err);
    }
  }

  // LOGIN
  async login({ email, password }: ILogin) {
    try {
      const user = await this.findByEmail(email);
      if (!user) throw new Error("Utilisateur introuvable");
      const isValidPassword = await this.checkPassword(password, user.password);
      if (!isValidPassword) throw new Error("Mot de passe incorrect");
      const token = await this.generateToken({ email });
      return token;
    } catch (err) {
      throw new Error(err);
    }
  }

  async checkPassword(password: string, hashPassword: string) {
    try {
      return bcrypt.compareSync(password, hashPassword);
    } catch (err) {
      throw new Error(err);
    }
  }
}

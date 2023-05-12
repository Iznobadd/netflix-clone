export interface IService {
  db: Repository<User>;
}

export interface ITokenParams {
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

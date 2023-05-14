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

export interface IAuthMiddleware {
  req: {
    cookies: {
      token?: string;
    };
  };
}

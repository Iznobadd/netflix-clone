import User, { CreateUserInput, LoginInput } from "../entities/User";
import UserService from "../services/user.service";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "src/middlewares/isAuth";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}
@Resolver()
export default class UserResolver {
  // RECUPERE UN UTILISATEUR PAR SON EMAIL
  @Query(() => User)
  async findOneUserByEmail(@Arg("email") email: string): Promise<User> {
    return new UserService().findByEmail(email);
  }

  // RECUPERE TOUS LES UTILISATEURS
  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return new UserService().findAll();
  }

  @UseMiddleware(isAuth)
  @Query(() => String)
  async hello(@Ctx() { payload }: any) {
    return `Hello ${payload.email}`;
  }

  // LOGIN D'UN UTILISATEUR
  @Mutation(() => LoginResponse)
  async login(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() { res }: any
  ): Promise<LoginResponse> {
    const { email, password } = loginInput;
    const user = await new UserService().findByEmail(email);
    if (!user) throw new Error("Utilisateur introuvable");
    const isValidPassword = await new UserService().checkPassword(
      password,
      user.password
    );
    if (!isValidPassword) throw new Error("Mot de passe incorrect");

    return {
      accessToken: await new UserService().createAccessToken(user),
    };
  }

  // CREATION D'UN UTILISATEUR
  @Mutation(() => User)
  async createUser(
    @Arg("createUserInput")
    createUserInput: CreateUserInput
  ): Promise<User> {
    const { email, password } = createUserInput;
    return new UserService().create(email, password);
  }
}

import User, { CreateUserInput, LoginInput } from "src/entities/User";
import UserService from "src/services/user.service";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

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

  // LOGIN D'UN UTILISATEUR
  @Mutation(() => String)
  async login(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() { res }: any
  ): Promise<string> {
    const { email, password } = loginInput;
    const user = await new UserService().findByEmail(email);
    if (!user) throw new Error("Utilisateur introuvable");
    const isValidPassword = await new UserService().checkPassword(
      password,
      user.password
    );
    if (!isValidPassword) throw new Error("Mot de passe incorrect");
    const token = await new UserService().generateToken({ email: user.email });
    return token;
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

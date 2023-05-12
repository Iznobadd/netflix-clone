import User, { CreateUserInput } from "src/entities/User";
import UserService from "src/services/user.service";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

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

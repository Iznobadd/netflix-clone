import User, { CreateUserInput } from "src/entities/User";
import UserService from "src/services/user.service";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  async users(): Promise<string> {
    return "";
  }

  @Mutation(() => User)
  async createUser(
    @Arg("createUserInput") createUserInput: CreateUserInput
  ): Promise<User> {
    const { email, password } = createUserInput;
    return new UserService().createUser(email, password);
  }
}

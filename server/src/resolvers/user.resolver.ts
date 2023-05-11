import User from "src/entities/User";
import { Query, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  async users(): Promise<string> {
    return "";
  }
}

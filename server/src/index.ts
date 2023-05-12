import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { datasource } from "./db";
import UserService from "./services/user.service";

dotenv.config();

const corsConfig =
  process.env.NODE_ENV !== "production"
    ? {
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
      }
    : {
        origin: "",
        credentials: true,
      };

async function start() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.ts"],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    cors: corsConfig,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: async ({ req }) => {
      let user = null;
      const { authorization } = req.headers;
      if (authorization) {
        const token = authorization.split(" ")[1];
        let data: any = new UserService().getPayload(token);
        if (data) {
          const { email } = data;
          user = await new UserService().findByEmail(email);
        }
      }

      return { user };
    },
  });

  server.listen().then(async ({ url }) => {
    await datasource.initialize();
    console.log(`🚀 Server ready at ${url}`);
  });
}

start();

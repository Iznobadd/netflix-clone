import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { datasource } from "./db";

dotenv.config();

async function start() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.ts"],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: () => ({}),
  });

  server.listen().then(async ({ url }) => {
    await datasource.initialize();
    console.log(`🚀 Server ready at ${url}`);
  });
}

start();

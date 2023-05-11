import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { datasource } from "./db";

async function start() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.ts"],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen().then(async ({ url }) => {
    await datasource.initialize();
    console.log(`🚀 Server ready at ${url}`);
  });
}

start();

import { ApolloServer } from "apollo-server";
import * as dotenv from "dotenv";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { datasource } from "./db";
import UserService from "./services/user.service";
import { parse as parseCookie } from "cookie";
import { JwtPayload, verify } from "jsonwebtoken";

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
    context: ({ req, res }): any => {
      const context: any = {
        req,
        res,
        email: null,
      };

      try {
        const cookies = parseCookie(req.headers.cookie || "");
        const token = cookies.jwt;
        console.log(token);

        if (token) {
          const secret = process.env.JWT_KEY;
          if (secret) {
            const decodedToken = verify(token, secret) as
              | (JwtPayload & { email: string })
              | undefined;
            if (decodedToken && decodedToken.email) {
              context.email = decodedToken.email;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }

      return context;
    },
  });
  server.listen().then(async ({ url }) => {
    await datasource.initialize();
    console.log(`🚀 Server ready at ${url}`);
  });
}

start();

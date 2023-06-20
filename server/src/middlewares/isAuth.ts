import { verify } from "jsonwebtoken";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<any> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) throw new Error("Vous n'êtes pas authentifié");
  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (err) {
    throw new Error("Vous n'êtes pas authentifié");
  }
  return next();
};

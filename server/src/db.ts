import { DataSource } from "typeorm";
import User from "./entities/User";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "netflix_db",
  entities: [User],
  synchronize: true,
  logging: ["query", "error"],
});

export { datasource };

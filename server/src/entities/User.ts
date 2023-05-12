import { IsEmail } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  password: string;
}

@InputType()
export class CreateUserInput {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @IsEmail()
  @Field()
  email: string;

  @Field()
  password: string;
}

export default User;

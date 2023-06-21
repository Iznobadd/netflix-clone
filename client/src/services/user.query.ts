import { gql } from "@apollo/client";

export const GET_USER = gql`
  query FindOneUserByEmail($email: String!) {
    findOneUserByEmail(email: $email) {
      email
      id
    }
  }
`;

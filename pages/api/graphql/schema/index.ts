import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    hello: String
    users: [User]
  }
`

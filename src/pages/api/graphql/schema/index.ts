import gql from 'graphql-tag'

export const typeDefs = gql`
  type prismaUser {
    id: ID!
    name: String!
    email: String!
  }
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }
  type Geo {
    lat: String
    lng: String
  }
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  type jsonplaceholderUser {
    id: Int
    name: String
    username: String
    email: String
    phone: String
    website: String
    company: Company
    address: Address
    posts: [jsonplaceholderPost]
  }
  type jsonplaceholderPost {
    userId: Int
    id: Int
    title: String
    body: String
  }
  type Query {
    hello: String
    prismaUsers: [prismaUser]
    jsonplaceholderUsers: [jsonplaceholderUser]
    jsonplaceholderPosts: [jsonplaceholderPost]
  }
`

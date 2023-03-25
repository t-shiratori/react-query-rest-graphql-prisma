import { GraphQLClient } from 'graphql-request'
const API_URL = `/api/graphql`

export const graphQLClient = new GraphQLClient(API_URL)

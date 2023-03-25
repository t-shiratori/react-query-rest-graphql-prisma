import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { JsonplaceholderPostApi } from './datasources/jsonplaceholder-post'
import { JsonplaceholderUserApi } from './datasources/jsonplaceholder-use'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { resolvers } from './resolver'

const typeDefs = loadSchemaSync('src/pages/api/graphql/schema/root.graphql', {
  loaders: [new GraphQLFileLoader()],
})

type TContextValue = {
  dataSources: {
    jsonplaceholderUserApi: JsonplaceholderUserApi
    jsonplaceholderPostApi: JsonplaceholderPostApi
  }
}

const server = new ApolloServer<TContextValue>({
  typeDefs,
  resolvers,
})

export default startServerAndCreateNextHandler(server, {
  context: async () => ({
    dataSources: {
      jsonplaceholderUserApi: new JsonplaceholderUserApi(),
      jsonplaceholderPostApi: new JsonplaceholderPostApi(),
    },
  }),
})

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { JsonplaceholderPostApi } from './datasources/jsonplaceholder-post'
import { JsonplaceholderUserApi } from './datasources/jsonplaceholder-use'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

type TContextValue = {
  dataSources: {
    jsonplaceholderUserApi: JsonplaceholderUserApi
    jsonplaceholderPostApi: JsonplaceholderPostApi
  }
}

const server = new ApolloServer<TContextValue>({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server, {
  context: async () => ({
    dataSources: {
      jsonplaceholderUserApi: new JsonplaceholderUserApi(),
      jsonplaceholderPostApi: new JsonplaceholderPostApi(),
    },
  }),
})

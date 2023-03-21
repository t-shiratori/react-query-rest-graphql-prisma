import { Prisma, PrismaClient } from '@prisma/client'
import { Resolvers } from '../types/graphql'

const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello World',
    prismaUsers: () => prisma.user.findMany(),
    jsonplaceholderUsers: (_, __, contextValue) => {
      console.log('contextValue: ', contextValue)
      return contextValue.dataSources.jsonplaceholderUserApi.getUsers()
    },
    jsonplaceholderPosts: (_, __, contextValue) => {
      console.log('contextValue: ', contextValue)
      return contextValue.dataSources.jsonplaceholderPostApi.getPosts()
    },
  },
}

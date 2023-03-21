import { PrismaClient } from '@prisma/client'
import { JsonplaceholderPost, Resolvers } from '../types/graphql'

const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello World',
    prismaUsers: () => prisma.user.findMany(),
    jsonplaceholderUsers: (_, __, contextValue) => contextValue.dataSources.jsonplaceholderUserApi.getUsers(),
    jsonplaceholderPosts: (_, __, contextValue) => contextValue.dataSources.jsonplaceholderPostApi.getPosts(),
  },
  jsonplaceholderUser: {
    posts: async (parent, args, contextValue) => {
      const allPosts: JsonplaceholderPost[] = await contextValue.dataSources.jsonplaceholderPostApi.getPosts()
      const filteredPosts: JsonplaceholderPost[] = allPosts.filter(({ userId }) => userId === parent.id)
      return filteredPosts
    },
  },
}

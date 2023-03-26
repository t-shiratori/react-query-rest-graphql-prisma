import { PrismaClient } from '@prisma/client'
import { JsonplaceholderPost, Resolvers } from '../types/graphql'

const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello World',
    prismaUser: async (_, args, ___, ____) => {
      const result = await prisma.user.findUnique({
        where: {
          id: Number(args.id),
        },
      })
      return result
    },
    prismaUsers: () => prisma.user.findMany(),
    jsonplaceholderUser: (_, args, contextValue) => contextValue.dataSources.jsonplaceholderUserApi.getUser(args.id),
    jsonplaceholderUsers: (_, __, contextValue) => contextValue.dataSources.jsonplaceholderUserApi.getUsers(),
    jsonplaceholderPost: (_, args, contextValue) => contextValue.dataSources.jsonplaceholderPostApi.getPost(args.id),
    jsonplaceholderPosts: (_, __, contextValue) => contextValue.dataSources.jsonplaceholderPostApi.getPosts(),
  },
  Mutation: {
    prismaUser: async (_, args, ___, ____) => {
      const { name, email } = args.user
      const result = await prisma.user.create({
        data: {
          email,
          name,
        },
      })
      return result
    },
  },
  jsonplaceholderUser: {
    posts: async (parent, _, contextValue) => {
      const allPosts: JsonplaceholderPost[] = await contextValue.dataSources.jsonplaceholderPostApi.getPosts()
      const filteredPosts: JsonplaceholderPost[] = allPosts.filter(({ userId }) => userId === parent.id)
      return filteredPosts
    },
  },
}

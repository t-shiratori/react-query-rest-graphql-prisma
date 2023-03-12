import { Prisma, PrismaClient } from '@prisma/client'
import { Context } from 'apollo-server-core'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    hello: () => 'Hello World',
    users: () => prisma.user.findMany(),
  },
}

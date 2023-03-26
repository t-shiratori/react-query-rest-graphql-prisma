import { Prisma } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { graphQLClient } from './gqlClient'

const gqlQuery = gql`
  mutation Mutation($user: createPrismaUserInput!) {
    prismaUser(user: $user) {
      name
      email
    }
  }
`

export const useMutationUserApi = () => {
  const mutationKey = ['graphql', 'create', 'user']
  return useMutation<Prisma.UserCreateInput, unknown, Prisma.UserCreateInput, unknown>({
    mutationKey,
    mutationFn: (params) => graphQLClient.request(gqlQuery, { user: params }),
  })
}

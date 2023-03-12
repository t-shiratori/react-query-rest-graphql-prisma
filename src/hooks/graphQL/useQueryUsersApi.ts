import { useQuery } from '@tanstack/react-query'
import { GraphQLClient, gql } from 'graphql-request'
import { TBaseQueryParams } from '../type'

const API_URL = `/api/graphql`

type TUser = {
  id: string
  name: String
  email: String
}

type TResponse = { users: TUser[] } | undefined

type TParams = ({ id?: number } & TBaseQueryParams) | undefined

const graphQLClient = new GraphQLClient(API_URL)

const gQuery = gql`
  query Query {
    users {
      id
      email
      name
    }
  }
`

export const useQueryUsersApi = ({
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams = {}) => {
  return useQuery<TResponse>({
    queryKey: ['graphql', 'tasks'],
    queryFn: () => graphQLClient.request(gQuery),
    enabled,
    staleTime,
    cacheTime,
    onSuccess: (data) => {
      successHandler?.(data)
    },
    onError(err) {
      errorHandler?.(err)
    },
    onSettled(data, error) {
      settledHandler?.(data)
    },
  })
}

import { useQuery } from '@tanstack/react-query'
import { GraphQLClient, gql } from 'graphql-request'
import { JsonplaceholderUser } from '../../../pages/api/graphql/types/graphql'
import { TBaseQueryParams } from '../type'

const API_URL = `/api/graphql`

type TUser = {
  id: string
  name: String
  email: String
}

type TResponse = { jsonplaceholderUsers: JsonplaceholderUser[] } | undefined

type TParams = ({ id?: number } & TBaseQueryParams) | undefined

const graphQLClient = new GraphQLClient(API_URL)

const gQuery = gql`
  query Query {
    jsonplaceholderUsers {
      name
      posts {
        title
      }
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
    queryKey: ['graphql', 'users'],
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

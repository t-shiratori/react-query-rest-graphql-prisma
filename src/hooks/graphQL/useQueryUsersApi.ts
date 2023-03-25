import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { JsonplaceholderUser } from '../../pages/api/graphql/types/graphql'
import { TBaseQueryParams } from '../type'
import { graphQLClient } from './gqlClient'

type TResponse = { jsonplaceholderUsers: JsonplaceholderUser[] } | undefined

type TParams = ({ id?: number } & TBaseQueryParams) | undefined

const gqlQuery = gql`
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
    queryKey: ['graphql', 'get', 'users'],
    queryFn: () => graphQLClient.request(gqlQuery),
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

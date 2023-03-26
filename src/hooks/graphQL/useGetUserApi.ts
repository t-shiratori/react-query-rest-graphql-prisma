import { useQuery } from '@tanstack/react-query'
import { gql } from 'graphql-request'
import { JsonplaceholderUser } from '../../pages/api/graphql/types/graphql'
import { TBaseQueryParams } from '../type'
import { graphQLClient } from './gqlClient'

type TResponse = { jsonplaceholderUser: JsonplaceholderUser } | undefined

type TParams = ({ id?: string } & TBaseQueryParams) | undefined

const gqlQuery = gql`
  query Query($id: ID!) {
    jsonplaceholderUser(id: $id) {
      id
      name
      email
    }
  }
`

export const useGetUserApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams = {}) => {
  return useQuery<TResponse>({
    queryKey: ['graphql', 'get', 'user', id],
    queryFn: () => graphQLClient.request(gqlQuery, { id }),
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

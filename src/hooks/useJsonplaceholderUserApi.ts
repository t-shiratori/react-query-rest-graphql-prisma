import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
import { TBaseQueryParams, TUserResponse } from './type'

type TParams = { id: number } & TBaseQueryParams

export const useJsonplaceholderUserApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
}: TParams) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  return useQuery<TUserResponse>({
    queryKey: ['users', id],
    queryFn: fetcher({ url, method: 'GET' }),
    enabled,
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

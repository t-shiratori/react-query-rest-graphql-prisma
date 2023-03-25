import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
import { TBaseQueryParams, TTodoResponse } from './type'

type TParams = { id?: string } & TBaseQueryParams

export const useJsonplaceholderTodoApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`

  return useQuery<TTodoResponse>({
    queryKey: ['todos', id],
    queryFn: fetcher({ url, method: 'GET' }),
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

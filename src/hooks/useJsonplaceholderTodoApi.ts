import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
import { TBaseQueryParams, TTodoResponse } from './type'

type TParams = { id?: string; userId?: string } & TBaseQueryParams

const getUrl = ({ id, userId }: { id?: string; userId?: string } = {}) => {
  if (id && userId) return `https://jsonplaceholder.typicode.com/todos/${id}?userId=${userId}`
  if (id) return `https://jsonplaceholder.typicode.com/todos/${id}`
  return `https://jsonplaceholder.typicode.com/todos/`
}

export const useJsonplaceholderTodoApi = ({
  id,
  userId,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const url = getUrl({ id, userId })

  return useQuery<TTodoResponse>({
    queryKey: ['todos', id, userId],
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

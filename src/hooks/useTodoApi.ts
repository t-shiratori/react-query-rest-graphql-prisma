import { useQuery } from '@tanstack/react-query'
import { TBaseQueryParams, TTodoResponse, TUserResponse } from './type'

type TParams = { id?: string } & TBaseQueryParams

export const useTodoApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`

  return useQuery<TTodoResponse>({
    queryKey: ['todos', id],
    queryFn: async () => {
      const response = await fetch(apiUrl)
      return response.json()
    },
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

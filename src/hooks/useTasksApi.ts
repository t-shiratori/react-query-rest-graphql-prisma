import { useQuery } from '@tanstack/react-query'
import { TTasks } from '../db/tasks'
import { TBaseQueryParams, TTodoResponse, TUserResponse } from './type'

type TParams = ({ id?: number } & TBaseQueryParams) | undefined

export const useTasksApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams = {}) => {
  const apiUrl = `/api/tasks`

  return useQuery<TTasks>({
    queryKey: ['tasks'],
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

import { useQuery } from '@tanstack/react-query'
import { TBaseQueryParams } from './type'
import { Prisma } from '@prisma/client'
import { fetcher } from '../utils/apiClient'

export const useGetTasksApi = ({
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TBaseQueryParams = {}) => {
  const url = `/api/tasks`

  return useQuery<Prisma.TaskMinAggregateInputType[]>({
    queryKey: ['tasks'],
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

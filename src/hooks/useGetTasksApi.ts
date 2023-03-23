import { useQuery } from '@tanstack/react-query'
import { TBaseQueryParams } from './type'
import { Prisma } from '@prisma/client'

export const useGetTasksApi = ({
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TBaseQueryParams = {}) => {
  const apiUrl = `/api/tasks`

  return useQuery<Prisma.TaskMinAggregateInputType[]>({
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

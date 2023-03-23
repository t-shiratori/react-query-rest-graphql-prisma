import { Prisma } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { TBaseQueryParams } from './type'

type TParams = { id?: string } & TBaseQueryParams

export const useTaskApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const apiUrl = `/api/tasks/${id}`

  return useQuery<Prisma.TaskMinAggregateInputType>({
    queryKey: ['tasks', id],
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

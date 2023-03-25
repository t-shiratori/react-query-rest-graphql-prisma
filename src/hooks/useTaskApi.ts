import { Prisma } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
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
  const url = `/api/tasks/${id}`

  return useQuery<Prisma.TaskMinAggregateInputType>({
    queryKey: ['tasks', id],
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

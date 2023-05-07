import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
import { TBaseQueryParams, TPhotosResponse } from './type'

type TParams = { albumId?: string } & TBaseQueryParams

export const useJsonplaceholderPhotosApi = ({
  albumId,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const url = `https://jsonplaceholder.typicode.com/photos/?albumId=${albumId}`

  return useQuery<TPhotosResponse>({
    queryKey: ['photos', albumId],
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

import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../utils/apiClient'
import { TAlbumResponse, TBaseQueryParams } from './type'

type TParams = { id?: string } & TBaseQueryParams

export const useJsonplaceholderAlbumApi = ({
  id,
  successHandler,
  errorHandler,
  settledHandler,
  enabled = true,
  staleTime,
  cacheTime,
}: TParams) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${id}`

  return useQuery<TAlbumResponse>({
    queryKey: ['albums', id],
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

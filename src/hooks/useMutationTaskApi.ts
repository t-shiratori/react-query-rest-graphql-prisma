import { useMutation } from '@tanstack/react-query'
import { Prisma } from '@prisma/client'
import { fetcher } from '../utils/apiClient'

export const useMutationTaskApi = () => {
  const url = `/api/task`

  const mutationKey = ['task', 'create']

  return useMutation<Prisma.TaskCreateInput, unknown, Prisma.TaskCreateInput, unknown>({
    mutationKey,
    mutationFn: (reqBody) => fetcher({ url, method: 'POST', body: reqBody })(),
  })
}

import { useMutation } from '@tanstack/react-query'
import { Prisma } from '@prisma/client'
import { fetcher } from '../utils/apiClient'

export const useMutationTaskApi = () => {
  const url = `/api/task`

  const mutationKey = ['posts']

  return useMutation<Prisma.TaskCreateInput, unknown, Prisma.TaskCreateInput, unknown>(mutationKey, async (reqBody) =>
    fetcher({ url, method: 'POST', body: reqBody })(),
  )
}

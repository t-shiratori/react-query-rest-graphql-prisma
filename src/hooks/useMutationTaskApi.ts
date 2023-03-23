import { useMutation } from '@tanstack/react-query'
import { Prisma } from '@prisma/client'

export const useMutationTaskApi = () => {
  const apiUrl = `/api/task`

  const mutationKey = ['posts']

  return useMutation<Prisma.TaskCreateInput, unknown, Prisma.TaskCreateInput, unknown>(mutationKey, async (reqBody) => {
    console.log('reqBody: ', reqBody)
    const response = await fetch(apiUrl, { method: 'POST', body: JSON.stringify(reqBody) })
    return response.json()
  })
}

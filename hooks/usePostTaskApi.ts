import { useMutation, useQuery } from '@tanstack/react-query'
import { TTask } from '../db/tasks'
import { TBaseMutationParams, TTodoResponse, TUserResponse } from './type'

type TParams = TBaseMutationParams

export const usePostTaskApi = () => {
	const apiUrl = `/api/task`

	const mutationKey = ['postTask']

	return useMutation<TTask, unknown, TTask, unknown>(mutationKey, async (reqBody) => {
		console.log('reqBody: ', reqBody)
		const response = await fetch(apiUrl, { method: 'POST', body: JSON.stringify(reqBody) })
		return response.json()
	})
}

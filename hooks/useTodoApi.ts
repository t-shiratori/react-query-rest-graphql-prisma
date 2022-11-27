import { useQuery } from '@tanstack/react-query'
import { TBaseParams, TTodoResponse, TUserResponse } from './type'

type TParams = { id: number } & TBaseParams

export const useTodoApi = ({ id, successHandler, errorHandler, settledHandler, enabled = false }: TParams) => {
	const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`

	return useQuery<TTodoResponse>({
		queryKey: ['todos', id],
		queryFn: async () => {
			const response = await fetch(apiUrl)
			return response.json()
		},
		enabled,
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

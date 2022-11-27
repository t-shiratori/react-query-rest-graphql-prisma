import { useQuery } from '@tanstack/react-query'
import { TBaseParams, TUserResponse } from './type'

type TParams = { id: number } & TBaseParams

export const useUserApi = ({ id, successHandler, errorHandler, settledHandler, enabled = true }: TParams) => {
	const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`

	return useQuery<TUserResponse>({
		queryKey: ['users', id],
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

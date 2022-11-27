import { useQuery } from '@tanstack/react-query'

type Options = {
	successHandler?: (data: unknown) => void
	errorHandler?: (data: unknown) => void
	settledHandler?: (data: unknown) => void
	enabled?: boolean
}

export const useApi = ({ successHandler, errorHandler, settledHandler, enabled = false }: Options = {}) => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
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

import { useQuery } from '@tanstack/react-query'

export const useHogeApi = () => {
	return useQuery(['todos'], async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		return response.json()
	})
}

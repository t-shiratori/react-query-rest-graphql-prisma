import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useApi } from '../hooks/useApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data } = useApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return <div>case1</div>
}

export default Page

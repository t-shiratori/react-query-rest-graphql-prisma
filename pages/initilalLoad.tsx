import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useApi } from '../hooks/useApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data } = useApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return <div>initilalLoad</div>
}

export default Page

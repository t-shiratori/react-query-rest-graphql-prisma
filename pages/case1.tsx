import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useApi } from '../hooks/useApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data, refetch } = useApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return (
		<Layout>
			<button onClick={() => refetch()}>button</button>
		</Layout>
	)
}

export default Page

import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useApi } from '../hooks/useApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data } = useApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return <Layout>initilalLoad</Layout>
}

export default Page

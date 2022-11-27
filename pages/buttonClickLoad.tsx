import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import { useTodoApi } from '../hooks/useTodoApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data, refetch } = useTodoApi({ id: 1 })

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return (
		<Layout>
			<div>
				<h1>結果</h1>
				<div>{}</div>
			</div>
			<button onClick={() => refetch()}>button</button>
		</Layout>
	)
}

export default Page

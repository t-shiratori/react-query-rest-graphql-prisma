import type { NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '../components/layout'
import { useTasksApi } from '../hooks/useTasksApi'
import { useTodoApi } from '../hooks/useTodoApi'

const Page: NextPage = () => {
	const { isFetched, isLoading, isSuccess, isError, data } = useTasksApi()

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return (
		<Layout>
			<div>
				<h1 className="mb-3">結果</h1>
				<div>
					<ul>
						{data?.map((item, i) => {
							return <li key={i}>{item.title}</li>
						})}
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default Page

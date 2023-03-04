import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Layout } from '../components/layout'
import { Select } from '../components/Select'
import { TextInput } from '../components/TextInput'
import { useTaskApi } from '../hooks/useTaskApi'

const Page: NextPage = () => {
	const [formValue, setFormValue] = useState<undefined | string>()
	const [requestId, setRequestIdId] = useState<undefined | string>()

	const { isFetched, isLoading, isSuccess, isError, data, refetch } = useTaskApi({
		id: requestId,
		enabled: !!requestId,
	})

	console.log({ isFetched, isLoading, isSuccess, isError, data })

	return (
		<Layout>
			<Select
				value={formValue}
				options={['1', '2', '3']}
				handleChange={(e) => {
					setFormValue(e.target.value)
				}}
			/>

			<TextInput
				className="mx-3"
				value={formValue ?? ''}
				handleChange={(e) => {
					setFormValue(e.target.value)
				}}
			/>

			<Button
				handleClick={() => {
					if (!formValue) return
					if (formValue == requestId) return refetch()
					setRequestIdId(formValue)
				}}
			/>

			<div className="mt-8">
				<h1 className="mb-3">結果</h1>
				<div>
					<p>{data?.title}</p>
				</div>
			</div>
		</Layout>
	)
}

export default Page

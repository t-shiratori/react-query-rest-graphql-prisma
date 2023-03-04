import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { Layout } from '../components/layout'
import { TextInput } from '../components/TextInput'
import { TTask } from '../db/tasks'
import { usePostTaskApi } from '../hooks/usePostTaskApi'
import { useTaskApi } from '../hooks/useTaskApi'

const Page: NextPage = () => {
	const [title, setTitle] = useState<string>()
	const [description, setDescription] = useState<string>()

	const { mutate } = usePostTaskApi()

	const requestBody: TTask = useMemo(() => {
		return {
			title,
			description: description ?? '',
		}
	}, [description, title])

	return (
		<Layout>
			<div className="mb-3">
				タイトル <TextInput value={title ?? ''} handleChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className="mb-3">
				説明 <TextInput value={description ?? ''} handleChange={(e) => setDescription(e.target.value)} />
			</div>

			<Button
				handleClick={() => {
					mutate(requestBody)
				}}
			/>
		</Layout>
	)
}

export default Page

import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../src/components/Button'
import { Layout } from '../src/components/layout'
import { TextInput } from '../src/components/TextInput'
import { TTask } from '../src/db/tasks'
import { usePostTaskApi } from '../src/hooks/usePostTaskApi'

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

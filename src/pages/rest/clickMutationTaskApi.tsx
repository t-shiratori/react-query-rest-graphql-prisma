import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { TextInput } from '../../components/TextInput'
import { Prisma } from '@prisma/client'
import { useMutationTaskApi } from '../../hooks/useMutationTaskApi'

const Page: NextPage = () => {
  const [title, setTitle] = useState<string>()
  const [content, setContetnt] = useState<string>()

  const { mutate } = useMutationTaskApi()

  const requestBody: Prisma.TaskCreateInput = useMemo(() => {
    return {
      title: title ?? '',
      content: content ?? '',
    }
  }, [content, title])

  return (
    <Layout>
      <div className="mb-3">
        タイトル <TextInput value={title ?? ''} handleChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        内容 <TextInput value={content ?? ''} handleChange={(e) => setContetnt(e.target.value)} />
      </div>

      <Button
        handleClick={() => {
          mutate(requestBody, {
            onSuccess: () => {
              setTitle('')
              setContetnt('')
            },
          })
        }}
      />
    </Layout>
  )
}

export default Page

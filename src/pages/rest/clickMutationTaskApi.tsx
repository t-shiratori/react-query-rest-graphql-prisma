import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { TextInput } from '../../components/TextInput'
import { Prisma } from '@prisma/client'
import { useMutationTaskApi } from '../../hooks/useMutationTaskApi'
import { Overview } from '../../components/Overview'

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
      <Overview>`mutation,`、 パラメーターを入力してボタンクリックで登録する</Overview>

      <div className="mb-3">
        タイトル <TextInput value={title ?? ''} handleChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        内容 <TextInput value={content ?? ''} handleChange={(e) => setContetnt(e.target.value)} />
      </div>

      <Button
        label={'登録する'}
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

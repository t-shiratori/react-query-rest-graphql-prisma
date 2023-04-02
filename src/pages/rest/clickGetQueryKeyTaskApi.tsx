import type { NextPage } from 'next'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { TextInput } from '../../components/TextInput'
import { useTaskApi } from '../../hooks/useTaskApi'

const Page: NextPage = () => {
  const [formValue, setFormValue] = useState<undefined | string>()
  const [requestId, setRequestId] = useState<undefined | string>()

  const { isFetched, isLoading, isSuccess, isError, data, refetch } = useTaskApi({
    id: requestId,
    enabled: !!requestId,
  })

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>`enabled: !!requestId,`、 パラメーターを入力してボタンクリックでロードする</Overview>

      <div className="flex">
        <div className="mb-2">
          id:
          <TextInput
            className="mx-3"
            value={formValue ?? ''}
            handleChange={(e) => {
              setFormValue(e.target.value)
            }}
          />
        </div>
        <Button
          handleClick={() => {
            if (!formValue) return
            if (formValue == requestId) return refetch()
            setRequestId(formValue)
          }}
        />
      </div>

      <div className="mt-8">
        <h1 className="mb-3">結果</h1>
        <div>
          <p>title: {data?.title}</p>
          <p>content: {data?.content}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Page

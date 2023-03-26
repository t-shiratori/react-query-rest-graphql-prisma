import { Prisma } from '@prisma/client'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { TextInput } from '../../components/TextInput'
import { useGetUserApi } from '../../hooks/graphQL/useGetUserApi'

const Page: NextPage = () => {
  const [id, setId] = useState<string>()
  const [requestId, setRequestId] = useState<string>()

  const { data } = useGetUserApi({ id: requestId })

  return (
    <Layout>
      <Overview>GraphQL: パラメーターを入力してボタンクリックでロードする</Overview>

      <div className="mb-3">
        ID <TextInput value={id ?? ''} handleChange={(e) => setId(e.target.value)} />
      </div>

      <Button
        label={'ロードする'}
        handleClick={() => {
          setRequestId(id)
        }}
      />

      <div className="mt-6">
        <h1 className="mb-3">結果</h1>
        <div>ID: {data?.jsonplaceholderUser.id}</div>
        <div>名前: {data?.jsonplaceholderUser.name}</div>
        <div>email: {data?.jsonplaceholderUser.email}</div>
      </div>
    </Layout>
  )
}

export default Page

import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { useJsonplaceholderUserApi } from '../../hooks/useJsonplaceholderUserApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data } = useJsonplaceholderUserApi({ id: 1 })

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>表示時に個別データをロードする</Overview>
      <div>
        <h1 className="mb-3">結果</h1>
        <p>id: {data?.id}</p>
        <p>name: {data?.name}</p>
        <p>email: {data?.email}</p>
      </div>
    </Layout>
  )
}

export default Page

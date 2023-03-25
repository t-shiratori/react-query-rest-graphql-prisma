import type { NextPage } from 'next'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { useJsonplaceholderUserApi } from '../../hooks/useJsonplaceholderUserApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data, refetch } = useJsonplaceholderUserApi({
    id: 1,
    enabled: false,
  })

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>`enabled: false`、 ボタンクリックでロードする</Overview>

      <Button label={'load'} handleClick={() => refetch()} />

      <div className="mt-3">
        <h1 className="mb-3">結果</h1>
        <p>id: {data?.id}</p>
        <p>name: {data?.name}</p>
        <p>email: {data?.email}</p>
      </div>
    </Layout>
  )
}

export default Page

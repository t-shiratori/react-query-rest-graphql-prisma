import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { useGetTasksApi } from '../../hooks/useGetTasksApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data } = useGetTasksApi()

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>表示時に一覧データをロードする</Overview>
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

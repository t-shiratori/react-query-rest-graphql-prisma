import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { useGetUsersApi } from '../../hooks/graphQL/useGetUsersApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data } = useGetUsersApi()

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>GraphQL: 表示時に一覧データをロードする</Overview>
      <div>
        <h1 className="mb-3">結果</h1>
        <div>
          <ul>
            {data?.jsonplaceholderUsers.map((item, i) => {
              return <li key={i}>{item.name}</li>
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Page

import type { NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { useQueryUsersApi } from '../../hooks/graphQL/useQueryUsersApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data } = useQueryUsersApi()

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Overview>GraphQLで表示時に一覧データをロードする</Overview>
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

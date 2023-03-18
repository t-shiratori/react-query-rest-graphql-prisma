import type { NextPage } from 'next'
import { Layout } from '../../src/components/layout'
import { useUserApi } from '../../src/hooks/useUserApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data } = useUserApi({ id: 1 })

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return <Layout>initilalLoad</Layout>
}

export default Page

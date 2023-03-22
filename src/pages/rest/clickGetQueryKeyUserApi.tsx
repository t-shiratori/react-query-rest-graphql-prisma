import type { NextPage } from 'next'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { useUserApi } from '../../hooks/useUserApi'

const Page: NextPage = () => {
  const { isFetched, isLoading, isSuccess, isError, data, refetch } = useUserApi({ id: 1, enabled: false })

  console.log({ isFetched, isLoading, isSuccess, isError, data })

  return (
    <Layout>
      <Button handleClick={() => refetch()} />
    </Layout>
  )
}

export default Page

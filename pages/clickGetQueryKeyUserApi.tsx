import type { NextPage } from 'next'
import { Button } from '../src/components/Button'
import { Layout } from '../src/components/layout'
import { useUserApi } from '../src/hooks/useUserApi'

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

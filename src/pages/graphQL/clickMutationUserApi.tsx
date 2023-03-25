import { Prisma } from '@prisma/client'
import type { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { TextInput } from '../../components/TextInput'
import { useMutationUserApi } from '../../hooks/graphQL/useMutationUserApi'

const Page: NextPage = () => {
  const { mutate } = useMutationUserApi()

  const [name, setTitle] = useState<string>()
  const [mail, setMail] = useState<string>()

  const requestBody: Prisma.UserCreateManyInput = useMemo(() => {
    return {
      name: name ?? '',
      email: mail ?? '',
    }
  }, [mail, name])

  return (
    <Layout>
      <Overview>`mutation,`、 パラメーターを入力してボタンクリックで登録する</Overview>

      <div className="mb-3">
        名前 <TextInput className={'w-40'} value={name ?? ''} handleChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        メール <TextInput className={'w-40'} value={mail ?? ''} handleChange={(e) => setMail(e.target.value)} />
      </div>

      <Button
        label={'登録する'}
        handleClick={() => {
          mutate(requestBody, {
            onSuccess: () => {
              setTitle('')
              setMail('')
            },
          })
        }}
      />
    </Layout>
  )
}

export default Page

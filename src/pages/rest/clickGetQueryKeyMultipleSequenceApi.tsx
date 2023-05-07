import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Layout } from '../../components/layout'
import { Overview } from '../../components/Overview'
import { TextInput } from '../../components/TextInput'
import { useJsonplaceholderTodoApi } from '../../hooks/useJsonplaceholderTodoApi'
import { useJsonplaceholderUserApi } from '../../hooks/useJsonplaceholderUserApi'
import { useJsonplaceholderAlbumApi } from '../../hooks/useJsonplaceholderAlbumApi'
import { useJsonplaceholderPhotosApi } from '../../hooks/useJsonplaceholderPhotosApi'

const Page: NextPage = () => {
  const [formAlbumIdValue, setFormAlbumIdValue] = useState<undefined | string>()
  const [requestAlbumId, setRequestAlbumId] = useState<undefined | string>()

  console.log({ requestAlbumId })

  const {
    isFetched: albumAPiFeched,
    isSuccess: albumAPiIsSuccess,
    isError: albumAPiError,
    data: albumAPiData,
    refetch: albumApiRefetch,
  } = useJsonplaceholderAlbumApi({
    id: requestAlbumId,
    enabled: !!requestAlbumId,
  })

  const {
    isFetched: photosAPiFeched,
    isSuccess: photosAPiIsSuccess,
    isError: photosAPiError,
    data: photosAPiData,
    refetch: userApiRefetch,
  } = useJsonplaceholderPhotosApi({
    albumId: String(albumAPiData?.id),
    enabled: albumAPiIsSuccess,
  })

  useEffect(() => {
    if (photosAPiIsSuccess) {
      setFormAlbumIdValue(undefined)
    }
  }, [photosAPiIsSuccess])

  console.log({ albumAPiFeched, albumAPiIsSuccess, albumAPiError, albumAPiData })
  console.log({ photosAPiFeched, photosAPiIsSuccess, photosAPiError, photosAPiData })

  return (
    <Layout>
      <Overview>`enabled: !!requestAlbumId,`、 パラメーターを入力してボタンクリックでロードする</Overview>

      <div className="flex">
        <div className="mb-2">
          id:
          <TextInput
            className="mx-3"
            value={formAlbumIdValue ?? ''}
            handleChange={(e) => {
              setFormAlbumIdValue(e.target.value)
            }}
          />
        </div>

        <Button
          handleClick={() => {
            if (formAlbumIdValue == requestAlbumId) return albumApiRefetch()
            setRequestAlbumId(formAlbumIdValue)
          }}
        />
      </div>

      <div className="mt-8">
        <h1 className="mb-3">todo 結果</h1>
        <div>
          <p>albumId: {albumAPiData?.id}</p>
          <p>title: {albumAPiData?.title}</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="mb-3">user 結果</h1>
        {photosAPiData?.map((photo) => {
          return (
            <div className="mb-2" key={photo?.url}>
              <p>url: {photo?.url}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Page

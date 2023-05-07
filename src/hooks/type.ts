export type TBaseQueryParams = {
  queryKey?: string[]
  successHandler?: (data: unknown) => void
  errorHandler?: (data: unknown) => void
  settledHandler?: (data: unknown) => void
  enabled?: boolean
  staleTime?: number
  cacheTime?: number
}

export type TBaseMutationParams = {
  mutationKey?: string[]
  reqBody: unknown
  successHandler?: (data: unknown) => void
  errorHandler?: (data: unknown) => void
  settledHandler?: (data: unknown) => void
}

export type TUserResponse = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type TTodoResponse = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TAlbumResponse = {
  userId: number
  id: number
  title: string
}

export type TAlbumsResponse = TAlbumResponse[]

export type TPhotoResponse = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type TPhotosResponse = TPhotoResponse[]

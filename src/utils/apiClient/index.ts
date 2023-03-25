type TArgs = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: object
}

export const fetcher =
  ({ url, method, body }: TArgs) =>
  async () => {
    const response = await fetch(url, { method, body: JSON.stringify(body) })
    return response.json()
  }

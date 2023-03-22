import { RESTDataSource } from '@apollo/datasource-rest'

export class JsonplaceholderUserApi extends RESTDataSource {
  override baseURL = 'https://jsonplaceholder.typicode.com/'

  async getUsers() {
    return this.get('users')
  }

  async getUser(id: string) {
    return this.get(`users/${id}`)
  }
}

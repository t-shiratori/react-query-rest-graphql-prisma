const users = [
  { id: '1', name: 'John Doe', email: 'john@test.com' },
  { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
]

export const resolvers = {
  Query: {
    hello: () => 'Hello World',
    users: () => users,
  },
}

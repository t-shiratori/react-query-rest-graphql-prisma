export type TTask = {
  id?: string
  title?: string
  description: string
  createAt?: string
  updateAt?: string
}

export type TTasks = TTask[]

const TASKS: TTasks = [
  {
    id: '1',
    title: 'task1',
    description: 'aaaaaaaaaaaaaaa',
    createAt: '2022-10-18T15:43:12+09:00',
    updateAt: '2022-10-19T16:00:12+09:00',
  },
  {
    id: '2',
    title: 'task2',
    description: 'bbbbbbbbbbbbbbbb',
    createAt: '2022-11-01T15:43:12+09:00',
    updateAt: '2022-11-02T16:00:12+09:00',
  },
  {
    id: '3',
    title: 'task3',
    description: 'cccccccccccccccccc',
    createAt: '2023-02-18T15:43:12+09:00',
    updateAt: '2023-02-19T17:00:12+09:00',
  },
]

export const addTask = (task: TTask) => {
  TASKS.push(task)
}

export const getTasks = () => TASKS

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TError } from '../../../type'
import { TTask, getTasks } from '../../../db/tasks'

export default function handler(req: NextApiRequest, res: NextApiResponse<TTask | TError>) {
  const { id } = req.query
  const tasks = getTasks()
  const task = tasks.find((task) => task.id === id)

  if (task) return res.status(200).json(task)
  return res.status(404).json({ error: { message: 'タスクが見つかりません' } })
}

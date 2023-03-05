// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addTask, getTasks, TTask, TTasks } from '../../src/db/tasks'
import { TError } from '../../src/type'

export default function handler(req: NextApiRequest, res: NextApiResponse<TTask | TError>) {
  if (req.method === 'POST') {
    const parsedData = JSON.parse(req.body)
    addTask(parsedData)
    res.status(200).json(parsedData)
  } else {
    res.status(500).json({ error: { message: 'タスクが登録できませんでした' } })
  }
}

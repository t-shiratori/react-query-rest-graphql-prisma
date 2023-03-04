// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getTasks, TTasks } from '../../../db/tasks'

export default function handler(req: NextApiRequest, res: NextApiResponse<TTasks>) {
	const respose = getTasks()
	res.status(200).json(respose)
}

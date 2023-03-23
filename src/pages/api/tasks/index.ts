// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ;(async () => {
    const result = await prisma.task.findMany().catch(() => res.statusCode)
    res.status(200).json(result)
  })()
}

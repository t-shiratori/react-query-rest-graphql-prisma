// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const parsedData = JSON.parse(req.body)
    ;(async () => {
      const result = await prisma.task
        .create({
          data: parsedData,
        })
        .catch(() => res.statusCode)
      res.status(200).json(result)
    })()
  } else {
    res.status(500).json({ error: { message: 'error' } })
  }
}

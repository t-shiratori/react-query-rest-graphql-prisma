// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (id == undefined) {
    res.status(401).json({ error: { message: 'リクエストが不正です' } })
    return
  }

  if (Array.isArray(id)) {
    res.status(401).json({ error: { message: 'リクエストが不正です' } })
    return
  }

  ;(async () => {
    const result = await prisma.task
      .findMany({
        where: {
          id: Number(id),
        },
      })
      .catch(() => res.statusCode)

    console.log('result: ', result)

    if (result === 200) {
      res.status(404).json({ error: { message: '見つかりませんでした' } })
      return
    }

    res.status(200).json(result)
  })()
}

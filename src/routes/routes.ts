import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    success: true
  })
})

export const routes = router

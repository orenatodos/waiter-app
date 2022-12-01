import path from 'node:path'

import express from 'express'
import moongose from 'mongoose'

import { router } from './router'

moongose.connect(
  'mongodb+srv://rrdos:senhamoral@cluster0.e2z9xev.mongodb.net/test'
)
  .then(() => {
    const app = express()
    const PORT = 3001

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch(() => console.log('Erro ao conectar no mongodb'))

import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { Person } from './model.js'
import { apiPort, dbUri } from '../config.js'

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error(
      `Error connecting to MongoDB. You might do: \n
      brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb/brew/mongodb-community \n
      If it's running, the command mongod should work.`,
      err.message
    )
  })

express()
  .use(cors())
  .get('/people', async (_, res) => {
    try {
      const people = await Person.find()
      console.log(people)
      res.json(people)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  })
  .listen(apiPort, () => {
    console.log(`Server listening on port ${apiPort}`)
  })

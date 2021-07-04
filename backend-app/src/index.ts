import express from 'express'

import morgan from 'morgan'
import cors from 'cors'

import test from './v1/routes/routes1'

// *** load environment variables *** //
require('dotenv').config()

const init = app => {
  const port = 4000
  const {pid} = process

  // *** app middleware *** //
  if (process.env.NODE_ENV !== 'production') {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(morgan('dev'))
    app.use(
      cors({
        origin: `https://www.localhost:${port}.com`,
        methods: 'PUT, POST, PATCH, DELETE, GET',
        allowedHeaders: '*',
      }),
    )
    app.use(test)
    app.listen(port, () => {
      console.log(
        `Your app is now running on port ${port} under the process ${pid}`,
      )
    })
  } else {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use(
      cors({
        origin: '*',
        methods: 'PUT, POST, PATCH, DELETE, GET',
        allowedHeaders: '*',
      }),
    )
    app.listen(4000, () => {
      console.log(
        `Your app is now running on port ${port} under the process ${pid}`,
      )
    })
  }
}

export default init

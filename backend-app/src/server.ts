import os from 'os'
import cluster from 'cluster'

import express from 'express'
import morgan from 'morgan'

import init from './index'

if (cluster.isMaster) {
  const n_cpus = process.env.node_env === 'production' ? os.cpus().length : 1
  for (let i = 0; i < n_cpus; i++) {
    cluster.fork()
  }
} else {
  //init
  const app = express()
  init(app)
}

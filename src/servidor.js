import express from 'express'
import { crearRouterRecordatorios } from './RouterRecordatorios.js'

function crearServidor() {
  const app = express()
  
  app.use(express.json())
  app.use('/recordatorios', crearRouterRecordatorios())
  
  let server = null
  
  return {
    conectar: (port) => {
      return new Promise((resolve, reject) => {
        if (server) {
          reject(new Error('servidor ya conectado'))
        } else {
          server = app.listen(port, () => {
            console.log(`todo bien, conectado en puerto ${server.address().port}`)
            resolve()
          })
          server.on('error', (err) => {
            reject(err)
          })
        }
      })
    },
    desconectar: () => {
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            reject(err)
          } else {
            server = null
            resolve()
          }
        })
      })
    }
  }
}

export { crearServidor }
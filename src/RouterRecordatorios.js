import express from 'express'
import crearFactoryCU from './FactoryEnviarRecordReservas.js'

function crearRouterRecordatorios() {
  const router = express.Router()
  const factoryCU = crearFactoryCU()
  
  router.post('/', async (req, res) => {
    const CU_EnviarRecordatorios = factoryCU.crearCU()
    await CU_EnviarRecordatorios.ejecutar(req.body)
    res.status(201).json({ message: 'mails enviados a los usuarios' })
  })

  return router
}

export { crearRouterRecordatorios }
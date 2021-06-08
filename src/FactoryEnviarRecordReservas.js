import { crearEnviadorDeMails } from './modulos/crearEnviadorDeMails.js'
import { crearCUEnviarRecordatorios } from './EnviarRecordatoriosReservas.js'
import { crearDaoReservas } from './persistencia/DaoReservas.js'
import { crearDaoUsuarios } from './persistencia/DaoUsuarios.js'
import { getCredencialesMail } from './CredencialesMail.js'
import TiposMail from './EnumTiposMail.js'

function crearFactoryEnvioRecord() {
  const credencialesMail = getCredencialesMail(TiposMail.SOCIOS)
  const enviadorMails = crearEnviadorDeMails(credencialesMail.mail, credencialesMail.password)
  const daoReservas = crearDaoReservas()
  const daoUsuarios = crearDaoUsuarios()
  
  return {
    crearCU () {
      return crearCUEnviarRecordatorios(enviadorMails, daoReservas, daoUsuarios)
    }
  }
}

export default crearFactoryEnvioRecord
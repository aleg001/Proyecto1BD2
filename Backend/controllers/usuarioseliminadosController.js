import UsuarioEliminadoModel from '../models/UsuariosEliminados.js'
import UsuarioModel from '../models/Usuarios.js'

class UsuarioEliminadoController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await UsuarioEliminadoModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
  static create = async (req, res) => {
    try {
      const { email } = req.body
      const existingUser = await UsuarioModel.findOne({ email })
      if (existingUser) {
        const { motivo } = req.body
        const usuario = new UsuarioEliminadoModel({ email, motivo })
        await usuario.save()
        res.status(201).send({ message: 'Descripcion generada con éxito' })
      } else {
        return res
          .status(400)
          .send({ message: 'El correo electrónico no existe' })
      }
    } catch (error) {
      res.status(400).send({ message: 'Error al crear la descripcion', error })
    }
  }
}

export default UsuarioEliminadoController

import UsuarioModel from '../models/Usuarios.js'

class UsuarioController {
    static getAllDocc = async (req,res) => {
        try {
            const result = await UsuarioModel.find()
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
            return res.status(400).send({ message: 'El correo electrónico ya está registrado' })
          }
          const { username, nombre, apellido, password, playlists } = req.body
          const usuario = new UsuarioModel({ username, nombre, apellido, email, password, playlists })
          await usuario.save()
          res.status(201).send({ message: 'Usuario creado con éxito' })
        } catch (error) {
          res.status(400).send({ message: 'Error al crear el usuario', error })
        }
      }
}

export default UsuarioController


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

      static update = async (req, res) => {
        try {
          const { username, nombre, apellido,email, password } = req.body
          const updatedUsuario = await UsuarioModel.findOneAndUpdate({ email }, { username, nombre, apellido, password }, { new: true })
          if (!updatedUsuario) {
            res.status(404).send({ message: 'No se encontró el usuario con el correo especificado' })
          } else {
            res.send({ message: 'Usuario actualizado con éxito', updatedUsuario })
          }
        } catch (error) {
          res.status(400).send({ message: 'Error al actualizar el usuario', error })
        }
      }

      static delete = async (req, res) => {
        const { email } = req.body
        try {
          const usuario = await UsuarioModel.findOneAndDelete({ email });
          res.status(200).send({
            message: "Usuario eliminado con éxito",
            usuario,
          });
        } catch (error) {
          res.status(500).send({
            message: "Error al eliminar usuario",
            error,
          });
        }
      }

}

export default UsuarioController


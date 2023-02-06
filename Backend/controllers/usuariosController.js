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
}

export default UsuarioController


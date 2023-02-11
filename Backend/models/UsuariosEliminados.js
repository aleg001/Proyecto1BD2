import mongoose from 'mongoose'

const UsuarioEliminadoSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    motivo: { type: String, required: false, trim: true },
  },
  { versionKey: false }
)

const UsuarioEliminadoModel = mongoose.model(
  'usuarioseliminados',
  UsuarioEliminadoSchema
)

export default UsuarioEliminadoModel

import mongoose from 'mongoose'

const MusicSchema = new mongoose.Schema({
  Username: { type: String, required: true, trim: true },
  Nombre: { type: String, required: true, trim: true },
  Apellido: { type: String, required: true, trim: true },
  Email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  Playlist: { type: Object, required: true, trim: true },
})

const MusicModel = mongoose.model('music', MusicSchema)

export default MusicModel

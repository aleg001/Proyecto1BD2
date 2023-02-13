import mongoose from 'mongoose'

const MusicSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  year: { type: String, required: true, trim: true },
})

const MusicModel = mongoose.model('music', MusicSchema)

export default MusicModel
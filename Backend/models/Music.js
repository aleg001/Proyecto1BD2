import mongoose from 'mongoose'

const MusicSchema = new mongoose.Schema({
  artist: { type: Object, required: true, trim: true },
  release: { type: Object, required: true, trim: true },
  song: { type: Object, required: true, trim: true },
})

const MusicModel = mongoose.model('music', MusicSchema)

export default MusicModel
import mongoose from 'mongoose'

const PlaylistSchema = new mongoose.Schema({
  user_id: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  playlist_songs: { type: Array, required: true, trim: true },
  createdDate: { type: String, required: true },
},{ versionKey: false })

const PlaylistModel = mongoose.model('playlists', PlaylistSchema)

export default PlaylistModel
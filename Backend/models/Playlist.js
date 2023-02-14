import mongoose from 'mongoose'

const PlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  playlist_songs: { type: Array, required: true, trim: true },
},{ versionKey: false })

const PlaylistModel = mongoose.model('playlists', PlaylistSchema)

export default PlaylistModel
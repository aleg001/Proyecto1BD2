import PlaylistModel from '../models/Playlist.js'

class PlaylistController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await PlaylistModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }

  static find = async (req, res) => {
    const query = req.body
    try {
      const docs = await PlaylistModel.find(query)
      res.json(docs)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  static create = async (req, res) => {
    try {
      const {user_id, title, description, playlist_songs,createdDate} = req.body
      const playlist = new PlaylistModel({
        user_id,
        title,
        description,
        playlist_songs,
        createdDate,
      })
      await playlist.save()
      res.status(201).send({ message: 'playlist creado con éxito' })
    } catch (error) {
      res.status(400).send({ message: 'Error al crear el playlist', error })
    }
  }

}

export default PlaylistController

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
      const docs = await PlaylistModel.find(query).limit(10)
      res.json(docs)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  static create = async (req, res) => {
    try {
      const { title, descripcion, canciones} = req.body
      const playlist = new PlaylistModel({
        title,
        descripcion,
        canciones,
      })
      await playlist.save()
      res.status(201).send({ message: 'playlist creado con éxito' })
    } catch (error) {
      res.status(400).send({ message: 'Error al crear el playlist', error })
    }
  }

}

export default PlaylistController

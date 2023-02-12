import MusicModel from '../models/Music.js'

class MusicController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await MusicModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }

  static read = async (req, res) => {
    try {
      const { name_artist } = req.body
      const existing_song = await MusicModel.find({
        $or: [
           { "artist.name": { $regex: name_artist } },
           { "song.title": { $regex: name_artist } }
        ]
     })
      if (existing_song) {
        return res
          .existing_song
      }
    } catch (error) {
      res.status(400).send({ message: 'No existe la canción', error })
    }
  }

}

export default MusicController

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
      const existing_song = await MusicModel.findOne({ name_artist })
      if (existingUser) {
        return res
          .status(400)
          .send({ message: 'Music' })
      }
    } catch (error) {
      res.status(400).send({ message: 'Error', error })
    }
  }

}

export default MusicController

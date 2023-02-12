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
      const name = req.query.name;
      const results = await MusicController.find({ $or: [
        { 'artist.name': { $regex: name, $options: 'i' } },
        { 'song.title': { $regex: name, $options: 'i' } }
      ] });
      res.send(results);
    } catch (error) {
      res.status(400).send({ message: 'No se encuentra', error })
    }
  }

}

export default MusicController

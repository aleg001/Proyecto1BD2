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

  static find = async (req, res) => {
    const query = req.body
    try {
      const docs = await MusicModel.find(query).limit(10)
      res.json(docs)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

  static findStatistics1 = async (req, res) => {
    try {
      const docs = await MusicModel.aggregate([
        {
          $group: {
            _id: "$artist",
            popularidad: { $sum: "$Popularity- The higher the value the more popular the song is" }
          }
        },
        {
          $sort: { popularidad: -1 }
        },
        {
          $limit: 10
        }
      ])
      res.json(docs)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }

}

export default MusicController

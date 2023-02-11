import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: 'Proyecto1',
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('Connected Succesfully')
  } catch (err) {
    console.log(err)
  }
}

export default connectDB

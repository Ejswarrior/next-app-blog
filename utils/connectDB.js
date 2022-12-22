import mongoose from 'mongoose'
import { config } from 'dotenv'
const connectDB = async () => {
await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
}


export default connectDB
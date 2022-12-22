import {Schema, model, models} from 'mongoose'

const postSchema = new Schema({
firstName:{ type: String, required: true},
blog:{ type: String, required: true},
})

const Posts = models.Posts || model('Posts', postSchema)

export default Posts
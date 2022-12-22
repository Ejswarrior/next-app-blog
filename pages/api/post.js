import connectDB from "../../utils/connectDB";
import Posts from "../../models/blog";

export default async function blogPost(req, res){
    if(req.method === 'POST'){
    await connectDB();
    const blogs = await Posts.create(req.body)
    res.json({blogs})
    }
    else{
        await connectDB();
        const foundPosts = await Posts.find()
        res.json({foundPosts})
    }
}
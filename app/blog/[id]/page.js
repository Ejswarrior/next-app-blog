import connectDB from "../../../utils/connectDB";
import Posts from "../../../models/blog";

export default async function userPost({params}) {

    async function findPost() {
        await connectDB();
        const foundPosts = await Posts.findById(params.id)
        return foundPosts
    }
    const data = await findPost()
return(
        <div>
            <h1>{data.firstName}'s blog</h1>
            <p>{data.blog}</p>
        </div>
    )
}

import { Inter } from '@next/font/google'
import Blog from './blog/page'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const getPosts = async() => {
  const results = await fetch('http://localhost:3000/api/post', {next: { revalidate: 60}})

  return results.json()
}


export default async function Home() {
  const data = await getPosts()
  return (
   <div>
        <h1>Welcome to Eriks blog</h1>
        <Blog/>
          <div>
          {data.foundPosts.map((posts) => {
            return(
            <>
            <h3>Posted by {posts.firstName}</h3>
            <Link href={`/blog/${posts._id}`}>Link To Blog</Link>
            <p>{posts.blog}</p>
            </>
            )
          })}
          </div>
    
   </div>
  )
}
  
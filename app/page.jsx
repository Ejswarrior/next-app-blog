import Blog from './blog/page'
import Link from 'next/link'
import styles from './page.module.scss'


const getPosts = async() => {
  const results = await fetch('http://localhost:3000/api/post', {next: { revalidate: 60}})

  return results.json()
}


export default async function Home() {
  const data = await getPosts()
  return (
   <div className={styles.div} >
        <h1 className={styles.title}>Welcome to Erik's blog</h1>
          <Blog/>
            <div className={styles.create}>
              {data.foundPosts.map((posts) => {
                return(
                  <div className={styles.posts}>
                  <h3>Posted by {posts.firstName}</h3>
                  <h4>Date Posted: {posts.date}</h4>
                  <Link href={`/blog/${posts._id}`}>Link To Blog</Link>
                  <p>{posts.blog}</p>
                  </div>
                )
              })}
            </div>
  </div>
  )
}
  
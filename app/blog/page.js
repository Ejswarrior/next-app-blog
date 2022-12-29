'use client';

import { useState } from "react";

export default function Blog() {
    const [name, setName] = useState('')
    const [blog, setBlog] = useState('')
    

    const blogPost = async() => {
        await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: name,
                blog: blog
            }),
        })
        
        setName('')
        setBlog('')
        }

    return (
        <div>
            <h1>Create a New Blog</h1>
            <form onSubmit={blogPost}>
                <label>Name</label>
                <input placeholder="firstName" value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
                <label>Blog</label>
                <input placeholder="blog" value={blog} type='text' onChange={(e) => setBlog(e.target.value)}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
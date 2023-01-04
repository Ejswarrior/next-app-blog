'use client';

import { useState } from "react";
import styles from '../page.module.scss'

export default function Blog() {
    const [name, setName] = useState('')
    const [blog, setBlog] = useState('')
    const [date, setDate] = useState('')
    const day = new Date()
    console.log(date)

    
    const blogPost = async() => {
        setDate(`${day.getMonth()}-${day.getDate()}-${day.getFullYear()}`)
        await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: name,
                blog: blog,
                date: date
            }),
        })
        
        setName('')
        setBlog('')
        
        }

    return (
        <div className={styles.create}>
            <h1>Create a New Blog</h1>
            <form onSubmit={blogPost}>
                <input placeholder="Name" value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
                <input placeholder="Blog" value={blog} type='text' onChange={(e) => setBlog(e.target.value)}></input>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
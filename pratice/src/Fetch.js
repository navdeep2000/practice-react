import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
    const [post, setPost] = useState([])
    

    console.log(post)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])
  return (
    <div>
    <ul>
        {post.map(post => (
            <>
                <li>{post.body}</li>
            <p key={post.id}>{post.title}</p>
            <br></br>
            

            </>
             

        ))}
    </ul>

    </div>
  )
}

export default Fetch
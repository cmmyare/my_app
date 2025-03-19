import React from 'react'
import Link from 'next/link'
const postPage = async() => {
    const post = await fetch(`http://localhost:3000/api/post`, { cache: "no-store" });
    const postInfo = await post.json()
  return (
    <div>
        {postInfo.map((post) => (
        <div key={post.id}>
          <h2 className="text-xl mt-4">{post.title}</h2>
         <Link href={`posts/${post.id}`} >{post.body}</Link>
        </div>
      ))}
    </div>
  )
}

export default postPage

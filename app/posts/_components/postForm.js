"use client";
import React from 'react'
import {useRouter} from 'next/navigation';
const PostForm =({postInfo}) => {
 const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const data = {
            title: formData.get('title'),
            body: formData.get('body')
        }
        let response;
        if(postInfo){
          response = await fetch(`http://localhost:3000/api/post/${postInfo.id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
        }else{
          response = await fetch('http://localhost:3000/api/post', {
              method: 'POST',
              body: JSON.stringify(data)
          })
        }
        if(response.ok){
            console.log('Post created successfullly');
            router.push('/posts');
            router.refresh();
    }else{
        console.error('Post creation failed');
    }
    }
  return (
    <div>
      <div className='container mx-auto p-4'>
<form className='max-w-md mx-auto' onSubmit={handleSubmit}>
<div className="mb-4">
  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
    Title
  </label>
  <input
    type="text"
    id="title"
    name="title"
     defaultValue={postInfo?.title}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    required
  />
</div>
<div className="mb-6">
  <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
    Body
  </label>
  <textarea
    id="body"
    name="body"
    defaultValue={postInfo?.body}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    required
  />
</div>
<button
  type="submit"
  className="bg-rose-500 hover:bg-rose-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
>
  {postInfo ? "Update Post" : "Register"}
</button>

</form>
      </div>
    </div>
  )
}

export default PostForm

"use client";
import React from 'react'
import {useRouter} from 'next/navigation';

const DeleteButton = ({id}) => {
    const router = useRouter();
    const handleDelte = async (id) => {
        if(!confirm('Are you sure you want to delete this post?'))  return;
       
        const response = await fetch(`http://localhost:3000/api/post/${id}`, {
        cache: 'no-cache',
        method: 'DELETE'
        })
        if(response.ok){
        console.log('Post deleted successfully');
        router.push('/posts');
        router.refresh();
        }else{
        console.error('Post deletion failed');
        }
    }
  return (
    <div>
      <button onClick={() => handleDelte(id)}
       className='text-rose-600 hover:text-rose-900'>delete</button>
    </div>
  )
}

export default DeleteButton

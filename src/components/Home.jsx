import React, { useContext } from 'react'
import PostCard from './PostCard'
import { PostsStore } from '../Store/PostsStore'
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const {posts}=useContext(PostsStore);
  return (
    <div className='flex flex-wrap items-center justify-center'>
    <ToastContainer/>
    {posts.length==0?<p className='flex text-white text-5xl content-center items-center h-screen'>No posts</p>:posts.map((item)=>{
     return <PostCard item={item} key={item.id}/>
    })}
    </div>
  )
}

export default Home

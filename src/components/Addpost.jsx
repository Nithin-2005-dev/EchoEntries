import React, { useContext, useRef, useState } from 'react'
import { PostsStore } from '../Store/PostsStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addpost = () => {
    const title=useRef();
    const description=useRef();
    const hashTags=useRef();
    const {addPost}=useContext(PostsStore);
  return (
    <>
    <ToastContainer/>
    <div className='flex flex-col mx-6 my-7 text-lg content-center'>
    <h3 className='text-center text-3xl md:text-4xl'>Create Blog</h3>
    <label htmlFor="blog-title">Blog Title</label>
      <input type="text" className='bg-slate-100 h-10 p-4 rounded-xl' placeholder='enter blog title' ref={title}/>
      <label htmlFor="blog-desc" >Description</label>
      <textarea type="text" className='bg-slate-100 p-4 rounded-xl' ref={description}/>
      <label htmlFor="blog-tags">Hastags</label>
      <input type="text" className='bg-slate-100 p-4 rounded-xl' placeholder='enter hash tags with spaces'ref={hashTags}/>
      <button className='self-start mx-4 my-5 bg-green-600 text-xl p-2 rounded-xl hover:bg-green-700 text-gray-50 font-bold' onClick={()=>{
        addPost(title.current.value,description.current.value,hashTags.current.value)
      title.current.value=""
      description.current.value=""
      hashTags.current.value=""
      }}>Submit Blog</button>
    </div>
    </>
  )
}

export default Addpost

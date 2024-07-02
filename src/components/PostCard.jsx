import React, { useContext } from 'react'
import { PostsStore } from '../Store/PostsStore'
const PostCard = ({item}) => {
    const {deletePost}=useContext(PostsStore)
  return (
    <div className='flex flex-col flex-wrap rounded-lg m-3 float-right md:w-1/3 border-slate-300 border-2 shadow-md content-center justify-center items-center ' style={{width:"45%",backgroundColor:"#7776B3",boxShadow:"0.2rem 0.2rem 0.5rem #E2BBE9",minHeight:"50vh", maxHeight:"50vh"}}>
      <div className='text-center font-bold p-1 text-xl text-white  m-2' style={{minWidth:"90%"}}>{item.title}</div>
      <div className='font-mono text-left p-5 font-extralight text-orange-200 border m-2' style={{minWidth:"90%"}}>{item.description}</div>
      <div className='flex flex-row m-3'>
    {item.tags.split(" ").map((tag)=>{
        return <span className='bg-orange-500 inline-block rounded-md px-3 text-white mx-1'>{tag}</span>
    })}
    </div>
    <button className='self-start m-2 bg-red-500 rounded-lg p-1' onClick={()=>{deletePost(item.id)}}>Delete</button>
    </div>
  )
}

export default PostCard

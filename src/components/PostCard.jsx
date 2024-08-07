import React, { useContext } from 'react'
import { PostsStore } from '../Store/PostsStore'
const PostCard = ({item}) => {
    console.log(item)
    const {deletePost}=useContext(PostsStore)
  return (
    <div className='flex flex-col w-1/2 flex-wrap rounded-lg m-3 float-right  border-slate-400 border-2 shadow-md content-center justify-center items-center ' style={{backgroundColor:"#7776B3",boxShadow:"0.2rem 0.2rem 0.5rem #E2BBE9"}}>
      <div className='text-center font-extrabold p-1 text-xl text-purple-950  m-2' style={{minWidth:"90%"}}>{item.title}</div>
      <div className='font-mono text-left p-5 font-extralight text-orange-200 border m-2 border-dotted' style={{minWidth:"90%"}}>{item.body}</div>
      <div className='flex flex-row m-3 self-start'>
   {item.tags.split(" ").map((tag)=><span className='bg-orange-500 inline-block rounded-md px-3 text-white mx-1 '>{tag}</span>)}
        
    </div>
    <button className='self-start m-5 bg-red-400 rounded-lg p-2 font-bold hover:bg-red-500' onClick={()=>{deletePost(item.id)}}>Delete</button>
    </div>
  )
}

export default PostCard

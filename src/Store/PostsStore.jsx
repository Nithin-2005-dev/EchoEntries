import { createContext, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
const PostsStore=createContext([
]);
const postModerator=(currentPosts,action)=>{
    let newPosts=currentPosts;
        if(action.type==="add"){
            if(action.payload.title==="" || action.payload.description==""){
                notifyWarn();
            }else{
            newPosts=[...currentPosts,{id:action.payload.id,title:action.payload.title,description:action.payload.description,tags:action.payload.hashTags}];
            notify("post added sucessfully");
            }
        }else if(action.type==="delete"){
            newPosts=currentPosts.filter((post)=>{
                return post.id!=action.payload.id;
            })
            notify("post deleted sucessfully")
        }
        localStorage.setItem("posts",JSON.stringify(newPosts))
        return newPosts;
}
const notify=(str)=>{
    toast.success(str, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition:Bounce
});
    }
    const notifyWarn=()=>{
        toast.error('enter mandatory fields', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
    }
const Provider=({children})=>{
    const [posts,dispatchPosts]=useReducer(postModerator,JSON.parse(localStorage.getItem("posts")));
    const addPost=(title,description,hashTags)=>{
        const addAction={
        type:"add",
        payload:{
            id:Math.random()*1000000,title,description,hashTags
        }
    }
    dispatchPosts(addAction)
    }
    const deletePost=(id)=>{
        const deleteAction={
        type:"delete",
        payload:{
            id
        }
    }
    dispatchPosts(deleteAction)
    }
    return <PostsStore.Provider value={{posts,addPost,deletePost}}>
        {children}
    </PostsStore.Provider>
}
export {Provider,PostsStore}
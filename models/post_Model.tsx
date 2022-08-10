import PostApi, { getMyPosts } from './post_Api'

export type Post = {
    id: String,
    name:String
}


export const getAllPosts = async ()=>{
    const Posts = await PostApi.getAllPosts()
    return Posts
} 

export const addPosts = async (ps:Post)=>{
    await PostApi.addPosts(ps)
} 
export const getPostById = async (ps:String)=>{
    const Posts = await PostApi.getMyPosts(ps)
    return Posts
}



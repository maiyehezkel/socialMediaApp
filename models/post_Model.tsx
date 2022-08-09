import PostApi from './post_Api'

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



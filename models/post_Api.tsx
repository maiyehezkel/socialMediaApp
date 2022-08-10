import apiClient from './Client_Api'
import { Post } from "./post_Model"
import FormData from 'form-data'

export const getAllPosts = async () => {
    console.log("getAllPosts")
    const res = await apiClient.get("/post")
    let posts = Array<Post>()
    if (res.ok) {
        console.log("getAllPosts res.data " + res.data)
        if (res.data){
            res.data.forEach((item:any)=>{
                console.log("getAllPosts item " + item.message)
                const st:Post = {
                    id: item.sender,
                    name: item.message,
                }
                posts.push(st)
            })
        }
    } else {
        console.log("getAllPosts fail")
    }
    return posts
}
export const getMyPosts = async (ps:String) => {
    console.log("getMyPosts")
    const res = await apiClient.get("/post?sender="+ps)
    let posts = Array<Post>()
    if (res.ok) {
        console.log("getMyPosts res.data " + res.data + ps)
        if (res.data){
            res.data.forEach((item:any)=>{
                console.log("getMyPosts item " + item.message)
                const st:Post = {
                    id: item.sender,
                    name: item.message,
                }
                posts.push(st)
            })
        }
    } else {
        console.log("getMyPosts fail")
    }
    return posts
}

export const addPosts = async (ps: Post) => {
    const res = await apiClient.post("/post", {
        sender: ps.id,
        message: ps.name
    })
    if (res.ok) {
        console.log("addStudent success")
    } else {
        console.log("addStudent fail")
    }
} 
export default {
    getAllPosts,
    addPosts,
    getMyPosts
}


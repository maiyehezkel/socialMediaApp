import apiClient from './Client_Api'
import { User } from "./user_Model"



const loginuser = async (ur: User) => {
    const res = await apiClient.post("/auth/login", {
        email: ur.email,
        password: ur.password
    })
    if (res.ok) {
        console.log("login success")
    } else {
        console.log("login fail", res.data)
    }
} 
const addNewUser = async (ur: User) => {
    const res = await apiClient.post("/auth/register", {
        email: ur.email,
        password: ur.password,
        fullName: ur.fullName,
    })
    if (res.ok) {
        console.log("addUser success")
        navigation.navigate('ProfilePage')
    } else {
        console.log("addUser fail", res.data)
    }
} 
export default {
    addNewUser,
    loginuser
}

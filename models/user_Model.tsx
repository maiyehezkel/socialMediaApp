import UserApi from './user_Api'

export type User = {
    email: String,
    password:String,
    fullName?:String,
}
export const addUser = async (ur:User)=>{
   await UserApi.addNewUser(ur)
   
} 
export const loginUser = async (ur:User)=>{
   const res = await UserApi.loginuser(ur)
   return res;
} 
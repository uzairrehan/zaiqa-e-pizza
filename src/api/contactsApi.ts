import { Contacts } from "../types/contactsType"


const apiUrl = "https://api.randomuser.me/"
const seed = "uzairrehan"
const num = 10
const fullApi = `${apiUrl}?seed=${seed}&results=${num}`



export async function getAllUsers() {
    const raw = await fetch(fullApi)
    const response = await raw.json()
    return response.results as Contacts[]
}


export const getbyUuid =  async (uuid:string) => {
    const allUsers = await getAllUsers()
    return allUsers.find((userItem)=>{
        return userItem.login.uuid === uuid 
    })
}
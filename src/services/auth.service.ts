import { RemoveFromToLocalStorage, getToLocalStorage, setUserLocalStorage } from "@/utils/localStorage"
import { decodeToken } from "@/utils/userDecoder"

export const storeUserInfo = (token : string)=>{
    setUserLocalStorage('accessToken', token)
}

export const getUserInfo = () => {
    const authToken = getToLocalStorage('accessToken')
    console.log(authToken);
    if (authToken){
        const userData : any = decodeToken(authToken);
        return userData;
    }
}

export const removeUser =()=>{
    return RemoveFromToLocalStorage('accessToken')
   
}

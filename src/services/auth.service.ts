import { RemoveFromToLocalStorage, getToLocalStorage, setUserLocalStorage } from "@/utils/localStorage"
import { decodeToken } from "@/utils/userDecoder"

export const storeUserInfo = (token: string) => {
    return setUserLocalStorage('accessToken', token)
}

export const getUserInfo = () => {
    const authToken = getToLocalStorage('accessToken')
    if (authToken) {
        const userData: any = decodeToken(authToken);
        return userData;
    }
}


export const isLoggedIn = () => {
    const authToken = getToLocalStorage('accessToken')
    if (authToken) {
        return !!authToken
    }
}


export const removeUser = () => {
    return RemoveFromToLocalStorage('accessToken')

}

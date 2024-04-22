export const setUserLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
        return ""
    }
    return localStorage.setItem(key, token)
}


export const getToLocalStorage = (key: string) => {

    if (!key || typeof window === "undefined") {
        return ""
    } 
    return localStorage.getItem(key)



}

export const RemoveFromToLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
        return ""
    }
    const removeUser = localStorage.removeItem(key)
    return removeUser
}
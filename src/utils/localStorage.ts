export const setUserLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
        return ""
    }
    localStorage.setItem(key, token)
}


export const getToLocalStorage = (key: string) => {

    if (!key || typeof window === undefined) {
        return ""
    } else {
        const getUser = localStorage.getItem(key)
        return getUser
    }



}

export const RemoveFromToLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
        return ""
    }
    const removeUser = localStorage.removeItem(key)
    return removeUser
}
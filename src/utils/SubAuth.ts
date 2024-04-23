import { getUserData } from "./authStorage"

export function SubAuth(isPremium: boolean){

    const userdata   = getUserData()

    const isSubscribed = userdata?.isSubscribed

    console.log(isSubscribed)

    if(!isPremium){
        return true
    }

    if(isPremium && isSubscribed){
        return true
    }

    return false
}
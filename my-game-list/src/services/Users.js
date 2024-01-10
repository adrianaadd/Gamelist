import  {localapi}  from "./index";


export const signup = async(signupData)=>{
    const { data } = await localapi.post('/auth/signup', signupData)
    return data
}

export  const login= async(loginData)=>{
    const { data } = await localapi.post('/auth/login', loginData)
    return data
}
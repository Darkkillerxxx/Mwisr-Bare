import {SET_LOGIN,SET_MSG} from './actionType'

export const setLogin = (loginResponse) => {
    return {
        type:SET_LOGIN,
        payload:loginResponse
    }
}

export const setMsg = (Msg)=>{
    return{
        type:SET_MSG,
        payload:Msg
    }
}
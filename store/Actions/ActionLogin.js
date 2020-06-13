import {SET_LOGIN} from './actionType'

export const setLogin = (loginResponse) => {
    // console.log("IN ActionTypes",{
    //     type:SET_LOGIN,
    //     payload:loginResponse
    // })

    return {
        type:SET_LOGIN,
        payload:loginResponse
    }
}
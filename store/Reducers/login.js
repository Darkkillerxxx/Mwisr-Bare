import  {SET_LOGIN,SET_MSG} from '../Actions/actionType'

const initialState={
    login:[],
    ErrorMsg:null
}

const loginReducer=(state = initialState,action)=>{

    switch(action.type)
    {
        case SET_LOGIN:
            return{
                ...state,
                login:action.payload
            };
        
        case SET_MSG:
            return{
                ...state,
                ErrorMsg:action.payload
            };

        default:
            return state
    }
}

export default loginReducer;
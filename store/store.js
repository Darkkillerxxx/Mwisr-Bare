import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import loginReducer from './Reducers/login'

const rootReducer=combineReducers({
    login:loginReducer
  })
  
const store=createStore(rootReducer)

export default store
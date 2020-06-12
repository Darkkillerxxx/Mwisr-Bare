import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Screens/Login'
import Register from '../Screens/Register'

const MwisrNavigation=createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    }
},{
    headerMode:'none'
})

export default createAppContainer(MwisrNavigation)
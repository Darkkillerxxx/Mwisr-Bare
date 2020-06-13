import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../Screens/Login/Login'
import Register from '../Screens/Register/Register'
import Home from '../Screens/Home/Home'
import OTP from '../Screens/OTP/OTP'
import Onboarding from '../Screens/Onboarding/Onboarding'

const MwisrNavigation=createStackNavigator({
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    },
    Home:{
        screen:Home
    },
    OTP:{
        screen:OTP
    },
    Onboarding:{
        screen:Onboarding
    }
},{
    headerMode:'none'
})

export default createAppContainer(MwisrNavigation)
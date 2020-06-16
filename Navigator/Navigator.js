import React from 'react'
import {FontAwesome}  from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Login from '../Screens/Login/Login'
import Register from '../Screens/Register/Register'
import Home from '../Screens/Home/Home'
import OTP from '../Screens/OTP/OTP'
import Onboarding from '../Screens/Onboarding/Onboarding'
import AddCall from '../Screens/Calls/AddCall'
import AddPackage from '../Screens/Package/AddPackage'
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../Components/CustomDrawer'

const Drawer=createDrawerNavigator({
    Home:{
        screen:Home,
    },
    Package:{
        screen:AddPackage
    },
    Call:{
        screen:AddCall
    }
},{
    contentComponent:CustomDrawer,
    drawerWidth:250
})

const MwisrNavigation=createSwitchNavigator({

    PreDB:createStackNavigator({
        Login:{
            screen:Login
        },
        Register:{
            screen:Register
        },
        OTP:{
            screen:OTP
        },
        Onboarding:{
            screen:Onboarding
        }
    },{
        headerMode:"none"
    }),
    ProDB:createBottomTabNavigator({
        Home:{
            screen:Drawer,
            navigationOptions:{
                tabBarIcon:(tabIcon)=>{
                    return <FontAwesome name="home" size={25} color={tabIcon.tintColor} />
                }
            }
        },
        AddCall:{
            screen:AddCall,
            navigationOptions:{
                tabBarLabel:'Add Call',
                tabBarIcon:(tabIcon)=>{
                    return <FontAwesome name="phone" size={25} color={tabIcon.tintColor} />
                }
            }
        },
        AddPackage:{
            screen:AddPackage,
            navigationOptions:{
                tabBarLabel:'Add Package',
                tabBarIcon:(tabIcon)=>{
                    return <FontAwesome name="dropbox" size={25} color={tabIcon.tintColor} />
                }
            }
        }
    },{
        tabBarOptions:{
            activeTintColor:"#f5bb18"
        }
    })

})


// const ProDBStack=createStackNavigator({
//     Home:{
//         screen:Home,
//     },
//     Package:{
//         screen:AddPackage
//     },
//     Call:{
//         screen:AddCall
//     }
// })





export default createAppContainer(MwisrNavigation)
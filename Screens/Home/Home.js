import React from 'react'
import { View,Text,AsyncStorage} from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,CheckWhereToGo} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'


class Home extends React.Component{
    constructor()
    {
        super();

    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
               <View style={{width:'100%',height:200,borderColor:'black',borderWidth:1}}>
                   
               </View>
            </View>
        )
    }
}

const mapStateToProps= state =>{
    return{
        loginState:state.login.login
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSetLogin:(response)=>dispatch(setLogin(response))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button } from 'react-native';
import Container from '../Components/Container'
import Card from '../Components/Card'
import BoldText from '../Components/BoldText'
import NormalText from '../Components/NormalText'

class Login extends React.Component{
  constructor()
  {
      super();
      this.state={
          Email:"",
          Password:"",
          Phone:"",
          ErrCode:0,
          isLoading:false
      }
  }

  SwitchToRegister=()=>{
    this.props.navigation.navigate('Register')
  }

  Validation=()=>{
    if(this.state.Email === "")
    {
        this.setState({ErrCode:1})
        this.setState({isLoading:false})
        return false;
    }
    else if(this.state.Password === "")
    {
        this.setState({ErrCode:2})
        this.setState({isLoading:false})
        return false;
    }
    else
    {
        return true;
    }
  }

    render()
    {
        return(
          <Container>
            <Card>
                <Image style={style.Logo} source={require('../assets/Images/logo.png')}/>
                <BoldText style={style.LoginText}>Login</BoldText>
                <NormalText style={style.LoginTextDesc}>Welcome Back,You Missed on Good Tips This Is What Happens!</NormalText>

                {this.state.ErrCode === 1 ? <NormalText style={style.ErrorText}>Email Cannot Be Left Empty</NormalText>:null}
                <TextInput placeholder="Enter Email or Mobile.No" onChangeText={(e)=>this.setState({Email:e})} style={style.LoginTextInputs}/>
                {this.state.ErrCode === 2 ? <NormalText style={style.ErrorText}>Password Cannot Be Left Empty</NormalText>:null}
                <TextInput placeholder="Enter Password" onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} style={style.LoginTextInputs}/>

                <View style={style.ButtonContainer}>
                    <Button title="Login" onPress={()=>this.Login()} color="#f5bb18" />
                </View>

                <NormalText style={style.FPText}>Dont Have an Account? </NormalText>
                <TouchableOpacity onPress={()=>this.SwitchToRegister()}>
                    <Text style={style.SignUpText}>Sign up</Text>
                </TouchableOpacity>
            </Card>
      </Container>
        )
    }
}

const style=StyleSheet.create({
  LoginBox:{
      backgroundColor:'white',
      width:300,
      maxWidth:'85%',
      borderColor:'black',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5,
      justifyContent:'center',
      alignItems:'center',
  },
  Logo:{
      height:40,
      width:40,
      marginTop:20,
      marginBottom:10
  },
  LoginTextInputs:{
      borderRadius:20,
      borderColor:'#d3d7dc',
      borderWidth:1,
      width:'90%',
      paddingVertical:5,
      paddingHorizontal:15,
      marginVertical:7,
      textAlign:'center'
  },
  ButtonContainer:{
      width:"90%",
      marginVertical:15,
      borderRadius:30,
      overflow:'hidden'
  },
  LoginText:{
      marginVertical:10,
      fontFamily:'open-sans-bold',
      fontSize:18
  },
  LoginTextDesc:{
      width:'70%',
      marginBottom:10,
      fontFamily:'open-sans',
      fontSize:12,
      textAlign:'center'
  },
  FPText:{
      opacity:0.5,
      marginTop:15,
      fontFamily:'open-sans',
      fontSize:12
  },
  SignUpText:{
      fontFamily:'open-sans-bold',
      fontSize:12,
      color:'#f5bb18',
      marginBottom:10
  },
  ErrorText:{
      color:'red',
      marginBottom:0
  }
})

export default Login
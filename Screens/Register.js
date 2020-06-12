import React from 'react'
import { StyleSheet, Text, View,Image,TextInput, Button,TouchableWithoutFeedback } from 'react-native';
import Container from '../Components/Container'
import Card from '../Components/Card'
import BoldText from '../Components/BoldText'
import NormalText from '../Components//NormalText'

class Register extends React.Component{
  constructor()
  {
      super();
      this.state={
          FirstName:"",
          LastName:"",
          Email:"",
          Contact:"",
          Password:"",
          ConfirmPassword:"",
          isLoading:false,
          ErrCode:0
      }
  }

  Validation=()=>{
    if(this.state.FirstName.length < 3)
    {
        this.setState({ErrCode:1})
        return false;
    }
    else if(this.state.LastName.length < 3)
    {
        this.setState({ErrCode:2})
        return false;
    }
    else if(!this.state.Email.includes('@') || !this.state.Email.includes('.'))
    {
        this.setState({ErrCode:3})
        return false;
    }
    else if(this.state.Contact.length < 10 || this.state.Contact.length >10)
    {
        this.setState({ErrCode:4})
        return false;
    }
    else if(this.state.Password !== this.state.ConfirmPassword)
    {
        this.setState({ErrCode:5})
        return false
    }
    else if(this.state.Password.length === 0)
    {
        this.setState({ErrCode:6})
        return false
    }
    else
    {
        this.setState({ErrCode:0})
        return true
    }
}

    render()
    {
        return(
          <Container>
          <Card>
              <Image style={style.Logo} source={require('../assets/Images/logo.png')}/>
              <Text style={style.RegisterText}>Sign Up</Text>
              <Text style={style.RegisterTextDesc}>Welcome To Mwisr,Stay Updated with Daily Tips</Text>
              {this.state.ErrCode === 1 ? <NormalText style={style.ErrorText}>Firstname Should Be More Than 3 Letters </NormalText>:null}
              <TextInput placeholder="First Name" onChangeText={(e)=>this.setState({FirstName:e})} style={style.RegisterInputs}/>
              {this.state.ErrCode === 2 ? <NormalText style={style.ErrorText}>LastName Should Be More Than 3 Letters </NormalText>:null}
              <TextInput placeholder="Last Name" onChangeText={(e)=>this.setState({LastName:e})} style={style.RegisterInputs}/>
              {this.state.ErrCode === 3 ? <NormalText style={style.ErrorText}>Email Id must be Valid</NormalText>:null}
              <TextInput placeholder="Enter Email" onChangeText={(e)=>this.setState({Email:e})} style={style.RegisterInputs}/>
              {this.state.ErrCode === 4 ? <NormalText style={style.ErrorText}>Mobile No. Should Be Valid </NormalText>:null}
              <TextInput placeholder="Enter Mobile" onChangeText={(e)=>this.setState({Contact:e})}  style={style.RegisterInputs}/>
              {this.state.ErrCode === 5 ? <NormalText style={style.ErrorText}>Password And Confirm Password Should Match</NormalText>:this.state.ErrCode === 6 ? <NormalText style={style.ErrorText}>Password Cannot Be Left Empty</NormalText>:null}
              <TextInput placeholder="Enter Password" onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} style={style.RegisterInputs}/>
              <TextInput placeholder="Confirm Password" onChangeText={(e)=>this.setState({ConfirmPassword:e})} secureTextEntry={true} style={style.RegisterInputs}/>

              <View style={style.ButtonContainer}>
                  <Button title="Create Account" onPress={()=>this.onRegister()} color="#f5bb18" />
              </View>
          </Card>
      </Container>
        )
    }
}

const style=StyleSheet.create({
  RegisterContainer:{
      flex:1,
      backgroundColor:"#ebecf1",
      justifyContent:'center',
      alignItems:'center'
  },
  RegisterBox:{
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
  RegisterInputs:{
      borderRadius:20,
      borderColor:'#d3d7dc',
      borderWidth:1,
      width:'90%',
      paddingVertical:5,
      paddingHorizontal:15,
      marginVertical:7,
      textAlign:'center'
  },
  RegisterText:{
      marginVertical:10,
      fontFamily:'open-sans-bold',
      fontSize:18,
      textAlign:'center'
  },
  RegisterTextDesc:{
      width:'75%',
      marginBottom:10,
      fontFamily:'open-sans',
      fontSize:12,
      textAlign:'center'
  },
  ButtonContainer:{
      width:"90%",
      marginVertical:15,
      borderRadius:30,
      overflow:'hidden'
  },
  ErrorText:{
      color:'red',
      marginBottom:0
  }
})

export default Register
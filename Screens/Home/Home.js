import React from 'react'
import { View,Text,AsyncStorage, StyleSheet} from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,get_calls,ArrangeCalls} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'
import Container from '../../Components/Container.js';
import NormalText from '../../Components/NormalText'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BoldText from '../../Components/BoldText.js';
import {FontAwesome}  from '@expo/vector-icons';

class Home extends React.Component{
    constructor()
    {
        super();
        this.state={
            SelectedTab:"",
            ManagedCalls:[]
        }

    }

    componentDidMount()
    {
        // this.getCalls(1,"")
    }

    SelectTab=(TabId)=>{
        this.setState({SelectedTab:TabId})
    }

    getCalls(pageNo,type,showActive = "true") {
            get_calls(this.props.loginState.AuthHeader, {
              forUserId:"",
              userTypeId:"",
              showActive: showActive,
              forOwnerId:"",
              packageId:"",
              packageOwnerId:"", // this.props.match.params.forOwnerId,
              callId: "",
              exchange: "",
              symbol: "",
              assignedToMe:false,
              currentPageNo: pageNo,
              PageSize: 10
            }).then(data => {
                this.setState({ManagedCalls:ArrangeCalls(data)},()=>{
                    console.log("Arranged Call",this.state.ManagedCalls)
                })
            });
      }

    render()
    {
        return(
            <Container style={styles.HomeContainer}>
                <View style={{width:'100%',height:200,borderColor:'black',borderWidth:1,backgroundColor:"#0f2346"}} />
                
                <View style={styles.TabContainer}>
                    <View style={this.state.SelectedTab === "" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("")}>
                            <NormalText style={styles.TabsText}>Active Calls</NormalText>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.SelectedTab === "2" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("2")}>
                            <NormalText style={styles.TabsText}>Sub-Broker Calls</NormalText>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.SelectedTab === "6" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("6")}>
                            <NormalText style={styles.TabsText}>Analyst Calls</NormalText>
                        </TouchableOpacity>
                    </View>
                     <View style={this.state.SelectedTab === "5" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("5")}>
                            <NormalText style={styles.TabsText}>Partner Calls</NormalText>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.CallsContainer}>
                    <View style={styles.CallLegContainer}>
                        <NormalText style={{backgroundColor:'#c5c4c4',padding:5,borderRadius:10,color:'white'}}>Intraday</NormalText>
                        <View style={{flexDirection:'row',width:"100%"}}>
                            <View style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
                                <NormalText style={{backgroundColor:'#16d39a',padding:15,borderRadius:5,color:'white'}}>Buy</NormalText>
                            </View>
                            <View style={{width:'60%',marginLeft:10,alignItems:'flex-start',justifyContent:'flex-start'}}> 
                                <BoldText style={{marginBottom:0,fontSize:12,marginVertical:0}}>INFY 31-JAN-2020</BoldText>
                                <NormalText style={{marginBottom:0}}>1/12/2019 16:09:43</NormalText>
                                <BoldText style={{marginBottom:0,fontSize:12,marginVertical:0}}>Call By : Adwait Dabholkar</BoldText>
                            </View>
                            <View style={{width:'25%',marginLeft:5,alignItems:'center',justifyContent:'space-evenly'}}> 
                                <BoldText style={{marginBottom:0,fontSize:12,marginVertical:0,color:'green'}}>Profit</BoldText>
                                <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}}>
                                    <NormalText style={{marginBottom:0,color:'green',marginRight:5}}>350000</NormalText>
                                    <FontAwesome name="rupee" size={15} color="green" />
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>     
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    HomeContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    TabContainer:{
        width:'100%',
        height:35,
        backgroundColor:'#7fc3ff',
        flexDirection:'row'  
    },
    Tabs:{
        width:'25%',
        alignItems:'center',
        justifyContent:'center'
    },
    TabsSelected:{
        width:'25%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'white',
        borderBottomWidth:3
    },
    TabsText:{
        fontSize:10,
        color:'white',
        marginBottom:0
    },
    CallsContainer:{
        flex:1,
        width:'100%',
        marginTop:10
    },
    CallLegContainer:{
        paddingHorizontal:10,
        alignItems:'flex-start'
    }
    
})

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
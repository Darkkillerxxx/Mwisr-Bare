import React from 'react'
import { View,Text,AsyncStorage, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,get_calls,ArrangeCalls} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'
import Container from '../../Components/Container.js';
import NormalText from '../../Components/NormalText'
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
        this.getCalls(1,"")
    }

    SelectTab=(TabId)=>{
        this.setState({SelectedTab:TabId},()=>{
            this.getCalls(1,"")
        })
    }

    getCalls(pageNo,type,showActive = "true") {
            get_calls(this.props.loginState.AuthHeader, {
              forUserId:"",
              userTypeId:this.state.SelectedTab,
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

    ShowCalls=(itemData)=>{
        return(
            <TouchableOpacity style={{width:'100%'}}>
                <View style={styles.CallLegContainer}>
                    <NormalText style={styles.SegmentName}>{itemData.item.Legs[0].StrategyName}</NormalText>
                        {itemData.item.Legs.map(result=>{
                            console.log("Flatlist Result",result)
                            return(
                                <View style={{flexDirection:'row',width:"100%",marginBottom:10}}>
                                    <View style={styles.BuySell}>
                                        <View style={result.BuySell === "BUY" ? styles.Buy:styles.Sell}>
                                            <NormalText style={{marginBottom:0,color:'white'}}>{result.BuySell}</NormalText>
                                        </View>
                                    </View>
                                    <View style={styles.CallInfoContainer}> 
                                        <BoldText style={styles.CustomBoldText}>{result.Scrip} 31-JAN-2020</BoldText>
                                        <NormalText style={styles.CustomNormalText}>1/12/2019 16:09:43</NormalText>
                                        <BoldText style={styles.CustomBoldText}>Call By : {result.OwnerName}</BoldText>
                                    </View>
                                    <View style={styles.ProfitContainer}> 
                                        <BoldText style={styles.ProfitNormalText}>Profit</BoldText>
                                        <View style={styles.ProfitNoContainer}>
                                            <NormalText style={styles.ProfitNo}>350000</NormalText>
                                            <FontAwesome name="rupee" size={15} color="green" />
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                        
                </View>
            </TouchableOpacity>
        )
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
                  <FlatList
                        keyExtractor={(item, index) => item.Index}
                        data={this.state.ManagedCalls}
                        renderItem={this.ShowCalls} />
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
        alignItems:'flex-start',
        marginBottom:5
    },
    SegmentName:{
        backgroundColor:'#c5c4c4',
        padding:5,
        borderRadius:10,
        color:'white'
    },
    BuySell:{
        width:'20%',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    Buy:{
        backgroundColor:'#16d39a',
        padding:10,
        borderRadius:5
    },
    Sell:{
        backgroundColor:'#ff6961',
        padding:10,
        borderRadius:5
    },
    CallInfoContainer:{
        width:'55%',
        marginLeft:10,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    CustomBoldText:{
        marginBottom:0,
        fontSize:12,
        marginVertical:0
    },
    CustomNormalText:{
        marginBottom:0
    },
    ProfitContainer:{
        width:'25%',
        marginLeft:5,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    ProfitNormalText:{
        marginVertical:0,
        marginTop:0,
        marginBottom:0,
        fontSize:12,
        marginVertical:0,
        color:'green'
    },
    LossNormalText:{
        marginBottom:0,
        fontSize:12,
        marginVertical:0,
        color:'red'
    },
    ProfitNoContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    ProfitNo:{
        marginBottom:0,
        color:'green',
        marginRight:5
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
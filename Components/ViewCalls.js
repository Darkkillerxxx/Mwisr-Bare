import React from 'react'
import {FlatList, StyleSheet,TouchableOpacity,View, ActivityIndicator, Image} from 'react-native'
import {login_call, GetAuthHeader,get_calls,ArrangeCalls,formatDate} from '../Utils/api.js'
import BoldText from '../Components/BoldText.js';
import {FontAwesome}  from '@expo/vector-icons';
import NormalText from '../Components/NormalText'

class ViewCalls extends React.Component{
    constructor()
    {
        super();
        this.state={
            ManagedCalls:[],
            isLoading:false,
            PageSize:5
        }
    }

    componentDidMount()
    {
        this.getCalls(1,"",true)

        // setInterval(()=>{
        //     this.getCalls(1,"",false)
        // },10000)
    }

    componentDidUpdate(prevProps,prevState,Ss)
    {
        if(prevProps.STab !== this.props.STab)
        {
            this.getCalls(1,"",true)
        }
    }

    getCalls(pageNo,type,firstload = "false",showActive = "true") {
        if(firstload)
        {
            this.setState({isLoading:true})
        }
        get_calls(this.props.AuthHeader, {
          forUserId:"",
          userTypeId:this.props.STab,
          showActive: showActive,
          forOwnerId:"",
          packageId:"",
          packageOwnerId:"", // this.props.match.params.forOwnerId,
          callId: "",
          exchange: "",
          symbol: "",
          assignedToMe:false,
          currentPageNo: pageNo,
          PageSize: this.state.PageSize
        }).then(data => {
            this.setState({ManagedCalls:ArrangeCalls(data,this.state.PageSize)},()=>{
                console.log("Arranged Call",this.state.ManagedCalls)
                this.setState({isLoading:false})
            })
        });
  }

    ShowCalls=(itemData)=>{
        return(
            <TouchableOpacity style={{width:'100%'}}>
                <View style={styles.CallLegContainer}>
                    <NormalText style={styles.SegmentName}>{itemData.item.Legs[0].StrategyName}</NormalText>
                        {itemData.item.Legs.map((result,index)=>{
                            //  console.log("Flatlist Result",result.ExpiryDate)
                            return(
                                <View key={index} style={{flexDirection:'row',width:"100%",marginBottom:10}}>
                                    <View style={styles.BuySell}>
                                        <View style={result.BuySell === "BUY" ? styles.Buy:styles.Sell}>
                                            <NormalText style={{marginBottom:0,color:'white'}}>{result.BuySell}</NormalText>
                                        </View>
                                    </View>
                                    <View style={styles.CallInfoContainer}> 
                                        <BoldText style={styles.CustomBoldText}>{result.Scrip} {result.ExpiryDate !== "" ? formatDate(result.ExpiryDate):null}</BoldText>
                                        <NormalText style={styles.CustomNormalText}>{result.TipStartDate}</NormalText>
                                        <BoldText style={styles.CustomBoldText}>Call By : {result.OwnerName}</BoldText>
                                    </View>
                                    <View style={styles.ProfitContainer}> 
                                        <BoldText style={result.ProfitPerInvestment > 0 ? styles.ProfitNormalText:result.ProfitPerInvestment < 0 ? styles.LossNormalText:{fontSize:12}}>Profit</BoldText>
                                        <View style={styles.ProfitNoContainer}>
                                            <NormalText style={result.ProfitPerInvestment > 0 ? styles.ProfitNo:result.ProfitPerInvestment < 0 ? styles.LossNo:{marginBottom:0,marginRight:5,fontSize:15}}>{result.ProfitPerInvestment}</NormalText>
                                            <FontAwesome name="rupee" size={14} color={result.ProfitPerInvestment > 0 ? "green":result.ProfitPerInvestment < 0 ? "red":"black"} />
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
            this.state.isLoading ? 
                <View style={{flex:1,alignSelf:'stretch',alignItems:'center',justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#f5bb18" />
                </View>
                
                :
                this.state.ManagedCalls.length > 0 ? 
                <FlatList
                  keyExtractor={(item, index) => item.Index.toString()}
                  data={this.state.ManagedCalls}
                  renderItem={this.ShowCalls}
                  onEndReached={(distance)=>{
                      this.setState({PageSize:this.state.PageSize + 5},()=>{
                          this.getCalls(1,"",false)
                      })
                  }}
                  onEndReachedThreshold={0.3}
                  />:
                  <View style={{flex:1,alignSelf:'stretch',alignItems:'center',justifyContent:'center'}}>
                      <Image source={require('../assets/Images/searching.png')} style={{width:'30%',height:'30%',resizeMode:'contain'}}/>
                      <NormalText style={{marginTop:10,marginBottom:0,fontSize:16}}>No Added Call Were Found</NormalText>
                  </View>
        )
    }
}

const styles=StyleSheet.create({
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
    },
    LossNo:{
        marginBottom:0,
        color:'red',
        marginRight:5
    }
})

export default ViewCalls
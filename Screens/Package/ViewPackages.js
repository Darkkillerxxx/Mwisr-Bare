import React from 'react'
import { View, StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { connect }from 'react-redux'
import Container from '../../Components/Container';
import NormalText from '../../Components/NormalText';
import Card from '../../Components/Card';
import {FontAwesome}  from '@expo/vector-icons';
import * as Progress from 'react-native-progress'; 
import {get_packages,getPackageBackColor,getPackageFontColor} from '../../Utils/api'

class ViewPackages extends React.Component{
    constructor()
    {
        super();
        this.state={
            SelectedTab:"",
            ReceivedPacakgeList:[]
        }
    }

    getPackages(forOwnerId,userTypeId, assignedToMe, forUserId ,createdByMe) {
        const { AuthHeader } = this.props.loginState;
        // console.log("23 View Packages",AuthHeader)
        // this.setState({ loading: true });
        get_packages({
          forOwnerId,
          userTypeId,
          AuthHeader,
          forUserId: "",
          assignedToMe,
          createdByMe: createdByMe,
          currentPage:1,
          pageSize:100,
          forDebug:false
        }).then(data => {
            if(data.IsSuccess)
            {
                this.setState({ReceivedPacakgeList:data.Data},()=>{
                    console.log(this.state.ReceivedPacakgeList)
                })
            }
        });
      }

    componentDidMount() {
        this.getPackages("","",this.props.loginState.UserTypeId === 7 ? true:"",this.props.loginState.UserId,this.props.loginState.UserTypeId === 7 ? "":true);
      }

    SelectTab=(Tab)=>{
        this.setState({SelectedTab:Tab})
    }

    PacakgeList=(itemData)=>{
        return(
            <Card style={styles.PackageCard}>
                <View style={{...styles.PackageTopContainer,...{backgroundColor:getPackageBackColor(itemData.item.PackageTypeName)}}}>
                    <View style={styles.PackageTopLeft}>
                        <FontAwesome name="dropbox" size={38} color={getPackageFontColor(itemData.item.PackageTypeName)} />
                        <NormalText style={{color:`${getPackageFontColor(itemData.item.PackageTypeName)}`,marginBottom:0}}>Created By</NormalText>
                        <NormalText style={{color:`${getPackageFontColor(itemData.item.PackageTypeName)}`}}>{itemData.item.DelegatedUserName}</NormalText>
                    </View>
                    <View style={styles.PackageTopRight}>
                        <NormalText style={{color:`${getPackageFontColor(itemData.item.PackageTypeName)}`,marginBottom:0}}>{itemData.item.PackageName}</NormalText>
                        <NormalText style={{color:`${getPackageFontColor(itemData.item.PackageTypeName)}`,marginBottom:0}}>{itemData.item.Profit} ₹</NormalText>
                        <NormalText style={{color:`${getPackageFontColor(itemData.item.PackageTypeName)}`,marginBottom:0}}>{itemData.item.PackageTypeName}</NormalText>
                    </View>
                </View>
                <View style={styles.PackageMidContainer}>
                    <View style={styles.PacakgeMidLeft}>
                        <NormalText style={{marginBottom:0}}>Total Calls</NormalText>
                        <NormalText style={{marginBottom:0}}>{itemData.item.TotalCalls}</NormalText>
                    </View>
                    <View style={styles.PackageMidRight}>
                        <NormalText style={{marginBottom:0}}>Total ROI</NormalText>
                        <NormalText style={{marginBottom:0}}>{itemData.item.AvgROI} %</NormalText>
                    </View>
                </View>
                <View style={styles.PackageBottomContainer}>
                    <View style={styles.PacakgeBottomLeft}>
                        <View style={styles.PacakgeBottomLeftLeft}>
                            <NormalText style={{marginBottom:0}}>Risk</NormalText>
                            <NormalText style={{marginBottom:0}}>{itemData.item.RiskAvg}</NormalText>
                        </View>
                        <View style={styles.PacakgeBottomRightRight}>
                            <NormalText style={{marginBottom:0}}>Reward</NormalText>
                            <NormalText style={{marginBottom:0}}>{itemData.item.RewardAvg}</NormalText>
                        </View>
                    </View>
                    <View style={styles.PacakgeBottomRightRight}>
                        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
                            <NormalText style={{marginBottom:5}}>Accuracy</NormalText>
                            <NormalText style={{marginBottom:5}}>{itemData.item.Accuracy} %</NormalText>
                        </View>
                        <Progress.Bar progress={itemData.item.Accuracy / 100} />
                    </View>
                </View>
            </Card>
        )
    }

    render()
    {
        return(
            <Container style={styles.ViewPackageContainer}>
                <View style={styles.TabContainer}>
                    <View style={this.state.SelectedTab === "" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("")}>
                            <NormalText style={styles.TabsText}>Own</NormalText>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.SelectedTab === "2" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("2")}>
                            <NormalText style={styles.TabsText}>Sub-Broker</NormalText>
                        </TouchableOpacity>
                    </View>
                    <View style={this.state.SelectedTab === "6" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("6")}>
                            <NormalText style={styles.TabsText}>Analyst</NormalText>
                        </TouchableOpacity>
                    </View>
                     <View style={this.state.SelectedTab === "5" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("5")}>
                            <NormalText style={styles.TabsText}>Partner</NormalText>
                        </TouchableOpacity>
                    </View>
                     <View style={this.state.SelectedTab === "7" ? styles.TabsSelected:styles.Tabs}>
                        <TouchableOpacity onPress={()=>this.SelectTab("7")}>
                            <NormalText style={styles.TabsText}>Assigned To Me</NormalText>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.PackageContainer}> 
                   <FlatList 
                     keyExtractor={(item, index) => item.PackageId.toString()}
                     data={this.state.ReceivedPacakgeList}
                     renderItem={this.PacakgeList}/>
                </View>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    ViewPackageContainer:{
        alignContent:'flex-start',
        justifyContent:'flex-start'
    },
    TabContainer:{
        width:'100%',
        height:35,
        backgroundColor:'#7fc3ff',
        flexDirection:'row'  
    },
    Tabs:{
        width:'20%',
        alignItems:'center',
        justifyContent:'center'
    },
    TabsSelected:{
        width:'20%',
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
    PackageContainer:{
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingTop:10,
        backgroundColor:'#fafafa'
    },
    PackageCard:{
        width:'97%',
        height:200,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginVertical:10
    },
    PackageTopContainer:{
        width:'100%',
        height:'50%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        flexDirection:'row'
    },
    PackageTopLeft:{
        width:'35%',
        alignItems:'center',
        justifyContent:'center'
    },
    PackageTopRight:{
        width:'65%',
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
    },
    PackageMidContainer:{
        width:'100%',
        height:'25%',
        flexDirection:'row',
        padding:5
    },
    PacakgeMidLeft:{
        width:'50%',
        height:'100%',
        borderRightColor:'#fafafa',
        borderRightWidth:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    PackageMidRight:{
        width:'50%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    PackageBottomContainer:{
        width:'100%',
        height:'25%',
        flexDirection:'row',
        padding:5
    },
    PacakgeBottomLeft:{
        width:'50%',
        height:'100%',
        flexDirection:'row'
    },
    PacakgeBottomLeftLeft:{
        width:'50%',
        height:'100%',
        alignItems:'center'
    },
    PacakgeBottomRightRight:{
        width:'50%',
        height:'100%',
        alignItems:'center'
    },
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

export default connect(mapStateToProps,mapDispatchToProps)(ViewPackages);
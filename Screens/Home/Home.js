import React from 'react'
import { View,AsyncStorage, StyleSheet,TouchableOpacity} from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,get_calls,ArrangeCalls} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'
import Container from '../../Components/Container.js';
import NormalText from '../../Components/NormalText'
import ViewCalls from '../../Components/ViewCalls.js'

class Home extends React.Component{
    constructor()
    {
        super();
        this.state={
            SelectedTab:""
        }
    }

    SelectTab=(Tab)=>{
        this.setState({SelectedTab:Tab})
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
                    <ViewCalls 
                        AuthHeader={this.props.loginState.AuthHeader} 
                        STab={this.state.SelectedTab}/>
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
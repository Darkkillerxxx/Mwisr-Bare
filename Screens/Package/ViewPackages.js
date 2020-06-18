import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import Container from '../../Components/Container';
import NormalText from '../../Components/NormalText';
import Card from '../../Components/Card';
import {FontAwesome}  from '@expo/vector-icons';

class ViewPackages extends React.Component{
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
                    <Card style={styles.PackageCard}>
                        <View style={{...styles.PackageTopContainer,...{backgroundColor:'#D9F4F4'}}}>
                            <View style={styles.PackageTopLeft}>
                                <FontAwesome name="dropbox" size={38} color="#33C4C6" />
                                <NormalText style={{color:'#33C4C6',marginBottom:0}}>Created By</NormalText>
                                <NormalText style={{color:'#33C4C6'}}>Adwait Dabholkar</NormalText>
                            </View>
                            <View style={styles.PackageTopRight}>
                                <NormalText style={{color:'#33C4C6',marginBottom:0}}>EQ-FU-17-03-2020.12</NormalText>
                                <NormalText style={{color:'#33C4C6',marginBottom:0}}>54000 ₹</NormalText>
                                <NormalText style={{color:'#33C4C6',marginBottom:0}}>Equity</NormalText>
                            </View>
                        </View>
                        <View style={styles.PackageMidContainer}>
                            <View style={styles.PacakgeMidLeft}>
                                <NormalText style={{marginBottom:0}}>Total Calls</NormalText>
                                <NormalText style={{marginBottom:0}}>82</NormalText>
                            </View>
                            <View style={styles.PackageMidRight}>
                                <NormalText style={{marginBottom:0}}>Total ROI</NormalText>
                                <NormalText style={{marginBottom:0}}>8.5 %</NormalText>
                            </View>
                        </View>
                        <View style={styles.PackageBottomContainer}>
                            <View style={styles.PacakgeBottomLeft}>
                                <View style={styles.PacakgeBottomLeftLeft}>
                                    <NormalText style={{marginBottom:0}}>Risk</NormalText>
                                    <NormalText style={{marginBottom:0}}>0</NormalText>
                                </View>
                                <View style={styles.PacakgeBottomRightRight}>
                                    <NormalText style={{marginBottom:0}}>Reward</NormalText>
                                    <NormalText style={{marginBottom:0}}>0</NormalText>
                                </View>
                            </View>
                        </View>
                    </Card>
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
        justifyContent:'flex-start',
        width:'100%',
        paddingTop:10,
        backgroundColor:'#fafafa'
    },
    PackageCard:{
        height:200,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'flex-start'
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

export default ViewPackages;
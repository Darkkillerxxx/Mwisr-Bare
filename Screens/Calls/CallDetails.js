import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../Components/Container';
import NormalText from '../../Components/NormalText';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

class CallDetails extends React.Component{
    constructor()
    {
        super();
        this.state={

        }
    }

    render()
    {
        return(
          <Container style={styles.CallDetailsContainer}>
              
              <View style={styles.CallDetailsContentContainer}>
                <ScrollView style={styles.CallDetailsScrollView}>
                    <View style={styles.ContentTopContainer} >
                        <View style={styles.ContentTop}>
                            <View style={styles.ContentTopLeft}>

                            </View>
                            <View style={styles.ContentTopMiddle}>
                                <View style={styles.ContentTopMiddleLeftContainer}>
                                    <View style={styles.BuySell}>
                                        <NormalText style={{marginBottom:0,fontSize:15,color:'white'}}>BUY</NormalText>
                                    </View>
                                    <View style={{height:50,justifyContent:'space-evenly'}}>
                                        <NormalText style={{marginBottom:0,fontSize:12,color:'white'}}>INFY 25 FEB 2016</NormalText>
                                        <NormalText style={{marginBottom:0,fontSize:12,color:'white'}}>24 JAN 2016 09.30</NormalText>
                                    </View>
                                </View>
                                <View style={styles.ContentTopMiddleRightContainer}>
                                    <View style={{height:50,justifyContent:'space-evenly',alignItems:'flex-end'}}>
                                        <NormalText style={{marginBottom:0,fontSize:12,color:'white'}}>Profit</NormalText>
                                        <View style={{flexDirection:'row',width:'100%'}}>
                                            <FontAwesome name="arrow-up" size={14} color="white" />
                                            <NormalText style={{marginBottom:0,fontSize:12,color:'white',marginLeft:5}}>2500 ₹</NormalText>
                                        </View>
                                        
                                    </View>
                                </View>
                               
                            </View>
                            <View style={styles.ContentTopRight}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
              </View>
              
              <View style={styles.EditCallContainer}>
                <TouchableOpacity style={styles.EditCallButtonContainer}>
                    <View style={styles.EditCallButton}>
                        <NormalText style={styles.EditCallButtonText}>Edit Call</NormalText>
                    </View>
                </TouchableOpacity>
              </View>
          </Container>
        )
    }
}

const styles=StyleSheet.create({
    CallDetailsContainer:{
        alignItems:'center',
        justifyContent:'flex-end'
    },
    EditCallContainer:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    EditCallButtonContainer:{
        width:'50%'
    },
    EditCallButton:{
        width:'100%',
        height:35,
        borderRadius:10,
        backgroundColor:'#F0B22A',
        elevation:3,
        alignItems:'center',
        justifyContent:'center'
    },
    EditCallButtonText:{
        fontSize:16,
        color:'white',
        marginBottom:0
    },
    CallDetailsContentContainer:{
        flex:1,
        width:'100%'
    },
    CallDetailsScrollView:{
        width:'100%'
    },
    ContentTopContainer:{
        width:'100%',
        height:200,
        backgroundColor:"#0f2346"
    },
    ContentTop:{
        flexDirection:'row',
        height:'65%'
    },
    ContentTopLeft:{
        width:'7%',
        height:'100%'
    },
    ContentTopMiddle:{
        width:'80%',
        height:'100%',
        flexDirection:'row'
    },
    ContentTopRight:{
        width:'7%',
        height:'100%'
    },
    ContentTopMiddleLeftContainer:{
        width:'65%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    BuySell:{
        width:50,
        height:50,
        backgroundColor:'#378E61',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    ContentTopMiddleRightContainer:{
        width:'35%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
        
    }
})


export default CallDetails
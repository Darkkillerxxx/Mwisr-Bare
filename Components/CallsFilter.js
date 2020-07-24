import React from 'react'
import { View, StyleSheet, TouchableOpacity,TextInput,FlatList } from 'react-native';
import NormalText from './NormalText';
import BoldText from './BoldText';
import { FontAwesome } from '@expo/vector-icons';


class CallsFilter extends React.Component{
    constructor()
    {
        super();
        this.state={
            Owners:[
                {
                "OwnerId": "",
                "OwnerName": "Own",
                "SuperOwner": ""
                }
            ]
        }
    }

    componentDidMount()
    {
        let TempOwners=this.state.Owners
        this.props.UserOwners.forEach(element=>{
            TempOwners.push(element)
        })
        this.setState({Owners:TempOwners},()=>{
            console.log(this.state.Owners)
        })
    }

    showOwners=(itemData)=>{
        return(
            <View style={{width:'30%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A',marginHorizontal:5}}>
               <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>{itemData.item.OwnerName}</NormalText>
            </View>
        )
    }
    
    render()
    {
        return(
            <View style={styles.CallsFilterContainer}>
                <View style={styles.FilterHeadingContainer}>
                    <BoldText style={styles.FilterHeading}>Filters</BoldText>
                    <TouchableOpacity>
                        <View style={styles.FilterButton}>
                            <FontAwesome name="filter" size={24} color="white" />
                            <NormalText style={{marginBottom:0,color:'white'}}>Apply Filters</NormalText> 
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{width:'100%',marginVertical:5}}>
                    <BoldText style={{fontSize:15}}>Search</BoldText>
                        <View style={{width:'100%',alignItems:'center'}}>
                            <View style={{width:'90%',height:40,borderWidth:1,borderColor:'#bcc4cb',flexDirection:'row',alignItems:'center',borderRadius:5}}>
                                <TextInput style={{width:'90%',height:37,backgroundColor:'white'}} underlineColorAndroid ='transparent'/>
                                <TouchableOpacity>
                                    <FontAwesome name="search" size={24} color="#bcc4cb" />
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>

                <View style={{width:'100%',marginVertical:5}}>
                    <BoldText style={{fontSize:15}}>Exchanges</BoldText>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={{width:'18%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>All</NormalText>
                        </View>
                        <View style={{width:'18%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>NSE</NormalText>
                        </View>
                        <View style={{width:'18%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>BSE</NormalText>
                        </View>
                        <View style={{width:'18%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>NCDEX</NormalText>
                        </View>
                        <View style={{width:'18%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>MCX</NormalText>
                        </View>
                    </View>
                </View>
                
                <View style={{width:'100%',marginVertical:5}}>
                    <BoldText style={{fontSize:15}}>Call Status</BoldText>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={{width:'30%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>All Calls</NormalText>
                        </View>
                        <View style={{width:'30%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>Active Calls</NormalText>
                        </View>
                        <View style={{width:'30%',borderWidth:1,alignItems:'center',justifyContent:'center',padding:5,borderRadius:5,borderColor:'#F0B22A'}}>
                            <NormalText style={{color:'black',marginBottom:0,color:'#F0B22A'}}>In-Active Calls</NormalText>
                        </View>
                    </View>
                </View>

                <View style={{width:'100%',marginVertical:5}}>
                    <BoldText style={{fontSize:15}}>Owners</BoldText>
                    <FlatList
                        keyExtractor={(item, index) => item.OwnerId}
                        data={this.state.Owners}
                        renderItem={this.showOwners}
                        numColumns={3}/>                 
                </View>
                
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    CallsFilterContainer:{
        flex:1,
        marginTop:'10%',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor:'white',
        elevation:3,
        padding:15
    },
    FilterHeadingContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    FilterHeading:{
        fontSize:20
    },
    FilterButton:{
        backgroundColor:"#F0B22A",
        width:125,
        height:35,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})

export default CallsFilter;
import React from 'react'
import { View } from 'react-native-animatable';
import BoldText from './BoldText';
import NormalText from './NormalText';
import { ScrollView } from 'react-native-gesture-handler';

class UserFilter extends React.Component{
    constructor()
    {
        super();
        this.state={}
    }

    render()
    {
        return(
            <View style={{flex:1,marginTop:60,backgroundColor:'white',borderTopLeftRadius:25,borderTopRightRadius:25,elevation:1,padding:15}}>
                
                <ScrollView>
                <BoldText style={{fontSize:20}}>Filters</BoldText>

                <NormalText style={{fontSize:18}}>Accuracy</NormalText>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginVertical:5}}>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Show All</NormalText>
                    </View>
                    <View style={{width:'32%',borderWidth:1,alignItems:'center',padding:5,borderRadius:5,borderColor:this.props.UserColor}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 0-25</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 25-50</NormalText>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly'}}>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 50-75</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Less than 75</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 75-100</NormalText>
                    </View>
                </View>

                <NormalText style={{fontSize:18,marginTop:15}}>Profit</NormalText>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginVertical:5}}>
                    <View style={{width:'45%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Show All</NormalText>
                    </View>
                    <View style={{width:'45%',borderWidth:1,borderColor:this.props.UserColor,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Below 5000</NormalText>
                    </View>
                    
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly'}}>
                    <View style={{width:'45%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 5000-10000</NormalText>
                    </View>
                    <View style={{width:'45%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 10000-25000</NormalText>
                    </View>
                </View>

                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:5}}>
                    <View style={{width:'45%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>More than 25000</NormalText>
                    </View>
                </View>

                <NormalText style={{fontSize:18}}>ROI</NormalText>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginVertical:5}}>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Show All</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 0-25</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 25-50</NormalText>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly'}}>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Below 50</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 50-75</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Below 75</NormalText>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:5}}>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>Between 75-50</NormalText>
                    </View>
                    <View style={{width:'32%',borderColor:this.props.UserColor,borderWidth:1,alignItems:'center',padding:5,borderRadius:5}}>
                        <NormalText style={{marginBottom:0,color:this.props.UserColor}}>More Than 100</NormalText>
                    </View>
                </View>

                <View style={{width:"100%",marginVertical:25,alignItems:'center',padding:10,borderRadius:10,backgroundColor:this.props.UserColor}}>
                    <NormalText style={{marginBottom:0,color:'white',fontSize:18}}>Apply Filters</NormalText>
                </View>
                </ScrollView>
            </View>
        )
    }
}


export default UserFilter;
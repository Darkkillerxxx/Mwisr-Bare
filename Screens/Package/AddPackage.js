import React from 'react'
import { View,Text,AsyncStorage,Picker,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { connect }from 'react-redux'
import {login_call, GetAuthHeader,CheckWhereToGo} from '../../Utils/api.js'
import {setLogin} from '../../store/Actions/ActionLogin'
import Container from '../../Components/Container'
import StepIndicator from 'react-native-step-indicator';
import Card from '../../Components/Card.js';
import BoldText from '../../Components/BoldText.js';
import NormalText from '../../Components/NormalText.js';
import RBContainer from '../../Components/RBContainer.js';
import CustomButton from '../../Components/Button.js';
import { FlatList } from 'react-native-gesture-handler';
import RadioBtn from '../../Components/RadioBtn'

const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#28262B',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#28262B',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#28262B',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#28262B',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#F0B22A',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#F0B22A',
    stepIndicatorLabelFinishedColor: '#28262B',
    stepIndicatorLabelUnFinishedColor: '#fafafa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#28262B'
  }

const AddStep = ["Package Name","Package Details","Package Pricing"];
class AddPackage extends React.Component{
    constructor()
    {
        super();
        this.state={
            AddPackageState:1,
            PackageName:"",
            SelectedOwnerId:"",
            ErrorCode:null,
            SegmentType:[
                {
                    "SegmentId": 1,
                    "SegmentName": "Equity"
                },
                {
                    "SegmentId": 2,
                    "SegmentName": "CommodityFutures"
                },
                {
                    "SegmentId": 4,
                    "SegmentName": "CurrencyFutures"
                },
                {
                    "SegmentId": 9,
                    "SegmentName": "EquityOptions"
                },
                {
                    "SegmentId": 10,
                    "SegmentName": "EquityFutures"
                },
                {
                    "SegmentId": 11,
                    "SegmentName": "CommodityOptions"
                },
                {
                    "SegmentId": 12,
                    "SegmentName": "CurrencyOptions"
                }
            ]
        }

    }

    componentDidMount()
    {
        
    }

    Validation=()=>{
        if(this.state.AddPackageState === 0)
        {
            if(this.state.PackageName.length === 0){
                this.setState({ErrorCode:1})
                return false
            }
            else
            {
                this.setState({ErrorCode:null})
                return true
            }
        }
        else if(this.state.AddPackageState === 1)
        {
            
        }
    }

    onSubmit=()=>{
        if(this.state.AddPackageState !== 2)
        {
            if(this.Validation())
            {
                this.setState({AddPackageState:this.state.AddPackageState + 1})
            }
        }
    }

    showSegmentType=(itemData)=>{
        return(
            <TouchableOpacity style={{width:'100%',marginHorizontal:10,marginVertical:2}}>
                  <RadioBtn>
                      <NormalText style={{marginBottom:0}}>{itemData.item.SegmentName}</NormalText>
                  </RadioBtn>
            </TouchableOpacity>
            
        )
    }

    render()
    {
        return(
            <Container style={style.AddPackageContainer}>
                <View style={style.StepIndicatorContainer}>
                   <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.AddPackageState}
                    labels={AddStep}
                    stepCount={3}
                   />
                </View>
                {this.state.AddPackageState === 0 ? 
                <View style={style.AddPackageContent}>
                    <Card style={style.CustomCard}>
                        <NormalText style={style.HeadingText}>Select Owner</NormalText>
                        <View style={{width:'100%',borderWidth:1,borderColor:'#d3d7dc',borderRadius:5}}>
                            <Picker selectedValue={null} onValueChange={(val)=>this.setState({SelectedResearchType:val})} placeholder="Research Types" style={style.CustomPicker}>
                                <Picker.Item label="Own" value="Own"/>
                                
                            </Picker>
                        </View>
                    </Card>

                    <Card style={style.CustomCard}>
                        {this.state.ErrorCode === 1 ? 
                            <NormalText style={{...style.HeadingText,color:'red'}}>Package Name Cannot Be Empty</NormalText>  
                            :
                            <NormalText style={style.HeadingText}>Package Name</NormalText>    
                        }
                        
                        <TextInput onChangeText={(e)=>this.setState({PackageName:e})} placeholder={"Enter Package Name"} style={style.CustomTextInputs} />
                    </Card>
                </View>:
                <View style={style.AddPackageContent}>
                    <Card style={style.CustomCard}>
                        <NormalText style={style.HeadingText}>Select Segment Type</NormalText>
                        <View style={style.SegmentContainer}>
                            <FlatList 
                                keyExtractor={(item, index) => item.SegmentId.toString()}
                                data={this.state.SegmentType}
                                renderItem={this.showSegmentType}
                                numColumns={1}
                            />
                              
                        </View>
                    </Card>
                </View>}

                <View style={{flex:1,flexDirection:'row',alignSelf:'stretch',alignItems:'flex-end',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>this.onSubmit()}>
                        <CustomButton style={{width:150}}>
                            <NormalText style={{marginBottom:0,color:'white',fontSize:15}}>Proceed</NormalText>
                        </CustomButton>
                    </TouchableOpacity>
                    
                </View>
                   
            </Container>
        )
    }
}

const style=StyleSheet.create({
    AddPackageContainer:{
        backgroundColor:'#FAFAFA',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:10
    },
    StepIndicatorContainer:{
        width:"95%"
    },
    AddPackageContent:{
        marginTop:25,
        width:'100%',
        alignItems:'center'
    },
    CustomCard:{
        borderRadius:5,
        alignItems:'flex-start',
        padding:10,
        marginVertical:5
    },
    HeadingText:{
        fontSize:16
    },
    CustomPicker:{
        borderRadius:20,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'100%',
        marginVertical:2,
        height:30
    },
    CustomTextInputs:{
        borderRadius:10,
        borderColor:'#d3d7dc',
        borderWidth:1,
        width:'100%',
        height:40,
        textAlign:'center'
    },
    SegmentContainer:{
        width:'100%',
        alignItems:'flex-start',
        justifyContent:'center'
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

export default connect(mapStateToProps,mapDispatchToProps)(AddPackage);
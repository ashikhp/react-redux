import React from 'react'
import { View,Button,Text } from 'react-native'
import { connect } from 'react-redux'
import {increaseCount,decreaseCount} from '../Actions/Counter'


const Counter = (props) =>{

    return (
        <View style={{justifyContent:'center',flex:1}}>
            <Button title="+" onPress={()=>props.increaseCount()} ></Button>
            <Text style={{alignSelf:'center'}}>{props.count}</Text>
            <Button title="-" onPress={()=>props.decreaseCount()}></Button>
        </View>
    )

}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps =  {
        increaseCount,
        decreaseCount
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
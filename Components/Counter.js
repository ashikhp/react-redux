import React, { Component } from 'react'
import { View,Button,Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCount,decreaseCount} from '../Actions/Counter'

class Counter extends Component {

    render() {
        return (
            <View style={{justifyContent:'center',flex:1}}>
                <Button title="+" onPress={()=>this.props.increaseCount()} ></Button>
                <Text style={{alignSelf:'center'}}>{this.props.count}</Text>
                <Button title="-" onPress={()=>this.props.decreaseCount()}></Button>
            </View>
        )
    }
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
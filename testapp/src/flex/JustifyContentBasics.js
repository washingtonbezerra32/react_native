import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={{ 
                flex: 1, 
                flexDirection: "column",
                justifyContent: 'space-evenly',
                }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
        </View>
        )
    }
}



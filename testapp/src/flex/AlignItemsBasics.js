import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AlignItemsBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ height: 50, backgroundColor: 'yellow' }} />
                <View style={{ height: 100, backgroundColor: 'green' }} />
            </View>
        )
    }
}



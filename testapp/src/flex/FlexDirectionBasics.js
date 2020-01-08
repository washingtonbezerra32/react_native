import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            </View>
        )
    }
}


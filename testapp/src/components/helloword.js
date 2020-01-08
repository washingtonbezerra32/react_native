import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class helloword extends Component {
    render() {
        return (
            <View style={styles.principal}>
            <Text> Maria Fernanda, Andressa e Fabiana </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{ 
        flex:1, 
        justifyContent: "center",
        alignItems: "center"}
})

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Olá {this.props.name}!</Text>
            </View>

        );
    }
}

export default class lots_of_greetings extends Component {
    render() {
        return (
            <View>
                <Greeting name='Washington' />
                <Greeting name='Fabiana' />
                <Greeting name='Maria Fernanda' />
                <Greeting name='Andressa' />

            </View>
        )
    }
}


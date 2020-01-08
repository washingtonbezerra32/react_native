import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Blink extends Component {
    componentDidMount() {
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000)
    }

    state = { isShowingText: true }
    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        );
    }
}

export default class blinkapp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

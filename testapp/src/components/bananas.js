import React, { Component } from 'react'
import { Image,StyleSheet, View} from 'react-native'

export default class bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Image source={pic} style={styles.principal} />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        width: 193, 
        height: 110}
})

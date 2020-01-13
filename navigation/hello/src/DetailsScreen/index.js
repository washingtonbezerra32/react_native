import React, { Component } from 'react'
import { Text, StyleSheet, View , Button} from 'react-native'


export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detalhes</Text>
        <Button
          title="Detalhes Novamente"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Tela Principal"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})


DetailsScreen.navigationOptions = {
  title: 'Detalhes'
}
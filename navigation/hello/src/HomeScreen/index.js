import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela Principal</Text>
        <Button
          title="Detalhes"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


// export default function HomeScreen({navigation}) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
// }



const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})



HomeScreen.navigationOptions = {
  title: 'Tela Principal',
};
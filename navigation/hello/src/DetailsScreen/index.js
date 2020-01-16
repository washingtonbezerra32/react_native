import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'


// export default function DetailsScreen({navigation}) {
//     return (
//       <View style={styles.container}>
//         <Text>Detalhes</Text>
//         <Button
//           title="Detalhes Novamente"
//           onPress={() => navigation.navigate('Details')}
//         />
//         <Button
//           title="Tela Principal"
//           onPress={() => navigation.navigate('Home')}
//         />
//         <Button
//           title="Voltar"
//           onPress={() => navigation.goBack()}
//         />

//       </View>
//       )
// }

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
      <Text>
        itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
      </Text>
      <Text>
        Message: {' '}{JSON.stringify(navigation.getParam('message', 'default value'))}
      </Text>

      <Button
        title="Detalhes Novamente"
        onPress={() => navigation.push('Details', { itemId: Math.floor(Math.random() * 100) })}
      />
      <Button
        title="Tela Principal"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})


DetailsScreen.navigationOptions = {
  title: 'Detalhes'
}
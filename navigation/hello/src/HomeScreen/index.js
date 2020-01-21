import React, { Component,useState,useEffect} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import Icone from "./../Icone";
export default function HomeScreen({ navigation }) {

  
  
  const [valor,setValor] = useState(1)
  const [meu,setMeu] = useState(2)
  

  const _increaseCount = () => {
    setValor(valor + 1);
    setMeu(meu + 1);
    
    console.log("Valor "+ valor)
  }; 
  
  useEffect(() => {
    
    navigation.setParams({ increaseCount: _increaseCount });
    console.log("executado quando o componente montou")
    console.log(navigation)
    
    
  },[valor,meu]);

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Principal</Text>
      <Text>Count: {valor}</Text>
      <Text>Meu: {meu}</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          message: 'O Maria Fernanda é foda',
        })}
      />
    </View>
  );
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



HomeScreen.navigationOptions = ({ navigation }) => {
  const params = navigation.state.params || {};

  return {
    headerTitle: () => <Icone />,
    headerLeft: () => (
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Info"
        color={Platform.OS === 'ios' ? '#fff' : null}
      />
    ),
    headerRight: () => (
      <Button onPress={params.increaseCount} title="+1" color={Platform.OS === 'ios' ? "#fff" : null} />
    ),
  };
};






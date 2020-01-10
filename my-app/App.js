import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {index} from "./src/index";

export default function App() {
  return (
    <View style={styles.container}>
      index
      <Text>Open up App.js to start working on your app!test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

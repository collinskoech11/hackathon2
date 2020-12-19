import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from './firstComponent/LotsOfGreetings';

 

export default function App  (){
  return (
    <View style={styles.container}>
      <LotsOfGreetings/>
      <Text>Hello, world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f123',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

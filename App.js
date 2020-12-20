import MainScreen from './secondComponent/MainScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreetings from './firstComponent/LotsOfGreetings';
import Nav from './secondComponent/Nav';

 

export default function App  (){
  return (
    <View style={styles.container}>
      <Nav/>
      <LotsOfGreetings/>
      <MainScreen/>
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NaigationBar from 'react-native-navbar';

 

export default function App() {
  return (
    <View style={styles.container}>
      <NaigationBar title={titleConfig} rightButton={rightButtonConfig}/>
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

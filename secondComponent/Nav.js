import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 

export default function Nav  (){
  return (
    <View style={styles.container}>
      <Text >Nav Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      width:'10%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


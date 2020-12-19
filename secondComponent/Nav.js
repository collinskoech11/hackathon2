import React from 'react';
import { StyleSheet} from 'react-native';
import NavigationBar from 'react-native-navbar';

 

export default function Nav  (){
  return (
    <NavigationBar style={styles.container}/>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
  });


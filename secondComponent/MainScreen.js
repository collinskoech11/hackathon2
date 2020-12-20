
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class MainScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <StackNavigator/>
        <Button onPress={() => this.props.navigation.navigate("DetailScreen")} title="Detail Page" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default MainScreen;

import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => (
  <Surface style={styles.surface} elevation={8}>
    <Text style={styles.text}>Hello, Madlang People! Mabuhay!</Text>
  </Surface>
);

export default MyComponent;

const styles = StyleSheet.create({
  surface: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6EC7',
  },
  text: {
    fontSize: 18,
    color: 'white', 
  },
});

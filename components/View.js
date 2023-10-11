import React from 'react';
import {View, Text} from 'react-native';

const MyComponent= () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.5}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>Hello Madlang People!</Text>
    </View>
  );
};

export default MyComponent;
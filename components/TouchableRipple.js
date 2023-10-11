import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const MyComponent = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(100, 0, 0, .20)" 
    style={{ padding: 10, borderRadius: 5, backgroundColor: 'violet' }}
  >
    <Text style={{ color: 'Black' }}>Press here</Text>
  </TouchableRipple>
);

export default MyComponent;

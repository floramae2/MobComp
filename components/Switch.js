import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

const MyComponent = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.switchContainer}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="#007AFF" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Tooltip } from 'react-native-paper';

const MyComponent = () => (
  <View style={styles.tooltipContainer}>
    <Tooltip title="Selected Camera" style={styles.tooltip}>
      <IconButton icon="camera" selected size={24} onPress={() => {}} style={styles.iconButton} />
    </Tooltip>
  </View>
);

const styles = StyleSheet.create({
  tooltipContainer: {
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: '#007AFF',
  },
  iconButton: {
    backgroundColor: 'white',
  },
});

export default MyComponent;

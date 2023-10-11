import React, { useState } from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';

const Forms = () => {
  const [isCheckedStandardShipping, setIsCheckedStandardShipping] = useState(false);
  const [isCheckedExpressShipping, setIsCheckedExpressShipping] = useState(false);
  const [isCheckedGiftWrapping, setIsCheckedGiftWrapping] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Options:</Text>
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedStandardShipping}
            onValueChange={() => setIsCheckedStandardShipping(!isCheckedStandardShipping)}
          />
          <Text style={styles.checkBoxLabel}>Standard Shipping</Text>
        </View>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedExpressShipping}
            onValueChange={() => setIsCheckedExpressShipping(!isCheckedExpressShipping)}
          />
          <Text style={styles.checkBoxLabel}>Express Shipping</Text>
        </View>
        <View style={styles.checkBoxItem}>
          <CheckBox
            value={isCheckedGiftWrapping}
            onValueChange={() => setIsCheckedGiftWrapping(!isCheckedGiftWrapping)}
          />
          <Text style={styles.checkBoxLabel}>Gift Wrapping</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    backgroundColor: 'lightblue', // Add the background color here
  },
  label: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flexDirection: 'column',
  },
  checkBoxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkBoxLabel: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default Forms;

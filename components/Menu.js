import * as React from 'react';
import { View, Text } from 'react-native'; // Import Text from 'react-native'
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 100,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu}>
              <Text style={{ fontSize: 24, fontWeight: 'bold',color:'green', }}>Main Dishes Menu</Text>
            </Button>
          }>
          <Menu.Item onPress={() => {}} title="Spaghetti " />
          <Divider />
          <Menu.Item onPress={() => {}} title="Chicken" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Beef Stir-Fry" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Grilled Steak" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Salmon Teriyaki" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Grilled Steak" />
          <Divider />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;

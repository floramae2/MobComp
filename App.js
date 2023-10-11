import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import  CustomDrawer  from './src/CustomDrawer';
import Checkbox from './components/Checkbox';
import Alert from './components/Alert';
import InputText from './components/InputText';
import Menu from './components/Menu';
import Modal from './components/Modal';
import Surface from './components/Surface';
import TouchableRipple from './components/TouchableRipple';
import RadioButton from './components/RadioButton';
import ScrollView  from './components/ScrollView';
import SearchBar  from './components/SearchBar';
import SegmentedButton  from './components/SegmentedButton';
import Switch  from './components/Switch';
import Banner  from './components/Banner';
import Tooltip from './components/Tooltip';
import FlatList from './components/FlatList';
import KeyboardAvoidingView from './components/KeyboardAvoidingView';
import RefreshControl from './components/RefreshControl';
import View from './components/View';
import TouchableHighlight from './components/TouchableHighlight';
import VirtualizedList from './components/VirtualizedList';

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Checkbox" component={Checkbox} />
        <Drawer.Screen name="Alert" component={Alert} />
       <Drawer.Screen name="InputText" component={InputText} />
       <Drawer.Screen name="Menu" component={Menu} />
       <Drawer.Screen name="Modal" component={Modal} />
       <Drawer.Screen name="Surface" component={Surface} />
       <Drawer.Screen name="TouchableRipple" component={TouchableRipple} />
       <Drawer.Screen name="RadioButton" component={RadioButton} />
       <Drawer.Screen name="ScrollView" component={ScrollView} />
       <Drawer.Screen name="SearchBar" component={SearchBar} />
       <Drawer.Screen name="SegmentedButton" component={SegmentedButton} />
       <Drawer.Screen name="Switch" component={Switch} />
       <Drawer.Screen name="Banner" component={Banner} />
       <Drawer.Screen name="Tooltip" component={Tooltip} />
       <Drawer.Screen name="FlatList" component={FlatList} />
       <Drawer.Screen name="KeyboardAvoidingView" component={KeyboardAvoidingView} />
       <Drawer.Screen name="RefreshControl" component={RefreshControl} />
       <Drawer.Screen name="View" component={View} />
       <Drawer.Screen name="TouchableHighlight" component={TouchableHighlight} />
       <Drawer.Screen name="VirtualizedList" component={VirtualizedList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  },
});
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Setting } from '../screens/Setting';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768  ? 'permanent' : ' front',
        // headerShown: false  // Oculta la hamburguesa
      }}
    
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Setting" options={{title:'Settings'}} component={Setting} />
    </Drawer.Navigator>
  );
}
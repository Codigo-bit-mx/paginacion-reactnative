import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tabs1Screen = () => {
  return (
    <View>
        <Text>Tabs1Screen</Text> 
        <Text>
        <TouchableIcon iconName="bar-chart-outline"/>   
        <TouchableIcon iconName="airplane-outline"/>
        <TouchableIcon iconName="bandage-outline"/>
        <TouchableIcon iconName="analytics-outline"/>    
        <TouchableIcon iconName="arrow-up-outline"/>
        <TouchableIcon iconName="barbell-outline"/>
        <TouchableIcon iconName="car-sport-outline"/>
        </Text>
    </View>
  )
}




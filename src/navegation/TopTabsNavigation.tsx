import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

export const TopTabsNavigation = () => {

  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <TopTab.Navigator
      style={{ paddingTop }}
    screenOptions={({route}) => ({
      tabBarPressColor: 'green',
      tabBarShowIcon: true,
      tabBarIndicatorStyle:{
        backgroundColor: 'green'
      },
      tabBarStyle: {
        elevation: 0
      },
      tabBarIcon: ({color}) => {
        let iconName: string = ''

        switch(route.name){
          case 'Chat': 
          iconName = 'chatbubble-outline'
          break;

          case 'Contact': 
          iconName = 'call-outline'
          break;

          case 'Album': 
          iconName = 'albums-outline'
          break; 

        }
        return <Text style = {{color}}>
           <Icon name={iconName} size={20} color="green" /> 
           </Text>
      }

    })
  }
    >
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Album" component={AlbumScreen} />
    </TopTab.Navigator>
  );
}
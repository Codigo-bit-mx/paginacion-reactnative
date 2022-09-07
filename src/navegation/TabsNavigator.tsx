import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { Tabs2Screen } from '../screens/Tabs2Screen';
import { Tabs3Screen } from '../screens/Tabs3Screen';
import { StackNavigator } from './StackNavigator';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabsNavigation } from './TopTabsNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabsNavigator = () => {
    return Platform.OS === 'ios'
     ? <TabsNavigatorIOS />
     : <TabsNavigatorAndroid />

}

const BottonTabAndroid = createMaterialBottomTabNavigator()

const TabsNavigatorAndroid = () => {
    return(
    <BottonTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: 'black'
        }}
        screenOptions={({route}) => ({
        
            tabBarIcon:({color, focused}) => {
                let iconName: string = ''
                
                switch(route.name) {
                    case 'Tabs1Screen': 
                        iconName='arrow-up-circle-outline'   
                    break
                    
                    case 'Tabs2Screen':
                        iconName='apps-outline'    
                    break
    
                    case 'StackNavigator':
                        iconName='bookmarks-outline'                
                    break 
                }
                return <Text style={{color}}>
                    <Icon name={iconName} size={20} color='green' />
                </Text>
            }
        })}
    >
     <BottonTabAndroid.Screen name="Tabs1Screen" component={Tabs1Screen} />
     <BottonTabAndroid.Screen name="Tabs2Screen" component={TopTabsNavigation} />
     <BottonTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    
    </BottonTabAndroid.Navigator>
    )
}


const BottonTabIOS = createBottomTabNavigator();

const TabsNavigatorIOS = () => {
  return (
    <BottonTabIOS.Navigator
    
    screenOptions={({route}) => ({
        tabBarActiveTintColor: 'green',
        tabBarStyle: {
          borderTopColor: 'green',
          // borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
            fontSize: 12
        },
        tabBarIcon:({color, focused, size}) => {
            let iconName: string = ''
            
            switch(route.name) {
                case 'Tabs1Screen': 
                    iconName='T1'   
                break
                
                case 'Tabs2Screen':
                    iconName='T2'    
                break

                case 'StackNavigator':
                    iconName='ST'                
                break 
            }
            return <Text style={{color}}> {iconName} </Text>
        }

    })}
    >   
      {/* <Tab.Screen name="Tabs1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text>T1</Text> }} component={Tabs2Screen} /> */}
      <BottonTabIOS.Screen name="Tabs1Screen" component={Tabs1Screen} />
      <BottonTabIOS.Screen name="Tabs2Screen" component={TopTabsNavigation} />
      <BottonTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottonTabIOS.Navigator>
  );
}



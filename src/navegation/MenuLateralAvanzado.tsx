import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Setting } from '../screens/Setting';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TabsNavigator } from './TabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateralAvanzado = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
    //   screenOptions={{
    //     drawerType: width >= 768  ? 'permanent' : ' front',
    //     // headerShown: false  // Oculta la hamburguesa
    //   }}
      drawerContent= {(props) => <MenuInterno  {...props}/> }
    >
      <Drawer.Screen name="TabNavigator" options={{title:'Home'}} component={TabsNavigator} />
      <Drawer.Screen name="Setting" options={{title:'Settings'}} component={Setting} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
   
    return (

       <DrawerContentScrollView>
         <View style={styles.containerPicture}>
            <Image 
                source={{
                    uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg'
                }}
                style={styles.avatarPicture}
            />    
        </View>

        {/* Opciones de menu */}

        <View style={{marginTop: 10}}>
            <TouchableOpacity
                style={{
                  ...styles.btnMenu,
                  marginHorizontal: 20,
                  flexDirection: 'row'}}
                onPress={() => navigation.navigate('TabNavigator')}
            >
                <Icon name="home-outline" size={20} color='green' />
                <Text style={styles.textoMenu}> Home</Text>
              
            </TouchableOpacity>

            <TouchableOpacity
                 style={{
                  ...styles.btnMenu,
                  marginHorizontal: 20,
                  flexDirection: 'row'
                }}
                 onPress={() => navigation.navigate('Setting')}
            >
                <Icon name="settings-outline" size={20} color='green' />
                <Text style={styles.textoMenu}>Settings</Text>
                
            </TouchableOpacity>
        </View>

       </DrawerContentScrollView>

    )

}


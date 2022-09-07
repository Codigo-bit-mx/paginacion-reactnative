import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navegation/StackNavigator';
import { MenuLateralBasico } from './src/navegation/MenuLateralBasico';
import { MenuLateralAvanzado } from './src/navegation/MenuLateralAvanzado';
import { TabsNavigator } from './src/navegation/TabsNavigator';
import { AuthProvider } from './src/context/authContext';


const App = () => {
  return (
      
    <NavigationContainer>
      <AppState>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateralAvanzado />
      {/* <TabsNavigator /> */}
      </AppState>
    </NavigationContainer>
    
  )
}

const AppState = ({children}: any ) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App


// npm install -i -g --force react-native-cli -> solucion a error por react-navigate 
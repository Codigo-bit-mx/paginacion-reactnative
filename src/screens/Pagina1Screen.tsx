import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View, Text, Button } from 'react-native'
import {styles} from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> {
  navigation: any 
};

export const Pagina1Screen = ( { navigation }:Props ) => {
 
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
          title='Menu'
          onPress={ () => navigation.toggleDrawer()}
        />
      )
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
    
    <Button 
      title='Ir pagina 2'
      onPress={ () => navigation.navigate('Pagina2Screen')}
    />

    <View style={{flexDirection:'row'}}>

    <TouchableOpacity
    style={{...styles.botonGrande, backgroundColor:'blue'}}
     onPress={() => navigation.navigate('PersonaScreen', {id: 1, name: 'Ossmar'})}
    >
        <Text style={styles.textoBotonGrande}>Ir a Ossmar</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.botonGrande}
     onPress={() => navigation.navigate('PersonaScreen', {id: 2, name: 'Ana'})}
    >
        <Text style={styles.textoBotonGrande}>Ir a Ana</Text>
    </TouchableOpacity>

    </View>


    
    </View>
  )
}

import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {styles} from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {
  navigation: any
};

export const Pagina2Screen = ({navigation}:Props) => {
  
  useEffect(() => {
    navigation.setOptions({
      title: 'hola mundo',
      headerBackTitle: 'back'
    })
  })

  return (
    <View>
            
        <Text style={styles.title}>Pagina2Screen</Text>

    <Button 
      title='Ir pagina 3'
      onPress={ () => navigation.navigate('Pagina3Screen')}
    />

    </View>
  )
}

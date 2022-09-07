import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { AuthContext } from '../context/authContext';
import Icon from 'react-native-vector-icons/Ionicons';


export const Setting = () => {

  const {authState} = useContext(AuthContext)

  return (
    <View>

        <Text>
            Ajustes
        </Text>

      <Text>
        { JSON.stringify(authState, null, 4)}
      </Text>
      
     { authState.favoriteIcon && (
      <Icon name={authState.favoriteIcon !} size={150} color="#900"/>
     ) }


    </View>
  )
}



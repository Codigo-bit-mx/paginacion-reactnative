import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/authContext';

export const ContactScreen = () => {

  const {signIn, authState} = useContext(AuthContext)
  const {isLoggedIn} = authState

  return (
    <View>
        <Text> ContactScreen </Text>
        { !isLoggedIn && <Button title='Sign In' onPress={ signIn } /> } 
    </View>
  )
}

import React, { useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navegation/StackNavigator';
import { AuthContext } from '../context/authContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const Persona = ({route, navigation}:Props) => {
    
const params = route.params;

    const { changeName } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    })

    useEffect(() => {
        changeName(params.name)
    }, [])
  
    return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {
                JSON.stringify(params, null, 3)
            }
        </Text>
    </View>
  )
}

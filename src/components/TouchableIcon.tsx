import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/authContext';

interface Props {
    iconName: string
}


export const TouchableIcon = ({iconName}:Props) => {
 
    const { changeNameIcon } = useContext(AuthContext)
 
    return (

    <TouchableOpacity
        onPress={() => changeNameIcon(iconName)}
    >
    <Icon name={iconName} size={50} color="#900" />
    
    </TouchableOpacity> 

  
    )
}

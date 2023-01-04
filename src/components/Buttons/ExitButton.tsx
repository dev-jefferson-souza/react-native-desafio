import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
interface props extends TouchableOpacityProps{
}

export const ExitButton = ({...rest} : props) => {

    return (  
      <TouchableOpacity 
        activeOpacity={0.7}
        style={{...styles.container}}
        {...rest}
      >
        <Ionicons name="ios-exit-outline" size={32} color="#fff" />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#121216',
   borderRadius: 16,
   padding: 8,
  },
})
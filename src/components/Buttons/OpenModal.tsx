import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

interface props extends TouchableOpacityProps{
}

export const OpenModal = ({...rest} : props) => {

    return (  
      <TouchableOpacity 
        activeOpacity={0.7}
        style={{...styles.container}}
        {...rest}
      >
        <AntDesign name="plus" size={42} color="black" />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#4611ad',
   borderRadius: 16,
   padding: 8,
   
   position: "absolute",
   bottom: 14
  },
})
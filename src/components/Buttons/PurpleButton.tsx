import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface props extends TouchableOpacityProps{
    size: number,
    title: string
}

export const PurpleButton = ({size, title, ...rest} : props) => {

    return (  
       <TouchableOpacity 
        style={{...styles.container, width: size}}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: '#4611ad',
     borderRadius: 6,
     alignItems:"center",
     paddingVertical: 4
     
    },
    text:{
      color: '#fff',
      fontSize: 24,
    }
  })
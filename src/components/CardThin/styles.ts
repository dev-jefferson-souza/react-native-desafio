import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 240,
        alignItems:"center",
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 12,
        backgroundColor:'#151519',
        resizeMode:"contain"
        
    },
    title:{
        fontSize: 18,
        width:'100%',
        textAlign:"center",
        fontWeight: "800",
        color: '#fff',
        position: "absolute",
        top: 10,
        zIndex: 2,
    },
    version:{
        fontSize: 14,
        paddingVertical: 4,
        fontWeight: '900',
        color: '#fff',
        textAlign:"center",
        position:"absolute",
        bottom: 0,
        width:'100%',
        backgroundColor:"#4611ad",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    }
  })
  
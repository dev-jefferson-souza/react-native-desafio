import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:"row",
        backgroundColor:'#151519',
        borderRadius: 12,
        justifyContent:"space-between",
        alignItems:"center",
        padding: 10
        
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor:'#151519',
        resizeMode:"contain",
        flexDirection:"row",
        marginRight: 8
        
    },
    title:{
        fontSize: 18,
        textAlign:"center",
        fontWeight: "800",
        color: '#fff',
        zIndex: 2,
    },
    version:{
        fontSize: 14,
        padding: 4,
        height: 24,
        fontWeight: '900',
        color: '#fff',
        textAlign:"center",
        backgroundColor:"#4611ad",
        borderRadius: 12,
    }
  })
  
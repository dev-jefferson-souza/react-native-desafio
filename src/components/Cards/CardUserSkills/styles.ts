import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 220,
        backgroundColor:'#151519',
        borderRadius: 12,
        justifyContent:"space-between",
        paddingTop: 24,
        marginHorizontal: 4
    },
    image:{
        width: 100,
        height: 100,
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
        borderRadius: 12,
    },
    deleteButton:{
        backgroundColor:'#de2a30',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 8,
        width: '100%'
    },
    updateButton:{
        backgroundColor:'#4611ad',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 8,
        width: '100%'
    },
    deleteText:{
        textAlign:"center",
        fontWeight: '800',
        color: '#fff'
    },
    levelBox:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        alignSelf:"center",
        width: '100%',
        marginVertical: 12
    },
    counterText:{
        color: '#fff',
        width: 90,
        textAlign:"center",
        fontSize: 12,
        fontWeight: "800"
    }
  })
  
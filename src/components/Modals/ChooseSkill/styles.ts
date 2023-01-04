import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  modalContentView: {
    borderRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    
   
    borderColor:'#fff',
    backgroundColor:'#0d0d0f',
    paddingHorizontal:40,
    paddingVertical:30,

    width: '100%',
    height: 420,
    marginTop:'auto',

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    },
    modalOverlay: {
        position:'absolute',
        backgroundColor: 'rgba(0,0,0,0.75)',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    subtitle:{
        color: '#dedede',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 8,
        marginRight: 8
    }, 
    tipsText:{
        color:'#8a8a8a',
        textAlign:"center",
        marginTop: 24
    }
});
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        borderRadius: 8,

        paddingLeft: 12,
        paddingRight: 50,
        color: '#8a8a8a',

        backgroundColor: '#131316',
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: '800',
        color: '#8a8a8a',
        textAlignVertical:"center",
        marginBottom: 8,
    },
    secureView: {
        width: '100%',
        height: 48,
        justifyContent: "center",
        flexDirection: 'row',
    },
    eyeIcon:{
        alignSelf:'center',
        position: 'absolute',
        right: 18,
    }
})
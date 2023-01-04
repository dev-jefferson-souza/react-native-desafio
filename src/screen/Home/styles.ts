import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 64 : 52,
    backgroundColor: '#0d0d0f',
    height: '100%',
    alignItems:"center",
    paddingHorizontal: 24
  },
  boxForm:{
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: "center"
  },
  lastText:{
    color: '#8a8a8a',
    marginBottom: 26
  },
  buttonText:{
    color: '#4611ad',
    marginLeft: 8
  },
  subtitle:{
    color: '#dedede',
    fontSize: 24,
    fontWeight: '500',
},
})
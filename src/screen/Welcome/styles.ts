import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 64 : 52,
    paddingHorizontal: 24,
    backgroundColor: '#0d0d0f',
    height: '100%',
    alignItems:"center"
  },
  subtitle:{
    color: '#dedede',
    fontSize: 34,
    fontWeight: '500',
    marginBottom: 8,
    marginRight: 8
  },
  introText: {
    color:'#8a8a8a',
    fontSize: 18,
    textAlign:"center",
    width: '95%'
  },
  createText:{
    color: '#8a8a8a',
    fontSize: 16,
    fontWeight: '900'
  }
})
import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { AuthContext } from "../context/AuthContext";
import { PrivateRoute } from './private.routes';
import { PublicRoute } from './public.routes';


export const Routes = () => {

  const { auth } = React.useContext(AuthContext);
  const { setAuth } = React.useContext(AuthContext);
  
  React.useEffect(() => {
    verifyingUser()
  })

  const verifyingUser = async () => {
    const response = await AsyncStorage.getItem("@ID")
    if(response != null && response != undefined){
      setAuth(true)
    }
  }
  
  return(
    auth ? <PrivateRoute/> : <PublicRoute/> 
  )
}
import React from "react"
import { PrivateRoute } from './private.routes';
import { PublicRoute } from './public.routes';


export const Routes = () => {

  const auth  = false
  
  return(
    auth ? <PrivateRoute/> : <PublicRoute/> 
  )
}
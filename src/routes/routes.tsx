import React from "react"
import { PrivateRoute } from './private.routes';
import { PublicRoute } from './public.routes';


export const Routes = () => {

  const auth  = true
  
  return(
    auth ? <PrivateRoute/> : <PublicRoute/> 
  )
}
import React from "react";
import userSkillservice from "../api/services/userSkillService";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false);

  const [ userSkillsList, setUserSkillList ] = React.useState()

  React.useEffect(() => {
    filteringSkils()
  }, [])

  const filteringSkils = async () => {
    const response = await userSkillservice.userSkillGETALL()
    setUserSkillList(response.data)
  }


  return (
    <AuthContext.Provider value={{auth, setAuth, userSkillsList, filteringSkils}}>
      {children}
    </AuthContext.Provider>
  );
};
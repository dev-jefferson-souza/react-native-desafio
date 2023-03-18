import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Toast } from "toastify-react-native";
import { api } from "../api/api";
import userService from "../api/services/userService";
import userSkillservice from "../api/services/userSkillService";
import { AuthContextType, AuthProviderProps } from "../models/authContext";
import { signInProps } from "../models/signIn";
import { userModel } from "../models/userModel";
import { userSkillFromUser } from "../models/userSkillModel";

const LOCAL_STORAGE_TOKEN_KEY = "@neki-desafio-token";
const LOCAL_STORAGE_USER_KEY = "@neki-desafio-user";

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  signIn: async () => {},
  getUsersSkillsUpdated: async () => {},
  usersSkills: null,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<userModel | null>(null);
  const [usersSkills, setUserSkills] = useState<userSkillFromUser[]>([]);

  useEffect(() => {
    async function loadStorageData() {
      const storedToken = await AsyncStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
      const storedUser = await AsyncStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    token !== null
      ? (api.defaults.headers.common["Authorization"] = token)
      : delete api.defaults.headers.common.Authorization;
  }, [token]);

  async function signIn(request: signInProps) {
    try {
      const response = await userService.userLOGIN(request.user);
      if (response.status === 200) {
        if (request.savePassword === true) {
          await AsyncStorage.setItem(
            LOCAL_STORAGE_TOKEN_KEY,
            response.data.token
          );
          await AsyncStorage.setItem(
            LOCAL_STORAGE_USER_KEY,
            JSON.stringify(response.data.usuario)
          );
        }
        api.defaults.headers.common["Authorization"] = response.data.token;
        setToken(response.data.token);
        setUser(response.data.usuario);
        setTimeout(() => {
          Toast.success(`Bem vindo, ${request.user.login}!`);
        }, 200);
      }
    } catch (err) {
      Toast.error("Usuário ou senha incorreta!");

      console.log(err);
    }
  }

  async function getUsersSkillsUpdated() {
    try {
      const response = await userSkillservice.userSkillGetSkillFromUser(
        user.id
      );
      setUserSkills(response.data);
    } catch (e) {
      console.log(e);
      Toast.error("Houve um problema ao carregar as habilidades");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        signIn,
        getUsersSkillsUpdated,
        usersSkills,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

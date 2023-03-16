import React, { useState } from "react";
import {
  Alert,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";

import userService from "../../api/services/userService";
import { PurpleButton } from "../../components/Buttons/PurpleButton";
import { CommonInput } from "../../components/Inputs/CommonInput/CommonInput";
import { SecureInput } from "../../components/Inputs/SecureInput/SecureInput";
import { Loading } from "../../components/Loading/Loading";
import { Logo } from "../../components/Logo/Logo";
import { Spacer } from "../../components/Spacer/Spacer";
import { userModelLogin } from "../../models/userModel";
import { styles } from "./styles";

export const Register = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const onChangeLogin = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setLogin(value);
  };

  const onChangePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setPassword(value);
  };

  const onChangePasswordConfirmation = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setPasswordConfirmation(value);
  };

  async function registerUser() {
    const user: userModelLogin = {
      login: login,
      password: password,
    };

    if (password === passwordConfirmation) {
      try {
        const response = await userService.userPOST(user);
        {
          response.status === 201 ? navigation.navigate("Login") : null;
        }
      } catch (e) {
        alert("Já existe uma conta com esse login");
        console.log(e);
      }
    } else {
      Alert.alert("Ops...", "As senhas não coincidem");
    }
  }

  return (
    <View style={styles.container}>
      <Logo size={48} />
      <Loading visible={isLoading} />
      <View style={styles.boxForm}>
        <CommonInput
          title="Login"
          placeholder="Login"
          onChange={onChangeLogin}
        />
        <Spacer size={24} />
        <SecureInput
          title="Criar Senha"
          placeholder="Digite sua senha"
          onChange={onChangePassword}
        />
        <Spacer size={24} />
        <SecureInput
          title="Confirmar Senha"
          placeholder="Digite sua senha novamente"
          onChange={onChangePasswordConfirmation}
        />
        <Spacer size={48} />
        <PurpleButton size={120} title={"Criar"} onPress={registerUser} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.lastText}> Já possui uma conta?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

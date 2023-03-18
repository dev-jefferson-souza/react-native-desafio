import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";

import Container, { Toast } from "toastify-react-native";
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

  function loginSuccessful() {
    navigation.navigate("Login");
    setTimeout(() => {
      Toast.success("Usuário ou senha incorreta!");
    }, 200);
  }

  async function registerUser() {
    const user: userModelLogin = {
      login: login,
      password: password,
    };

    if (
      password === passwordConfirmation &&
      password !== "" &&
      passwordConfirmation !== ""
    ) {
      try {
        const response = await userService.userPOST(user);
        console.log("rodou");
        {
          response.status === 201 ? loginSuccessful() : null;
        }
      } catch (e) {
        Toast.error("Essa conta já existe");
        console.log(e);
      }
    } else {
      Toast.error("As senhas não coincidem");
    }
  }

  return (
    <View style={styles.container}>
      <Container
        theme="dark"
        positionValue={28}
        duration={1400}
        position="top"
        width={350}
        style={{ backgroundColor: "#000" }}
      />
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
        <PurpleButton
          disabled={
            login !== "" && password !== "" && passwordConfirmation !== ""
              ? false
              : true
          }
          size={120}
          title={"Criar"}
          onPress={
            login !== "" && password !== "" && passwordConfirmation !== ""
              ? registerUser
              : null
          }
        />
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

import React, { useContext, useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { PurpleButton } from "../../components/Buttons/PurpleButton";

import { CommonInput } from "../../components/Inputs/CommonInput/CommonInput";
import { SecureInput } from "../../components/Inputs/SecureInput/SecureInput";
import { Logo } from "../../components/Logo/Logo";
import { Spacer } from "../../components/Spacer/Spacer";
import { AuthContext } from "../../context/AuthContext";
import { signInProps } from "../../models/signIn";
import { userModelLogin } from "../../models/userModel";
import { styles } from "./styles";

export const Login = ({ navigation }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [savePassword, setSavePassword] = useState(false);
  const { signIn } = useContext(AuthContext);

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

  function toggleCheckbox() {
    setSavePassword(!savePassword);
  }

  async function handleSignIn() {
    const user: userModelLogin = {
      login: login,
      password: password,
    };

    const request: signInProps = {
      savePassword: savePassword,
      user: user,
    };

    signIn(request);
  }

  return (
    <View style={styles.container}>
      <Logo size={48} />
      <View style={styles.boxForm}>
        <CommonInput
          title="Login"
          placeholder="Login"
          onChange={onChangeLogin}
        />
        <Spacer size={24} />
        <SecureInput
          title="Senha"
          placeholder="Digite sua senha"
          onChange={onChangePassword}
        />

        <CheckBox
          title="Salvar senha"
          checked={savePassword}
          onPress={toggleCheckbox}
          containerStyle={{
            alignSelf: "flex-start",
            backgroundColor: "#0d0d0f",
            borderColor: "#0d0d0f",
          }}
          checkedColor={"#4611ad"}
        />
        <Spacer size={48} />
        <PurpleButton size={120} title={"Entrar"} onPress={handleSignIn} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.lastText}> Não possui uma conta?</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

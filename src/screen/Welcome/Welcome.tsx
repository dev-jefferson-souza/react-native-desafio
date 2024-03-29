import React from "react";
import { Text, View } from "react-native";

import { PurpleButton } from "../../components/Buttons/PurpleButton";
import { Logo } from "../../components/Logo/Logo";
import { Spacer } from "../../components/Spacer/Spacer";
import { styles } from "./styles";

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo size={200} />
      <Text style={styles.subtitle}>Bem vindo!!</Text>
      <Text style={styles.introText}>
        Aqui você poderá gerenciar, suas skills de forma rápida e prática
      </Text>
      <View style={{ alignItems: "center", position: "absolute", bottom: 32 }}>
        <PurpleButton
          size={140}
          title={"Acessar"}
          onPress={() => navigation.navigate("Login")}
        />
        <Spacer size={24} />
        <Text
          style={styles.createText}
          onPress={() => navigation.navigate("Register")}
        >
          Criar conta
        </Text>
      </View>
    </View>
  );
};

import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Toast } from "toastify-react-native";
import userSkillservice from "../../../api/services/userSkillService";
import { userSkillPostModel } from "../../../models/userSkillModel";

import { AuthContext } from "../../../context/AuthContext";
import { styles } from "./styles";

interface CardThinProps extends TouchableOpacityProps {
  name: string;
  imageURL: string;
  version: string;
  id: number;
  onpress: any;
}

export const CardThin = ({
  name,
  imageURL,
  version,
  id,
  onpress,
}: CardThinProps) => {
  const { user } = React.useContext(AuthContext);

  const userSkill: userSkillPostModel = {
    skill: { id: id },
    user: { id: user?.id || 0 },
  };

  const postCategory = async () => {
    try {
      await userSkillservice.userSkillPOST(userSkill);
      Toast.success("Adicionada com sucesso!");
    } catch (err) {
      console.log(err);
      Toast.error(
        "Não foi possível selecionar a categoria, tente novamenta mais tarde."
      );
    }
    onpress();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={() => postCategory()}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.image} source={{ uri: imageURL }} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.version}>Versão {version}</Text>
    </TouchableOpacity>
  );
};

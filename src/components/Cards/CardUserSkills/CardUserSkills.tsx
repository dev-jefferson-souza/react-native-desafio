import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import userSkillservice from "../../../api/services/userSkillService";

import { AuthContext } from "../../../context/AuthContext";
import {
  userSkillModel,
  userSkillUpdateModel,
} from "../../../models/userSkillModel";
import { styles } from "./styles";

interface CardUserSkillsProps extends TouchableOpacityProps {
  skillInfo: userSkillModel;
}

export const CardUserSkills = ({ skillInfo }: CardUserSkillsProps) => {
  const { getUsersSkillsUpdated, user } = React.useContext(AuthContext);
  const [newLevel, setNewLevel] = React.useState<number>(
    skillInfo.knowledgeLevel
  );
  const [numberOfLines, setNumberOfLines] = React.useState<number>(3);

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const now = new Date();
  const formattedDate = formatDate(now);

  const userSkill: userSkillUpdateModel = {
    knowledgeLevel: newLevel,
    updatedAt: formattedDate,
    skill: { id: skillInfo.id },
    createdAt: skillInfo.createdAt,
    user: { id: user.id },
  };

  const updateUserSkill = async () => {
    try {
      const response = await userSkillservice.userSkillUPDATE(
        skillInfo.id,
        userSkill
      );
      getUsersSkillsUpdated();
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Ops...",
        "Não foi possível atualizar essa habiliidade. Tente novamente mais tarde."
      );
    }
  };

  const removeUserSkill = async () => {
    try {
      const response = await userSkillservice.userSkillDELETE(skillInfo.id);
      getUsersSkillsUpdated();
    } catch (err) {
      console.log(err);
      Alert.alert(
        "Ops...",
        "Não foi possível remover essa habiliidade. Tente novamente mais tarde."
      );
    }
  };

  const increaseLevel = () => {
    newLevel == 10 ? setNewLevel(10) : setNewLevel(newLevel + 1);
  };

  const decreaseLevel = () => {
    newLevel == 0 ? setNewLevel(0) : setNewLevel(newLevel - 1);
  };

  function handleNumberOfLines() {
    {
      numberOfLines === 3 ? setNumberOfLines(100) : setNumberOfLines(3);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title} numberOfLines={1}>
          {skillInfo.skill.name}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: skillInfo.skill.image_url }}
        />
        <Text
          style={styles.description}
          numberOfLines={numberOfLines}
          onPress={handleNumberOfLines}
        >
          {skillInfo.skill.description}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 52 }}>
        <Text style={styles.version} numberOfLines={1}>
          Versão {skillInfo.skill.version}
        </Text>
        <View style={styles.levelBox}>
          <TouchableOpacity onPress={() => decreaseLevel()}>
            <AntDesign name="minuscircleo" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.counterText}>
            Nível de conhecimento {newLevel}
          </Text>
          <TouchableOpacity onPress={() => increaseLevel()}>
            <AntDesign name="pluscircleo" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          ...styles.deleteButton,
          display: newLevel != skillInfo.knowledgeLevel ? "none" : "flex",
        }}
        activeOpacity={0.7}
        onPress={() => removeUserSkill()}
      >
        <Text style={styles.deleteText}>Remover</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.updateButton,
          display: newLevel != skillInfo.knowledgeLevel ? "flex" : "none",
        }}
        activeOpacity={0.7}
        onPress={() => updateUserSkill()}
      >
        <Text style={styles.deleteText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

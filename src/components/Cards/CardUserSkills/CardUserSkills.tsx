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
  userSkillFromUser,
  userSkillUpdateModel,
} from "../../../models/userSkillModel";
import { styles } from "./styles";

interface CardUserSkillsProps extends TouchableOpacityProps {
  skillInfo: userSkillFromUser;
}

export const CardUserSkills = ({ skillInfo }: CardUserSkillsProps) => {
  const { getUsersSkillsUpdated } = React.useContext(AuthContext);
  const [newLevel, setNewLevel] = React.useState<number>(
    skillInfo.knowledgeLevel
  );
  const [numberOfLines, setNumberOfLines] = React.useState<number>(3);

  const userSkill: userSkillUpdateModel = {
    knowledgeLevel: newLevel,
  };

  const updateUserSkill = async () => {
    try {
      await userSkillservice.userSkillUPDATE(skillInfo.id, userSkill);
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
      await userSkillservice.userSkillDELETE(skillInfo.id);
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
          {skillInfo.name}
        </Text>
        <Image style={styles.image} source={{ uri: skillInfo.imageUrl }} />
        <Text
          style={styles.description}
          numberOfLines={numberOfLines}
          onPress={handleNumberOfLines}
        >
          {skillInfo.description}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 52 }}>
        <Text style={styles.version} numberOfLines={1}>
          Versão {skillInfo.version}
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
          backgroundColor: "green",
        }}
        activeOpacity={0.7}
        onPress={() => updateUserSkill()}
      >
        <Text style={styles.deleteText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

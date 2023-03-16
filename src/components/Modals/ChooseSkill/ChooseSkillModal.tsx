import { Entypo } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import skillService from "../../../api/services/skillService";
import { AuthContext } from "../../../context/AuthContext";
import { CardThin } from "../../Cards/CardThin/CardThin";
import { styles } from "./styles";

export const ChooseSkillModal = ({ isSelectedModal, setIsSelectedModal }) => {
  const [skillsData, setSkillsData] = useState();
  const { getUsersSkillsUpdated } = useContext(AuthContext);

  React.useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const response = await skillService.skillGETALL();
    if (response.data != "") {
      setSkillsData(response.data);
    }
  };

  const closeModal = () => {
    setIsSelectedModal(false);
    getUsersSkillsUpdated();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSelectedModal}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <TouchableWithoutFeedback onPress={() => closeModal()}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      {/* Content */}
      <View style={styles.modalContentView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <Text style={styles.subtitle}>Skills</Text>
          <Entypo name="tools" size={24} color="#fff" />
        </View>
        <View style={{ height: 280 }}>
          <FlatList
            initialNumToRender={3}
            data={skillsData}
            renderItem={({ item, index, separators }) => (
              <ScrollView>
                <CardThin
                  imageURL={item.image_url}
                  name={item.name}
                  version={item.version}
                  id={item.id}
                  onpress={() => closeModal()}
                />
                <View style={{ width: 12, height: 20 }} />
              </ScrollView>
            )}
          />
        </View>
        <Text style={styles.tipsText}>
          A Skill selecionada será atribuída a seu perfil
        </Text>
      </View>
    </Modal>
  );
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Container from "toastify-react-native";
import { ExitButton } from "../../components/Buttons/ExitButton";
import { OpenModal } from "../../components/Buttons/OpenModal";
import { CardUserSkills } from "../../components/Cards/CardUserSkills/CardUserSkills";
import { Loading } from "../../components/Loading/Loading";
import { Logo } from "../../components/Logo/Logo";
import { ChooseSkillModal } from "../../components/Modals/ChooseSkill/ChooseSkillModal";
import { Spacer } from "../../components/Spacer/Spacer";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./styles";

export const Home = () => {
  const [isSelectedModal, setIsSelectedModal] = React.useState(false);
  const { setToken, setUser, usersSkills, getUsersSkillsUpdated } =
    React.useContext(AuthContext);

  React.useEffect(() => {
    getUsersSkillsUpdated();
  }, []);

  const logout = () => {
    AsyncStorage.clear();
    setToken(null);
    setUser(null);
  };

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
      <Loading visible={usersSkills != undefined ? false : true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Logo size={48} />
        <ExitButton onPress={() => logout()} />
      </View>
      <ChooseSkillModal
        isSelectedModal={isSelectedModal}
        setIsSelectedModal={setIsSelectedModal}
      />
      <Text style={styles.subtitle}>Suas habilidades</Text>
      <Spacer size={24} />
      <View style={{ marginBottom: 188, width: "100%" }}>
        <FlatList
          initialNumToRender={3}
          horizontal={true}
          data={usersSkills}
          renderItem={({ item, index, separators }) => (
            <ScrollView horizontal={true}>
              <CardUserSkills key={item.id} skillInfo={item} />
            </ScrollView>
          )}
        />
      </View>
      <OpenModal onPress={() => setIsSelectedModal(true)} />
    </View>
  );
};

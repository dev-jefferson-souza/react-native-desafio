import {
    Modal,
    View,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
    Text,
  } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import skillService from "../../../api/services/skillService";
import { CardThin } from "../../Cards/CardThin/CardThin";
import { Entypo } from '@expo/vector-icons'; 
import { AuthContext } from "../../../context/AuthContext";

 
  
export const ChooseSkillModal = ({
    isSelectedModal,
    setIsSelectedModal,
    onPress
  }) => {

    const [skillsData, setSkillsData] = useState() 
    const { filteringSkils } = React.useContext(AuthContext)

    React.useEffect(() => {
        getSkills()
    }, [])
    
    const getSkills = async () => {
        const response = await skillService.skillGETALL()
        if(response.data != ""){
            setSkillsData(response.data)
        }
    }

    const closeModal = () => {
      filteringSkils()
      setIsSelectedModal(false);
    }
  
    return (
      <Modal
        animationType="slide"
        transparent={true}

        visible={isSelectedModal}
        onRequestClose={() => {
          closeModal()
        }}
      >
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
  
        {/* Content */}
        <View style={styles.modalContentView}>
            <View style={{flexDirection: "row", justifyContent:"center", marginBottom: 12}}>
                <Text style={styles.subtitle}>Skills</Text>
                <Entypo name="tools" size={24} color="#fff" />
            </View>
            <View style={{height: 280}}>
                <FlatList
                    initialNumToRender={3}
                    data={skillsData}
                    renderItem={({item, index, separators}) => (
                        <ScrollView>    
                            <CardThin imageURL={item.imageUrl} name={item.name} version={item.version} id={item.id} onpress={() => closeModal()}/>
                            <View style={{width: 12, height:20}}/>
                        </ScrollView>
                    )}
                />
            </View>
            <Text style={styles.tipsText}>A Skill selecionada será atribuída a seu perfil</Text>
        </View>
      </Modal>
    );
  }
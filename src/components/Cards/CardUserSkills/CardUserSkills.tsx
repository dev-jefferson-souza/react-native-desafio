import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, Text, Image, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import userSkillservice from "../../../api/services/userSkillService"
import { userSkillModel, userSkillModelUPDATE } from "../../../models/userSkillModel"

import { styles } from "./styles"
import skillService from "../../../api/services/skillService"
import { Loading } from "../../Loading/Loading"
import { AuthContext } from "../../../context/AuthContext";

interface CardUserSkillsProps extends TouchableOpacityProps{
    knowledgeLevel: number,
    id: number,
    userSkillID: number,
    onpress: any,
    createdAt: string,
    user: number
}

export const CardUserSkills = ({knowledgeLevel, id, createdAt, onpress, user, userSkillID, ...rest} : CardUserSkillsProps) => {

    
    const [newLevel, setNewLevel] = React.useState<number>(knowledgeLevel)
    const { filteringSkils } = React.useContext(AuthContext)
    const [skillInfo, setSkillInfo] = React.useState({name: "", version: "",  imageUrl: "a"})
    const [userID, setUserID] = React.useState(null);


    const verifyingUser = async () => {
        const response = await AsyncStorage.getItem("@ID")
        if(response != null || response != undefined){
            setUserID(response)
        }
      }

    React.useEffect(() => {
        handleSkill()
        verifyingUser()
    }, [])

    const handleSkill = async () => {
        try{
            const response = await skillService.skillGET(id)
            setSkillInfo(response.data)
        }catch(err){
            console.log(err)
        }
    }

    const getCurrentDate = () => {
        const date = new Date().toJSON().slice(0, 10); 
        return date
    };

    const userSkill : userSkillModelUPDATE = {
        knowledgeLevel: newLevel,
        updatedAt: getCurrentDate(),
        skill: id,
        createdAt: createdAt,
        user: user
    }

    const updateUserSkill = async () => {
        try{
            const response =  await userSkillservice.userSkillUPDATE(userSkillID, userSkill)
            filteringSkils()
            console.log(response.status)
        }catch(err){
            console.log(err)
            Alert.alert("Ops...", "Não foi possível atualizar essa habiliidade. Tente novamente mais tarde.")
        }
        onpress()
    }

    const removeUserSkill = async () => {
        try{
            const response =  await userSkillservice.userSkillDELETE(userSkillID)
            filteringSkils()
            console.log(response.status)
        }catch(err){
            console.log(err)
            Alert.alert("Ops...", "Não foi possível remover essa habiliidade. Tente novamente mais tarde.")
        }
        onpress()
    }
    
    const increaseLevel = () => {
        newLevel == 10 ? setNewLevel(10) : setNewLevel(newLevel + 1)
    }

    const decreaseLevel = () => {
        newLevel == 0 ? setNewLevel(0) : setNewLevel(newLevel - 1)
    }

    if(user != userID){
        return (
            <View>
                <Text style={{maxWidth:0.1}}>a</Text>
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <Loading visible={skillInfo.version == "loading" && skillInfo.name == "loading" ? true : false}/>
                <View style={{alignItems:"center"}}>
                    <Image style={styles.image}  source={{uri: skillInfo.imageUrl}}/>
                    <Text style={styles.title} numberOfLines={1}>{skillInfo.name}</Text>
                </View>
                <Text style={styles.version} numberOfLines={1}>Versão {skillInfo.version}</Text>
                <View style={styles.levelBox}>
                    <TouchableOpacity onPress={() => decreaseLevel()}>
                        <AntDesign name="minuscircleo" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.counterText}>Nível de conhecimento {newLevel}</Text>
                    <TouchableOpacity onPress={() => increaseLevel()}>
                        <AntDesign name="pluscircleo" size={24} color="#fff" />
                    </TouchableOpacity>
    
                </View>
                <TouchableOpacity style={{...styles.deleteButton, display: newLevel != knowledgeLevel ? "none" : "flex"}} activeOpacity={0.7} onPress={() => removeUserSkill()}>
                    <Text style={styles.deleteText}>Remover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.updateButton, display: newLevel != knowledgeLevel ? "flex" : "none"}} activeOpacity={0.7} onPress={() => updateUserSkill()}>
                    <Text style={styles.deleteText}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
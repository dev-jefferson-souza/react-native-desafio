import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, Text, Image, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import userSkillservice from "../../../api/services/userSkillService"
import { userSkillModel } from "../../../models/userSkillModel"

import { styles } from "./styles"

interface CardThinProps extends TouchableOpacityProps{
    name: string,
    imageURL: string,
    version: string,
    id: number,
    onpress: any
}

export const CardThin = ({name, imageURL, version, id, onpress, ...rest} : CardThinProps) => {

    const [userID, setUserID] = React.useState(null)

    React.useEffect(() => {
        handleUserID()
    })

    const handleUserID = async () => {
        const response = await AsyncStorage.getItem("@ID")
        if(response != null || response != undefined){
            setUserID(response)
        }
    }

    const getCurrentDate = () => {
        const date = new Date().toJSON().slice(0, 10); 
        return date
    };

    const userSkill : userSkillModel = {
        knowledgeLevel: 0,
        user: userID,
        createdAt: getCurrentDate(),
        skill: id
    }

    const postCategory = async () => {
        try{
            const response =  await userSkillservice.userSkillPOST(userSkill)
        }catch(err){
            console.log(err)
            Alert.alert("Ops...", "Não foi possível selecionar a categoria, tente novamenta mais tarde.")
        }
        onpress()
    }

    return(

        <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={() => postCategory()}>
            <View style={{flexDirection: "row", alignItems:"center"}}>
                <Image style={styles.image}  source={{uri: imageURL}}/>
                <Text style={styles.title}>{name}</Text>
            </View>
            <Text style={styles.version}>Versão {version}</Text>
        </TouchableOpacity>
    )
}
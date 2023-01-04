import { Alert, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import userSkillservice from "../../api/services/userSkillService"
import { userSkillModel } from "../../models/userSkillModel"

import { styles } from "./styles"

interface CardThinProps extends TouchableOpacityProps{
    name: string,
    imageURL: string,
    version: string,
    id: number,
    onpress: any
}

export const CardThin = ({name, imageURL, version, id, onpress, ...rest} : CardThinProps) => {

    const getCurrentDate = () => {
        const date = new Date().toJSON().slice(0, 10); 
        return date
    };

    const userSkill : userSkillModel = {
        knowledgeLevel: 0,
        user: 10000,
        createdAt: getCurrentDate(),
        skill: id
    }

    const postCategory = async () => {
        try{
            const response =  await userSkillservice.userSkillPOST(userSkill)
            console.log(response.data)
        }catch(err){
            console.log(err)
            Alert.alert("Ops...", "Não foi possível selecionar a categoria, tente novamenta mais tarde.")
        }
        onpress()
    }

    return(

        <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={() => postCategory()}>
            <Text style={styles.title}>{name}</Text>
            <Image style={styles.image}  source={{uri: imageURL}}/>
            <Text style={styles.version}>Versão {version}</Text>
        </TouchableOpacity>
    )
}
import { View } from "react-native"
import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { styles } from "./styles"
import { Logo } from "../../components/Logo/Logo"
import { ChooseSkillModal } from "../../components/Modals/ChooseSkill/ChooseSkillModal"
import { OpenModal } from "../../components/Buttons/OpenModal"
import { ExitButton } from "../../components/Buttons/ExitButton"
import { AuthContext } from "../../context/AuthContext"

export const Home = () => {
    
    const [isSelectedModal, setIsSelectedModal] = React.useState(false);
    const { setAuth } = React.useContext(AuthContext);

    const logout = () => {
        AsyncStorage.clear()
        setAuth(false)
    }

    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row", justifyContent:"space-between", width: '100%'}}>
                <Logo size={48}/>
                <ExitButton onPress={() => logout()}/>
            </View>
            <ChooseSkillModal
                isSelectedModal={isSelectedModal}
                setIsSelectedModal={setIsSelectedModal}
                onPress={() => console.log('aaa')}
            />
            <OpenModal onPress={() => setIsSelectedModal(true)}/>
        </View>
    )
    
}
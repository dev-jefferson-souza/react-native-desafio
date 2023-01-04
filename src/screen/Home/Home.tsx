import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"

import { styles } from "./styles"
import { Logo } from "../../components/Logo/Logo"
import { ChooseSkillModal } from "../../components/Modals/ChooseSkill/ChooseSkillModal"
import { OpenModal } from "../../components/Buttons/OpenModal"

export const Home = () => {
    
    const [isSelectedModal, setIsSelectedModal] = React.useState(false);

    return(
        <View style={styles.container}>
            <Logo size={48}/>
            <ChooseSkillModal
                isSelectedModal={isSelectedModal}
                setIsSelectedModal={setIsSelectedModal}
                onPress={() => console.log('aaa')}
            />
            <View style={{flexDirection:"row"}}>
                <Text style={styles.lastText}> Não possui uma conta?</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('Foi para login')}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
            <OpenModal onPress={() => setIsSelectedModal(true)}/>
        </View>
    )
    
}
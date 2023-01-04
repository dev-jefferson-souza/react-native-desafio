import { View, Text, FlatList, ScrollView } from "react-native"
import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { styles } from "./styles"
import { Logo } from "../../components/Logo/Logo"
import { ChooseSkillModal } from "../../components/Modals/ChooseSkill/ChooseSkillModal"
import { OpenModal } from "../../components/Buttons/OpenModal"
import { ExitButton } from "../../components/Buttons/ExitButton"
import { AuthContext } from "../../context/AuthContext"
import { CardThin } from "../../components/Cards/CardThin/CardThin"
import userSkillservice from "../../api/services/userSkillService"
import { CardUserSkills } from "../../components/Cards/CardUserSkills/CardUserSkills"
import { Loading } from "../../components/Loading/Loading"
import { Spacer } from "../../components/Spacer/Spacer"

export const Home = () => {
    
    const [isSelectedModal, setIsSelectedModal] = React.useState(false);
    const { setAuth } = React.useContext(AuthContext);
    const { filteringSkils } = React.useContext(AuthContext);
    const { userSkillsList } = React.useContext(AuthContext);

    React.useEffect(() => {
        filteringSkils()
        // verifyingUser()
    }, [])

    const logout = () => {
        AsyncStorage.clear()
        setAuth(false)
    }

 

    return(
        <View style={styles.container}>
            <Loading visible={userSkillsList != undefined ? false : true}/>
            <View style={{flexDirection:"row", justifyContent:"space-between", width: '100%'}}>
                <Logo size={48}/>
                <ExitButton onPress={() => logout()}/>
            </View>
            <ChooseSkillModal
                isSelectedModal={isSelectedModal}
                setIsSelectedModal={setIsSelectedModal}
                onPress={() => console.log('aaa')}
            />
            <Text style={styles.subtitle}>Suas habilidades</Text>
            <Spacer size={24}/>
            <View style={{marginBottom: 188, width: '100%'}}>
                <FlatList
                    initialNumToRender={3}
                    horizontal={true}
                    data={userSkillsList}
                    renderItem={({item, index, separators}) => (
                        <ScrollView horizontal={true}>
                            {/* <View style={{display: item.user == userID ? "flex" : "none", width: '100%' }}> */}
                                <CardUserSkills 
                                    onpress={() => console.log('')}
                                    id={item.skill}
                                    knowledgeLevel={item.knowledgeLevel}
                                    userSkillID={item.id}
                                    createdAt={item.createdAt}
                                    user={item.user}
                                />
                            {/* </View> */}
                        </ScrollView>
                    )}
                />
            </View>
            <OpenModal onPress={() => setIsSelectedModal(true)}/>
        </View>
    )
    
}
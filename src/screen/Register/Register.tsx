import { View, Text, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData, Alert } from "react-native"
import React, { useState } from "react"

import { styles } from "./styles"
import { Logo } from "../../components/Logo/Logo"
import { SecureInput } from "../../components/Inputs/SecureInput/SecureInput"
import { CommonInput } from "../../components/Inputs/CommonInput/CommonInput"
import { Spacer } from "../../components/Spacer/Spacer"
import { PurpleButton } from "../../components/Buttons/PurpleButton"
import { userModel } from "../../models/userModel"
import userService from "../../api/services/userService"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const Register = ({navigation}) => {

    // const [user, setUser] = useState<userModel>()
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

    const onChangeLogin = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setLogin(value);
    }

    const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setPassword(value);
    }

    const onChangePasswordConfirmation = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setPasswordConfirmation(value);
    }

    const createAccount = () =>{
        const user : userModel = {
            login: login,
            password: password,
        }
        password == passwordConfirmation ? postUser(user) : Alert.alert("Ops...", "As senhas não coincidem")
    }

    const postUser = async (user) =>{
        try{
            const response = await userService.userPOST(user)
            if(response.status == 201){
                Alert.alert("Parabéns!", "Conta criada com sucesso!")
                AsyncStorage.setItem("@ID", JSON.stringify(response.data))
                const responseID = await AsyncStorage.getItem("@ID")
                console.log(responseID)

            }
        }catch(err){
            console.log(err)       
            Alert.alert("Ops...", "Algo deu errado, tente novamente mais tarde...")
        }
    }

    return(
    <View style={styles.container}>
        <Logo size={48}/>
        <View style={styles.boxForm}>
            <CommonInput 
                title="Login"
                placeholder="Login"
                onChange={onChangeLogin}
            />
            <Spacer size={24}/>
            <SecureInput 
                title="Criar Senha"
                placeholder="Digite sua senha"
                onChange={onChangePassword}
            />
            <Spacer size={24}/>
            <SecureInput
                title="Confirmar Senha"
                placeholder="Digite sua senha novamente"
                onChange={onChangePasswordConfirmation}
            />
            <Spacer size={48}/>
            <PurpleButton size={120} title={'Criar'} onPress={() => createAccount()}/>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={styles.lastText}> Já possui uma conta?</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() =>  navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    
}
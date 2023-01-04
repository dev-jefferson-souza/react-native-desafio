import { View, Text, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData, Alert } from "react-native"
import React, { useState } from "react"

import { styles } from "./styles"
import { Logo } from "../../components/Logo/Logo"
import { SecureInput } from "../../components/Inputs/SecureInput/SecureInput"
import { CommonInput } from "../../components/Inputs/CommonInput/CommonInput"
import { Spacer } from "../../components/Spacer/Spacer"
import { PurpleButton } from "../../components/Buttons/PurpleButton"

export const Login = ({navigation}) => {

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onChangeLogin = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setLogin(value);
    }

    const onChangePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        const value = e.nativeEvent.text;
        setPassword(value);
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
                title="Senha"
                placeholder="Digite sua senha"
                onChange={onChangePassword}
            />
            <Spacer size={48}/>
            <PurpleButton size={120} title={'Entrar'} onPress={() => console.log('dadsa')}/>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={styles.lastText}> Não possui uma conta?</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
    
}
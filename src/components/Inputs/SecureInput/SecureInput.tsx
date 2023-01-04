import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"


import { Feather } from '@expo/vector-icons'; 

import { styles } from "./styles"
import { props } from "./props";

export const SecureInput = ({title, placeholder, ...rest} : props) => {

    const [secure, setSecure] = useState<boolean>(true);
    const [eye, setEye] = useState<string>("eye");
    const handleSecure = () => {
        if(secure === true){
            setEye('eye-off')
            setSecure(false)
        } else{ 
            setEye('eye')
            setSecure(true)
        }
    }

    

    return(
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.secureView}>
                <TextInput
                    {...rest}
                    style={styles.textInput}                                       
                    selectionColor={'#4611ad'}
                    secureTextEntry={secure}
                    autoCapitalize="none"
                    placeholder={placeholder}
                    placeholderTextColor= '#2f2f37'
                >
                </TextInput>
                <TouchableOpacity
                 activeOpacity={0.2}
                 style={styles.eyeIcon}
                 onPress={() => handleSecure()}
                >
                    <Feather
                        name={eye}
                        size={22}
                        color={'#2f2f37'}
                    /> 
                </TouchableOpacity>
            </View>
        </View>
    )
}
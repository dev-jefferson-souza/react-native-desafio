import React from "react"
import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { props } from "./props";

export const CommonInput = ({title, placeholder, ...rest} : props) => {

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
                    autoCapitalize="none"
                    placeholder={placeholder}
                    placeholderTextColor= '#2f2f37'
                >
                </TextInput>
            </View>
        </View>
    )
}
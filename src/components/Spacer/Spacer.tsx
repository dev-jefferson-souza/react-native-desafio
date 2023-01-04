import { View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

interface SpacerProps{
    size: number
}

export const Spacer = ({size} : SpacerProps) => {

    return (  
        <View style={{width: '100%', height: size}}/>
    )
}
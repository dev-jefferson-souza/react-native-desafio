import { FontAwesome5 } from '@expo/vector-icons'; 

interface props{
    size: number
}

export const Logo = ({size} : props) => {

    return (  
        <FontAwesome5 name="react" size={size} color="#fff" />
    )
}
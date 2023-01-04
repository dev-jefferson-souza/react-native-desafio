import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'

export const Loading = ({visible}) => {

    return(
        <Modal transparent visible ={ visible}>
            <StatusBar
                style={"light"}
                backgroundColor='#0d0d0f'
            />
            <View style={ {flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#0d0d0f'}}>
                <ActivityIndicator
                    size="large"
                    color={'#4611ad'}
                    animating={true}
                />
            </View>
        </Modal>
    )
}
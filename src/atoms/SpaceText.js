import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { color } from '_styles'

const SpaceText = (props) => {
    return(
        <View style={[props.styles,styles.wrapper]}>
            <Text style={[props.styleTextLeft,styles.textLeft]}>{props.textLeft}</Text>
            <Text style={[props.styleTextRight,styles.textRight]}>{props.textRight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:8,
    },
    textLeft:{
        color:color.g700
    },
    textRight:{
        color:color.g800
    },
})

export default SpaceText
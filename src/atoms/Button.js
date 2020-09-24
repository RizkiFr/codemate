import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color } from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Button = (props) => {
    const { outline, disabled, textColor, bordered, theme } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={props.containerStyle}>
            <View style={[styles.wraper, { backgroundColor: disabled ? color.g400 : theme ? theme : outline ? 'transparent' : color.primary, borderWidth: outline ? 2 : bordered ? 2 : 0, borderColor: props.color ?? color.primary }, props.style]}>
                {
                    props.loading ?
                        <BallIndicator size={18} color='#fff' /> :
                        <>
                            {props.icon && <Icon name={props.icon} size={18} color={props.color ?? '#fff'} style={{ marginRight: 5 }} />}
                            <Text style={[styles.text, { color: textColor ?? props.color ?? outline ? props.color ?? color.primary : '#fff' }]}>{props.title}</Text>
                        </>
                }
            </View>
        </TouchableOpacity>
    )
}

const ButtonText = (props) => {
    const { textColor, textSize } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            {props.loading ?
                <BallIndicator size={18} color={textColor ?? color.primary} /> :
                <Text style={[styles.btnText, props.style, { color: textColor ?? color.primary, fontSize: textSize }]}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

const ButtonClean = (props) => {
    const { textColor, color } = props
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.btnClean, props.style, { borderColor: color ?? '#fff' }]} >
            {props.icon && <Icon name={props.icon} size={18} color={color ?? color.g700} />}
            <Text style={[styles.btnText, { color: textColor ?? color ?? color.g600, fontWeight: 'normal' }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wraper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: color.primary
    },
    text: {
        fontWeight: 'bold',
    },
    btnText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btnClean: {
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        borderRadius: 10,
        margin: 3
    },
    btnIndicator: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        borderColor: color.g300,
        margin: 3
    },
    btnTextIndicator: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export {
    Button,
    ButtonText,
    ButtonClean
}
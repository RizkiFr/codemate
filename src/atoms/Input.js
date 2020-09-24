import React, { Fragment } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from '_styles';

Icon.loadFont()

const Input = (props,) => {
    return (
        <>
            {
                props.label ? <Text style={[styles.label, { marginLeft: props.material ? 0 : 5 }]}>{props.label}</Text> : null
            }
            <View style={[props.styleInput, { flexDirection: 'row' }]}>
                <View style={[styles.wraper, { borderColor: props.error ? color.failed : color.g300, borderWidth: props.material ? 0 : 1, borderRadius: props.material ? 0 : 10 }]}>
                    {
                        props.prefix && <Text style={{ color: color.g700 }}>{props.prefix} </Text>
                    }
                    <TextInput ref={props.inputRef ?? null} onChangeText={props.onChangeText} placeholder={props.placeholder ?? props.label} style={[styles.input, { paddingHorizontal: props.material ? 0 : 10 }]} placeholderTextColor={color.g400} secureTextEntry={props.password} {...props} />
                    {
                        props.icon && <Icon name={props.icon} onPress={props.onIconPress} color={color.g400} size={20} style={styles.icon} />
                    }
                    {
                        props.buttonText && <TouchableOpacity onPress={props.onPressText}><Text style={[styles.buttonText, props.styleButtonText]}>{props.buttonText}</Text></TouchableOpacity>
                    }
                </View>
            </View>
            {
                props.error &&
                    props.errorText ?
                    <Text style={[styles.subtitle, { color: color.failed }]}>{props.errorText}</Text>
                    : props.subtitle ?
                        <Text style={styles.subtitle}>{props.subtitle}</Text>
                        : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginVertical: 5,
        backgroundColor: '#fff',
        flex: 1
    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        color: color.g700,
    },
    icon: {
        padding: 10
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: color.g800,
        marginTop: 5,
    },
    subtitle: {
        fontSize: 10,
        color: color.g500
    },
    buttonText: {
        fontWeight: 'bold',
        color: color.g700
    }
})

export default Input
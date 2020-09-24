import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from '_styles';

Icon.loadFont()

const SearchInput = (props) => {
    return (
        <View style={[{ flexDirection: 'row', flex: 1 }, props.style]}>
            <View style={styles.wraper}>
                <Icon name='search' onPress={props.onIconPress} color={color.g500} size={20} style={styles.icon} />
                <TextInput ref={props.inputRef} onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.input} placeholderTextColor={color.g500} secureTextEntry={props.password} {...props} />
                {
                    props.btnText && <Text style={{color:color.primary,fontWeight:'400',paddingRight:12}} onPress={props.btnTextPress}>{props.btnText}</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        backgroundColor: color.g100,
        flex: 1
    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        color: color.g700,
        paddingHorizontal: 10
    },
    icon: {
        padding: 10
    },
})

export default SearchInput
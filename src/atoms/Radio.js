import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { color, style } from '_styles';

Icon.loadFont()

const Radio = (props) => {

    const [selected, setSelected] = useState(props.selected)

    console.log({selected})

    const handleOnSelect = (v) => {
        setSelected(v.value ?? v.order_product_id)
        props.onSelect(v.value ?? v.order_product_id)
    }

    const renderSelect = ({ item }) => {
        const value = item.value ?? item.order_product_id
        const isSelected = value == props.selected
        return (
            <TouchableHighlight underlayColor='transparent' onPress={() => handleOnSelect(item)}>
                <View style={styles.renderItem}>
                    <Text style={{ color: isSelected ? color.g900 : color.g700, fontWeight: isSelected ? 'bold' : 'normal' }}>{item.label ?? item.order_product_name}</Text>
                    <Icon name={`radio-button-${isSelected ? 'on' : 'off'}-outline`} color={isSelected ? color.primary : color.g700} size={18} />
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <>
            {
                props.label ? <Text style={styles.label}>{props.label}</Text> : null
            }
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    data={props.data}
                    extraData={props.extraData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderSelect}
                />
            </View>
            {
                props.subtitle ? <Text style={styles.subtitle}>{props.subtitle}</Text> : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    wraper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: color.g300,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
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
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: color.g800,
        marginTop: 5,
    },
    subtitle: {
        fontSize: 10,
        color: color.g500,
        marginLeft: 5
    },
    wraperModal: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 56,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: color.g300,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    textHeader: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    renderItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: color.g300,
        backgroundColor: '#fff'
    }
})

export default Radio
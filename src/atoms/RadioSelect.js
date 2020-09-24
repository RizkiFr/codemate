import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { color } from '_styles';

const RadioSelect = (props) => {
    const { outline, disabled, textColor } = props

    const renderItem = ({ item }) => {
        const selected = item.value == props.selected.value
        return (
            <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.wraper, props.style, { backgroundColor: selected ? color.primary : '#fff' }]} onPress={() => props.onSelect(item)}>
                <Text style={[styles.btnText, { color: selected ? '#fff' : color.primary }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 0, padding: 5 }}>
            <FlatList
                data={props.value}
                keyExtractor={item => item.value}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal />
        </View>
    )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wraper: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginVertical: 5,
        borderColor: color.primary,
        borderWidth: 2,
        height: 30,
        margin: 5,
        width: (width - 60) / 3,
    },
    text: {
        fontWeight: 'bold',
    },
    btnText: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default RadioSelect
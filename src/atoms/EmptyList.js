import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { color, style } from '_styles';


const EmptyList = (props) => {
    return (
        <View style={styles.wraper}>
            <Image source={require('_assets/illustrations/empty.png')} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.description}</Text>
        </View>
    )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        height: width / 2,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g800
    },
    text: {
        color: color.g700,
        textAlign: 'center'
    }
})

export default EmptyList
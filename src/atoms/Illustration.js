import React from 'react';
import { Image, Text, StyleSheet, View, Dimensions } from 'react-native';
import { color, style } from '_styles';


const Illustration = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.source} style={[styles.image, props.style]} resizeMode='contain' />
            {props.title && <Text style={styles.title}>{props.title}</Text>}
            {props.subTitle && <Text style={styles.subTitle}>{props.subTitle}</Text>}
        </View>
    )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        height: width / 2,
    },
    title: {
        fontSize: 16,
        color: color.g700,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 12,
        color: color.g700,
        textAlign: 'center'
    },
})

export default Illustration
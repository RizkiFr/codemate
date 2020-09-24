import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Platform, Animated, Image } from 'react-native';
import { color } from '_styles';
import { withNavigation } from '@react-navigation/compat';
import { useHeaderHeight } from '@react-navigation/stack';

const Header = (props) => {

    const animated = props.animated.interpolate({
        inputRange: [0, 30, 100],
        outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
        extrapolateRight: 'clamp',
    })
    const elevation = props.animated.interpolate({
        inputRange: [0, 30, 100],
        outputRange: [0.01, 0.01, 3],
        extrapolateRight: 'clamp',
    })

    const headerHeight = useHeaderHeight();

    return (
        <Animated.View style={[styles.wraperTransparent, { backgroundColor: animated, elevation: elevation, height: headerHeight }, props.style]}>
            {props.children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    wraperTransparent: {
        zIndex: 2,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    container: {
        padding: 10,
        justifyContent: 'center'
    },
    titleWraper: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    subTitle: {
        fontSize: 12,
        color: color.g500,
        marginLeft: 10
    },
    date: {
        color: color.g500
    },
    logo: {
        height: 40,
        width: 150
    }
})

export default withNavigation(Header)
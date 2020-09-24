import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableHighlight, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { color, style } from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonText, } from '_atoms';

const Alert = (props) => {
    return (
        <>
            <Modal
                isVisible={props.isVisible}
                style={{ margin: 0 }}
                animationIn='fadeIn'
                animationOut='fadeOut'
                hasBackdrop={false}
            >
                <View style={styles.backdrop}>
                    <View style={styles.wraper}>
                        <View style={{ flex: 1 }}>
                            <Icon name='help-circle-outline' size={50} color={color.primary} style={{ alignSelf: 'center' }} />
                            {props.title && <Text style={styles.title}>{props.title}</Text>}
                            <Text style={styles.text}>{props.text}</Text>
                        </View>
                        <View style={[styles.footer]}>
                            <View style={[styles.footerButton, { borderRightWidth: 0.5 }]}>
                                <ButtonText title='BATAL' textColor={color.failed} onPress={props.onCancel} />
                            </View>
                            <View style={[styles.footerButton, { borderLeftWidth: 0.5 }]}>
                                <ButtonText title='OK' onPress={props.onAccept} />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    wraper: {
        backgroundColor: '#fff',
        width: width - 80,
        height: width - 160,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10
    },
    footer: {
        borderTopWidth: 1,
        borderColor: color.g300,
        flexDirection: 'row',
    },
    footerButton: {
        flex: 1,
        padding: 10,
        borderColor: color.g300
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: color.g900
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        color: color.g700
    },
})

export default Alert;
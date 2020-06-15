import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import TitleText from './TitleText';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/default-styles';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase, 
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
                })
            }}
        >
            <TitleText style={DefaultStyles.headerText}>{props.title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Colors.accent,
    },
    headerTitle: {
        color: Platform.OS === 'android' ? Colors.light : Colors.accent,
        fontSize: 28,
    }
});

export default Header;
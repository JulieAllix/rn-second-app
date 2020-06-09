import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TitleText from './TitleText';

import Colors from '../constants/themeColors';
import DefaultStyles from '../constants/default-styles';

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={DefaultStyles.headerText}>{props.title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: Colors.light,
        fontSize: 28,
    }
});

export default Header;
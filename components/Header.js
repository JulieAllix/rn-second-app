import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/themeColors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
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
        fontSize: 18,
    }
});

export default Header;
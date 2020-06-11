import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../constants/themeColors';
import BodyText from '../components/BodyText';

const MainButton = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <BodyText style={styles.text}>
                {props.children}
            </BodyText>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        //width: 115,
        width: Dimensions.get('window').width / 4
    },
    text: {
        color: Colors.light,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default MainButton;
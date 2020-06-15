import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../constants/themeColors';
import BodyText from '../components/BodyText';

const MainButton = props => {
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const updateLayout = () => {
        setButtonWidth(Dimensions.get('window').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout);

    return (
        <TouchableOpacity style={{...styles.button, width:buttonWidth}} onPress={props.onPress}>
            <BodyText style={styles.text}>
                {props.children}
            </BodyText>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: Dimensions.get('window').width < 400 ? 5 : 10,
        marginVertical: 10,
        borderRadius: 5,
        //width: 115
    },
    text: {
        color: Colors.light,
        textAlign: 'center',
        fontSize: Dimensions.get('window').width < 400 ? 11 : 16,
    },
});

export default MainButton;
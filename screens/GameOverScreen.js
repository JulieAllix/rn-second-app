import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/themeColors';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <Text style={styles.summary}>The Game is Over !</Text>
        <Text style={styles.summary}>Number of rounds: {props.roundsNumber}</Text>
        <Text style={styles.summary}>Number was: {props.userNumber}</Text>
        <TouchableOpacity style={styles.button} onPress={props.onRestart}>
            <Text style={styles.text}>New Game</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 20,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
        width: 110,
    },
    text: {
        color: Colors.light,
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 16,
    },
});

export default GameOverScreen;
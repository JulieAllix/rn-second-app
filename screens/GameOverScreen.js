import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/themeColors';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <Text>The Game is Over !</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
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
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        width: 95,
    },
    text: {
        color: Colors.light,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default GameOverScreen;
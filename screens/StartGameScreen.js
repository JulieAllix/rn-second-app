import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game !</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.subTitle}>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.text}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.text}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#fb4d3d'
    },
    subTitle: {
        fontSize: 15,
        color: '#292f36',
        fontWeight: 'bold',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    button: {
        backgroundColor: '#fb4d3d',
        padding: 10,
        borderRadius: 5,
        width: '35%',
        alignItems: 'center',
    },
    text: {
        color: '#f1faee',
        fontWeight: 'bold'
    }
});

export default StartGameScreen;
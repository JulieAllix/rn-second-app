import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/themeColors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        // replace anything that's not a number from 0 to 9, globally, with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    };

    return (
        // The keyboard disappears when the user taps anywhere on the screen
        <TouchableWithoutFeedback 
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game !</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.subTitle}>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad'
                        maxLength={2} 
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={resetInputHandler}>
                            <Text style={styles.text}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                            <Text style={styles.text}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
        color: Colors.primary,
    },
    subTitle: {
        fontSize: 15,
        color: Colors.accent,
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
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        width: 95,
        alignItems: 'center',
    },
    text: {
        color: Colors.light,
        fontWeight: 'bold',
    },
    input: {
        width: 50,
        textAlign: 'center',
    }
});

export default StartGameScreen;
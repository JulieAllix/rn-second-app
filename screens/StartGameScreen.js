import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
 } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

import Colors from '../constants/themeColors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        // replace anything that's not a number from 0 to 9, globally, with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number !', 
                'Number has to be a number between 1 and 99.', 
                [{
                    text: 'Okay', 
                    style: 'destructive', 
                    onPress: resetInputHandler
                }]
            );
            return;
        };
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
            <Card style={styles.inputContainer}>
                <Text style={styles.confirmedOutput}>Chosen Number : </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <TouchableOpacity style={styles.button} onPress={() => props.onStartGame(selectedNumber)}>
                    <Text style={styles.text}>Start Game</Text>
                </TouchableOpacity>
            </Card>
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
                        <TouchableOpacity style={styles.button} onPress={confirmInputHandler}>
                            <Text style={styles.text}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {confirmedOutput}
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
        fontSize: 25,
        marginVertical: 10,
        color: Colors.primary,
        fontFamily: 'open-sans',
    },
    subTitle: {
        fontSize: 20,
        color: Colors.accent,
        fontFamily: 'open-sans',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    confirmedOutput: {
        color: Colors.accent,
        fontSize: 20,
        fontFamily: 'open-sans',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        width: 110,
    },
    text: {
        color: Colors.light,
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 16,
    },
    input: {
        width: 50,
        textAlign: 'center',
    }
});

export default StartGameScreen;
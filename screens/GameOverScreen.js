import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import MainButton from '../components/MainButton';

import BodyText from '../components/BodyText';
import Colors from '../constants/themeColors';

const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <BodyText style={styles.summary}>The Game is Over !</BodyText>
        <Image 
            //
            style={styles.image} 
            source={require('../assets/game-over.png')}
            //source={{uri: 'https://www.muylinux.com/wp-content/uploads/2014/01/mljuegos0.png'}}
            resizeMode="cover"
        />
        <View style={styles.resultContainer}>
            <BodyText style={styles.summary}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
            </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>
            New Game
        </MainButton>
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
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: '80%',
        height: 300,
    },
    resultContainer: {
        width: '80%',
    },
    highlight: {
        color: Colors.primary,
        fontWeight: 'bold'
    }
});

export default GameOverScreen;
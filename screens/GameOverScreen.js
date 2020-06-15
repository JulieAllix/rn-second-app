import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image, 
    Dimensions,
    ScrollView 
} from 'react-native';

import MainButton from '../components/MainButton';

import BodyText from '../components/BodyText';
import Colors from '../constants/themeColors';

const GameOverScreen = props => {
    return (
        <ScrollView>
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    summary: {
        fontSize: Dimensions.get('window').width < 400 ? 16 : 20,
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
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
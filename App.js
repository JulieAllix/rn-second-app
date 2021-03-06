import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Medium.ttf'),
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'abril': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });
};

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={() => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen 
        roundsNumber={guessRounds} 
        userNumber={userNumber} 
        onRestart={configureNewGameHandler} 
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fefafd'
  },

});

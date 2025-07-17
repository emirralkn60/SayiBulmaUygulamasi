import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GameStartScreen from './screen/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0)


  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfGuess){
    setGameIsOver(true);
    setGuessCounts(numberOfGuess);
  }
  function startNewGameHandler()
  {
    setUserNumber(null);
    setGuessCounts(0);
  }


  let screen = <GameStartScreen onSendedNumber={sendedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}  />;
  }
  if(gameIsOver && userNumber)
  {
    screen=<GameOverScreen roundsNumber={guessCounts} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }
  return (
    <LinearGradient style={styles.container} colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <ImageBackground
        source={require('./assets/back.png')}
        style={styles.container}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.2,
  }
});

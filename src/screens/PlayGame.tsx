import React, {useEffect, useRef, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, StackActions} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import Button from '@components/Button/Button';

const PlayGame = ({navigation}: {navigation: NavigationProp<any>}) => {
  const coinsRef = useRef(21);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const onAiTurn = () => {
    setMessage("Ai's Turn ...");
    setIsLoading(true);
    // Calculate the optimal number of coins for the AI to pick to always win
    const aiPickedCoins =
      (coinsRef.current - 1) % 5 || Math.min(4, coinsRef.current - 1);

    coinsRef.current = coinsRef.current - aiPickedCoins;

    setIsLoading(false);
    // Check if the game is over
    if (coinsRef.current === 0) {
      // Ai Player wins, navigate to the Lost screen
      navigation.dispatch(StackActions.replace('Result'));
      return;
    }
    setMessage('Your Turn ..');
  };

  const onPlayerTurn = (selectedCoins: number) => {
    // Validate player's move
    if (
      selectedCoins < 1 ||
      selectedCoins > 4 ||
      selectedCoins > coinsRef.current
    ) {
      Alert.alert('Error', 'Invalid move');
      return;
    }
    coinsRef.current = coinsRef.current - selectedCoins;
    // Check if the game is over
    if (coinsRef.current === 0) {
      // Player loses, navigate to the Lost screen
      navigation.dispatch(StackActions.replace('Result'));
      return;
    } else {
      // Delaying of  AI's move to make it feel like a turn-based game
      setMessage("Ai's Turn ...");
      setTimeout(onAiTurn, 1000);
    }
  };

  useEffect(() => {
    onAiTurn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={CommonStyles.wrapper}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>Coin Left {coinsRef.current}</Text>
            <Text style={styles.title}>{message}</Text>
            <View style={styles.card}>
              <Button
                text={'Pick 1 Coin'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => onPlayerTurn(1)}
                disabled={isLoading}
              />
              <Button
                text={'Pick 2 Coin'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => onPlayerTurn(2)}
                disabled={isLoading}
              />
              <Button
                text={'Pick 3 Coin'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => onPlayerTurn(3)}
                disabled={isLoading}
              />
              <Button
                text={'Pick 4 Coin'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => onPlayerTurn(4)}
                disabled={isLoading}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
    backgroundColor: Colors.primary,
  },
  content: {
    ...CommonStyles.content,
    ...CommonStyles.center,
    padding: 20,
  },
  section: {
    ...CommonStyles.center,
    marginVertical: 12,
  },
  card: {
    ...CommonStyles.rowSpaceAround,
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 22,
    color: Colors.white,
    fontWeight: '400',
    textAlign: 'center',
  },
  btnSection: {
    ...CommonStyles.center,
    marginVertical: 17,
  },
  btnStyle: {
    width: 120,
    height: 80,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
    ...CommonStyles.center,
    margin: 20,
  },
  btnTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 16,
    color: Colors.white,
  },
});

export default PlayGame;

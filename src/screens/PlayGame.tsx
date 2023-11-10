import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import Button from '@components/Button/Button';

const PlayGame = () => {
  const [coins, setCoins] = useState(21);
  const [isLoading, setIsLoading] = useState(false);
  const onAiTurn = () => {
    setIsLoading(true);
    // Calculate the optimal number of coins for the AI to pick to always win
    const aiPickedCoins = (coins - 1) % 5 || Math.min(4, coins - 1);
    setCoins(coins - aiPickedCoins);
    setIsLoading(false);
    // Check if the game is over
    if (coins - aiPickedCoins === 0) {
      // Ai Player wins, navigate to the Lost screen
      Alert.alert('Oops', 'You Lost');
    }
  };

  const onPlayerTurn = (selectedCoins: number) => {
    // Validate player's move
    if (selectedCoins < 1 || selectedCoins > 4 || selectedCoins > coins) {
      Alert.alert('Error', 'Invalid move. Please pick 1, 2, 3, or 4 coins.');
      return;
    }
    setCoins(coins - selectedCoins);
    // Check if the game is over
    if (coins - selectedCoins === 0) {
      // Player loses, navigate to the Lost screen
      Alert.alert('Oops', 'You Lost');
    } else {
      // Delaying of  AI's move to make it feel like a turn-based game
      setTimeout(onAiTurn, 2000);
    }
  };

  const onRetry = () => {
    setCoins(21);
  };
  useEffect(() => {
    if (coins === 21) {
      setTimeout(() => {
        onAiTurn();
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={CommonStyles.wrapper}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>Coin Left {coins}</Text>
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
            <View style={styles.btnSection}>
              <Button
                text={'Try Again'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => onRetry()}
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

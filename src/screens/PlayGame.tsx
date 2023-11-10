import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';

const PlayGame = () => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <View style={CommonStyles.wrapper}>
        <View style={CommonStyles.content}>
          <Text style={styles.title}>Play Game Screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 18,
    color: Colors.black,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default PlayGame;

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import Button from '@components/Button/Button';
import {NavigationProp} from '@react-navigation/native';

const Result = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={CommonStyles.wrapper}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.title}>Oops ! you lost the game</Text>
            <Text style={styles.title}>
              Don't be sad, This game is rigged to always work in fever of Ai.
            </Text>
            <View style={styles.btnSection}>
              <Button
                text={'Go To Home'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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

export default Result;

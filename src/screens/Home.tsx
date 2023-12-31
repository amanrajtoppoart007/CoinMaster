import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import CustomStatusBar from '@components/CustomStatusBar';
import useAuthUser from '@hooks/useAuthUser';
import Button from '@components/Button/Button';
import {NavigationProp} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const user = useAuthUser();
  return (
    <SafeAreaView style={styles.container}>
      <View style={CommonStyles.wrapper}>
        <CustomStatusBar />
        <View style={styles.content}>
          <Text style={styles.title}>Welcome {user.name}!</Text>
          <View style={styles.section}>
            <View style={styles.btnSection}>
              <Button
                text={'New Game'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => navigation.navigate('PlayGame')}
              />
            </View>
            <View style={styles.btnSection}>
              <Button
                text={'Score History'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => navigation.navigate('History')}
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
    padding: 20,
  },
  section: {
    ...CommonStyles.center,
    marginVertical: 12,
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
    width: 180,
    height: 48,
    backgroundColor: Colors.secondary,
    ...CommonStyles.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 16,
    color: Colors.white,
  },
});

export default Home;

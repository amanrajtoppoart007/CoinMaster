import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import CustomStatusBar from '@components/CustomStatusBar';
import Button from '@components/Button/Button';
import setupActions from '@database/actions/setup-actions';
import useConfig from '@hooks/useConfig';
import {NavigationProp} from '@react-navigation/native';
import useDispatchAction from '@hooks/useDispatchAction';
import {setIsDbConfigured} from '@state/reducers/config.slice';

const SetUp = ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatchAction();
  const {isDbConfigured} = useConfig();
  const init = async () => {
    setupActions.init().then(() => {
      dispatch(setIsDbConfigured(true));
    });
  };

  useEffect(() => {
    if (isDbConfigured) {
      navigation.navigate('Login');
    }
  }, [isDbConfigured, navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={CommonStyles.wrapper}>
        <CustomStatusBar />
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.btnSection}>
              <Button
                text={'Set Up Initial Database'}
                btnStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                onPress={() => init()}
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
  title: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 18,
    color: Colors.black,
    fontWeight: '400',
    textAlign: 'center',
  },
  btnSection: {
    ...CommonStyles.center,
    marginVertical: 17,
  },
  btnStyle: {
    width: 250,
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

export default SetUp;

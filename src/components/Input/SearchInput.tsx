import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

type SearchInputProp = {
  title: string;
  value: string;
  setValue: Function;
  onBtnPress: (event: GestureResponderEvent) => void;
};

function SearchInput({title, value, setValue, onBtnPress}: SearchInputProp) {
  return (
    <View style={styles.groupInputBox}>
      <View style={styles.inputLeftContent}>
        <Input
          value={value.toString()}
          setValue={setValue}
          placeholder={title}
          inputStyle={styles.inputStyle}
          inputTextStyle={styles.inputTextStyle}
          placeholderTextColor={Colors.black}
        />
      </View>
      <View style={styles.inputRightContent}>
        <Button
          text={'Add'}
          btnStyle={styles.searchBtnStyle}
          textStyle={styles.searchBtnTextStyle}
          onPress={onBtnPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    marginVertical: 20,
  },
  groupInputBox: {
    width: '100%',
    height: 50,
    ...CommonStyles.rowFlexStart,
  },
  inputLeftContent: {
    width: '80%',
  },
  inputRightContent: {
    width: '20%',
  },
  inputStyle: {
    width: '100%',
    height: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
  },
  inputTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 22,
    color: Colors.black,
  },
  searchBtnStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.secondary,
    ...CommonStyles.center,
  },
  searchBtnTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 16,
    color: Colors.white,
  },
});

export default SearchInput;

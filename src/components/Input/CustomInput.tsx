import React from 'react';
import {KeyboardTypeOptions, StyleSheet, Text, View} from 'react-native';
import Input from '@components/Input/Input';
import Fonts from '@theme/Fonts';
import {Colors} from '@theme/index';

interface CustomInputProps {
  value: string;
  setValue: Function;
  placeholder: string;
  inputStyle: any;
  inputTextStyle: any;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor: string;
  errorText?: string;
}
function CustomInput({
  value,
  setValue,
  placeholder,
  inputStyle,
  inputTextStyle,
  placeholderTextColor,
  errorText,
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Input
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        inputStyle={inputStyle}
        inputTextStyle={inputTextStyle}
        placeholderTextColor={placeholderTextColor}
      />
      {errorText !== undefined && errorText?.length > 0 && (
        <Text style={styles.error}>{errorText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 4,
  },
  error: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 13,
    color: Colors.darkred,
    textAlign: 'right',
  },
});

export default CustomInput;

import React from 'react';
import {KeyboardTypeOptions, TextInput} from 'react-native';
import {Colors} from '@theme/index';

interface Props {
  value: string;
  setValue: Function;
  placeholder?: string;
  inputStyle: any;
  inputTextStyle: any;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor: string;
}
const Input: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  inputStyle,
  inputTextStyle,
  disabled,
  keyboardType,
  placeholderTextColor,
}) => {
  const {lightgrey, white} = Colors;
  const bg = disabled ? lightgrey : inputStyle?.backgroundColor ?? white;
  const textInputStyle = {
    ...inputStyle,
    backgroundColor: bg,
  };

  const keyboard =
    keyboardType !== undefined && keyboardType !== null
      ? keyboardType
      : 'default';

  const isEditable = disabled !== undefined ? !disabled : true;
  return (
    <TextInput
      placeholder={placeholder ?? ''}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={text => setValue(text)}
      style={[textInputStyle, inputTextStyle]}
      autoCapitalize={'none'}
      autoCorrect={false}
      editable={isEditable}
      keyboardType={keyboard}
    />
  );
};

export default Input;

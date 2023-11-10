import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CommonStyles, Colors} from '@theme/index';

interface Props {
  value: string;
  setValue: Function;
  placeholder: string;
  inputStyle: any;
  inputTextStyle: any;
  disabled?: boolean;
  placeholderTextColor: string;
  secureTextEntry: boolean;
}

const CustomPassword: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
  disabled,
  inputStyle,
  inputTextStyle,
  placeholderTextColor,
}) => {
  const {lightgrey, white} = Colors;
  const bg = disabled ? lightgrey : inputStyle?.backgroundColor ?? white;
  const textInputStyle = {
    ...inputStyle,
    backgroundColor: bg,
  };

  const [isEncrypted, setIsEncrypted] = useState(secureTextEntry);

  const isEditable = disabled !== undefined ? !disabled : true;

  return (
    <View style={styles.card}>
      <View style={styles.inputWrap}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={text => setValue(text)}
          style={[textInputStyle, inputTextStyle]}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={isEncrypted}
          editable={isEditable}
        />
      </View>
      <View style={styles.iconWrap}>
        <FontAwesome
          onPress={() => setIsEncrypted(!isEncrypted)}
          name={isEncrypted ? 'eye-slash' : 'eye'}
          size={18}
          color={'#8C8C8C'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  inputWrap: {
    width: '90%',
    height: '100%',
  },
  iconWrap: {
    width: '5%',
    height: '100%',
    ...CommonStyles.center,
  },
  card: {
    width: '100%',
    height: 45,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.transparent,
    ...CommonStyles.rowFlexStart,
  },
});

export default CustomPassword;

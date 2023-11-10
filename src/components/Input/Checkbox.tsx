import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, Colors} from '@theme/index';

type CheckboxProps = {
  onChange: (event: GestureResponderEvent) => void;
  checked: boolean;
  label: string;
  labelStyle: TextStyle;
};
const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  checked,
  label,
  labelStyle,
}) => {
  const labelTextStyle = StyleSheet.compose(styles.label, labelStyle);
  return (
    <View style={styles.card}>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onChange}>
        {checked && <FontAwesome name="check" size={20} color="white" />}
      </Pressable>
      <Text style={labelTextStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  label: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 16,
    color: Colors.black,
    marginLeft: 10,
  },
});

export default Checkbox;

import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {CommonStyles, Colors} from '@theme/index';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  btnStyle: ViewStyle;
  textStyle: TextStyle;
  disabled?: boolean;
  elevation?: number;
  isLoading?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  text,
  btnStyle,
  textStyle,
  onPress,
  disabled,
  elevation,
  isLoading,
}: ButtonProps) => {
  const borderRadius = btnStyle?.borderRadius ?? 10;
  const styles = StyleSheet.create({
    btnStyle: {
      width: '100%',
      height: '100%',
      borderRadius: borderRadius,
      ...CommonStyles.center,
      opacity: disabled !== undefined && disabled ? 0.6 : 1,
      ...Platform.select({
        android: {
          elevation: elevation ?? 0,
        },
      }),
    },
  });

  const defaultHitSlop = {top: 15, bottom: 15, right: 15, left: 15};

  return (
    <View style={btnStyle}>
      <Pressable
        android_ripple={{color: Colors.ripple, borderless: true}}
        hitSlop={defaultHitSlop}
        disabled={disabled ?? false}
        style={styles.btnStyle}
        onPress={onPress}>
        {isLoading !== undefined && isLoading ? (
          <ActivityIndicator animating={isLoading} color={Colors.darkgreen} />
        ) : (
          <Text style={textStyle}>{text}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;

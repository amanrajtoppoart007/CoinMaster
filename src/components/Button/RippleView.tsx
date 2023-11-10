import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {CommonStyles, Colors} from '@theme/index';

interface Props extends TouchableOpacityProps {
  style: any;
  rippleColor?: any;
  borderRadius?: number;
  elevation?: 1 | 2 | 3 | 4 | 5 | undefined;
  children: React.ReactNode;
  disabled?: boolean;
}
const RippleView: React.FC<Props> = ({
  disabled,
  style,
  onPress,
  onLongPress,
  borderRadius,
  elevation,
  children,
}) => {
  const styles = StyleSheet.create({
    content: {
      width: '100%',
      height: '100%',
      ...CommonStyles.rowCenter,
      borderRadius: borderRadius ?? 4,
      ...Platform.select({
        android: {
          elevation: elevation ?? 0,
        },
      }),
      opacity: disabled !== undefined && disabled ? 0.6 : 1,
    },
  });
  const defaultHitSlop = {top: 15, bottom: 15, right: 15, left: 15};

  return (
    <View style={style}>
      <Pressable
        disabled={disabled ?? false}
        android_ripple={{color: Colors.ripple, borderless: true}}
        hitSlop={defaultHitSlop}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.content}>
        {children}
      </Pressable>
    </View>
  );
};

export default RippleView;

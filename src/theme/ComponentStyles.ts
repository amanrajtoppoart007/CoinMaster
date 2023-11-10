import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

const ComponentStyles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    padding: 4,
  },
  inputTextStyle: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: 14,
    color: Colors.black,
  },
  btnStyle: {
    width: '100%',
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    borderRadius: 4,
  },
  btnTextStyle: {
    fontFamily: Fonts.RobotoBold,
    fontSize: 16,
    color: Colors.black,
  },
});

export default ComponentStyles;

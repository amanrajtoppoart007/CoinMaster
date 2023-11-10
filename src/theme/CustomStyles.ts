import {DimensionValue, StyleSheet, TextStyle} from 'react-native';

const CustomStyles = {
  width: (wp: DimensionValue | undefined) => {
    return StyleSheet.create({
      width: {
        width: wp,
      },
    }).width;
  },
  height: (hp: DimensionValue | undefined) => {
    return StyleSheet.create({
      height: {
        height: hp,
      },
    }).height;
  },
  backgroundColor: (color: string) => {
    return StyleSheet.create({
      backgroundColor: {
        backgroundColor: color,
      },
    }).backgroundColor;
  },
  color: (color: string): TextStyle => {
    return StyleSheet.create({
      color: {
        color: color,
      },
    }).color;
  },
  margin: (value: number) => {
    return StyleSheet.create({
      margin: {
        margin: value,
      },
    }).margin;
  },
  padding: (value: number) => {
    return StyleSheet.create({
      padding: {
        padding: value,
      },
    }).padding;
  },
  marginHorizontal: (value: number) => {
    return StyleSheet.create({
      marginHorizontal: {
        marginHorizontal: value,
      },
    }).marginHorizontal;
  },
  marginVertical: (value: number) => {
    return StyleSheet.create({
      marginVertical: {
        marginVertical: value,
      },
    }).marginVertical;
  },
  marginTop: (value: number) => {
    return StyleSheet.create({
      marginTop: {
        marginTop: value,
      },
    }).marginTop;
  },
  marginBottom: (value: number) => {
    return StyleSheet.create({
      marginBottom: {
        marginBottom: value,
      },
    }).marginBottom;
  },
  justifyContent: (
    justify:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined,
  ): TextStyle => {
    return StyleSheet.create({
      justifyContent: {
        justifyContent: justify,
      },
    }).justifyContent;
  },
};

export default CustomStyles;

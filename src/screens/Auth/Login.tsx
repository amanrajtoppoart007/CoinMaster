import React from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors, CommonStyles, Fonts} from '@theme/index';
import * as Yup from 'yup';
import {useFormik, FormikValues} from 'formik';
import CustomStatusBar from '@components/CustomStatusBar';
import CustomInput from '@components/Input/CustomInput';
import Button from '@components/Button/Button';
import useDispatchAction from '@hooks/useDispatchAction';
import {setUser} from '@state/reducers/user.slice';
import {setAuth} from '@state/reducers/auth.slice';
import userActions from '@database/actions/user-actions';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').label('Username'),
  password: Yup.string().required('Password is required').label('Password'),
});
function Login() {
  const dispatch = useDispatchAction();
  const {errors, handleSubmit, values, isSubmitting, setFieldValue} = useFormik(
    {
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: async (params: FormikValues) => {
        await handleFormSubmit(params);
      },
      validationSchema: validationSchema,
    },
  );

  const setUsername = (text: string) => {
    setFieldValue('username', text);
  };

  const setPassword = (text: string) => {
    setFieldValue('password', text);
  };

  const handleFormSubmit = async (params: FormikValues) => {
    const user = await userActions.login(params);
    if (user !== false) {
      dispatch(setUser(user));
      dispatch(setAuth());
    } else {
      Alert.alert('Error', 'Please enter valid credentials');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <View style={CommonStyles.wrapper}>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.textSection}>
              <Text style={styles.title}>Coin Master</Text>
            </View>
            <View style={styles.textSection}>
              <Text style={styles.subTitle}>LOGIN</Text>
            </View>
          </View>
          <View style={styles.inputSection}>
            <CustomInput
              value={values.username}
              setValue={setUsername}
              placeholder={'Username'}
              inputStyle={styles.inputStyle}
              inputTextStyle={styles.inputTextStyle}
              placeholderTextColor={'#000'}
              errorText={errors.username}
            />
          </View>

          <View style={styles.inputSection}>
            <CustomInput
              value={values.password}
              setValue={setPassword}
              placeholder={'Password'}
              inputStyle={styles.inputStyle}
              inputTextStyle={styles.inputTextStyle}
              placeholderTextColor={'#000'}
              errorText={errors.password}
            />
          </View>
          <View style={styles.btnSection}>
            <Button
              text={'Submit'}
              btnStyle={styles.btnStyle}
              textStyle={styles.btnTextStyle}
              onPress={() => handleSubmit()}
              isLoading={isSubmitting}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
    backgroundColor: Colors.primary,
  },
  content: {
    ...CommonStyles.content,
    padding: 20,
  },
  title: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 18,
    color: Colors.white,
    fontWeight: '400',
  },
  subTitle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 22,
    color: Colors.white,
    fontWeight: '400',
  },
  textSection: {
    marginVertical: 8,
  },
  section: {
    ...CommonStyles.center,
    marginVertical: 12,
  },
  inputSection: {
    marginVertical: 20,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    textAlign: 'center',
  },
  inputTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 16,
    color: Colors.black,
  },
  btnSection: {
    ...CommonStyles.center,
    marginVertical: 17,
  },
  btnStyle: {
    width: 180,
    height: 48,
    backgroundColor: Colors.secondary,
    ...CommonStyles.center,
  },
  btnTextStyle: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 16,
    color: Colors.white,
  },
  textHelper: {
    fontFamily: Fonts.AbyssinicaSILRegular,
    fontSize: 22,
    color: Colors.white,
  },
});

export default Login;

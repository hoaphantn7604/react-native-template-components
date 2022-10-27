import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, globalLoading, Text } from 'components';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  changeLanguageAction,
  selectMain,
  todoRequestAction,
} from 'reduxCore/main/slice';
import { styles } from './styles';

const IMG_BACKGROUND = require('assets/images/pictures/background.jpg');

interface Props {}

const RegisterScrenn: React.FC<Props> = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { locale } = useSelector(selectMain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLanguageAction('vn'));
    dispatch(todoRequestAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      locale: locale,
    },
    validate: values => {
      const error: any = {};
      if (values.username.length === 0) {
        error.username = 'Please enter username';
      }

      if (values.password.length === 0) {
        error.password = 'Please enter password';
      }

      return error;
    },
    onSubmit: _values => {
      globalLoading.show();
      setTimeout(() => {
        globalLoading.hide();
        navigate('Main');
      }, 1000);
    },
  });

  return (
    <ImageBackground
      style={styles.container}
      source={IMG_BACKGROUND}
      resizeMode="cover">
      <View style={styles.wrapBox}>
        <Text style={styles.title} bold fontSize={30}>
          Login
        </Text>
        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          label="Username"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          textError={formik.errors.username}
        />

        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.password}
          textContentType="oneTimeCode"
          onChangeText={formik.handleChange('password')}
          label="Password"
          placeholder="Enter password"
          placeholderTextColor="gray"
          secureTextEntry
          textError={formik.errors.password}
        />

        <Button
          style={styles.button}
          title="Login"
          fontSize={20}
          onPress={formik.handleSubmit}
        />
        <Text style={styles.textOr} fontSize={16}>
          Or
        </Text>
        <Text
          style={styles.textOr}
          fontSize={18}
          onPress={() => navigate('Register')}>
          Create new account?
        </Text>
      </View>
    </ImageBackground>
  );
};

export default RegisterScrenn;

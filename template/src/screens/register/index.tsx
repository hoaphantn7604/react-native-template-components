import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, globalLoading, Text } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { scale } from 'react-native-utils-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

interface Props {}

const LoginScrenn: React.FC<Props> = () => {
  const { navigate, goBack } = useNavigation<StackNavigationProp<any>>();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      const error: any = {};
      if (values.username.length === 0) {
        error.username = 'Please enter username';
      }

      if (values.password.length === 0) {
        error.password = 'Please enter password';
      }

      if (values.confirmPassword.length === 0) {
        error.confirmPassword = 'Please enter password';
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
    <View style={styles.container}>
      <MaterialIcons
        style={styles.iconBack}
        name="keyboard-backspace"
        color="gray"
        size={scale(35)}
        onPress={goBack}
      />
      <Text style={styles.title} bold fontSize={30}>
        Register
      </Text>
      <View style={styles.wrapBox}>
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
        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.confirmPassword}
          textContentType="oneTimeCode"
          onChangeText={formik.handleChange('confirmPassword')}
          label="Re-Password"
          placeholder="Enter password"
          placeholderTextColor="gray"
          secureTextEntry
          textError={formik.errors.confirmPassword}
        />

        <Button
          style={styles.button}
          title="Create"
          fontSize={20}
          onPress={formik.handleSubmit}
        />
      </View>
    </View>
  );
};

export default LoginScrenn;

import { useNavigation } from '@react-navigation/core';
import { Button, globalLoading, Text } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { scale } from 'react-native-utils-scale';
import { styles } from './styles';

interface Props {}

const LoginScrenn: React.FC<Props> = props => {
  const { navigate } = useNavigation();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
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
    onSubmit: values => {
      globalLoading.show();
      setTimeout(() => {
        globalLoading.hide();
        navigate('Main');
      }, 1000);
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title} bold fontSize={30}>
        Login
      </Text>
      <TextInput
        style={{ marginTop: scale(20) }}
        containerStyle={styles.textinput}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        textErrorStyle={styles.textErrorStyle}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        label="Username"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        focusColor="red"
        textError={formik.errors.username}
      />

      <TextInput
        style={{ marginTop: scale(20) }}
        containerStyle={styles.textinput}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        textErrorStyle={styles.textErrorStyle}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        label="Password"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        secureTextEntry
        focusColor="red"
        textError={formik.errors.password}
      />

      <Button
        style={styles.button}
        title="Login"
        border
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
  );
};

export default LoginScrenn;

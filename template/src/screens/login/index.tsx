import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, globalLoading, Text } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { styles } from './styles';

interface Props {}

const RegisterScrenn: React.FC<Props> = props => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
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
    </View>
  );
};

export default RegisterScrenn;

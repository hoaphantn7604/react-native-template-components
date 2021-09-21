import { useNavigation } from '@react-navigation/core';
import { Button, globalLoading, Text } from 'components';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

interface Props {}

const RegisterScrenn: React.FC<Props> = props => {
  const { goBack } = useNavigation();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      const error: any = {};
      if (values.fullname.length === 0) {
        error.fullname = 'Please enter full name';
      }
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
    onSubmit: values => {
      globalLoading.show();
      setTimeout(() => {
        globalLoading.hide();
        goBack();
      }, 1000);
    },
  });
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={{
          position: 'absolute',
          left: scale(15),
          top: scale(35),
          opacity: 0.7,
        }}
        name="close"
        size={scale(30)}
        onPress={() => {
          goBack();
        }}
      />
      <Text style={styles.title} bold fontSize={30}>
        Sign up
      </Text>
      <TextInput
        style={{ marginTop: scale(20) }}
        containerStyle={styles.textinput}
        inputStyle={{ fontSize: fontScale(16) }}
        labelStyle={{ fontSize: fontScale(18) }}
        textErrorStyle={{ fontSize: fontScale(16) }}
        value={formik.values.fullname}
        onChangeText={formik.handleChange('fullname')}
        label="Full name"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        focusColor="red"
        textError={formik.errors.fullname}
      />

      <TextInput
        style={{ marginTop: scale(20) }}
        containerStyle={styles.textinput}
        inputStyle={{ fontSize: fontScale(16) }}
        labelStyle={{ fontSize: fontScale(18) }}
        textErrorStyle={{ fontSize: fontScale(16) }}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        label="Username"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        focusColor="red"
        textError={formik.errors.username}
      />

      <TextInput
        style={{ marginTop: scale(50) }}
        containerStyle={styles.textinput}
        inputStyle={{ fontSize: fontScale(16) }}
        labelStyle={{ fontSize: fontScale(18) }}
        textErrorStyle={{ fontSize: fontScale(16) }}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        label="Password"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        secureTextEntry
        focusColor="red"
        textError={formik.errors.password}
      />

      <TextInput
        style={{ marginTop: scale(20) }}
        containerStyle={styles.textinput}
        inputStyle={{ fontSize: fontScale(16) }}
        labelStyle={{ fontSize: fontScale(18) }}
        textErrorStyle={{ fontSize: fontScale(16) }}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        label="Confirm Password"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        secureTextEntry
        focusColor="red"
        textError={formik.errors.password}
      />

      <Button
        style={styles.button}
        title="Sign up"
        border
        fontSize={20}
        onPress={formik.handleSubmit}
      />
    </View>
  );
};

export default RegisterScrenn;

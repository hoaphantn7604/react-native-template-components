import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, globalLoading, Text} from '@components';
import {useFormik} from 'formik';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {scale} from 'react-native-size-scaling';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {t} from '@utils/locales/i18n';
import {IMAGES} from '@assets/images';

interface IProps {}

const LoginScrenn: React.FC<IProps> = () => {
  const {navigate, goBack} = useNavigation<StackNavigationProp<any>>();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      const error: any = {};
      if (values.username.length === 0) {
        error.username = t('errors:usernameMessage');
      }

      if (values.password.length === 0) {
        error.password = t('errors:passwordMessage');
      }

      if (values.confirmPassword.length === 0) {
        error.confirmPassword = t('errors:passwordMessage');
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
      source={IMAGES.background}
      resizeMode="cover">
      <MaterialIcons
        style={styles.iconBack}
        name="keyboard-backspace"
        color="gray"
        size={scale(35)}
        onPress={goBack}
      />

      <View style={styles.wrapBox}>
        <Text style={styles.title} bold fontSize={30}>
          {t('register:title')}
        </Text>
        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          label={t('register:username')}
          placeholder={t('register:username')}
          placeholderTextColor="gray"
          textError={formik.errors.username}
        />

        <TextInput
          mode="password"
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.password}
          textContentType="oneTimeCode"
          onChangeText={formik.handleChange('password')}
          label={t('register:password')}
          placeholder={t('register:password')}
          placeholderTextColor="gray"
          secureTextEntry
          textError={formik.errors.password}
        />
        <TextInput
          mode="password"
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.confirmPassword}
          textContentType="oneTimeCode"
          onChangeText={formik.handleChange('confirmPassword')}
          label={t('register:rePassword')}
          placeholder={t('register:rePassword')}
          placeholderTextColor="gray"
          secureTextEntry
          textError={formik.errors.confirmPassword}
        />
      </View>

      <View style={styles.wrapButton}>
        <Button
          style={styles.button}
          title={t('register:create')}
          fontSize={20}
          onPress={formik.handleSubmit}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScrenn;

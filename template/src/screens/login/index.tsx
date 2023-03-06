import {Button, globalLoading, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {useDispatch, useSelector} from 'react-redux';

import SelectLocalComponent from '@components/SelectLocal';
import {changeLanguageAction, selectMain} from '@reduxCore/main/slice';
import {changeLanguage, t} from '@utils/locales/i18n';
import {styles} from './styles';
import {IMAGES} from '@assets/images';

interface IFormErrors {
  username?: string;
  password?: string;
}

interface IProps {}

const RegisterScrenn: React.FC<IProps> = _props => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();
  const {locale} = useSelector(selectMain);

  useEffect(() => {
    changeLanguage(locale);
  }, [locale]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: values => {
      const error: IFormErrors = {};
      if (values.username.length === 0) {
        error.username = t('errors:usernameMessage');
      }

      if (values.password.length === 0) {
        error.password = t('errors:passwordMessage');
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

  const onChangeLanguage = (lang: 'vi' | 'en') => {
    changeLanguage(lang);
    dispatch(changeLanguageAction(lang));
  };

  return (
    <ImageBackground
      style={styles.container}
      source={IMAGES.background}
      resizeMode="cover">
      <SelectLocalComponent
        style={styles.locale}
        locale={locale}
        onChange={onChangeLanguage}
      />
      <View style={styles.wrapBox}>
        <Text style={styles.title} bold fontSize={30}>
          {t('login:title')}
        </Text>
        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          label={t('login:username')}
          placeholder={t('login:username')}
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
          label={t('login:password')}
          placeholder={t('login:password')}
          placeholderTextColor="gray"
          textError={formik.errors.password}
        />

        <Button
          style={styles.button}
          title={t('login:btnLogin')}
          fontSize={20}
          onPress={formik.handleSubmit}
        />
        <Text style={styles.textOr} fontSize={16}>
          {t('login:or')}
        </Text>
        <Text
          style={styles.textOr}
          fontSize={18}
          onPress={() => navigate('Register')}>
          {t('login:btnRegister')}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default RegisterScrenn;

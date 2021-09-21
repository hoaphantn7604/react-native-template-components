import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button, globalLoading, globalMessage, Modal, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { scale } from 'react-native-utils-scale';
import { useDispatch } from 'react-redux';
import { ChangeLanguage } from 'reduxCore/root/action';

export interface Props {}

const MainScreen: React.FC<Props> = _props => {
  const { goBack, navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{ marginVertical: scale(16), alignSelf: 'center' }}
          fontSize={24}>
          {t('common:welcome')}
        </Text>

        <Button
          style={styles.button}
          title="Switch Language"
          border
          onPress={() => {
            dispatch(ChangeLanguage.get('vi'));
          }}
        />

        <Button
          style={styles.button}
          title="Checkbox Tree"
          border
          onPress={() => {
            navigate('CheckboxTree');
          }}
        />

        <Button
          style={styles.button}
          title="Timer"
          border
          onPress={() => {
            navigate('Timer');
          }}
        />

        <Button
          style={styles.button}
          title="Countdown"
          border
          onPress={() => {
            navigate('Countdown');
          }}
        />

        <Button
          style={styles.button}
          title="Dropdown"
          border
          onPress={() => {
            navigate('Dropdown');
          }}
        />

        <Button
          style={styles.button}
          title="MultiSelect"
          border
          onPress={() => {
            navigate('MultiSelect');
          }}
        />

        <Button
          style={styles.button}
          title="SwipeView"
          border
          onPress={() => {
            navigate('SwipeView');
          }}
        />

        <Button
          style={styles.button}
          title="TextInput"
          border
          onPress={() => {
            navigate('TextInput');
          }}
        />
        <Button
          style={styles.button}
          title="Global Loading"
          border
          onPress={() => {
            globalLoading.show();
            setTimeout(() => {
              globalLoading.hide();
            }, 1000);
          }}
        />
        <Button
          style={styles.button}
          title="Global Message"
          border
          onPress={() => {
            globalMessage.show('Title', 'Message');
          }}
        />
        <Button
          style={styles.button}
          title="Modal"
          border
          onPress={() => {
            setVisible(true);
          }}
        />
      </ScrollView>
      <Modal
        visible={visible}
        transparent
        maxHeight={500}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
};
export default MainScreen;

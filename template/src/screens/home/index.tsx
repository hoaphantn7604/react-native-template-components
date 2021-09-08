import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button, globalLoading, globalMessage, Modal, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'shared/language';
import { scale } from 'react-native-utils-scale';

export interface Props {}

const MainScreen: React.FC<Props> = _props => {
  const { goBack, navigate } = useNavigation();
  const { t } = useTranslation();
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
          onPress={() => {
            changeLanguage('vi');
          }}
        />

        <Button
          style={styles.button}
          title="Checkbox Tree"
          onPress={() => {
            navigate('CheckboxTree');
          }}
        />

        <Button
          style={styles.button}
          title="Timer"
          onPress={() => {
            navigate('Timer');
          }}
        />

        <Button
          style={styles.button}
          title="Countdown"
          onPress={() => {
            navigate('Countdown');
          }}
        />

        <Button
          style={styles.button}
          title="Dropdown"
          onPress={() => {
            navigate('Dropdown');
          }}
        />

        <Button
          style={styles.button}
          title="MultiSelect"
          onPress={() => {
            navigate('MultiSelect');
          }}
        />

        <Button
          style={styles.button}
          title="SwipeView"
          onPress={() => {
            navigate('SwipeView');
          }}
        />

        <Button
          style={styles.button}
          title="TextInput"
          onPress={() => {
            navigate('TextInput');
          }}
        />
        <Button
          style={styles.button}
          title="Global Loading"
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
          onPress={() => {
            globalMessage.show('Title', 'Message');
          }}
        />
        <Button
          style={styles.button}
          title="Modal"
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

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button, globalLoading, globalMessage, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'shared/language';

export interface Props {}

const MainScreen: React.FC<Props> = _props => {
  const { goBack, navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text fontSize={24}>{t('common:welcome')}</Text>

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
      </ScrollView>
    </View>
  );
};
export default MainScreen;

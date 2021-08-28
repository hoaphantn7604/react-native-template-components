import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Button, globalLoading, globalMessage } from 'components';

export interface Props {}

const MainScreen: React.FC<Props> = _props => {
  const { goBack, navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

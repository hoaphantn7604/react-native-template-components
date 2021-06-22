import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CurtainView, Button } from 'react-native-utils-components';
import { styles } from './styles';

export interface Props {}

const MainScreen: React.FC<Props> = _props => {
  const { goBack, navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <CurtainView position="top" style={styles.curtainView} maxHeight={300}>
        <View style={styles.curtainContainer} />
      </CurtainView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button
          style={styles.button}
          title="Tree checkbox"
          onPress={() => {
            navigate('Recursive');
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
          title="Progress"
          onPress={() => {
            navigate('Progress');
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
          title="TextInput"
          onPress={() => {
            navigate('TextInput');
          }}
        />

        <Button
          style={styles.button}
          title="Modal"
          onPress={() => {
            navigate('Modal');
          }}
        />

        <Button
          style={styles.button}
          title="CurtainView"
          onPress={() => {
            navigate('CurtainView');
          }}
        />

        <Button
          style={styles.button}
          title="Checkbox"
          onPress={() => {
            navigate('Checkbox');
          }}
        />
      </ScrollView>
    </View>
  );
};
export default MainScreen;

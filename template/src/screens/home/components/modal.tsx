import { COLORS } from 'config';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;

export interface Props {
  name?: string;
}

const ModalScreen: React.FC<Props> = _props => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Show modal"
        onPress={() => {
          setVisible(!visible);
        }}
      />
      <Modal
        visible={visible}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        maxHeight={scale(400)}
        headerStyle={{
          borderTopLeftRadius: scale(22),
          borderTopRightRadius: scale(22),
          backgroundColor: COLORS.SECONDARY,
        }}
        onRequestClose={() => setVisible(false)}>
        <View />
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(150),
    height: scale(50),
  },
});

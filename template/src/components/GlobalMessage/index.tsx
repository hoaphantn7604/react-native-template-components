import { Button, Text } from 'components';
import React, { useImperativeHandle, useState } from 'react';
import { Modal, StatusBar, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';

export const globalMessageRef = React.createRef<any>();
export const globalMessage = {
  show: (title: string, content: string) => {
    globalMessageRef?.current?.show(title, content);
  },
};

export interface Props {
  name?: string;
}

const GlobalMessage = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useImperativeHandle(ref, () => {
    return { show: show };
  });

  const show = (title: string, content: string) => {
    setVisible(true);
    setTitle(title);
    setContent(content);
  };

  return (
    <Modal
      style={styles.main}
      visible={visible}
      animationType={'none'}
      transparent>
      <StatusBar
        translucent
        backgroundColor={'rgba(0,0,0,0.6)'}
        barStyle={'light-content'}
      />
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.main}>
          <View style={styles.boxContent}>
            <View style={styles.content}>
              <View style={styles.title}>
                <Text bold fontSize={17} color={'black'}>
                  {title}
                </Text>
              </View>
              <View style={styles.message}>
                <Text
                  fontSize={15}
                  color={'black'}
                  style={{ textAlign: 'center' }}>
                  {content}
                </Text>
              </View>
              <Button
                style={styles.button}
                title={'OK'}
                onPress={() => {
                  setVisible(false);
                }}
                bgColor={'gray'}
                textColor={'white'}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default GlobalMessage;

import React, { useImperativeHandle, useState } from 'react';
import { Modal, StatusBar, View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { styles } from './styles';

export const globalLoadingRef = React.createRef<any>();

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show();
  },
  hide: () => {
    globalLoadingRef?.current?.hide();
  },
};

export interface Props {
  name?: string;
}

const GlobalLoading = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => {
    return { show: show, hide: hide };
  });

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType={'none'} transparent>
      <StatusBar
        backgroundColor={'rgba(0,0,0,0.6)'}
        barStyle={'light-content'}
      />
      <View style={styles.main}>
        <UIActivityIndicator color="white" size={50} />
      </View>
    </Modal>
  );
});

export default GlobalLoading;

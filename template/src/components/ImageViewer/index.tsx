import React from 'react';
import {Modal, SafeAreaView} from 'react-native';
import {Image} from 'react-native-element-image';
import {height} from 'react-native-size-scaling';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ImageViewer} from './model';
import {styles} from './styles';

const ModalComponent: ImageViewer = props => {
  const {visible = false, uri, onRequestClose = () => {}} = props;

  if (!uri) {
    return null;
  }

  return (
    <Modal {...props} visible={visible} style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <FontAwesome
          onPress={onRequestClose}
          style={styles.icon}
          name="close"
          color={'white'}
          size={40}
        />
        <Image height={height / 1.5} source={uri} />
      </SafeAreaView>
    </Modal>
  );
};

export default ModalComponent;

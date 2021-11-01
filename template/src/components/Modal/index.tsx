import React from 'react';
import { Modal, View, TouchableWithoutFeedback } from 'react-native';
import { height as h } from 'react-native-utils-scale';
import VerticalSwipeView from 'react-native-vertical-swipe-view';
import { CModal } from './model';

const defaultProps = {
  visible: false,
  transparent: false,
  height: h / 2,
  styles: {},
  headerStyle: {},
  backgroundColor: 'white',
};

const ModalComponent: CModal = props => {
  const {
    visible,
    maxHeight = h / 2,
    onRequestClose,
    style,
    backgroundColor,
    headerStyle,
    renderHeader,
  } = props;

  return (
    <Modal {...props} visible={visible} style={{ flex: 1 }}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          style,
        ]}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <VerticalSwipeView
          position="bottom"
          backgroundColor={backgroundColor}
          maxHeight={maxHeight}
          visible={visible}
          headerStyle={headerStyle}
          renderHeader={renderHeader}
          onRequestClose={onRequestClose}>
          {props?.children}
        </VerticalSwipeView>
      </View>
    </Modal>
  );
};

ModalComponent.defaultProps = defaultProps;
export default ModalComponent;

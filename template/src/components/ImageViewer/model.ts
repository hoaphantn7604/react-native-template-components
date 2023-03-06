import React from 'react';
import {ImageSourcePropType, ModalProps} from 'react-native';

export interface IProps extends ModalProps {
  visible?: boolean;
  uri?: ImageSourcePropType;
  onRequestClose?: () => void;
}

export type ImageViewer = React.FC<IProps>;

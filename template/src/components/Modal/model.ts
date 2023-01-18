import React from 'react';
import {StyleProp, ModalProps, ViewStyle} from 'react-native';

export interface IProps extends ModalProps {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  transparent?: boolean;
  maxHeight?: number;
  supportedOrientations?: Array<
    | 'portrait'
    | 'portrait-upside-down'
    | 'landscape'
    | 'landscape-left'
    | 'landscape-right'
  >;
  onRequestClose?: () => void;
  renderHeader?: () => JSX.Element;
}

export type CModalProps = React.FC<IProps>;

import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

interface IProps {
  title?: string;
  textColor?: string;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  fontSize?: number | any;
  onPress?: () => void;
  border?: boolean;
}

export type ButtonProps = React.FC<IProps>;

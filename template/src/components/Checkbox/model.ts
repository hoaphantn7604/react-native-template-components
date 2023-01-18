import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface IProps {
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  fontFamily?: string;
  type?: 'checkbox' | 'radio';
  label?: string;
  check?: boolean;
  size?: number;
  color?: string;
  onPress?: (check: boolean) => void;
}

export type CheckboxProps = React.FC<IProps>;

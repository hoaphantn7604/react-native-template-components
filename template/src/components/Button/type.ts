import React from 'react';
import { ViewStyle } from 'react-native';

interface Props {
  title?: string;
  textColor?: string;
  bgColor?: string;
  style?: ViewStyle;
  fontSize?: number | any;
  onPress?: () => void;
  border?: boolean;
}

export type ButtonProps = React.FC<Props>;

import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface IProps {
  style?: StyleProp<ViewStyle>;
  locale: 'vi' | 'en';
  onChange: (local: 'vi' | 'en') => void;
}

export type SelectLocal = React.FC<IProps>;

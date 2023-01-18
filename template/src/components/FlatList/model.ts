import React from 'react';
import {FlatListProps} from 'react-native';

interface IProps extends FlatListProps<any> {
  keyExtractorField: string;
  onRefresh?: () => void;
  onLoadMore?: () => void;
}

export type FlatlistProps = React.FC<IProps>;

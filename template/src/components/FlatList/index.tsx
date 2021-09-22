import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { PropsFlatlist } from './type';

const FlatListComponent: PropsFlatlist = props => {
  const { data, renderItem, onRefresh, onLoadMore } = props;
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={(e, i) => i.toString()}
      extraData={data}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onRefresh && onRefresh();
          }}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
    />
  );
};

export default FlatListComponent;

import { FlatList, Text } from 'components';
import React, { useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Image } from 'react-native-element-image';
import { scale, width } from 'react-native-utils-scale';
import { DATA } from './constant';
import { styles } from './styles';

interface Props {}
const ProductScreen: React.FC<Props> = props => {
  const _renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.img}
          width={width / 2 - scale(16)}
          source={item.img}
        />
        <Text style={styles.text} fontSize={14} bold>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} bold fontSize={16}>
        Horizontal
      </Text>
      <FlatList data={DATA} renderItem={_renderItem} horizontal />
      <Text style={styles.text} bold fontSize={16}>
        Vertical
      </Text>
      <FlatList data={DATA} renderItem={_renderItem} numColumns={2} />
    </SafeAreaView>
  );
};

export default ProductScreen;

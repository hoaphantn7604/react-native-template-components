import { FlatList, Header, Text } from 'components';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Image } from 'react-native-element-image';
import { scale, width } from 'react-native-utils-scale';
import { DATA } from './constant';
import { styles } from './styles';

interface Props {}

const HomeScreen: React.FC<Props> = props => {
  const _renderItemSlider = ({ item, index }: any) => {
    return (
      <View style={styles.itemSlider}>
        <Image style={styles.imgSlider} width={width} source={item.img} />
      </View>
    );
  };

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
      <Header onPressUser={() => {}} onChangeText={e => {}} />
      <FlatList
        data={DATA}
        renderItem={_renderItemSlider}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.text} bold fontSize={16}>
        -------0-------
      </Text>
      <FlatList data={DATA} renderItem={_renderItem} numColumns={2} />
    </SafeAreaView>
  );
};

export default HomeScreen;

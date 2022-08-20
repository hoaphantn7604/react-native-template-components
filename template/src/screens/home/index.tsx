import { FlatList, Header, Text } from 'components';
import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { Image } from 'react-native-element-image';
import { scale } from 'react-native-size-scaling';
import { DATA } from './constant';
import { styles } from './styles';

const { width } = Dimensions.get('window');

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const _renderItemSlider = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.itemSlider}>
        <Image style={styles.imgSlider} width={width} source={item.img} />
      </View>
    );
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.item}>
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
      <Header onPressUser={() => {}} onChangeText={_e => {}} />
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

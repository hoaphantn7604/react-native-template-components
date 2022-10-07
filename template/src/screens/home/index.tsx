import { FlatList, Header, Text } from 'components';
import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { Image } from 'react-native-element-image';
import { scale } from 'react-native-size-scaling';
import { BANNER, DATA } from './constant';
import { styles } from './styles';
import { ScrollView } from 'react-native-virtualized-view';

const { width } = Dimensions.get('window');

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const _renderItemSlider = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.itemSlider}>
        <Image
          style={styles.imgSlider}
          width={width}
          height={150}
          source={item.img}
        />
      </View>
    );
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.item}>
        <Image
          style={styles.img}
          width={width / 2 - scale(24)}
          source={item.img}
          resizeMode="cover"
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
      <ScrollView>
        <FlatList
          data={BANNER}
          renderItem={_renderItemSlider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.text} bold fontSize={16}>
          -------0-------
        </Text>
        <FlatList data={DATA} renderItem={_renderItem} numColumns={2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import {FlatList, Header, ImageViewer, Text} from '@components';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import {Image} from 'react-native-element-image';
import {scale} from 'react-native-size-scaling';
import {BANNER, DATA} from './constant';
import {styles} from './styles';

const {width} = Dimensions.get('window');

interface IData {
  id: number;
  title: string;
  img: ImageSourcePropType;
}

interface IProps {}

const HomeScreen: React.FC<IProps> = _props => {
  const [paging, setPaging] = useState(1);
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState<ImageSourcePropType>();

  const onViewImage = (image: ImageSourcePropType) => {
    setUri(image);
    setVisible(true);
  };

  const _renderItemSlider = ({item}: {item: IData}) => {
    return (
      <TouchableWithoutFeedback onPress={() => onViewImage(item.img)}>
        <Image
          width={width}
          height={280}
          source={item.img}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
    );
  };

  const _renderItem = ({item}: {item: IData}) => {
    return (
      <TouchableWithoutFeedback onPress={() => onViewImage(item.img)}>
        <View style={styles.item}>
          <Image
            style={styles.img}
            width={width / 2 - scale(32)}
            source={item.img}
            resizeMode="cover"
          />
          <Text style={styles.text} fontSize={14} bold>
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      setPaging(roundIndex + 1);
    },
    [],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header onPressUser={() => {}} onChangeText={_e => {}} />

      <FlatList
        keyExtractorField="id"
        data={BANNER}
        horizontal
        renderItem={_renderItemSlider}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <Text style={styles.text} bold fontSize={16}>
        -------{paging}-------
      </Text>
      <FlatList
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapperStyle}
        keyExtractorField="id"
        data={DATA}
        renderItem={_renderItem}
        numColumns={2}
      />
      <ImageViewer
        visible={visible}
        uri={uri}
        onRequestClose={() => setVisible(false)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

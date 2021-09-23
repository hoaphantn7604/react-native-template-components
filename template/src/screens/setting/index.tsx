import { useNavigation } from '@react-navigation/native';
import { globalLoading, globalMessage, Modal, Text } from 'components';
import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'react-native-element-image';
import { scale } from 'react-native-utils-scale';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { defaulft_avt, defaulft_img } from './constant';
import { styles } from './styles';

interface Props {}

const SettingScreen: React.FC<Props> = props => {
  const [visible, setVisible] = useState<boolean>(false);
  const { navigate } = useNavigation();

  const itemMenu = (icon: string, name: string, onPress: () => void) => {
    return (
      <TouchableOpacity style={styles.rowMenu} onPress={onPress}>
        <AntDesign name={icon} size={scale(22)} />
        <Text style={styles.textMenu} bold fontSize={16}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        imageStyle={styles.imgBackground}
        source={defaulft_img}>
        <View style={styles.wrap}>
          <Image
            style={styles.avatarImg}
            width={scale(100)}
            height={scale(100)}
            source={defaulft_avt}
          />
        </View>
        <Text style={styles.name} bold fontSize={26}>
          Hoa Phan
        </Text>
      </ImageBackground>
      <ScrollView>
        <View style={styles.wrapMenu}>
          {itemMenu('iconfontdesktop', 'Checkbox Tree', () => {
            navigate('CheckboxTree');
          })}
          {itemMenu('iconfontdesktop', 'Dropdown', () => {
            navigate('Dropdown');
          })}
          {itemMenu('iconfontdesktop', 'Multi Select', () => {
            navigate('MultiSelect');
          })}
          {itemMenu('iconfontdesktop', 'TextInput', () => {
            navigate('TextInput');
          })}
          {itemMenu('iconfontdesktop', 'Swipe View', () => {
            navigate('SwipeView');
          })}
          {itemMenu('iconfontdesktop', 'Timer', () => {
            navigate('Timer');
          })}
          {itemMenu('iconfontdesktop', 'Countdown', () => {
            navigate('Countdown');
          })}
          {itemMenu('iconfontdesktop', 'Global Loading', () => {
            globalLoading.show();
            setTimeout(() => {
              globalLoading.hide();
            }, 1000);
          })}
          {itemMenu('iconfontdesktop', 'Global Message', () => {
            globalMessage.show('Title', 'Message');
          })}
          {itemMenu('iconfontdesktop', 'Modal', () => {
            setVisible(true);
          })}
        </View>
      </ScrollView>
      <Modal
        visible={visible}
        transparent
        maxHeight={500}
        onRequestClose={() => setVisible(false)}
      />
    </SafeAreaView>
  );
};

export default SettingScreen;

import { Text } from 'components';
import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { useScale } from 'react-native-utils-toolkit';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { HeaderProps } from './type';
const { scale, fontScale } = useScale;

const HeaderComponent: HeaderProps = props => {
  const {
    name = 'Hoa Phan',
    avatar = require('assets/images/icons/ic-avatar.png'),
    onPressUser,
    onChangeText,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onPressUser && onPressUser()}>
        <View style={styles.wrapUser}>
          <View style={styles.wrapAvatar}>
            <Image style={styles.avatar} source={avatar} />
          </View>
          <Text style={styles.name} fontSize={18} bold>
            {name}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          inputStyle={{ fontSize: fontScale(16) }}
          labelStyle={{ fontSize: fontScale(18) }}
          textErrorStyle={{ fontSize: fontScale(16) }}
          onChangeText={onChangeText}
          placeholder="Search..."
          renderRightIcon={() => (
            <AntDesign
              style={{ marginRight: scale(4) }}
              name="search1"
              size={scale(18)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;

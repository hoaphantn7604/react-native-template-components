import { COLORS } from 'config';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { CurtainView } from 'react-native-utils-components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;

export interface Props {
  name?: string;
}

const CurtainScreen: React.FC<Props> = _props => {
  const _renderHeaderTop = () => {
    return (
      <View style={styles.headerTop}>
        <View style={styles.lineTop} />
      </View>
    );
  };

  const _renderHeaderBottom = () => {
    return (
      <View style={styles.headerBottom}>
        <View style={styles.lineBottom} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CurtainView
        position="top"
        style={styles.curtainView}
        maxHeight={scale(300)}
        headerStyle={{ backgroundColor: 'transparent' }}
        renderHeader={_renderHeaderTop}>
        <View style={styles.curtainContainer} />
      </CurtainView>

      <View style={{ flex: 1 }} />

      <CurtainView
        position="bottom"
        style={styles.curtainView}
        maxHeight={scale(200)}
        headerStyle={{ backgroundColor: 'transparent' }}
        renderHeader={_renderHeaderBottom}>
        <View style={styles.curtainContainer}>
          <View style={styles.row}>
            <AntDesign name="rest" color="black" size={scale(40)} />
            <AntDesign name="apple-o" color="black" size={scale(40)} />
            <AntDesign name="hearto" color="black" size={scale(40)} />
          </View>
          <View style={styles.row}>
            <AntDesign name="cloudo" color="black" size={scale(40)} />
            <AntDesign name="staro" color="black" size={scale(40)} />
            <AntDesign name="tagso" color="black" size={scale(40)} />
          </View>
        </View>
      </CurtainView>
    </SafeAreaView>
  );
};

export default CurtainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  curtainView: {
    width: '100%',
  },
  curtainContainer: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(20),
  },
  headerTop: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBottom: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: scale(22),
    borderTopRightRadius: scale(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineTop: {
    width: scale(40),
    height: scale(6),
    backgroundColor: COLORS.SECONDARY,
  },
  lineBottom: {
    width: scale(40),
    height: scale(6),
    backgroundColor: 'white',
  },
});

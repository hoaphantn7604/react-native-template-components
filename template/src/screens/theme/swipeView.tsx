import { COLORS } from 'config';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwipeView from 'react-native-vertical-swipe-view';
import { scale } from 'react-native-utils-scale';

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
      <SwipeView
        position="top"
        style={styles.swipeView}
        maxHeight={scale(200)}
        headerStyle={{ backgroundColor: 'transparent' }}
        renderHeader={_renderHeaderTop}>
        <View style={styles.curtainContainer} />
      </SwipeView>

      <View style={{ flex: 1 }} />

      <SwipeView
        position="bottom"
        style={styles.swipeView}
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
      </SwipeView>
    </SafeAreaView>
  );
};

export default CurtainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeView: {
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

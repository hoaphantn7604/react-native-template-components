import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'components';
import { Timer } from 'react-native-element-timer';
import { scale } from 'react-native-utils-scale';

export interface Props {}

const TimerScreen: React.FC<Props> = _props => {
  const timerRef: any = useRef(null);

  return (
    <View style={styles.container}>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        onTimes={e => {}}
        onEnd={e => {}}
      />
      <Button
        style={styles.button}
        title={'Start'}
        border
        onPress={() => {
          timerRef.current.start();
        }}
      />
      <Button
        style={styles.button}
        title={'Pause'}
        border
        onPress={() => {
          timerRef.current.pause();
        }}
      />
      <Button
        style={styles.button}
        title={'Resume'}
        border
        onPress={() => {
          timerRef.current.resume();
        }}
      />
      <Button
        style={styles.button}
        title={'Stop'}
        border
        onPress={() => {
          timerRef.current.stop();
        }}
      />
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
  },
  timer: {
    marginVertical: scale(20),
  },
  timerText: {
    fontSize: scale(22),
  },
  button: {
    marginVertical: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(100),
  },
});

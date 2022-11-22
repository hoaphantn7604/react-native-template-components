import React, { useRef } from 'react';
import { View } from 'react-native';
import { Button } from '@components';
import { Timer } from 'react-native-element-timer';
import { StyleSheet } from 'react-native-size-scaling';

export interface Props {}

const TimerScreen: React.FC<Props> = _props => {
  const timerRef: any = useRef(null);

  return (
    <View style={styles.container}>
      <Timer
        ref={timerRef}
        style={styles.timer}
        textStyle={styles.timerText}
        onTimes={_e => {}}
        onEnd={_e => {}}
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
    padding: 20,
  },
  timer: {
    marginVertical: 20,
  },
  timerText: {
    fontSize: 22,
  },
  button: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 24,
    width: 100,
  },
});

/* eslint-disable no-undef */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const mocked = mocked;

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mocked,
    }),
  };
});

jest.mock('react-native-utils-scale', () => {
  const UtilsToolkit = require('react-native-utils-scale/mock');
  return UtilsToolkit;
});

jest.mock('react-native-utils-toolkit', () => {
  const UtilsToolkit = require('react-native-utils-toolkit/mock');
  return UtilsToolkit;
});
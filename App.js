import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './src/index';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

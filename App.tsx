/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/navigationUtil';




function App(): React.JSX.Element {

  return (
    <ErrorBoundary>
      <AppNavigator/>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
});

export default App;

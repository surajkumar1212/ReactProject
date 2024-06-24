/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/navigationUtil';
import MyProvider from './src/context/MyProvider';
import DrawerScreen from './src/screens/MainScreen';

function App(){

  return (
        <ErrorBoundary>
          <MyProvider>
            <AppNavigator/>
          </MyProvider>
        </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
});

export default App;

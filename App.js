/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import ErrorBoundary from './src/components/ErrorBoundary';
import AppNavigator from './src/navigation/navigationUtil';
import MyProvider from './src/context/MyProvider';
import { Provider } from 'react-redux';
import store from './src/redux/store/store'

function App() {

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MyProvider>
          {/* <PostList /> */}
          <AppNavigator/>
        </MyProvider>

      </ErrorBoundary>
    </Provider>
  );
}

const styles = StyleSheet.create({
});

export default App;

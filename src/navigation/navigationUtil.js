import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/Settings';
import LottieAnim from '../screens/Lottie';
import HomeScreenMain from '../screens/HomeScreenMain';
import HomeScreenClassComp from '../screens/HomeScreenClassComp';

function RootStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen name="HomeScreenClassComp" component={HomeScreenClassComp} />
         <Stack.Screen name="HomeScreenMain" component={HomeScreenMain} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Lottie" component={LottieAnim} />
      </Stack.Navigator>
    );
  }
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
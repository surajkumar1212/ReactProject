import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/Settings';
import LottieAnim from '../screens/Lottie';
import HomeScreenMain from '../screens/HomeScreenMain';
import HomeScreenClassComp from '../screens/HomeScreenClassComp';
import AdvancedComp from '../screens/AdvancedComp';
import ForwardRef from '../screens/ForwardRef';
import Hooks from '../screens/Hooks';
import MainScreen from '../screens/MainScreen';
import ReduxExScreen from '../screens/ReduxExScreen';
import PostListScreen from '../screens/PostListScreen';
import SimpleAnimations from '../screens/SimpleAnimations';

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hooks" component={Hooks} />
      <Stack.Screen name="ForwardRef" component={ForwardRef} />
      <Stack.Screen name="AdvancedComp" component={AdvancedComp} />
      <Stack.Screen name="HomeScreenClassComp" component={HomeScreenClassComp} />
      <Stack.Screen name="HomeScreenMain" component={HomeScreenMain} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Lottie" component={LottieAnim} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="SimpleAnimations">
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
      <Drawer.Screen name="SimpleAnimations" component={SimpleAnimations} />
      <Drawer.Screen name="Hooks" component={Hooks} />
      <Drawer.Screen name="ForwardRef" component={ForwardRef} />
      <Drawer.Screen name="AdvancedComp" component={AdvancedComp} />
      <Drawer.Screen name="HomeScreenClassComp" component={HomeScreenClassComp} />
      <Drawer.Screen name="HomeScreenMain" component={HomeScreenMain} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Lottie" component={LottieAnim} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { position: 'absolute' },
      headerShown: false
    }}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="PostListScreen" component={PostListScreen} />
      {/* <Tab.Screen name="ReduxExScreen" component={ReduxExScreen} /> */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lottie" component={LottieAnim} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer >
      <DrawerNavigation />
    </NavigationContainer>
  );
}
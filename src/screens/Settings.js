import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  repeat,
  withRepeat
} from 'react-native-reanimated';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const rotation = useSharedValue(0);

  const rotateSquare = () => {
    rotation.value = withRepeat(withTiming(
      360,
      { duration: 2000, easing: Easing.bezier(0.25, -0.5, 0.25, 1) },
    ), 10, true)
  };
  useEffect(()=> {
    rotateSquare();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, animatedStyle]} />
      <TouchableOpacity onPress={() => {navigation.navigate('Lottie')}}style={{marginTop: 50}}>
        <Text>Move to next screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default SettingsScreen;
import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function LottieAnim() {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 9000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedLottieView
    colorFilters={[
        {
          keypath: 'No Data Found Outlines',
          color: 'orange',
        },
      ]}
      style={{flex: 1}}
      source={require('../assets/lottieFiles/NoData.json')}
      progress={animationProgress.current}
    />
  );
}

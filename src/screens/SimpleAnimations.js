import React, { useEffect } from 'react';
import { Button, View, Dimensions, TouchableWithoutFeedback, Alert, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat, withSequence, ReduceMotion, Easing } from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SimpleAnimations = () => {
    const intialValue = 50, finalValue = 200;
    const width = useSharedValue(intialValue), height = useSharedValue(intialValue);
    const x = useSharedValue(0), y = useSharedValue(0);
    const rotation = useSharedValue(0);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const color = useSharedValue(generateRandomColor());


    const generateRandomPosition = (dimension, size) => {
        return Math.random() * (dimension - size);
    };

    const repeatAnimation = (value) => {
        return withRepeat(
            withTiming(value === intialValue ? finalValue : intialValue, {
                duration: 1000,
                easing: Easing.linear,
            }, (finished) => {
                if (finished) {
                    // console.log('Animation finished');
                }
            }),
            -1,
            true
        );
    };

    const rotateView = (value) => {
      return  withRepeat(
            withTiming(value, {
                duration: 2000,
                easing: Easing.linear,
            }),
            -1
        );
    }


    useEffect(() => {
        const animationInterval = setInterval(() => {
            updateUI()
        }, 2000);

        return () => clearInterval(animationInterval);
    }, []);


    width.value = repeatAnimation(width.value)
    height.value = repeatAnimation(height.value)

    rotation.value = rotateView(180)

    const updateUI = () => {
        const randomX = generateRandomPosition(screenWidth - 100, 100);
        const randomY = generateRandomPosition(screenHeight - 100, 100);

        x.value = withSpring(randomX);
        y.value = withSpring(randomY);

        color.value = generateRandomColor();
    }

    updateUI()

    const handlePress = () => {
        updateUI()

        // width.value = withSpring(width.value === intialValue ? finalValue : intialValue);
        // height.value = withSpring(height.value === intialValue ? finalValue : intialValue);

        // width.value = withRepeat(
        //     withTiming(width.value === intialValue ? finalValue : intialValue, { duration: 1000 }),
        //     -1,
        //     true,
        //     () => {},
        //     ReduceMotion.System,
        //   )

        //   height.value = withRepeat(
        //     withTiming(width.value === intialValue ? finalValue : intialValue, { duration: 1000 }),
        //     -1,
        //     true,
        //     () => {},
        //     ReduceMotion.System,
        //   )

        // width.value = withRepeat(withSpring(width.value === intialValue ? finalValue : intialValue));
        // height.value = withRepeat(withSpring(height.value === intialValue ? finalValue : intialValue));

        // const randomX = generateRandomPosition(screenWidth - 100, 100);
        // const randomY = generateRandomPosition(screenHeight - 100, 100);

        // x.value = withSpring(randomX);
        // y.value = withSpring(randomY);

        // color.value = generateRandomColor();

    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: height.value,
            transform: [
                { translateX: x.value },
                { translateY: y.value },
                { rotate: `${rotation.value}deg` }
            ],
            backgroundColor: withTiming(color.value, { duration: 100 })
        };
    });

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <Animated.View
                    style={[
                        animatedStyle,styles.box
                    ]}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: '#b58df1',
      borderRadius: 20,
    },
  });

export default SimpleAnimations;

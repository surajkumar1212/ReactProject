import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
    withSpring
} from 'react-native-reanimated';
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { StyleSheet, Dimensions } from 'react-native';
import LoggerUtil from '../utils/LoggerUtil';

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get('screen');

const DragAndDropAnimation = () => {
    const translationX = useSharedValue(0), translationY = useSharedValue(0), prevTranslationX = useSharedValue(0), prevTranslationY = useSharedValue(0);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const color = useSharedValue(generateRandomColor());


    useEffect(() => {
        const animationInterval = setInterval(() => {
            updateUI()
        }, 1000);

        return () => clearInterval(animationInterval);
    }, []);


    const updateUI = () => {
        color.value = generateRandomColor();
    }

    const gesturePan = Gesture.Pan()
        .minDistance(1)
        .onStart(() => {
            prevTranslationX.value = translationX.value;
            prevTranslationY.value = translationY.value;
        })
        .onUpdate((event) => {
            const maxTranslateX = width / 2 - 50;
            const maxTranslateY = height / 2 - 50;

            translationX.value = clamp(
                prevTranslationX.value + event.translationX,
                -maxTranslateX,
                maxTranslateX
            );
            translationY.value = clamp(
                prevTranslationY.value + event.translationY,
                -maxTranslateY,
                maxTranslateY
            );
        })
        .runOnJS(true);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translationX.value },
            { translateY: translationY.value }
        ],
        backgroundColor: withTiming(color.value, { duration: 100 })
    }));


    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={gesturePan}>
                <Animated.View style={[animatedStyles, styles.box]}></Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
    },
});

export default DragAndDropAnimation;
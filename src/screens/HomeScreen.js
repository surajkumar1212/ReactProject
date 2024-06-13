import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {
    useNavigation,
  } from '@react-navigation/native';
  import Animated,{ useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
  import Svg, { Circle, Rect } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function HomeScreen() {
  useEffect(()=>{
    console.log('Mounted')

    return () => {
      console.log('UnMounted')
      //unmounting
    }
  },[]);
//  const fadeAnim = useRef(new Animated.Value(0)).current;
 const r = useSharedValue(10);
 const color = useSharedValue('rgb(43,88,87)');
 const [switchState, setSwitchState] = useState(true);
 const navigation = useNavigation();
  // const fadeIn = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start(() => {navigation.navigate('Settings')});
  // };

  const animatedProps = useAnimatedProps(() => {
   return{
    r: withTiming(r.value),
    color: color.value,
   }
  });

  const handlePress = (reverse = false) => {
    const myArray = ['rgb(41,8,87)', 'rgb(43,199,87)', 'rgb(430,2,87)', 'rgb(22,22,111)', 'rgb(43,88,87)', 'rgb(230,230,250)', 'rgb(255,165,0)'];  
   const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  
    r.value = reverse ? r.value - 5 : r.value + 5;
    color.value = randomElement
  };

  // const fadeOut = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  // };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
    {/* <Animated.View
        style={{
          opacity: fadeAnim,
          width: 250,
          height: 50,
          backgroundColor: 'blue',
        }}
      /> */}
      {/* <TouchableOpacity onPress={() => {
        switchState ? fadeIn() : fadeOut()
        setSwitchState(!switchState)
      }}>
        <Text>Fade In</Text>
      </TouchableOpacity> */}
      <Svg height="80%" width="100%" viewBox="0 0 100 100">
        <AnimatedCircle animatedProps= {animatedProps} cx="50" cy="50" r={r} stroke={color} strokeWidth="10" fill="yellow" />
      </Svg>
      <TouchableOpacity onPress={() => handlePress(false)}>
        <Text>Magic</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(true)}>
        <Text>Magic Reverse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Next</Text>
      </TouchableOpacity>
      </View>
    );
  }

  export default HomeScreen;
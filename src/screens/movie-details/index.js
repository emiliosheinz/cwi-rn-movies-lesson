import React, {useRef, useEffect} from 'react';

import {View, Text, Animated} from 'react-native';

export function MovieDetailsScreen() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          duration: 1000,
          toValue: 1,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          duration: 1000,
          toValue: 2,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [animatedValue]);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [getRandomColor(), getRandomColor(), getRandomColor()],
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor,
        }}
      />
    </View>
  );
}

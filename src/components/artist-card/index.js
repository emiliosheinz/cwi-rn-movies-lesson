import React, {useRef, useEffect} from 'react';

import {View, TouchableOpacity, Image, Text, Animated} from 'react-native';

import styles from './styles';

export function ArtistCard(props) {
  const {image, name, onPress, empty = false, index} = props;

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: index * 150,
      useNativeDriver: true,
    }).start();
  }, [index, animatedValue]);

  if (empty) {
    return <View style={[styles.container, styles.empty]} />;
  }

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <Animated.View style={[styles.animateViewStyle, {opacity}]}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={{uri: image}}
            style={styles.image}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>{name}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

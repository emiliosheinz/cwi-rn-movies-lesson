import React from 'react';

import {View, TouchableOpacity, Image, Text} from 'react-native';

import styles from './styles';

export function ArtistCard(props) {
  const {image, name, onPress, empty = false} = props;

  if (empty) {
    return <View style={[styles.container, styles.empty]} />;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="cover" source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

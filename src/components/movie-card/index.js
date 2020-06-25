import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export function MovieCard(props) {
  const {image, title, subtitle, onPressCard, id} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressCard(id, title)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.bottomContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

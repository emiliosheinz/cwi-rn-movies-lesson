import React from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export function FavoritedMoviesButton({navigation}) {
  const {favorited} = useSelector((state) => state.movies);

  function handleIconPress() {
    navigation.navigate('FavoritedListScreen');
  }

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <Icon name="star" color="#0294A5" size={30} />
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{favorited.length}</Text>
      </View>
    </TouchableOpacity>
  );
}

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as moviesAction from '../../store/modules/movies/actions';

import styles from './styles';

export function MovieCard(props) {
  const {image, title, subtitle, onPressCard, id} = props;

  const dispatch = useDispatch();

  const {favorited} = useSelector((state) => state.movies);

  function favoriteProduct() {
    dispatch(moviesAction.addToFavorites({image, title, subtitle, id}));
  }

  function unfavoriteProduct() {
    dispatch(moviesAction.removeFromFavorites({id}));
  }

  function renderFavoriteIcon() {
    const isProductFavorited =
      favorited.findIndex((item) => item.id === id) >= 0;

    const iconColor = isProductFavorited ? '#0294A5' : '#FFF';
    const onIconPress = isProductFavorited
      ? unfavoriteProduct
      : favoriteProduct;

    return (
      <TouchableOpacity onPress={onIconPress} style={styles.touchableStart}>
        <Icon name="star" size={30} color={iconColor} />
      </TouchableOpacity>
    );
  }

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
      {renderFavoriteIcon()}
    </TouchableOpacity>
  );
}

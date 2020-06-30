import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';

import {MovieCard} from '../../components';

export function FavoritedListScreen({navigation, route}) {
  const {favorited} = useSelector((state) => state.movies);

  return (
    <FlatList
      data={favorited}
      renderItem={({item}) => (
        <MovieCard
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          onPressCard={() => {}}
          id={item.id}
        />
      )}
    />
  );
}

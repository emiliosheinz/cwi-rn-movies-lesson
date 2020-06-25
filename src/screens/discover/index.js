import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';

import {MovieCard} from '../../components';
import {api} from '../../services';

import styles from './styles';

export function DiscoverScreen(props) {
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    async function getScreenData() {
      setIsLoading(true);
      const resp = await api.get('/discover');

      setDiscoverData(resp.data);
      setIsLoading(false);
    }

    getScreenData();
  }, []);

  function onPressCard() {
    navigation.navigate('MovieDetailsScreen');
  }

  function renderMovie(movie) {
    return (
      <MovieCard
        image={movie.poster_path}
        title={movie.title}
        subtitle={movie.release_date}
        id={movie.id}
        onPressCard={onPressCard}
      />
    );
  }

  function renderFlatList(section, flatListIndex) {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={section.movies}
        renderItem={({item, index}) => renderMovie(item, index)}
        keyExtractor={(item) => String(item.id + Math.random)}
      />
    );
  }

  function renderMovies() {
    return discoverData.map((section, flatListIndex) => {
      return (
        <View key={section.title} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {renderFlatList(section, flatListIndex)}
        </View>
      );
    });
  }

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <ScrollView>{renderMovies()}</ScrollView>;
  }

  return renderContent();
}

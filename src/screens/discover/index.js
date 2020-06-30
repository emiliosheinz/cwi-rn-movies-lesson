import React, {useEffect, useState, useRef, useMemo} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';

import {MovieCard} from '../../components';
import {api} from '../../services';

import styles from './styles';

export function DiscoverScreen(props) {
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);
  const [discoverData, setDiscoverData] = useState([]);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animation = useMemo(
    () =>
      Animated.spring(animatedValue, {
        toValue: 1,
        tension: 15,
        useNativeDriver: true,
      }),
    [animatedValue],
  );

  useEffect(() => {
    async function getScreenData() {
      setIsLoading(true);
      const resp = await api.get('/discover');

      setDiscoverData(resp.data);
      setIsLoading(false);
      animation.start();
    }

    getScreenData();
  }, [animation]);

  function onPressCard(id, title) {
    navigation.navigate('MovieDetailsScreen', {
      movieId: id,
      movieTitle: title,
    });
  }

  function renderMovie(movie, index) {
    const initialTranslation = (index + 1) * 250;

    const translateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [initialTranslation, 2],
    });

    const customStyle = {transform: [{translateX}], opacity: animatedValue};

    return (
      <Animated.View style={customStyle}>
        <MovieCard
          image={movie.poster_path}
          title={movie.title}
          subtitle={movie.release_date}
          id={movie.id}
          onPressCard={() => onPressCard(movie.id, movie.title)}
        />
      </Animated.View>
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

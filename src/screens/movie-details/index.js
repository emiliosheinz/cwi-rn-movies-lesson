import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ArtistCard} from '../../components';
import {api} from '../../services';

import styles from './styles';

export function MovieDetailsScreen({navigation, route}) {
  const {movieId, movieTitle} = route.params;

  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({title: movieTitle});

    async function getScreenData() {
      setIsLoading(true);
      const {data} = await api.get(`/movies/${movieId}`);
      setMovieData(data);

      setIsLoading(false);
    }

    getScreenData();
  }, [movieId, movieTitle, navigation]);

  function renderSynopsis() {
    const {overview = ''} = movieData;
    return (
      <View style={styles.synopsisContainer}>
        <Text style={styles.synopsisTitle}>Synopsis</Text>
        <Text style={styles.synopsisDescription}>{overview}</Text>
      </View>
    );
  }

  function renderGenre() {
    const {genres = []} = movieData;

    return genres.map((genre, index) => {
      const separator = index < genres.length - 1 ? '|' : '';
      return (
        <Text key={index} style={styles.genre}>
          {` ${genre.name} ${separator}`}
        </Text>
      );
    });
  }

  function renderHeaderInfo() {
    const {original_language = '', release_date = '', runtime = ''} = movieData;

    return (
      <View style={styles.header}>
        <View>
          <Image source={{uri: movieData.backdrop_path}} style={styles.image} />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
            style={styles.genreContainerGradient}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.genreContainer}>{renderGenre()}</View>
            </ScrollView>
          </LinearGradient>
        </View>
        <View style={styles.infosContainer}>
          <Text style={styles.infos}>Language: {original_language}</Text>
          <View style={styles.dateTime}>
            <Text style={styles.infos}>{release_date}</Text>
            <Text style={[styles.infos, styles.duration]}>{runtime} min</Text>
          </View>
        </View>
        {renderSynopsis()}
      </View>
    );
  }

  function renderMovieDetails() {
    const {cast = []} = movieData;

    return (
      <FlatList
        ListHeaderComponent={renderHeaderInfo()}
        keyExtractor={(item) => item.id}
        numColumns={3}
        data={cast}
        renderItem={({item}) => (
          <ArtistCard
            name={item.name}
            image={item.profile_path}
            onPress={() => {
              navigation.navigate('ArtistDetailScreen', {
                artistName: item.name,
                artistId: item.id,
              });
            }}
          />
        )}
      />
    );
  }

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return renderMovieDetails();
  }

  return renderContent();
}

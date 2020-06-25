import React, {useLayoutEffect, useEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  Platform,
} from 'react-native';

import {api} from '../../services';

import styles from './styles';

export function ArtistsDetailsScreen({route, navigation}) {
  const {artistName, artistId} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [artistDetail, setArtistDetail] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({title: artistName});
  }, [artistName, navigation]);

  useEffect(() => {
    async function getArtistDetails() {
      setIsLoading(true);

      const {data} = await api.get(`/artists_details/${artistId}`);
      setArtistDetail(data);
      setIsLoading(false);
    }

    getArtistDetails();
  }, [artistId]);

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ScrollView>
        <View>
          <Image
            source={{uri: artistDetail.profile_path}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{artistDetail.name}</Text>
            <Text
              style={
                styles.extraInfo
              }>{`${artistDetail.known_for_department} | ${artistDetail.birthday}`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  return renderContent();
}

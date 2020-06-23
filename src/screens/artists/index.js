import React, {useState, useEffect} from 'react';

import {View, FlatList, ActivityIndicator} from 'react-native';

import {api} from '../../services';
import {ArtistCard} from '../../components';

import styles from './styles';

export function ArtistsScreen(props) {
  const {navigation} = props;

  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getScreenData() {
      setIsLoading(true);
      const resp = await api.get('/artists');
      setArtists(resp.data);
      setIsLoading(false);
    }
    getScreenData();
  }, []);

  function onButtonPress() {
    navigation.navigate('ArtistsDetailsScreen');
  }

  function formatData(data, numColumns) {
    const emptyQty = numColumns - (data.length % numColumns);
    for (let id = 0; id < emptyQty; id++) {
      data.push({id: `blank-${id}`, empty: true});
    }
    return data;
  }

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        numColumns={3}
        data={formatData(artists, 3)}
        renderItem={({item}) => (
          <ArtistCard
            name={item.name}
            image={item.profile_path}
            onPress={onButtonPress}
            empty={item.empty}
            keyExtractor={(i) => i.id}
          />
        )}
      />
    );
  }

  return renderContent();
}

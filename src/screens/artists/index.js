import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export function ArtistsScreen(props) {
  const {navigation} = props;

  function onButtonPress() {
    navigation.navigate('ArtistsDetailsScreen');
  }

  return (
    <View style={styles.container}>
      <Text>ArtistsScreen</Text>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text>DETALHE DO ARTISTA</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

export function DiscoverScreen(props) {
  const {navigation} = props;

  function onButtonPress() {
    navigation.navigate('ArtistsStack');
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DiscoverScreen</Text>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>DETALHE DO FILME</Text>
      </TouchableOpacity>
    </View>
  );
}

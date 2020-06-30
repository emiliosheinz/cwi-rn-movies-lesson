import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  DiscoverScreen,
  MovieDetailsScreen,
  FavoritedListScreen,
} from '../../screens';
import {FavoritedMoviesButton} from '../../components';

const Stack = createStackNavigator();

export function DiscoverStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerTintColor: '#4A4A4A',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerRight: () => <FavoritedMoviesButton navigation={navigation} />,
      })}>
      <Stack.Screen
        component={DiscoverScreen}
        name="DiscoverScreen"
        options={{title: 'Discover'}}
      />
      <Stack.Screen component={MovieDetailsScreen} name="MovieDetailsScreen" />
      <Stack.Screen
        component={FavoritedListScreen}
        name="FavoritedListScreen"
      />
    </Stack.Navigator>
  );
}

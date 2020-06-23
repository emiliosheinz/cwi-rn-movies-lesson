import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {DiscoverScreen, MovieDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={DiscoverScreen} name="DiscoverScreen" />
      <Stack.Screen component={MovieDetailsScreen} name="MovieDetailsScreen" />
    </Stack.Navigator>
  );
}

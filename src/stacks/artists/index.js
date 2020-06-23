import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ArtistsScreen, ArtistsDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export function ArtistsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ArtistsScreen} name="ArtistsScreen" />
      <Stack.Screen
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
}

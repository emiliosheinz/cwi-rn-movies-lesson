import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ArtistsScreen, ArtistsDetailsScreen} from '../../screens';

const Stack = createStackNavigator();

export function ArtistsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#4A4A4A',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen
        component={ArtistsScreen}
        name="ArtistsScreen"
        options={{title: 'Artists'}}
      />
      <Stack.Screen
        component={ArtistsDetailsScreen}
        name="ArtistsDetailsScreen"
      />
    </Stack.Navigator>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import {DiscoverStack, ArtistsStack} from './stacks';
import store from './store';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen component={DiscoverStack} name="DiscoverStack" />
          <BottomTab.Screen component={ArtistsStack} name="ArtistsStack" />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

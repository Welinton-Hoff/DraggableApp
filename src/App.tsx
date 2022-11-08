import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Home} from './screens/Home';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Home />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

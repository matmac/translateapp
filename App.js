/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home';

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

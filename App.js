/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Node, useEffect, useState} from 'react';

import {Button, Image, Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/outline';
import {HomeIcon as HomeIconSolid} from 'react-native-heroicons/solid';
import {StarIcon as StarIconSolid} from 'react-native-heroicons/solid';
import tw from 'twrnc';

import Home from './screens/Home';
import Saved from './screens/Saved';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? (
                <HomeIconSolid color={tw.color('blue-600')} size={20} />
              ) : (
                <HomeIcon color={tw.color('gray-400')} size={20} />
              );
            } else if (route.name === 'Saved') {
              return focused ? (
                <StarIconSolid color={tw.color('blue-600')} size={20} />
              ) : (
                <StarIcon color={tw.color('gray-400')} size={20} />
              );
            }
          },
          tabBarLabelStyle: {
            marginTop: -10,
            marginBottom: 7,
          },
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            title: 'My translations',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

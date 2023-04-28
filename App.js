/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Node, useEffect} from 'react';

import {useState} from 'react';

import {Button, Image, Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tw from 'twrnc';

import Home from './screens/Home';

const Logo = () => {
  return <Image source={
    require('./static/images/netflix-logo.png')
  } style={tw`w-[72px] h-[20px]`} />;
};

const DetailsScreen = ({route, navigation}) => {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text>Details Screen</Text>
      <Text>{route.params?.description}</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', {info: 'Otra info'})}
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ProfilesScreen = ({route, navigation}) => {
  const {id, info} = route.params;
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription('Otra descripción');
  }, []);
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text>Profile Screen</Text>
      <Text>{id}</Text>
      <Text>{info}</Text>
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate('Details', {description: description})
        }
      />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilesScreen}
          initialParams={{id: 93}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTintColor: tw.color('white'),
            headerStyle: {
              paddingRight: 0
            },
            headerTitle: (props) => <Logo {...props} />,
            headerLeft: () => (<Pressable style={tw`android:-ml-14 mr-6`} onPress={() => alert('Toast!')}><Text>Back</Text></Pressable>)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

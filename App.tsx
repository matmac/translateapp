/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import tw from 'twrnc';
import {
  Alert,
  Pressable,
  SafeAreaView, // Sólo IOS
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  const profileToast = () => {
    Alert.alert('Hola Mundo', 'Estamos en la tierra.', [{text: 'Cancelar', style: 'cancel'}, {text: 'Ok', onPress: () => console.log('Vale!')}]);
  };
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <View style={tw`px-8 py-4 flex flex-row items-center justify-between`}>
        <Text style={tw`text-2xl`}>Translate App</Text>
        <Pressable
          style={tw`rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center`}
          onPress={profileToast}
        >
          <Text style={tw`text-slate-800 text-lg font-bold`}>MB</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default App;

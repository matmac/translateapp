/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import tw from 'twrnc';
import type {Node} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import LanguageSelector from './components/LanguageSelector';

const App: () => Node = () => {
  const [language, setLanguage] = useState('es')
  const profileToast = () => {
    Alert.alert('Hola Mundo', 'Estamos en la tierra.', [{text: 'Cancelar', style: 'cancel'}, {text: 'Ok', onPress: () => console.log('Vale!')}]);
  };
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      {/* cabecera */}
      <View style={tw`px-8 py-4 flex flex-row items-center justify-between`}>
        <Text style={tw`text-2xl`}>Translate App</Text>
        <Pressable
          style={tw`rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center`}
          onPress={profileToast}
        >
          <Text style={tw`text-slate-800 text-lg font-bold`}>MB</Text>
        </Pressable>
      </View>
      {/*Language Selector*/}
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </SafeAreaView>
  );
}

export default App;

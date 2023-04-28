import {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {StarIcon} from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
const Translate = ({text, language}) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    useTranslation(text, language);
  }, [text, language]);

  const useTranslation = (text, language) => {
    const data = {
      q: text,
      target: language,
    };
    const translation = debounce(async () => {
      try {
        await fetch(
          'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI',
          {
            method: 'POST',
            body: JSON.stringify(data),
          },
        )
          .then(data => data.json())
          .then(t => setTranslated(t.data.translations[0].translatedText));
      } catch (err) {
        console.log(err);
      }
    });

    return translation()
  };

  // Utility FN · Mover a carpeta utils/utils.js
  const debounce = fn => {
    let id = null;

    return (...args) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        fn(...args);
        id = null;
      }, 300);
    };
  };

  const saveTranslation = async (text, translated) => {
    try {
      await AsyncStorage.setItem(`@translation-${text}-${language}`, translated)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={tw`mt-8 px-8 w-full`}>
      <Text style={tw`mb-2`}>Your translation</Text>
      <View style={tw`relative bg-slate-100/60 rounded-md w-full min-h-30 px-4 py-3`}>
        <Pressable onPress={() => {
          saveTranslation(text, translated)
        }} style={tw`absolute top-2 right-2 z-10`}>
          <StarIcon color={tw.color('blue-400')} size={24}/>
        </Pressable>
        <Text>{translated}</Text>
      </View>
    </View>
  );
};

export default Translate;

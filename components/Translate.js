import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
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

  return (
    <View style={tw`mt-8 px-8 w-full `}>
      <Text style={tw`mb-2`}>Your translation</Text>
      <View style={tw`bg-slate-100/60 rounded-md w-full min-h-30`}>
        <Text>{translated}</Text>
      </View>
    </View>
  );
};

export default Translate;

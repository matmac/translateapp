import {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TrashIcon} from 'react-native-heroicons/outline';
import tw from 'twrnc';
const Saved = () => {
  const [translationValues, setTranslationValues] = useState();
  const getTranslations = async () => {
    let values;
    let translated = [];
    try {
      const translations = await AsyncStorage.getAllKeys();
      values = await AsyncStorage.multiGet(translations);
      values?.map(value => {
        const valueOriginal = value[0].split('-')[1];
        const valueLanguage = value[0].split('-')[2];
        const valueTranslated = value[1];
        translated.push(
          `${valueOriginal} · ${valueTranslated} · @translation-${valueOriginal} · ${valueLanguage}`,
        );
      });
      setTranslationValues(translated);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTranslation = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTranslations();
  }, []);
  return (
    <View style={tw`flex flex-1 px-6 bg-white`}>
      <View style={tw`flex flex-1 flex-col`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 border-t border-slate-100`}
        >
          {translationValues?.map(value => {
            return (
              <View
                key={value}
                style={tw`py-4 border-b border-slate-100 flex flex-row items-center justify-between`}
              >
                <View style={tw`flex flex-1 flex-col pr-4 w-full`}>
                  <View style={tw`rounded bg-slate-100 self-start px-1 py-0.5 mb-1`}>
                    <Text style={tw`text-xs font-bold uppercase`}>{value.split(' · ')[3]}</Text>
                  </View>
                  <Text style={tw`mb-1`}>{value.split(' · ')[0]}</Text>
                  <Text style={tw`font-bold`}>{value.split(' · ')[1]}</Text>
                </View>
                <Pressable
                  onPress={() => {
                    removeTranslation(value.split(' · ')[2]);
                    getTranslations();
                  }}
                >
                  <TrashIcon color={tw.color('red-500')} size={24} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Saved;

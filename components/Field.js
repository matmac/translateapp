import { useState } from 'react'; 
import {Text, TextInput, View} from 'react-native';
import tw from 'twrnc';

const Field = ({onValueChange}) => {
  const [text, setText] = useState('')
  return (
    <View style={tw`px-8`}>
      <Text style={tw`mb-2`}>Your text here</Text>
      <TextInput
        multiline={true}
        numberOfLines={2}
        defaultValue={text}
        value={text}
        onChangeText={(textInput) => {
          setText(textInput)
          onValueChange(textInput)
        }}
        textAlignVertical='top'
        style={tw`relative z-50 border border-slate-200 rounded-md h-auto max-h-30 p-3`}
      />
    </View>
  );
};

export default Field;

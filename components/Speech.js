import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = () => {
    const thingToSay = '1';
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

//  speak 0
//  speak 1
//  speak 2
//  speak 3
//  speak 4
//  speak 5
//  speak 6
// speak 7
// speak 8
//speak 9

//speak clear
//speak equal
//speak plus
//speak subtract
//speak multiply
//speak divide

//const synth = window.speechSynthesis;

// inputForm.onsubmit = (event) => {
//   event.preventDefault();

//   const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
//   const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
//   for (let i = 0; i < voices. Length ; i++) {
//     if (voices[i].name === selectedOption) {
//       utterThis.voice = voices[i];
//     }
//   }
//   synth.speak(utterThis);
//   inputTxt.blur();
// }

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

/*
Default text without any special text, used for number buttons.
*/
const defaultText = {
  fontSize: 70,
  fontWeight: 'normal',
};

/*
Container with all background elements
*/
const Background = {
  backgroundColor: '#fafafa',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: 'red',
};

/*
Contains all styles for app.
*/
const styles = StyleSheet.create({
  text: defaultText,
  newStyleText: {
    // makes text white
    ...defaultText,
    color: '#AAAAAA',
    fontSize: 50,
  },
  newStyle2text: {
    // makes text white
    ...defaultText,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...Background,
  },
  newStyleContainer: {
    //  increases flex
    flex: 3.05,
    backgroundColor: '#9bc23c',
    ...Background,
  },
  newStyle2Container: {
    // decreases flex
    flex: 0,
    backgroundColor: '#E43E4D',
    color: '#E43E4D',
  },
});

const Function2 = ({ text, newStyle2 }) => (
  <TouchableOpacity
    style={newStyle2 ? styles.newStyle2Container : styles.container}
  >
    <Text style={newStyle2 ? styles.newStyle2Text : styles.text}>{text}</Text>
  </TouchableOpacity>
);

const Function = ({ text, newStyle, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={newStyle ? styles.newStyleContainer : styles.container}
  >
    <Text style={newStyle ? styles.newStyleText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Function2 && Function;

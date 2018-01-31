import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const baseContainer = {
  backgroundColor: '#fafafa',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: 'red',
};

const normText = {
  fontSize: 70,
  fontWeight: 'normal',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...baseContainer,
  },
  newStyleContainer: {
    flex: 3.05,
    backgroundColor: '#9bc23c',
    ...baseContainer,
  },
  newStyle2Container: {
    flex: 0,
    backgroundColor: 'red',
    ...baseContainer,
  },
  text: normText,
  newStyleText: {
    ...normText,
    color: '#AAAAAA',
    fontSize: 50,
  },
  newStyle2text: {
    ...normText,
    color: 'white',
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

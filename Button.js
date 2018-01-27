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
  specialContainer: {
    flex: 3.05,
    backgroundColor: '#9bc23c',
    ...baseContainer,
  },
  special2Container: {
    flex: 0,
    backgroundColor: 'red',
    ...baseContainer,
  },
  text: normText,
  specialText: {
    ...normText,
    color: '#AAAAAA',
    fontSize: 50,
  },
  special2text: {
    ...normText,
    color: 'white',
  },
});

const Button2 = ({ text, special2 }) => (
  <TouchableOpacity
    style={special2 ? styles.special2Container : styles.container}
  >
    <Text style={special2 ? styles.special2Text : styles.text}>{text}</Text>
  </TouchableOpacity>
);

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button2 && Button;

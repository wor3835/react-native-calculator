import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
    flex: 1,
    backgroundColor: 'red',
    ...baseContainer,
  },
  text: normText,
  specialText: {
    ...normText,
    color: '#AAAAAA',
  },
});

const Button = ({ text, special }) => (
  <View style={special ? styles.specialContainer : styles.container}>
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </View>
);

export default Button;

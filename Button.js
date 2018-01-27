import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const baseContainer = {
  backgroundColor: '#fafafa',
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#fff',
};

const normText = {
  fontSize: 50,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
    backgroundColor: '#9bc23c',
    ...baseContainer,
  },
  text: normText,
  specialText: {
    ...normText,
    color: '#fff',
  },
});

const Button = ({ text, special }) => (
  <View style={special ? styles.specialContainer : styles.container}>
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </View>
);

export default Button;

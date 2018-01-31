/*
Author: William Raffaelle
Date: 1/31/2018

React-native-calculator that evaluates postfix expressions.

*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pressNum, equals, opp, clear } from './operations';
import Function from './function';

/*
Style of each number press pad.
*/
const NormalNumber = {
  color: '#fff',
  backgroundColor: '#423336',
  textAlign: 'right',
  padding: 10,
  fontSize: 85,
  fontWeight: 'normal',
  borderBottomWidth: 1,
  borderColor: 'red',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /*
  Row of calculator.
  */
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  /*
  Column of calculator.
  */
  column: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  /*
  Lower half of screen.
  */
  lower: {
    flex: 1,
  },
  /*
  Style of upper half of screen that contains the answer bar.
  */
  upper: {
    paddingTop: 30,
    backgroundColor: '#423336',
  },
  /*
  Style of number on answer bar, default is 0.
  */
  number: {
    color: '#fff',
    backgroundColor: '#423336',
    textAlign: 'right',
    padding: 10,
    fontSize: 85,
    fontWeight: 'normal',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  append: {
    // style used when a number is appended.
    color: '#fff',
    ...NormalNumber,
  },
  replace: {
    // style used when a number is replaced.
    color: '#fff',
    ...NormalNumber,
  },
  new: {
    // style used when a new number is pushed.
    color: '#fff',
    ...NormalNumber,
  },
});

/*
Builds layout.
*/
const app = ({
  CalculatorState: { stack, state },
  PressNumberFunction,
  EqualsFunction,
  OppFunction,
  ClearFunction,
}) => (
  <View style={styles.container}>
    <View style={styles.upper}>
      <Text style={styles[state]}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.lower}>
      <View style={styles.row}>
        <Function text="clear" onPress={ClearFunction} newStyle />
        <Function text="÷" onPress={OppFunction} newStyle2 />
      </View>
      <View style={styles.row}>
        <Function text="7" onPress={PressNumberFunction} />
        <Function text="8" onPress={PressNumberFunction} />
        <Function text="9" onPress={PressNumberFunction} />
        <Function text="-" onPress={OppFunction} newStyle2 />
      </View>
      <View style={styles.row}>
        <Function text="4" onPress={PressNumberFunction} />
        <Function text="5" onPress={PressNumberFunction} />
        <Function text="6" onPress={PressNumberFunction} />
        <Function text="+" onPress={OppFunction} newStyle2 />
      </View>
      <View style={styles.row}>
        <Function text="1" onPress={PressNumberFunction} />
        <Function text="2" onPress={PressNumberFunction} />
        <Function text="3" onPress={PressNumberFunction} />
        <Function text="=" onPress={EqualsFunction} newStyle2 />
      </View>
    </View>
  </View>
);

export default connect(
  state => ({ CalculatorState: state }),
  dispatch =>
    bindActionCreators(
      {
        PressNumberFunction: pressNum,
        EqualsFunction: equals,
        OppFunction: opp,
        ClearFunction: clear,
      },
      dispatch,
    )
)(app);

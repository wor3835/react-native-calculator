import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onPress, pressNum, equals } from './modules';
import Button from './Button';

const baseNum = {
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

  upper: {
    paddingTop: 30,
    backgroundColor: '#423336',
  },
  lower: {
    flex: 1,
  },
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
    color: '#fff',
    ...baseNum,
  },
  replace: {
    color: '#fff',
    ...baseNum,
  },
  new: {
    color: '#fff',
    ...baseNum,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
});

const CalcApp = ({ calcState: { stack, inputState }, pressNumDispatch, equalsAction }) => (
  <View style={styles.container}>
    <View style={styles.upper}>
      <Text style={styles[inputState]}>{stack[0] || 0}</Text>
    </View>
    <View style={styles.lower}>
      <View style={styles.row}>
        <Button text="clear" special />
        <Button text="÷" special2 />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={pressNumDispatch} />
        <Button text="8" onPress={pressNumDispatch} />
        <Button text="9" onPress={pressNumDispatch} />
        <Button text="-" special2 />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={pressNumDispatch} />
        <Button text="5" onPress={pressNumDispatch} />
        <Button text="6" onPress={pressNumDispatch} />
        <Button text="+" special2 />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={pressNumDispatch} />
        <Button text="2" onPress={pressNumDispatch} />
        <Button text="3" onPress={pressNumDispatch} />
        <Button text="=" onPress={equalsAction} special2 />
      </View>
    </View>
  </View>
);

export default connect(
  state => ({ calcState: state }),
  dispatch =>
    bindActionCreators(
      {
        pressNumDispatch: pressNum,
        equalsAction: equals,
      },
      dispatch,
    ),
)(CalcApp);

import React from 'react';
import renderer from 'react-test-renderer';
import connect from './Main';

const app = {
};

test('App renders appropriately', () => {
  const tree = renderer.create(
    <connect />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

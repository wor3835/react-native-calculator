import React from "react";
import renderer from "react-test-renderer";
import connect from "./Main";
import store from "./App";
import performOp from "./operations";

const app = {};

test("App renders appropriately", () => {
  const tree = renderer.create(<connect />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Creates store", () => {
  const tree = renderer.create(<store />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Opperation loads correctly", () => {
  const tree = renderer.create(<performOp />).toJSON();
  expect(tree).toMatchSnapshot();
});

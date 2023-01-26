import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';


const wrapper = shallow(<Header />);

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders header', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});

it('renders header', () => {
  expect(wrapper.find('header.header h1').exists()).toEqual(true);
});

it('renders header', () => {
  expect(wrapper.find('header.header img').exists()).toEqual(true);
});

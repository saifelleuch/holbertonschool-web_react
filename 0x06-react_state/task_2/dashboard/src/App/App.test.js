import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

it('App contain Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Notifications')).toHaveLength(1);
});

it('App contain Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header')).toHaveLength(1);
});

it('App contain Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Login')).toHaveLength(1);
});

it('App contain Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Footer')).toHaveLength(1);
});

it('CourseList with isLoggedIn false', () => {
  const wrapper = shallow(<App />);
  wrapper.update();
  expect(wrapper.find('CourseList')).toHaveLength(0);
});

it('isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn />);
  wrapper.update();
  expect(wrapper.find('Login')).toHaveLength(0);
  expect(wrapper.find('CourseList')).toHaveLength(1);
});

it('logOut', () => {
  const logOut = jest.fn(() => undefined);
  const wrapper = shallow(<App logOut={logOut} />);
  expect(wrapper.exists());
  const alert = jest.spyOn(global, 'alert');
  expect(alert);
  expect(logOut);
  jest.restoreAllMocks();
});

it('default state for displayDrawer is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
});

it('displayDrawer toggle handleDisplayDrawer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
  const instance = wrapper.instance();
  instance.handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toEqual(true);
});

it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toEqual(true);
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state().displayDrawer).toEqual(false);
});

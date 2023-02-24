import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});

it('renders login', () => {
  expect(wrapper.find('main.login input')).toHaveLength(2);
});

it('renders login', () => {
  expect(wrapper.find('main.login label')).toHaveLength(2);
});

it('button', () => {
  const button = wrapper.find("form button[type='submit']");
  expect(button).toHaveLength(1);
  expect(button.prop('disabled')).toEqual(true);
});

it('form working', () => {
  const email = wrapper.find('#email');
  const password = wrapper.find('#password');
  email.simulate('change', {
    target: { name: 'email', value: 'account@domain.ext' },
  });
  let submit = wrapper.find("form button[type='submit']");
  expect(submit.prop('disabled')).toEqual(true);
  password.simulate('change', {
    target: { name: 'password', value: 'qwerty' },
  });
  submit = wrapper.find("form button[type='submit']");
  expect(submit.prop('disabled')).toEqual(false);
});

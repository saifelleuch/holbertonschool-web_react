import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from '../App/AppContext';

const wrapper = shallow(<Header />);

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

it('Header renders without crashing', () => {
  const wrapper = shallow(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
  );
  expect(wrapper.exists()).toEqual(true);
});

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

const wrapper = shallow(<Notifications />);

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('renders NotificationItem', () => {
  const nItem = wrapper.find('NotificationItem');
  expect(nItem).toBeDefined();
  expect(nItem.first().html()).toEqual(
    '<li data-notification-type="default">New course available</li>'
  );
});

it('renders the <p>', () => {
  expect(
    wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
  ).toBeTruthy();
});

it('empty', () => {
  const wrapper = shallow(
    <Notifications displayDrawer listNotifications={listNotifications} />
  );
  expect(wrapper.exists());
  const nItem = wrapper.find('NotificationItem');
  expect(nItem).toHaveLength(1);
  expect(nItem.html()).toEqual(
    '<li data-notification-type="default">No new notification for now</li>'
  );
});

it('without listNotifications', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  const nItem = wrapper.find('NotificationItem');
  expect(nItem).toHaveLength(1);
  expect(nItem.html()).toEqual(
    '<li data-notification-type="default">No new notification for now</li>'
  );
});

it('console.log', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  console.log = jest.fn();
  const instance = wrapper.instance();
  const id = 0;
  instance.markAsRead(id);
  expect(console.log).toHaveBeenCalledWith(
    `Notification ${id} has been marked as read`
  );
  jest.restoreAllMocks();
});

describe('updating the props of the component', () => {
  it('with the same list, the component doesn’t rerender', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    jest.restoreAllMocks();
  });

  it('with a longer list, the component does rerender', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    let latestNotification;
    const listNotifications2 = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
    console.log(listNotifications);
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    jest.restoreAllMocks();
  });
});

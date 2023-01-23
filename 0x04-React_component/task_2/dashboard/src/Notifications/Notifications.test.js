import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const wrapper = shallow(<Notifications />);

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
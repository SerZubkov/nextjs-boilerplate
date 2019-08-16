import React from 'react';
import { mount } from 'enzyme';
import { TodoList } from '../Todo';

describe('Components', () => {
  describe('TodoList', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<TodoList />);
      expect(wrap.find('div').text()).toBe('123123');
    });
  });
});

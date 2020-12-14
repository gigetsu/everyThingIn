import React from 'react';
import { shallow } from 'enzyme';

import { SliderItem } from './sliderItem.component';

describe('SliderItem component', () => {
    let wrapper;
    let mockHistory;
    const mockId = 'testId'
    const imageUrl = 'testImage';
  
    beforeEach(() => {
  
      mockHistory = {
        push: jest.fn()
      };
  
      const mockProps = {
        id: mockId,
        history: mockHistory,
        imageUrl
      };
  
      wrapper = shallow(<SliderItem {...mockProps} />);
    });
  
    it('should render SliderItem component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should call history.push with the right string when a tag clicked', () => {
      wrapper.find('a').simulate('click');
  
      expect(mockHistory.push).toHaveBeenCalledWith(`/details/${mockId}`);
    });
  
    it('should pass imageUrl to SliderImgContainer as the prop imageUrl', () => {
      expect(wrapper.find('SliderImgContainer').prop('src')).toBe(
        imageUrl
      );
    });
  });
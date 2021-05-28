import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import DatePicker from './DatePicker';
import DateTimePickerView from './DateTimePickerView';
import InputTextView from './InputTextView';

const DATE_FORMAT = 'dd/MM/yyyy';
const baseProps = {
  dateTimePickerProps: {
    minimumDate: new Date('2019-01-30'),
    maximumDate: new Date('2019-01-30'),
  },
  dateFormat: DATE_FORMAT,
  placeholder: 'DD/MM/YYYY',
  value: '22/02/2020',
};

describe('DatePicker', () => {
  describe('Rendering with default value', () => {
    const component = shallow(<DatePicker {...baseProps} />);

    it('should match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('Press input view', () => {
    const component = shallow(<DatePicker {...baseProps} />);
    component
      .find(TouchableOpacity)
      .at(0)
      .simulate('press');
    it('should show DatePicker state', () => {
      expect(
        component.find(DateTimePickerView).prop('showPicker')
      ).toBeTruthy();
      expect(component.find(InputTextView).prop('showPicker')).toBeTruthy();
    });
  });
});

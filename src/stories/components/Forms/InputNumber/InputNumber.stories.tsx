import React from 'react';

import { InputNumber } from './index';

export default {
  title: 'Form/InputNumber',
  component: InputNumber
};

const Template = (args: any) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'input-number',
  isInt: false,
  disabledMinus: false,
  disabledPlus: false,
  disabledInput: false,
  eventEmit: () => null,
  eventName: ''
};

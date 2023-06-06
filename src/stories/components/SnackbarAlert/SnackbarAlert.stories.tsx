import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { SnackbarAlerts } from './index';
import { SnackbarAlertsProps } from './types';

const meta: Meta<typeof SnackbarAlerts> = {
  title: 'SnackbarAlerts',
  component: SnackbarAlerts,
  args: {
    message: 'This is an error alert — check it out!',
    severity: 'error'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof SnackbarAlerts>;

const SnackbarAlertsDemo = (args: SnackbarAlertsProps) => {
  const [open, setOpen] = useState(args.open);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Snackbar</button>
      <SnackbarAlerts
        {...args}
        onClose={handleCloseModal}
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      ></SnackbarAlerts>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <SnackbarAlertsDemo {...args} />
};

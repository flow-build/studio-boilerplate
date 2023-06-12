import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Table } from 'stories/components/Table';
import { column, rowData } from 'stories/components/Table/mock';
import { TableProps } from 'stories/components/Table/types';

const meta: Meta<TableProps> = {
  title: 'Table',
  component: Table,
  args: {
    column,
    rowData
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Table>;

const Standard = (args: TableProps) => {
  return <Table {...args} />;
};

export const Primary: Story = {
  render: (args) => <Standard {...args} />
};

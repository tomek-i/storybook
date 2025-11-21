import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { ProfileSettings } from '@/components/examples/ProfileSettings';

const meta = {
  title: 'Examples/ProfileSettings',
  component: ProfileSettings,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} satisfies Meta<typeof ProfileSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
};

export const WithSubmit: Story = {
  args: {
    onSubmit: (data) => {
      console.log('Settings saved:', data);
      alert(`Settings saved for ${data.name}`);
    },
  },
};

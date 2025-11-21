import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { LoginForm } from '@/components/examples/LoginForm';

const meta = {
  title: 'Examples/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} satisfies Meta<typeof LoginForm>;

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
      console.log('Form submitted:', data);
      alert(`Login attempt: ${data.email}`);
    },
  },
};

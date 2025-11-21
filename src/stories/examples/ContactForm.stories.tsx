import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { ContactForm } from '@/components/examples/ContactForm';

const meta = {
  title: 'Examples/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} satisfies Meta<typeof ContactForm>;

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
      alert(`Message sent from ${data.name} (${data.email})`);
    },
  },
};

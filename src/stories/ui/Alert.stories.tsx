import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <AlertCircle />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        This is a default alert message. You can add any content here.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[450px]">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <AlertDescription>
        A simple alert without a title.
      </AlertDescription>
    </Alert>
  ),
};

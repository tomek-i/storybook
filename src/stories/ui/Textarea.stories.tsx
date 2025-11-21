import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
      />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This is a textarea with some default content.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled.',
  },
};

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid textarea',
    defaultValue: 'Error state',
  },
};

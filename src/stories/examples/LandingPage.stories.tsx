import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LandingPage } from '@/components/examples/LandingPage';

const meta = {
  title: 'Examples/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

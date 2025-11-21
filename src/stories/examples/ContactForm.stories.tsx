import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { ContactForm } from "@/components/examples/ContactForm";

const meta = {
  title: "Examples/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submitted" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
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
      console.log("Form submitted:", data);
      alert(`Message sent from ${data.name} (${data.email})`);
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    onSubmit: fn(),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onSubmit: fn(),
  },
};

export const WithErrors: Story = {
  args: {
    initialErrors: {
      name: "Name is required",
      email: "Invalid email address",
      subject: "Please select a subject",
      message: "Message must be at least 10 characters",
    },
    onSubmit: fn(),
  },
};

export const PartialErrors: Story = {
  args: {
    initialErrors: {
      email: "This email is already registered",
    },
    onSubmit: fn(),
  },
};

export const LoadingWithErrors: Story = {
  args: {
    isLoading: true,
    initialErrors: {
      email: "Invalid email format",
    },
    onSubmit: fn(),
  },
};

export const PrefilledWithErrors: Story = {
  args: {
    defaultValues: {
      name: "John Doe",
      email: "invalid-email",
      subject: "general",
      message: "Hi",
    },
    initialErrors: {
      email: "This email address is already in use",
      message: "Message is too short. Please provide more details.",
    },
    onSubmit: fn(),
  },
};

export const SuccessState: Story = {
  args: {
    defaultValues: {
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "support",
      message: "I need help with my account. Can you please assist?",
    },
    disabled: true,
    onSubmit: fn(),
  },
};

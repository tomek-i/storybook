import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { ProfileSettings } from "@/components/examples/ProfileSettings";

const meta = {
  title: "Examples/ProfileSettings",
  component: ProfileSettings,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submitted" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
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
      console.log("Settings saved:", data);
      alert(`Settings saved for ${data.name}`);
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

export const NewUser: Story = {
  args: {
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      theme: "system",
      notifications: false,
      marketing: false,
    },
    onSubmit: fn(),
  },
};

export const WithErrors: Story = {
  args: {
    initialErrors: {
      name: "Name is required",
      email: "Invalid email address",
    },
    onSubmit: fn(),
  },
};

export const PartialErrors: Story = {
  args: {
    initialErrors: {
      email: "This email is already in use",
    },
    onSubmit: fn(),
  },
};

export const LoadingWithErrors: Story = {
  args: {
    isLoading: true,
    initialErrors: {
      email: "Email format is invalid",
    },
    onSubmit: fn(),
  },
};

export const DarkThemeUser: Story = {
  args: {
    defaultValues: {
      name: "Jane Smith",
      email: "jane@example.com",
      bio: "UI/UX Designer passionate about creating beautiful experiences.",
      theme: "dark",
      notifications: true,
      marketing: true,
    },
    onSubmit: fn(),
  },
};

export const MinimalSettings: Story = {
  args: {
    defaultValues: {
      name: "Alex Johnson",
      email: "alex@example.com",
      bio: "",
      theme: "light",
      notifications: false,
      marketing: false,
    },
    onSubmit: fn(),
  },
};

export const SavedState: Story = {
  args: {
    defaultValues: {
      name: "Sarah Williams",
      email: "sarah@example.com",
      bio: "Full-stack developer and open source contributor.",
      theme: "system",
      notifications: true,
      marketing: false,
    },
    disabled: true,
    onSubmit: fn(),
  },
};

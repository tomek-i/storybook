import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LandingPage } from "@/components/examples/LandingPage";

const meta = {
  title: "Examples/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    showTestimonials: { control: "boolean" },
    showPricing: { control: "boolean" },
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Minimal: Story = {
  args: {
    badgeText: undefined,
    heroTitle: "Welcome",
    heroSubtitle: "Get Started Today",
    heroDescription: "Simple, powerful, and ready to use.",
  },
};

export const ProductLaunch: Story = {
  args: {
    badgeText: "🚀 Launching Soon",
    heroTitle: "Revolutionary Platform",
    heroSubtitle: "Coming This Fall",
    heroDescription: "Be the first to experience the future of web development. Join our waitlist for early access.",
  },
};

export const Enterprise: Story = {
  args: {
    badgeText: "Enterprise Ready",
    heroTitle: "Built for Scale",
    heroSubtitle: "Trusted by Industry Leaders",
    heroDescription: "Enterprise-grade solutions with 99.9% uptime, dedicated support, and advanced security features.",
  },
};

export const WithLoadingCTA: Story = {
  args: {
    isLoading: true,
    heroTitle: "Join Thousands of Developers",
    heroSubtitle: "Start Building Today",
  },
};

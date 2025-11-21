"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  disabled?: boolean;
  isLoading?: boolean;
  initialErrors?: Partial<Record<keyof ContactFormData, string>>;
  defaultValues?: Partial<ContactFormData>;
}

export function ContactForm({
  onSubmit,
  disabled = false,
  isLoading = false,
  initialErrors,
  defaultValues,
}: ContactFormProps) {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      ...defaultValues,
    },
  });

  // Set initial errors if provided
  React.useEffect(() => {
    if (initialErrors) {
      Object.entries(initialErrors).forEach(([key, message]) => {
        form.setError(key as keyof ContactFormData, {
          type: "manual",
          message: message as string,
        });
      });
    }
  }, [initialErrors, form]);

  const handleSubmit = async (data: ContactFormData) => {
    onSubmit?.(data);
    console.log("Contact form data:", data);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Send us a message and we&apos;ll get back to you as soon as possible</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" disabled={disabled} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" disabled={disabled} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              rules={{
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what's on your mind..."
                      className="min-h-[120px]"
                      disabled={disabled}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please provide as much detail as possible</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => form.reset()} disabled={disabled || isLoading}>
                Reset
              </Button>
              <Button type="submit" disabled={disabled || isLoading}>
                {isLoading && <Spinner className="mr-2" />}
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

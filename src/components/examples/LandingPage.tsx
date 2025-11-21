"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { CheckCircle, Rocket, Shield, Zap } from "lucide-react";

interface LandingPageProps {
  badgeText?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  isLoading?: boolean;
  showTestimonials?: boolean;
  showPricing?: boolean;
}

export function LandingPage({
  badgeText = "New Release v2.0",
  heroTitle = "Build Amazing Products",
  heroSubtitle = "Faster Than Ever",
  heroDescription = "The all-in-one platform for building modern web applications with beautiful UI components and powerful tools.",
  isLoading = false,
  showTestimonials = false,
  showPricing = false,
}: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          {badgeText && (
            <Badge variant="secondary" className="mb-2">
              {badgeText}
            </Badge>
          )}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {heroTitle}
            <br />
            <span className="text-primary">{heroSubtitle}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-white! bg-black! hover:bg-gray/90!">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and ship your next project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Zap className="size-8 mb-2 text-primary" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>Built for performance with optimized components and best practices</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="size-8 mb-2 text-primary" />
              <CardTitle>Secure by Default</CardTitle>
              <CardDescription>Enterprise-grade security with built-in protection and compliance</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Rocket className="size-8 mb-2 text-primary" />
              <CardTitle>Easy to Scale</CardTitle>
              <CardDescription>Grow from prototype to production with confidence</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted-foreground">Explore our component library and features</p>
        </div>
        <Tabs defaultValue="components" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rich Component Library</CardTitle>
                <CardDescription>Over 50+ pre-built components ready to use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Button</Badge>
                  <Badge>Input</Badge>
                  <Badge>Card</Badge>
                  <Badge>Dialog</Badge>
                  <Badge>Form</Badge>
                  <Badge>Table</Badge>
                  <Badge>Chart</Badge>
                  <Badge>And More...</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Powerful Features</CardTitle>
                <CardDescription>Everything you need in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-primary" />
                    TypeScript support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-primary" />
                    Dark mode
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-primary" />
                    Accessibility built-in
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-primary" />
                    Customizable themes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="integrations" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integrations</CardTitle>
                <CardDescription>Works with your favorite tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Vite</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription>Join thousands of developers building amazing products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button disabled={isLoading}>
                {isLoading && <Spinner className="mr-2" />}
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <Alert className="mt-4">
              <CheckCircle className="size-4" />
              <AlertTitle>Free to start</AlertTitle>
              <AlertDescription>No credit card required. Start building today.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Your Company. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

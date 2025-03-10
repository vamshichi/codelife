import React from "react";
import { CreditCard, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PaymentTerms = () => {
  return (
    <section className="w-full py-40 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 xl:max-w-6xl xl:mx-auto">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Payment Terms
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Flexible Payment Structure
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a transparent payment structure to ensure a smooth development process.
            </p>
            <div className="space-y-4">
              {[
                { title: "50% Advance Payment", description: "Before project starts" },
                { title: "25% after Design & Frontend Completion", description: "Once the design is approved" },
                { title: "25% after Full Development & Deployment", description: "When your website goes live" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col justify-center space-y-4 lg:max-w-md lg:ml-auto">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">Special Offer</h3>
              </div>
              <p className="mb-4 text-muted-foreground">
                For First-Time Clients: Get <span className="font-bold text-primary">5% discount</span> on any
                website package.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project" />
                </div>
                <Button className="w-full text-white">Request a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTerms;

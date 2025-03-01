"use client"

import { useState } from "react"
import { Check, Code, CreditCard, Globe, LayoutDashboard, Package, ShoppingCart } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/Header"

export default function CodelifePricing() {
  const [activeTab, setActiveTab] = useState("basic")

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Website Development Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transparent pricing for your digital presence. Choose the package that fits your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <Tabs defaultValue="basic" className="w-full" onValueChange={setActiveTab}>
              <div className="flex flex-col items-center space-y-4 text-center bg-gray-100 rounded-lg">
                <TabsList className="grid w-full max-w-md grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:max-w-6xl xl:mx-auto">
                <TabsContent value="basic" className="col-span-full">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card className={`${activeTab === "basic" ? "border-primary" : ""}`}>
                      <CardHeader>
                        <Globe className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Basic Website</CardTitle>
                        <CardDescription>Static - Informational Website</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">₹10,000 - ₹20,000</div>
                        <p className="text-sm text-muted-foreground mt-1">Delivery in 5-7 days</p>
                        <div className="mt-6 space-y-2">
                          <div className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm">3-5 Pages</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm">Mobile-friendly Design</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm">Basic SEO</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm">Contact Form</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-sm">Next.js + Tailwind CSS</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full text-white">Get Quote</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <LayoutDashboard className="h-10 w-10 text-muted-foreground mb-2" />
                        <CardTitle>Business Website</CardTitle>
                        <CardDescription>Dynamic - With CMS/Admin Panel</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">₹30,000 - ₹60,000</div>
                        <p className="text-sm text-muted-foreground mt-1">Delivery in 2-3 weeks</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => setActiveTab("business")}>
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <ShoppingCart className="h-10 w-10 text-muted-foreground mb-2" />
                        <CardTitle>E-commerce Website</CardTitle>
                        <CardDescription>Online Store</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">₹70,000 - ₹1,50,000</div>
                        <p className="text-sm text-muted-foreground mt-1">Delivery in 4-6 weeks</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => setActiveTab("ecommerce")}>
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <Package className="h-10 w-10 text-muted-foreground mb-2" />
                        <CardTitle>Custom Web Application</CardTitle>
                        <CardDescription>SaaS, Complex Dashboards, Portals</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">₹1,50,000+</div>
                        <p className="text-sm text-muted-foreground mt-1">Delivery in 6-8 weeks</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => setActiveTab("custom")}>
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="business" className="col-span-full">
                  <Card className="border-primary">
                    <CardHeader>
                      <LayoutDashboard className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Business Website</CardTitle>
                      <CardDescription>Dynamic - With CMS/Admin Panel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">₹30,000 - ₹60,000</div>
                      <p className="text-sm text-muted-foreground mt-1">Delivery in 2-3 weeks</p>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">6-10 Pages</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">CMS for editing content</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">User Authentication</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Blog, Services, Team, Testimonials</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Basic SEO</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Next.js, MongoDB, Prisma, Tailwind CSS</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="ecommerce" className="col-span-full">
                  <Card className="border-primary">
                    <CardHeader>
                      <ShoppingCart className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>E-commerce Website</CardTitle>
                      <CardDescription>Online Store</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">₹70,000 - ₹1,50,000</div>
                      <p className="text-sm text-muted-foreground mt-1">Delivery in 4-6 weeks</p>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">10+ Pages</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Product Pages, Cart, Checkout</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Payment Gateway (Razorpay/Stripe)</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Order Management</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Admin Panel</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Next.js, Node.js, MongoDB, Stripe/Razorpay</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="custom" className="col-span-full">
                  <Card className="border-primary">
                    <CardHeader>
                      <Package className="h-10 w-10 text-primary mb-2" />
                      <CardTitle>Custom Web Application</CardTitle>
                      <CardDescription>SaaS, Complex Dashboards, Portals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">₹1,50,000 - ₹5,00,000+</div>
                      <p className="text-sm text-muted-foreground mt-1">Delivery in 6-8 weeks</p>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">15+ Pages</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Dashboard, Analytics, Custom Features</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">API Integration</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Role-based Authentication</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Payments, Reports</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-sm">Next.js, Express.js, Prisma, AWS/DigitalOcean</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Quote</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Additional Services</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Enhance your website with these optional services
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-0">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <th className="p-4 text-left font-medium">Service</th>
                        <th className="p-4 text-right font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">Domain Registration (e.g., .com, .in)</td>
                        <td className="p-4 text-right">₹1,000 - ₹2,500/year</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">Hosting Setup (AWS, DigitalOcean, Vercel)</td>
                        <td className="p-4 text-right">₹5,000 - ₹15,000/year</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">SEO Optimization (Basic)</td>
                        <td className="p-4 text-right">₹5,000 - ₹10,000</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">SEO Optimization (Advanced)</td>
                        <td className="p-4 text-right">₹20,000+</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">Maintenance (Bug Fixes, Updates)</td>
                        <td className="p-4 text-right">₹5,000 - ₹15,000/month</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">Content Writing (Per Page)</td>
                        <td className="p-4 text-right">₹1,000 - ₹5,000</td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/50">
                        <td className="p-4 text-left">Logo & Branding</td>
                        <td className="p-4 text-right">₹5,000 - ₹20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 xl:max-w-6xl xl:mx-auto">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Payment Terms
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Flexible Payment Structure</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a transparent payment structure to ensure a smooth development process.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">50% Advance Payment</h3>
                      <p className="text-sm text-muted-foreground">Before project starts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">25% after Design & Frontend Completion</h3>
                      <p className="text-sm text-muted-foreground">Once the design is approved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">25% after Full Development & Deployment</h3>
                      <p className="text-sm text-muted-foreground">When your website goes live</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 lg:max-w-md lg:ml-auto">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-bold">Special Offer</h3>
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    For First-Time Clients: Get <span className="font-bold text-primary">10-15% discount</span> on any
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
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between  max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Codelife</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Codelife. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


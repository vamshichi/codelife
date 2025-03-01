import { Check, Code, Globe, LayoutDashboard, Package, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col text-black bg-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We build modern, responsive, and user-friendly websites and web applications tailored to your business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                    Website Development
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Custom Website Solutions
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From simple informational websites to complex web applications, we create custom solutions that meet
                    your specific requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Responsive design that works on all devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SEO-friendly structure for better visibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Fast loading speeds for better user experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Secure and scalable architecture</span>
                  </div>
                </div>
                <div>
                  <Button asChild className="text-white">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Website Development"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Service Offerings</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a range of web development services to help businesses establish their online presence.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Basic Website</CardTitle>
                  <CardDescription>Static - Informational Website</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Perfect for small businesses, portfolios, and personal websites. Includes 3-5 pages with
                    mobile-friendly design, basic SEO, and contact form.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/#basic">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <LayoutDashboard className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Business Website</CardTitle>
                  <CardDescription>Dynamic - With CMS/Admin Panel</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Ideal for startups, agencies, and local businesses. Includes 6-10 pages with CMS, user
                    authentication, and advanced features.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/#business">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <ShoppingCart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>E-commerce Website</CardTitle>
                  <CardDescription>Online Store</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    For businesses selling products online. Includes product pages, cart, checkout, payment gateway
                    integration, and order management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/#ecommerce">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Custom Web Application</CardTitle>
                  <CardDescription>SaaS, Complex Dashboards, Portals</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    For advanced business needs like job portals, CRM, and custom SaaS solutions with complex features
                    and integrations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/#custom">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary mb-2"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  <CardTitle>UI/UX Design</CardTitle>
                  <CardDescription>User Interface & Experience</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Professional UI/UX design services to create intuitive, user-friendly interfaces that enhance user
                    experience and engagement.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center justify-center p-4">
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-primary mb-2"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <CardTitle>Website Maintenance</CardTitle>
                  <CardDescription>Support & Updates</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Ongoing maintenance services to keep your website secure, up-to-date, and performing optimally with
                    regular updates and support.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Development Process</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We follow a structured approach to ensure your project is delivered on time and meets your
                  expectations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We understand your business, goals, and requirements to create a tailored solution.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-sm text-muted-foreground">
                  We create wireframes and designs that align with your brand and provide optimal user experience.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Our developers build your website using the latest technologies and best practices.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold">Launch</h3>
                <p className="text-sm text-muted-foreground">
                  We deploy your website, conduct thorough testing, and provide training on how to use it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Contact us today to discuss your project and get a free quote.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


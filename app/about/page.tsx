import { Code, CheckCircle, Users, Award, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "@/components/about/Hero"
import OurStory from "@/components/about/OurStory"
import MeetTheTeam from "@/components/about/MeetTheTeam"
import WhyWorkWithUs from "@/components/about/WhyWorkWithUs"
import ClientTestimonials from "@/components/about/ClientTestimonials"
import CTACallToAction from "@/components/about/CTACallToAction"
// import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      
      <main className="flex-1">
        <Hero />

        <OurStory />

        {/* <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="About Codelife"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Founded in 2020, Codelife started with a simple mission: to help businesses establish a strong
                    online presence through high-quality web development services.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    What began as a small team of three developers has now grown into a full-service web development
                    agency with a team of skilled professionals dedicated to delivering exceptional results.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our approach combines technical expertise with creative design to create websites that not only look
                    great but also perform exceptionally well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <MeetTheTeam />

        {/* <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The principles that guide our work and relationships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Quality</CardTitle>
                  <CardDescription>We never compromise on quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We believe in delivering high-quality work that exceeds expectations. Every line of code, every
                    design element, and every interaction is crafted with care and attention to detail.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>We work closely with our clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of collaboration. We work closely with our clients to understand their needs
                    and goals, and we involve them in every step of the development process.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>We embrace new technologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We stay at the forefront of web development trends and technologies. We&apos;re always learning,
                    experimenting, and finding new ways to create better digital experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the talented individuals behind Codelife.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                <p className="text-center text-sm text-muted-foreground">
                  With over 10 years of experience in web development, John leads our team with vision and expertise.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-sm text-muted-foreground">Lead Developer</p>
                <p className="text-center text-sm text-muted-foreground">
                  Jane is a full-stack developer with expertise in React, Node.js, and database design.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Mike Johnson</h3>
                <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                <p className="text-center text-sm text-muted-foreground">
                  Mike creates beautiful, intuitive interfaces that enhance user experience and engagement.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Sarah Lee</h3>
                <p className="text-sm text-muted-foreground">Backend Developer</p>
                <p className="text-center text-sm text-muted-foreground">
                  Sarah specializes in building robust, scalable backend systems and APIs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">David Chen</h3>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
                <p className="text-center text-sm text-muted-foreground">
                  David creates responsive, interactive frontend experiences using modern frameworks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Emily Wilson</h3>
                <p className="text-sm text-muted-foreground">Project Manager</p>
                <p className="text-center text-sm text-muted-foreground">
                  Emily ensures projects are delivered on time and within budget while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Milestones</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Key achievements in our journey.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2020</h3>
                  <p className="text-muted-foreground">
                    Founded Codelife with a team of three developers, focusing on small business websites.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2021</h3>
                  <p className="text-muted-foreground">
                    Expanded our team to 10 members and completed our 50th project.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2022</h3>
                  <p className="text-muted-foreground">
                    Launched our first e-commerce platform and expanded our services to include UI/UX design.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2023</h3>
                  <p className="text-muted-foreground">
                    Reached 100+ completed projects and expanded our team to include specialized developers for custom
                    web applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">2024</h3>
                  <p className="text-muted-foreground">
                    Opened our new office and established partnerships with leading technology providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <WhyWorkWithUs />

        <ClientTestimonials />

        {/* <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
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
        </section> */}
        <CTACallToAction />
      </main>
      {/* <footer className="w-full border-t bg-background py-6 md:py-12">
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  )
}


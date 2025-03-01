"use client"

import { useState } from "react"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/Header"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Foodie Express",
    description: "A food delivery platform for local restaurants",
    category: "ecommerce",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "#",
    client: "Foodie Inc.",
    year: "2023",
    featured: true,
  },
  {
    id: 2,
    title: "TechBlog",
    description: "A technology blog with CMS for content management",
    category: "business",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    client: "Tech Media Group",
    year: "2023",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Pro",
    description: "A portfolio website for a professional photographer",
    category: "basic",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    client: "John Smith Photography",
    year: "2022",
    featured: false,
  },
  {
    id: 4,
    title: "TaskMaster",
    description: "A project management SaaS application",
    category: "custom",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Express.js", "Node.js"],
    link: "#",
    client: "TaskMaster Inc.",
    year: "2023",
    featured: true,
  },
  {
    id: 5,
    title: "FitLife Gym",
    description: "A website for a local fitness center",
    category: "basic",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "#",
    client: "FitLife Gym",
    year: "2022",
    featured: false,
  },
  {
    id: 6,
    title: "LuxHome Real Estate",
    description: "A real estate listing website with property search",
    category: "business",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    link: "#",
    client: "LuxHome Properties",
    year: "2023",
    featured: false,
  },
  {
    id: 7,
    title: "EduLearn",
    description: "An online learning platform with course management",
    category: "custom",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    link: "#",
    client: "EduLearn Inc.",
    year: "2023",
    featured: true,
  },
  {
    id: 8,
    title: "ShopEasy",
    description: "An e-commerce platform for a clothing brand",
    category: "ecommerce",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "#",
    client: "ShopEasy Clothing",
    year: "2022",
    featured: false,
  },
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleProjectClick = (id: number) => {
    setSelectedProject(id === selectedProject ? null : id)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our previous projects and see how we&apos;ve helped businesses establish their online presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col items-center space-y-4 text-center">
                <TabsList className="grid w-full max-w-md grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <Card
                      key={project.id}
                      className={`overflow-hidden transition-all duration-200 ${selectedProject === project.id ? "ring-2 ring-primary" : ""}`}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <p>Client: {project.client}</p>
                          <p>Year: {project.year}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => handleProjectClick(project.id)}>
                          {selectedProject === project.id ? "Less Details" : "More Details"}
                        </Button>
                        <Button variant="ghost" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            Visit <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                      {selectedProject === project.id && (
                        <div className="px-6 pb-6">
                          <div className="rounded-lg bg-muted p-4">
                            <h4 className="font-medium mb-2">Project Details</h4>
                            <p className="text-sm mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                              vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                            </p>
                            <h4 className="font-medium mb-2">Challenges & Solutions</h4>
                            <p className="text-sm mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                            </p>
                            <h4 className="font-medium mb-2">Results</h4>
                            <p className="text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="basic" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "basic")
                    .map((project) => (
                      <Card
                        key={project.id}
                        className={`overflow-hidden transition-all duration-200 ${selectedProject === project.id ? "ring-2 ring-primary" : ""}`}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p>Client: {project.client}</p>
                            <p>Year: {project.year}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => handleProjectClick(project.id)}>
                            {selectedProject === project.id ? "Less Details" : "More Details"}
                          </Button>
                          <Button variant="ghost" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Visit <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                        {selectedProject === project.id && (
                          <div className="px-6 pb-6">
                            <div className="rounded-lg bg-muted p-4">
                              <h4 className="font-medium mb-2">Project Details</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                                vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Challenges & Solutions</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Results</h4>
                              <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="business" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "business")
                    .map((project) => (
                      <Card
                        key={project.id}
                        className={`overflow-hidden transition-all duration-200 ${selectedProject === project.id ? "ring-2 ring-primary" : ""}`}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p>Client: {project.client}</p>
                            <p>Year: {project.year}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => handleProjectClick(project.id)}>
                            {selectedProject === project.id ? "Less Details" : "More Details"}
                          </Button>
                          <Button variant="ghost" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Visit <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                        {selectedProject === project.id && (
                          <div className="px-6 pb-6">
                            <div className="rounded-lg bg-muted p-4">
                              <h4 className="font-medium mb-2">Project Details</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                                vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Challenges & Solutions</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Results</h4>
                              <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "ecommerce")
                    .map((project) => (
                      <Card
                        key={project.id}
                        className={`overflow-hidden transition-all duration-200 ${selectedProject === project.id ? "ring-2 ring-primary" : ""}`}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p>Client: {project.client}</p>
                            <p>Year: {project.year}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => handleProjectClick(project.id)}>
                            {selectedProject === project.id ? "Less Details" : "More Details"}
                          </Button>
                          <Button variant="ghost" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Visit <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                        {selectedProject === project.id && (
                          <div className="px-6 pb-6">
                            <div className="rounded-lg bg-muted p-4">
                              <h4 className="font-medium mb-2">Project Details</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                                vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Challenges & Solutions</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Results</h4>
                              <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="custom" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "custom")
                    .map((project) => (
                      <Card
                        key={project.id}
                        className={`overflow-hidden transition-all duration-200 ${selectedProject === project.id ? "ring-2 ring-primary" : ""}`}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          {project.featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p>Client: {project.client}</p>
                            <p>Year: {project.year}</p>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => handleProjectClick(project.id)}>
                            {selectedProject === project.id ? "Less Details" : "More Details"}
                          </Button>
                          <Button variant="ghost" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Visit <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                        {selectedProject === project.id && (
                          <div className="px-6 pb-6">
                            <div className="rounded-lg bg-muted p-4">
                              <h4 className="font-medium mb-2">Project Details</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl
                                vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Challenges & Solutions</h4>
                              <p className="text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                              <h4 className="font-medium mb-2">Results</h4>
                              <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                                lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                              </p>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6  max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Contact us today to discuss your project and get a free quote.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
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


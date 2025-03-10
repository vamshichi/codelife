"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from 'lucide-react'

// Sample project data
const projects = [
  {
    id: 1,
    title: "Corporate Website Redesign",
    description: "Modern website redesign for a financial services company",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "ABC Financial",
    year: 2023,
    category: "business",
    featured: true,
    link: "https://example.com"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    client: "Fashion Boutique",
    year: 2023,
    category: "ecommerce",
    featured: false,
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio for a photographer",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Tailwind CSS", "Cloudinary"],
    client: "Jane Smith Photography",
    year: 2022,
    category: "basic",
    featured: false,
    link: "https://example.com"
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "Custom analytics dashboard for a SaaS product",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
    client: "Tech Innovations Inc.",
    year: 2023,
    category: "custom",
    featured: true,
    link: "https://example.com"
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "Website with online reservation system",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    client: "Gourmet Dining",
    year: 2022,
    category: "basic",
    featured: false,
    link: "https://example.com"
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description: "Property listing and management system",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "MongoDB", "Google Maps API"],
    client: "Prime Properties",
    year: 2023,
    category: "business",
    featured: false,
    link: "https://example.com"
  }
]

export default function PortfolioProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleProjectClick = (id: number) => {
    if (selectedProject === id) {
      setSelectedProject(null)
    } else {
      setSelectedProject(id)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
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
  )
}

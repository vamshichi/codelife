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
import HeroSection from "@/components/portfolio/HeroSection"
import ProjectShowcase from "@/components/portfolio/Project"
import CaseStudies from "@/components/portfolio/caseStudies"
import CTA from "@/components/portfolio/cta"

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
      
      <main className="flex-1">
        <HeroSection />

        <ProjectShowcase />

        <CaseStudies />
        
        <CTA />
      </main>
      
    </div>
  )
}


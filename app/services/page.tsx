// import { Check, Code, Globe, LayoutDashboard, Package, ShoppingCart } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// 
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import OurServices from "@/components/Services/OurServices"
import DevelopmentProcess from "@/components/Services/DevelopmentProcess"
import FAQsCTA from "@/components/Services/FAQsCTA"
import HeroSection from "@/components/Services/HeroSection"
// import OurServices from "@/components/Services/OurServices"
import ServiceOfferings from "@/components/Services/ServiceOfferings"
// import Header from "@/components/Header"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col text-black bg-white">
     <HeroSection />
     <ServiceOfferings />
     <DevelopmentProcess />
     <FAQsCTA />
    </div>
  )
}


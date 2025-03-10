"use client"

// import { useState } from "react"
// import { Check, Code, CreditCard, Globe, LayoutDashboard, Package, ShoppingCart } from "lucide-react"
// import Link from "next/link"
// 
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import Header from "@/components/Header"
import HeroSection from "@/components/homepage/HeroSection"
import Pricing from "@/components/homepage/Pricing"
// import AdditionalServices from "@/components/homepage/AdditionalServices"
import PaymentTerms from "@/components/homepage/PaymentTerms"
import WhyChooseUs from "@/components/homepage/WhyChooseUs"
import Testimonials from "@/components/homepage/Testimonials"
import CTASection from "@/components/homepage/CTASection"
import FAQSection from "@/components/homepage/FAQSection"
// import PortfolioSection from "@/components/homepage/PortfolioSection"

export default function CodelifePricing() {
  // const [activeTab, setActiveTab] = useState("basic")

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      
      <main className="flex-1">
         <HeroSection />

        <Pricing />

        
        <WhyChooseUs />

        {/* <AdditionalServices /> */}

        <Testimonials />

       

        <FAQSection />

        <CTASection />

       <PaymentTerms />

       {/* <PortfolioSection /> */}
      </main>
      
    </div>
  )
}


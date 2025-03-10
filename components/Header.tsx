'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md text-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Codelife</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          <Link href="/" className="text-base font-medium hover:text-primary">Home</Link>
          <Link href="/services" className="text-base font-medium hover:text-primary">Services</Link>
          <Link href="/portfolio" className="text-base font-medium hover:text-primary">Portfolio</Link>
          <Link href="/about" className="text-base font-medium hover:text-primary">About</Link>
          <Link href="/contact" className="text-base font-medium hover:text-primary">Contact</Link>
        </nav>

        {/* CTA Button */}
        {/* <div className="hidden lg:block text-white">
          <Button size="lg">Get Started</Button>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col gap-5 text-center">
          <Link href="/" className="text-base font-medium hover:text-primary">Home</Link>
          <Link href="/services" className="text-base font-medium hover:text-primary">Services</Link>
          <Link href="/portfolio" className="text-base font-medium hover:text-primary">Portfolio</Link>
          <Link href="/about" className="text-base font-medium hover:text-primary">About</Link>
          <Link href="/contact" className="text-base font-medium hover:text-primary">Contact</Link>
          {/* <Button className="mx-auto w-40">Get Started</Button> */}
        </nav>
      )}
    </header>
  );
};

export default Header;

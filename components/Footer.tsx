import Link from "next/link";
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between max-w-7xl mx-auto">
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
  );
};

export default Footer;

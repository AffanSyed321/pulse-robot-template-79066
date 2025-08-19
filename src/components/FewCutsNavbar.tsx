import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const FewCutsNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-cyber font-bold text-primary">
              FewCuts Inc.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#pricing" className="nav-link">
                Plans & Pricing
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log In
            </Button>
            <Button className="button-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans & Pricing
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="text-foreground hover:text-primary justify-start">
                    Log In
                  </Button>
                  <Button className="button-primary justify-start">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FewCutsNavbar;
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FewCutsNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-vice font-bold text-primary">
              FewCuts Inc.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'text-primary' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className={`nav-link ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
              >
                Pricing
              </Link>
            </div>
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
              <Link
                to="/"
                className={`block px-3 py-2 text-foreground hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className={`block px-3 py-2 text-foreground hover:text-primary ${location.pathname === '/pricing' ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FewCutsNavbar;
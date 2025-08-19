import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const FewCutsFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <footer className="bg-gradient-to-t from-secondary to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-vice font-bold text-primary mb-4">
                FewCuts.Inc
              </h3>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-medium">Ceo@Fewcuts.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground mt-4">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p>2055 Limestone Rd STE 200-C</p>
                  <p>Wilmington, DE, Wilmington, US, 19808</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-retro font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest features and improvements to FewCuts
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background border-border focus:border-primary"
                />
                <Button 
                  type="submit" 
                  className="button-primary whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2021 FewCuts Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FewCutsFooter;

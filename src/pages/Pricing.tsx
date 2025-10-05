import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import FewCutsNavbar from "@/components/FewCutsNavbar";
import FewCutsFooter from "@/components/FewCutsFooter";

const Pricing = () => {
  const plan = {
    name: "Enterprise",
    price: "",
    period: "",
    description: "Tailored solutions for your content creation needs",
    features: [
      "Unlimited video processing",
      "Custom AI training and models",
      "4K video quality output",
      "24/7 dedicated support team",
      "Advanced API integrations",
      "Custom workflows and automation",
      "SLA guarantee and priority support",
      "On-premise deployment options",
      "Dedicated account management"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <FewCutsNavbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pricing That's Tailored For Your Needs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a customized solution that fits your specific content creation requirements. Contact us to discuss your needs.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <Card className="relative border-primary shadow-lg shadow-primary/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Contact for Pricing
                </span>
              </div>

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-display">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-lg">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full button-primary text-lg py-6"
                  onClick={() => window.open('mailto:affan@fewcuts.com?subject=Enterprise Pricing Inquiry&body=Hi, I\'m interested in learning more about FewCuts Enterprise pricing and features.', '_blank')}
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-display font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="font-semibold mb-2">How does custom pricing work?</h3>
                <p className="text-muted-foreground">We create a tailored solution based on your specific needs, usage volume, and feature requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes, all plans come with a 14-day free trial. No credit card required to get started.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FewCutsFooter />
    </div>
  );
};

export default Pricing;
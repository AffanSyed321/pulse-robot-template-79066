import React from "react";
import { Zap, Subtitles, Edit3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Using AI to select the best clips",
    description: "The FewCuts editor uses AI to create the best of Clips from your Long-format Content. Our Unique and reliable algorithm is what makes us the shit.",
    gradient: "from-vice-500 to-vice-600"
  },
  {
    icon: Subtitles,
    title: "Automated Accurate Subtitles",
    description: "Ah Subtitles, we all hate doing them. Why do it then? FewCut's editor does it for you.",
    gradient: "from-vice-600 to-vice-700"
  },
  {
    icon: Edit3,
    title: "Inbuilt Video editor",
    description: "Want to add in Music? Want to edit your Subtitles? Want to chop on more of your video? Well then, go for it.",
    gradient: "from-vice-700 to-vice-800"
  },
  {
    icon: Smartphone,
    title: "Automated Portrait Formatting",
    description: "Landscape videos to portrait. Our Automated Editor resizes your short videos and makes you the center of attention without you fiddling out with settings.",
    gradient: "from-vice-500 to-vice-700"
  }
];

const FewCutsFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Why Choose <span className="text-primary">FewCuts</span>?
          </h2>
          <p className="section-subtitle">
            Powerful AI-driven features that transform your content creation workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-vice font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-vice-500/5 to-vice-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FewCutsFeatures;
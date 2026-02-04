import { motion } from "framer-motion";
import { MessageSquare, Target, BarChart3, Image, ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const aiTools = [
  {
    icon: MessageSquare,
    title: "AI Caption Generator",
    description:
      "Generate scroll-stopping captions with perfect hashtags and CTAs tailored to your brand voice.",
    input: "Business + Offer",
    output: "Caption + Hashtags + CTA",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Target,
    title: "AI Ad Campaign Builder",
    description:
      "Create data-driven ad campaigns with optimized targeting, copy, and creative recommendations.",
    input: "Budget + Location + Goal",
    output: "Campaign Plan + Copy",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "AI Brand Analyzer",
    description:
      "Deep-dive analytics on your social presence with actionable insights for growth.",
    input: "Instagram URL",
    output: "Engagement Report + Tips",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Image,
    title: "AI Creative Generator",
    description:
      "Generate stunning festival posters, social graphics, and marketing creatives instantly.",
    input: "Festival + Theme",
    output: "Poster + Caption",
    color: "from-amber-500 to-orange-500",
  },
];

const AIToolsSection = () => {
  return (
    <section id="ai-tools" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <GlowOrb className="top-1/4 right-1/4" color="mixed" size="xl" />
      <GlowOrb className="bottom-1/4 left-1/4" color="purple" size="lg" />

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-4 h-4" />
              AI Tools
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              Supercharge Your Marketing with{" "}
              <span className="gradient-text">AI Power</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto">
              Our proprietary AI tools help you create better content, faster campaigns,
              and smarter strategies. All powered by cutting-edge machine learning.
            </p>
          </AnimatedSection>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aiTools.map((tool, index) => (
            <AnimatedSection key={tool.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-8 md:p-10 relative overflow-hidden group cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-colors duration-300">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>

                {/* Input/Output Flow */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Input
                    </div>
                    <div className="text-sm font-medium">{tool.input}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Output
                    </div>
                    <div className="text-sm font-medium text-primary">{tool.output}</div>
                  </div>
                </div>

                {/* Try Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Try This Tool
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want access to all our AI tools?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span className="relative z-10">Get Full Access</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AIToolsSection;

import { motion } from "framer-motion";
import {
  Share2,
  Palette,
  Bot,
  Megaphone,
  Paintbrush,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content planning, community engagement, and growth optimization across all platforms.",
    features: ["Content Calendar", "Community Management", "Analytics & Reports"],
  },
  {
    icon: Palette,
    title: "Content Creation",
    description:
      "Stunning visuals, compelling copy, and engaging video content that stops the scroll.",
    features: ["Video Production", "Graphic Design", "Copywriting"],
  },
  {
    icon: Bot,
    title: "AI Promotion",
    description:
      "Leverage our proprietary AI tools to automate and optimize your marketing campaigns.",
    features: ["AI Copywriting", "Smart Targeting", "Auto-Optimization"],
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description:
      "Data-driven paid advertising across Meta, Google, TikTok, and emerging platforms.",
    features: ["Campaign Strategy", "A/B Testing", "ROI Tracking"],
  },
  {
    icon: Paintbrush,
    title: "Branding",
    description:
      "Complete brand identity design that captures your essence and connects with your audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Comprehensive growth plans that combine all channels for maximum impact.",
    features: ["Market Analysis", "Funnel Optimization", "Scaling Plans"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <GlowOrb className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" color="pink" size="xl" />
      <GlowOrb className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" color="purple" size="lg" />

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Dominate Digital</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto">
              From strategy to execution, we provide end-to-end digital marketing
              solutions powered by AI and driven by creativity.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="service-card h-full group"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-pink-purple flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-pink-purple blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 text-primary"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline inline-flex"
            >
              Discuss Your Project
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;

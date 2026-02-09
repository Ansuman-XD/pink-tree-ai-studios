import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Campaigns Launched" },
  { number: "10M+", label: "Reach Generated" },
];

const values = [
  {
    icon: Rocket,
    title: "Creative Excellence",
    description: "Award-worthy campaigns that capture attention and drive action.",
  },
  {
    icon: Target,
    title: "Data-Driven Ads",
    description: "Every campaign is backed by data and optimized for maximum ROI.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our success. We're partners in your growth journey.",
  },
  {
    icon: Zap,
    title: "AI-Enhanced Speed",
    description: "We use AI to work faster and smarter—so your campaigns launch sooner.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <GlowOrb className="top-0 right-0 translate-x-1/2 -translate-y-1/2" color="purple" size="lg" />
      
      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Us
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              We're <span className="gradient-text">Pink Tree Studios</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto">
              A creative advertising agency that harnesses AI to craft campaigns that
              convert. We blend human creativity with smart technology to deliver real results.
            </p>
          </AnimatedSection>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left - Story */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Born from a passion for{" "}
                <span className="gradient-text">great advertising</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pink Tree Studios was founded with a simple vision: to create advertising
                that actually works. We use AI as our secret weapon to craft smarter campaigns,
                sharper targeting, and content that truly converts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of creatives, strategists, and media buyers leverage AI tools
                to deliver advertising results that outperform traditional agencies—faster
                and more cost-effectively.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-sm"
                >
                  <span className="relative z-10">Explore Services</span>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Stats */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-500"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="service-card h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-pink-purple flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

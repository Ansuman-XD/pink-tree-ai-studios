import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import GlowOrb from "../GlowOrb";
import HeroScene from "../HeroScene";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 bg-background">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-background/40" />

      {/* Glow Orbs */}
      <GlowOrb className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" color="pink" size="xl" />
      <GlowOrb className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" color="purple" size="lg" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Creative Advertising Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display-xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">Advertising That</span>
          <br />
          <span className="gradient-text glow-text">Drives Results</span>
          <br />
          <span className="text-foreground">Using AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
        >
          We're a creative advertising agency that uses AI to supercharge your campaigns.
          Better ads, smarter targeting, and real growth for your brand.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary group flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span className="relative z-10">Our Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline group flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            <span>Get Started</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["20%", "40%", "20%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

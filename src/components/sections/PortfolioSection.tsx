import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const categories = ["All", "Branding", "Social Media", "Ads", "AI Projects"];

const projects = [
  {
    id: 1,
    title: "NeoTech Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description: "Complete brand overhaul for a tech startup",
  },
  {
    id: 2,
    title: "Luna Fashion Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Viral social campaign reaching 5M+ users",
  },
  {
    id: 3,
    title: "FitLife App Launch",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Multi-platform ad campaign with 300% ROI",
  },
  {
    id: 4,
    title: "AI Content Suite",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    description: "Custom AI tools for content automation",
  },
  {
    id: 5,
    title: "Cosmic Coffee Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    description: "Bold new identity for artisan coffee brand",
  },
  {
    id: 6,
    title: "StreamVibe Growth",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    description: "From 10K to 500K followers in 6 months",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <GlowOrb className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" color="pink" size="xl" />

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto">
              Explore some of our best work and see how we've helped brands
              transform their digital presence.
            </p>
          </AnimatedSection>
        </div>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-pink-purple text-white shadow-pink-glow"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
                />

                {/* Content */}
                <motion.div
                  initial={false}
                  animate={{
                    y: hoveredProject === project.id ? 0 : 20,
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                >
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

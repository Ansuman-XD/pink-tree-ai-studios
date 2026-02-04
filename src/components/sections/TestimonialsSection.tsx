import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Pink Tree Studios transformed our brand completely. Their AI tools helped us 10x our content output while maintaining quality. Absolutely game-changing!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CMO, FitLife App",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "The ROI we've seen from their ad campaigns is insane. 300% return in just 3 months. These guys know their stuff and the AI tools are next level.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director, Luna Fashion",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Working with Pink Tree feels like having a superpower. Their AI Caption Generator alone saves us hours every week. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO, NeoTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content:
      "From branding to social media, they handle everything with creativity and precision. Our engagement rates have never been higher.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleManualNavigation = (action: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    action();
    intervalRef.current = setInterval(nextTestimonial, 5000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="pink" size="xl" />

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              Loved by <span className="gradient-text">Brands Worldwide</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonial Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 md:top-12 md:left-12">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>

              {/* Content */}
              <div className="relative min-h-[280px] flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full text-center"
                  >
                    {/* Avatar */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mt-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleManualNavigation(prevTestimonial)}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        handleManualNavigation(() => setCurrentIndex(index));
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleManualNavigation(nextTestimonial)}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;

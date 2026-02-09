import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import GlowOrb from "../GlowOrb";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "499",
    period: "/month",
    description: "Perfect for small businesses looking to kickstart their advertising.",
    features: [
      "Social Media Ads (2 platforms)",
      "8 Ad Creatives per month",
      "Basic Performance Reports",
      "AI-Optimized Ad Copy",
      "Email Support",
      "Monthly Strategy Call",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "Growth",
    icon: Zap,
    price: "999",
    period: "/month",
    description: "For growing brands that need full-funnel advertising and campaign management.",
    features: [
      "Multi-Platform Ad Campaigns (4 platforms)",
      "20 Ad Creatives per month",
      "Advanced Analytics & Reports",
      "AI-Powered Targeting & Optimization",
      "Priority Support (24/7)",
      "Weekly Strategy Calls",
      "Full Campaign Management",
      "Content Calendar Planning",
    ],
    cta: "Start Growing",
    popular: true,
    gradient: "from-primary/30 to-secondary/30",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "",
    description: "Tailored advertising solutions for large organizations with complex needs.",
    features: [
      "Unlimited Platform Advertising",
      "Unlimited Creative Production",
      "Custom AI Campaign Strategies",
      "Dedicated Account Manager",
      "White-label Reporting",
      "Media Buying & Planning",
      "Cross-Channel Attribution",
      "On-site Training",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <GlowOrb className="top-1/4 left-0 -translate-x-1/2" color="pink" size="xl" />
      <GlowOrb className="bottom-1/4 right-0 translate-x-1/2" color="purple" size="lg" />

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Pricing
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title mb-6">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto">
              Choose the perfect plan for your brand. All plans include AI-enhanced
              campaigns and dedicated support.
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full glass-card p-8 flex flex-col ${
                  plan.popular ? "border-primary/50" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="px-4 py-1.5 rounded-full bg-gradient-pink-purple text-white text-sm font-semibold shadow-pink-glow"
                    >
                      Most Popular
                    </motion.div>
                  </div>
                )}

                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      plan.popular
                        ? "bg-gradient-pink-purple"
                        : "bg-muted"
                    }`}
                  >
                    <plan.icon
                      className={`w-7 h-7 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary"
                      : "border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                No hidden fees
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Money-back guarantee
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;

import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  color?: "pink" | "purple" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const GlowOrb = ({
  className = "",
  color = "pink",
  size = "md",
  animate = true,
}: GlowOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colorClasses = {
    pink: "bg-primary/30",
    purple: "bg-secondary/30",
    mixed: "bg-gradient-to-r from-primary/30 to-secondary/30",
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={
        animate
          ? {
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
};

export default GlowOrb;

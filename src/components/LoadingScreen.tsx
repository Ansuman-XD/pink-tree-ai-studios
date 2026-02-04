import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated background gradients */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
          </motion.div>

          {/* Logo and text */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8"
            >
              {/* Spinning ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-transparent border-t-primary border-r-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Logo container */}
              <motion.div
                className="relative w-20 h-20 rounded-2xl bg-gradient-pink-purple flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 30px hsl(330, 100%, 68%, 0.3)",
                    "0 0 60px hsl(330, 100%, 68%, 0.5)",
                    "0 0 30px hsl(330, 100%, 68%, 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                <span className="gradient-text">Pink Tree</span>{" "}
                <span className="text-foreground">Studios</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-muted-foreground"
              >
                AI-Powered Growth for Modern Brands
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8 h-1 bg-muted rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-pink-purple rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

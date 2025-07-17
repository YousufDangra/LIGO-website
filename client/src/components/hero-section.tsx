import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import lingoLogo from "@assets/5_1752710962817.png";

export default function HeroSection() {
  const stats = [
    { value: "1B", label: "Total Supply" },
    { value: "0%", label: "Tax" },
    { value: "ETH", label: "Network" },
    { value: "80%", label: "Liquidity" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-lingo-yellow/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 hero-glow inline-block rounded-full p-8">
            <motion.img 
              src={lingoLogo}
              alt="Lingo Dingo Logo" 
              className="w-32 h-32 mx-auto animate-float"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to <span className="text-lingo-yellow">Lingo Dingo</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The most sophisticated meme coin on Ethereum. Join the pack of smart investors with LIGO token.
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button className="bg-lingo-yellow text-lingo-black hover:bg-lingo-light-yellow transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-4 text-lg font-bold">
              Buy LIGO Now
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-lingo-yellow">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Shield, Users, Rocket } from "lucide-react";
import lingoCharacter from "@assets/6_1752710962825.png";

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Audited",
      description: "Built on Ethereum with zero tax functionality and transparent tokenomics."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of investors and meme enthusiasts."
    },
    {
      icon: Rocket,
      title: "Growth Potential",
      description: "Designed for long-term value appreciation with strong fundamentals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-lingo-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-lingo-yellow">Lingo Dingo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lingo Dingo (LIGO) is more than just a meme coin - it's a sophisticated financial instrument designed for the modern crypto investor.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-lingo-black/50 p-6 rounded-xl border border-lingo-yellow/20 hover:border-lingo-yellow/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="text-lingo-yellow text-2xl mr-4" size={32} />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={lingoCharacter}
              alt="Lingo Dingo Character" 
              className="w-80 h-80 mx-auto rounded-full shadow-2xl hero-glow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

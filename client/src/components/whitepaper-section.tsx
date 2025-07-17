import { motion } from "framer-motion";
import { FileText, Download, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhitepaperSection() {
  const features = [
    "Zero tax structure",
    "Community governance",
    "Transparent development",
    "Long-term sustainability"
  ];

  const handleDownload = () => {
    // In a real implementation, this would trigger a PDF download
    console.log("Downloading whitepaper...");
  };

  return (
    <section id="whitepaper" className="py-20 bg-lingo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Whitepaper</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into the technical details and roadmap of the Lingo Dingo project.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-lingo-dark-gray p-6 rounded-xl border border-lingo-yellow/20">
              <h3 className="text-2xl font-bold mb-4 text-lingo-yellow">Executive Summary</h3>
              <p className="text-gray-300 mb-4">
                Lingo Dingo represents the evolution of meme coins, combining community-driven development with serious tokenomics and utility.
              </p>
              <ul className="space-y-2 text-gray-300">
                {features.map((feature, index) => (
                  <motion.li 
                    key={feature}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-lingo-yellow mr-2" size={16} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-lingo-dark-gray p-6 rounded-xl border border-lingo-yellow/20">
              <h3 className="text-2xl font-bold mb-4 text-lingo-yellow">Technical Overview</h3>
              <p className="text-gray-300 mb-4">
                Built on Ethereum using industry-standard ERC20 protocols with enhanced security features.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-lingo-black/50 p-3 rounded">
                  <div className="text-lingo-yellow font-semibold">Contract</div>
                  <div className="text-gray-400">Verified & Audited</div>
                </div>
                <div className="bg-lingo-black/50 p-3 rounded">
                  <div className="text-lingo-yellow font-semibold">Liquidity</div>
                  <div className="text-gray-400">Permanently Locked</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-lingo-yellow/20 to-lingo-light-yellow/20 p-8 rounded-xl border border-lingo-yellow/30">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FileText className="text-6xl text-lingo-yellow mb-6 mx-auto" size={96} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Download Whitepaper</h3>
              <p className="text-gray-300 mb-6">
                Get the complete technical documentation and project roadmap.
              </p>
              <Button 
                onClick={handleDownload}
                className="bg-lingo-yellow text-lingo-black hover:bg-lingo-light-yellow transition-all duration-300 transform hover:scale-105 shadow-lg mb-4 px-8 py-4 text-lg font-bold"
              >
                <Download className="mr-2" size={20} />
                Download PDF
              </Button>
              <div className="text-sm text-gray-400">
                Last updated: December 2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

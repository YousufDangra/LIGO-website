import { motion } from "framer-motion";
import { Coins, Tag, Layers, Hash, Settings, Percent, Ban } from "lucide-react";
import { SiEthereum } from "react-icons/si";

export default function TokenomicsSection() {
  const tokenomicsData = [
    { icon: Coins, label: "Token Name", value: "Lingo Dingo" },
    { icon: Tag, label: "Symbol", value: "LIGO" },
    { icon: Layers, label: "Total Supply", value: "1,000,000,000" },
    { icon: Hash, label: "Decimals", value: "18" },
    { icon: SiEthereum, label: "Network", value: "Ethereum" },
    { icon: Settings, label: "Token Type", value: "ERC20" },
    { icon: Percent, label: "Taxes", value: "0%" },
    { icon: Ban, label: "Mint/Burn", value: "None" },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-lingo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tokenomics</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent and straightforward token economics designed for maximum fairness and growth potential.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomicsData.map((item, index) => (
            <motion.div 
              key={item.label}
              className="bg-lingo-dark-gray p-6 rounded-xl text-center border border-lingo-yellow/20 hover:border-lingo-yellow/50 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl text-lingo-yellow mb-4 flex justify-center">
                {item.icon === SiEthereum ? (
                  <SiEthereum size={48} />
                ) : (
                  <item.icon size={48} />
                )}
              </div>
              <h3 className="font-semibold mb-2 text-white">{item.label}</h3>
              <p className="text-lingo-yellow font-bold text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

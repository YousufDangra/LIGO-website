import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { CheckCircle } from "lucide-react";

export default function DistributionSection() {
  const distributionData = [
    { name: "Uniswap Liquidity", value: 80, color: "#F59E0B" },
    { name: "Creator & Marketing", value: 20, color: "#FCD34D" },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-lingo-black/90 p-3 rounded-lg border border-lingo-yellow/20 backdrop-blur-sm">
          <p className="text-lingo-yellow font-semibold">{payload[0].name}</p>
          <p className="text-white">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="distribution" className="py-20 bg-lingo-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Token <span className="text-lingo-yellow">Distribution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair and transparent distribution ensuring maximum liquidity and community participation.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div 
                className="bg-lingo-black/50 p-6 rounded-xl border border-lingo-yellow/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-lingo-yellow rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold">Uniswap Liquidity</h3>
                  </div>
                  <span className="text-lingo-yellow font-bold text-xl">80%</span>
                </div>
                <p className="text-gray-300">800,000,000 LIGO tokens added to Uniswap for public trading and liquidity.</p>
              </motion.div>
              
              <motion.div 
                className="bg-lingo-black/50 p-6 rounded-xl border border-lingo-yellow/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-lingo-light-yellow rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold">Creator & Marketing</h3>
                  </div>
                  <span className="text-lingo-yellow font-bold text-xl">20%</span>
                </div>
                <p className="text-gray-300">200,000,000 LIGO tokens reserved for project development and marketing initiatives.</p>
              </motion.div>
              
              <motion.div 
                className="bg-green-500/20 p-6 rounded-xl border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={32} />
                  <h3 className="text-xl font-semibold text-green-400">Liquidity Locked</h3>
                </div>
                <p className="text-gray-300">All liquidity tokens are locked to ensure investor safety and prevent rug pulls.</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-96 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lingo-yellow">1B</div>
                  <div className="text-sm text-gray-400">Total Supply</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

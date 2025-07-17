import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SiX, SiTelegram, SiDiscord } from "react-icons/si";
import { TrendingUp } from "lucide-react";

export default function CommunitySection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, this would send the email to a backend service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    });
    setEmail("");
  };

  const socialLinks = [
    {
      name: "Twitter / X",
      icon: SiX,
      description: "Follow us for updates",
      href: "#",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "Telegram",
      icon: SiTelegram,
      description: "Join the discussion",
      href: "#",
      hoverColor: "hover:text-blue-500"
    },
    {
      name: "Discord",
      icon: SiDiscord,
      description: "Community chat",
      href: "#",
      hoverColor: "hover:text-purple-400"
    },
    {
      name: "DexTools",
      icon: TrendingUp,
      description: "View live chart",
      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x44e72c1239d42f9e92004e70a3dd294288e61183?t=1752711018465",
      hoverColor: "hover:text-green-400"
    }
  ];

  return (
    <section id="community" className="py-20 bg-lingo-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-lingo-yellow">Pack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with the Lingo Dingo community across all major platforms and stay updated with the latest developments.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
              className="bg-lingo-black/50 p-8 rounded-xl text-center border border-lingo-yellow/20 hover:border-lingo-yellow/50 transition-all duration-300 transform hover:scale-105 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <link.icon 
                className={`text-4xl text-lingo-yellow mb-4 mx-auto group-hover:text-lingo-light-yellow transition-colors ${link.hoverColor}`}
                size={64}
              />
              <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
              <p className="text-gray-400">{link.description}</p>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-lingo-yellow/20 to-lingo-light-yellow/20 p-8 rounded-xl border border-lingo-yellow/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              Be the first to know about updates, partnerships, and community events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-lingo-black/50 border-lingo-yellow/20 focus:border-lingo-yellow text-white placeholder-gray-400 flex-1 max-w-md"
              />
              <Button 
                type="submit"
                className="bg-lingo-yellow text-lingo-black hover:bg-lingo-light-yellow transition-colors duration-300 font-semibold px-8"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

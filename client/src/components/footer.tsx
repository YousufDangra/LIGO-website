import lingoLogo from "@assets/2_1752710962823.png";

export default function Footer() {
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-lingo-black py-12 border-t border-lingo-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src={lingoLogo}
              alt="Lingo Dingo Logo" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-bold text-lingo-yellow">Lingo Dingo</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-400">
            {footerLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-lingo-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-lingo-yellow/10 text-center text-gray-400">
          <p>
            &copy; 2025 Lingo Dingo. All rights reserved. 
            
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Map, Flame } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Roadmap', path: '/roadmap', icon: Map },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-2 px-4 py-2 border-r border-white/10 mr-2">
          <Flame className="w-5 h-5 text-red-500" />
          <span className="font-black text-white tracking-widest text-sm uppercase">TEXAS</span>
        </div>
        
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className="relative px-6 py-2.5 rounded-full transition-all duration-300 group"
            >
              {isActive && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className={`relative flex items-center gap-2 z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-orange-100/60 group-hover:text-white'}`}>
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-black uppercase tracking-widest">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;

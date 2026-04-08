import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const links = [
    { name: 'Inicio', href: '#', active: true },
    { name: 'Nosotros', href: '#' },
    { name: 'Membresias', href: '#' },
    { name: 'Eventos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contáctanos', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-24 flex items-center px-12 shadow-sm">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-minds-black">
          Minds Cowork
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[15px] font-bold transition-colors relative py-2 ${
                link.active ? 'text-minds-cyan' : 'text-minds-black hover:text-minds-cyan'
              }`}
            >
              {link.name}
              {link.active && (
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-minds-cyan rounded-full" />
              )}
            </a>
          ))}
        </div>

        <button className="px-10 py-3.5 bg-minds-cyan text-white text-[15px] font-bold rounded-xl hover:bg-minds-cyan/90 transition-all">
          Identificarse
        </button>
      </div>
    </nav>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, GraduationCap } from 'lucide-react';
import logoImg from '../assets/images/logo_asieco_1780183696351.png';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-slate-100' : 'bg-white py-4 border-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          {/* Logo & Brand Title */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="ASIECO Logo" 
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[#0A3C75] text-lg md:text-xl tracking-tight leading-none">ASIECO</span>
              <span class="text-[9px] font-mono text-cyan-600 tracking-wider uppercase font-semibold mt-1">Asociación Interamericana</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm text-slate-600">
            <a href="#inicio" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Inicio</a>
            <a href="#quienes-somos" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Quiénes Somos</a>
            <a href="#programas" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Programas</a>
            <a href="#docentes" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Docentes</a>
            <a href="#certificacion" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Certificación</a>
            <a href="#elegirnos" className="hover:text-[#0A3C75] hover:scale-102 transition-all">Por Qué Elegirnos</a>
          </div>

          {/* Desktop Navigation Call to action */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="#programas" 
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-sky-50 text-[#0A3C75] border border-sky-100 hover:bg-sky-100/50 transition-all"
            >
              Ver Cursos
            </a>
            <button 
              onClick={onOpenContact}
              className="px-4.5 py-2 rounded-lg text-xs font-semibold bg-[#0A3C75] text-white hover:bg-[#0A3C75]/95 shadow transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              Contacto WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-[#0A3C75] hover:bg-slate-100 focus:outline-none transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2.5">
            <a 
              href="#inicio" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#quienes-somos" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Quiénes Somos
            </a>
            <a 
              href="#programas" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Programas
            </a>
            <a 
              href="#docentes" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Docentes
            </a>
            <a 
              href="#certificacion" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Certificación
            </a>
            <a 
              href="#elegirnos" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-sky-50 hover:text-[#0A3C75] transition-colors"
            >
              Por Qué Elegirnos
            </a>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a 
                href="#programas" 
                onClick={() => setIsOpen(false)}
                className="text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-50 text-[#0A3C75]"
              >
                Ver Cursos
              </a>
              <button 
                onClick={() => { setIsOpen(false); onOpenContact(); }}
                className="text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#0A3C75] text-white flex items-center justify-center gap-2 "
              >
                <PhoneCall className="h-4 w-4" />
                Contacto WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

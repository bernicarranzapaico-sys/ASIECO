/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import footerBrandLogo from '../assets/images/logo_asieco_1780183696351.png';

export default function Footer() {
  return (
    <footer className="bg-[#051C3A] text-slate-400 pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand/Slogan pillar */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img 
                src={footerBrandLogo} 
                alt="ASIECO Logo" 
                className="h-10 w-auto bg-white/5 p-1.5 rounded-lg border border-white/10"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-lg text-white leading-none">ASIECO</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed max-w-sm text-slate-400">
              Asociación Interamericana de Ecografía. Dedicada a expandir las habilidades diagnósticas médicas por ultrasonografía en toda Latinoamérica mediante metodologías virtuales rigurosas y soporte académico continuo de excelencia.
            </p>
          </div>

          {/* Quick shortcuts */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4.5 font-display">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#inicio" className="hover:text-sky-400 transition-colors">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-sky-400 transition-colors">Quiénes somos</a></li>
              <li><a href="#docentes" className="hover:text-sky-400 transition-colors">Docentes</a></li>
              <li><a href="#certificacion" className="hover:text-sky-400 transition-colors">Certificación oficial</a></li>
            </ul>
          </div>

          {/* Programs shortcuts */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4.5 font-display">
              Programas Destacados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <a href="#programas" className="hover:text-sky-400 transition-colors">Doppler Obstétrico</a>
              <a href="#programas" class="hover:text-sky-400 transition-colors">Gineco-Obstétrica</a>
              <a href="#programas" class="hover:text-sky-400 transition-colors">Doppler Vascular</a>
              <a href="#programas" class="hover:text-sky-400 transition-colors">Pediátrica</a>
              <a href="#programas" class="hover:text-sky-400 transition-colors">Músculo-Esquelética</a>
              <a href="#programas" class="hover:text-sky-400 transition-colors">General</a>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; 2026 ASIECO - Asociación Interamericana de Ecografía. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 select-none">
            <span>Educación Médica Continua Sin Fronteras</span>
            <span className="text-slate-800">|</span>
            <span class="text-slate-400">E-learning en Salud</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

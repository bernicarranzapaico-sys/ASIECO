/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_ultrasound_1780183713830.png';

export default function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Curved decoration in top-left */}
      <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 border-l-4 border-t-4 border-sky-100/40 rounded-br-[200px] pointer-events-none hidden md:block"></div>

      {/* Grid pattern top-right */}
      <div className="absolute top-10 right-10 flex items-center gap-1.5 opacity-15 pointer-events-none hidden lg:flex">
        <div className="grid grid-cols-5 gap-2.5">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A3C75]"></span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0A3C75] text-xs font-mono tracking-wide uppercase font-bold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Educación Profesional en Salud
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] text-slate-950 tracking-tight leading-[1.08] mb-6">
              ASIECO – <span className="text-[#0A3C75]">Asociación Interamericana</span> de Ecografía
            </h1>

            <p className="font-display font-semibold text-lg sm:text-xl text-slate-700 tracking-tight mb-4">
              Formación médica continua en ecografía para profesionales de habla hispana.
            </p>

            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Capacitamos a médicos y profesionales de la salud mediante programas virtuales de alta exigencia, docentes especializados con experiencia internacional activa, casos prácticos interactivos y certificación digital ágil para potenciar tu éxito diagnóstico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#programas" 
                className="px-8 py-4 rounded-xl text-base font-bold bg-[#0A3C75] text-white hover:bg-[#082E5A] shadow-md hover:shadow-lg hover:shadow-sky-950/15 transition-all text-center flex items-center justify-center gap-2"
              >
                Ver programas
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#quienes-somos" 
                className="px-8 py-4 rounded-xl text-base font-bold bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm transition-all text-center flex items-center justify-center"
              >
                Conocer la institución
              </a>
            </div>
          </div>

          {/* Ultrasound Screen View Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-sky-100/40 rounded-[2.5rem] blur-2xl pointer-events-none scale-90 translate-y-4"></div>
            
            {/* Soft border container */}
            <div className="relative bg-white p-3 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <img 
                src={heroImg} 
                alt="Ecógrafo en clínica de alto rendimiento asistencial" 
                className="w-full h-auto object-cover rounded-[1.5rem] aspect-[4/3] select-none"
                referrerPolicy="no-referrer"
              />

              {/* Float diagnostic block */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-3.5 max-w-[260px] animate-bounce-slow">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-500">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-[11px] text-slate-900 uppercase tracking-wider leading-none">Certificación Avalada</h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Cumpliendo con los estándares de acreditación en América Latina.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slogan stripe bar at bottom of header */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm md:text-base font-semibold tracking-wide">
          “Educación médica continua en ecografía, con enfoque práctico y clínico.”
        </div>
      </div>
    </header>
  );
}

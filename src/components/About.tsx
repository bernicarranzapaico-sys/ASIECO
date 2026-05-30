/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Bookmark, Flame } from 'lucide-react';
import hospitalImg from '../assets/images/hero_ultrasound_1780183713830.png';

export default function About() {
  const essentials = [
    { label: 'Formación médica continua', desc: 'Programas estructurados y periódicos.' },
    { label: 'Enfoque práctico y clínico', desc: 'Análisis de casos de ultrasonido.' },
    { label: 'Programas virtuales', desc: 'Metodología a distancia interactiva.' },
    { label: 'Docentes especializados', desc: 'Tutorías personalizadas por expertos.' },
    { label: 'Certificación digital', desc: 'Acreditación internacional directa.' },
    { label: 'Comunidad académica', desc: 'Intercambio científico permanente.' }
  ];

  return (
    <section id="quienes-somos" className="relative py-24 bg-slate-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Hospital / Clinical Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-pink-100/60 rounded-full blur-3xl opacity-70"></div>
            
            {/* Mock doctor clinical portrait box */}
            <div className="relative bg-white p-3 rounded-[2.2rem] border border-slate-100 shadow-xl overflow-hidden leading-none">
              <img 
                src={hospitalImg} 
                alt="Médicos interactuando durante un análisis clínico ecográfico" 
                className="w-full h-auto object-cover rounded-[1.8rem] aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/25 rounded-[1.8rem] m-3 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side: Identity information and Nuestra Esencia card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#0A3C75]"></span>
              Compromiso de Excelencia
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mb-6">
              ¿Quiénes somos?
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                <strong>ASIECO</strong> es una asociación de carácter intermeridiano orientada plenamente a la formación médica continua en ecografía, creada para brindar capacitación accesible, práctica y actualizada a profesionales de la salud en Latinoamérica y otros países de habla hispana.
              </p>
              <p className="border-l-4 border-sky-400 pl-4 bg-sky-50/50 py-3 rounded-r-xl">
                Nuestro enfoque combina armónicamente teoría, práctica clínica guiada, casos diagnósticos reales y acompañamiento académico pormenorizado para fortalecer de forma integral las competencias del profesional médico en diagnóstico por imágenes.
              </p>
            </div>

            {/* Essential stats card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-md w-full">
              <h3 className="font-display font-bold text-base text-[#0A3C75] border-b border-slate-100 pb-3.5 mb-5 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                NUESTRA ESENCIA
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {essentials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-sky-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.label}</h4>
                      <p className="text-slate-500 text-xs mt-0.5 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Slogan stripe bar at bottom of About section */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">Formación con Propósito</h4>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1">
            Acercamos la educación médica especializada a profesionales que buscan actualizarse y mejorar su práctica clínica.
          </p>
        </div>
      </div>
    </section>
  );
}

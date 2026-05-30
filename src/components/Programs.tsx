/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, Heart, Activity, Activity as Pulse, Smile, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (key: string) => void;
}

export default function Programs({ onSelectProgram }: ProgramsProps) {
  const cards = [
    {
      id: 'ecografia-doppler-obstetrico',
      name: 'Ecografía Doppler Obstétrico',
      short: 'Estudio de flujo sanguíneo feto-placentario para evaluar el bienestar fetal y predecir preeclampsia de alta complejidad.',
      tag: '100% Virtual',
      color: 'sky',
      icon: Zap
    },
    {
      id: 'ecografia-gineco-obstetrica',
      name: 'Ecografía Gineco-Obstétrica',
      short: 'Evaluación de patologías uterinas, anexos y cribados morfológicos del desarrollo fetal sistemático trimestre a trimestre.',
      tag: 'Acompañamiento',
      color: 'purple',
      icon: Heart
    },
    {
      id: 'ecografia-doppler-vascular',
      name: 'Ecografía Doppler Vascular',
      short: 'Estudio clínico y principios físicos para el mapeo venoso y arterial venoso periférico de miembros inferiores y carótida.',
      tag: '100% Online',
      color: 'teal',
      icon: Activity
    },
    {
      id: 'ecografia-pediatrica',
      name: 'Ecografía Pediátrica',
      short: 'Evaluación ecográfica transfontanelar neurológica, abdominal de vísceras y cadera infantil con método de Graf experto.',
      tag: 'Casos Clínicos',
      color: 'orange',
      icon: Smile
    },
    {
      id: 'ecografia-musculo-esqueletica',
      name: 'Ecografía Músculo-Esquelética',
      short: 'Evaluación ecográfica anatómica de hombro, muñeca, rodilla y tobillo, dirigido a reumatología y medicina del deporte.',
      tag: 'Videos HD',
      color: 'emerald',
      icon: Layers
    },
    {
      id: 'ecografia-general',
      name: 'Ecografía General',
      short: 'Instrucción fundamental de ecografía de abdomen completo, renal, pélvico, partes blandas, tiroides y protocolo FAST de urgencia.',
      tag: 'Fundacional',
      color: 'rose',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="programas" className="relative py-24 bg-white scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Oferta Académica
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mt-4">
            Programas académicos
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Cursos virtuales estructurados metodológicamente para fortalecer tus habilidades diagnósticas y clínicas en ecografía.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            
            // Generate tailored colors for circles
            let colorStyles = "bg-sky-50 text-[#0A3C75] border-sky-100";
            if (card.color === 'purple') colorStyles = "bg-purple-50 text-purple-600 border-purple-100";
            if (card.color === 'teal') colorStyles = "bg-teal-50 text-teal-600 border-teal-100";
            if (card.color === 'orange') colorStyles = "bg-orange-50 text-orange-600 border-orange-100";
            if (card.color === 'emerald') colorStyles = "bg-emerald-50 text-emerald-600 border-emerald-100";
            if (card.color === 'rose') colorStyles = "bg-rose-50 text-rose-600 border-rose-100";

            return (
              <div 
                key={card.id} 
                className="group bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-xl shadow-md transition-all duration-300 flex flex-col justify-between h-full text-left"
              >
                <div>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 border ${colorStyles}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-950 group-hover:text-[#0A3C75] transition-colors leading-snug">
                    {card.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                    {card.short}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-wide">
                    {card.tag}
                  </span>
                  <button 
                    onClick={() => onSelectProgram(card.id)}
                    className="text-sm font-semibold text-[#0A3C75] hover:text-[#082E5A] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Ver más
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Slogan stripe bar at bottom of Programs section */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">Aprendizaje Flexible y Especializado</h4>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1">
            Accede a programas diseñados para médicos, residentes y profesionales que desean actualizarse en ecografía.
          </p>
        </div>
      </div>
    </section>
  );
}

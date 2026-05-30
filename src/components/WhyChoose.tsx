/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Monitor, Clock, Users, FileText, BadgeCheck, BookOpen, Headset, Star } from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    {
      title: 'Formación 100% virtual',
      desc: 'Accede a la plataforma formativa y capacítate desde el confort de tu hogar o clínica.',
      icon: Monitor,
      bg: 'bg-sky-50 text-sky-600'
    },
    {
      title: 'Acceso flexible',
      desc: 'Clases disponibles las 24 horas del día, los 7 días de la semana, para repasar a tu propio ritmo.',
      icon: Clock,
      bg: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Docentes especializados',
      desc: 'Docencia de primer nivel guiada por profesionales médicos con acreditación académica internacional.',
      icon: Users,
      bg: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Casos clínicos aplicados',
      desc: 'Metodología basada en la resolución guiada y pormenorizada de ecografías y diagnósticos reales.',
      icon: FileText,
      bg: 'bg-red-50 text-red-600'
    },
    {
      title: 'Certificación digital',
      desc: 'Acreditaciones verificables internacionalmente al concluir satisfactoriamente los módulos.',
      icon: BadgeCheck,
      bg: 'bg-orange-50 text-orange-600'
    },
    {
      title: 'Material académico',
      desc: 'Guías de consulta, artículos científicos y descargables de alta utilidad diagnóstica.',
      icon: BookOpen,
      bg: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Soporte al estudiante',
      desc: 'Acompañamiento directo para solucionar dudas técnicas y asistenciales con agilidad.',
      icon: Headset,
      bg: 'bg-cyan-50 text-cyan-600'
    },
    {
      title: 'Enfoque práctico',
      desc: 'Syllabus estructurado para optimizar la seguridad e inmediación del diagnóstico en tu consultorio.',
      icon: Star,
      bg: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <section id="elegirnos" className="relative py-24 bg-slate-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Valores Institucionales
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mt-4">
            ¿Por qué elegir ASIECO?
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Nuestra propuesta educativa en ecología diagnóstica virtual está diseñada para responder de forma ágil a las necesidades formativas médicas.
          </p>
        </div>

        {/* Benefits Grid (4x2 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-350 flex flex-col items-start"
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-5 ${item.bg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-950 text-base leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Slogan stripe bar at bottom of WhyChoose section */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">Educación Médica al Alcance de Más Profesionales</h4>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1">
            ASIECO conecta conocimiento, práctica clínica y tecnología para mejorar la formación en ecografía.
          </p>
        </div>
      </div>
    </section>
  );
}

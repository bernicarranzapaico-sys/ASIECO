/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Award, Stethoscope, Check } from 'lucide-react';
import doctorImg from '../assets/images/doctor_sarria_1780186194183.png';

export default function Teachers() {
  const achievements = [
    { title: 'Formación Especializada', desc: 'Acreditación y estudios avanzados en centros de prestigio.' },
    { title: 'Evaluación Materno-Fetal', desc: 'Especialista en cribados precoces, RCIU y Doppler fetal.' },
    { title: 'Casos Clínicos Reales', desc: 'Discusión analítica de diagnósticos complejos del día a día.' },
    { title: 'Enseñanza Práctica', desc: 'Enfoque diseñado para que apliques lo aprendido en tu consulta.' }
  ];

  return (
    <section id="docentes" className="relative py-24 bg-slate-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Cuerpo Académico
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mt-4">
            Docentes especializados
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Aprende con destacados profesionales con sólida trayectoria clínica y académica en Europa y América Latina.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Portrait of Doctor */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative bg-white pt-4 px-4 pb-6 rounded-3xl border border-slate-150 shadow-xl max-w-[360px] w-full text-center">
              <div className="rounded-2xl overflow-hidden bg-slate-50 leading-none border border-slate-100">
                <img 
                  src={doctorImg} 
                  alt="Doctor Marco Antonio Sarria La Verde en clínica ecográfica" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4.5">
                <h4 className="font-display font-bold text-base text-slate-950 uppercase tracking-tight leading-snug">
                  DR. MARCO ANTONIO SARRIA LA VERDE
                </h4>
                <p className="text-[10px] font-mono text-cyan-600 font-bold uppercase tracking-wider mt-1">
                  Docente Principal ASIECO
                </p>
              </div>
            </div>
          </div>

          {/* Center/Right Panel: Professional info and cards */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#0A3C75]"></span>
              Trayectoria Docente Destacada
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A3C75] tracking-tight leading-snug mb-5">
              Dr. Marco Antonio Sarria La Verde
            </h3>

            {/* List credentials */}
            <ul className="space-y-3.5 mb-8 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-lg bg-sky-50 text-sky-500 mt-1 shrink-0">
                  <Stethoscope className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm sm:text-base">
                  <strong>Especialista clínico de jerarquía</strong> en Ginecología y Obstetricia.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-lg bg-sky-50 text-sky-500 mt-1 shrink-0">
                  <GraduationCap className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm sm:text-base">
                  <strong>Fellow de Perinatología y Medicina Fetal</strong> en el prestigioso Hospital Clínic, Barcelona, España.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-lg bg-sky-50 text-sky-500 mt-1 shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm sm:text-base">
                  <strong>Especialista certificado</strong> en Laparoscopía, Ecografía Doppler Obstétrica y Histeroscopía diagnóstica-quirúrgica.
                </span>
              </li>
            </ul>

            {/* Trajectory box right layout */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-150 shadow-md">
              <h4 className="font-display font-bold text-sm text-[#0A3C75] border-b border-slate-100 pb-3 mb-4.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                EXPERIENCIA ACADÉMICA Y CLÍNICA
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                {achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-cyan-500 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-bold text-slate-900 leading-tight">{item.title}</h5>
                      <p className="text-slate-500 text-xs mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Slogan stripe bar at bottom of Docentes section */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">Docentes con Enfoque Clínico</h4>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1">
            Nuestros programas son guiados por profesionales con experiencia activa en el área médica y académica.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, CheckCircle, FileBadge } from 'lucide-react';
import certImg from '../assets/images/doctor_certificate_1780183748491.png';

export default function Certification() {
  const points = [
    'Certificado digital emitido con ID único.',
    'Nombre completo del programa realizado.',
    'Datos de identificación académica del participante.',
    'Respaldo institucional oficial de ASIECO.',
    'Enfoque formal en actualización técnica continua.'
  ];

  return (
    <section id="certificacion" className="relative py-24 bg-white scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text/Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-[#0A3C75] text-xs font-mono font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#0A3C75]"></span>
              Validación y Respaldo Oficial
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mb-6 leading-tight">
              Certificación digital de participación o aprobación
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                Al finalizar satisfactoriamente nuestros programas de educación médica virtual, los participantes reciben una <strong>certificación digital</strong> de participación o aprobación, según el curso correspondiente y sus criterios de evaluación.
              </p>
              <p>
                La certificación respalda fehacientemente la actualización profesional del participante y puede ser utilizada para robustecer su currículum académico y potenciar su posicionamiento en centros asistenciales y de consulta médica privados o públicos.
              </p>
            </div>

            {/* Inclusions Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm w-full">
              <h3 className="font-display font-bold text-sm text-[#0A3C75] border-b border-slate-200 pb-3.5 mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                LA CERTIFICACIÓN INCLUYE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-700">
                {points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#0A3C75] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Image representation of certificate */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sky-200/40 rounded-full blur-3xl opacity-65"></div>
            
            <div className="relative bg-white p-3 rounded-[2.2rem] border border-slate-150 shadow-xl overflow-hidden leading-none">
              <img 
                src={certImg} 
                alt="Diploma académico de certificación en ecología" 
                className="w-full h-auto object-cover rounded-[1.8rem] aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-slate-100/40 rounded-[1.8rem] m-3 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Slogan stripe bar at bottom of Certification section */}
      <div className="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <h4 className="text-[10px] font-mono font-bold tracking-wider uppercase text-sky-300">Respaldo para tu Crecimiento Profesional</h4>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-1">
            Impulsamos la formación continua de profesionales de la salud mediante programas académicos virtuales de alto impacto.
          </p>
        </div>
      </div>
    </section>
  );
}

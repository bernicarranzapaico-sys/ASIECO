/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookOpen, X, Sparkles, Download, Layers } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Teachers from './components/Teachers';
import Certification from './components/Certification';
import WhyChoose from './components/WhyChoose';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ExportPanel from './components/ExportPanel';

// Static string files for the Export Panel code-view
import { STATIC_HTML, STATIC_CSS, STATIC_JS } from './data/staticCode';

// Course data for details popup syllabus
const syllabusDatabase: Record<string, { name: string; desc: string; syllabus: string[] }> = {
  'ecografia-doppler-obstetrico': {
    name: 'Ecografía Doppler Obstétrico',
    desc: 'Estudio integral del flujo sanguíneo feto-placentario para evaluar el bienestar fetal y diagnosticar preeclampsia u otras afecciones de alta complejidad vascular.',
    syllabus: [
      'Módulo 1: Principios físicos del ultrasonido Doppler y hemodinámica fetal.',
      'Módulo 2: Evaluación Doppler de la arteria umbilical y cerebral media.',
      'Módulo 3: Flujometría fetal en la restricción del crecimiento intrauterino (RCIU).',
      'Módulo 4: Cribado terapéutico, predicción de preeclampsia y Doppler de arterias uterinas.',
      'Módulo 5: Casos clínicos integrados y resolución de artefactos de imagen Doppler.'
    ]
  },
  'ecografia-gineco-obstetrica': {
    name: 'Ecografía Gineco-Obstétrica',
    desc: 'Formación avanzada en evaluación anatómica detallada del útero, anexos y el desarrollo fetal durante el primer, segundo y tercer trimestre del embarazo.',
    syllabus: [
      'Módulo 1: Anatomía ecográfica normal del útero, anexos y trompas de Falopio.',
      'Módulo 2: Patología uterina benigna: miomas, pólipos y adenomiosis reproductiva.',
      'Módulo 3: Ecografía obstétrica del primer trimestre y marcadores precoces de aneuploidías.',
      'Módulo 4: Morfología detallada fetal y cribado anatómico sistemático.',
      'Módulo 5: Evaluación de la placenta, líquido amniótico y longitud cervical.'
    ]
  },
  'ecografia-doppler-vascular': {
    name: 'Ecografía Doppler Vascular',
    desc: 'Principios físicos, hemodinámicos y clínicos de la ecografía Doppler aplicados a la evaluación y diagnóstico arterial y venoso periférico.',
    syllabus: [
      'Módulo 1: Física del espectro de onda Doppler arterial y hemodinámica sanguínea.',
      'Módulo 2: Doppler de carótida y arterias vertebrales: cuantificación de estenosis.',
      'Módulo 3: Mapeo venoso de miembros inferiores para insuficiencia y trombosis venosa profunda (TVP).',
      'Módulo 4: Doppler arterial de miembros inferiores: índices y oclusión vascular.'
    ]
  },
  'ecografia-pediatrica': {
    name: 'Ecografía Pediátrica',
    desc: 'Profundiza en las particularidades anatómicas del neonato, lactante y paciente pediátrico, abarcando ecografía transfontanelar, abdominal y cadera infantil.',
    syllabus: [
      'Módulo 1: Ecografía cerebral transfontanelar neurológica en neonatología.',
      'Módulo 2: Cribado sistemático del canal pilórico y reflujo gastroesofágico.',
      'Módulo 3: Evaluación de la displasia en desarrollo de la cadera infantil (Método de Graf).',
      'Módulo 4: Ecografía abdominal y renal en pediatría: anomalías congénitas recurrentes.'
    ]
  },
  'ecografia-musculo-esqueletica': {
    name: 'Ecografía Músculo-Esquelética',
    desc: 'Mapeo de alta resolución para estructuras articulares, tendones, ligamentos y músculos, fundamental para médicos especialistas en rehabilitación, medicina de deporte y reumatología.',
    syllabus: [
      'Módulo 1: Ecografía de hombro: manguito rotador, tendón bicipital y espacio subacromial.',
      'Módulo 2: Ecografía de rodilla: ligamentos colaterales, meniscos, tendón rotuliano y derrame articular.',
      'Módulo 3: Ecografía de codo y muñeca: túnel carpiano y tendinitis recurrentes.',
      'Módulo 4: Ecografía de tobillo y pie: fascia plantar, tendón de Aquiles y esguinces musculares.'
    ]
  },
  'ecografia-general': {
    name: 'Ecografía General',
    desc: 'Módulo integral básico que asienta las bases de la ecografía abdominal, renal, pélvica, tiroidea, de partes blandas y escrotal para el médico general o intensivista.',
    syllabus: [
      'Módulo 1: Ecografía de hígado y vías biliares: colelitiasis y esteatosis hepática.',
      'Módulo 2: Evaluación renal y retroperitoneo: litiasis, quistes e hidronefrosis.',
      'Módulo 3: Ecografía de de tiroides y glándula mamaria: clasificación TIRADS y BIRADS.',
      'Módulo 4: Protocolo FAST (Focused Assessment with Sonography for Trauma) de emergencias.'
    ]
  }
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [activeCourseKey, setActiveCourseKey] = useState<string>('ecografia-doppler-obstetrico');

  const handleSelectProgram = (key: string) => {
    setActiveCourseKey(key);
    setIsSyllabusOpen(true);
  };

  const activeSyllabus = syllabusDatabase[activeCourseKey] || syllabusDatabase['ecografia-doppler-obstetrico'];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 relative selection:bg-[#0A3C75]/10 selection:text-[#0A3C75]">
      
      {/* 1. Navbar / Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Layout Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Banner */}
        <Hero />

        {/* 3. Who we are section */}
        <About />

        {/* 4. Programs listing */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* 5. Teachers profile */}
        <Teachers />

        {/* 6. Certification details */}
        <Certification />

        {/* 7. Why ASIECO */}
        <WhyChoose />

        {/* 8. Call to action & interactive lead form */}
        <ContactCTA 
          isModalOpen={isContactOpen} 
          onCloseModal={() => setIsContactOpen(false)} 
          onOpenModal={() => setIsContactOpen(true)}
          selectedCourseName={activeSyllabus.name}
        />

      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating Interactive Static Export Panel */}
      <ExportPanel 
        staticHtml={STATIC_HTML}
        staticCss={STATIC_CSS}
        staticJs={STATIC_JS}
      />

      {/* INTERACTIVE SYLLABUS MULTI-MODAL OVERLAY (REACT SIDE) */}
      {isSyllabusOpen && (
        <div className="fixed inset-0 z-[150] flex items-end justify-center sm:items-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-250">
            
            {/* Modal Navigation gradient header */}
            <div className="bg-gradient-to-br from-[#0A2447] to-[#0A3C75] p-6 text-white flex justify-between items-center leading-none">
              <div className="text-left">
                <span className="text-[10px] font-mono text-sky-300 font-bold tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Syllabus Académico
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl mt-1.5 leading-tight">
                  {activeSyllabus.name}
                </h3>
              </div>
              <button 
                onClick={() => setIsSyllabusOpen(false)}
                className="text-white/80 hover:text-white p-2 rounded-lg bg-white/10 hover:bg-white/15 transition-all text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            {/* Syllabus Body */}
            <div className="p-6 text-left">
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {activeSyllabus.desc}
              </p>

              <h4 className="font-display font-bold text-slate-800 text-xs tracking-wider uppercase mb-3.5 flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-sky-500" />
                Módulos de Aprendizaje
              </h4>

              <ul className="space-y-2.5 mb-6 text-sm text-slate-755 font-sans">
                {activeSyllabus.syllabus.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 border border-slate-50/50 transition-colors"
                  >
                    <span className="text-sky-500 font-bold select-none mt-0.5">&bull;</span>
                    <span className="text-slate-700 font-medium text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="bg-slate-50 p-4 rounded-xl flex items-center justify-between gap-4 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                  <Layers className="h-4 w-4 text-sky-500" />
                  <span>Acceso ilimitado por 12 meses</span>
                </div>
                <button
                  onClick={() => {
                    setIsSyllabusOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  Solicitar información
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

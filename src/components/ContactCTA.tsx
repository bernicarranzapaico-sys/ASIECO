/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhoneCall, Check, MessageSquare, Send, HelpCircle, Sparkles } from 'lucide-react';
import footerLogoImg from '../assets/images/logo_asieco_1780186155159.png';

interface ContactCTAProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
  selectedCourseName?: string;
}

export default function ContactCTA({ 
  isModalOpen, 
  onCloseModal, 
  onOpenModal,
  selectedCourseName = "Información General"
}: ContactCTAProps) {
  const [studentName, setStudentName] = useState('');
  const [studentCountry, setStudentCountry] = useState('');
  const [studentProgram, setStudentProgram] = useState(selectedCourseName);
  const [studentMsg, setStudentMsg] = useState('');

  // Sync state with selected course name if it updates
  useState(() => {
    if (selectedCourseName) {
      setStudentProgram(selectedCourseName);
    }
  });

  const handleOpenLocalModal = () => {
    setStudentProgram(selectedCourseName);
    onOpenModal();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentCountry) return;

    const message = `Hola ASIECO. Mi nombre es ${studentName.trim()}, soy de ${studentCountry.trim()}. Estoy interesado en recibir información académica sobre el programa: *${studentProgram}*.${studentMsg ? `\n\nMensaje adicional: "${studentMsg.trim()}"` : ''}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51900000000?text=${encodedMessage}`; // Hypocritical general secretary number
    
    window.open(whatsappUrl, '_blank');
    
    // Reset and close
    setStudentName('');
    setStudentCountry('');
    setStudentMsg('');
    onCloseModal();
  };

  return (
    <>
      {/* FINAL INTERACTIVE CTA BANNER */}
      <section className="relative bg-gradient-to-br from-[#0A2447] to-[#0A3C75] py-24 text-white overflow-hidden text-center">
        {/* Abstract Doppler background patterns */}
        <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center pointer-events-none">
          <svg className="w-full h-full max-w-xl text-sky-400" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" stroke-width="0.5" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="0.5" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="0.5" />
            <circle cx="50" cy="50" r="50" stroke="currentColor" stroke-width="0.5" className="animate-pulse" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <img 
            src={footerLogoImg} 
            alt="ASIECO" 
            className="h-20 w-auto mx-auto object-contain mb-8 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 select-none"
            referrerPolicy="no-referrer"
          />

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Actualiza tus conocimientos en ecografía con ASIECO
          </h2>

          <p className="text-sky-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Explora nuestros programas académicos y fortalece tu práctica clínica con formación médica continua de primer nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a 
              href="#programas" 
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl text-base shadow-lg shadow-sky-950/20 active:translate-y-px hover:shadow-xl transition-all"
            >
              Ver programas disponibles
            </a>
            <button 
              onClick={handleOpenLocalModal}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-base shadow-lg shadow-emerald-950/20 active:translate-y-px hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-5 w-5" />
              Contactar por WhatsApp
            </button>
          </div>

          <div className="mt-12 text-xs sm:text-sm text-[#92BBE9] font-mono tracking-wider font-semibold uppercase flex flex-wrap justify-center gap-x-8 gap-y-2 select-none">
            <span>Formación virtual</span>
            <span className="text-white/25">&bull;</span>
            <span>Certificación digital</span>
            <span className="text-white/25">&bull;</span>
            <span>Docentes especializados</span>
          </div>
        </div>
      </section>

      {/* WHATSAPP LEAD INTAKE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[150] overflow-y-auto block">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background Blur Overlay */}
            <div 
              onClick={onCloseModal}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Trick to center the modal content in desktop */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal Body */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full border border-slate-100 ease-out duration-300">
              
              {/* Green Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-6 text-white text-center relative leading-none">
                <div className="h-14 w-14 bg-white/10 p-2 rounded-full backdrop-blur-md mx-auto mb-3.5 border border-white/20 flex items-center justify-center shadow-inner">
                  <MessageSquare className="h-7 w-7 text-white animate-pulse" />
                </div>
                <button 
                  onClick={onCloseModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors text-xs font-bold font-mono"
                >
                  ✕
                </button>
                <h3 className="font-display font-bold text-lg sm:text-xl">Secretaría Académica ASIECO</h3>
                <p className="text-xs text-emerald-100/90 mt-1.5 font-light leading-relaxed">Resuelve tus dudas sobre matrículas, temarios y facilidades de acceso al instante.</p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Doctor Full Name */}
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Ej. Dr. Carlos Mendoza" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none bg-slate-50/50 transition-all font-medium"
                    />
                  </div>

                  {/* Doctor Country */}
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      País de Residencia
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={studentCountry}
                      onChange={(e) => setStudentCountry(e.target.value)}
                      placeholder="Ej. México, Colombia, Perú" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none bg-slate-50/50 transition-all font-medium"
                    />
                  </div>

                  {/* Program of Interest Selector */}
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Programa de Interés
                    </label>
                    <select 
                      value={studentProgram}
                      onChange={(e) => setStudentProgram(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none bg-white transition-all font-medium"
                    >
                      <option value="Información General">Información General Institucional</option>
                      <option value="Ecografía Doppler Obstétrico">Ecografía Doppler Obstétrico</option>
                      <option value="Ecografía Gineco-Obstétrica">Ecografía Gineco-Obstétrica</option>
                      <option value="Ecografía Doppler Vascular">Ecografía Doppler Vascular</option>
                      <option value="Ecografía Pediátrica">Ecografía Pediátrica</option>
                      <option value="Ecografía Músculo-Esquelética">Ecografía Músculo-Esquelética</option>
                      <option value="Ecografía General">Ecografía General</option>
                    </select>
                  </div>

                  {/* Optional Short message */}
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Mensaje Adicional (Opcional)
                    </label>
                    <textarea 
                      rows={2}
                      value={studentMsg}
                      onChange={(e) => setStudentMsg(e.target.value)}
                      placeholder="Ej. Deseo conocer facilidades de pago, temarios completos y validez curricular." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none resize-none bg-slate-50/50 transition-all font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4.5 w-4.5" />
                    Iniciar chat en WhatsApp
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

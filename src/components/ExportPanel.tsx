/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Copy, Check, FileCode, Download, Settings, CloudLightning } from 'lucide-react';

interface ExportPanelProps {
  staticHtml: string;
  staticCss: string;
  staticJs: string;
}

export default function ExportPanel({ staticHtml, staticCss, staticJs }: ExportPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  const getActiveCode = () => {
    switch (activeTab) {
      case 'html': return staticHtml;
      case 'css': return staticCss;
      case 'js': return staticJs;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'html': return 'index.html';
      case 'css': return 'style.css';
      case 'js': return 'script.js';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const code = getActiveCode();
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = getFileName();
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating Badge to Trigger Panel */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#0A3C75] text-white hover:bg-[#082E5A] rounded-full shadow-2xl border border-sky-400/30 transition-transform hover:scale-105"
        id="export-floating-btn"
      >
        <FileCode className="h-5 w-5 text-sky-300 animate-spin-slow" />
        <span className="text-xs font-semibold uppercase tracking-wider">Código Estático</span>
      </button>

      {/* Modal / Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-950/60 backdrop-blur-sm">
          <div className="w-full max-w-4xl h-full bg-slate-900 text-slate-100 flex flex-col shadow-2xl animate-in fade-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0A3C75]/20 border border-[#0A3C75]/50 text-sky-400">
                  <CloudLightning className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Panel de Exportación ASIECO</h3>
                  <p class="text-xs text-slate-400">Archivos independientes optimizados para Vercel o Netlify</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-semibold"
              >
                Cerrar Panel
              </button>
            </div>

            {/* Instruction Banner */}
            <div className="px-6 py-4 bg-slate-950/40 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-white font-mono font-bold">1</span>
                <p>Crea una carpeta vacía y guarda los tres archivos correspondientes.</p>
              </div>
              <div className="flex gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-white font-mono font-bold">2</span>
                <p>Coloca la carpeta <code className="text-sky-300">assets</code> con las cuatro fotos generadas a la par de tus archivos.</p>
              </div>
              <div className="flex gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-white font-mono font-bold">3</span>
                <p>Arrastra la carpeta a <strong className="text-white">Vercel</strong> para lanzar al instante.</p>
              </div>
            </div>

            {/* Tabs & Actions */}
            <div className="px-6 py-3 border-b border-slate-850 flex flex-wrap items-center justify-between gap-4 bg-slate-950/20">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${activeTab === 'html' ? 'bg-[#0A3C75] text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  index.html
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${activeTab === 'css' ? 'bg-[#0A3C75] text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  style.css
                </button>
                <button
                  onClick={() => setActiveTab('js')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${activeTab === 'js' ? 'bg-[#0A3C75] text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  script.js
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copiado!' : 'Copiar Código'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A3C75] hover:bg-[#082E5A] text-xs font-medium text-white transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Descargar {getFileName()}
                </button>
              </div>
            </div>

            {/* Code editor body */}
            <div className="flex-1 overflow-auto p-6 font-mono text-xs text-slate-300 leading-relaxed bg-slate-950/80 select-all selection:bg-sky-500/30">
              <pre className="whitespace-pre-wrap">{getActiveCode()}</pre>
            </div>

            {/* Footer advice */}
            <div className="p-4 border-t border-slate-800 text-center text-xs text-slate-500 bg-slate-950">
              Desarrollado para la Asociación Interamericana de Ecografía (ASIECO) &bull; 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}

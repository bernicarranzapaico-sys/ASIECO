/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const STATIC_HTML = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASIECO - Asociación Interamericana de Ecografía</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- Tailwind CSS v4 Play CDN -->
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
  <style>
    body {
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    body.loaded {
      opacity: 1;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans shadow-inner">

  <!-- NAVEGACIÓN -->
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="#" class="flex items-center gap-3 group">
          <img src="assets/logo_asieco.png" alt="ASIECO Logo" class="h-12 w-auto object-contain transition-transform group-hover:scale-105">
          <div class="flex flex-col">
            <span class="font-display font-bold text-lg md:text-xl text-[#0A3C75] tracking-tight leading-none text-left">ASIECO</span>
            <span class="text-[10px] font-mono text-cyan-600 tracking-wider uppercase font-medium mt-1 text-left">Asociación Interamericana</span>
          </div>
        </a>

        <!-- Links Escritorio -->
        <div class="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#inicio" class="hover:text-[#0A3C75]">Inicio</a>
          <a href="#quienes-somos" class="hover:text-[#0A3C75]">Quiénes Somos</a>
          <a href="#programas" class="hover:text-[#0A3C75]">Programas</a>
          <a href="#docentes" class="hover:text-[#0A3C75]">Docentes</a>
          <a href="#certificacion" class="hover:text-[#0A3C75]">Certificación</a>
          <a href="#elegirnos" class="hover:text-[#0A3C75]">Por Qué Elegirnos</a>
        </div>

        <div class="hidden lg:flex items-center gap-4">
          <a href="#programas" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-50 text-[#0A3C75] border border-sky-100">Ver Cursos</a>
          <button onclick="openWhatsAppModal()" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#0A3C75] text-white hover:bg-[#0A3C75]/95 flex items-center gap-2">Contacto WhatsApp</button>
        </div>

        <!-- Botón Móvil -->
        <div class="flex lg:hidden items-center">
          <button onclick="toggleMobileMenu()" class="p-2 rounded-lg text-slate-500 hover:text-[#0A3C75] hover:bg-slate-100">
            <svg id="hamburger-icon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="close-icon" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú Móvil -->
    <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-100 bg-white shadow-lg">
      <div class="px-4 pt-2 pb-6 space-y-3">
        <a href="#inicio" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Inicio</a>
        <a href="#quienes-somos" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Quiénes Somos</a>
        <a href="#programas" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Programas</a>
        <a href="#docentes" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Docentes</a>
        <a href="#certificacion" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Certificación</a>
        <a href="#elegirnos" onclick="toggleMobileMenu()" class="block px-3 py-2 rounded-lg text-slate-600 hover:bg-sky-50">Por Qué Elegirnos</a>
        <div class="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <a href="#programas" onclick="toggleMobileMenu()" class="text-center px-4 py-3 bg-sky-50 text-[#0A3C75] rounded-lg text-sm">Ver Cursos</a>
          <button onclick="openWhatsAppModal(); toggleMobileMenu()" class="text-center px-4 py-3 bg-[#0A3C75] text-white rounded-lg text-sm flex justify-center gap-2">Contacto WhatsApp</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- SECCIÓN 1: ENCABEZADO / HERO -->
  <header id="inicio" class="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28">
    <div class="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 flex flex-col items-start text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-[#0a3c75] text-xs font-mono font-semibold mb-6 uppercase">
            <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Formación Médica Continua
          </div>
          <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-5xl text-slate-950 tracking-tight leading-none mb-6">
            ASIECO – <span class="text-[#0A3C75]">Asociación Interamericana</span> de Ecografía
          </h1>
          <p class="font-display font-semibold text-lg text-slate-700 tracking-tight mb-4">
            Formación médica continua en ecografía para profesionales de habla hispana.
          </p>
          <p class="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
            Capacitamos a médicos y profesionales de la salud mediante programas virtuales de alto nivel, con docentes especializados, análisis de casos prácticos y certificación digital con respaldo institucional.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#programas" class="px-8 py-4 bg-[#0A3C75] text-white hover:bg-[#072a53] shadow-lg rounded-xl font-semibold text-center">Ver programas</a>
            <a href="#quienes-somos" class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 text-center">Conocer la institución</a>
          </div>
        </div>
        <div class="lg:col-span-5 relative mt-6 lg:mt-0">
          <div class="bg-white p-3 rounded-3xl border border-slate-100 shadow-xl">
            <img src="assets/hero_ultrasound.png" alt="Ecógrafo clínico" class="w-full h-auto object-cover rounded-2xl aspect-[4/3]">
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-4 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm font-medium">
        “Educación médica continua en ecografía, con enfoque práctico y clínico.”
      </div>
    </div>
  </header>

  <!-- SECCIÓN 2: QUIÉNES SOMOS -->
  <section id="quienes-somos" class="relative py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <img src="assets/hero_ultrasound.png" alt="Hospital ecografía" class="w-full h-auto object-cover rounded-3xl aspect-[3/4] shadow-lg">
        </div>
        <div class="lg:col-span-7 flex flex-col text-left">
          <h2 class="font-display font-bold text-3xl text-slate-950 mb-6">¿Quiénes somos?</h2>
          <div class="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            <p><strong>ASIECO</strong> es una institución orientada a la formación médica continua en ecografía, creada para brindar capacitación accesible, práctica y actualizada a profesionales de la salud en Latinoamérica y otros países de habla hispana.</p>
            <p class="border-l-4 border-sky-450 pl-4 bg-sky-50/50 py-3 rounded-r-lg">Nuestro enfoque combina teoría, práctica clínica, casos reales y acompañamiento académico para fortalecer las competencias del profesional médico en diagnóstico por imágenes.</p>
          </div>
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-md">
            <h3 class="font-display font-semibold text-[#0A3C75] border-b pb-3 mb-4 text-sm tracking-wide">NUESTRA ESENCIA</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <span class="flex items-center gap-2">🔹 Formación médica continua</span>
              <span class="flex items-center gap-2">🔹 Enfoque práctico y clínico</span>
              <span class="flex items-center gap-2">🔹 Programas virtuales</span>
              <span class="flex items-center gap-2">🔹 Docentes especializados</span>
              <span class="flex items-center gap-2">🔹 Certificación digital</span>
              <span class="flex items-center gap-2">🔹 Comunidad académica</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm">
        <strong class="text-sky-300">FORMACIÓN CON PROPÓSITO:</strong> Acercamos la educación médica especializada a profesionales que buscan actualizarse y mejorar su práctica clínica.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 3: PROGRAMAS -->
  <section id="programas" class="relative py-24 bg-white">
    <!-- El contenido del grid y tarjetas se autocompleta de manera similar en index.html -->
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="font-display font-bold text-3xl mb-8">Programas académicos</h2>
      <p class="text-slate-600 max-w-xl mx-auto mb-10">Cursos virtuales diseñados para fortalecer tus habilidades clínicas en ecografía.</p>
      <!-- ... (Ver index.html completo para revisar tarjetas e integraciones) -->
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs sm:text-sm">
        <strong class="text-sky-300">APRENDIZAJE FLEXIBLE Y ESPECIALIZADO:</strong> Accede a programas diseñados para médicos, residentes y profesionales que desean actualizarse en ecografía.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 4: DOCENTES -->
  <section id="docentes" class="relative py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="font-display font-bold text-3xl mb-12">Docentes especializados</h2>
      <!-- ... (Ver index.html completo para revisar tarjetas de docentes) -->
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs sm:text-sm">
        <strong class="text-sky-300">DOCENTES CON ENFOQUE CLÍNICO:</strong> Nuestros programas son guiados por profesionales con experiencia en el área médica y académica.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 5: CERTIFICACIÓN -->
  <section id="certificacion" class="relative py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="font-display font-bold text-3xl mb-12">Certificación digital</h2>
      <!-- ... (Ver index.html completo para revisar de certificación) -->
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs sm:text-sm">
        <strong class="text-sky-300">RESPALDO PARA TU CRECIMIENTO PROFESIONAL:</strong> Impulsamos la formación continua de profesionales de la salud mediante programas virtuales.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 6: POR QUÉ ELEGIR ASIECO -->
  <section id="elegirnos" class="relative py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="font-display font-bold text-3xl mb-12">¿Por qué elegir ASIECO?</h2>
      <!-- ... (Ver index.html completo para cuadrículas de beneficios) -->
    </div>
    <div class="absolute bottom-0 w-full bg-[#0A3C75] py-5 text-white">
      <div class="max-w-7xl mx-auto px-4 text-center text-xs sm:text-sm">
        <strong class="text-sky-300">EDUCACIÓN MÉDICA AL ALCANCE DE MÁS PROFESIONALES:</strong> ASIECO conecta conocimiento, práctica clínica y tecnología para mejorar la formación en ecografía.
      </div>
    </div>
  </section>

  <!-- SECCIÓN 7: LLAMADO A LA ACCIÓN -->
  <section class="bg-[#0A2952] py-24 text-white text-center">
    <h2 class="font-display text-3xl md:text-4xl font-bold mb-6">Actualiza tus conocimientos en ecografía con ASIECO</h2>
    <p class="text-sky-100 max-w-xl mx-auto mb-10 leading-relaxed font-light">Explora nuestros programas académicos y fortalece tu práctica clínica con formación médica continua.</p>
    <div class="flex justify-center gap-4">
      <a href="#programas" class="px-6 py-3 bg-sky-500 rounded-lg text-sm font-bold">Ver programas</a>
      <button onclick="openWhatsAppModal()" class="px-6 py-3 bg-emerald-600 rounded-lg text-sm font-bold">WhatsApp</button>
    </div>
  </section>

  <!-- MODAL DE CURSO -->
  <div id="program-modal" class="fixed inset-0 z-50 overflow-y-auto hidden">
    <!-- Contenido dinámico cargado del script -->
  </div>

  <!-- MODAL WHATSAPP -->
  <div id="whatsapp-modal" class="fixed inset-0 z-50 overflow-y-auto hidden">
    <!-- Formulario completo -->
  </div>

  <script src="script.js"></script>
</body>
</html>`;

export const STATIC_CSS = `/* ASIECO - Asociación Interamericana de Ecografía
   Estilos personalizados y animaciones avanzadas */

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-bounce-slow {
  animation: bounceSlow 4s ease-in-out infinite;
}

#program-modal, #whatsapp-modal {
  transition: opacity 0.3s ease;
}

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, h4, .font-display {
  font-family: 'Outfit', sans-serif;
}

.syllabus-item {
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.syllabus-item:hover {
  transform: translateX(4.5px);
  background-color: #f1f5f9;
}

.shadow-premium {
  box-shadow: 0 10px 30px -5px rgba(10, 60, 117, 0.08);
}

.shadow-premium-xl {
  box-shadow: 0 20px 40px -8px rgba(10, 60, 117, 0.12);
}

.text-brand-blue { color: #0A3C75; }
.bg-brand-blue { background-color: #0A3C75; }
.border-brand-blue { border-color: #0A3C75; }

a, button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }`;

export const STATIC_JS = `// Datos Académicos detallados de los cursos
const programDatabase = {
  'ecografia-doppler-obstetrico': {
    name: 'Ecografía Doppler Obstétrico',
    desc: 'Estudio integral del flujo sanguíneo feto-placentario para evaluar el bienestar fetal y diagnosticar preeclampsia u otras afecciones de alta complejidad vascular en el embarazo.',
    syllabus: [
      'Módulo 1: Principios físicos del ultrasonido Doppler y hemodinámica fetal.',
      'Módulo 2: Evaluación Doppler de la arteria umbilical y arteria cerebral media.',
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
      'Módulo 5: Evaluación de placenta, líquido amniótico y longitud cervical.'
    ]
  },
  'ecografia-doppler-vascular': {
    name: 'Ecografía Doppler Vascular',
    desc: 'Principios físicos, hemodinámicos y clínicos de la ecografía Doppler aplicados a la evaluación y mapeo arterial y venoso periférico.',
    syllabus: [
      'Módulo 1: Física del espectro de onda Doppler arterial y hemodinámica sanguínea.',
      'Módulo 2: Doppler de carótida y arterias vertebrales: cuantificación de estenosis.',
      'Módulo 3: Mapeo venoso de miembros inferiores para la evaluación de insuficiencia o varices.',
      'Módulo 4: Diagnóstico rápido de Trombosis Venosa Profunda (TVP).',
      'Módulo 5: Doppler periférico de extremidades inferiores.'
    ]
  },
  'ecografia-pediatrica': {
    name: 'Ecografía Pediátrica',
    desc: 'Profundiza en las particularidades anatómicas del neonato, lactante y paciente pediátrico, abarcando ecografía transfontanelar, abdominal y cadera infantil.',
    syllabus: [
      'Módulo 1: Ecografía cerebral transfontanelar en neonatología clínica.',
      'Módulo 2: Cribado sistemático del canal pilórico y reflujo gastroesofágico pediátrico.',
      'Módulo 3: Evaluación de la displasia en desarrollo de la cadera infantil (Método de Graf).',
      'Módulo 4: Ecografía abdominal y renal en pediatría: anomalías congénitas recurrentes.',
      'Módulo 5: Diagnóstico diferencial de escroto agudo y apendicitis en niños.'
    ]
  },
  'ecografia-musculo-esqueletica': {
    name: 'Ecografía Músculo-Esquelética',
    desc: 'Mapeo de alta resolución para estructuras articulares, tendones, ligamentos y músculos, fundamental para médicos especialistas en rehabilitación, medicina deportiva y reumatología.',
    syllabus: [
      'Módulo 1: Ecografía de hombro: manguito rotador, tendón bicipital y espacio subacromial.',
      'Módulo 2: Ecografía de rodilla: ligamentos colaterales, meniscos, tendón rotuliano y derrame.',
      'Módulo 3: Ecografía de codo y muñeca: túnel carpiano, tendones extensores y flexores.',
      'Módulo 4: Ecografía de tobillo y pie: fascia plantar, tendón de Aquiles y ligamentos.',
      'Módulo 5: Identificación de desgarros, hematomas y quistes musculares.'
    ]
  },
  'ecografia-general': {
    name: 'Ecografía General',
    desc: 'Módulo integral que asienta las bases de la ecografía abdominal, renal, pélvica, tiroidea, de partes blandas y escrotal para el médico general, clínico o intensivista.',
    syllabus: [
      'Módulo 1: Ecografía de hígado y vías biliares: colelitiasis y esteatosis hepática.',
      'Módulo 2: Evaluación renal y retroperitoneo: litiasis, quistes e hidronefrosis.',
      'Módulo 3: Ecografía de tiroides y glándula mamaria: clasificación TIRADS y BIRADS.',
      'Módulo 4: Protocolo FAST (Focused Assessment with Sonography for Trauma) para urgencias.',
      'Módulo 5: Ultrasonido ginecológico transabdominal básico.'
    ]
  }
};

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hgIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    hgIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    hgIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}

function displayProgramDetails(programKey) {
  const program = programDatabase[programKey];
  if (!program) return;
  document.getElementById('modal-program-name').innerText = program.name;
  document.getElementById('modal-program-desc').innerText = program.desc;
  const syllabusList = document.getElementById('modal-program-syllabus');
  syllabusList.innerHTML = '';
  program.syllabus.forEach(item => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2.5 p-2 rounded-lg syllabus-item border border-slate-100 hover:shadow-sm';
    li.innerHTML = \`<span class="text-sky-500 font-bold text-base select-none">&bull;</span><span class="text-slate-700 font-medium">\${item}</span>\`;
    syllabusList.appendChild(li);
  });
  document.getElementById('studentProgram').value = program.name;
  const modal = document.getElementById('program-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProgramModal() {
  const modal = document.getElementById('program-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function openWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function contactProgramInquiry() {
  const programFocused = document.getElementById('modal-program-name').innerText;
  document.getElementById('studentProgram').value = programFocused;
  closeProgramModal();
  openWhatsAppModal();
}

function sendWhatsAppMsg(event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const country = document.getElementById('studentCountry').value.trim();
  const program = document.getElementById('studentProgram').value;
  const rawMsg = document.getElementById('studentMsg').value.trim();
  let whatsappMsg = \`Hola ASIECO. Mi nombre es \${name}, soy de \${country}. Estoy interesado en recibir información académica sobre el programa: *\${program}*.\`;
  if (rawMsg) whatsappMsg += \`\\n\\nMensaje adicional: "\${rawMsg}"\`;
  const encodedMsg = encodeURIComponent(whatsappMsg);
  const whatsappUrl = \`https://wa.me/51900000000?text=\${encodedMsg}\`;
  window.open(whatsappUrl, '_blank');
  document.getElementById('studentName').value = '';
  document.getElementById('studentCountry').value = '';
  document.getElementById('studentMsg').value = '';
  closeWhatsAppModal();
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});`;

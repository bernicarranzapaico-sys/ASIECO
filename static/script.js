// Datos Académicos detallados de los cursos
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

// Toggle Menú Móvil
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

// Abrir Modal de Curso
function displayProgramDetails(programKey) {
  const program = programDatabase[programKey];
  if (!program) return;

  // Llenar datos de modal
  document.getElementById('modal-program-name').innerText = program.name;
  document.getElementById('modal-program-desc').innerText = program.desc;

  const syllabusList = document.getElementById('modal-program-syllabus');
  syllabusList.innerHTML = ''; // Limpiar previo

  program.syllabus.forEach(item => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2.5 p-2 rounded-lg syllabus-item border border-slate-100 hover:shadow-sm';
    li.innerHTML = `
      <span class="text-sky-500 font-bold text-base select-none">&bull;</span>
      <span class="text-slate-700 font-medium">${item}</span>
    `;
    syllabusList.appendChild(li);
  });

  // Pre-seleccionar en el selector de whatsapp por comodidad
  document.getElementById('studentProgram').value = program.name;

  // Mostrar modal
  const modal = document.getElementById('program-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Detener scroll
}

// Cerrar Modal de Curso
function closeProgramModal() {
  const modal = document.getElementById('program-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restaurar scroll
}

// Abrir Modal de WhatsApp
function openWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Cerrar Modal de WhatsApp
function closeWhatsAppModal() {
  const modal = document.getElementById('whatsapp-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Enlace de llamada desde el modal para pre-inquirir
function contactProgramInquiry() {
  const programFocused = document.getElementById('modal-program-name').innerText;
  document.getElementById('studentProgram').value = programFocused;
  
  closeProgramModal();
  openWhatsAppModal();
}

// Enviar Mensaje a WhatsApp con API
function sendWhatsAppMsg(event) {
  event.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const country = document.getElementById('studentCountry').value.trim();
  const program = document.getElementById('studentProgram').value;
  const rawMsg = document.getElementById('studentMsg').value.trim();

  // Armar texto
  let whatsappMsg = `Hola ASIECO. Mi nombre es ${name}, soy de ${country}. Estoy interesado en recibir información académica sobre el programa: *${program}*.`;
  if (rawMsg) {
    whatsappMsg += `\n\nMensaje adicional: "${rawMsg}"`;
  }

  // API url (Número hipotético o el de enlace oficial general, use +1 or standard, lets construct standard prompt string)
  const encodedMsg = encodeURIComponent(whatsappMsg);
  const whatsappUrl = `https://wa.me/51900000000?text=${encodedMsg}`; // Enlace general que el usuario adaptará con su número de teléfono

  // Abrir en pestaña nueva
  window.open(whatsappUrl, '_blank');
  
  // Limpiar campos y cerrar
  document.getElementById('studentName').value = '';
  document.getElementById('studentCountry').value = '';
  document.getElementById('studentMsg').value = '';
  closeWhatsAppModal();
}

// Activar cuerpo del documento al cargar para evitar FOUC
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

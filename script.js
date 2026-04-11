// ============================================
// script.js - Adaptado para tu formato de preguntas
// ============================================

// Diccionario para almacenar todas las preguntas por asignatura
const preguntasPorAsignatura = {};

// Función para registrar preguntas de cada archivo (ADAPTADA a tu formato)
function registrarAsignatura(nombre, preguntas) {
    // Convertir tus preguntas al formato interno
    const preguntasConvertidas = preguntas.map((p, idx) => {
        // Determinar nivel según diff
        let nivel = "basico";
        if (p.diff === "easy") nivel = "basico";
        else if (p.diff === "medium") nivel = "intermedio";
        else if (p.diff === "hard") nivel = "avanzado";
        else if (p.diff === "experto") nivel = "experto";
        
        return {
            id: p.id || idx + 1,
            texto: p.q || p.texto,
            opciones: p.opts || p.opciones,
            correcta: p.ans !== undefined ? p.ans : p.correcta,
            nivel: nivel,
            esDelProfe: p.profe === true,
            explicacion: p.exp || p.explicacion || "Sin explicación disponible",
            unit: p.unit || "",
            case: p.case || ""
        };
    });
    
    preguntasPorAsignatura[nombre] = preguntasConvertidas;
    console.log(`✅ Cargada: ${nombre} (${preguntasConvertidas.length} preguntas)`);
}

// Variables globales
let asignaturaActual = 'seg';
let preguntasActuales = [];
let respuestasUsuario = [];
let modoNiveles = false;
let nivelSeleccionado = 'basico';
let cantidadPreguntas = 999;
let preguntaActualIndex = 0;

// Al cargar la página, verificar qué asignaturas están disponibles
window.addEventListener('DOMContentLoaded', () => {
    actualizarInfoAsignatura();
    
    // Mostrar qué asignaturas se cargaron
    console.log("Asignaturas cargadas:", Object.keys(preguntasPorAsignatura));
});

function actualizarInfoAsignatura() {
    const preguntas = preguntasPorAsignatura[asignaturaActual];
    if (preguntas) {
        document.getElementById('info-q').innerText = preguntas.length;
    } else {
        document.getElementById('info-q').innerText = '0';
    }
}

function selectSubject(asignatura) {
    asignaturaActual = asignatura;
    
    // Actualizar UI de tarjetas
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });
    const cardSeleccionada = document.getElementById(`card-${asignatura}`);
    if (cardSeleccionada) {
        cardSeleccionada.classList.add('selected');
    }
    
    actualizarInfoAsignatura();
}

function setCount(cantidad) {
    cantidadPreguntas = cantidad;
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    if (event && event.target) {
        event.target.classList.add('selected');
    }
}

function toggleMode() {
    const modo = document.querySelector('input[name="studyMode"]:checked').value;
    modoNiveles = (modo === 'levels');
    document.getElementById('levelPanel').style.display = modoNiveles ? 'block' : 'none';
}

function selectLevel(nivel) {
    nivelSeleccionado = nivel;
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.style.background = '';
        btn.style.color = '';
    });
    const btn = document.getElementById(`level${nivel.charAt(0).toUpperCase() + nivel.slice(1)}`);
    if (btn) {
        btn.style.background = '#b8a3d8';
        btn.style.color = 'white';
    }
    document.getElementById('levelStatus').innerText = `Nivel ${nivel} seleccionado`;
}

function startQuiz() {
    const preguntasDisponibles = preguntasPorAsignatura[asignaturaActual];
    
    if (!preguntasDisponibles || preguntasDisponibles.length === 0) {
        // Ventana modal personalizada con imagen
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '9999';
        
        modal.innerHTML = `
            <div style="background: white; border-radius: 20px; padding: 2rem; text-align: center; max-width: 400px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                <img src="https://png.pngtree.com/png-clipart/20250501/original/pngtree-3d-cartoon-girl-sleeping-on-bed-png-image_20915456.png" style="width: 80px; height: 80px; margin-bottom: 1rem;">
                <h3 style="margin-bottom: 1rem;">Por flojera</h3>
                <p style="margin-bottom: 1rem; color: #555;">La asignatura "${asignaturaActual}" aún no tiene preguntas cargadas.</p>
                <p style="margin-bottom: 1.5rem; font-size: 0.9rem;">De a poquito voy poniendo las preguntas en el cuestionario...<br>Porque somos felices, con poco</p>
                <button onclick="this.parentElement.parentElement.remove()" style="background: #b8a3d8; color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 25px; cursor: pointer;">Entendido</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        return;
    }
    
    console.log(`Iniciando quiz con ${preguntasDisponibles.length} preguntas`);
    
    // Filtrar por nivel si está activado
    let preguntasFiltradas = [...preguntasDisponibles];
    if (modoNiveles) {
        preguntasFiltradas = preguntasDisponibles.filter(p => p.nivel === nivelSeleccionado);
        if (preguntasFiltradas.length === 0) {
            alert(`No hay preguntas del nivel ${nivelSeleccionado} en esta asignatura`);
            return;
        }
    }
    
    // Separar preguntas del profe y normales
    const profeQuestions = preguntasFiltradas.filter(p => p.esDelProfe === true);
    const normalQuestions = preguntasFiltradas.filter(p => p.esDelProfe !== true);
    
    console.log(`Del profe: ${profeQuestions.length}, Normales: ${normalQuestions.length}`);
    
    // Ordenar: profes primero, luego mezclar normales
    let preguntasOrdenadas = [...profeQuestions];
    const shuffledNormales = [...normalQuestions];
    for (let i = shuffledNormales.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNormales[i], shuffledNormales[j]] = [shuffledNormales[j], shuffledNormales[i]];
    }
    preguntasOrdenadas.push(...shuffledNormales);
    
    // Limitar cantidad
    let limite = cantidadPreguntas === 999 ? preguntasOrdenadas.length : Math.min(cantidadPreguntas, preguntasOrdenadas.length);
    preguntasActuales = preguntasOrdenadas.slice(0, limite);
    
    console.log(`Total preguntas en sesión: ${preguntasActuales.length}`);
    
    // Mezclar opciones de cada pregunta
    preguntasActuales = preguntasActuales.map(p => {
        const opcionesConIndices = p.opciones.map((opt, idx) => ({ texto: opt, originalIdx: idx }));
        for (let i = opcionesConIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesConIndices[i], opcionesConIndices[j]] = [opcionesConIndices[j], opcionesConIndices[i]];
        }
        const nuevaCorrecta = opcionesConIndices.findIndex(opt => opt.originalIdx === p.correcta);
        return {
            ...p,
            opciones: opcionesConIndices.map(opt => opt.texto),
            correcta: nuevaCorrecta
        };
    });
    
    // Inicializar respuestas
    respuestasUsuario = new Array(preguntasActuales.length).fill(null);
    
    // Mostrar pantalla de quiz
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-quiz').classList.add('active');
    
    // Resetear progreso
    preguntaActualIndex = 0;
    actualizarProgreso();
    renderizarDots();
    mostrarPregunta(0);
}

function actualizarProgreso() {
    const respondidas = respuestasUsuario.filter(r => r !== null).length;
    const porcentaje = preguntasActuales.length > 0 ? (respondidas / preguntasActuales.length) * 100 : 0;
    const fillBar = document.getElementById('prog-fill');
    if (fillBar) fillBar.style.width = `${porcentaje}%`;
    const progLabel = document.getElementById('prog-label');
    if (progLabel) progLabel.innerText = `${respondidas} / ${preguntasActuales.length}`;
    const progPct = document.getElementById('prog-pct');
    if (progPct) progPct.innerText = `${Math.round(porcentaje)}%`;
}

function renderizarDots() {
    const container = document.getElementById('dots-container');
    if (!container) return;
    container.innerHTML = '';
    preguntasActuales.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.innerText = idx + 1;
        if (respuestasUsuario[idx] !== null) {
            const esCorrecta = (respuestasUsuario[idx] === preguntasActuales[idx].correcta);
            dot.classList.add(esCorrecta ? 'answered-c' : 'answered-w');
        }
        dot.onclick = () => irAPregunta(idx);
        container.appendChild(dot);
    });
}

function mostrarPregunta(index) {
    preguntaActualIndex = index;
    const pregunta = preguntasActuales[index];
    const container = document.getElementById('question-area');
    if (!container) return;
    
    // Actualizar dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.remove('current');
        if (i === index) dot.classList.add('current');
    });
    
    // Determinar nivel de dificultad para mostrar
    let nivelTexto = '';
    let nivelClase = '';
    switch(pregunta.nivel) {
        case 'basico': nivelTexto = 'Básico'; nivelClase = 'easy'; break;
        case 'intermedio': nivelTexto = 'Intermedio'; nivelClase = 'medium'; break;
        case 'avanzado': nivelTexto = 'Avanzado'; nivelClase = 'hard'; break;
        case 'experto': nivelTexto = 'Experto'; nivelClase = 'hard'; break;
        default: nivelTexto = 'General'; nivelClase = 'easy';
    }
    
    const respuestaGuardada = respuestasUsuario[index];
    const yaRespondida = respuestaGuardada !== null;
    
    let opcionesHTML = '';
    const letras = ['A', 'B', 'C', 'D'];
    pregunta.opciones.forEach((opt, optIdx) => {
        let claseExtra = '';
        let onclickAttr = '';
        if (yaRespondida) {
            if (optIdx === pregunta.correcta) claseExtra = 'correct';
            if (optIdx === respuestaGuardada && respuestaGuardada !== pregunta.correcta) claseExtra = 'wrong';
            onclickAttr = '';
        } else {
            onclickAttr = `onclick="responderPregunta(${index}, ${optIdx})"`;
        }
        opcionesHTML += `
            <div class="opt-btn ${claseExtra}" ${onclickAttr}>
                <div class="opt-letter">${letras[optIdx]}</div>
                <div>${opt}</div>
            </div>
        `;
    });
    
    let feedbackHTML = '';
    if (yaRespondida) {
        const esCorrecta = (respuestaGuardada === pregunta.correcta);
        feedbackHTML = `
            <div class="feedback show ${esCorrecta ? 'correct-fb' : 'wrong-fb'}">
                <strong>${esCorrecta ? '✓ Correcto' : '✗ Incorrecto'}</strong>
                ${pregunta.explicacion || (esCorrecta ? '¡Bien respondido!' : `La respuesta correcta era: ${pregunta.opciones[pregunta.correcta]}`)}
            </div>
        `;
    }
    
    // Mostrar caso práctico si existe
    let caseHTML = '';
    if (pregunta.case) {
        caseHTML = `<div class="case-box">📖 <strong>Caso práctico:</strong> ${pregunta.case}</div>`;
    }
    
    container.innerHTML = `
        <div class="q-card">
            <div class="q-meta">
                <span class="q-num">Pregunta ${index + 1} / ${preguntasActuales.length}</span>
                <span class="q-diff ${nivelClase}">⭐ ${nivelTexto}</span>
                ${pregunta.esDelProfe ? '<span class="q-profe">🎓 Del Profesor</span>' : ''}
                ${pregunta.unit ? `<span class="q-unit">📚 ${pregunta.unit}</span>` : ''}
            </div>
            ${caseHTML}
            <div class="q-text">${pregunta.texto}</div>
            <div class="options">
                ${opcionesHTML}
            </div>
            ${feedbackHTML}
        </div>
    `;
    
    // Actualizar botones de navegación
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFinish = document.getElementById('btn-finish');
    
    if (btnPrev) btnPrev.disabled = (index === 0);
    
    const esUltima = (index === preguntasActuales.length - 1);
    if (esUltima) {
        if (btnNext) btnNext.style.display = 'none';
        if (btnFinish) {
            btnFinish.style.display = 'inline-flex';
            const todasRespondidas = respuestasUsuario.every(r => r !== null);
            btnFinish.disabled = !todasRespondidas;
        }
    } else {
        if (btnNext) {
            btnNext.style.display = 'inline-flex';
            btnNext.disabled = !yaRespondida;
        }
        if (btnFinish) btnFinish.style.display = 'none';
    }
}

function responderPregunta(index, opcionSeleccionada) {
    if (respuestasUsuario[index] !== null) return;
    
    respuestasUsuario[index] = opcionSeleccionada;
    actualizarProgreso();
    renderizarDots();
    mostrarPregunta(index);
}

function irAPregunta(index) {
    mostrarPregunta(index);
}

function nextQ() {
    if (preguntaActualIndex < preguntasActuales.length - 1) {
        mostrarPregunta(preguntaActualIndex + 1);
    }
}

function prevQ() {
    if (preguntaActualIndex > 0) {
        mostrarPregunta(preguntaActualIndex - 1);
    }
}

function finishQuiz() {
    // Calcular resultados
    let correctas = 0;
    preguntasActuales.forEach((preg, idx) => {
        if (respuestasUsuario[idx] === preg.correcta) correctas++;
    });
    
    const total = preguntasActuales.length;
    const porcentaje = (correctas / total) * 100;
    const nota = 1.0 + (porcentaje / 100) * 6.0;
    const notaFinal = Math.round(nota * 10) / 10;
    
    let mensaje = '';
    if (notaFinal >= 6.0) mensaje = '🎉 ¡Excelente! Sigue así.';
    else if (notaFinal >= 5.0) mensaje = '👍 Muy bien, pero puedes mejorar.';
    else if (notaFinal >= 4.0) mensaje = '📚 A estudiar un poco más.';
    else mensaje = '💪 No te rindas, repasa y vuelve a intentarlo.';
    
    const gradeEl = document.getElementById('res-grade');
    if (gradeEl) gradeEl.innerHTML = notaFinal;
    const correctEl = document.getElementById('res-correct');
    if (correctEl) correctEl.innerText = `${correctas}/${total}`;
    const wrongEl = document.getElementById('res-wrong');
    if (wrongEl) wrongEl.innerText = `${total - correctas}/${total}`;
    const pctEl = document.getElementById('res-pct');
    if (pctEl) pctEl.innerText = `${Math.round(porcentaje)}%`;
    const msgEl = document.getElementById('res-msg');
    if (msgEl) msgEl.innerText = mensaje;
    
    // Generar revisión
    let reviewHTML = '<h3>📋 Revisión de respuestas</h3>';
    preguntasActuales.forEach((preg, idx) => {
        const userResp = respuestasUsuario[idx];
        const esCorrecta = (userResp === preg.correcta);
        reviewHTML += `
            <div class="review-item ${esCorrecta ? 'r-correct' : 'r-wrong'}">
                <div class="review-q"><strong>${idx + 1}.</strong> ${preg.texto}</div>
                <div class="review-ans">📌 Tu respuesta: ${preg.opciones[userResp] || 'Sin responder'}</div>
                ${!esCorrecta ? `<div class="review-ans">✅ Correcta: ${preg.opciones[preg.correcta]}</div>` : ''}
                ${preg.explicacion ? `<div class="review-exp">💡 ${preg.explicacion}</div>` : ''}
            </div>
        `;
    });
    
    const reviewArea = document.getElementById('review-area');
    if (reviewArea) reviewArea.innerHTML = reviewHTML;
    
    // Mostrar pantalla de resultados
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const resultScreen = document.getElementById('screen-result');
    if (resultScreen) resultScreen.classList.add('active');
}

function restartSame() {
    startQuiz();
}

function goHome() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const startScreen = document.getElementById('screen-start');
    if (startScreen) startScreen.classList.add('active');
    const fillBar = document.getElementById('prog-fill');
    if (fillBar) fillBar.style.width = '0%';
}

// Exponer funciones globalmente
window.selectSubject = selectSubject;
window.setCount = setCount;
window.toggleMode = toggleMode;
window.selectLevel = selectLevel;
window.startQuiz = startQuiz;
window.responderPregunta = responderPregunta;
window.nextQ = nextQ;
window.prevQ = prevQ;
window.finishQuiz = finishQuiz;
window.restartSame = restartSame;
window.goHome = goHome;
window.irAPregunta = irAPregunta;
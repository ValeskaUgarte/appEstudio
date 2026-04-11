// Cuestionario Completo - Fundamentos de Metodologías Ágiles (Unidad 1)
// Basado en las 12 clases proporcionadas

// =================================================================
// CUESTIONARIO COMPLETO - FUNDAMENTOS DE METODOLOGÍAS ÁGILES
// Unidad 1 - 12 Clases
// Total: 130+ preguntas (easy, medium, hard)
// =================================================================

window.BANK = window.BANK || {};
BANK.metodologia = [

    // ==================== CLASE 1: MANIFIESTO ÁGIL (15 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál fue el principal problema que impulsó la búsqueda de alternativas a los modelos tradicionales de desarrollo de software?",
        opts: ["La falta de herramientas de programación", "La crisis del software, caracterizada por sobrecostos, retrasos y productos desalineados", "La ausencia de metodologías de gestión", "El exceso de comunicación entre equipos"],
        ans: 1, exp: "La crisis del software (1960-1990) evidenció que los modelos predictivos como el cascada generaban sobrecostos, retrasos considerables y productos que no satisfacían las necesidades reales del cliente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿En qué año y lugar se firmó el Manifiesto Ágil?",
        opts: ["1999 en Londres", "2001 en Snowbird, Utah", "2005 en Tokio", "1995 en Boston"],
        ans: 1, exp: "En febrero de 2001, diecisiete profesionales del desarrollo de software se reunieron en Snowbird, Utah, y firmaron el Manifiesto por el Desarrollo Ágil de Software."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuántos principios operativos componen el Manifiesto Ágil?",
        opts: ["4", "6", "10", "12"],
        ans: 3, exp: "El Manifiesto Ágil establece 4 valores fundamentales y 12 principios operativos que guían la toma de decisiones en proyectos de software."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "Según el Manifiesto Ágil, ¿cuál es la jerarquía de prioridades correcta?",
        opts: ["Procesos y herramientas sobre individuos e interacciones", "Documentación extensiva sobre software funcionando", "Individuos e interacciones sobre procesos y herramientas, y software funcionando sobre documentación extensiva", "Seguimiento de un plan sobre respuesta al cambio"],
        ans: 2, exp: "El Manifiesto establece cuatro valores: (1) Individuos e interacciones sobre procesos y herramientas, (2) Software funcionando sobre documentación extensiva, (3) Colaboración con el cliente sobre negociación contractual, (4) Respuesta al cambio sobre seguimiento de un plan."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué representa el valor 'Respuesta al cambio sobre seguimiento de un plan'?",
        opts: ["No se debe planificar nada", "En entornos dinámicos, la flexibilidad se valora más que la adherencia estricta a planes iniciales", "Los planes son inútiles", "Solo se planifica al inicio del proyecto"],
        ans: 1, exp: "Este valor reconoce que en entornos dinámicos y cambiantes, la capacidad de adaptarse es más valiosa que seguir ciegamente un plan inicial que puede quedar obsoleto."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál de los siguientes es uno de los 12 principios del Manifiesto Ágil?",
        opts: ["La documentación debe ser completa antes de codificar", "Los requerimientos no pueden cambiar después de la fase de análisis", "Entregar software funcional de forma frecuente (semanas en lugar de meses)", "El equipo debe seguir estrictamente el plan inicial"],
        ans: 2, exp: "Uno de los principios establece 'Entregar software funcional de forma frecuente, con un intervalo de semanas o meses, prefiriendo plazos más cortos'."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué fenómeno se caracterizó por sobrecostos, fallos técnicos y entrega de productos incompletos durante las décadas de 1960-1990?",
        opts: ["La revolución digital", "La crisis del software", "El efecto cascada", "La paradoja de la productividad"],
        ans: 1, exp: "La crisis del software fue el fenómeno que evidenció las limitaciones de los modelos tradicionales, con proyectos que duplicaban presupuestos, sufrían retrasos y no satisfacían los requerimientos funcionales."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál de los siguientes NO es uno de los firmantes originales del Manifiesto Ágil?",
        opts: ["Kent Beck", "Martin Fowler", "Bill Gates", "Ken Schwaber"],
        ans: 2, exp: "Los firmantes incluyen a Kent Beck, Martin Fowler, Ken Schwaber, Jeff Sutherland, Alistair Cockburn, entre otros. Bill Gates no fue firmante del Manifiesto Ágil."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué modelo tradicional representa paradigmáticamente el enfoque predictivo y secuencial?",
        opts: ["SCRUM", "Kanban", "Modelo en cascada (Waterfall)", "XP"],
        ans: 2, exp: "El modelo en cascada (Waterfall) representa el enfoque tradicional donde las fases de análisis, diseño, implementación, pruebas y mantenimiento se ejecutan de forma lineal y sin retroalimentación temprana."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué modelos surgieron como primeras aproximaciones iterativas antes del Manifiesto Ágil?",
        opts: ["SCRUM y Kanban", "Prototipado Rápido (RAD) y Rational Unified Process (RUP)", "Waterfall y V-Model", "Lean y Six Sigma"],
        ans: 1, exp: "El Prototipado Rápido (RAD) y el Rational Unified Process (RUP) introdujeron ciclos iterativos e incrementales, aunque aún conservaban carga burocrática que limitaba su agilidad real."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué problema presentaban el RAD y RUP a pesar de ser iterativos?",
        opts: ["No permitían ningún tipo de retroalimentación", "Conservaban una carga burocrática y documental pesada que limitaba su agilidad real", "Eran exclusivamente para proyectos pequeños", "No incluían pruebas de software"],
        ans: 1, exp: "Aunque introdujeron ciclos iterativos, aún conservaban una carga burocrática y documental pesada que limitaba su agilidad real."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué aspecto NO caracterizaba a los proyectos durante la crisis del software?",
        opts: ["Retrasos considerables", "Presupuestos que duplicaban su estimación inicial", "Alta satisfacción del cliente", "Mínima interacción entre usuarios finales y equipos de desarrollo"],
        ans: 2, exp: "Durante la crisis del software, los productos frecuentemente no satisfacían los requerimientos funcionales, generando baja satisfacción del cliente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué prioriza el valor 'Software funcionando sobre documentación extensiva'?",
        opts: ["No documentar nada", "Entregar valor funcional y operativo al cliente antes que documentación excesiva", "Documentar solo al final", "La documentación es irrelevante"],
        ans: 1, exp: "Si bien la documentación es importante, lo esencial es entregar valor funcional y operativo al cliente. La documentación debe ser justo suficiente, no excesiva."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué problema genera la 'agilidad superficial' en las organizaciones?",
        opts: ["Usar metodologías ágiles sin modificar la estructura jerárquica ni empoderar realmente a los equipos", "Documentar demasiado", "Usar herramientas tradicionales", "No tener reuniones"],
        ans: 0, exp: "Muchas organizaciones fallan al adoptar una 'agilidad superficial', usando herramientas ágiles sin cambiar su estructura jerárquica ni empoderar realmente a sus equipos, lo que lleva a implementaciones fallidas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es el objetivo del Manifiesto Ágil según la clase 1?",
        opts: ["Proponer una metodología única para todos los proyectos", "Establecer un marco de valores y principios que orienten la toma de decisiones, promoviendo adaptabilidad, colaboración y mejora continua", "Eliminar toda documentación", "Imponer SCRUM como metodología estándar"],
        ans: 1, exp: "El objetivo del Manifiesto no era proponer una metodología única, sino establecer un marco de valores y principios que orientaran la toma de decisiones, promoviendo una cultura de adaptabilidad, colaboración y mejora continua."
    },

    // ==================== CLASE 2: CULTURA ÁGIL Y CLIENTE (12 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué rol juega el cliente en las metodologías ágiles según la clase 2?",
        opts: ["Es un requeridor externo que solo firma contratos", "Se convierte en un miembro activo del equipo, socio estratégico y co-creador de valor", "Solo interviene al inicio y al final del proyecto", "No participa en el proceso de desarrollo"],
        ans: 1, exp: "Las metodologías ágiles redefinen al cliente: deja de ser un requeridor externo para convertirse en miembro activo del equipo, participando en validaciones tempranas y co-construyendo el valor."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué condición es considerada 'necesaria para la agilidad' según la clase sobre cultura de colaboración?",
        opts: ["Jerarquías rígidas y control de mando", "Seguridad psicológica: libertad de expresar ideas sin temor a represalias", "Documentación exhaustiva de cada decisión", "Jornadas laborales extensas para cumplir metas"],
        ans: 1, exp: "La seguridad psicológica es condición necesaria para la agilidad. Equipos ágiles no temen equivocarse porque entienden que el error es una fuente de aprendizaje."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué frase de Peter Drucker se cita en la clase 2 para enfatizar la importancia de la cultura?",
        opts: ["El software es para las personas", "La cultura se come a la estrategia en el desayuno", "La calidad es gratis", "Itera rápido, aprende más"],
        ans: 1, exp: "La frase 'La cultura se come a la estrategia en el desayuno' (Peter Drucker) enfatiza que sin una cultura alineada con los principios ágiles, cualquier implementación técnica fracasa."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué técnica de validación con el cliente se menciona en la clase 2?",
        opts: ["Waterfall reviews", "User Acceptance Testing (UAT)", "Documentación de requisitos", "Análisis de costo-beneficio"],
        ans: 1, exp: "Las técnicas incluyen entrevistas contextuales, testing de funcionalidades (UAT), demos en revisiones de sprint y encuestas NPS."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué autor es referenciado en la clase 2 por su trabajo sobre 'Psychological Safety and Learning Behavior in Work Teams'?",
        opts: ["Kent Beck", "Amy Edmondson", "Ken Schwaber", "David Anderson"],
        ans: 1, exp: "Amy Edmondson (1999) es referenciada por su trabajo sobre seguridad psicológica y comportamiento de aprendizaje en equipos de trabajo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué representa el concepto de 'valor' en el enfoque ágil según la clase 2?",
        opts: ["Un requisito fijo definido al inicio", "Un concepto estático y predeterminado", "Un concepto relacional y evolutivo que se co-construye a medida que se comprenden mejor las necesidades reales del cliente", "Una métrica financiera exclusivamente"],
        ans: 2, exp: "En agilidad, el valor no es estático ni predeterminado; se co-construye a medida que se comprenden mejor las necesidades reales del cliente y los usuarios. Cada entrega iterativa permite refinar la propuesta de valor."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué promueve la filosofía de 'equipos autoorganizados'?",
        opts: ["Un líder que asigna todas las tareas", "El equipo se autogestiona, se organiza sin supervisión directa y distribuye tareas según fortalezas, no jerarquías", "Cada miembro trabaja de forma aislada", "Solo el gerente toma decisiones"],
        ans: 1, exp: "Un equipo ágil se autogestiona, se organiza sin supervisión directa y distribuye las tareas según fortalezas, no jerarquías, fomentando la autonomía y la responsabilidad colectiva."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué ceremonia ágil está inspirada en principios del pensamiento Lean y la filosofía Kaizen japonesa?",
        opts: ["Daily Scrum", "Sprint Planning", "Retrospectivas", "Sprint Review"],
        ans: 2, exp: "Las retrospectivas son ceremonias inspiradas en Lean y Kaizen donde los equipos identifican qué funcionó, qué se puede mejorar y cómo hacerlo, en espacios seguros de confianza y transparencia."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué cita de Steve Jobs se utiliza en la clase 2 para explicar la relación con el cliente?",
        opts: ["La innovación distingue entre un líder y un seguidor", "Los clientes no saben lo que quieren hasta que lo ven funcionando", "Mantente hambriento, mantente insensato", "La calidad es más importante que la cantidad"],
        ans: 1, exp: "La cita 'Los clientes no saben lo que quieren hasta que lo ven funcionando' refuerza el principio ágil de entregar valor iterativamente y superar expectativas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué tipo de liderazgo se promueve en las metodologías ágiles?",
        opts: ["Liderazgo autoritario y de control", "Liderazgo servicial, facilitador, cuyo rol es remover obstáculos y potenciar la autonomía del equipo", "Liderazgo sin comunicación", "Liderazgo exclusivamente técnico"],
        ans: 1, exp: "Se abandona la lógica del comando-control, dando lugar a un liderazgo servicial, facilitador, cuyo rol es remover obstáculos y potenciar la autonomía del equipo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué beneficios aporta la multidisciplinariedad en un equipo ágil?",
        opts: ["Mayor burocracia", "Abordar problemas desde múltiples enfoques, generando soluciones más creativas y resilientes", "Menor comunicación", "Especialización estricta sin colaboración"],
        ans: 1, exp: "La multidisciplinariedad permite abordar problemas desde múltiples enfoques, generando soluciones más creativas y resilientes, como un equipo Scrum que incluye desarrolladores, testers, diseñadores UX y analistas de negocio."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué diferencia existe entre 'cumplir con lo que el cliente pide' y 'superar expectativas desde la perspectiva de creación de valor'?",
        opts: ["No hay diferencia", "Superar expectativas implica entregar funcionalidades adicionales sin valor", "La cultura ágil se orienta a sorprender positivamente al cliente, entregando más valor del que se espera, como una funcionalidad mejorada con interfaz más intuitiva", "Cumplir es más importante que superar"],
        ans: 2, exp: "La cultura ágil se orienta a sorprender positivamente al cliente, no solo a satisfacer requerimientos, relacionado con la idea de 'entregar más valor del que se espera'."
    },

    // ==================== CLASE 3: SCRUM (18 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuáles son los tres pilares fundamentales en los que se sustenta Scrum?",
        opts: ["Planificación, ejecución y cierre", "Transparencia, inspección y adaptación", "Análisis, diseño y pruebas", "Compromiso, foco y respeto"],
        ans: 1, exp: "Scrum se basa en el control empírico de procesos con tres pilares: Transparencia (todo es visible), Inspección (evaluación regular) y Adaptación (ajustes oportunos)."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es la responsabilidad principal del Scrum Master?",
        opts: ["Maximizar el valor del producto administrando el Product Backlog", "Dirigir al equipo con autoridad formal y asignar tareas", "Facilitar, servir al equipo, protegerlo de interferencias y eliminar obstáculos", "Realizar el trabajo técnico de desarrollo y pruebas"],
        ans: 2, exp: "El Scrum Master es un facilitador y mentor que asegura la correcta adopción de Scrum. Su función es servir al equipo, eliminar obstáculos y fomentar la mejora continua mediante liderazgo horizontal basado en el servicio."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué evento de Scrum tiene como propósito reflexionar sobre el proceso de trabajo y acordar acciones concretas para mejorar la calidad en el siguiente Sprint?",
        opts: ["Daily Scrum", "Sprint Planning", "Sprint Review", "Sprint Retrospective"],
        ans: 3, exp: "La Sprint Retrospective es la reunión interna del equipo para reflexionar sobre el proceso de trabajo (comunicación, prácticas, herramientas) y acordar acciones concretas de mejora."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál es la duración máxima recomendada para el Daily Scrum?",
        opts: ["30 minutos", "1 hora", "15 minutos", "5 minutos"],
        ans: 2, exp: "El Daily Scrum es una reunión breve de 15 minutos que se realiza cada día del Sprint para sincronizar el trabajo, identificar bloqueos y adaptar el plan diario."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué es el Product Backlog?",
        opts: ["Lista de tareas del Sprint actual", "Lista ordenada de todo lo que se necesita para el producto, dinámica y evolutiva", "Documento de requisitos fijo", "Informe de pruebas"],
        ans: 1, exp: "El Product Backlog es una lista ordenada de todo lo que se necesita para el producto. Es dinámico y evoluciona según cambios del mercado, feedback de clientes y descubrimientos técnicos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué representa el Sprint Goal?",
        opts: ["Una lista de tareas técnicas", "Una meta clara que otorga propósito al Sprint", "Un documento de requisitos", "Una métrica de velocidad"],
        ans: 1, exp: "El Sprint Goal es una meta clara que otorga propósito al Sprint, definida durante la Sprint Planning junto con la selección de ítems del Product Backlog."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál de los siguientes NO es un valor de Scrum?",
        opts: ["Compromiso", "Coraje", "Eficiencia", "Respeto"],
        ans: 2, exp: "Los cinco valores de Scrum son: Compromiso, Coraje, Foco, Apertura y Respeto. Eficiencia no es un valor explícito de Scrum."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué significa que Scrum es un 'marco de trabajo empírico'?",
        opts: ["Que se basa en teorías no comprobadas", "Que se sustenta en el control empírico de procesos con transparencia, inspección y adaptación, aprendiendo de la experiencia", "Que no requiere planificación", "Que solo funciona en teoría"],
        ans: 1, exp: "Scrum es empírico porque se basa en la observación y experimentación, no en teorías predictivas. Los tres pilares (transparencia, inspección, adaptación) permiten aprender y ajustarse continuamente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿De dónde proviene el nombre 'Scrum'?",
        opts: ["De una empresa de software", "De una jugada de rugby que simboliza colaboración, sincronía y avance conjunto", "De un término militar", "De un autor de libros de gestión"],
        ans: 1, exp: "El nombre proviene de una jugada de rugby donde el equipo se agrupa para avanzar juntos con el balón, simbolizando colaboración, sincronía y avance conjunto hacia el objetivo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Quiénes formalizaron Scrum en la década de 1990?",
        opts: ["Kent Beck y Martin Fowler", "Ken Schwaber y Jeff Sutherland", "Alistair Cockburn y Jim Highsmith", "David Anderson y Don Reinertsen"],
        ans: 1, exp: "Scrum fue formalizado por Ken Schwaber y Jeff Sutherland en la década de 1990, inspirado por sistemas adaptativos complejos y modelos como el de manufactura Lean de Toyota."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué responsabilidad tiene el Development Team en Scrum?",
        opts: ["Administrar el Product Backlog", "Realizar el trabajo técnico para entregar el Incremento, autoorganizarse y comprometerse con el Sprint Goal", "Facilitar las reuniones Scrum", "Representar al cliente"],
        ans: 1, exp: "El Development Team realiza el trabajo técnico, se autoorganiza para decidir cómo abordar las tareas y se compromete a cumplir el objetivo del Sprint, sin interferencias externas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál es el resultado tangible que debe entregarse al final de cada Sprint?",
        opts: ["Un documento de requisitos actualizado", "Un Incremento funcional, probado y potencialmente desplegable", "Una presentación para stakeholders", "Un informe de retrospectiva"],
        ans: 1, exp: "Al final de cada Sprint se debe entregar un Incremento funcional y de calidad, que es el resultado tangible del trabajo realizado durante el Sprint."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué diferencia hay entre Sprint Review y Sprint Retrospective?",
        opts: ["Son lo mismo", "Review evalúa el producto (qué se construyó); Retrospective evalúa el proceso (cómo se construyó)", "Review es con clientes; Retrospective es solo con el Product Owner", "Review es diaria; Retrospective es semanal"],
        ans: 1, exp: "La Sprint Review se enfoca en el incremento del producto y recibe feedback de stakeholders. La Sprint Retrospective se enfoca en el proceso del equipo y cómo mejorar internamente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué artefacto de Scrum es gestionado exclusivamente por el Development Team?",
        opts: ["Product Backlog", "Sprint Backlog", "Incremento", "Definition of Done"],
        ans: 1, exp: "El Sprint Backlog (subconjunto del Product Backlog para el Sprint, junto con el plan de entrega) es gestionado exclusivamente por el Development Team y se actualiza diariamente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es el tamaño recomendado para un Development Team en Scrum?",
        opts: ["1 a 2 personas", "3 a 9 personas", "10 a 15 personas", "Sin límite"],
        ans: 1, exp: "El tamaño ideal del Development Team es de 3 a 9 personas para mantener la agilidad, comunicación efectiva y capacidad de autoorganización."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué evento de Scrum ocurre al inicio del Sprint?",
        opts: ["Sprint Review", "Sprint Retrospective", "Sprint Planning", "Daily Scrum"],
        ans: 2, exp: "La Sprint Planning es la reunión al inicio del Sprint donde el equipo selecciona ítems del Product Backlog, define el Sprint Goal y diseña un plan para alcanzarlos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué representa la 'Definition of Done' (DoD) en Scrum?",
        opts: ["La fecha de finalización del proyecto", "Un conjunto de criterios que debe cumplir un incremento para considerarse completo y potencialmente desplegable", "El presupuesto del Sprint", "La lista de tareas pendientes"],
        ans: 1, exp: "La Definition of Done es un acuerdo del equipo sobre los criterios que debe cumplir un incremento (pruebas, revisión, documentación mínima, etc.) para considerarse completo y potencialmente desplegable."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué principio de Scrum promueve un 'ritmo sostenible' y 'predictibilidad'?",
        opts: ["Sprint de duración variable", "Sprint con duración fija que no se modifica durante el proyecto", "Sin límites de tiempo", "Entregas solo al final del proyecto"],
        ans: 1, exp: "El Sprint tiene una duración fija (habitualmente 2 semanas) que no se modifica durante el proyecto, promoviendo un ritmo sostenible, predictibilidad, foco y cadencia."
    },

    // ==================== CLASE 4: KANBAN (14 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es uno de los principios fundamentales del método Kanban?",
        opts: ["Iteraciones fijas de 2 semanas", "Limitar el trabajo en curso (WIP - Work In Progress)", "Roles definidos como Product Owner y Scrum Master", "Documentación detallada de cada funcionalidad"],
        ans: 1, exp: "Uno de los seis principios de Kanban es 'Limitar el trabajo en curso (WIP)', estableciendo límites numéricos en cada etapa para evitar sobrecarga y promover el enfoque."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué representa el 'Pull System' (sistema de jalón) en Kanban?",
        opts: ["Las tareas se asignan automáticamente desde la gerencia", "Una tarea avanza solo si la columna siguiente tiene capacidad, promoviendo autonomía", "Todo el trabajo debe completarse en orden estricto", "El cliente decide cuándo iniciar cada tarea"],
        ans: 1, exp: "El Pull System significa que el trabajo se 'jala', no se asigna automáticamente. Una tarea avanza solo si la columna siguiente tiene capacidad, evitando colapsos por exceso de trabajo simultáneo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué métrica de Kanban mide el tiempo total desde que se solicita una tarea hasta que se entrega completamente?",
        opts: ["Cycle Time", "Lead Time", "Throughput", "Velocity"],
        ans: 1, exp: "El Lead Time mide el tiempo total desde que se solicita una tarea (cliente lo pide) hasta que se entrega completamente. El Cycle Time mide desde que se comienza a trabajar hasta que se entrega."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Quién adaptó Kanban al desarrollo de software?",
        opts: ["Ken Schwaber", "David J. Anderson", "Jeff Sutherland", "Kent Beck"],
        ans: 1, exp: "Kanban fue adaptado al desarrollo de software por David J. Anderson en la década del 2000, combinando principios Lean, Teoría de Restricciones y pensamiento estadístico."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es el origen histórico de Kanban?",
        opts: ["Desarrollo de software en los 90", "Sistema de Producción de Toyota (TPS), usando tarjetas visuales para controlar producción y evitar sobrestock", "Metodología de gestión de proyectos de la NASA", "Modelo de planificación militar"],
        ans: 1, exp: "Kanban nace del Sistema de Producción de Toyota (TPS), donde una tarjeta visual (kanban) se usaba para controlar la producción y evitar sobrestock en las líneas de ensamblaje."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es la diferencia conceptual clave entre Scrum y Kanban según la clase 4?",
        opts: ["Ambos son idénticos", "Scrum tiene iteraciones fijas (Sprints); Kanban es continuo sin iteraciones fijas", "Kanban tiene roles fijos; Scrum no", "Scrum no permite cambios; Kanban sí"],
        ans: 1, exp: "Scrum trabaja con iteraciones fijas (Sprints) y roles definidos, mientras que Kanban es un flujo continuo sin iteraciones fijas, con límites WIP y sin roles prescriptivos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué elemento visual de Kanban representa los estados del trabajo (Por hacer, En proceso, Hecho)?",
        opts: ["Swimlanes", "Columnas", "Tarjetas", "Límites WIP"],
        ans: 1, exp: "Las columnas representan los estados del trabajo. Ejemplos comunes: To Do, In Progress, Code Review, Testing, Done."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué son los 'Swimlanes' en un tablero Kanban?",
        opts: ["Límites de trabajo en progreso", "Filas horizontales para clasificar el trabajo según tipo, urgencia o cliente", "Columnas verticales", "Tarjetas de tareas"],
        ans: 1, exp: "Swimlanes son filas horizontales que permiten clasificar el trabajo según tipo, urgencia o cliente, como funcionalidades nuevas, errores críticos o soporte."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué herramienta de análisis se utiliza para detectar cuellos de botella en Kanban?",
        opts: ["Diagrama de Gantt", "Diagrama de flujo de valor (VSM) y mapas de calor del tablero", "PERT", "WBS"],
        ans: 1, exp: "Para detectar cuellos de botella se usan herramientas como Diagrama de flujo de valor (VSM), mapas de calor del tablero y Diagrama de Pareto para categorizar causas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué representa el 'Cycle Time' en Kanban?",
        opts: ["Tiempo desde solicitud hasta entrega", "Tiempo desde que se comienza a trabajar en una tarea hasta que se entrega", "Número de tareas completadas por semana", "Tiempo de espera en cola"],
        ans: 1, exp: "El Cycle Time mide el tiempo que una tarea pasa en estado 'en progreso', desde que se comienza a trabajar hasta que se entrega completada."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué es un 'Kaizen Event' en el contexto de Kanban?",
        opts: ["Una reunión diaria de 15 minutos", "Un taller colaborativo para rediseñar procesos o políticas", "La planificación del sprint", "La entrega de software"],
        ans: 1, exp: "El Kaizen Event es un taller colaborativo para rediseñar procesos o políticas, parte de las reuniones de mejora continua en Kanban."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál de los siguientes NO es un principio de Kanban?",
        opts: ["Visualizar el trabajo", "Limitar el trabajo en curso (WIP)", "Iteraciones fijas de 2 semanas", "Gestionar el flujo"],
        ans: 2, exp: "Kanban no prescribe iteraciones fijas; sus principios son: visualizar el trabajo, limitar WIP, gestionar el flujo, hacer políticas explícitas, implementar ciclos de retroalimentación, mejorar colaborativamente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué indica un cuello de botella en un tablero Kanban?",
        opts: ["El equipo está trabajando demasiado rápido", "Una columna se satura y el trabajo se detiene, indicando una restricción en el flujo", "Hay pocas tareas", "El proyecto está terminado"],
        ans: 1, exp: "Un cuello de botella se detecta visualmente cuando una columna se satura y el trabajo se detiene, indicando falta de recursos, reprocesos o problemas de coordinación."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué cultura promueve Kanban al incentivar 'Observar → Analizar → Hipótesis → Intervención → Evaluar'?",
        opts: ["Cultura de jerarquía", "Cultura de evidencia, no de intuición jerárquica", "Cultura de documentación exhaustiva", "Cultura de planificación rígida"],
        ans: 1, exp: "Kanban incentiva la mejora evolutiva a partir de datos, promoviendo una cultura de evidencia basada en observación, análisis, hipótesis, intervención y evaluación, no en intuición jerárquica."
    },

    // ==================== CLASE 5: CRYSTAL (10 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál es la característica distintiva de la metodología Crystal en comparación con otras metodologías ágiles?",
        opts: ["Requiere iteraciones de exactamente 4 semanas", "Se basa exclusivamente en programación en pareja", "Adapta su forma y grado de formalidad según el tamaño del equipo, criticidad y contexto del proyecto", "No permite ningún tipo de documentación"],
        ans: 2, exp: "Crystal, desarrollada por Alistair Cockburn, es una familia de metodologías que adapta su estructura según el contexto: tamaño del equipo, criticidad del sistema y complejidad organizacional."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Quién desarrolló la metodología Crystal?",
        opts: ["Kent Beck", "Alistair Cockburn", "Ken Schwaber", "David Anderson"],
        ans: 1, exp: "Crystal fue formalizada por Alistair Cockburn, uno de los firmantes del Manifiesto Ágil (2001), como resultado de estudios empíricos sobre el trabajo real de equipos de desarrollo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué representa el sistema de 'colores' en Crystal?",
        opts: ["La dificultad del proyecto", "Niveles de estructura metodológica creciente según tamaño del equipo y criticidad", "El lenguaje de programación a usar", "La interfaz de usuario"],
        ans: 1, exp: "Crystal utiliza un sistema de colores (Clear, Yellow, Orange, Red, etc.) para representar niveles de estructura creciente, adaptándose al tamaño del equipo y criticidad del sistema."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es un principio rector de Crystal?",
        opts: ["Documentación exhaustiva antes de codificar", "Comunicación constante y directa, privilegiando el intercambio informal sobre documentación exhaustiva", "Iteraciones anuales", "Jerarquía estricta"],
        ans: 1, exp: "Crystal privilegia la comunicación constante, directa, informal y espontánea sobre la documentación exhaustiva, considerando que las personas son más importantes que los procesos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Para qué tipo de equipos es más adecuada Crystal Clear?",
        opts: ["Equipos grandes de 50+ personas", "Equipos pequeños (hasta 6-8 personas) con baja criticidad", "Proyectos con alta regulación gubernamental", "Proyectos sin acceso a usuarios"],
        ans: 1, exp: "Crystal Clear está diseñada para equipos pequeños (hasta 6-8 personas) que trabajan en sistemas de baja criticidad, con alta comunicación y autonomía."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué factores determinan el 'color' o nivel de estructura metodológica en Crystal?",
        opts: ["Solo el presupuesto del proyecto", "Tamaño del equipo, criticidad del sistema, distribución geográfica y requisitos legales", "La antigüedad del equipo de desarrollo", "El lenguaje de programación elegido"],
        ans: 1, exp: "Los factores son: tamaño del equipo (más personas, más estructura), criticidad del sistema (errores graves requieren validaciones formales), distribución geográfica y requisitos legales o contractuales."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué fortaleza tiene Crystal según la clase 5?",
        opts: ["Alta rigidez metodológica", "Altamente adaptable a una variedad de contextos y fácil de adoptar para equipos pequeños", "Requiere certificaciones costosas", "Documentación extensiva obligatoria"],
        ans: 1, exp: "Crystal es altamente adaptable a diversos contextos, fácil de adoptar para equipos pequeños, con bajo costo de implementación metodológica y escalable por diseño."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es una limitación o desafío de Crystal?",
        opts: ["No permite cambios", "Puede generar confusión si el equipo no tiene experiencia en autogestión y requiere liderazgo facilitador", "Es extremadamente rígida", "No es ágil"],
        ans: 1, exp: "Crystal puede generar confusión si el equipo no tiene experiencia en autogestión, es difícil de justificar en organizaciones altamente reguladas y requiere liderazgo facilitador."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué filosofía central impulsa Crystal?",
        opts: ["Las personas son más importantes que los procesos y la metodología debe adaptarse al contexto", "Los procesos son más importantes que las personas", "La documentación es lo principal", "El plan inicial no se puede cambiar"],
        ans: 0, exp: "Crystal se basa en una filosofía humanista y evolutiva que considera que las personas son más importantes que los procesos y que la metodología debe adaptarse al contexto, no al revés."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué autor escribió 'Crystal Clear: A Human-Powered Methodology for Small Teams'?",
        opts: ["Ken Schwaber", "Alistair Cockburn", "David Anderson", "Kent Beck"],
        ans: 1, exp: "Alistair Cockburn es el autor de 'Crystal Clear: A Human-Powered Methodology for Small Teams', publicado en 2004."
    },

    // ==================== CLASE 6: EXTREME PROGRAMMING (XP) (12 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué práctica técnica es fundamental en Extreme Programming (XP)?",
        opts: ["Documentación extensiva de requisitos", "Test-Driven Development (TDD): escribir pruebas antes que el código", "Reuniones diarias de 2 horas", "Planificación detallada a 12 meses"],
        ans: 1, exp: "XP promueve Test-Driven Development (TDD) donde se escriben las pruebas antes del código, mejorando la claridad de los requerimientos, reduciendo errores y fomentando la simplicidad."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál de los siguientes es un valor fundamental de Extreme Programming (XP)?",
        opts: ["Jerarquía y control", "Documentación completa", "Coraje: confianza para tomar decisiones audaces como eliminar código duplicado", "Planificación rígida"],
        ans: 2, exp: "Los valores de XP son: Comunicación, Simplicidad, Retroalimentación, Coraje y Respeto. El coraje permite a los equipos tomar decisiones audaces."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Quién propuso Extreme Programming (XP) y en qué contexto?",
        opts: ["Ken Schwaber en 1995", "Kent Beck en 1996 en el proyecto Chrysler C3 Payroll", "Alistair Cockburn en 2001", "David Anderson en 2005"],
        ans: 1, exp: "XP fue propuesto por Kent Beck en 1996 en el contexto del proyecto Chrysler C3 Payroll, como reacción frente a proyectos fallidos caracterizados por retrasos y baja calidad."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué es la 'programación en pareja' (pair programming) en XP?",
        opts: ["Cada programador trabaja solo", "Dos desarrolladores trabajan frente al mismo código: uno escribe, el otro revisa", "Un programador supervisa a varios", "Solo se programa en equipo una vez por semana"],
        ans: 1, exp: "La programación en pareja implica que dos desarrolladores trabajan frente al mismo código: uno escribe (driver) y el otro revisa (navigator), aumentando calidad y difundiendo conocimiento."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué práctica de XP consiste en reescribir código de forma incremental para mejorar la estructura sin alterar su funcionalidad?",
        opts: ["TDD", "Integración continua", "Refactorización continua", "Propiedad colectiva del código"],
        ans: 2, exp: "La refactorización continua consiste en reescribir código incrementalmente para mejorar su estructura (eliminar duplicación, mejorar legibilidad) sin alterar su funcionalidad externa."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué representa el 'Juego de planificación' (planning game) en XP?",
        opts: ["Un juego para matar tiempo", "El cliente define prioridades y el equipo estima tiempos; se decide colaborativamente el alcance de cada iteración", "Una competencia entre desarrolladores", "Un evento social"],
        ans: 1, exp: "El planning game es una práctica organizativa donde el cliente define prioridades y funcionalidades, mientras el equipo estima tiempos y dificultad, decidiendo colaborativamente el alcance de cada iteración."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué beneficio aporta la 'Integración continua' en XP?",
        opts: ["Genera más errores", "El código se integra frecuentemente (idealmente varias veces al día) en un repositorio compartido, reduciendo riesgos", "Retrasa la entrega", "Aísla a los desarrolladores"],
        ans: 1, exp: "La integración continua implica integrar código frecuentemente (varias veces al día) en un repositorio compartido, reduciendo riesgos de integración y detectando problemas temprano."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué desafío común se presenta al implementar XP?",
        opts: ["Es demasiado fácil de aprender", "Resistencia cultural a la programación en pareja y curva de aprendizaje técnica elevada en TDD", "No requiere pruebas", "No necesita comunicación"],
        ans: 1, exp: "XP enfrenta resistencia cultural a la programación en pareja, curva de aprendizaje técnica elevada (especialmente TDD y refactorización disciplinada), y dificultad de escalado a equipos grandes."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué es la 'propiedad colectiva del código' en XP?",
        opts: ["Solo el líder puede modificar el código", "Cualquier miembro del equipo puede modificar cualquier parte del código, aumentando responsabilidad compartida", "El código es propiedad del cliente", "No se puede modificar el código"],
        ans: 1, exp: "La propiedad colectiva del código significa que cualquier miembro del equipo puede modificar cualquier parte del código, fomentando responsabilidad compartida y eliminando silos de conocimiento."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué es el 'Cliente in situ' (on-site customer) en XP?",
        opts: ["El cliente visita la oficina una vez al mes", "Un representante del cliente está disponible diariamente para responder preguntas, clarificar requisitos y validar entregables", "El cliente no participa", "El cliente solo revisa al final"],
        ans: 1, exp: "El cliente in situ significa que un representante del cliente está disponible diariamente (o permanentemente) para responder preguntas, clarificar requisitos y validar entregables, reduciendo demoras."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué promueve el 'Ritmo sostenible' en XP?",
        opts: ["Trabajar horas extras todos los días", "Se evita la sobrecarga prolongada; trabajar en equilibrio mejora la productividad y evita el agotamiento", "No hay límites de trabajo", "Entregar sin descanso"],
        ans: 1, exp: "El ritmo sostenible promueve evitar la sobrecarga prolongada (horas extras constantes). Trabajar en equilibrio mejora la productividad a largo plazo y evita el burnout del equipo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué autor escribió 'Extreme Programming Explained: Embrace Change'?",
        opts: ["Ken Schwaber", "Kent Beck", "Alistair Cockburn", "David Anderson"],
        ans: 1, exp: "Kent Beck es el autor de 'Extreme Programming Explained: Embrace Change', el libro fundamental sobre XP, publicado en su primera edición en 1999 y segunda en 2004."
    },

    // ==================== CLASE 7: FDD (10 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuál es la unidad de trabajo principal en Feature-Driven Development (FDD)?",
        opts: ["Sprint", "Historia de usuario", "Feature (funcionalidad pequeña y entregable de 1 a 10 días)", "Tarea técnica sin valor de negocio"],
        ans: 2, exp: "En FDD, cada 'feature' es una unidad de trabajo pequeña y entregable, generalmente implementable en 1 a 10 días, que sigue el formato 'verbo + sustantivo' (ej: 'Calcular intereses')."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Quién creó Feature-Driven Development (FDD) y en qué contexto?",
        opts: ["Kent Beck en Chrysler", "Jeff De Luca en un megaproyecto bancario en Singapur a mediados de los 90", "Ken Schwaber en 1995", "David Anderson en Toyota"],
        ans: 1, exp: "FDD fue creado por Jeff De Luca a partir de su experiencia liderando un megaproyecto de desarrollo para un banco en Singapur a mediados de los 90, junto con Peter Coad."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál es una ventaja estratégica de FDD mencionada en la clase 7?",
        opts: ["Máxima flexibilidad sin ningún diseño previo", "Alta trazabilidad funcional y visibilidad de avance midiendo features completadas", "No requiere ningún tipo de planificación", "Elimina por completo la necesidad de pruebas"],
        ans: 1, exp: "FDD ofrece alta trazabilidad funcional (cada entrega se rastrea desde diseño hasta ejecución) y visibilidad de avance midiendo features completadas, no horas invertidas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Cuántos pasos o actividades principales componen el proceso de FDD?",
        opts: ["3", "5", "7", "10"],
        ans: 1, exp: "FDD se estructura en cinco grandes actividades: (1) Desarrollar un modelo general, (2) Construir una lista de funcionalidades, (3) Planificar por funcionalidades, (4) Diseñar por funcionalidades, (5) Construir por funcionalidades."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué rol técnico es distintivo de FDD?",
        opts: ["Scrum Master", "Chief Programmer y Class Owner", "Product Owner", "Kanban Flow Manager"],
        ans: 1, exp: "FDD define roles técnicos específicos como Chief Programmer (líder de diseño y revisión) y Class Owner (responsable de una clase o conjunto de features), entre otros."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Para qué tipo de proyectos es especialmente adecuado FDD?",
        opts: ["Proyectos muy pequeños de 1 persona", "Proyectos a gran escala, sistemas críticos o regulados como banca, salud o defensa", "Proyectos sin requisitos", "Proyectos de marketing"],
        ans: 1, exp: "FDD es adecuado para sistemas críticos o regulados (banca, salud, defensa) y proyectos a gran escala que requieren control arquitectónico, trazabilidad funcional y gobernanza técnica rigurosa."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué limitación tiene FDD?",
        opts: ["No permite ningún tipo de diseño", "Menor flexibilidad frente a cambios radicales de requerimientos y alto costo de errores en el modelado inicial", "No requiere pruebas", "Es solo para startups"],
        ans: 1, exp: "FDD tiene menor flexibilidad frente a cambios radicales de requerimientos, alto costo de errores en el modelado inicial, y requiere equipo con experiencia en diseño orientado a objetos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Con qué tecnologías modernas es compatible FDD según la clase?",
        opts: ["Ninguna, es obsoleto", "Integración con Domain-Driven Design (DDD), microservicios, DevOps y CI/CD", "Solo con lenguajes antiguos", "Solo con bases de datos relacionales"],
        ans: 1, exp: "FDD es compatible con Domain-Driven Design (DDD), microservicios (cada feature puede mapearse a un bounded context), DevOps, CI/CD, y herramientas modernas como Jira, GitHub Projects."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué formato deben cumplir las 'features' en FDD?",
        opts: ["Un párrafo largo", "Un verbo y un sustantivo (ej: 'Calcular intereses', 'Actualizar cliente')", "Solo números", "Una imagen"],
        ans: 1, exp: "Las features en FDD deben cumplir con un formato de 'verbo + sustantivo', ser implementables en pocos días (1-10) y comprensibles tanto por negocio como por tecnología."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué autores escribieron 'A Practical Guide to Feature-Driven Development'?",
        opts: ["Beck y Andres", "Palmer y Felsing", "Schwaber y Sutherland", "Cockburn y Highsmith"],
        ans: 1, exp: "Stephen R. Palmer y John M. Felsing son los autores de 'A Practical Guide to Feature-Driven Development', publicado en 2002."
    },

    // ==================== CLASE 8: ROLES EN AGILIDAD (10 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué responsabilidad tiene el Product Owner en Scrum?",
        opts: ["Facilitar eventos Scrum y proteger al equipo", "Realizar el trabajo técnico de desarrollo", "Definir, mantener y priorizar el Product Backlog, maximizando el valor del producto", "Aprobar los cambios de requisitos sin consultar al cliente"],
        ans: 2, exp: "El Product Owner es responsable de maximizar el valor del producto, administra y prioriza el Product Backlog, representa al cliente y actúa como puente entre el negocio y el equipo de desarrollo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué diferencia fundamental existe entre un gerente de proyectos tradicional y un Scrum Master?",
        opts: ["El Scrum Master tiene más autoridad jerárquica", "El gerente tradicional asigna tareas y controla; el Scrum Master facilita, sirve al equipo y elimina obstáculos", "No hay diferencia, son roles idénticos", "El Scrum Master solo se enfoca en el presupuesto"],
        ans: 1, exp: "Mientras el gerente tradicional ejerce autoridad jerárquica y control, el Scrum Master tiene un liderazgo horizontal basado en el servicio: facilita, protege al equipo, elimina obstáculos y fomenta la autoorganización."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué rol adicional introduce SAFe (Scaled Agile Framework) a nivel de programa?",
        opts: ["Class Owner", "Release Train Engineer (RTE)", "Customer", "Coach"],
        ans: 1, exp: "SAFe introduce el Release Train Engineer (RTE) como rol de coordinación de múltiples equipos Scrum a nivel de programa, además de System Architect y Business Owner."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué habilidad blanda es indispensable para un Scrum Master?",
        opts: ["Dominio técnico avanzado", "Facilitación de grupos y coaching individual y de equipos", "Contabilidad financiera", "Diseño gráfico"],
        ans: 1, exp: "El Scrum Master necesita habilidades de facilitación de grupos, coaching individual y de equipos, gestión del cambio cultural y organizacional, más que dominio técnico avanzado."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué problema puede ocurrir si el Product Owner está ausente?",
        opts: ["El equipo trabaja más rápido", "El backlog se desactualiza, el equipo se desalinea y se pierde visión del producto", "No hay ningún problema", "El Scrum Master asume su rol fácilmente"],
        ans: 1, exp: "Un Product Owner ausente genera backlog desactualizado, equipo desalineado con las necesidades del negocio, malas priorizaciones y pérdida de dirección estratégica."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué rol en XP es similar al Product Owner de Scrum?",
        opts: ["Coach", "Customer", "Programmer", "Tracker"],
        ans: 1, exp: "En XP, el rol de 'Customer' es similar al Product Owner: define prioridades, funcionalidades y trabaja junto al equipo para clarificar requisitos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué estructura organizativa utiliza Spotify para escalar agilidad?",
        opts: ["Tribus, Squads, Chapters y Guilds", "Equipos aislados sin comunicación", "Jerarquía militar", "Silos funcionales"],
        ans: 0, exp: "Spotify organiza sus equipos en Tribus (conjunto de Squads), Squads (equipos autónomos), Chapters (grupos de misma disciplina) y Guilds (comunidades de interés)."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué rol en LeSS (Large-Scale Scrum) se agrega para múltiples equipos?",
        opts: ["Release Train Engineer", "Area Product Owner", "Chief Programmer", "Flow Manager"],
        ans: 1, exp: "LeSS (Large-Scale Scrum) mantiene roles de Scrum pero agrega el rol de Area Product Owner para coordinar múltiples equipos que trabajan en un mismo Product Backlog."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué caracteriza a un 'equipo ágil' en términos de liderazgo?",
        opts: ["Liderazgo autoritario centralizado", "Liderazgo situacional, servicial y rotativo, sin jerarquías rígidas", "Sin ningún tipo de liderazgo", "Liderazgo exclusivamente externo"],
        ans: 1, exp: "En un equipo ágil, no se 'designan' líderes fijos; el liderazgo es situacional, servicial y rotativo, basado en la responsabilidad y servicio hacia el equipo y el producto."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué autor escribió 'Coaching Agile Teams: A Companion for ScrumMasters, Agile Coaches, and Project Managers in Transition'?",
        opts: ["Lyssa Adkins", "Ken Schwaber", "Mike Cohn", "Alistair Cockburn"],
        ans: 0, exp: "Lyssa Adkins es autora de 'Coaching Agile Teams', un libro fundamental para Scrum Masters y Agile Coaches sobre facilitación y liderazgo ágil."
    },

    // ==================== CLASE 9: OPTIMIZACIÓN DE RECURSOS (10 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "Según la clase de optimización de recursos, ¿qué representa el concepto de 'ritmo sostenible'?",
        opts: ["Trabajar horas extras todos los días para entregar más rápido", "Priorizar el bienestar del equipo como requisito de eficiencia a largo plazo", "Entregar sin importar la calidad", "No tener límites de trabajo"],
        ans: 1, exp: "El ritmo sostenible es un principio ágil que prioriza el bienestar del equipo como requisito de eficiencia a largo plazo, evitando el desgaste y la sobrecarga prolongada."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Cuál de los siguientes es considerado un tipo de desperdicio en proyectos de TI según el pensamiento Lean?",
        opts: ["Automatización de pruebas", "Sobreproducción: funcionalidad que no se usa", "Integración continua", "Refactorización de código"],
        ans: 1, exp: "Los tipos de desperdicio incluyen: sobreproducción (funcionalidad no usada), inventario (tareas en progreso sin avanzar), defectos (retrabajo), esperas (bloqueos), entre otros."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué técnica de priorización se menciona en la clase 9 para enfocarse en el 20% de funcionalidades que generan el 80% del valor?",
        opts: ["Waterfall", "Principio de Pareto", "Cascada pura", "Documentación exhaustiva"],
        ans: 1, exp: "El Principio de Pareto (80/20) sugiere enfocarse en el 20% de funcionalidades que generan el 80% del valor, priorizando por impacto y valor de negocio."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué práctica de optimización de recursos consiste en establecer límites de tiempo para enfocar, decidir y evitar perfeccionismo improductivo?",
        opts: ["Kanban WIP", "Timeboxing", "Daily Scrum", "Sprint Planning"],
        ans: 1, exp: "El timeboxing es un límite de tiempo como mecanismo para enfocar, decidir y evitar perfeccionismo improductivo, usado en planificaciones, dailys, reviews y tareas técnicas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué métrica mide la capacidad de entrega del equipo en términos de funcionalidad por unidad de tiempo?",
        opts: ["Lead Time", "Throughput", "Cycle Time", "WIP"],
        ans: 1, exp: "El Throughput mide la cantidad de trabajo completado por unidad de tiempo (ej: features por semana), indicando la capacidad de entrega del equipo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué principio del Manifiesto Ágil se relaciona con 'maximizar la cantidad de trabajo no realizado'?",
        opts: ["Respuesta al cambio", "Simplicidad", "Colaboración con el cliente", "Individuos e interacciones"],
        ans: 1, exp: "El principio 'La simplicidad —el arte de maximizar la cantidad de trabajo no realizado— es esencial' promueve foco en lo valioso, no en la cantidad de trabajo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué beneficio aporta la automatización (CI/CD) a la optimización de recursos?",
        opts: ["Aumenta los errores humanos", "Reduce tiempo de despliegue (ej: de 1 hora a 2 minutos) y elimina errores manuales", "No tiene impacto", "Solo sirve para documentación"],
        ans: 1, exp: "La automatización (CI/CD) libera recursos al reducir drásticamente el tiempo de tareas repetitivas (testing, integración, despliegue) y eliminar errores humanos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué diferencia hay entre 'capacidad' y 'carga' en gestión ágil de recursos?",
        opts: ["Son lo mismo", "Capacidad es lo que el equipo puede hacer con calidad; carga es lo que se compromete a hacer. Exceder capacidad genera deuda técnica o burnout", "Capacidad es menor que carga siempre", "Carga es la capacidad multiplicada por 2"],
        ans: 1, exp: "Capacidad es lo que el equipo puede hacer sosteniblemente con calidad; carga es lo que el equipo se compromete a hacer. Exceder la capacidad genera deuda técnica, estrés o burnout."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué técnica de estimación ágil se menciona para medir esfuerzo de manera colaborativa?",
        opts: ["Planning Poker", "Gantt Chart", "PERT", "CPM"],
        ans: 0, exp: "Planning Poker es una técnica de estimación colaborativa donde los miembros del equipo usan cartas para estimar el esfuerzo relativo de las tareas, promoviendo consenso."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué autor escribió 'Agile Estimating and Planning'?",
        opts: ["Mike Cohn", "Kent Beck", "Ken Schwaber", "Alistair Cockburn"],
        ans: 0, exp: "Mike Cohn es autor de 'Agile Estimating and Planning', un libro fundamental sobre técnicas de estimación ágil como Planning Poker y estimación relativa."
    },

    // ==================== CLASE 10: ESQUEMA GENERAL DE PROYECTO ÁGIL (8 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es la diferencia fundamental entre un enfoque tradicional y uno ágil en la planificación?",
        opts: ["Ágil construye un cronograma rígido a 2 años", "Tradicional no tiene planificación; ágil sí", "Ágil no construye un cronograma rígido, sino un Product Backlog priorizado que se revisa sprint a sprint", "Ambos usan el mismo tipo de planificación"],
        ans: 2, exp: "En proyectos ágiles no se construye un cronograma rígido, sino un Product Backlog priorizado y una hoja de ruta de alto nivel que se revisa sprint a sprint, adaptándose al cambio."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué representa el 'Incremento' en un proyecto ágil?",
        opts: ["Un documento de requisitos", "Un resultado tangible, funcional, probado y potencialmente desplegable que aporta valor al usuario", "Una reunión de planificación", "Una métrica de velocidad del equipo"],
        ans: 1, exp: "El Incremento es el resultado tangible del trabajo durante un Sprint. Debe ser funcional, probado, potencialmente desplegable y cada Incremento se suma al producto existente."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué fase de un proyecto ágil incluye actividades como 'User Story Mapping', 'Product Vision Board' e 'Impact Mapping'?",
        opts: ["Fase de desarrollo iterativo", "Fase de planificación adaptativa", "Fase de entrega extendida", "Fase de cierre"],
        ans: 1, exp: "La fase de planificación adaptativa incluye técnicas como User Story Mapping, Product Vision Board e Impact Mapping, para construir un Product Backlog priorizado y roadmap."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es la duración típica de un Sprint en Scrum?",
        opts: ["1 día", "2 a 4 semanas", "6 meses", "1 año"],
        ans: 1, exp: "Los Sprints típicamente tienen duración de 2 a 4 semanas, aunque pueden variar según el contexto, manteniéndose fijos durante el proyecto."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué artefacto ágil contiene la lista ordenada de todo lo que se necesita para el producto?",
        opts: ["Sprint Backlog", "Product Backlog", "Incremento", "Definition of Done"],
        ans: 1, exp: "El Product Backlog es la lista ordenada de todo lo que se necesita para el producto, dinámica y evolutiva, gestionada por el Product Owner."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué herramienta de gestión ágil es mencionada como opción para grandes equipos y vinculada a proyectos?",
        opts: ["Trello", "Jira", "Notion", "Excel"],
        ans: 1, exp: "Jira (Kanban Board y Scrum Board) es mencionada como herramienta digital ideal para grandes equipos, vinculada a proyectos y con integraciones avanzadas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué representa la 'Definición de Hecho' (Definition of Done)?",
        opts: ["La fecha de entrega", "Un conjunto de criterios que debe cumplir un incremento para considerarse completo", "El presupuesto", "La lista de tareas pendientes"],
        ans: 1, exp: "La Definition of Done es un acuerdo del equipo sobre los criterios que debe cumplir un incremento (pruebas, revisión, documentación) para considerarse completo y potencialmente desplegable."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué marco de escalamiento ágil agrega capas organizativas de Portfolio, Program y Team?",
        opts: ["LeSS", "SAFe (Scaled Agile Framework)", "Nexus", "Crystal"],
        ans: 1, exp: "SAFe (Scaled Agile Framework) agrega capas organizativas: Portfolio (estratégico), Program (coordinación de múltiples equipos) y Team (equipos Scrum/XP)."
    },

    // ==================== CLASE 11: IMPLEMENTACIÓN EN ENTORNOS REALES (8 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "Según la clase 11, ¿cuál es un factor crítico de éxito para la implementación ágil en organizaciones?",
        opts: ["Imponer metodologías sin adaptación al contexto", "Compromiso visible del liderazgo e inversión en formación práctica", "Eliminar toda comunicación entre equipos", "Aumentar la burocracia y documentación"],
        ans: 1, exp: "Los factores habilitadores incluyen: compromiso visible del liderazgo, inversión en formación práctica, espacios de experimentación protegida (pilotos ágiles), empoderamiento de equipos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué modelo de madurez ágil utiliza los niveles 'Shu-Ha-Ri' (Aprender, romper la forma, trascender)?",
        opts: ["SAFe Agility Health Radar", "Modelo de 5 niveles de Agile Fluency", "Shu-Ha-Ri (adaptado de artes marciales)", "OCAI"],
        ans: 2, exp: "Shu-Ha-Ri es un modelo de madurez ágil: Shu (aprender reglas), Ha (romper la forma, adaptar), Ri (trascender, crear nuevo conocimiento). Proviene de las artes marciales japonesas."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué organización es citada como caso de éxito en escalamiento ágil con tribus, squads, chapters y guilds?",
        opts: ["Google", "Spotify", "ING", "Netflix"],
        ans: 1, exp: "Spotify es citada como caso de éxito con su modelo de organización en tribus (conjunto de squads), squads (equipos autónomos), chapters y guilds."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué estrategia de implementación ágil consiste en empezar con un equipo y luego expandirse gradualmente a otras áreas?",
        opts: ["Big Bang", "Modelo por capas (piloto y expansión)", "Implementación forzada", "Sin planificación"],
        ans: 1, exp: "El modelo por capas o implementación progresiva comienza con un equipo piloto de bajo riesgo y luego expande la agilidad a otras áreas de la organización."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué instrumento de diagnóstico organizacional mide la cultura según el modelo de Cameron y Quinn?",
        opts: ["Agile Maturity Assessment", "Change Readiness Index", "Organizational Culture Assessment Instrument (OCAI)", "SAFe Agility Health Radar"],
        ans: 2, exp: "El OCAI (Organizational Culture Assessment Instrument) mide la cultura organizacional según el modelo de valores en competencia de Cameron y Quinn."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué banco europeo es citado como caso de éxito en implementación ágil con eliminación de estructuras jerárquicas intermedias?",
        opts: ["BBVA", "Santander", "ING", "Deutsche Bank"],
        ans: 2, exp: "ING (banco europeo) implementó células ágiles y eliminó estructuras jerárquicas intermedias como parte de su transformación ágil."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué lección clave se menciona sobre la transformación ágil?",
        opts: ["El cambio se impone desde arriba sin consulta", "El cambio no se impone, se facilita, y las métricas deben centrarse en valor entregado, no en actividad", "Solo funciona en startups", "No requiere liderazgo"],
        ans: 1, exp: "Las lecciones clave son: el cambio no se impone, se facilita; las métricas deben centrarse en valor entregado, no en actividad; la agilidad necesita respaldo estructural."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué autores escribieron 'Scaling Agile @ Spotify'?",
        opts: ["Ken Schwaber y Jeff Sutherland", "Henrik Kniberg y Anders Ivarsson", "Mike Cohn y Alistair Cockburn", "David Anderson y Don Reinertsen"],
        ans: 1, exp: "Henrik Kniberg y Anders Ivarsson escribieron 'Scaling Agile @ Spotify' documentando el modelo de organización ágil de Spotify."
    },

    // ==================== CLASE 12: EVALUACIÓN, CIERRE Y MEJORA CONTINUA (10 preguntas) ====================
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Cuál es el propósito de la 'Retrospectiva final' en el cierre de un proyecto ágil?",
        opts: ["Entregar documentación al cliente", "Resumir retrospectivas anteriores y extraer lecciones aprendidas acumuladas para mejorar en el futuro", "Realizar pruebas de aceptación", "Aprobar el presupuesto final"],
        ans: 1, exp: "La retrospectiva final es una sesión ampliada que resume las retrospectivas anteriores, extrae lecciones aprendidas acumuladas y establece acuerdos de mejora para el próximo proyecto o ciclo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué métrica mide la satisfacción del cliente y la probabilidad de que recomiende el producto?",
        opts: ["Velocity", "Lead Time", "Net Promoter Score (NPS)", "Cycle Time"],
        ans: 2, exp: "El Net Promoter Score (NPS) es una métrica de producto que mide la satisfacción del cliente y su disposición a recomendar el producto, evaluando el valor entregado."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué filosofía japonesa de mejora continua se integra en las rutinas de los equipos ágiles?",
        opts: ["Kaizen (mejora continua mediante pequeños cambios sostenidos)", "Just-in-Time", "Poka-Yoke", "Jidoka"],
        ans: 0, exp: "Kaizen es la filosofía de mejora continua que se integra en las rutinas ágiles mediante ciclos de reflexión + acción + medición, promoviendo pequeños cambios sostenidos."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué técnica de retrospectiva se menciona como 'Start-Stop-Continue'?",
        opts: ["Una técnica para identificar qué empezar a hacer, qué dejar de hacer y qué continuar haciendo", "Una métrica de velocidad", "Un evento de planificación", "Una herramienta de documentación"],
        ans: 0, exp: "Start-Stop-Continue es una técnica de retrospectiva donde el equipo identifica: qué deberíamos empezar a hacer, qué deberíamos dejar de hacer, y qué deberíamos continuar haciendo."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué métrica ágil mide la velocidad promedio del equipo por sprint?",
        opts: ["Lead Time", "Cycle Time", "Velocity", "NPS"],
        ans: 2, exp: "Velocity mide la cantidad de trabajo (generalmente en puntos de historia o story points) que el equipo completa en promedio por sprint, útil para planificación."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué artículo de Harvard Business Review de 1986 es citado como referencia para la mejora continua?",
        opts: ["The Agile Manifesto", "The new new product development game", "Lean Thinking", "The Machine That Changed the World"],
        ans: 1, exp: "El artículo 'The new new product development game' de Takeuchi y Nonaka (1986) es citado como referencia para la mejora continua y el origen del pensamiento ágil."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué representa el 'learning backlog' mencionado en la clase 12?",
        opts: ["Lista de tareas técnicas", "Ideas de aprendizaje organizadas como historias de usuario para mejorar continuamente", "Documento de requisitos", "Informe de errores"],
        ans: 1, exp: "El 'learning backlog' es un concepto donde las ideas de aprendizaje se organizan como historias de usuario, priorizando qué mejorar o aprender a continuación."
    },
    {
        profe: true, unit: "Unidad 1", diff: "medium",
        q: "¿Qué métrica mide el tiempo que una tarea pasa en estado 'en progreso'?",
        opts: ["Lead Time", "Cycle Time", "Velocity", "Throughput"],
        ans: 1, exp: "El Cycle Time mide el tiempo que una tarea pasa en estado 'en progreso', desde que se comienza a trabajar hasta que se entrega completada."
    },
    {
        profe: true, unit: "Unidad 1", diff: "hard",
        q: "¿Qué autores escribieron 'The new new product development game'?",
        opts: ["Kent Beck y Martin Fowler", "Takeuchi y Nonaka", "Ken Schwaber y Jeff Sutherland", "Alistair Cockburn y Jim Highsmith"],
        ans: 1, exp: "Hirotaka Takeuchi y Ikujiro Nonaka escribieron 'The new new product development game' en Harvard Business Review (1986), precursor del pensamiento ágil."
    },
    {
        profe: true, unit: "Unidad 1", diff: "easy",
        q: "¿Qué herramienta de evaluación ágil muestra gráficamente el trabajo completado vs. el planificado a lo largo del tiempo?",
        opts: ["Burnup y Burndown Charts", "Diagrama de Gantt", "PERT", "WBS"],
        ans: 0, exp: "Los Burnup Charts (muestran trabajo completado vs. total) y Burndown Charts (muestran trabajo pendiente vs. tiempo) son herramientas visuales de seguimiento ágil."
    },
    // ==================== CLASE 1: FUNDAMENTOS DE SCRUM ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿En qué tres pilares se basa el enfoque empírico de Scrum?",
        opts: ["Planificación, Acción y Revisión", "Análisis, Diseño y Prueba", "Transparencia, Inspección y Adaptación", "Inicio, Desarrollo y Cierre"],
        ans: 2, exp: "Scrum se basa en el empirismo, que afirma que el conocimiento proviene de la experiencia. Sus tres pilares son: transparencia (visibilidad del proceso), inspección (revisar el progreso) y adaptación (ajustar lo que no funciona)."
    },
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿Cuál es la duración máxima recomendada para un Sprint en Scrum?",
        opts: ["1 semana", "2 semanas", "1 mes", "3 meses"],
        ans: 2, exp: "La Guía Scrum establece que los Sprints tienen una duración máxima de un mes (4 semanas). Plazos más largos aumentan la complejidad y el riesgo."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "¿Cuál de las siguientes opciones describe MEJOR el propósito de la 'Definición de Hecho' (DoD - Definition of Done)?",
        opts: ["Es una lista de tareas que el equipo debe completar durante el Daily Scrum.", "Es un conjunto de criterios acordados que debe cumplir un incremento para ser considerado potencialmente liberable.", "Es un documento que define el horario laboral de los Developers.", "Es una técnica de estimación similar al Planning Poker."],
        ans: 1, exp: "La Definición de Hecho (DoD) es un compromiso del equipo. Es una lista de verificación de actividades de calidad (ej. código revisado, pruebas pasan, documentado) que garantiza que el Incremento está completo y es usable."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "¿Cuál es la responsabilidad PRINCIPAL del Product Owner (PO)?",
        opts: ["Facilitar las reuniones y eliminar impedimentos.", "Asegurar que el código tenga la mejor calidad técnica posible.", "Maximizar el valor del producto resultante del trabajo del equipo de desarrollo.", "Escribir todo el código del proyecto en los primeros sprints."],
        ans: 2, exp: "El Product Owner es el responsable de maximizar el valor. Lo logra gestionando el Product Backlog, ordenándolo y definiendo claramente el Objetivo del Producto."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "Un equipo Scrum está compuesto por 9 Developers, 1 Scrum Master y 1 Product Owner. Según las buenas prácticas, ¿cuál es el principal problema con esta composición?",
        opts: ["El equipo es demasiado pequeño para ser efectivo.", "El Scrum Master no debería ser una persona dedicada.", "El equipo es demasiado grande, lo que dificulta la comunicación y coordinación.", "El Product Owner no puede trabajar con más de 5 Developers."],
        ans: 2, exp: "El tamaño recomendado para un equipo Scrum es de 5 a 9 integrantes (contando a los Developers). Un equipo de 11 personas (9+1+1) suele ser demasiado grande y genera ineficiencias comunicacionales, recomendándose dividirlo en dos equipos Scrum que compartan un mismo Product Backlog."
    },

    // ==================== CLASE 2: ACTA DE PROYECTO (PROJECT CHARTER) ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿Cuál es el propósito del Acta de Definición del Proyecto (Project Charter) en un proyecto ágil?",
        opts: ["Definir cada una de las historias de usuario del Product Backlog.", "Establecer un punto de partida compartido con la visión, límites y criterios de éxito, sin encorsetar al equipo.", "Servir como un contrato legal detallado para el cliente.", "Reemplazar la necesidad de tener un Product Backlog."],
        ans: 1, exp: "El Project Charter en ágil no es un documento pesado. Su función es alinear al equipo y stakeholders desde el inicio, definiendo el 'qué' y el 'por qué' general, dejando el 'cómo' detallado para el backlog."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "Dentro del Acta de Proyecto, ¿qué significa que los objetivos específicos deben ser SMART?",
        opts: ["Simples, Medibles, Acotados, Rápidos y Totales.", "Específicos, Medibles, Alcanzables, Relevantes y con un Tiempo definido.", "Semanales, Mensuales, Anuales, Revisables y Transferibles.", "Sencillos, Moderados, Adaptables, Reales y Tangibles."],
        ans: 1, exp: "SMART es un acrónimo para asegurar que los objetivos sean claros y alcanzables: Specific (Específico), Measurable (Medible), Achievable (Alcanzable), Relevant (Relevante) y Time-bound (con plazo)."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "En el contexto del Acta de Proyecto, ¿qué es un 'antipatrón' y cuál es un ejemplo de uno?",
        opts: ["Una práctica recomendada por Scrum, como tener un Product Backlog vivo.", "Una mala práctica o solución incorrecta a un problema recurrente. Ejemplo: Crear un acta enciclopédica que intenta reemplazar el Product Backlog.", "Un patrón de diseño de software utilizado para la arquitectura de microservicios.", "Un evento formal de Scrum para revisar el acta."],
        ans: 1, exp: "El antipatrón es una solución aparentemente buena a un problema, pero que genera consecuencias negativas. En el caso del Acta, crear un documento hiper-detallado al inicio es un antipatrón porque va contra la filosofía ágil de adaptación continua."
    },

    // ==================== CLASE 3: CARTA GANTT Y PLANIFICACIÓN ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿Cuál es la función de la Ruta Crítica en un diagrama de Gantt?",
        opts: ["Indica las tareas que tienen mayor presupuesto asignado.", "Muestra las tareas que puede realizar cualquier recurso del equipo.", "Determina la secuencia de tareas que no pueden retrasarse sin afectar la fecha de finalización del proyecto.", "Es la lista de tareas que el Product Owner ha priorizado como 'Must'."],
        ans: 2, exp: "La ruta crítica es la secuencia de tareas dependientes que suman la mayor duración total. Si una tarea de la ruta crítica se retrasa, el proyecto entero se retrasa."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "Según el material, ¿cómo debe integrarse una Carta Gantt con un marco ágil como Scrum?",
        opts: ["La Gantt sustituye al Sprint Backlog para el día a día del equipo.", "La Gantt se usa a nivel macro para comunicar releases, hitos regulatorios y dependencias externas, sin microgestionar los sprints.", "No se deben usar Gantt en proyectos ágiles bajo ninguna circunstancia.", "La Gantt se usa para planificar cada Daily Scrum en detalle."],
        ans: 1, exp: "La Gantt es una herramienta de planificación macro (roadmap). En ágil, se usa para coordinar con áreas externas o para releases largos, pero el trabajo diario se rige por el Sprint Backlog y el tablero Kanban."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "Aplicando la técnica de estimación PERT (Tres puntos), una tarea tiene un tiempo Optimista (O) de 2 días, un Más Probable (M) de 5 días y un Pesimista (P) de 14 días. ¿Cuál es la duración esperada aproximada?",
        opts: ["5 días", "6 días", "7 días", "8 días"],
        ans: 1, exp: "La fórmula PERT es (O + 4M + P) / 6. Por lo tanto: (2 + 4*5 + 14) / 6 = (2 + 20 + 14) / 6 = 36 / 6 = 6 días."
    },

    // ==================== CLASE 4: LEVANTAMIENTO DE REQUERIMIENTOS ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿Cuál es la principal diferencia entre un Requerimiento Funcional (FR) y uno No Funcional (NFR)?",
        opts: ["El FR lo pide el cliente, el NFR lo decide el equipo técnico.", "El FR describe QUÉ debe hacer el sistema (ej. calcular impuesto), mientras que el NFR describe CÓMO debe hacerlo o bajo qué condiciones (ej. debe responder en menos de 1 segundo).", "No hay diferencia, son términos sinónimos.", "El FR se escribe en el backlog, el NFR no."],
        ans: 1, exp: "Los FR son comportamientos específicos. Los NFR son atributos de calidad o restricciones (rendimiento, seguridad, usabilidad) que el sistema debe cumplir."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "¿Cuál de las siguientes opciones es un ejemplo de un Criterio de Aceptación bien escrito (usando el estilo Gherkin/BDD)?",
        opts: ["El sistema debe ser rápido.", "Como usuario, quiero login para acceder al sistema.", "Dado que el usuario está en la página de login, Cuando ingresa 'admin' y '1234', Entonces el sistema lo redirige al dashboard.", "Validar que el botón funcione."],
        ans: 2, exp: "La opción B es una Historia de Usuario, no un criterio. La opción C usa el formato Given-When-Then, que es claro, verificable y evita ambigüedades."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "Si un equipo está a punto de iniciar un Sprint con una tecnología desconocida (ej. integrar un SDK biométrico nuevo), ¿qué técnica de las vistas en clase es la MÁS apropiada para reducir la incertidumbre?",
        opts: ["Un Workshop JAD con todos los stakeholders.", "Una encuesta masiva a usuarios finales.", "Un Spike Técnico (Timebox de investigación).", "Un análisis de procesos BPMN."],
        ans: 2, exp: "El Spike técnico es una actividad de investigación y prototipado rápido. Su objetivo es aprender lo suficiente sobre un problema técnico incierto para poder estimarlo y planificarlo mejor en el futuro."
    },

    // ==================== CLASE 5: PRODUCT BACKLOG ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "Según la Scrum Guide 2020, ¿cuál es el 'compromiso' (o meta) del Product Backlog?",
        opts: ["El Sprint Goal", "La Definición de Hecho (DoD)", "El Product Goal (Objetivo del Producto)", "La Velocidad del Equipo"],
        ans: 2, exp: "El Product Goal es el compromiso del Product Backlog. Describe un estado futuro deseado del producto y da dirección al equipo sobre por qué está construyendo algo."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "¿Qué significa el acrónimo INVEST para escribir buenas Historias de Usuario?",
        opts: ["Ideales, Negociables, Valiosas, Estables, Simples y Testeables.", "Independiente, Negociable, Valiosa, Estimable, Small (Pequeña) y Testeable.", "Integrada, Narrativa, Veraz, Eficaz, Sostenible y Técnica.", "Inmediata, Navegable, Visual, Estática y Total."],
        ans: 1, exp: "INVEST es una guía para asegurar la calidad de los PBIs. Ayuda a evitar historias dependientes, muy grandes o vagas."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "Un Product Owner está priorizando el backlog. La Historia A tiene un Costo de Demora (CoD) de 30 y un Tamaño de 10. La Historia B tiene CoD de 20 y Tamaño de 4. Aplicando la fórmula WSJF (Weighted Shortest Job First), ¿cuál debería ir primero y por qué?",
        opts: ["Historia A, porque tiene el CoD más alto.", "Historia B, porque tiene el tamaño más pequeño.", "Historia A, porque su WSJF es 3, mayor que el de B que es 5.", "Historia B, porque su WSJF es 5, mayor que el de A que es 3."],
        ans: 3, exp: "WSJF = CoD / Tamaño. A = 30/10 = 3. B = 20/4 = 5. Se prioriza el ítem con WSJF más alto (Historia B) porque entrega más valor por unidad de esfuerzo."
    },

    // ==================== CLASE 6: HERRAMIENTAS COLABORATIVAS ====================
    {
        profe: true, unit: "Unidad 2", diff: "easy",
        q: "¿Cuál es el objetivo principal de un 'Espacio de Trabajo Colaborativo' en un proyecto Scrum?",
        opts: ["Reemplazar todas las reuniones del equipo.", "Acumular la mayor cantidad de documentos posible.", "Actuar como la 'única fuente de verdad' centralizando el backlog, la comunicación y el seguimiento.", "Servir como un repositorio exclusivo para el Scrum Master."],
        ans: 2, exp: "El espacio colaborativo digital busca eliminar la dispersión de información (ej. unos usan email, otros un chat, otros un papel), centralizando el trabajo para que sea transparente a todos."
    },
    {
        profe: true, unit: "Unidad 2", diff: "medium",
        q: "Tu equipo es pequeño (6 personas), recién comienza con Scrum y valora la simplicidad visual por encima de reportes complejos. ¿Qué herramienta de las vistas es la MÁS adecuada para empezar?",
        opts: ["Jira (por su robustez)", "Microsoft Project (por los Gantt)", "Trello (por sus tableros visuales e intuitivos)", "GitLab (por la integración con código)"],
        ans: 2, exp: "Trello es conocido por su simplicidad y enfoque Kanban/Scrum ligero. Para equipos pequeños que están aprendiendo, es menos abrumador que Jira o GitLab, que tienen curvas de aprendizaje más altas."
    },
    {
        profe: true, unit: "Unidad 2", diff: "hard",
        q: "¿Cuál de los siguientes NO es un beneficio de usar un espacio colaborativo digital en un equipo Scrum distribuido?",
        opts: ["Permite comunicación asincrónica, superando husos horarios.", "Reduce la necesidad de transparencia, ya que el tablero es privado.", "Centraliza la documentación y decisiones para consulta histórica.", "Facilita la autogestión de los Developers al ver el flujo de trabajo."],
        ans: 1, exp: "La transparencia es un pilar de Scrum. Un espacio colaborativo debe AUMENTAR la transparencia, haciéndolo visible para todos los interesados, no reducirla. La opción 2 describe lo contrario a un beneficio."
    },
    // ==================== CLASE N°1: Fundamentos de SCRUM ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuáles son los tres pilares del empirismo sobre los cuales se fundamenta SCRUM?",
        opts: ["Planificación, Acción y Revisión", "Análisis, Diseño y Prueba", "Transparencia, Inspección y Adaptación", "Inicio, Desarrollo y Cierre"],
        ans: 2, exp: "SCRUM se basa en el empirismo, que afirma que el conocimiento proviene de la experiencia. Sus tres pilares son: Transparencia (visibilidad de los procesos), Inspección (evaluación periódica de los resultados) y Adaptación (ajuste oportuno del plan cuando sea necesario)."
    },
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es la principal responsabilidad del Product Owner (PO) en un equipo SCRUM?",
        opts: ["Asegurar que el equipo siga las prácticas ágiles", "Eliminar impedimentos del equipo de desarrollo", "Maximizar el valor del producto gestionando y priorizando el Product Backlog", "Escribir todo el código del sistema"],
        ans: 2, exp: "El Product Owner es el responsable de maximizar el valor del producto. Esto implica gestionar, priorizar y mantener el Product Backlog, actuando como enlace entre los stakeholders y el equipo de desarrollo para asegurar que se construye lo que realmente aporta valor."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál de las siguientes opciones describe correctamente la función del Scrum Master?",
        opts: ["Es el líder del equipo y asigna las tareas diarias", "Es el responsable de probar el software antes de su entrega", "Garantiza la correcta aplicación del marco SCRUM, facilita la comunicación y elimina impedimentos", "Define los requisitos funcionales del sistema con el cliente"],
        ans: 2, exp: "El Scrum Master es un facilitador y servidor del equipo. Su rol es garantizar que se entiendan y apliquen las reglas de SCRUM, facilitar las ceremonias, eliminar obstáculos que impidan el progreso y promover la mejora continua y los principios ágiles."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "Según la filosofía SCRUM, ¿cómo se concibe la calidad en el desarrollo de un producto?",
        opts: ["Como una fase final de pruebas antes de la entrega", "Como responsabilidad exclusiva del equipo de QA", "Como un proceso transversal y continuo, responsabilidad de todo el equipo que se construye Sprint a Sprint", "Como un requisito no funcional que se documenta al inicio del proyecto"],
        ans: 2, exp: "A diferencia de metodologías tradicionales, SCRUM concibe la calidad como un proceso integrado y continuo. No es una fase final, sino que se construye en cada Sprint mediante prácticas como la Definition of Done, revisiones de código, pruebas automatizadas y la responsabilidad compartida por todo el equipo."
    },

    // ==================== CLASE N°2: Sprints y Planificación ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Qué es un Sprint en la metodología SCRUM?",
        opts: ["Una reunión diaria de 15 minutos", "El informe final que se entrega al cliente", "Un ciclo de trabajo de duración fija (usualmente 1 a 4 semanas) donde se crea un incremento funcional del producto", "La lista priorizada de todos los requisitos del proyecto"],
        ans: 2, exp: "El Sprint es el corazón operativo de SCRUM. Es un contenedor de trabajo time-boxed (duración fija y constante), donde el equipo selecciona, desarrolla y entrega un incremento funcional y verificable que aporta valor al cliente."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál es el resultado esperado de la ceremonia de Sprint Planning?",
        opts: ["El Product Backlog priorizado", "El incremento del producto funcionando", "Un reporte de los impedimentos del Sprint", "El Sprint Backlog, una lista organizada de tareas que guiarán al equipo durante la iteración"],
        ans: 3, exp: "El Sprint Planning tiene como objetivo definir QUÉ se hará en el Sprint (seleccionando ítems del Product Backlog) y CÓMO se hará (descomponiendo en tareas). El resultado tangible es el Sprint Backlog, que guía al equipo durante toda la iteración."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál es una de las principales ventajas de trabajar con Sprints de duración corta y fija?",
        opts: ["Permite planificar todo el proyecto con lujo de detalle desde el inicio", "Elimina la necesidad de reuniones con el cliente", "Facilita la detección temprana de errores, aumenta la predictibilidad y permite la retroalimentación constante del cliente", "Asegura que no haya cambios durante el desarrollo"],
        ans: 2, exp: "Los Sprints cortos (1-4 semanas) ofrecen múltiples ventajas: permiten detectar errores o desviaciones de forma temprana (bajo costo de corrección), aumentan la participación del cliente con entregas frecuentes, y dan previsibilidad al equipo al mantener un ritmo constante de trabajo y entrega de valor."
    },

    // ==================== CLASE N°3: Kanban ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es el principio fundamental de Kanban que ayuda a evitar la sobrecarga del equipo y la multitarea excesiva?",
        opts: ["Visualizar el flujo de trabajo", "Limitar el trabajo en progreso (WIP)", "Gestionar el flujo", "Usar métricas y retroalimentación"],
        ans: 1, exp: "Limitar el Trabajo en Progreso (WIP, por sus siglas en inglés) es un principio clave de Kanban. Al establecer un máximo de tareas que pueden estar en curso simultáneamente, se evita la sobrecarga, se reduce la multitarea (que es ineficiente) y se identifican cuellos de botella, mejorando el flujo de trabajo."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Qué métrica de Kanban mide el tiempo total que una tarea permanece en ejecución, desde que se inicia (columna 'In Progress') hasta que se completa (columna 'Done')?",
        opts: ["Lead Time", "Cycle Time", "Throughput", "Velocity"],
        ans: 1, exp: "El Cycle Time (Tiempo de Ciclo) mide específicamente el tiempo que una tarea pasa en el flujo de trabajo activo, es decir, desde que el equipo comienza a trabajar en ella hasta que se da por finalizada. El Lead Time, en cambio, mide desde que se solicita la tarea hasta que se entrega."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "¿Cómo se complementa la metodología Kanban con SCRUM para mejorar la gestión de proyectos de TI?",
        opts: ["Kanban reemplaza al Sprint Backlog y las Daily Scrums", "Kanban se usa solo para documentación, no para desarrollo", "Kanban transforma el Sprint Backlog en una herramienta visual y colaborativa, permitiendo detectar cuellos de botella y optimizar el flujo de trabajo dentro del Sprint", "Kanban se aplica únicamente en la fase de pruebas del proyecto"],
        ans: 2, exp: "Kanban no reemplaza a SCRUM, sino que lo potencia. Al integrar un tablero Kanban con límites WIP dentro de un Sprint, se logra una visualización del flujo de tareas que permite detectar cuellos de botella (ej. tareas acumuladas en 'Code Review'), equilibrar la carga de trabajo y tomar decisiones basadas en datos (Cycle Time, Throughput), todo dentro del marco de SCRUM."
    },

    // ==================== CLASE N°4: Daily Meetings ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es la duración máxima recomendada para una Daily Scrum (reunión diaria) según la guía de SCRUM?",
        opts: ["5 minutos", "15 minutos", "30 minutos", "1 hora"],
        ans: 1, exp: "La Daily Scrum es un evento time-boxed con una duración máxima de 15 minutos, independientemente del tamaño del equipo. Esta restricción temporal fomenta la brevedad, el foco y la eficiencia, evitando que se convierta en una reunión extensa y burocrática."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál es el objetivo principal de las tres preguntas clave que responde cada miembro en la Daily Scrum?",
        opts: ["Rendir cuentas al Scrum Master sobre el trabajo realizado", "Generar un reporte detallado para el Product Owner", "Sincronizar el trabajo del equipo, identificar bloqueos de manera temprana y alinear esfuerzos con el objetivo del Sprint", "Planificar en detalle todas las tareas del día siguiente"],
        ans: 2, exp: "Las tres preguntas (¿Qué hice ayer?, ¿Qué haré hoy?, ¿Qué impedimentos tengo?) no son para un reporte jerárquico, sino para la autoorganización del equipo. Su propósito es la sincronización, la transparencia sobre el progreso, la detección temprana de obstáculos y la adaptación inmediata del plan diario para cumplir el objetivo del Sprint."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "¿Cuál es la responsabilidad del Scrum Master respecto a los impedimentos (blockers) identificados durante la Daily Scrum?",
        opts: ["Resolver todos los impedimentos técnicos personalmente", "Ignorarlos si no afectan el objetivo del Sprint", "Gestionar su eliminación, ya sea resolviéndolos directamente o escalándolos al nivel adecuado, para que el equipo pueda mantener su ritmo de trabajo", "Registrarlos en un acta sin tomar acción"],
        ans: 2, exp: "Una de las funciones principales del Scrum Master es la eliminación de impedimentos. Al identificarse un bloqueo en la Daily, el Scrum Master actúa como facilitador para removerlo lo antes posible, ya sea resolviéndolo él mismo (ej. gestionar un permiso) o escalándolo a la persona o área correspondiente (ej. un problema de infraestructura)."
    },

    // ==================== CLASE N°5: Casos de Uso y UML ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Qué representan las elipses en un diagrama de Casos de Uso con notación UML?",
        opts: ["Los actores del sistema", "El límite del sistema", "Los casos de uso (funcionalidades)", "Las relaciones de herencia"],
        ans: 2, exp: "En la notación UML para diagramas de casos de uso, una elipse representa un Caso de Uso, es decir, una funcionalidad o servicio específico que el sistema ofrece a los actores. La figura humana representa al actor, y el rectángulo grande representa el límite del sistema."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cómo complementan los Casos de Uso a las User Stories en un proyecto SCRUM?",
        opts: ["Reemplazan a las User Stories por ser más detallados", "Son irrelevantes en SCRUM", "Complementan a las User Stories proporcionando mayor detalle técnico y ayudando a validar requerimientos complejos mediante descripciones de flujo principal y alternativo", "Se usan solo para documentar requisitos no funcionales"],
        ans: 2, exp: "Aunque SCRUM utiliza User Stories como herramienta principal, los Casos de Uso sirven para complementarlas en situaciones de mayor complejidad. Mientras la User Story define el 'qué' y el 'por qué', el Caso de Uso detalla el 'cómo' a través de flujos de eventos (principal y alternativos), actores, pre y postcondiciones, aportando mayor formalización y detalle técnico."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "En un diagrama de Casos de Uso UML, ¿qué representa la relación <<include>> entre dos casos de uso?",
        opts: ["Que un caso de uso es una opción o extensión del otro", "Que un caso de uso es una versión más específica del otro", "Que un caso de uso (base) siempre ejecuta al caso de uso (incluido) como parte obligatoria de su flujo", "Que dos actores están relacionados entre sí"],
        ans: 2, exp: "La relación <<include>> indica que el caso de uso base incluye obligatoriamente el comportamiento del caso de uso incluido. Es decir, cada vez que se ejecuta el flujo del caso base, se ejecuta también el caso incluido. Un ejemplo típico es 'Pagar compra' que <<include>> 'Validar tarjeta', ya que la validación es un paso obligatorio del pago."
    },

    // ==================== CLASE N°6: Mockups ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es la principal diferencia entre un wireframe y un mockup?",
        opts: ["El wireframe es interactivo y el mockup no", "El wireframe tiene diseño visual completo y el mockup es solo un esquema", "El wireframe es un esquema estructural básico sin diseño gráfico, mientras que el mockup ya incluye un diseño visual completo con colores, tipografías e iconografía", "No hay diferencia, son sinónimos"],
        ans: 2, exp: "Un wireframe es un esquema de baja fidelidad que define la estructura y jerarquía de la información (el 'esqueleto'). Un mockup es de media/alta fidelidad, ya que incluye el diseño visual (colores, tipografías, imágenes) y muestra cómo se verá la interfaz final, aunque suele tener interactividad limitada."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿En qué momento del ciclo SCRUM se recomienda integrar la validación de mockups para maximizar su efectividad?",
        opts: ["Al inicio del proyecto, antes del primer Sprint", "Solo al final, en la documentación de cierre", "Durante la Sprint Review, presentándolos a usuarios y stakeholders para recoger retroalimentación temprana que alimente el Product Backlog", "En la Daily Scrum, para revisar el avance diario"],
        ans: 2, exp: "La presentación y validación de mockups en la Sprint Review es una práctica muy valiosa. Permite que los stakeholders y usuarios interactúen con la representación visual de la funcionalidad antes de programarla, dando retroalimentación temprana que se traduce en nuevas User Stories o ajustes en el Product Backlog para futuros Sprints, reduciendo costos de cambio."
    },

    // ==================== CLASE N°7: Documentación Final ====================
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál es el propósito principal del informe de cierre en un proyecto SCRUM, más allá de formalizar la entrega?",
        opts: ["Cumplir con un requisito burocrático sin valor real", "Reemplazar al código fuente como entregable principal", "Asegurar la trazabilidad de decisiones y requisitos, facilitar el soporte futuro y comunicar el valor entregado a los stakeholders, sirviendo como base para auditorías y mejoras", "Demostrar que no hubo errores durante el desarrollo"],
        ans: 2, exp: "El informe de cierre en SCRUM es una herramienta estratégica. Sus funciones clave son: asegurar trazabilidad (registrando decisiones y validaciones), facilitar el soporte y mantenimiento futuro (sirviendo como documentación base), y comunicar de manera clara el valor entregado a clientes y usuarios, más allá de solo 'entregar el software'."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "¿Qué diferencia fundamental existe entre un requisito funcional y un requisito no funcional al documentar un proyecto SCRUM?",
        opts: ["No hay diferencia, son lo mismo", "Los funcionales describen atributos de calidad (rendimiento, seguridad) y los no funcionales describen acciones del sistema", "Los funcionales especifican QUÉ acciones debe realizar el sistema (ej. 'agendar cita'), mientras que los no funcionales establecen atributos de calidad y condiciones de desempeño (ej. 'respuesta menor a 3 segundos', 'cifrado de datos')", "Los funcionales se prueban y los no funcionales no"],
        ans: 2, exp: "Los requisitos funcionales responden al 'qué' y definen comportamientos específicos del sistema (acciones, cálculos, interacciones). Los requisitos no funcionales responden al 'cómo' y definen restricciones o atributos de calidad como rendimiento, seguridad, usabilidad, escalabilidad o compatibilidad. Ambos son críticos y deben documentarse y validarse."
    },

    // ==================== CLASE N°8: Product Increment y Sprint Review ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Qué es el Product Increment en SCRUM?",
        opts: ["La lista de tareas pendientes para el próximo Sprint", "Un documento con las lecciones aprendidas", "Un avance funcional y verificable que cumple con la Definition of Done y aporta valor real al cliente, siendo la suma de todo el trabajo terminado hasta el momento", "El acta de la reunión de planificación"],
        ans: 2, exp: "El Product Increment es el artefacto más tangible de SCRUM. Es la suma de todos los elementos del Product Backlog completados durante un Sprint y todos los Sprints anteriores. Debe ser un producto funcional, usable, integrado y probado que cumple con la Definition of Done y está listo para ser usado por el cliente."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Cuál es el objetivo principal de la ceremonia Sprint Review?",
        opts: ["Que el equipo reflexione sobre su proceso interno y proponga mejoras", "Planificar las tareas del siguiente Sprint", "Demostrar el Product Increment a stakeholders y Product Owner, recoger retroalimentación directa del cliente, evaluar el progreso y actualizar prioridades en el Product Backlog", "Asignar responsables para cada tarea diaria"],
        ans: 2, exp: "La Sprint Review es un evento de inspección y colaboración enfocado en el PRODUCTO. Su objetivo es mostrar de manera transparente el trabajo completado (el Incremento), recibir retroalimentación de los stakeholders y clientes, y ajustar el Product Backlog en función de esa retroalimentación, orientando la evolución del producto."
    },

    // ==================== CLASE N°9: Sprint Retrospective ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es la diferencia fundamental entre la Sprint Review y la Sprint Retrospective?",
        opts: ["No hay diferencia, son la misma reunión", "La Review se enfoca en el PRODUCTO (¿qué construimos?), mientras que la Retrospective se enfoca en el PROCESO y las PERSONAS (¿cómo lo construimos y cómo podemos mejorar?)", "La Review la lidera el Scrum Master y la Retrospective el Product Owner", "La Review es diaria y la Retrospective es semanal"],
        ans: 1, exp: "La Sprint Review y la Retrospective son eventos complementarios pero con enfoques distintos. La Review responde a '¿qué hemos construido?' y se centra en el producto y el valor entregado al cliente. La Retrospective responde a '¿cómo lo hemos construido?' y se centra en el proceso, las prácticas, las herramientas y la dinámica del equipo para mejorar continuamente."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "Para que una Sprint Retrospective sea efectiva y genere valor real, ¿qué condición es fundamental que cumplan las acciones de mejora definidas?",
        opts: ["Que sean aprobadas por el gerente del proyecto", "Que sean muchas y muy ambiciosas", "Que sean específicas, alcanzables, tengan un responsable asignado y un criterio claro de verificación para revisarse en la siguiente Retrospective", "Que se documenten pero no se revisen"],
        ans: 2, exp: "Una acción de mejora efectiva debe cumplir con criterios SMART aplicados al contexto ágil: ser Específica (no genérica como 'mejorar la comunicación'), Alcanzable, tener un Responsable asignado, un criterio de Verificación claro (¿cómo sabremos que se cumplió?) y debe ser revisada en la próxima Retrospective para asegurar el seguimiento y el aprendizaje continuo."
    },

    // ==================== CLASE N°10: Product Backlog ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Quién es el propietario y responsable de la gestión y priorización del Product Backlog en SCRUM?",
        opts: ["El Scrum Master", "El equipo de desarrollo", "El Product Owner", "Los stakeholders externos"],
        ans: 2, exp: "El Product Owner es el único responsable del Product Backlog. Él o ella es quien decide el orden de los ítems (priorización), asegura que el backlog sea visible y transparente, y que refleje las necesidades del negocio y los clientes para maximizar el valor del producto."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿En qué consiste el proceso de 'Refinamiento del Product Backlog' (antes llamado Grooming)?",
        opts: ["Eliminar todas las historias grandes del backlog", "Un evento obligatorio de 8 horas que ocurre al final de cada Sprint", "El proceso continuo de transformar ítems del backlog en unidades claras, estimadas y factibles (listas/Ready), incluyendo dividir épicas, añadir criterios de aceptación y estimar esfuerzo", "Un informe que el Product Owner envía al cliente cada semana"],
        ans: 2, exp: "El refinamiento es una actividad continua (no una ceremonia obligatoria) donde Product Owner y equipo de desarrollo colaboran para detallar los ítems del backlog. Acciones típicas incluyen: dividir historias grandes, clarificar requisitos, añadir criterios de aceptación verificables, estimar esfuerzo (ej. Planning Poker) y repriorizar según valor de negocio."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "¿Qué representa la técnica de priorización MoSCoW y cómo ayuda a gestionar el Product Backlog?",
        opts: ["Un método para estimar puntos de historia", "Una clasificación de ítems en Must have (indispensables), Should have (importantes pero no vitales), Could have (deseables) y Won't have (descartados para este alcance), ayudando a enfocar el Sprint en lo crítico", "Un software para crear diagramas de flujo", "Una métrica para medir la velocidad del equipo"],
        ans: 1, exp: "MoSCoW es una técnica de priorización muy útil. Clasifica los requisitos en: Must have (esenciales para el éxito, el Sprint falla sin ellos), Should have (muy importantes pero hay una alternativa), Could have (deseables, menor impacto), y Won't have (excluidos explícitamente para este ciclo). Ayuda al Product Owner a tomar decisiones difíciles y al equipo a enfocarse en lo que realmente aporta valor crítico."
    },

    // ==================== CLASE N°11: Calidad en SCRUM ====================
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Qué es la 'Definition of Done' (DoD) y por qué es clave para la calidad en SCRUM?",
        opts: ["Es un documento que describe los requisitos no funcionales", "Es un acuerdo explícito del equipo sobre lo que significa que una tarea o historia de usuario está 'terminada', garantizando estándares de calidad como pruebas, revisión de código y documentación", "Es la fecha de entrega final del proyecto", "Es un rol del equipo encargado de las pruebas"],
        ans: 1, exp: "La Definition of Done es un compromiso del equipo. Establece una lista de verificación (checklist) que debe cumplirse para que un ítem se considere 'terminado' (ej. 'código pasado por pruebas unitarias', 'revisado por otro desarrollador', 'demo aprobada por el PO'). Es fundamental para la transparencia y la calidad, evitando entregas a medias."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "¿Cómo integra SCRUM las pruebas de software para asegurar la calidad de forma continua?",
        opts: ["Realizando todas las pruebas al final del proyecto, antes de la entrega", "Externalizando las pruebas a un equipo que no participa en los Sprints", "Integrando las pruebas como parte natural del ciclo de desarrollo en cada Sprint, mediante pruebas unitarias, funcionales, de integración y aceptación, a menudo automatizadas (TDD, BDD) y con la participación de todo el equipo", "Las pruebas son opcionales en SCRUM"],
        ans: 2, exp: "En SCRUM, las pruebas no son una fase final, sino una actividad continua y paralela al desarrollo. Se ejecutan pruebas unitarias, de integración y funcionales durante el Sprint. Técnicas como TDD (Test-Driven Development) o BDD (Behavior-Driven Development) integran la creación de pruebas antes o junto con el código, y todo el equipo (desarrolladores, QA, PO) participa en la validación a través de criterios de aceptación y la Definition of Done."
    },

    // ==================== CLASE MAGISTRAL: Historias de Usuario y BDD ====================
    {
        profe: true, unit: "Unidad 3", diff: "easy",
        q: "¿Cuál es la estructura estándar de una Historia de Usuario según el enfoque ágil?",
        opts: ["Dado que [contexto], cuando [acción], entonces [resultado]", "Como [tipo de usuario], quiero [una acción/funcionalidad], para [lograr un beneficio/valor]", "Si [condición], entonces [resultado], de lo contrario [alternativa]", "Título, descripción y criterios de aceptación en párrafos"],
        ans: 1, exp: "La estructura clásica de una User Story (historia de usuario) es: 'Como [rol de usuario], quiero [acción deseada], para [beneficio esperado]'. Esta estructura de tres partes ayuda a mantener el foco en el valor para el usuario final ('para'), no solo en la funcionalidad técnica ('quiero')."
    },
    {
        profe: true, unit: "Unidad 3", diff: "medium",
        q: "¿Qué introduce el enfoque Behavior-Driven Development (BDD) como mejora a las Historias de Usuario tradicionales?",
        opts: ["Elimina la necesidad de criterios de aceptación", "Introduce escenarios de comportamiento expresados en lenguaje natural estructurado (Given/When/Then) que son comprensibles para negocio, desarrollo y pruebas, y que pueden automatizarse", "Reemplaza a SCRUM como metodología", "Se enfoca solo en el diseño de bases de datos"],
        ans: 1, exp: "BDD extiende las Historias de Usuario al definir el comportamiento esperado a través de escenarios concretos en un lenguaje común y estructurado: Given (contexto inicial), When (acción del usuario), Then (resultado observable). Esto convierte los criterios de aceptación en ejemplos concretos y ejecutables, reduciendo ambigüedad y facilitando la automatización de pruebas."
    },
    {
        profe: true, unit: "Unidad 3", diff: "hard",
        q: "Dada la User Story: 'Como cliente, quiero filtrar productos por precio para encontrar ofertas rápidamente'. ¿Cuál de los siguientes escenarios BDD (Given/When/Then) es un criterio de aceptación correcto y bien formulado?",
        opts: ["Given que el sistema es rápido, When filtro, Then veo productos", "Given que el cliente está en la página de productos, When selecciona un rango de precio '10-50 USD' y aplica el filtro, Then el sistema muestra solo los productos cuyo precio está entre 10 y 50 USD ordenados por relevancia", "Given que hay productos, When hago clic, Then funciona", "Given que el cliente existe, When compra, Then recibe email"],
        ans: 1, exp: "La opción correcta es la más específica, concreta y verificable. Sigue la estructura Given (estado inicial claro: 'cliente en página de productos'), When (acción específica del usuario: 'selecciona rango 10-50 USD y aplica filtro'), Then (resultado observable y medible: 'sistema muestra solo productos en ese rango'). Las otras opciones son vagas o no corresponden a la historia planteada."
    }
];

// TOTAL: 189 preguntas distribuidas por todas las clases


registrarAsignatura('metodologia', BANK.metodologia);
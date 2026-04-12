window.BANK = window.BANK || {};
BANK.lenguaje_html = [

//     ==================== ETIQUETAS BASICAS ====================
    
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para el título de la página en la pestaña del navegador?",
//         opts: ["title", "head", "h1", "header"],
//         ans: 0, exp: "title va dentro de head y define el título de la pestaña"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para el encabezado más importante?",
//         opts: ["h1", "head", "header", "title"],
//         ans: 0, exp: "h1 es el encabezado de nivel 1, el más importante"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para crear un párrafo?",
//         opts: ["p", "par", "paragraph", "text"],
//         ans: 0, exp: "p es la etiqueta de párrafo"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para crear un enlace?",
//         opts: ["a", "link", "href", "url"],
//         ans: 0, exp: "a es la etiqueta de ancla para enlaces"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué atributo define la URL de un enlace?",
//         opts: ["href", "src", "link", "url"],
//         ans: 0, exp: "href especifica la dirección del enlace"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para insertar una imagen?",
//         opts: ["img", "image", "pic", "src"],
//         ans: 0, exp: "img es la etiqueta de imagen"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué atributo define la ruta de una imagen?",
//         opts: ["src", "href", "alt", "link"],
//         ans: 0, exp: "src especifica la URL de la imagen"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué atributo proporciona texto alternativo para una imagen?",
//         opts: ["alt", "title", "text", "description"],
//         ans: 0, exp: "alt es texto alternativo para lectores de pantalla y si no carga la imagen"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para crear una lista no ordenada?",
//         opts: ["ul", "ol", "li", "list"],
//         ans: 0, exp: "ul es unordered list (viñetas)"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para crear una lista ordenada?",
//         opts: ["ol", "ul", "li", "list"],
//         ans: 0, exp: "ol es ordered list (numerada)"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para cada elemento de una lista?",
//         opts: ["li", "ul", "ol", "item"],
//         ans: 0, exp: "li es list item"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para una tabla?",
//         opts: ["table", "tab", "tr", "td"],
//         ans: 0, exp: "table define una tabla"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para una fila de tabla?",
//         opts: ["tr", "td", "th", "table"],
//         ans: 0, exp: "tr es table row"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para una celda de tabla?",
//         opts: ["td", "tr", "th", "tc"],
//         ans: 0, exp: "td es table data"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
//         q: "¿Qué etiqueta se usa para el encabezado de una tabla?",
//         opts: ["th", "td", "tr", "thead"],
//         ans: 0, exp: "th es table header (texto en negrita)"
//     },

//     ==================== ESTRUCTURA DEL DOCUMENTO ====================
    
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
//         q: "¿Qué etiqueta contiene toda la información visible de la página?",
//         opts: ["body", "head", "html", "main"],
//         ans: 0, exp: "body contiene el contenido visible"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
//         q: "¿Qué etiqueta contiene metadatos y el título?",
//         opts: ["head", "body", "html", "meta"],
//         ans: 0, exp: "head contiene información no visible"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
//         q: "¿Qué etiqueta es la raíz de todo documento HTML?",
//         opts: ["html", "head", "body", "!DOCTYPE"],
//         ans: 0, exp: "html envuelve todo el documento"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
//         q: "¿Qué declaración indica la versión de HTML?",
//         opts: ["!DOCTYPE html", "html", "version", "meta"],
//         ans: 0, exp: "!DOCTYPE html declara HTML5"
//     },

//     ==================== FORMULARIOS ====================
    
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para crear un formulario?",
//         opts: ["form", "input", "field", "submit"],
//         ans: 0, exp: "form define un formulario"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué atributo define dónde enviar los datos del formulario?",
//         opts: ["action", "method", "target", "enctype"],
//         ans: 0, exp: "action especifica la URL de envío"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué atributo define cómo enviar los datos del formulario?",
//         opts: ["method", "action", "target", "type"],
//         ans: 0, exp: "method puede ser GET o POST"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para un campo de texto?",
//         opts: ["input type='text'", "textarea", "field", "text"],
//         ans: 0, exp: "input con type text crea campo de texto"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para un botón de enviar?",
//         opts: ["input type='submit'", "button", "enviar", "submit"],
//         ans: 0, exp: "input type submit crea botón que envía el formulario"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para un área de texto de varias líneas?",
//         opts: ["textarea", "input type='text'", "textbox", "area"],
//         ans: 0, exp: "textarea permite múltiples líneas"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para una casilla de verificación?",
//         opts: ["input type='checkbox'", "check", "checkbox", "input type='check'"],
//         ans: 0, exp: "checkbox permite selección múltiple"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para un botón de opción (radio)?",
//         opts: ["input type='radio'", "radio", "option", "input type='option'"],
//         ans: 0, exp: "radio permite seleccionar solo una opción"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para un menú desplegable?",
//         opts: ["select", "dropdown", "menu", "option"],
//         ans: 0, exp: "select crea un menú desplegable"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "¿Qué etiqueta se usa para cada opción de un menú desplegable?",
//         opts: ["option", "select", "item", "choice"],
//         ans: 0, exp: "option define cada opción del select"
//     },

//     ==================== HTML SEMANTICO ====================
    
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa el encabezado de una sección?",
//         opts: ["header", "head", "h1", "section"],
//         ans: 0, exp: "header es el encabezado semántico"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa el pie de página?",
//         opts: ["footer", "foot", "bottom", "end"],
//         ans: 0, exp: "footer es el pie de página semántico"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa una sección independiente?",
//         opts: ["section", "div", "article", "main"],
//         ans: 0, exp: "section agrupa contenido temático"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa contenido autónomo como un artículo?",
//         opts: ["article", "section", "div", "main"],
//         ans: 0, exp: "article es para contenido independiente"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa la barra de navegación?",
//         opts: ["nav", "navigation", "menu", "navbar"],
//         ans: 0, exp: "nav es para enlaces de navegación"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa el contenido principal único?",
//         opts: ["main", "principal", "content", "body"],
//         ans: 0, exp: "main es el contenido principal (solo uno por página)"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
//         q: "¿Qué etiqueta representa contenido aparte (sidebar)?",
//         opts: ["aside", "sidebar", "side", "extra"],
//         ans: 0, exp: "aside es contenido relacionado indirectamente"
//     },

//     ==================== INTERMEDIO - CSS EN HTML ====================
    
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "¿Qué atributo se usa para aplicar CSS inline?",
//         opts: ["style", "css", "class", "id"],
//         ans: 0, exp: "style aplica CSS directamente al elemento"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "¿Qué etiqueta se usa para vincular un archivo CSS externo?",
//         opts: ["link", "style", "css", "script"],
//         ans: 0, exp: "link rel='stylesheet' href='archivo.css'"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "¿Qué etiqueta se usa para CSS interno?",
//         opts: ["style", "css", "link", "script"],
//         ans: 0, exp: "style va dentro de head para CSS interno"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "¿Qué atributo se usa para agrupar elementos por clase?",
//         opts: ["class", "id", "name", "group"],
//         ans: 0, exp: "class puede repetirse en múltiples elementos"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "¿Qué atributo se usa para identificar un elemento único?",
//         opts: ["id", "class", "name", "unique"],
//         ans: 0, exp: "id debe ser único en la página"
//     },

//     ==================== INTERMEDIO - JAVASCRIPT EN HTML ====================
    
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
//         q: "¿Qué etiqueta se usa para incluir JavaScript?",
//         opts: ["script", "js", "javascript", "code"],
//         ans: 0, exp: "script contiene o vincula JavaScript"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
//         q: "¿Qué atributo vincula un archivo JS externo?",
//         opts: ["src", "href", "link", "file"],
//         ans: 0, exp: "src especifica la ruta del archivo JS"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
//         q: "¿Qué evento se ejecuta al hacer clic?",
//         opts: ["onclick", "onmouseover", "onchange", "onsubmit"],
//         ans: 0, exp: "onclick se dispara al hacer clic"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
//         q: "¿Qué evento se ejecuta al cargar la página?",
//         opts: ["onload", "onclick", "onready", "onstart"],
//         ans: 0, exp: "onload se ejecuta cuando la página termina de cargar"
//     },

//     ==================== INTERMEDIO - FORMULARIOS AVANZADOS ====================
    
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
//         q: "¿Qué atributo hace que un campo sea obligatorio?",
//         opts: ["required", "mandatory", "obligatory", "must"],
//         ans: 0, exp: "required valida que el campo no esté vacío"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
//         q: "¿Qué tipo de input es para email?",
//         opts: ["email", "text", "mail", "correo"],
//         ans: 0, exp: "input type='email' valida formato de email"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
//         q: "¿Qué tipo de input es para número?",
//         opts: ["number", "num", "integer", "numeric"],
//         ans: 0, exp: "input type='number' muestra controles de incremento"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
//         q: "¿Qué tipo de input es para fecha?",
//         opts: ["date", "fecha", "calendar", "datetime"],
//         ans: 0, exp: "input type='date' muestra selector de fecha"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
//         q: "¿Qué atributo da una pista dentro del campo?",
//         opts: ["placeholder", "hint", "placeholder", "title"],
//         ans: 0, exp: "placeholder muestra texto temporal dentro del input"
//     },

//     ==================== AVANZADO - ACCESIBILIDAD ====================
    
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
//         q: "¿Qué atributo describe el propósito de un elemento para lectores de pantalla?",
//         opts: ["aria-label", "alt", "title", "description"],
//         ans: 0, exp: "aria-label proporciona texto accesible"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
//         q: "¿Qué atributo indica que un elemento es un botón para tecnología asistiva?",
//         opts: ["role='button'", "type='button'", "aria-button", "btn"],
//         ans: 0, exp: "role define el propósito semántico para accesibilidad"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
//         q: "¿Qué atributo indica que un elemento está deshabilitado?",
//         opts: ["disabled", "readonly", "hidden", "inactive"],
//         ans: 0, exp: "disabled hace que el elemento no sea interactivo"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
//         q: "¿Qué etiqueta agrupa opciones relacionadas en un formulario?",
//         opts: ["fieldset", "group", "section", "set"],
//         ans: 0, exp: "fieldset agrupa controles relacionados"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
//         q: "¿Qué etiqueta da título a un fieldset?",
//         opts: ["legend", "title", "caption", "label"],
//         ans: 0, exp: "legend es el título del fieldset"
//     },

//     ==================== AVANZADO - HTML5 API ====================
    
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué etiqueta se usa para reproducir video?",
//         opts: ["video", "media", "movie", "mp4"],
//         ans: 0, exp: "video inserta reproductor de video"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué etiqueta se usa para reproducir audio?",
//         opts: ["audio", "sound", "music", "mp3"],
//         ans: 0, exp: "audio inserta reproductor de audio"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué etiqueta se usa para dibujar gráficos con JavaScript?",
//         opts: ["canvas", "svg", "graphics", "draw"],
//         ans: 0, exp: "canvas permite dibujo programático"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué etiqueta se usa para gráficos vectoriales?",
//         opts: ["svg", "canvas", "vector", "path"],
//         ans: 0, exp: "svg es para gráficos vectoriales escalables"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué API almacena datos en el navegador sin fecha de expiración?",
//         opts: ["localStorage", "sessionStorage", "cookies", "cache"],
//         ans: 0, exp: "localStorage persiste hasta que se borra manualmente"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué API almacena datos solo por sesión?",
//         opts: ["sessionStorage", "localStorage", "cookies", "cache"],
//         ans: 0, exp: "sessionStorage se borra al cerrar la pestaña"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
//         q: "¿Qué etiqueta se usa para contenido dinámico como mapas?",
//         opts: ["iframe", "frame", "embed", "object"],
//         ans: 0, exp: "iframe incrusta otra página HTML"
//     },

//     ==================== AVANZADO - METADATOS ====================
    
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
//         q: "¿Qué metaetiqueta define el viewport para responsive?",
//         opts: ["viewport", "responsive", "scale", "width"],
//         ans: 0, exp: "meta name='viewport' controla el escalado en móviles"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
//         q: "¿Qué metaetiqueta define la codificación de caracteres?",
//         opts: ["charset", "encoding", "content-type", "codification"],
//         ans: 0, exp: "meta charset='UTF-8' define la codificación"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
//         q: "¿Qué metaetiqueta se usa para SEO (descripción)?",
//         opts: ["description", "keywords", "author", "title"],
//         ans: 0, exp: "meta name='description' para el resumen en buscadores"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
//         q: "¿Qué etiqueta define la relación entre el documento y un recurso externo?",
//         opts: ["link", "a", "href", "rel"],
//         ans: 0, exp: "link vincula CSS, favicon, etc"
//     },
//     {
//         profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
//         q: "¿Qué etiqueta se usa para el favicon?",
//         opts: ["link rel='icon'", "icon", "favicon", "image"],
//         ans: 0, exp: "link rel='icon' type='image/x-icon' href='favicon.ico'"
//     },
//      {
//         profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
//         q: "Aprendizaje:\n\nHTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web.\n\nESTRUCTURA BASICA:\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Mi pagina</title>\n</head>\n<body>\n    <h1>Hola Mundo</h1>\n    <p>Este es mi primer parrafo</p>\n</body>\n</html>\n\nEXPLICACION:\n- DOCTYPE: declara que es HTML5\n- html: raiz del documento\n- head: metadatos (no visibles)\n- title: titulo en la pestaña\n- body: contenido visible\n- h1: encabezado principal\n- p: parrafo\n\nPREGUNTA: ¿Qué etiqueta contiene el contenido visible de la pagina?",
//         opts: ["body", "head", "html", "title"],
//         ans: 0, exp: "body es donde va todo el contenido que ve el usuario"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
//         q: "Aprendizaje:\n\nENCABEZADOS: h1, h2, h3, h4, h5, h6\n\n<h1>Mas importante</h1>\n<h2>Menos importante</h2>\n<h3>Aun menos</h3>\n\nLos buscadores usan h1 para entender el tema principal.\n\nPREGUNTA: ¿Qué etiqueta se usa para el encabezado mas importante?",
//         opts: ["h1", "head", "header", "title"],
//         ans: 0, exp: "h1 es el encabezado de nivel 1, el mas importante para SEO"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
//         q: "Aprendizaje:\n\nPARRAFOS Y FORMATO:\n\n<p>Esto es un parrafo normal</p>\n<strong>Texto en negrita (importante)</strong>\n<em>Texto en cursiva (enfasis)</em>\n<br>   Salto de linea\n<hr>   Linea horizontal\n\nPREGUNTA: ¿Qué etiqueta se usa para un parrafo?",
//         opts: ["p", "par", "paragraph", "text"],
//         ans: 0, exp: "p es la etiqueta de parrafo"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Enlaces", diff: "easy",
//         q: "Aprendizaje:\n\nENLACES (hipervinculos):\n\n<a href='https://google.com'>Ir a Google</a>\n<a href='pagina.html'>Mi pagina local</a>\n<a href='#seccion'>Ir a seccion interna</a>\n<a href='mailto:correo@email.com'>Enviar email</a>\n\nATRIBUTOS IMPORTANTES:\n- href: destino del enlace\n- target='_blank': abre en nueva pestaña\n- title: texto al pasar el mouse\n\nPREGUNTA: ¿Qué atributo define la direccion de un enlace?",
//         opts: ["href", "src", "link", "url"],
//         ans: 0, exp: "href especifica la URL a donde va el enlace"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Imagenes", diff: "easy",
//         q: "Aprendizaje:\n\nIMAGENES:\n\n<img src='foto.jpg' alt='Descripcion de la foto' width='300' height='200'>\n\nATRIBUTOS:\n- src: ruta de la imagen\n- alt: texto alternativo (accesibilidad, y si no carga la imagen)\n- width: ancho en pixeles\n- height: alto en pixeles\n\nPREGUNTA: ¿Qué atributo proporciona texto alternativo para una imagen?",
//         opts: ["alt", "src", "title", "description"],
//         ans: 0, exp: "alt es obligatorio para accesibilidad y si no carga la imagen"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
//         q: "Aprendizaje:\n\nLISTAS:\n\nLista NO ordenada (viñetas):\n<ul>\n    <li>Manzana</li>\n    <li>Pera</li>\n    <li>Uva</li>\n</ul>\n\nLista ordenada (numeros):\n<ol>\n    <li>Primero</li>\n    <li>Segundo</li>\n    <li>Tercero</li>\n</ol>\n\nPREGUNTA: ¿Qué etiqueta se usa para una lista ordenada (numerada)?",
//         opts: ["ol", "ul", "li", "list"],
//         ans: 0, exp: "ol es ordered list (numerada)"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Tablas", diff: "easy",
//         q: "Aprendizaje:\n\nTABLAS:\n\n<table border='1'>\n    <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n    </tr>\n    <tr>\n        <td>Ana</td>\n        <td>25</td>\n    </tr>\n    <tr>\n        <td>Luis</td>\n        <td>30</td>\n    </tr>\n</table>\n\nETIQUETAS:\n- table: crea la tabla\n- tr: table row (fila)\n- th: table header (encabezado)\n- td: table data (celda)\n\nPREGUNTA: ¿Qué etiqueta se usa para una fila de tabla?",
//         opts: ["tr", "td", "th", "table"],
//         ans: 0, exp: "tr es table row"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "Aprendizaje:\n\nFORMULARIOS BASICOS:\n\n<form action='procesar.php' method='POST'>\n    <label>Nombre:</label>\n    <input type='text' name='nombre' placeholder='Tu nombre'>\n    \n    <label>Email:</label>\n    <input type='email' name='correo' required>\n    \n    <input type='submit' value='Enviar'>\n</form>\n\nATRIBUTOS DE FORM:\n- action: donde se envian los datos\n- method: GET (visible en URL) o POST (oculto)\n\nPREGUNTA: ¿Qué atributo define donde se envian los datos del formulario?",
//         opts: ["action", "method", "target", "enctype"],
//         ans: 0, exp: "action especifica la URL que procesara el formulario"
//     },
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
//         q: "Aprendizaje:\n\nTIPOS DE INPUT:\n\n<input type='text'>      - Texto normal\n<input type='password'>  - Contraseña (oculta)\n<input type='email'>     - Email (valida formato)\n<input type='number'>    - Numeros\n<input type='date'>      - Calendario\n<input type='checkbox'>  - Casilla de verificacion\n<input type='radio'>     - Boton de opcion (uno por grupo)\n<input type='file'>      - Subir archivos\n<textarea>               - Texto multilinea\n<select>                 - Menu desplegable\n\nPREGUNTA: ¿Qué tipo de input se usa para contraseñas?",
//         opts: ["password", "text", "hidden", "secret"],
//         ans: 0, exp: "input type='password' oculta los caracteres con puntos o asteriscos"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "Aprendizaje:\n\nCSS (Cascading Style Sheets) - Estilos:\n\nTRES FORMAS DE USAR CSS:\n\n1. Inline (dentro del elemento):\n   <p style='color:red; font-size:20px;'>Texto rojo</p>\n\n2. Interno (dentro de head):\n   <style>\n       p { color: red; }\n       .mi-clase { font-size: 20px; }\n       #mi-id { background: yellow; }\n   </style>\n\n3. Externo (archivo separado):\n   <link rel='stylesheet' href='estilos.css'>\n\nSELECTORES:\n- etiqueta: p { }\n- clase: .nombre { }\n- id: #nombre { }\n\nPREGUNTA: ¿Qué etiqueta se usa para vincular un archivo CSS externo?",
//         opts: ["link", "style", "css", "script"],
//         ans: 0, exp: "link rel='stylesheet' href='archivo.css'"
//     },
//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "Aprendizaje:\n\nMODELO DE CAJA (Box Model):\n\nCada elemento es una caja con:\n\n[ MARGEN (externa) ]\n    [ BORDE ]\n        [ RELLENO (padding) ]\n            [ CONTENIDO ]\n\nPROPIEDADES:\n- margin: espacio FUERA del borde\n- border: linea alrededor\n- padding: espacio DENTRO del borde\n- width / height: tamaño del contenido\n\nPREGUNTA: ¿Qué propiedad controla el espacio DENTRO del borde (entre borde y contenido)?",
//         opts: ["padding", "margin", "border", "spacing"],
//         ans: 0, exp: "padding es el espacio interno entre borde y contenido"
//     },
//     {
//     profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//     q: "Aprendizaje:\n\nFLEXBOX - DISEÑO MODERNO:\n\n<div style='display: flex; justify-content: center; align-items: center;'>\n    <div>Item 1</div>\n    <div>Item 2</div>\n</div>\n\nPROPIEDADES DEL CONTENEDOR:\n- display: flex (activa flexbox)\n- flex-direction: row (horizontal) / column (vertical)\n- justify-content: center (horizontal)\n- align-items: center (vertical)\n- gap: 10px (espacio entre items)\n\nPREGUNTA: ¿Qué propiedad de flexbox centra los elementos HORIZONTALMENTE?",
//     opts: ["justify-content", "align-items", "text-align", "margin-auto"],
//     ans: 0,
//     exp: "justify-content alinea horizontalmente en flexbox"
// },



    
//     //==================== UNIDAD: JAVASCRIPT BASICO ====================
      
//     {
//         profe: true, intermedio: false, avanzado: false, unit: "HTML", diff: "easy",
//         q: "Completa la estructura básica de una página HTML colocando cada etiqueta en su posición correcta.",
//         extra: `
//         <div class="extra-content">
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Posición</th><th>Etiqueta</th><th>Opciones</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>1. Primera línea</td><td><input type="text" size="12"></td><td>DOCTYPE, html, head</td></tr>
//         <tr><td>2. Raíz del documento</td><td><input type="text" size="12"></td><td>html, body, head</td></tr>
//         <tr><td>3. Metadatos y título</td><td><input type="text" size="12"></td><td>head, body, title</td></tr>
//         <tr><td>4. Contenido visible</td><td><input type="text" size="12"></td><td>body, main, section</td></tr>
//         <tr><td>5. Título de la pestaña</td><td><input type="text" size="12"></td><td>title, h1, header</td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["!DOCTYPE html - html - head - body - title", "html - head - title - body", "DOCTYPE - html - body - head - title", "head - title - body - html"],
//         ans: 0,
//         exp: "PASO 1: <!DOCTYPE html> es la primera línea\nPASO 2: <html> es la raíz\nPASO 3: <head> contiene metadatos\nPASO 4: <body> es el contenido visible\nPASO 5: <title> va dentro de head para la pestaña"
//     },

//     {
//         profe: true, intermedio: false, avanzado: false, unit: "HTML", diff: "easy",
//         q: "Completa la jerarquía de encabezados colocando la etiqueta correcta para cada nivel de importancia.",
//         extra: `
//         <div class="extra-content">
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Importancia</th><th>Etiqueta</th><th>Escribe aquí</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>1. Más importante (solo uno)</td><td>h1</td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         <tr><td>2. Subtítulo principal</td><td><input type="text" size="6"></td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         <tr><td>3. Subsección</td><td><input type="text" size="6"></td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         <tr><td>4. Nivel secundario</td><td><input type="text" size="6"></td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         <tr><td>5. Nivel terciario</td><td><input type="text" size="6"></td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         <tr><td>6. Menos importante</td><td><input type="text" size="6"></td><td><input type="text" size="8" placeholder="ejemplo"></td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["h1,h2,h3,h4,h5,h6", "h6,h5,h4,h3,h2,h1", "h1,h3,h2,h4,h6,h5", "h1,h2,h4,h3,h5,h6"],
//         ans: 0,
//         exp: "Jerarquía correcta: h1 (más importante) → h2 → h3 → h4 → h5 → h6 (menos importante)"
//     },

//     {
//         profe: true, intermedio: false, avanzado: false, unit: "HTML", diff: "medium",
//         q: "En la tabla HTML, identifica qué etiqueta va en cada celda para completar la tabla correctamente.",
//         extra: `
//         <div class="extra-content">
//         <table class="subnet-table" border="1" style="border-collapse: collapse;">
//         <thead>
//         <tr><th>Fila/Col</th><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Fila 1 (encabezados)</td><td><input type="text" size="6" placeholder="???"></td><td><input type="text" size="6" placeholder="???"></td><td><input type="text" size="6" placeholder="???"></td></tr>
//         <tr><td>Fila 2 (datos)</td><td><input type="text" size="6" placeholder="???"></td><td><input type="text" size="6" placeholder="???"></td><td><input type="text" size="6" placeholder="???"></td></tr>
//         </tbody>
//         </table>
//         <p>Opciones disponibles: th, td, tr</p>
//         </div>
//         `,
//         opts: ["th,th,th,td,td,td", "td,td,td,th,th,th", "th,td,th,td,th,td", "td,th,td,th,td,th"],
//         ans: 0,
//         exp: "PASO 1: La primera fila usa <th> (encabezados)\nPASO 2: La segunda fila usa <td> (datos normales)\nRESULTADO: th, th, th, td, td, td"
//     },

//     {
//         profe: true, intermedio: false, avanzado: false, unit: "HTML", diff: "medium",
//         q: "Completa los tipos de input correctos para cada campo del formulario.",
//         extra: `
//         <div class="extra-content">
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Campo</th><th>Tipo de input</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Contraseña (oculta caracteres)</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         <tr><td>Email (validación automática)</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         <tr><td>Número (con flechas arriba/abajo)</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         <tr><td>Fecha (calendario)</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         <tr><td>Casilla de verificación</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         <tr><td>Botón de opción (solo uno por grupo)</td><td><input type="text" size="12" placeholder="type=?"></td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["password,email,number,date,checkbox,radio", "text,email,num,calendar,check,option", "password,mail,int,fecha,box,radio", "secret,email,digit,cal,box,select"],
//         ans: 0,
//         exp: "PASO 1: Contraseña → type='password'\nPASO 2: Email → type='email'\nPASO 3: Número → type='number'\nPASO 4: Fecha → type='date'\nPASO 5: Checkbox → type='checkbox'\nPASO 6: Radio → type='radio'"
//     },

//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "Calcula el ancho total de un elemento con: width=100px, padding=10px, border=2px, margin=20px",
//         extra: `
//         <div class="extra-content">
//         <p>Fórmula: Ancho total = width + padding(izq+der) + border(izq+der) + margin(izq+der)</p>
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Componente</th><th>Cálculo</th><th>Resultado</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>width</td><td>100</td><td><input type="text" size="5" value="100" disabled></td></tr>
//         <tr><td>padding (izq+der)</td><td>10 + 10</td><td><input type="text" size="5" placeholder="???"></td></tr>
//         <tr><td>border (izq+der)</td><td>2 + 2</td><td><input type="text" size="5" placeholder="???"></td></tr>
//         <tr><td>margin (izq+der)</td><td>20 + 20</td><td><input type="text" size="5" placeholder="???"></td></tr>
//         <tr><td><strong>ANCHO TOTAL</strong></td><td>suma total</td><td><input type="text" size="8" placeholder="???"></td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["20,4,40,164", "20,4,20,144", "10,2,20,132", "20,2,40,162"],
//         ans: 0,
//         exp: "PASO 1: padding = 10+10 = 20px\nPASO 2: border = 2+2 = 4px\nPASO 3: margin = 20+20 = 40px\nPASO 4: TOTAL = 100+20+4+40 = 164px"
//     },

//     {
//         profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
//         q: "Completa las propiedades CSS para centrar un elemento dentro de un contenedor flex.",
//         extra: `
//         <div class="extra-content">
//         <pre>
//         .contenedor {
//             display: ___;
//             justify-content: ___;
//             align-items: ___;
//             height: 400px;
//         }
//         </pre>
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Propiedad</th><th>Valor correcto</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>display</td><td><input type="text" size="8" placeholder="???"></td></tr>
//         <tr><td>justify-content</td><td><input type="text" size="10" placeholder="???"></td></tr>
//         <tr><td>align-items</td><td><input type="text" size="10" placeholder="???"></td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["flex,center,center", "block,middle,center", "flex,space-between,stretch", "grid,center,middle"],
//         ans: 0,
//         exp: "PASO 1: display: flex activa flexbox\nPASO 2: justify-content: center centra horizontal\nPASO 3: align-items: center centra vertical"
//     },

//     {
//         profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
//         q: "Completa el código JavaScript para cambiar el texto de un elemento al hacer clic en un botón.",
//         extra: `
//         <div class="extra-content">
//         <pre>
//         &lt;p id="mensaje"&gt;Texto original&lt;/p&gt;
//         &lt;button onclick="cambiar()"&gt;Cambiar&lt;/button&gt;
        
//         &lt;script&gt;
//         function cambiar() {
//             let elemento = document.___("mensaje");
//             elemento.___ = "Texto nuevo";
//         }
//         &lt;/script&gt;
//         </pre>
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Espacio</th><th>Método/Propiedad</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>document.___("mensaje")</td><td><input type="text" size="15" placeholder="???"></td></tr>
//         <tr><td>elemento.___ = "Texto nuevo"</td><td><input type="text" size="12" placeholder="???"></td></tr>
//         </tbody>
//         </table>
//         </div>
//         `,
//         opts: ["getElementById,innerHTML", "getElement,text", "querySelector,value", "getElementById,textContent"],
//         ans: 0,
//         exp: "PASO 1: getElementById selecciona el elemento por su ID\nPASO 2: innerHTML cambia el contenido HTML del elemento"
//     },

 {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Estás creando tu primera página web. Necesitas la estructura básica completa.",
        q: "¿Cuál es el orden correcto de las etiquetas en la estructura básica de HTML?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Posición</th><th>Descripción</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="3">Completa la estructura colocando cada etiqueta en el orden correcto: <!DOCTYPE html>, html, head, title, body</td></tr>
        <tr><td>1</td><td>Declara que el documento usa HTML5</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        <tr><td>2</td><td>Raíz del documento, envuelve todo el código HTML</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        <tr><td>3</td><td>Contiene metadatos y el título (no visible)</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        <tr><td>4</td><td>Define el título que aparece en la pestaña</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        <tr><td>5</td><td>Contiene todo el contenido visible de la página</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["A) <!DOCTYPE html>, <html>, <head>, <title>, <body>", "B) <html>, <head>, <title>, <body>, <!DOCTYPE>", "C) <body>, <head>, <title>, <html>, <!DOCTYPE>", "D) <head>, <title>, <body>, <!DOCTYPE>, <html>"],
        ans: 0,
        exp: "La estructura correcta comienza con <!DOCTYPE html> para declarar la versión HTML5. Luego sigue <html> como raíz del documento. Dentro de <html> se coloca <head> que contiene metadatos y el <title> (texto de la pestaña). Finalmente <body> alberga todo el contenido visible. El orden es: <!DOCTYPE html> → <html> → <head> → <title> → <body>."
    },

    // ==================== ENCABEZADOS (conceptual) ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Tienes una pagina de recetas. El titulo principal es 'Recetas Caseras'. Luego tienes secciones: 'Desayunos', 'Almuerzos', 'Cenas'.",
        q: "¿Qué etiqueta usas para el título principal y qué etiqueta usas para cada sección?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Elemento</th><th>Descripción</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td>Título principal "Recetas Caseras"</td><td>El más importante, solo uno por página</td><td><input type="text" size="10" placeholder="Escribe aquí"></td></tr>
        <tr><td>Sección "Desayunos"</td><td>Subtítulo, menos importante que h1</td><td><input type="text" size="10" placeholder="Escribe aquí"></td></tr>
        <tr><td>Sección "Almuerzos"</td><td>Subtítulo, menos importante que h1</td><td><input type="text" size="10" placeholder="Escribe aquí"></td></tr>
        <tr><td>Sección "Cenas"</td><td>Subtítulo, menos importante que h1</td><td><input type="text" size="10" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["A) h1 para el título, h2 para las secciones", "B) h1 para todo", "C) h2 para todo", "D) title para el título, h1 para las secciones"],
        ans: 0,
        exp: "h1 es el encabezado de nivel más alto y debe usarse solo una vez por página para el título principal. h2 es para subtítulos o secciones principales, creando una jerarquía clara. Los buscadores dan gran importancia al h1 para el SEO, mientras que los h2 organizan el contenido de forma lógica."
    },

    // ==================== MODELO DE CAJA (cálculo - CON PASOS) ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "Un elemento tiene width: 100px, padding: 10px, border: 2px, margin: 20px.",
        q: "¿Cuál es el ancho TOTAL que ocupa el elemento en la página?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Componente</th><th>Valor</th><th>Operación</th><th>Resultado</th></tr>
        </thead>
        <tbody>
        <tr><td>width</td><td>100px</td><td>-</td><td>100px</td></tr>
        <tr><td>padding</td><td>10px cada lado</td><td>10 + 10</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td>border</td><td>2px cada lado</td><td>2 + 2</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td>margin</td><td>20px cada lado</td><td>20 + 20</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td><strong>TOTAL</strong></td><td>-</td><td>sumar todo</td><td><input type="text" size="8" placeholder="Escribe aquí">px</td></tr>
        </tbody>
        </table>
        `,
        opts: ["A) 164px", "B) 124px", "C) 144px", "D) 104px"],
        ans: 0,
        exp: "PASO 1: Calcular padding horizontal: 10px (izquierdo) + 10px (derecho) = 20px. PASO 2: Calcular border horizontal: 2px (izquierdo) + 2px (derecho) = 4px. PASO 3: Calcular margin horizontal: 20px (izquierdo) + 20px (derecho) = 40px. PASO 4: Sumar todo al width: 100px + 20px + 4px + 40px = 164px. El ancho total que ocupa el elemento en la página es 164px."
    },

    // ==================== ENLACES TARGET (conceptual) ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Tienes una pagina web con enlaces a redes sociales. Quieres que cuando el usuario haga clic en el enlace de Facebook, se abra en una NUEVA pestaña.",
        q: "¿Qué atributo agregas al <a> para abrir en nueva pestaña?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Código</th><th>Pista</th><th>Escribe tu respuesta</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">&lt;a href="https://facebook.com" <input type="text" size="15" placeholder="Escribe el atributo">="_blank"&gt;Facebook&lt;/a&gt;</td></td>
        <tr><td colspan="2">Atributo que define DÓNDE se abre el enlace</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["A) target", "B) href", "C) src", "D) rel"],
        ans: 0,
        exp: "El atributo 'target' define dónde se abre el enlace. target='_blank' abre en una nueva pestaña o ventana, mientras que target='_self' (el valor por defecto) abre en la misma pestaña."
    },

    // ==================== JAVASCRIPT VALIDACION (procedimiento - CON PASOS) ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "JavaScript",
        diff: "hard",
        case: "Tu formulario tiene campo email. Quieres que si el usuario no escribe nada, muestres alerta y NO se envie el formulario.",
        q: "¿Qué valor debe devolver la función de validación para evitar el envío?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">function validar() {<br>    let email = document.getElementById("email").value;<br>    if (email == "") {<br>        alert("Email obligatorio");<br>        return <input type="text" size="8" placeholder="Escribe aquí">;<br>    }<br>    return true;<br>}</td></tr>
        <tr><td colspan="2">Valor booleano que DETIENE el envío del formulario</td></tr>
        </tbody>
        </table>
        `,
        opts: ["A) false", "B) true", "C) null", "D) undefined"],
        ans: 0,
        exp: "PASO 1: La función de validación se ejecuta cuando el formulario se envía (evento onsubmit). PASO 2: Si la función devuelve 'true', el formulario se envía al servidor. PASO 3: Si la función devuelve 'false', el envío se cancela inmediatamente. PASO 4: En este caso, cuando el email está vacío, se muestra una alerta y se debe detener el envío con 'return false'."
    },

    // ==================== IMAGENES ALT ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Tu pagina tiene una foto de un perro. La imagen no carga por error en la ruta.",
        q: "¿Qué atributo de img contiene el texto alternativo que se muestra cuando la imagen no carga?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Atributo</th><th>Función</th><th>Escribe el atributo</th></tr>
        </thead>
        <tbody>
        <tr><td>src</td><td>Ruta de la imagen</td><td><input type="text" size="12" placeholder="Escribe aquí"></td></tr>
        <tr><td>???</td><td>Texto alternativo (se muestra si la imagen no carga, mejora accesibilidad)</td><td><input type="text" size="12" placeholder="Escribe aquí"></td></tr>
        <tr><td>title</td><td>Tooltip al pasar el mouse</td><td><input type="text" size="12" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["alt", "src", "title", "description"],
        ans: 0,
        exp: "PASO 1: El atributo 'alt' es OBLIGATORIO en la etiqueta <img>. PASO 2: Si la imagen no carga, se muestra el texto del alt. PASO 3: Los lectores de pantalla para personas ciegas leen el alt. PASO 4: El alt también ayuda al SEO de la página. PASO 5: Debe describir la imagen de forma clara y concisa. RESULTADO: El atributo correcto es alt."
    },

    // ==================== RUTAS DE IMAGENES ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Tu sitio web tiene la estructura: /index.html, /imagenes/logo.png. Estas en index.html.",
        q: "¿Qué ruta usas para mostrar logo.png desde index.html?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Estructura</th><th>Pista</th><th>Escribe la ruta correcta</th></tr>
        </thead>
        <tbody>
        <tr><td>/index.html<br>/imagenes/logo.png</td><td>La carpeta 'imagenes' está al mismo nivel que index.html</td><td>&lt;img src="<input type="text" size="25" placeholder="Escribe la ruta">"&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["imagenes/logo.png", "logo.png", "../imagenes/logo.png", "/imagenes/logo.png"],
        ans: 0,
        exp: "PASO 1: Las rutas relativas se basan en la ubicación del archivo actual. PASO 2: 'imagenes' es una subcarpeta del directorio donde está index.html. PASO 3: Para acceder a logo.png, primero se entra a la carpeta 'imagenes' y luego al archivo. PASO 4: './' es opcional para la carpeta actual. PASO 5: '../' sube un nivel, no es necesario aquí. RESULTADO: La ruta correcta es 'imagenes/logo.png'."
    },

    // ==================== LISTAS UL OL ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Estas creando una pagina con una receta de cocina. Necesitas mostrar los ingredientes (sin orden) y los pasos (en orden).",
        q: "¿Qué etiqueta usas para ingredientes (sin orden) y qué etiqueta usas para pasos (ordenados)?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Contenido</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td>Ingredientes (sin orden específico)</td><td>Lista con viñetas (unordered list)</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Pasos (deben seguir un orden)</td><td>Lista numerada (ordered list)</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["ul, ol", "ol, ul", "ul, ul", "ol, ol"],
        ans: 0,
        exp: "PASO 1: <ul> (unordered list) crea una lista con viñetas, para elementos SIN orden. PASO 2: <ol> (ordered list) crea una lista numerada, para elementos CON orden. PASO 3: Cada elemento de la lista se escribe con <li>. PASO 4: Los ingredientes no tienen orden específico → se usa <ul>. PASO 5: Los pasos deben seguirse en orden → se usa <ol>. RESULTADO: ul para ingredientes, ol para pasos."
    },

    // ==================== LISTAS ANIDADAS ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Haces un menu de navegacion con categorias y subcategorias: 'Ropa' tiene 'Hombre' y 'Mujer'; 'Electronica' tiene 'Celulares' y 'Computadoras'.",
        q: "¿Cómo estructuras las listas anidadas?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Nivel</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td>Lista principal</td><td>Contenedor de las categorías principales</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Cada categoría (Ropa, Electronica)</td><td>Elemento de la lista principal</td><td>&lt;li&gt;</td></tr>
        <tr><td>Subcategorías dentro de cada categoría</td><td>Lista DENTRO de un &lt;li&gt;</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["ul", "ul", "ul", "ol"],
        ans: 0,
        exp: "PASO 1: La lista principal se crea con <ul> (o <ol>). PASO 2: Cada categoría va dentro de un <li>. PASO 3: DENTRO de ese <li>, se crea OTRA lista (<ul> o <ol>) para las subcategorías. PASO 4: Las subcategorías también van dentro de <li>. PASO 5: Se cierra la lista interna antes de cerrar el <li> de la categoría. RESULTADO: Un <ul> principal, cada <li> contiene otro <ul> para las subcategorías."
    },

    // ==================== TABLAS TH ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Tienes una lista de empleados con: Nombre, Cargo, Salario. Quieres mostrar los nombres de las columnas en negrita y centrados.",
        q: "¿Qué etiqueta usas para los encabezados de columna?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Elemento</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td>Encabezado de columna (negrita, centrado)</td><td>Table Header</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Fila de tabla</td><td>Table Row</td><td>&lt;tr&gt;</td></tr>
        <tr><td>Celda de datos normal</td><td>Table Data</td><td>&lt;td&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["th", "td", "tr", "caption"],
        ans: 0,
        exp: "PASO 1: <th> (table header) es para celdas de encabezado. PASO 2: Por defecto, el texto dentro de <th> se muestra en NEGRITA y CENTRADO. PASO 3: <td> (table data) es para celdas normales. PASO 4: <tr> (table row) define una fila completa. PASO 5: Los encabezados de columna van dentro de la primera fila <tr>. RESULTADO: Para encabezados se usa <th>."
    },

    // ==================== TABLAS COLSPAN ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Haces una tabla de horarios. Lunes, Martes, Miercoles son días. Quieres que la celda 'Mañana' ocupe las 3 columnas.",
        q: "¿Qué atributo usas para unir celdas horizontalmente?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Código</th><th>Pista</th><th>Escribe el atributo</th></tr>
        </thead>
        <tbody>
        <tr><td>&lt;td <input type="text" size="12" placeholder="Escribe aquí">="3"&gt;Mañana&lt;/td&gt;</td><td>Une columnas (column span)</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["colspan", "rowspan", "merge", "span"],
        ans: 0,
        exp: "PASO 1: colspan (column span) une celdas HORIZONTALMENTE. PASO 2: colspan='3' significa que la celda ocupa el espacio de 3 columnas. PASO 3: Las celdas que quedan cubiertas NO deben escribirse. PASO 4: rowspan une celdas VERTICALMENTE. RESULTADO: Para unir horizontalmente se usa colspan."
    },

    // ==================== FORMULARIOS METHOD ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Estas haciendo un formulario de registro. Los datos son sensibles (contraseña).",
        q: "¿Qué método de formulario usas para datos sensibles?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Método</th><th>Característica</th><th>¿Es seguro?</th></tr>
        </thead>
        <tbody>
        <tr><td>GET</td><td>Los datos se ven en la URL</td><td><input type="text" size="8" placeholder="Si/No"></td></tr>
        <tr><td>???</td><td>Los datos NO se ven en la URL, van en el cuerpo de la petición</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["POST", "GET", "SEND", "PUT"],
        ans: 0,
        exp: "PASO 1: GET envía los datos en la URL (ej: ?nombre=Juan&edad=25). PASO 2: Los datos de GET son VISIBLES y se guardan en el historial. PASO 3: POST envía los datos en el CUERPO de la petición, NO son visibles en la URL. PASO 4: POST es más SEGURO para contraseñas y datos sensibles. PASO 5: POST también permite enviar más datos (no hay límite de longitud como GET). RESULTADO: Para datos sensibles se usa POST."
    },

    // ==================== INPUT CHECKBOX ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Quieres que el usuario pueda seleccionar VARIOS hobbies (deporte, musica, lectura).",
        q: "¿Qué tipo de input permite seleccionar múltiples opciones?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Tipo de input</th><th>Característica</th><th>Escribe el tipo</th></tr>
        </thead>
        <tbody>
        <tr><td>radio</td><td>Solo una opción por grupo</td><td><input type="text" size="12" placeholder="Escribe aquí"></td></tr>
        <tr><td>???</td><td>Permite seleccionar MÚLTIPLES opciones (casillas cuadradas)</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["checkbox", "radio", "select", "option"],
        ans: 0,
        exp: "PASO 1: checkbox permite seleccionar VARIAS opciones independientes. PASO 2: Cada checkbox funciona de forma independiente (no se agrupan por name). PASO 3: El usuario puede marcar 0, 1 o varios checkboxes. PASO 4: radio solo permite UNA selección por grupo (mismo name). PASO 5: select también puede permitir múltiple con 'multiple', pero checkbox es más común. RESULTADO: Para múltiples opciones se usa checkbox."
    },

    // ==================== INPUT RADIO ====================
    {
        profe: true,
        intermedio: false,
        avanzado: false,
        unit: "HTML",
        diff: "easy",
        case: "Haces un formulario donde el usuario debe elegir UN solo metodo de pago: Tarjeta, Efectivo, Transferencia.",
        q: "¿Qué input usas y qué deben tener en común?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Input</th><th>Atributo común</th><th>Escribe tu respuesta</th></tr>
        </thead>
        <tbody>
        <tr><td>&lt;input type="<input type="text" size="12" placeholder="Escribe el tipo">"&gt;</td><td>Todos deben tener el mismo <strong>???</strong></td><td><input type="text" size="20" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["radio, name", "checkbox, id", "radio, id", "checkbox, name"],
        ans: 0,
        exp: "PASO 1: radio permite seleccionar SOLO una opción dentro de un grupo. PASO 2: Para agrupar radios, deben tener el MISMO 'name'. PASO 3: Si tienen diferente name, funcionan como grupos separados. PASO 4: El 'value' es el dato que se envía al servidor. PASO 5: Solo se puede seleccionar un radio por grupo. RESULTADO: Se usa radio con el mismo name."
    },

    // ==================== HTML SEMANTICO ESTRUCTURA ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "HTML",
        diff: "medium",
        case: "Tu pagina tiene: menu de navegacion arriba, un articulo principal en el centro, una barra lateral con publicidad, y pie de pagina con copyright.",
        q: "¿Qué etiquetas semánticas usas para cada parte?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Parte de la página</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <td><td>Menu de navegación</td><td>Contiene enlaces de navegación</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Artículo principal</td><td>Contenido independiente (post, noticia)</td><td>&lt;<input type="text" size="8" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Barra lateral (sidebar)</td><td>Contenido relacionado, publicidad</td><td>&lt;<input type="text" size="6" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Pie de página</td><td>Copyright, enlaces, contacto</td><td>&lt;<input type="text" size="7" placeholder="Escribe aquí">&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["nav, article, aside, footer", "header, main, section, footer", "div, div, div, div", "menu, body, sidebar, end"],
        ans: 0,
        exp: "PASO 1: <nav> es para bloques de enlaces de navegación principales. PASO 2: <article> es para contenido INDEPENDIENTE que podría funcionar solo (post, noticia). PASO 3: <aside> es para contenido RELACIONADO pero no principal (sidebar, publicidad). PASO 4: <footer> es para el pie de página (copyright, información de contacto). PASO 5: Estas etiquetas mejoran SEO y accesibilidad. RESULTADO: nav, article, aside, footer."
    },

    // ==================== ARTICLE vs SECTION ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "HTML",
        diff: "medium",
        case: "Tu pagina tiene una seccion de 'Productos destacados' con 3 productos. Cada producto tiene nombre y precio.",
        q: "¿Cómo estructuras los productos?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Contenedor</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td>Grupo de productos destacados</td><td>Agrupa contenido RELACIONADO que necesita contexto</td><td>&lt;<input type="text" size="8" placeholder="Escribe aquí">&gt;</td></tr>
        <tr><td>Cada producto individual</td><td>Contenido INDEPENDIENTE que podría funcionar solo</td><td>&lt;<input type="text" size="8" placeholder="Escribe aquí">&gt;</td></tr>
        </tbody>
        </table>
        `,
        opts: ["section, article", "article, section", "div, div", "aside, main"],
        ans: 0,
        exp: "PASO 1: <section> agrupa contenido RELACIONADO que tiene sentido dentro del contexto de la página. PASO 2: <article> es para contenido INDEPENDIENTE que podría ser reutilizable o sindicalizable. PASO 3: Los productos son elementos individuales que podrían estar en otra página → <article>. PASO 4: El bloque 'Productos destacados' es un grupo temático → <section>. RESULTADO: section para el grupo, article para cada producto."
    },

    // ==================== CSS SELECTORES ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "Tienes 3 botones en tu pagina. Quieres que UNO especifico (el de enviar) tenga fondo verde.",
        q: "¿Qué selector CSS usas para un elemento ÚNICO?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Selector</th><th>Sintaxis</th><th>Escribe el selector</th></tr>
        </thead>
        <tbody>
        <tr><td>Clase</td><td>.boton { }</td><td><input type="text" size="12" placeholder="Escribe aquí"></td></tr>
        <tr><td>ID</td><td><input type="text" size="6" placeholder="Escribe aquí">enviar { background: green; }</td><td><input type="text" size="15" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["#", ".", "*", "&"],
        ans: 0,
        exp: "PASO 1: El selector de ID se escribe con el símbolo '#' seguido del nombre del ID. PASO 2: El ID debe ser ÚNICO en toda la página (solo un elemento puede tener ese ID). PASO 3: La clase ('.') puede repetirse en múltiples elementos. PASO 4: Para apuntar a un elemento específico y único, se usa ID. RESULTADO: El selector correcto es '#'."
    },

    // ==================== CSS MODELO DE CAJA ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "Un elemento tiene width: 100px, padding: 10px, border: 2px, margin: 20px.",
        q: "¿Cuál es el ancho TOTAL que ocupa el elemento en la página?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Componente</th><th>Valor</th><th>Operación</th><th>Resultado</th></tr>
        </thead>
        <tbody>
        <tr><td>width</td><td>100px</td><td>-</td><td>100px</td></tr>
        <tr><td>padding</td><td>10px cada lado</td><td>10 + 10</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td>border</td><td>2px cada lado</td><td>2 + 2</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td>margin</td><td>20px cada lado</td><td>20 + 20</td><td><input type="text" size="5" placeholder="Escribe aquí">px</td></tr>
        <tr><td><strong>TOTAL</strong></td><td>-</td><td>sumar todo</td><td><input type="text" size="8" placeholder="Escribe aquí">px</td></tr>
        </tbody>
        </table>
        `,
        opts: ["20, 4, 40, 164", "20, 4, 20, 144", "10, 2, 20, 132", "20, 2, 40, 162"],
        ans: 0,
        exp: "PASO 1: padding izquierdo + derecho = 10px + 10px = 20px. PASO 2: border izquierdo + derecho = 2px + 2px = 4px. PASO 3: margin izquierdo + derecho = 20px + 20px = 40px. PASO 4: Ancho TOTAL = width + padding + border + margin. PASO 5: 100px + 20px + 4px + 40px = 164px. RESULTADO: El ancho total es 164px."
    },

    // ==================== CSS FLEXBOX ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "Quieres centrar UN SOLO boton dentro de un div, tanto horizontal como verticalmente.",
        q: "¿Qué propiedad de Flexbox centra los elementos HORIZONTALMENTE?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Propiedad</th><th>Valor</th><th>Escribe la propiedad</th></tr>
        </thead>
        <tbody>
        <tr><td>display</td><td>flex</td><td><input type="text" size="8" placeholder="Escribe aquí"></td></tr>
        <tr><td><input type="text" size="18" placeholder="Escribe aquí"></td><td>center</td><td><input type="text" size="20" placeholder="Escribe aquí"></td></tr>
        <tr><td>align-items</td><td>center</td><td><input type="text" size="8" placeholder="Escribe aquí"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["justify-content", "align-items", "flex-direction", "justify-items"],
        ans: 0,
        exp: "PASO 1: display: flex activa el modo Flexbox en el contenedor. PASO 2: justify-content controla la alineación en el eje PRINCIPAL (horizontal si flex-direction es row). PASO 3: justify-content: center centra los elementos horizontalmente. PASO 4: align-items controla la alineación en el eje CRUZADO (vertical si flex-direction es row). PASO 5: align-items: center centra verticalmente. RESULTADO: justify-content centra horizontalmente."
    },

    // ==================== MEDIA QUERIES ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "En tu pagina, el menu horizontal se ve bien en computadora. En movil (menos de 768px) quieres que el menu se oculte.",
        q: "¿Qué regla CSS usas para aplicar estilos SOLO en pantallas de hasta 768px?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Código</th><th>Pista</th><th>Escribe lo que falta</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">@<input type="text" size="12" placeholder="Escribe aquí"> (max-<input type="text" size="8" placeholder="Escribe aquí">: 768px) { .menu { display: none; } }</td>
        <td>La primera palabra es 'media', la segunda es 'width'倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["media, width", "media, height", "screen, width", "media, size"],
        ans: 0,
        exp: "PASO 1: @media es la regla que crea una consulta de medios (media query). PASO 2: max-width: 768px significa 'para pantallas con un ancho máximo de 768px'. PASO 3: Los estilos dentro de @media solo se aplican cuando se cumple la condición. PASO 4: 768px es el punto de quiebre común para móviles. PASO 5: min-width sería para pantallas MÁS GRANDES que el valor. RESULTADO: @media (max-width: 768px) para móviles."
    },

    // ==================== UNIDADES RESPONSIVE ====================
    {
        profe: false,
        intermedio: true,
        avanzado: false,
        unit: "CSS",
        diff: "medium",
        case: "Quieres que un banner ocupe SIEMPRE el 100% del ancho de la pantalla, sin importar el tamaño del dispositivo.",
        q: "¿Qué unidad CSS usas para el ancho de la pantalla?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Unidad</th><th>Significado</th><th>Escribe la unidad</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">.banner { width: <input type="text" size="8" placeholder="Escribe aquí">; }</td>
        <td>100% del viewport width (ancho de la ventana del navegador)倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["100vw", "100%", "100vh", "100rem"],
        ans: 0,
        exp: "PASO 1: vw significa 'viewport width' (1vw = 1% del ancho de la ventana). PASO 2: 100vw = 100% del ancho de la pantalla, sin importar el tamaño. PASO 3: 100% es relativo al contenedor PADRE, no a la pantalla. PASO 4: vh es para el alto de la pantalla (viewport height). PASO 5: rem es relativo al tamaño de fuente raíz. RESULTADO: Para ancho de pantalla completo se usa 100vw."
    },

    // ==================== JAVASCRIPT VALIDACION ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "JavaScript",
        diff: "hard",
        case: "Tu formulario tiene campo email. Quieres que si el usuario no escribe nada, muestres alerta y NO se envie el formulario.",
        q: "¿Qué valor debe devolver la función de validación para evitar el envío?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Línea</th><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">function validar() {<br>    let email = document.getElementById("email").value;<br>    if (email == "") {<br>        alert("Email obligatorio");<br>        return <input type="text" size="8" placeholder="Escribe aquí">;<br>    }<br>    return true;<br>}</td>
        <td>Valor booleano que DETIENE el envío del formulario (opuesto a true)倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["false", "true", "null", "undefined"],
        ans: 0,
        exp: "PASO 1: La función de validación se ejecuta cuando se envía el formulario (onsubmit). PASO 2: Si la función devuelve 'true', el formulario SE ENVÍA. PASO 3: Si la función devuelve 'false', el formulario NO se envía. PASO 4: Cuando el campo está vacío, se muestra una alerta y se debe DETENER el envío. PASO 5: 'null' y 'undefined' no tienen efecto especial en este contexto. RESULTADO: return false evita que el formulario se envíe."
    },

    // ==================== JAVASCRIPT MANIPULAR DOM ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un div vacio con id='resultado'. Al hacer clic en un boton, quieres que aparezca el texto 'Clickeado!' dentro del div y en color azul.",
        q: "¿Qué método y propiedades completan correctamente el código?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Línea</th><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">function cambiar() {<br>    let elemento = document.<input type="text" size="14" placeholder="Escribe aquí">("resultado");<br>    elemento.<input type="text" size="10" placeholder="Escribe aquí"> = "Clickeado!";<br>    elemento.style.<input type="text" size="6" placeholder="Escribe aquí"> = "blue";<br>}</td>
        <td>Primero: método para seleccionar por ID. Segundo: propiedad para cambiar contenido HTML. Tercero: propiedad CSS para color de texto.倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["getElementById, innerHTML, color", "getElement, text, color", "querySelector, innerHTML, background", "getElementById, value, color"],
        ans: 0,
        exp: "PASO 1: getElementById() selecciona un elemento por su atributo id. PASO 2: innerHTML cambia el contenido HTML del elemento. PASO 3: style.color cambia el color del texto. PASO 4: value es para inputs, no para divs. PASO 5: backgroundColor cambiaría el fondo, no el texto. RESULTADO: getElementById, innerHTML, color."
    },

    // ==================== LOCALSTORAGE ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "HTML5",
        diff: "hard",
        case: "Tu pagina tiene un tema oscuro/claro. Quieres recordar la preferencia del usuario para la proxima vez que visite la pagina.",
        q: "¿Qué métodos de localStorage se usan para guardar, recuperar y eliminar un dato?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Acción</th><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">// Guardar<br>localStorage.<input type="text" size="8" placeholder="Escribe aquí">("tema", "oscuro");<br><br>// Recuperar<br>let tema = localStorage.<input type="text" size="8" placeholder="Escribe aquí">("tema");<br><br>// Eliminar<br>localStorage.<input type="text" size="10" placeholder="Escribe aquí">("tema");</td>
        <td>Guardar: setItem. Recuperar: getItem. Eliminar: removeItem.倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["setItem, getItem, removeItem", "save, load, delete", "store, fetch, erase", "put, get, remove"],
        ans: 0,
        exp: "PASO 1: setItem(clave, valor) guarda un dato en localStorage. PASO 2: getItem(clave) recupera un dato de localStorage. PASO 3: removeItem(clave) elimina un dato específico. PASO 4: clear() elimina TODOS los datos. PASO 5: localStorage persiste entre sesiones (no se borra al cerrar el navegador). RESULTADO: setItem, getItem, removeItem."
    },

    // ==================== CANVAS ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "HTML5",
        diff: "hard",
        case: "Quieres hacer un grafico simple: un cuadrado rojo en la posicion x=20, y=30, de 100px de ancho y 80px de alto.",
        q: "¿Qué método de canvas dibuja un rectángulo relleno?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Línea</th><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">let canvas = document.getElementById("miCanvas");<br>let ctx = canvas.<input type="text" size="10" placeholder="Escribe aquí">("2d");<br>ctx.<input type="text" size="8" placeholder="Escribe aquí"> = "red";<br>ctx.<input type="text" size="8" placeholder="Escribe aquí">(20, 30, 100, 80);</td>
        <td>Primero: obtener contexto 2d. Segundo: definir color de relleno. Tercero: dibujar rectángulo relleno.倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["getContext, fillStyle, fillRect", "getContext, fill, rect", "get2D, fillStyle, drawRect", "getCanvas, style, fill"],
        ans: 0,
        exp: "PASO 1: getContext('2d') obtiene el contexto de dibujo 2D del canvas. PASO 2: fillStyle define el color de relleno (puede ser 'red', '#ff0000', 'rgb(255,0,0)'). PASO 3: fillRect(x, y, width, height) dibuja un rectángulo RELLENO. PASO 4: strokeRect dibuja solo el borde (sin relleno). PASO 5: clearRect borra un área. RESULTADO: getContext, fillStyle, fillRect."
    },

    // ==================== EVENTOS ONKEYUP ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "JavaScript",
        diff: "hard",
        case: "Tienes un campo de texto donde el usuario escribe su nombre. Quieres que mientras escribe, abajo se muestre automaticamente 'Hola [lo que escribe]'.",
        q: "¿Qué evento se ejecuta cada vez que el usuario suelta una tecla?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Línea</th><th>Código</th><th>Pista</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">&lt;input type="text" id="nombre" <input type="text" size="10" placeholder="Escribe aquí">="mostrar()"&gt;<br>&lt;p id="salida"&gt;&lt;/p&gt;<br><br>&lt;script&gt;<br>function mostrar() {<br>    let nombre = document.getElementById("nombre").<input type="text" size="6" placeholder="Escribe aquí">;<br>    document.getElementById("salida").<input type="text" size="8" placeholder="Escribe aquí"> = "Hola " + nombre;<br>}<br>&lt;/script&gt;</td>
        <td>Primero: evento para tecla soltada. Segundo: obtener valor del input. Tercero: actualizar contenido HTML.倒
        </tr>
        </tbody>
        </table>
        `,
        opts: ["onkeyup, value, innerHTML", "onclick, value, innerHTML", "onchange, text, innerHTML", "onkeydown, value, text"],
        ans: 0,
        exp: "PASO 1: onkeyup se ejecuta CADA VEZ que el usuario suelta una tecla. PASO 2: onkeydown se ejecuta al PRESIONAR la tecla (antes de que se escriba). PASO 3: value obtiene el texto actual del input. PASO 4: innerHTML cambia el contenido HTML del elemento. PASO 5: Este evento permite actualizar en tiempo real mientras el usuario escribe. RESULTADO: onkeyup, value, innerHTML."
    },

    // ==================== VIDEO ====================
    {
        profe: false,
        intermedio: false,
        avanzado: true,
        unit: "HTML5",
        diff: "hard",
        case: "Quieres insertar un video en tu pagina con controles de reproducción.",
        q: "¿Qué etiqueta se usa para insertar un reproductor de video?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Código</th><th>Pista</th><th>Escribe la etiqueta</th></tr>
        </thead>
        <tbody>
        <tr><td colspan="2">&lt;<input type="text" size="6" placeholder="Escribe aquí"> width="640" height="360" controls&gt;<br>    &lt;source src="video.mp4" type="video/mp4"&gt;<br>    Tu navegador no soporta video<br>&lt;/video&gt;</td>
        <td>Etiqueta HTML5 para reproducir videos, similar a 'audio'但
        </tr>
        </tbody>
        </table>
        `,
        opts: ["video", "audio", "media", "source"],
        ans: 0,
        exp: "PASO 1: <video> es la etiqueta nativa de HTML5 para insertar videos. PASO 2: El atributo 'controls' muestra los botones de reproducción. PASO 3: <source> dentro de <video> especifica la ruta y tipo del video. PASO 4: Se pueden poner múltiples <source> para diferentes formatos (mp4, webm, ogg). PASO 5: El texto entre <video> y </video> se muestra si el navegador no soporta video. RESULTADO: La etiqueta es video."
    },

//  {
//         unit: "HTML",
//         diff: "easy",
//         case: "Quieres que un enlace externo abra en una pestaña nueva para que el usuario no abandone tu sitio web.",
//         q: "¿Qué valor debe tener el atributo target para lograr este comportamiento?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Atributo</th><th>Valor a ingresar</th><th>Resultado esperado</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>target</td><td><input type="text" size="10" placeholder="???"></td><td>Abre el documento en una ventana/pestaña nueva.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["_blank", "_self", "_top", "_parent"],
//         ans: 0,
//         exp: "El valor '_blank' le indica al navegador que debe crear un nuevo contexto de navegación (pestaña o ventana) para el enlace."
//     },

//     // ==================== HTML - LISTAS ORDENADAS ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas creando una receta y necesitas que los pasos se muestren numerados (1, 2, 3...).",
//         q: "¿Qué etiqueta define una lista donde el orden de los elementos es importante?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Estructura</th><th>Etiqueta a usar</th></tr></thead>
//         <tbody>
//         <tr><td>Contenedor de lista numérica</td><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td></tr>
//         <tr><td>Elemento individual de la lista</td><td>&lt;li&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ol", "ul", "li", "dl"],
//         ans: 0,
//         exp: "<ol> significa 'Ordered List'. Por defecto, el navegador le asigna números correlativos a cada ítem (li) interior."
//     },

//     // ==================== HTML - LISTAS NO ORDENADAS ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Necesitas listar ingredientes que no requieren un orden específico (usando viñetas o puntos).",
//         q: "¿Qué etiqueta se utiliza para crear una lista de elementos desordenados?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Estructura</th><th>Etiqueta a usar</th></tr></thead>
//         <tbody>
//         <tr><td>Contenedor con viñetas</td><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td></tr>
//         <tr><td>Elemento de la lista</td><td>&lt;li&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ul", "ol", "li", "dl"],
//         ans: 0,
//         exp: "<ul> significa 'Unordered List'. Se utiliza para agrupaciones donde cambiar el orden de los factores no altera el sentido de la información."
//     },

//     // ==================== HTML - IMAGENES ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Para mejorar la accesibilidad (lectores de pantalla) o por si la imagen falla, necesitas un texto descriptivo.",
//         q: "¿Qué atributo de la etiqueta <img> define este texto alternativo?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Código HTML</th><th>Atributo necesario</th></tr></thead>
//         <tbody>
//         <tr><td>&lt;img src='logo.png' <input type="text" size="6" placeholder="???">='Logo empresa'&gt;</td><td>Define la descripción.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["alt", "title", "src", "description"],
//         ans: 0,
//         exp: "El atributo 'alt' (alternative text) es vital para el SEO y la accesibilidad, permitiendo que el sitio sea 'leído' correctamente por máquinas."
//     },

//     // ==================== HTML - FORMULARIOS: RADIO ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "En una encuesta de satisfacción, el usuario debe elegir solo un nivel: 'Malo', 'Regular' o 'Bueno'.",
//         q: "¿Qué tipo de input obliga al usuario a elegir una única opción entre varias?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Tipo de Input</th><th>Requisito</th></tr></thead>
//         <tbody>
//         <tr><td>type='<input type="text" size="8" placeholder="???">'</td><td>Deben compartir el mismo atributo 'name'.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["radio", "checkbox", "select", "option"],
//         ans: 0,
//         exp: "Los inputs de tipo 'radio' funcionan en grupo. Si todos tienen el mismo 'name', al marcar uno se desmarca automáticamente el anterior."
//     },

//     // ==================== HTML - FORMULARIOS: CHECKBOX ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Quieres que el usuario pueda marcar todos los intereses que prefiera (Ej: Cine, Música, Deportes).",
//         q: "¿Qué tipo de input permite múltiples selecciones independientes?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Tipo de Input</th><th>Comportamiento</th></tr></thead>
//         <tbody>
//         <tr><td>type='<input type="text" size="8" placeholder="???">'</td><td>Permite marcar/desmarcar varias casillas a la vez.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["checkbox", "radio", "select", "option"],
//         ans: 0,
//         exp: "A diferencia del radio, el 'checkbox' no es excluyente; cada casilla es independiente de las demás."
//     },

//     // ==================== CSS - FLEXBOX CENTRADO ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Necesitas que un botón quede en el centro exacto de un contenedor, tanto horizontal como verticalmente.",
//         q: "¿Qué propiedad de Flexbox alinea el contenido en el EJE HORIZONTAL (Eje Principal)?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Propiedad</th><th>Valor</th><th>Efecto</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>display</td><td>flex</td><td>Activa Flexbox</td></tr>
//         <tr><td><input type="text" size="15" placeholder="???"></td><td>center</td><td>Centra de Izquierda a Derecha</td></tr>
//         <tr><td>align-items</td><td>center</td><td>Centra de Arriba a Abajo</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["justify-content", "align-content", "flex-direction", "justify-items"],
//         ans: 0,
//         exp: "Flexbox usa dos ejes: 'justify-content' para el eje principal (horizontal por defecto) y 'align-items' para el eje cruzado (vertical)."
//     },


//     // ==================== HTML - FORMULARIOS: TEXTAREA ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Deseas incluir una sección de 'Comentarios' donde el usuario pueda escribir varios párrafos.",
//         q: "¿Qué etiqueta permite la entrada de texto de múltiples líneas?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Etiqueta</th><th>Atributos comunes</th></tr></thead>
//         <tbody>
//         <tr><td>&lt;<input type="text" size="8" placeholder="???">&gt;</td><td>rows (filas) y cols (columnas)</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["textarea", "input", "textbox", "field"],
//         ans: 0,
//         exp: "Mientras que <input> es para una sola línea, <textarea> permite redimensionar el cuadro y escribir textos extensos."
//     },

//     // ==================== HTML - FORMULARIOS: REQUIRED ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Para evitar formularios vacíos, el campo 'Correo' debe ser rellenado sí o sí antes de enviar.",
//         q: "¿Qué atributo booleano impide el envío si el campo no tiene datos?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Código</th><th>Atributo de validación</th></tr></thead>
//         <tbody>
//         <tr><td>&lt;input type="email" <input type="text" size="10" placeholder="???">&gt;</td><td>Activa la validación del navegador.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["required", "obligatorio", "mandatory", "necesary"],
//         ans: 0,
//         exp: "El atributo 'required' delega la validación básica al navegador, mostrando un mensaje de aviso si el usuario intenta enviar el formulario vacío."
//     },

//     // ==================== HTML - TABLAS: COLSPAN ====================
//     {
//         unit: "HTML",
//         diff: "hard",
//         case: "En un horario, la celda 'ALMUERZO' debe ocupar el espacio de 5 columnas (Lunes a Viernes).",
//         q: "¿Qué atributo permite que una celda se extienda horizontalmente sobre varias columnas?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Valor</th><th>Acción</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="10" placeholder="???"></td><td>"5"</td><td>Expande la celda a lo ancho.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["colspan", "rowspan", "merge", "span"],
//         ans: 0,
//         exp: "'colspan' (column span) indica cuántas columnas de ancho debe ocupar una única celda <td> o <th>."
//     },

//     // ==================== HTML - TABLAS: ROWSPAN ====================
//     {
//         unit: "HTML",
//         diff: "hard",
//         case: "Quieres que la celda del profesor aparezca una sola vez, abarcando 3 filas (bloques de clase) hacia abajo.",
//         q: "¿Qué atributo une celdas de forma vertical?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Valor</th><th>Acción</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="10" placeholder="???"></td><td>"3"</td><td>Expande la celda hacia abajo.</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["rowspan", "colspan", "merge", "span"],
//         ans: 0,
//         exp: "'rowspan' (row span) le dice a la celda que debe ocupar el espacio de varias filas hacia abajo."
//     },

//     // ==================== CSS - BOX MODEL ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Un div tiene width: 100px, padding: 10px por lado y border: 2px por lado. No usas box-sizing: border-box.",
//         q: "¿Cuál es el cálculo para obtener el ancho total ocupado?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Capa</th><th>Cálculo Horizontal</th><th>Suma</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Contenido + Padding + Borde</td><td>100 + (10*2) + (2*2)</td><td><input type="text" size="8" placeholder="Total"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["124px", "100px", "112px", "104px"],
//         ans: 0,
//         exp: "El ancho total es la suma del contenido + padding (izq/der) + borde (izq/der). 100 + 20 + 4 = 124px."
//     },


//     // ==================== UNIDAD: INTRODUCCION A HTML ====================
    
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas creando tu primera pagina web. Quieres que el titulo que aparezca en la pestaña del navegador sea 'Mi Tienda Online'.",
//         q: "¿Dentro de qué etiqueta debes colocar el texto 'Mi Tienda Online'?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Posición</th><th>Etiqueta</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Dentro de <head></td><td>&lt;<input type="text" size="10" placeholder="???">&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["Dentro de <title> que está en <head>", "Dentro de <body>", "Dentro de <h1>", "Dentro de <header>"],
//         ans: 0,
//         exp: "La etiqueta <title> define el nombre de la página que los buscadores y las pestañas del navegador muestran."
//     },

//     // 2. HTML - LISTAS ORDENADAS
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tienes una receta con pasos que deben seguirse en orden numerico.",
//         q: "¿Qué etiqueta se usa para crear una lista numerada?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Estructura</th><th>Etiqueta</th></tr></thead>
//         <tbody>
//         <tr><td>Lista numerada (1, 2, 3...)</td><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ol", "ul", "li", "dl"],
//         ans: 0,
//         exp: "<ol> (Ordered List) se utiliza para elementos donde el orden es esencial, como pasos lógicos o rankings."
//     },

//     // 3. HTML - LISTAS NO ORDENADAS
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tienes una lista de ingredientes que no tienen un orden especifico.",
//         q: "¿Qué etiqueta se usa para crear una lista con viñetas?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Estructura</th><th>Etiqueta</th></tr></thead>
//         <tbody>
//         <tr><td>Lista con puntos/viñetas</td><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ul", "ol", "li", "dl"],
//         ans: 0,
//         exp: "<ul> (Unordered List) organiza elementos mediante viñetas cuando el orden de los mismos no altera el significado."
//     },

//     // 4. HTML - IMAGENES (ALT)
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tienes una imagen que no carga porque la ruta es incorrecta. Quieres que se vea un texto alternativo.",
//         q: "¿Qué atributo de la etiqueta img proporciona texto alternativo?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Código</th><th>Atributo necesario</th></tr></thead>
//         <tbody>
//         <tr><td>&lt;img src="foto.jpg" <input type="text" size="6" placeholder="???">="Descripción"&gt;</td><td>Texto si falla la imagen</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["alt", "title", "src", "description"],
//         ans: 0,
//         exp: "El atributo 'alt' es fundamental para la accesibilidad y el SEO; permite describir la imagen si esta no se visualiza."
//     },

//     // 5. HTML - FORMULARIOS: RADIO
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Tienes un formulario donde el usuario debe seleccionar UN solo genero (Masculino, Femenino, Otro).",
//         q: "¿Qué tipo de input permite seleccionar solo UNA opcion de un grupo?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Tipo de Input</th><th>Comportamiento</th></tr></thead>
//         <tbody>
//         <tr><td>type="<input type="text" size="8" placeholder="???">"</td><td>Solo permite marcar una casilla del grupo</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["radio", "checkbox", "select", "option"],
//         ans: 0,
//         exp: "Los inputs 'radio' permiten selección única dentro de un grupo de elementos que comparten el mismo atributo 'name'."
//     },

//     // 6. HTML - FORMULARIOS: CHECKBOX
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Tienes un formulario donde el usuario puede seleccionar VARIOS hobbies (deporte, musica, lectura).",
//         q: "¿Qué tipo de input permite seleccionar MULTIPLES opciones?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Tipo de Input</th><th>Comportamiento</th></tr></thead>
//         <tbody>
//         <tr><td>type="<input type="text" size="8" placeholder="???">"</td><td>Permite marcar múltiples casillas a la vez</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["checkbox", "radio", "select", "option"],
//         ans: 0,
//         exp: "A diferencia de los radios, los 'checkbox' son independientes y permiten al usuario elegir todas las opciones que desee."
//     },

//     // 7. CSS - FLEXBOX CENTRADO (El que corregimos al inicio)
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Centrado Absoluto: Necesitas que un solo elemento quede en el centro exacto de un contenedor (tanto de izquierda a derecha como de arriba a abajo).",
//         q: "¿Qué propiedad de Flexbox controla el alineamiento en el EJE HORIZONTAL (Eje Principal)?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Propiedad</th><th>Valor</th><th>Función de la línea</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>display</td><td>flex</td><td>Activa el modo flexible en el contenedor</td></tr>
//         <tr><td><input type="text" size="15" placeholder="???"></td><td>center</td><td>Alinea el contenido de forma HORIZONTAL</td></tr>
//         <tr><td>align-items</td><td>center</td><td>Alinea el contenido de forma VERTICAL</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["justify-content", "align-content", "flex-direction", "justify-items"],
//         ans: 0,
//         exp: "Flexbox usa dos llaves: 'justify-content' para el centro horizontal y 'align-items' para el vertical. Juntas logran el centrado total."
//     },

//     // 8. HTML - FORMULARIOS: TEXTAREA
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Necesitas un campo donde el usuario pueda escribir un comentario de varias lineas.",
//         q: "¿Qué etiqueta se usa para texto multilinea?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Etiqueta</th><th>Uso</th></tr></thead>
//         <tbody>
//         <tr><td>&lt;<input type="text" size="8" placeholder="???">&gt;</td><td>Área de texto ajustable para párrafos</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["textarea", "input", "textbox", "field"],
//         ans: 0,
//         exp: "La etiqueta <textarea> define un control de entrada de texto de múltiples líneas, ideal para comentarios o mensajes largos."
//     },

//     // 9. HTML - FORMULARIOS: REQUIRED
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "El campo nombre es obligatorio. El formulario no debe enviarse si esta vacio.",
//         q: "¿Qué atributo hace que un campo sea obligatorio?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Efecto</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="8" placeholder="???"></td><td>Impide el envío si el input está vacío</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["required", "obligatorio", "mandatory", "necesary"],
//         ans: 0,
//         exp: "El atributo booleano 'required' indica que el usuario debe rellenar el campo antes de poder enviar el formulario."
//     },

//     // 10. HTML - FORMULARIOS: PLACEHOLDER
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Quieres mostrar un texto de ejemplo dentro del campo de texto que desaparezca al escribir.",
//         q: "¿Qué atributo muestra un texto temporal dentro del input?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Propósito</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="12" placeholder="???"></td><td>Muestra una pista o ejemplo dentro del input</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["placeholder", "value", "title", "hint"],
//         ans: 0,
//         exp: "El 'placeholder' es una ayuda visual que indica qué información se espera, desapareciendo en cuanto el usuario escribe."
//     },

//     // 11. HTML - TABLAS: COLSPAN
//     {
//         unit: "HTML",
//         diff: "hard",
//         case: "Tienes una tabla donde el encabezado 'Nombre Completo' debe abarcar dos columnas: Nombre y Apellido.",
//         q: "¿Qué atributo une celdas horizontalmente en una tabla?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Valor</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="10" placeholder="???"></td><td>Indica cuántas columnas abarca la celda</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["colspan", "rowspan", "merge", "span"],
//         ans: 0,
//         exp: "'colspan' (Column Span) define el número de columnas que una celda debe extenderse horizontalmente."
//     },

//     // 12. HTML - TABLAS: ROWSPAN
//     {
//         unit: "HTML",
//         diff: "hard",
//         case: "Varios empleados trabajan en el mismo departamento. Quieres que 'Ventas' aparezca una sola vez abarcando varias filas.",
//         q: "¿Qué atributo une celdas verticalmente en una tabla?",
//         extra: `
//         <table class="subnet-table">
//         <thead><tr><th>Atributo</th><th>Valor</th></tr></thead>
//         <tbody>
//         <tr><td><input type="text" size="10" placeholder="???"></td><td>Indica cuántas filas abarca la celda</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["rowspan", "colspan", "merge", "span"],
//         ans: 0,
//         exp: "'rowspan' (Row Span) define el número de filas que una celda debe extenderse verticalmente."
//     },

//     // 13. INTRODUCCIÓN - TITLE
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas creando tu primera pagina web. Quieres que el titulo que aparezca en la pestaña del navegador sea 'Mi Tienda Online'.",
//         q: "¿Dentro de qué etiqueta debes colocar el texto 'Mi Tienda Online'?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Posición</th><th>Etiqueta</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Dentro de <head></td><td>&lt;<input type="text" size="10" placeholder="???">&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["Dentro de <title> que está en <head>", "Dentro de <body>", "Dentro de <h1>", "Dentro de <header>"],
//         ans: 0,
//         exp: "La etiqueta <title> define el nombre de la página que los buscadores y las pestañas del navegador muestran."
//     },

//     // 14. INTRODUCCIÓN - H1 / H2
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tienes una pagina de recetas. El titulo principal es 'Recetas Caseras'. Luego tienes secciones: 'Desayunos', 'Almuerzos', 'Cenas'.",
//         q: "¿Qué etiqueta usas para el título principal y qué etiqueta usas para cada sección?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Nivel</th><th>Uso</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td><td>Título principal (Jerarquía 1)</td></tr>
//         <tr><td>&lt;h2&gt;</td><td>Subtítulos de secciones</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["h1 para el título, h2 para las secciones", "h1 para todo", "h2 para todo", "title para el título, h1 para secciones"],
//         ans: 0,
//         exp: "Se utiliza <h1> para el título principal (solo uno) y <h2>-<h6> para organizar el contenido de forma jerárquica."
//     },

//     // 15. SEMÁNTICA - STRONG
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas escribiendo un articulo. Quieres resaltar una palabra que es MUY importante para el significado, no solo para que se vea bonito.",
//         q: "¿Qué etiqueta usas para dar importancia SEMANTICA a una palabra?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Etiqueta</th><th>Función Semántica</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>&lt;<input type="text" size="8" placeholder="???">&gt;</td><td>Indica importancia seria/urgente</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["<strong>", "<b>", "<em>", "<mark>"],
//         ans: 0,
//         exp: "<strong> no solo pone el texto en negrita, sino que informa a los buscadores que el contenido tiene gran relevancia."
//     },

//     // 16. IMAGENES - ALT (Repetida pero con contexto diferente según tu lista)
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tu pagina tiene una foto de un perro. La imagen no carga por error en la ruta. Quieres que se vea un texto describiendo la foto.",
//         q: "¿Qué atributo de la etiqueta img contiene el texto alternativo?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Atributo</th><th>Función</th></tr>
//         </thead>
//         <tbody>
//         <tr><td><input type="text" size="10" placeholder="???"></td><td>Texto de respaldo si falla el SRC</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["alt", "src", "title", "description"],
//         ans: 0,
//         exp: "El atributo 'alt' asegura que el contenido sea accesible para personas con discapacidad visual y en errores de carga."
//     },

//     // 17. RUTAS RELATIVAS
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tu sitio web tiene la estructura: /index.html, /imagenes/logo.png. Estas en index.html.",
//         q: "¿Qué ruta relativa usas para mostrar logo.png desde index.html?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Estructura</th><th>Ruta correcta</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Archivo en subcarpeta</td><td>src="<input type="text" size="18" placeholder="???">"</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["imagenes/logo.png", "logo.png", "../imagenes/logo.png", "/imagenes/logo.png"],
//         ans: 0,
//         exp: "Para entrar a una carpeta desde la posición actual, se escribe el nombre de la carpeta seguido de una barra diagonal."
//     },

//     // 18. LISTAS - INGREDIENTES Y PASOS (UL / OL)
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas creando una pagina con una receta de cocina. Necesitas mostrar los ingredientes (sin orden especifico) y los pasos a seguir (en orden).",
//         q: "¿Qué etiqueta usas para los ingredientes y qué etiqueta usas para los pasos?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Contenido</th><th>Etiqueta Contenedora</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Ingredientes (puntos)</td><td>&lt;<input type="text" size="4" placeholder="???">&gt;</td></tr>
//         <tr><td>Pasos (números)</td><td>&lt;ol&gt;</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ul para ingredientes, ol para pasos", "ol para ingredientes, ul para pasos", "ul para ambos", "ol para ambos"],
//         ans: 0,
//         exp: "<ul> crea viñetas (desordenadas) y <ol> crea una secuencia numérica (ordenada)."
//     },

//     // 19. FORMULARIOS - MÉTODO POST
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Estas haciendo un formulario de registro. Los datos son sensibles (contraseña).",
//         q: "¿Qué método de formulario debes usar para datos sensibles?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Método</th><th>Seguridad en datos privados</th></tr>
//         </thead>
//         <tbody>
//         <tr><td><input type="text" size="8" placeholder="???"></td><td>Oculta datos de la barra de direcciones</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["POST", "GET", "SEND", "PUT"],
//         ans: 0,
//         exp: "POST envía la información de forma privada en el cuerpo de la petición, a diferencia de GET que la expone en la URL."
//     },

//     // 20. CSS - BOX MODEL (CALCULO)
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Tienes un div con width: 100px, padding: 10px, border: 2px.",
//         q: "¿Cuál es el ancho TOTAL que ocupa en la página?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Capa</th><th>Cálculo</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>Ancho Total</td><td>100 + (10*2) + (2*2) = <input type="text" size="6" placeholder="???"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["124px", "100px", "112px", "104px"],
//         ans: 0,
//         exp: "El ancho total suma el contenido original más el padding y el borde aplicados a ambos lados (izquierdo y derecho)."
//     },

//     // 21. RESPONSIVE - MAX-WIDTH
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "En tu pagina, el menu horizontal se ve bien en computadora. En movil (menos de 768px) quieres que el menu se oculte.",
//         q: "¿Qué media query usas para pantallas de 768px o menos?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Condición</th><th>Efecto</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>@media (<input type="text" size="12" placeholder="???">: 768px)</td><td>Afecta de 768px hacia abajo</td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["max-width", "min-width", "width", "size"],
//         ans: 0,
//         exp: "'max-width' indica que los estilos se aplicarán siempre que el ancho no supere el valor indicado (ideal para móviles)."
//     },

//     // ==================== RESPONSIVE - MEDIA QUERY ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "En tu pagina, el menu horizontal se ve bien en computadora. En movil (menos de 768px) quieres que el menu se oculte.",
//         q: "¿Qué media query usas para pantallas de 768px o menos?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>Escribe lo que falta</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>@media (<input type="text" size="15" placeholder="Escribe la propiedad">: 768px) { .menu { display: none; } }</td><td><input type="text" size="20" placeholder="Escribe aquí"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["max-width", "min-width", "width", "size"],
//         ans: 0,
//         exp: "max-width: 768px aplica estilos desde 0px hasta 768px, ideal para configuraciones móviles."
//     },

//     // ==================== CSS - UNIDADES VIEWPORT ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Quieres que un banner ocupe SIEMPRE el 100% del ancho de la pantalla, sin importar el tamaño del dispositivo.",
//         q: "¿Qué unidad CSS usas para el ancho de la pantalla?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Unidad</th><th>Significado</th><th>Escribe la unidad correcta</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>100%</td><td>Relativo al contenedor padre</td><td><input type="text" size="10" placeholder="Escribe aquí"></td></tr>
//         <tr><td>???</td><td>100% del viewport width (ancho de pantalla)</td><td><input type="text" size="10" placeholder="Escribe la unidad"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["100vw", "100%", "100vh", "100rem"],
//         ans: 0,
//         exp: "100vw representa el 100% del ancho del viewport (la ventana visible del navegador)."
//     },

//     // ==================== ENLACES - TARGET ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Quieres que un enlace se abra en una nueva pestaña.",
//         q: "¿Qué atributo se usa para abrir un enlace en una nueva pestaña?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;a href="https://google.com" <input type="text" size="15" placeholder="Escribe el atributo aquí">="_blank"&gt;Google&lt;/a&gt;
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["target", "href", "src", "link"],
//         ans: 0,
//         exp: "El atributo target con el valor '_blank' indica al navegador que abra el enlace en una pestaña o ventana nueva."
//     },

//     // ==================== IMAGENES - ALT ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Una imagen no carga. Quieres mostrar un texto descriptivo.",
//         q: "¿Qué atributo de img contiene el texto alternativo?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;img src="foto.jpg" <input type="text" size="15" placeholder="Escribe el atributo aquí">="Descripcion"&gt;
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["alt", "src", "title", "description"],
//         ans: 0,
//         exp: "El atributo 'alt' proporciona una descripción textual necesaria para accesibilidad y cuando la imagen no puede cargarse."
//     },

//     // ==================== LISTAS - UL / OL ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Necesitas ingredientes (sin orden) y pasos (en orden).",
//         q: "¿Qué etiqueta usas para lista NO ordenada (viñetas)? ¿Qué etiqueta usas para lista ordenada (numeros)?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Para ingredientes (sin orden)</th><th>Escribe la etiqueta</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;<input type="text" size="10" placeholder="Escribe la etiqueta aquí">&gt;<br>&lt;li&gt;Harina&lt;/li&gt;<br>&lt;/ul&gt;
//         <td><input type="text" size="15" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         <tr>
//         <td>Para pasos (ordenados): &lt;<input type="text" size="10" placeholder="Escribe la etiqueta aquí">&gt;<br>&lt;li&gt;Paso 1&lt;/li&gt;<br>&lt;/ol&gt;
//         <td><input type="text" size="15" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["ul, ol", "ol, ul", "ul, ul", "ol, ol"],
//         ans: 0,
//         exp: "<ul> define listas con viñetas (unordered), mientras que <ol> define listas numeradas (ordered)."
//     },

//     // ==================== TABLAS - TH ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Tienes una tabla. Quieres que los encabezados se vean en negrita y centrados.",
//         q: "¿Qué etiqueta se usa para los encabezados de columna?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;table&gt;<br>&lt;tr&gt;<br>&lt;<input type="text" size="10" placeholder="Escribe la etiqueta aquí">&gt;Nombre&lt;/th&gt;<br>&lt;/tr&gt;<br>&lt;/table&gt;
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["th", "td", "tr", "thead"],
//         ans: 0,
//         exp: "<th> (Table Header) se usa para celdas de encabezado, aplicando por defecto negrita y alineación centrada."
//     },

//     // ==================== FORMULARIOS - RADIO ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Usuario debe seleccionar UN solo genero.",
//         q: "¿Qué tipo de input permite seleccionar solo UNA opcion?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;input type="<input type="text" size="12" placeholder="Escribe el tipo aquí">" name="genero" value="masculino"&gt; Masculino<br>
//         &lt;input type="radio" name="genero" value="femenino"&gt; Femenino
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["radio", "checkbox", "option", "select"],
//         ans: 0,
//         exp: "Los inputs de tipo 'radio' agrupados por el mismo atributo 'name' obligan a una selección única."
//     },

//     // ==================== FORMULARIOS - CHECKBOX ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "Usuario debe poder seleccionar VARIOS hobbies.",
//         q: "¿Qué tipo de input permite seleccionar MULTIPLES opciones?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;input type="<input type="text" size="12" placeholder="Escribe el tipo aquí">" name="hobbies" value="deporte"&gt; Deporte
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["checkbox", "radio", "select", "option"],
//         ans: 0,
//         exp: "El tipo 'checkbox' permite al usuario marcar o desmarcar múltiples casillas de forma independiente."
//     },

//     // ==================== FORMULARIOS - REQUIRED ====================
//     {
//         unit: "HTML",
//         diff: "medium",
//         case: "El campo nombre es obligatorio.",
//         q: "¿Qué atributo hace que un campo sea obligatorio?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;input type="text" name="nombre" <input type="text" size="12" placeholder="Escribe el atributo aquí">&gt;
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["required", "obligatorio", "mandatory", "necesary"],
//         ans: 0,
//         exp: "El atributo 'required' activa la validación nativa del navegador para impedir el envío si el campo está vacío."
//     },

//     // ==================== CSS - SELECTOR ID ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Quieres dar estilo a un UNICO boton (el de enviar).",
//         q: "¿Qué selector CSS se usa para un elemento con ID unico?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Selector</th><th>Sintaxis</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>ID
//         <td><input type="text" size="8" placeholder="Escribe el selector aquí">enviar { background: green; }
//         <td><input type="text" size="15" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["#", ".", "*", "&"],
//         ans: 0,
//         exp: "El símbolo '#' identifica un ID, el cual debe ser único en el documento HTML."
//     },

//     // ==================== CSS - MODELO DE CAJA ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Elemento con width: 100px, padding: 10px, border: 2px.",
//         q: "¿Cuál es el ancho TOTAL?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Componente</th><th>Operación</th><th>Escribe tu resultado</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>width</td><td>100px</td><td><input type="text" size="6" placeholder="Escribe aquí"></td></tr>
//         <tr><td>padding (izq+der)</td><td>10px + 10px = 20px</td><td><input type="text" size="6" placeholder="Escribe aquí"></td></tr>
//         <tr><td>border (izq+der)</td><td>2px + 2px = 4px</td><td><input type="text" size="6" placeholder="Escribe aquí"></td></tr>
//         <tr><td><strong>TOTAL</strong></td><td>100 + 20 + 4 = ?</td><td><input type="text" size="8" placeholder="Escribe tu respuesta"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["124px", "100px", "112px", "104px"],
//         ans: 0,
//         exp: "El ancho total es la suma del contenido + padding (ambos lados) + border (ambos lados)."
//     },

//     // ==================== CSS - FLEXBOX ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "Centrar un boton horizontalmente con Flexbox.",
//         q: "¿Qué propiedad de Flexbox centra los elementos HORIZONTALMENTE?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Propiedad</th><th>Valor</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr><td>display</td><td>flex</td><td><input type="text" size="6" placeholder="Escribe aquí"></td></tr>
//         <tr><td><input type="text" size="15" placeholder="Escribe la propiedad aquí"></td><td>center</td><td><input type="text" size="20" placeholder="Escribe tu respuesta"></td></tr>
//         <tr><td>align-items</td><td>center</td><td><input type="text" size="6" placeholder="Escribe aquí"></td></tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["justify-content", "align-items", "flex-direction", "justify-items"],
//         ans: 0,
//         exp: "justify-content distribuye el espacio y alinea los elementos a lo largo del eje principal (horizontal por defecto)."
//     },

//     // ==================== RESPONSIVE - MEDIA QUERY (REPETIDA) ====================
//     {
//         unit: "CSS",
//         diff: "medium",
//         case: "En movil (menos de 768px) quieres ocultar el menu.",
//         q: "¿Qué media query usas para pantallas de 768px o menos?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>@media (<input type="text" size="12" placeholder="Escribe la propiedad aquí">: 768px) { .menu { display: none; } }
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["max-width", "min-width", "width", "size"],
//         ans: 0,
//         exp: "max-width define un límite superior; los estilos se aplican a pantallas con un ancho menor o igual al valor."
//     },

//     // ==================== HTML - ESTRUCTURA TITLE ====================
//     {
//         unit: "HTML",
//         diff: "easy",
//         case: "Creando tu primera pagina web.",
//         q: "¿Dentro de qué etiqueta va el título que aparece en la pestaña del navegador?",
//         extra: `
//         <table class="subnet-table">
//         <thead>
//         <tr><th>Código</th><th>¿Qué falta? (Escribe tu respuesta)</th></tr>
//         </thead>
//         <tbody>
//         <tr>
//         <td>&lt;!DOCTYPE html&gt;<br>
//         &lt;html&gt;<br>
//         &lt;head&gt;<br>
//         &lt;<input type="text" size="10" placeholder="Escribe la etiqueta aquí">&gt;Mi Tienda Online&lt;/title&gt;<br>
//         &lt;/head&gt;<br>
//         &lt;body&gt;<br>
//         &lt;/body&gt;<br>
//         &lt;/html&gt;
//         <td><input type="text" size="20" placeholder="Escribe tu respuesta aquí">
//         </tr>
//         </tbody>
//         </table>
//         `,
//         opts: ["title", "head", "h1", "header"],
//         ans: 0,
//         exp: "La etiqueta <title> es obligatoria dentro de <head> para mostrar el nombre del sitio en la pestaña."
//     },

// ==================== PROGRAMACIÓN - LÓGICA (VALOR VS REFERENCIA) ====================
     
{
        unit: "Lógica",
        diff: "hard",
        case: "Tienes un objeto 'usuario1'. Creas 'usuario2 = usuario1'. Luego cambias el nombre en 'usuario2'.",
        q: "¿Qué sucede con el nombre en 'usuario1' y por qué?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Tipo de Dato</th><th>Comportamiento en memoria</th></tr>
        </thead>
        <tbody>
        <tr><td>Primitivo (string, int)</td><td>Se copia el valor real</td></tr>
        <tr><td>Complejo (Object, Array)</td><td>Se copia la <input type="text" size="12" placeholder="???"></td></tr>
        </tbody>
        </table>
        `,
        opts: ["Cambia en ambos (Referencia)", "Solo cambia en usuario2 (Copia)", "Da error de compilación", "Se borra usuario1"],
        ans: 0,
        exp: "En lenguajes como JS o Python, los objetos no se copian, sino que ambas variables apuntan al mismo espacio de memoria. Para evitarlo, se usa 'destructuring' o deep copy."
    },
   

    




];




    


registrarAsignatura('lenguaje_html', BANK.lenguaje_html);
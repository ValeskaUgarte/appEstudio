window.BANK = window.BANK || {};
BANK.lenguaje_html = [

    // ==================== ETIQUETAS BASICAS ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para el título de la página en la pestaña del navegador?",
        opts: ["title", "head", "h1", "header"],
        ans: 0, exp: "title va dentro de head y define el título de la pestaña"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para el encabezado más importante?",
        opts: ["h1", "head", "header", "title"],
        ans: 0, exp: "h1 es el encabezado de nivel 1, el más importante"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para crear un párrafo?",
        opts: ["p", "par", "paragraph", "text"],
        ans: 0, exp: "p es la etiqueta de párrafo"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para crear un enlace?",
        opts: ["a", "link", "href", "url"],
        ans: 0, exp: "a es la etiqueta de ancla para enlaces"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué atributo define la URL de un enlace?",
        opts: ["href", "src", "link", "url"],
        ans: 0, exp: "href especifica la dirección del enlace"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para insertar una imagen?",
        opts: ["img", "image", "pic", "src"],
        ans: 0, exp: "img es la etiqueta de imagen"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué atributo define la ruta de una imagen?",
        opts: ["src", "href", "alt", "link"],
        ans: 0, exp: "src especifica la URL de la imagen"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué atributo proporciona texto alternativo para una imagen?",
        opts: ["alt", "title", "text", "description"],
        ans: 0, exp: "alt es texto alternativo para lectores de pantalla y si no carga la imagen"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para crear una lista no ordenada?",
        opts: ["ul", "ol", "li", "list"],
        ans: 0, exp: "ul es unordered list (viñetas)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para crear una lista ordenada?",
        opts: ["ol", "ul", "li", "list"],
        ans: 0, exp: "ol es ordered list (numerada)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para cada elemento de una lista?",
        opts: ["li", "ul", "ol", "item"],
        ans: 0, exp: "li es list item"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para una tabla?",
        opts: ["table", "tab", "tr", "td"],
        ans: 0, exp: "table define una tabla"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para una fila de tabla?",
        opts: ["tr", "td", "th", "table"],
        ans: 0, exp: "tr es table row"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para una celda de tabla?",
        opts: ["td", "tr", "th", "tc"],
        ans: 0, exp: "td es table data"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Etiquetas", diff: "easy",
        q: "¿Qué etiqueta se usa para el encabezado de una tabla?",
        opts: ["th", "td", "tr", "thead"],
        ans: 0, exp: "th es table header (texto en negrita)"
    },

    // ==================== ESTRUCTURA DEL DOCUMENTO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
        q: "¿Qué etiqueta contiene toda la información visible de la página?",
        opts: ["body", "head", "html", "main"],
        ans: 0, exp: "body contiene el contenido visible"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
        q: "¿Qué etiqueta contiene metadatos y el título?",
        opts: ["head", "body", "html", "meta"],
        ans: 0, exp: "head contiene información no visible"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
        q: "¿Qué etiqueta es la raíz de todo documento HTML?",
        opts: ["html", "head", "body", "!DOCTYPE"],
        ans: 0, exp: "html envuelve todo el documento"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Estructura", diff: "easy",
        q: "¿Qué declaración indica la versión de HTML?",
        opts: ["!DOCTYPE html", "html", "version", "meta"],
        ans: 0, exp: "!DOCTYPE html declara HTML5"
    },

    // ==================== FORMULARIOS ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para crear un formulario?",
        opts: ["form", "input", "field", "submit"],
        ans: 0, exp: "form define un formulario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué atributo define dónde enviar los datos del formulario?",
        opts: ["action", "method", "target", "enctype"],
        ans: 0, exp: "action especifica la URL de envío"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué atributo define cómo enviar los datos del formulario?",
        opts: ["method", "action", "target", "type"],
        ans: 0, exp: "method puede ser GET o POST"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para un campo de texto?",
        opts: ["input type='text'", "textarea", "field", "text"],
        ans: 0, exp: "input con type text crea campo de texto"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para un botón de enviar?",
        opts: ["input type='submit'", "button", "enviar", "submit"],
        ans: 0, exp: "input type submit crea botón que envía el formulario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para un área de texto de varias líneas?",
        opts: ["textarea", "input type='text'", "textbox", "area"],
        ans: 0, exp: "textarea permite múltiples líneas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para una casilla de verificación?",
        opts: ["input type='checkbox'", "check", "checkbox", "input type='check'"],
        ans: 0, exp: "checkbox permite selección múltiple"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para un botón de opción (radio)?",
        opts: ["input type='radio'", "radio", "option", "input type='option'"],
        ans: 0, exp: "radio permite seleccionar solo una opción"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para un menú desplegable?",
        opts: ["select", "dropdown", "menu", "option"],
        ans: 0, exp: "select crea un menú desplegable"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "¿Qué etiqueta se usa para cada opción de un menú desplegable?",
        opts: ["option", "select", "item", "choice"],
        ans: 0, exp: "option define cada opción del select"
    },

    // ==================== HTML SEMANTICO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa el encabezado de una sección?",
        opts: ["header", "head", "h1", "section"],
        ans: 0, exp: "header es el encabezado semántico"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa el pie de página?",
        opts: ["footer", "foot", "bottom", "end"],
        ans: 0, exp: "footer es el pie de página semántico"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa una sección independiente?",
        opts: ["section", "div", "article", "main"],
        ans: 0, exp: "section agrupa contenido temático"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa contenido autónomo como un artículo?",
        opts: ["article", "section", "div", "main"],
        ans: 0, exp: "article es para contenido independiente"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa la barra de navegación?",
        opts: ["nav", "navigation", "menu", "navbar"],
        ans: 0, exp: "nav es para enlaces de navegación"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa el contenido principal único?",
        opts: ["main", "principal", "content", "body"],
        ans: 0, exp: "main es el contenido principal (solo uno por página)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Semantico", diff: "easy",
        q: "¿Qué etiqueta representa contenido aparte (sidebar)?",
        opts: ["aside", "sidebar", "side", "extra"],
        ans: 0, exp: "aside es contenido relacionado indirectamente"
    },

    // ==================== INTERMEDIO - CSS EN HTML ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "¿Qué atributo se usa para aplicar CSS inline?",
        opts: ["style", "css", "class", "id"],
        ans: 0, exp: "style aplica CSS directamente al elemento"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "¿Qué etiqueta se usa para vincular un archivo CSS externo?",
        opts: ["link", "style", "css", "script"],
        ans: 0, exp: "link rel='stylesheet' href='archivo.css'"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "¿Qué etiqueta se usa para CSS interno?",
        opts: ["style", "css", "link", "script"],
        ans: 0, exp: "style va dentro de head para CSS interno"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "¿Qué atributo se usa para agrupar elementos por clase?",
        opts: ["class", "id", "name", "group"],
        ans: 0, exp: "class puede repetirse en múltiples elementos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "¿Qué atributo se usa para identificar un elemento único?",
        opts: ["id", "class", "name", "unique"],
        ans: 0, exp: "id debe ser único en la página"
    },

    // ==================== INTERMEDIO - JAVASCRIPT EN HTML ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
        q: "¿Qué etiqueta se usa para incluir JavaScript?",
        opts: ["script", "js", "javascript", "code"],
        ans: 0, exp: "script contiene o vincula JavaScript"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
        q: "¿Qué atributo vincula un archivo JS externo?",
        opts: ["src", "href", "link", "file"],
        ans: 0, exp: "src especifica la ruta del archivo JS"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
        q: "¿Qué evento se ejecuta al hacer clic?",
        opts: ["onclick", "onmouseover", "onchange", "onsubmit"],
        ans: 0, exp: "onclick se dispara al hacer clic"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "JavaScript", diff: "medium",
        q: "¿Qué evento se ejecuta al cargar la página?",
        opts: ["onload", "onclick", "onready", "onstart"],
        ans: 0, exp: "onload se ejecuta cuando la página termina de cargar"
    },

    // ==================== INTERMEDIO - FORMULARIOS AVANZADOS ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
        q: "¿Qué atributo hace que un campo sea obligatorio?",
        opts: ["required", "mandatory", "obligatory", "must"],
        ans: 0, exp: "required valida que el campo no esté vacío"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
        q: "¿Qué tipo de input es para email?",
        opts: ["email", "text", "mail", "correo"],
        ans: 0, exp: "input type='email' valida formato de email"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
        q: "¿Qué tipo de input es para número?",
        opts: ["number", "num", "integer", "numeric"],
        ans: 0, exp: "input type='number' muestra controles de incremento"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
        q: "¿Qué tipo de input es para fecha?",
        opts: ["date", "fecha", "calendar", "datetime"],
        ans: 0, exp: "input type='date' muestra selector de fecha"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Formularios", diff: "medium",
        q: "¿Qué atributo da una pista dentro del campo?",
        opts: ["placeholder", "hint", "placeholder", "title"],
        ans: 0, exp: "placeholder muestra texto temporal dentro del input"
    },

    // ==================== AVANZADO - ACCESIBILIDAD ====================
    
    {
        profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
        q: "¿Qué atributo describe el propósito de un elemento para lectores de pantalla?",
        opts: ["aria-label", "alt", "title", "description"],
        ans: 0, exp: "aria-label proporciona texto accesible"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
        q: "¿Qué atributo indica que un elemento es un botón para tecnología asistiva?",
        opts: ["role='button'", "type='button'", "aria-button", "btn"],
        ans: 0, exp: "role define el propósito semántico para accesibilidad"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
        q: "¿Qué atributo indica que un elemento está deshabilitado?",
        opts: ["disabled", "readonly", "hidden", "inactive"],
        ans: 0, exp: "disabled hace que el elemento no sea interactivo"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
        q: "¿Qué etiqueta agrupa opciones relacionadas en un formulario?",
        opts: ["fieldset", "group", "section", "set"],
        ans: 0, exp: "fieldset agrupa controles relacionados"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Accesibilidad", diff: "hard",
        q: "¿Qué etiqueta da título a un fieldset?",
        opts: ["legend", "title", "caption", "label"],
        ans: 0, exp: "legend es el título del fieldset"
    },

    // ==================== AVANZADO - HTML5 API ====================
    
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué etiqueta se usa para reproducir video?",
        opts: ["video", "media", "movie", "mp4"],
        ans: 0, exp: "video inserta reproductor de video"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué etiqueta se usa para reproducir audio?",
        opts: ["audio", "sound", "music", "mp3"],
        ans: 0, exp: "audio inserta reproductor de audio"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué etiqueta se usa para dibujar gráficos con JavaScript?",
        opts: ["canvas", "svg", "graphics", "draw"],
        ans: 0, exp: "canvas permite dibujo programático"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué etiqueta se usa para gráficos vectoriales?",
        opts: ["svg", "canvas", "vector", "path"],
        ans: 0, exp: "svg es para gráficos vectoriales escalables"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué API almacena datos en el navegador sin fecha de expiración?",
        opts: ["localStorage", "sessionStorage", "cookies", "cache"],
        ans: 0, exp: "localStorage persiste hasta que se borra manualmente"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué API almacena datos solo por sesión?",
        opts: ["sessionStorage", "localStorage", "cookies", "cache"],
        ans: 0, exp: "sessionStorage se borra al cerrar la pestaña"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "¿Qué etiqueta se usa para contenido dinámico como mapas?",
        opts: ["iframe", "frame", "embed", "object"],
        ans: 0, exp: "iframe incrusta otra página HTML"
    },

    // ==================== AVANZADO - METADATOS ====================
    
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
        q: "¿Qué metaetiqueta define el viewport para responsive?",
        opts: ["viewport", "responsive", "scale", "width"],
        ans: 0, exp: "meta name='viewport' controla el escalado en móviles"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
        q: "¿Qué metaetiqueta define la codificación de caracteres?",
        opts: ["charset", "encoding", "content-type", "codification"],
        ans: 0, exp: "meta charset='UTF-8' define la codificación"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
        q: "¿Qué metaetiqueta se usa para SEO (descripción)?",
        opts: ["description", "keywords", "author", "title"],
        ans: 0, exp: "meta name='description' para el resumen en buscadores"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
        q: "¿Qué etiqueta define la relación entre el documento y un recurso externo?",
        opts: ["link", "a", "href", "rel"],
        ans: 0, exp: "link vincula CSS, favicon, etc"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metadatos", diff: "hard",
        q: "¿Qué etiqueta se usa para el favicon?",
        opts: ["link rel='icon'", "icon", "favicon", "image"],
        ans: 0, exp: "link rel='icon' type='image/x-icon' href='favicon.ico'"
    },
     {
        profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
        q: "Aprendizaje:\n\nHTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web.\n\nESTRUCTURA BASICA:\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Mi pagina</title>\n</head>\n<body>\n    <h1>Hola Mundo</h1>\n    <p>Este es mi primer parrafo</p>\n</body>\n</html>\n\nEXPLICACION:\n- DOCTYPE: declara que es HTML5\n- html: raiz del documento\n- head: metadatos (no visibles)\n- title: titulo en la pestaña\n- body: contenido visible\n- h1: encabezado principal\n- p: parrafo\n\nPREGUNTA: ¿Qué etiqueta contiene el contenido visible de la pagina?",
        opts: ["body", "head", "html", "title"],
        ans: 0, exp: "body es donde va todo el contenido que ve el usuario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
        q: "Aprendizaje:\n\nENCABEZADOS: h1, h2, h3, h4, h5, h6\n\n<h1>Mas importante</h1>\n<h2>Menos importante</h2>\n<h3>Aun menos</h3>\n\nLos buscadores usan h1 para entender el tema principal.\n\nPREGUNTA: ¿Qué etiqueta se usa para el encabezado mas importante?",
        opts: ["h1", "head", "header", "title"],
        ans: 0, exp: "h1 es el encabezado de nivel 1, el mas importante para SEO"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
        q: "Aprendizaje:\n\nPARRAFOS Y FORMATO:\n\n<p>Esto es un parrafo normal</p>\n<strong>Texto en negrita (importante)</strong>\n<em>Texto en cursiva (enfasis)</em>\n<br>   Salto de linea\n<hr>   Linea horizontal\n\nPREGUNTA: ¿Qué etiqueta se usa para un parrafo?",
        opts: ["p", "par", "paragraph", "text"],
        ans: 0, exp: "p es la etiqueta de parrafo"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Enlaces", diff: "easy",
        q: "Aprendizaje:\n\nENLACES (hipervinculos):\n\n<a href='https://google.com'>Ir a Google</a>\n<a href='pagina.html'>Mi pagina local</a>\n<a href='#seccion'>Ir a seccion interna</a>\n<a href='mailto:correo@email.com'>Enviar email</a>\n\nATRIBUTOS IMPORTANTES:\n- href: destino del enlace\n- target='_blank': abre en nueva pestaña\n- title: texto al pasar el mouse\n\nPREGUNTA: ¿Qué atributo define la direccion de un enlace?",
        opts: ["href", "src", "link", "url"],
        ans: 0, exp: "href especifica la URL a donde va el enlace"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Imagenes", diff: "easy",
        q: "Aprendizaje:\n\nIMAGENES:\n\n<img src='foto.jpg' alt='Descripcion de la foto' width='300' height='200'>\n\nATRIBUTOS:\n- src: ruta de la imagen\n- alt: texto alternativo (accesibilidad, y si no carga la imagen)\n- width: ancho en pixeles\n- height: alto en pixeles\n\nPREGUNTA: ¿Qué atributo proporciona texto alternativo para una imagen?",
        opts: ["alt", "src", "title", "description"],
        ans: 0, exp: "alt es obligatorio para accesibilidad y si no carga la imagen"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "Aprendizaje:\n\nLISTAS:\n\nLista NO ordenada (viñetas):\n<ul>\n    <li>Manzana</li>\n    <li>Pera</li>\n    <li>Uva</li>\n</ul>\n\nLista ordenada (numeros):\n<ol>\n    <li>Primero</li>\n    <li>Segundo</li>\n    <li>Tercero</li>\n</ol>\n\nPREGUNTA: ¿Qué etiqueta se usa para una lista ordenada (numerada)?",
        opts: ["ol", "ul", "li", "list"],
        ans: 0, exp: "ol es ordered list (numerada)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tablas", diff: "easy",
        q: "Aprendizaje:\n\nTABLAS:\n\n<table border='1'>\n    <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n    </tr>\n    <tr>\n        <td>Ana</td>\n        <td>25</td>\n    </tr>\n    <tr>\n        <td>Luis</td>\n        <td>30</td>\n    </tr>\n</table>\n\nETIQUETAS:\n- table: crea la tabla\n- tr: table row (fila)\n- th: table header (encabezado)\n- td: table data (celda)\n\nPREGUNTA: ¿Qué etiqueta se usa para una fila de tabla?",
        opts: ["tr", "td", "th", "table"],
        ans: 0, exp: "tr es table row"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "Aprendizaje:\n\nFORMULARIOS BASICOS:\n\n<form action='procesar.php' method='POST'>\n    <label>Nombre:</label>\n    <input type='text' name='nombre' placeholder='Tu nombre'>\n    \n    <label>Email:</label>\n    <input type='email' name='correo' required>\n    \n    <input type='submit' value='Enviar'>\n</form>\n\nATRIBUTOS DE FORM:\n- action: donde se envian los datos\n- method: GET (visible en URL) o POST (oculto)\n\nPREGUNTA: ¿Qué atributo define donde se envian los datos del formulario?",
        opts: ["action", "method", "target", "enctype"],
        ans: 0, exp: "action especifica la URL que procesara el formulario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "Aprendizaje:\n\nTIPOS DE INPUT:\n\n<input type='text'>      - Texto normal\n<input type='password'>  - Contraseña (oculta)\n<input type='email'>     - Email (valida formato)\n<input type='number'>    - Numeros\n<input type='date'>      - Calendario\n<input type='checkbox'>  - Casilla de verificacion\n<input type='radio'>     - Boton de opcion (uno por grupo)\n<input type='file'>      - Subir archivos\n<textarea>               - Texto multilinea\n<select>                 - Menu desplegable\n\nPREGUNTA: ¿Qué tipo de input se usa para contraseñas?",
        opts: ["password", "text", "hidden", "secret"],
        ans: 0, exp: "input type='password' oculta los caracteres con puntos o asteriscos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "Aprendizaje:\n\nCSS (Cascading Style Sheets) - Estilos:\n\nTRES FORMAS DE USAR CSS:\n\n1. Inline (dentro del elemento):\n   <p style='color:red; font-size:20px;'>Texto rojo</p>\n\n2. Interno (dentro de head):\n   <style>\n       p { color: red; }\n       .mi-clase { font-size: 20px; }\n       #mi-id { background: yellow; }\n   </style>\n\n3. Externo (archivo separado):\n   <link rel='stylesheet' href='estilos.css'>\n\nSELECTORES:\n- etiqueta: p { }\n- clase: .nombre { }\n- id: #nombre { }\n\nPREGUNTA: ¿Qué etiqueta se usa para vincular un archivo CSS externo?",
        opts: ["link", "style", "css", "script"],
        ans: 0, exp: "link rel='stylesheet' href='archivo.css'"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "Aprendizaje:\n\nMODELO DE CAJA (Box Model):\n\nCada elemento es una caja con:\n\n[ MARGEN (externa) ]\n    [ BORDE ]\n        [ RELLENO (padding) ]\n            [ CONTENIDO ]\n\nPROPIEDADES:\n- margin: espacio FUERA del borde\n- border: linea alrededor\n- padding: espacio DENTRO del borde\n- width / height: tamaño del contenido\n\nPREGUNTA: ¿Qué propiedad controla el espacio DENTRO del borde (entre borde y contenido)?",
        opts: ["padding", "margin", "border", "spacing"],
        ans: 0, exp: "padding es el espacio interno entre borde y contenido"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "Aprendizaje:\n\nFLEXBOX - DISEÑO MODERNO:\n\n<div style='display: flex; justify-content: center; align-items: center;'>\n    <div>Item 1</div>\n    <div>Item 2</div>\n</div>\n\nPROPIEDADES DEL CONTENEDOR:\n- display: flex           (activa flexbox)\n- flex-direction: row     (horizontal) / column (vertical)\n- justify-content: center (horizontal)\n- align-items: center     (vertical)\n- gap: 10px              (espacio entre items)\n\nPREGUNTA: ¿Qué propiedad de flexbox centra los elementos HORIZONTALMENTE?",
        opts: ["justify-content", "align-items", "text-align", "margin-auto"],
        ans: 0, exp: "justify-content alinea horizontalmente en flexbox"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Responsive", diff: "medium",
        q: "Aprendizaje:\n\nDISEÑO RESPONSIVE (que se adapta a moviles):\n\nMETA VIEWPORT (obligatorio):\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\nMEDIA QUERIES:\n\n@media (max-width: 768px) {\n    /* Estilos solo para moviles */\n    body {\n        font-size: 14px;\n    }\n}\n\nUNIDADES RESPONSIVE:\n- vw: viewport width (1% del ancho de pantalla)\n- vh: viewport height\n- rem: relativo al tamaño de fuente raiz\n- em: relativo al tamaño del elemento padre\n\nPREGUNTA: ¿Qué metaetiqueta es necesaria para que una pagina sea responsive en moviles?",
        opts: ["viewport", "responsive", "scale", "mobile"],
        ans: 0, exp: "meta name='viewport' content='width=device-width, initial-scale=1.0'"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
        q: "Aprendizaje:\n\nJAVASCRIPT EN HTML:\n\nINCLUIR JS:\n\n<script>\n    // JS interno\n    document.getElementById('demo').innerHTML = 'Hola';\n</script>\n\n<script src='archivo.js'></script>  // JS externo\n\nEVENTOS COMUNES:\n- onclick: al hacer clic\n- onmouseover: al pasar el mouse\n- onchange: al cambiar un input\n- onload: al cargar la pagina\n\nDOM (Document Object Model):\n- document.getElementById('id')\n- document.querySelector('.clase')\n- document.querySelectorAll('p')\n\nPREGUNTA: ¿Qué metodo de JavaScript selecciona un elemento por su ID?",
        opts: ["getElementById", "querySelector", "getElementsByClassName", "getElementByTag"],
        ans: 0, exp: "document.getElementById('id') selecciona un elemento por su id"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
        q: "Aprendizaje:\n\nMANIPULACION DEL DOM:\n\n// Crear elementos\nlet nuevoDiv = document.createElement('div');\nnuevoDiv.textContent = 'Texto nuevo';\n\n// Agregar a la pagina\ndocument.body.appendChild(nuevoDiv);\n\n// Modificar contenido\ndocument.getElementById('miId').innerHTML = '<strong>Nuevo HTML</strong>';\n\n// Cambiar estilos\ndocument.getElementById('miId').style.color = 'red';\n\n// Escuchar eventos\ndocument.getElementById('boton').addEventListener('click', function() {\n    alert('Click!');\n});\n\nPREGUNTA: ¿Qué metodo crea un nuevo elemento HTML?",
        opts: ["createElement", "appendChild", "createNode", "newElement"],
        ans: 0, exp: "document.createElement('div') crea un nuevo elemento"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "Aprendizaje:\n\nHTML5 API - ALMACENAMIENTO LOCAL:\n\nlocalStorage (persiste hasta que se borra):\nlocalStorage.setItem('clave', 'valor');\nlet dato = localStorage.getItem('clave');\nlocalStorage.removeItem('clave');\nlocalStorage.clear();\n\nsessionStorage (se borra al cerrar pestaña):\nsessionStorage.setItem('clave', 'valor');\n\nJSON (guardar objetos):\nlet usuario = {nombre: 'Ana', edad: 25};\nlocalStorage.setItem('user', JSON.stringify(usuario));\nlet recuperado = JSON.parse(localStorage.getItem('user'));\n\nPREGUNTA: ¿Qué API almacena datos en el navegador SIN fecha de expiracion?",
        opts: ["localStorage", "sessionStorage", "cookies", "cache"],
        ans: 0, exp: "localStorage persiste hasta que se borra manualmente o con codigo"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "Aprendizaje:\n\nHTML5 - VIDEO Y AUDIO:\n\nVIDEO:\n<video width='640' height='360' controls>\n    <source src='video.mp4' type='video/mp4'>\n    <source src='video.webm' type='video/webm'>\n    Tu navegador no soporta video\n</video>\n\nAUDIO:\n<audio controls>\n    <source src='cancion.mp3' type='audio/mpeg'>\n    <source src='cancion.ogg' type='audio/ogg'>\n</audio>\n\nATRIBUTOS:\n- controls: muestra controles de reproduccion\n- autoplay: reproduce automaticamente\n- loop: repite en bucle\n- muted: sin sonido\n\nPREGUNTA: ¿Qué etiqueta se usa para insertar un reproductor de video?",
        opts: ["video", "media", "movie", "source"],
        ans: 0, exp: "video es la etiqueta de HTML5 para reproducir videos"
    },
     // ==================== UNIDAD: INTRODUCCION A HTML ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
        q: "APRENDIZAJE:\n\nHTML es el esqueleto de una pagina web.\n\nESTRUCTURA BASICA:\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Mi Primera Pagina</title>\n</head>\n<body>\n    <h1>Bienvenidos</h1>\n    <p>Este es mi primer parrafo</p>\n</body>\n</html>\n\nEXPLICACION:\n- DOCTYPE: le dice al navegador que es HTML5\n- html: todo el documento va aqui dentro\n- head: informacion para el navegador (no se ve)\n- title: aparece en la pestaña del navegador\n- body: TODO lo que ve el usuario va aqui\n- h1: titulo principal (solo uno por pagina)\n- p: parrafo de texto\n\nCASE: Estas creando tu primera pagina web. Quieres que el titulo que aparezca en la pestaña del navegador sea 'Mi Tienda Online'. ¿Donde debes colocar ese texto?\n\nOpciones:\nA) Dentro de <body>\nB) Dentro de <title> que esta en <head>\nC) Dentro de <h1>\nD) Dentro de <header>",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "El titulo de la pestaña va en <title> dentro de <head>"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Introduccion", diff: "easy",
        q: "APRENDIZAJE:\n\nENCABEZADOS (h1 a h6):\n\n<h1>Articulo principal</h1>  <!-- El mas importante, solo uno -->\n<h2>Subtitulo de seccion</h2>\n<h3>Subsubtitulo</h3>\n\nLos buscadores dan MUCHA importancia al h1. Solo debe haber UN h1 por pagina.\n\nCASE: Tienes una pagina de recetas. El titulo principal es 'Recetas Caseras'. Luego tienes secciones: 'Desayunos', 'Almuerzos', 'Cenas'. ¿Que etiqueta usas para el titulo principal y cuales para las secciones?\n\nOpciones:\nA) h1 para todo\nB) h1 para 'Recetas Caseras', h2 para las secciones\nC) h2 para todo\nD) title para el principal, h1 para secciones",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "h1 para el titulo principal, h2 para las secciones (estructura jerarquica)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Texto", diff: "easy",
        q: "APRENDIZAJE:\n\nFORMATO DE TEXTO:\n\n<strong>Texto importante (negrita)</strong>\n<em>Texto con enfasis (cursiva)</em>\n<br>   Salta a la siguiente linea\n<hr>   Dibuja una linea horizontal\n\nDiferencia: <strong> es para IMPORTANCIA (SEO), <b> es solo visual (negrita sin significado).\n\nCASE: Estas escribiendo un articulo. Quieres resaltar una palabra que es MUY importante para el significado, no solo para que se vea bonito. ¿Que etiqueta usas?\n\nOpciones:\nA) <b>\nB) <strong>\nC) <em>\nD) <mark>",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "<strong> indica importancia semantica, los buscadores lo consideran relevante"
    },

    // ==================== UNIDAD: ENLACES E IMAGENES ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Enlaces", diff: "easy",
        q: "APRENDIZAJE:\n\nENLACES (hipervinculos):\n\n<a href='https://google.com'>Ir a Google</a>\n<a href='contacto.html'>Pagina interna</a>\n<a href='#seccion'>Ir a seccion dentro de la misma pagina</a>\n<a href='mailto:correo@ejemplo.com'>Enviar email</a>\n<a href='archivo.pdf' download>Descargar PDF</a>\n\nATRIBUTO target='_blank': abre en nueva pestaña.\n\nCASE: Tienes una pagina web con enlaces a redes sociales. Quieres que cuando el usuario haga clic en el enlace de Facebook, se abra en una NUEVA pestaña para que no salga de tu pagina. ¿Que atributo agregas al <a>?\n\nOpciones:\nA) target='_self'\nB) target='_blank'\nC) target='_new'\nD) target='_top'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "target='_blank' abre el enlace en una nueva pestaña"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Imagenes", diff: "easy",
        q: "APRENDIZAJE:\n\nIMAGENES:\n\n<img src='foto.jpg' alt='Descripcion' width='300'>\n\n- src: ruta de la imagen (obligatorio)\n- alt: texto alternativo (obligatorio para accesibilidad)\n- width / height: tamaño en pixeles\n\nEl atributo alt es IMPORTANTISIMO:\n- Si la imagen no carga, se ve el texto\n- Los lectores de pantalla para ciegos leen el alt\n- Mejora el SEO\n\nCASE: Tu pagina tiene una foto de un perro. La imagen no carga por error en la ruta. El usuario ve un cuadro roto con un texto. ¿Que texto deberia aparecer para que sepa que habia una foto de un perro?\n\nOpciones:\nA) El nombre del archivo 'perro.jpg'\nB) El texto del atributo alt\nC) El texto del atributo title\nD) El texto del atributo src",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "El atributo alt se muestra cuando la imagen no carga"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Imagenes", diff: "easy",
        q: "APRENDIZAJE:\n\nRUTAS DE IMAGENES:\n\n<img src='foto.jpg'>         # misma carpeta\n<img src='imagenes/foto.jpg'> # dentro de carpeta imagenes\n<img src='../foto.jpg'>       # carpeta padre (subir un nivel)\n<img src='/foto.jpg'>         # desde la raiz del sitio\n\nCASE: Tu sitio web tiene esta estructura:\n\nmi-sitio/\n   index.html\n   imagenes/\n      logo.png\n   css/\n      estilos.css\n\nEstas en index.html y quieres mostrar logo.png. ¿Que ruta usas en src?\n\nOpciones:\nA) 'logo.png'\nB) 'imagenes/logo.png'\nC) '../imagenes/logo.png'\nD) '/imagenes/logo.png'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "imagenes es una subcarpeta de donde esta index.html, entonces 'imagenes/logo.png'"
    },

    // ==================== UNIDAD: LISTAS ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "APRENDIZAJE:\n\nLISTAS NO ORDENADAS (viñetas):\n\n<ul>\n    <li>Manzana</li>\n    <li>Pera</li>\n    <li>Uva</li>\n</ul>\n\nLISTAS ORDENADAS (numeros):\n\n<ol>\n    <li>Primer paso</li>\n    <li>Segundo paso</li>\n    <li>Tercer paso</li>\n</ol>\n\nCASE: Estas creando una pagina con una receta de cocina. Necesitas mostrar los ingredientes (sin orden especifico) y los pasos a seguir (en orden). ¿Que usas para cada uno?\n\nOpciones:\nA) ol para ingredientes, ul para pasos\nB) ul para ingredientes, ol para pasos\nC) ul para ambos\nD) ol para ambos",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "Los ingredientes no tienen orden (ul), los pasos SEGUIR UN ORDEN (ol)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "APRENDIZAJE:\n\nLISTAS ANIDADAS (listas dentro de listas):\n\n<ul>\n    <li>Frutas\n        <ul>\n            <li>Manzana</li>\n            <li>Pera</li>\n        </ul>\n    </li>\n    <li>Verduras\n        <ul>\n            <li>Lechuga</li>\n            <li>Tomate</li>\n        </ul>\n    </li>\n</ul>\n\nCASE: Haces un menu de navegacion con categorias y subcategorias: 'Ropa' tiene 'Hombre' y 'Mujer'; 'Electronica' tiene 'Celulares' y 'Computadoras'. ¿Como estructuras el HTML?\n\nOpciones:\nA) Un ul con li que contienen otro ul\nB) Un ol con li que contienen otro ol\nC) Todos los li seguidos\nD) Usar tablas",
        opts: ["A", "B", "C", "D"],
        ans: 0, exp: "Listas anidadas: ul principal, cada li puede tener otro ul adentro"
    },

    // ==================== UNIDAD: TABLAS ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tablas", diff: "easy",
        q: "APRENDIZAJE:\n\nTABLAS:\n\n<table border='1'>\n    <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n        <th>Ciudad</th>\n    </tr>\n    <tr>\n        <td>Ana</td>\n        <td>25</td>\n        <td>Madrid</td>\n    </tr>\n    <tr>\n        <td>Luis</td>\n        <td>30</td>\n        <td>Barcelona</td>\n    </tr>\n</table>\n\n- th: encabezado (negrita, centrado)\n- tr: fila\n- td: celda normal\n\nCASE: Tienes una lista de empleados con: Nombre, Cargo, Salario. Quieres mostrar los nombres de las columnas en negrita y centrados. ¿Que etiqueta usas para los encabezados?\n\nOpciones:\nA) <td>\nB) <tr>\nC) <th>\nD) <caption>",
        opts: ["C", "A", "B", "D"],
        ans: 0, exp: "th es table header, para encabezados de columna"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tablas", diff: "easy",
        q: "APRENDIZAJE:\n\nUNIR CELDAS (colspan y rowspan):\n\n<table border='1'>\n    <tr>\n        <th colspan='2'>Nombre Completo</th>\n        <th>Edad</th>\n    </tr>\n    <tr>\n        <td>Ana</td>\n        <td>Garcia</td>\n        <td>25</td>\n    </tr>\n</table>\n\ncolspan: une celdas horizontalmente\nrowspan: une celdas verticalmente\n\nCASE: Haces una tabla de horarios. Lunes, Martes, Miercoles son dias. Quieres que la celda 'Mañana' ocupe las 3 columnas de los dias. ¿Que usas?\n\nOpciones:\nA) rowspan='3'\nB) colspan='3'\nC) merge='3'\nD) span='3'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "colspan une celdas horizontalmente (a lo ancho)"
    },

    // ==================== UNIDAD: FORMULARIOS ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "APRENDIZAJE:\n\nFORMULARIOS:\n\n<form action='guardar.php' method='POST'>\n    <label for='nombre'>Nombre:</label>\n    <input type='text' id='nombre' name='nombre' placeholder='Escribe tu nombre'>\n    \n    <label for='email'>Email:</label>\n    <input type='email' id='email' name='email' required>\n    \n    <input type='submit' value='Enviar'>\n</form>\n\n- action: archivo que procesa los datos\n- method: GET (datos en URL) o POST (datos ocultos)\n- name: nombre del campo cuando se envia\n- required: campo obligatorio\n\nCASE: Estas haciendo un formulario de registro. Los datos son sensibles (contraseña). ¿Que metodo usas en el formulario?\n\nOpciones:\nA) method='GET'\nB) method='POST'\nC) method='SEND'\nD) method='PUT'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "POST es para datos sensibles, no aparecen en la URL"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "APRENDIZAJE:\n\nTIPOS DE INPUT:\n\n<input type='text'>      - Texto normal\n<input type='password'>  - Contraseña (aparecen puntos)\n<input type='email'>     - Valida que sea email\n<input type='number'>     - Solo numeros\n<input type='date'>       - Muestra calendario\n<input type='checkbox'>   - Casilla (puedes marcar varias)\n<input type='radio'>      - Boton (solo uno del grupo)\n<input type='file'>       - Subir archivos\n<textarea>                - Texto multilinea\n<select>                  - Menu desplegable\n\nCASE: Quieres que el usuario pueda seleccionar VARIOS hobbies (deporte, musica, lectura). ¿Que input usas?\n\nOpciones:\nA) radio\nB) checkbox\nC) select multiple\nD) text",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "checkbox permite seleccionar multiples opciones"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Formularios", diff: "easy",
        q: "APRENDIZAJE:\n\nGRUPOS DE RADIO (solo una opcion):\n\n<input type='radio' name='genero' value='masculino'> Masculino\n<input type='radio' name='genero' value='femenino'> Femenino\n<input type='radio' name='genero' value='otro'> Otro\n\nTODOS deben tener el MISMO name para que solo se pueda elegir uno.\n\nCASE: Haces un formulario donde el usuario debe elegir UN solo metodo de pago: Tarjeta, Efectivo, Transferencia. ¿Que input usas y que deben tener en comun?\n\nOpciones:\nA) checkbox, mismo id\nB) radio, mismo name\nC) radio, diferente name\nD) checkbox, mismo value",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "radio con el mismo name permite seleccionar solo una opcion"
    },

    // ==================== UNIDAD: HTML SEMANTICO ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "Semantico", diff: "medium",
        q: "APRENDIZAJE:\n\nHTML SEMANTICO (con significado):\n\n<header>    - Encabezado de la pagina o seccion\n<nav>       - Barra de navegacion (enlaces)\n<main>      - Contenido principal UNICO de la pagina\n<article>   - Contenido independiente (un post, noticia)\n<section>   - Grupo de contenido relacionado\n<aside>     - Contenido lateral (sidebar, relacionados)\n<footer>    - Pie de pagina\n\nBENEFICIOS:\n- Mejor SEO (buscadores entienden tu pagina)\n- Accesibilidad (lectores de pantalla)\n- Codigo mas claro\n\nCASE: Tu pagina tiene: menu de navegacion arriba, un articulo principal en el centro, una barra lateral con publicidad, y pie de pagina con copyright. ¿Que etiquetas semanticas usas?\n\nOpciones:\nA) div para todo\nB) header, nav, main, article, aside, footer\nC) section, div, span, footer\nD) head, body, div, footer",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "Las etiquetas semanticas son: header, nav, main, article, aside, footer"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Semantico", diff: "medium",
        q: "APRENDIZAJE:\n\nDIFERENCIA ENTRE article Y section:\n\n<article>: contenido INDEPENDIENTE que podria funcionar solo (post de blog, noticia, comentario).\n\n<section>: agrupa contenido RELACIONADO pero que necesita el contexto de la pagina (capitulos de un libro, secciones de un producto).\n\nCASE: Tu pagina tiene una seccion de 'Productos destacados' con 3 productos. Cada producto tiene nombre y precio. Adentro, un blog con posts. ¿Como lo estructuras?\n\nOpciones:\nA) section para productos, article para cada producto\nB) article para productos, section para cada producto\nC) div para todo\nD) aside para productos, main para blog",
        opts: ["A", "B", "C", "D"],
        ans: 0, exp: "section agrupa los productos, cada producto es un article (contenido independiente)"
    },

    // ==================== UNIDAD: CSS BASICO ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "APRENDIZAJE:\n\nSELECTORES CSS:\n\n/* Por etiqueta */\np { color: red; }\n\n/* Por clase (puede repetirse) */\n.destacado { background: yellow; }\n\n/* Por id (UNICO en la pagina) */\n#logo { width: 100px; }\n\n/* Por atributo */\ninput[type='text'] { border: 1px solid gray; }\n\nCASE: Tienes 3 botones en tu pagina. Quieres que UNO especifico (el de enviar) tenga fondo verde. Los otros botones no. ¿Que selector usas?\n\nOpciones:\nA) .boton (clase)\nB) button (etiqueta)\nC) #enviar (id)\nD) div button",
        opts: ["C", "A", "B", "D"],
        ans: 0, exp: "id es unico, ideal para un elemento especifico como el boton enviar"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "APRENDIZAJE:\n\nMODELO DE CAJA:\n\n.caja {\n    width: 200px;\n    padding: 20px;      /* espacio DENTRO (entre borde y contenido) */\n    border: 2px solid black;\n    margin: 30px;       /* espacio FUERA (entre cajas) */\n}\n\nEl tamaño TOTAL = width + padding(izq+der) + border(izq+der) + margin(izq+der)\n\nCASE: Tienes un div con width: 100px, padding: 10px, border: 2px. ¿Cual es el ancho TOTAL que ocupa en la pagina?\n\nOpciones:\nA) 100px\nB) 112px\nC) 124px\nD) 104px",
        opts: ["C", "A", "B", "D"],
        ans: 0, exp: "100 + 10(izq) + 10(der) + 2(izq) + 2(der) = 124px"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "CSS", diff: "medium",
        q: "APRENDIZAJE:\n\nFLEXBOX - ALINEACION:\n\n.contenedor {\n    display: flex;\n    justify-content: center;  /* horizontal */\n    align-items: center;      /* vertical */\n    gap: 10px;               /* espacio entre items */\n}\n\n- justify-content: flex-start, center, space-between, space-around\n- align-items: flex-start, center, flex-end, stretch\n\nCASE: Quieres centrar UN SOLO boton dentro de un div, tanto horizontal como verticalmente. El div tiene 400px de alto. ¿Que CSS usas?\n\nOpciones:\nA) text-align: center; line-height: 400px;\nB) display: flex; justify-content: center; align-items: center;\nC) margin: auto;\nD) position: absolute; left: 50%; top: 50%;",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "Flexbox con justify-content y align-items centra perfectamente"
    },

    // ==================== UNIDAD: RESPONSIVE ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "Responsive", diff: "medium",
        q: "APRENDIZAJE:\n\nMEDIA QUERIES:\n\n/* Para moviles (ancho menor a 768px) */\n@media (max-width: 768px) {\n    body {\n        font-size: 14px;\n    }\n    .menu {\n        display: none;\n    }\n}\n\n/* Para tablets (entre 768px y 1024px) */\n@media (min-width: 768px) and (max-width: 1024px) {\n    .contenedor {\n        width: 90%;\n    }\n}\n\nCASE: En tu pagina, el menu horizontal se ve bien en computadora. En movil, el ancho es muy pequeño y el menu se rompe. Quieres que en movil (menos de 768px) el menu se oculte. ¿Que media query usas?\n\nOpciones:\nA) @media (min-width: 768px) { .menu { display: none; } }\nB) @media (max-width: 768px) { .menu { display: none; } }\nC) @media (width: 768px) { .menu { display: none; } }\nD) @media (min-width: 768px) { .menu { display: block; } }",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "max-width: 768px afecta a pantallas de 768px o menos (moviles)"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Responsive", diff: "medium",
        q: "APRENDIZAJE:\n\nUNIDADES RESPONSIVE:\n\n- px: pixeles fijos (NO responsive)\n- %: porcentaje del contenedor padre\n- vw: 1% del ancho de la pantalla\n- vh: 1% del alto de la pantalla\n- rem: relativo al tamaño de fuente raiz (normalmente 16px)\n\nCASE: Quieres que un banner ocupe SIEMPRE el 100% del ancho de la pantalla, sin importar el tamaño. ¿Que unidad usas?\n\nOpciones:\nA) 100%\nB) 100vw\nC) 100vh\nD) 100rem",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "100vw es 100% del viewport width (ancho de pantalla)"
    },

    // ==================== UNIDAD: JAVASCRIPT BASICO ====================
    
    {
        profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
        q: "APRENDIZAJE:\n\nEVENTOS EN JAVASCRIPT:\n\n<button onclick='saludar()'>Click</button>\n\n<script>\nfunction saludar() {\n    alert('Hola!');\n}\n</script>\n\nOTROS EVENTOS:\n- onmouseover: al pasar el mouse\n- onmouseout: al salir el mouse\n- onchange: al cambiar un input\n- onkeyup: al soltar una tecla\n\nCASE: Tienes un campo de texto donde el usuario escribe su nombre. Quieres que mientras escribe, abajo se muestre automaticamente 'Hola [lo que escribe]'. ¿Que evento usas?\n\nOpciones:\nA) onclick\nB) onmouseover\nC) onkeyup\nD) onload",
        opts: ["C", "A", "B", "D"],
        ans: 0, exp: "onkeyup se ejecuta cada vez que el usuario suelta una tecla"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
        q: "APRENDIZAJE:\n\nMANIPULAR EL DOM:\n\nHTML:\n<p id='mensaje'>Texto original</p>\n<button onclick='cambiar()'>Cambiar</button>\n\nJavaScript:\nfunction cambiar() {\n    document.getElementById('mensaje').innerHTML = 'Texto nuevo';\n    document.getElementById('mensaje').style.color = 'red';\n}\n\nCASE: Tienes un div vacio con id='resultado'. Al hacer clic en un boton, quieres que aparezca el texto 'Clickeado!' dentro del div y en color azul. ¿Como lo haces?\n\nOpciones:\nA) document.getElementById('resultado').value = 'Clickeado!'\nB) document.getElementById('resultado').innerHTML = 'Clickeado!'; .style.color = 'blue'\nC) document.getElementById('resultado').text = 'Clickeado!'; .color = 'blue'\nD) document.getElementById('resultado').content = 'Clickeado!'; .css.color = 'blue'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "innerHTML para el contenido, style.color para el color"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "JavaScript", diff: "hard",
        q: "APRENDIZAJE:\n\nVALIDACION DE FORMULARIOS:\n\n<form onsubmit='return validar()'>\n    <input type='text' id='nombre'>\n    <input type='submit'>\n</form>\n\n<script>\nfunction validar() {\n    let nombre = document.getElementById('nombre').value;\n    if (nombre == '') {\n        alert('Nombre obligatorio');\n        return false;  // evita que se envie\n    }\n    return true;  // permite enviar\n}\n</script>\n\nCASE: Tu formulario tiene campo email. Quieres que si el usuario no escribe nada, muestres alerta y NO se envie el formulario. ¿Que haces?\n\nOpciones:\nA) onsubmit='return false'\nB) validar con if y return false\nC) required en el input\nD) onsubmit='return true'",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "En la funcion de validacion, si esta vacio, alert y return false evita el envio"
    },

    // ==================== UNIDAD: HTML5 AVANZADO ====================
    
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "APRENDIZAJE:\n\nLOCALSTORAGE (guardar datos):\n\n// Guardar\ndatos = {nombre: 'Ana', edad: 25};\nlocalStorage.setItem('usuario', JSON.stringify(datos));\n\n// Recuperar\nlet recuperado = JSON.parse(localStorage.getItem('usuario'));\n\n// Eliminar\nlocalStorage.removeItem('usuario');\n\n// Limpiar todo\nlocalStorage.clear();\n\nCASE: Tu pagina tiene un tema oscuro/claro. Quieres recordar la preferencia del usuario para la proxima vez que visite la pagina. ¿Donde guardas esa preferencia?\n\nOpciones:\nA) En una variable global\nB) En localStorage\nC) En un archivo en el servidor\nD) En la URL",
        opts: ["B", "A", "C", "D"],
        ans: 0, exp: "localStorage persiste entre visitas, ideal para preferencias"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "HTML5", diff: "hard",
        q: "APRENDIZAJE:\n\nCANVAS (dibujar con JavaScript):\n\n<canvas id='miCanvas' width='200' height='200'></canvas>\n\n<script>\nlet canvas = document.getElementById('miCanvas');\nlet ctx = canvas.getContext('2d');\n\n// Dibujar rectangulo\nctx.fillStyle = 'red';\nctx.fillRect(50, 50, 100, 80);\n\n// Dibujar circulo\nctx.beginPath();\nctx.arc(100, 100, 40, 0, 2 * Math.PI);\nctx.fill();\n</script>\n\nCASE: Quieres hacer un grafico simple: un cuadrado rojo en la posicion x=20, y=30, de 100px de ancho y 80px de alto. ¿Que metodo usas?\n\nOpciones:\nA) ctx.circle(20, 30, 100, 80)\nB) ctx.rect(20, 30, 100, 80)\nC) ctx.fillRect(20, 30, 100, 80)\nD) ctx.drawRect(20, 30, 100, 80)",
        opts: ["C", "A", "B", "D"],
        ans: 0, exp: "fillRect(x, y, width, height) dibuja un rectangulo relleno"
    },
    



    ];



registrarAsignatura('lenguaje_html', BANK.lenguaje_html);
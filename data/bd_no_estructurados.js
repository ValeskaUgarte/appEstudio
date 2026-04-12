window.BANK = window.BANK || {};
BANK.bd_no_estructurados = [

     // ==================== NOSQL - EMBEDDING VS REFERENCING ====================
    {
        unit: "NoSQL",
        diff: "hard",
        case: "En MongoDB, estás diseñando un blog. Los comentarios de un post son pocos y siempre se leen junto al post.",
        q: "¿Cuál es la estrategia de modelado más eficiente en NoSQL para este caso?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Estrategia</th><th>Descripción</th></tr></thead>
        <tbody>
        <tr><td><input type="text" size="12" placeholder="???"> (Embeber)</td><td>Guardar comentarios dentro del doc del post</td></tr>
        <tr><td>Referenciar</td><td>Guardar IDs en colecciones separadas</td></tr>
        </tbody>
        </table>
        `,
        opts: ["Embedding", "Normalization", "Sharding", "Indexing"],
        ans: 0,
        exp: "Embeber (Embedding) reduce las operaciones de lectura (I/O) al obtener toda la información relacionada en una sola consulta al disco."
    },

    // ==================== NOSQL - CAP THEOREM ====================
    {
        unit: "NoSQL",
        diff: "hard",
        case: "Estás eligiendo una base de datos NoSQL. Necesitas que el sistema priorice que los datos sean consistentes en todos los nodos, aunque el sistema deje de estar disponible un momento si hay un fallo de red.",
        q: "¿Según el Teorema de CAP, qué combinación estás buscando?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Letra CAP</th><th>Significado</th></tr></thead>
        <tbody>
        <tr><td>C - <input type="text" size="12" placeholder="???"></td><td>Todos los nodos ven lo mismo al mismo tiempo</td></tr>
        <tr><td>A - Availability</td><td>El sistema siempre responde</td></tr>
        </tbody>
        </table>
        `,
        opts: ["Consistency", "Concurrency", "Complexity", "Caching"],
        ans: 0,
        exp: "La Consistencia (C) garantiza que todos los clientes lean los mismos datos simultáneamente, un desafío clave en sistemas distribuidos."
    },

    // ==================== MONGODB - LA LLAVE PRIMARIA (_id) ====================
    {
        unit: "NoSQL",
        diff: "medium",
        case: "Insertas un nuevo documento en la colección 'clientes'. No especificas ninguna clave primaria manualmente.",
        q: "¿Qué campo genera MongoDB automáticamente para identificar el documento de forma única?",
        extra: `
        // Representación real en la base de datos:
        {
          "<input type="text" size="5" placeholder="???">": ObjectId("64f1a2b3c4d5e6f7a8b90123"),
          "nombre": "Juan Pérez",
          "ciudad": "Santiago"
        }
        `,
        opts: ["_id", "id_primary", "uid", "key"],
        ans: 0,
        exp: "El campo '_id' es obligatorio en cada documento. Si no lo provees, MongoDB genera un ObjectId de 12 bytes que incluye un timestamp (fecha/hora)."
    },

    // ==================== MONGODB - DOCUMENTOS ANIDADOS (EMBEDDING) ====================
    {
        unit: "NoSQL",
        diff: "hard",
        case: "En una base de datos de 'Ventas', quieres guardar la dirección de envío dentro del mismo documento del pedido para evitar hacer un JOIN (que no existen en NoSQL).",
        q: "¿Cómo se llama esta estructura donde un documento contiene a otro?",
        extra: `
        {
          "_id": ObjectId("..."),
          "total": 15500,
          "envio": {
            "calle": "Av. Matta",
            "comuna": "Santiago",
            "region": "<input type="text" size="10" placeholder="???">" 
          }
        }
        `,
        opts: ["Embedded Document (Subdocumento)", "Relación Foránea", "Tabla Secundaria", "Link Document"],
        ans: 0,
        exp: "El 'Embedding' permite recuperar toda la información relacionada en una sola lectura de disco, lo que hace a NoSQL mucho más rápido que SQL para este caso."
    },

    // ==================== MONGODB - CONSULTA POR ID ====================
    {
        unit: "NoSQL",
        diff: "medium",
        case: "Necesitas buscar un producto específico usando su identificador único para mostrarlo en una vista de detalle.",
        q: "¿Cuál es la sintaxis correcta para filtrar por el identificador automático?",
        extra: `
        db.productos.find({
          "<input type="text" size="5" placeholder="???">": ObjectId("64f1a2b3...")
        })
        `,
        opts: ["_id", "id", "pk", "uuid"],
        ans: 0,
        exp: "Para buscar por el ID autogenerado, siempre debes usar el nombre exacto del campo '_id' y envolver el valor en la función ObjectId()."
    },

    // ==================== MONGODB - ARRAYS DE DATOS ====================
    {
        unit: "NoSQL",
        diff: "hard",
        case: "Un usuario puede tener múltiples números de teléfono. En NoSQL, guardamos esto como una lista dentro del mismo documento.",
        q: "¿Qué tipo de dato de BSON permite almacenar múltiples valores en un solo campo?",
        extra: `
        {
          "_id": ObjectId("..."),
          "nombre": "Carlos",
          "telefonos": <input type="text" size="15" placeholder="???"> // ["+569...", "+562..."]
        }
        `,
        opts: ["Array", "String", "Object", "Null"],
        ans: 0,
        exp: "Los Arrays permiten almacenar colecciones de datos (strings, números o incluso otros documentos) dentro de un solo campo, facilitando el manejo de datos 1 a N."
    },

    // ==================== MONGODB - OPERADORES LÓGICOS (AND) ====================
    {
        unit: "NoSQL",
        diff: "hard",
        case: "Quieres buscar estudiantes que tengan un promedio mayor a 5.0 Y que además estén en el curso 'Informatica'.",
        q: "¿Cómo se agrupan varias condiciones en una sola consulta de MongoDB?",
        extra: `
        db.alumnos.find({
          "promedio": { $gt: 5.0 },
          "curso": "<input type="text" size="12" placeholder="???">"
        })
        `,
        opts: ["Informatica", "$and: 'Informatica'", "WHERE 'Informatica'", "JOIN 'Informatica'"],
        ans: 0,
        exp: "En MongoDB, separar los campos por coma dentro del mismo objeto { } actúa como un AND implícito."
    }

    


     ];



registrarAsignatura('bd_no_estructurados', BANK.bd_no_estructurados);
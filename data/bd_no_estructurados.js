window.BANK = window.BANK || {};
BANK.bd_no_estructurados = [


  //PREGUNTAS PARA CREAR DESDE CERO
{
    unit: "MongoDB - Crear Base de Datos",
    diff: "easy",
    q: "Escribe el comando completo para crear (o seleccionar) una base de datos llamada 'universidad'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Se usa el comando 'use'</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de bases de datos</h6>
</div>`,
    opts: ["use universidad", "use('universidad')", "db.createDatabase('universidad')", "create database universidad"],
    ans: 1,
    exp: "use('universidad') o use universidad selecciona la base de datos. En VS Code playground se recomienda usar use('universidad') con paréntesis. La base de datos se crea físicamente al insertar el primer documento."
},

{
    unit: "MongoDB - Crear Colección",
    diff: "easy",
    q: "Escribe el comando para crear una colección llamada 'estudiantes' dentro de la base de datos 'universidad'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Primero selecciona la base, luego crea la colección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de colecciones</h6>
</div>`,
    opts: ["db.createCollection('estudiantes')", "createCollection estudiantes", "db.estudiantes.create()", "new Collection('estudiantes')"],
    ans: 0,
    exp: "Primero: use('universidad'). Luego: db.createCollection('estudiantes'). También se crea automáticamente al insertar el primer documento."
},

{
    unit: "MongoDB - Insertar Documentos",
    diff: "easy",
    q: "Escribe el comando para insertar UN documento en la colección 'estudiantes' con nombre 'Carlos', edad 22 y ciudad 'Lima'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertOne recibe un objeto JSON</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción de documentos</h6>
</div>`,
    opts: [
        "db.estudiantes.insertOne({ nombre: 'Carlos', edad: 22, ciudad: 'Lima' })",
        "db.estudiantes.insert({ nombre: 'Carlos', edad: 22, ciudad: 'Lima' })",
        "db.estudiantes.add({ nombre: 'Carlos', edad: 22, ciudad: 'Lima' })",
        "insert into estudiantes values ('Carlos', 22, 'Lima')"
    ],
    ans: 0,
    exp: "db.estudiantes.insertOne({ nombre: 'Carlos', edad: 22, ciudad: 'Lima' }). En VS Code, ejecutar con Ctrl+Enter sobre la línea."
},

{
    unit: "MongoDB - Insertar Múltiples",
    diff: "medium",
    q: "Escribe el comando para insertar TRES documentos de una sola vez en la colección 'estudiantes': Ana (20, Madrid), Luis (25, Barcelona), Sofia (22, Valencia).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany recibe un array de objetos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción múltiple</h6>
</div>`,
    opts: [
        "db.estudiantes.insertMany([{ nombre: 'Ana', edad: 20, ciudad: 'Madrid' }, { nombre: 'Luis', edad: 25, ciudad: 'Barcelona' }, { nombre: 'Sofia', edad: 22, ciudad: 'Valencia' }])",
        "db.estudiantes.insert([{ nombre: 'Ana', edad: 20, ciudad: 'Madrid' }, { nombre: 'Luis', edad: 25, ciudad: 'Barcelona' }, { nombre: 'Sofia', edad: 22, ciudad: 'Valencia' }])",
        "db.estudiantes.addMany([...])",
        "insertMany estudiantes ..."
    ],
    ans: 0,
    exp: "insertMany recibe un array. Orden: db.coleccion.insertMany([{}, {}, {}]). El resultado muestra los _id generados."
},

{
    unit: "MongoDB - Ver Documentos",
    diff: "easy",
    q: "Escribe el comando para ver TODOS los documentos de la colección 'estudiantes'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find sin filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas básicas</h6>
</div>`,
    opts: ["db.estudiantes.find()", "db.estudiantes.findAll()", "db.estudiantes.find({})", "db.estudiantes.all()"],
    ans: 0,
    exp: "db.estudiantes.find() devuelve todos los documentos. db.estudiantes.find().pretty() los muestra formateados."
},

{
    unit: "MongoDB - Filtrar Documentos",
    diff: "medium",
    q: "Escribe el comando para encontrar los estudiantes de la ciudad 'Madrid'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find con filtro de ciudad</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas con filtro</h6>
</div>`,
    opts: [
        "db.estudiantes.find({ ciudad: 'Madrid' })",
        "db.estudiantes.find({ ciudad: 'Madrid' }).pretty()",
        "db.estudiantes.where({ ciudad: 'Madrid' })",
        "db.estudiantes.find().filter({ ciudad: 'Madrid' })"
    ],
    ans: 0,
    exp: "db.estudiantes.find({ ciudad: 'Madrid' }). El filtro es un objeto con el campo y el valor buscado."
},

{
    unit: "MongoDB - Operadores de Comparación",
    diff: "medium",
    q: "Escribe el comando para encontrar los estudiantes mayores de 21 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Usar $gt (greater than)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de comparación</h6>
</div>`,
    opts: [
        "db.estudiantes.find({ edad: { $gt: 21 } })",
        "db.estudiantes.find({ edad > 21 })",
        "db.estudiantes.find({ edad: { >: 21 } })",
        "db.estudiantes.find().where('edad > 21')"
    ],
    ans: 0,
    exp: "$gt es el operador 'greater than'. También existen $lt (menor), $gte (mayor o igual), $lte (menor o igual), $eq (igual), $ne (no igual)."
},


{
    unit: "MongoDB - Operadores Lógicos",
    diff: "hard",
    q: "Escribe el comando para encontrar estudiantes de Madrid O Barcelona con edad mayor a 20.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Usar $or</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores lógicos</h6>
</div>`,
    opts: [
        "db.estudiantes.find({ $or: [{ ciudad: 'Madrid' }, { ciudad: 'Barcelona' }], edad: { $gt: 20 } })",
        "db.estudiantes.find({ ciudad: { $in: ['Madrid', 'Barcelona'] }, edad: { $gt: 20 } })",
        "db.estudiantes.find({ ciudad: 'Madrid' || ciudad: 'Barcelona', edad > 20 })",
        "db.estudiantes.find({ $or: [{ ciudad: 'Madrid' }, { ciudad: 'Barcelona' }] }).filter({ edad: { $gt: 20 } })"
    ],
    ans: 0,
    exp: "$or recibe un array de condiciones. $in es más simple cuando es el mismo campo. Ambas opciones son válidas, pero la respuesta esperada usa $or por claridad."
},

{
    unit: "MongoDB - Actualizar Documento",
    diff: "medium",
    q: "Escribe el comando para actualizar la edad de 'Carlos' a 23 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de documentos</h6>
</div>`,
    opts: [
        "db.estudiantes.updateOne({ nombre: 'Carlos' }, { $set: { edad: 23 } })",
        "db.estudiantes.update({ nombre: 'Carlos' }, { $set: { edad: 23 } })",
        "db.estudiantes.updateOne({ nombre: 'Carlos' }, { edad: 23 })",
        "db.estudiantes.update({ nombre: 'Carlos' }, { edad: 23 })"
    ],
    ans: 0,
    exp: "updateOne actualiza el primer documento que coincide. $set es el operador para modificar campos. Sin $set, reemplazaría todo el documento."
},

{
    unit: "MongoDB - Incrementar Valor",
    diff: "medium",
    q: "Escribe el comando para incrementar en 1 la edad de TODOS los estudiantes.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateMany con $inc, filtro vacío</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización múltiple</h6>
</div>`,
    opts: [
        "db.estudiantes.updateMany({}, { $inc: { edad: 1 } })",
        "db.estudiantes.updateAll({}, { $inc: { edad: 1 } })",
        "db.estudiantes.updateMany({ edad: { $exists: true } }, { $inc: { edad: 1 } })",
        "db.estudiantes.update({}, { $inc: { edad: 1 } }, { multi: true })"
    ],
    ans: 0,
    exp: "updateMany con filtro vacío {} afecta a todos los documentos. $inc incrementa el valor numérico en la cantidad indicada."
},

{
    unit: "MongoDB - Eliminar Documentos",
    diff: "medium",
    q: "Escribe el comando para eliminar todos los estudiantes de la ciudad 'Valencia'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: deleteMany con filtro de ciudad</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de documentos</h6>
</div>`,
    opts: [
        "db.estudiantes.deleteMany({ ciudad: 'Valencia' })",
        "db.estudiantes.remove({ ciudad: 'Valencia' })",
        "db.estudiantes.delete({ ciudad: 'Valencia' })",
        "db.estudiantes.drop({ ciudad: 'Valencia' })"
    ],
    ans: 0,
    exp: "deleteMany elimina todos los documentos que cumplen el filtro. deleteOne elimina solo el primero. drop() elimina toda la colección."
},

{
    unit: "MongoDB - Crear Colección con Validación",
    diff: "hard",
    q: "Escribe el comando para crear una colección 'profesores' que requiera los campos 'nombre' (string) y 'especialidad' (string), y 'edad' debe ser mayor a 18.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createCollection con validator y $jsonSchema</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de esquemas</h6>
</div>`,
    opts: [
        "db.createCollection('profesores', { validator: { $jsonSchema: { bsonType: 'object', required: ['nombre', 'especialidad'], properties: { nombre: { bsonType: 'string' }, especialidad: { bsonType: 'string' }, edad: { bsonType: 'int', minimum: 19 } } } } })",
        "db.createCollection('profesores', { validator: { nombre: 'string', especialidad: 'string', edad: { $gt: 18 } } })",
        "db.profesores.createValidator({ nombre: 'string', especialidad: 'string', edad: { min: 19 } })",
        "db.createCollection('profesores', { schema: { nombre: String, especialidad: String, edad: { type: Number, min: 19 } } })"
    ],
    ans: 0,
    exp: "La validación con $jsonSchema es la más completa. required lista los campos obligatorios. minimum valida el valor mínimo. bsonType define el tipo de dato."
},


{
    unit: "MongoDB - Crear Índice",
    diff: "medium",
    q: "Escribe el comando para crear un índice en el campo 'nombre' de la colección 'estudiantes' para acelerar búsquedas.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con el campo y dirección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices</h6>
</div>`,
    opts: [
        "db.estudiantes.createIndex({ nombre: 1 })",
        "db.estudientes.index({ nombre: 'asc' })",
        "db.estudiantes.addIndex('nombre')",
        "db.estudiantes.createIndex('nombre')"
    ],
    ans: 0,
    exp: "createIndex({ nombre: 1 }) crea un índice ascendente. 1 = ascendente, -1 = descendente. El índice mejora el rendimiento de búsquedas por ese campo."
},

{
    unit: "MongoDB - Crear Índice Único",
    diff: "medium",
    q: "Escribe el comando para crear un índice único en el campo 'email' para evitar duplicados.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con opción unique</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices únicos</h6>
</div>`,
    opts: [
        "db.estudiantes.createIndex({ email: 1 }, { unique: true })",
        "db.estudiantes.uniqueIndex({ email: 1 })",
        "db.estudiantes.createIndex({ email: 'unique' })",
        "db.estudiantes.addIndex({ email: 1 }, 'unique')"
    ],
    ans: 0,
    exp: "unique: true previene valores duplicados en el campo. Si se intenta insertar un email repetido, MongoDB lanza un error."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Escribe un pipeline de agregación para contar cuántos estudiantes hay por cada ciudad.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: aggregate con $group</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation framework</h6>
</div>`,
    opts: [
        "db.estudiantes.aggregate([ { $group: { _id: '$ciudad', total: { $sum: 1 } } } ])",
        "db.estudiantes.group({ key: { ciudad: 1 }, reduce: 'count++' })",
        "db.estudiantes.aggregate().group('ciudad').count()",
        "db.estudiantes.find().groupBy('ciudad').length()"
    ],
    ans: 0,
    exp: "$group agrupa documentos por el campo '_id'. $sum: 1 cuenta cada documento del grupo. El resultado es { _id: 'Madrid', total: 5 }."
},

{
    unit: "MongoDB - Crear Base desde VS Code",
    diff: "easy",
    q: "Escribe el contenido completo de un archivo .mongodb (playground) que cree la base 'tienda', la colección 'productos' e inserte un producto con nombre 'Laptop' y precio 1000.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use('tienda'), luego createCollection, luego insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: playground completo</h6>
</div>`,
    opts: [
        "use('tienda'); db.createCollection('productos'); db.productos.insertOne({ nombre: 'Laptop', precio: 1000 });",
        "use tienda; createCollection productos; insert into productos values ('Laptop', 1000);",
        "db = connect('tienda'); db.productos.add({ nombre: 'Laptop', precio: 1000 });",
        "new Database('tienda'); new Collection('productos'); insert('productos', { nombre: 'Laptop', precio: 1000 });"
    ],
    ans: 0,
    exp: "En VS Code playground: use('tienda') selecciona/crea la base. createCollection('productos') crea la colección. insertOne agrega el documento. Cada línea termina con punto y coma."
},

{
    unit: "MongoDB - Eliminar Base de Datos",
    diff: "medium",
    q: "Escribe el comando para eliminar la base de datos actual (la que está seleccionada con use).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: dropDatabase</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de bases de datos</h6>
</div>`,
    opts: ["db.dropDatabase()", "db.drop()", "drop database", "db.deleteDatabase()"],
    ans: 0,
    exp: "db.dropDatabase() elimina la base de datos actual y todos sus datos. Es irreversible. En VS Code, asegúrate de estar en la base correcta."
},

{
    unit: "MongoDB - Ver Base Actual",
    diff: "easy",
    q: "Escribe el comando para ver el nombre de la base de datos que está seleccionada actualmente.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: db sin paréntesis</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: información de la base</h6>
</div>`,
    opts: ["db", "db.getName()", "show db", "currentDB()"],
    ans: 0,
    exp: "db solo (sin paréntesis) muestra el nombre de la base actual. db.getName() también funciona."
},

{
    unit: "MongoDB - Proyección",
    diff: "medium",
    q: "Escribe el comando para encontrar todos los estudiantes, mostrando solo el campo 'nombre' y excluyendo '_id'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find con segundo argumento de proyección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: proyección de campos</h6>
</div>`,
    opts: [
        "db.estudiantes.find({}, { nombre: 1, _id: 0 })",
        "db.estudiantes.find({}, 'nombre')",
        "db.estudiantes.select('nombre')",
        "db.estudiantes.find().project({ nombre: 1, _id: 0 })"
    ],
    ans: 0,
    exp: "El segundo parámetro de find es la proyección. 1 = incluir, 0 = excluir. _id se incluye por defecto, hay que excluirlo explícitamente."
},

{
    unit: "MongoDB - Ordenar y Limitar",
    diff: "medium",
    q: "Escribe el comando para obtener los 3 estudiantes más jóvenes (ordenar por edad ascendente y limitar a 3).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: sort y limit</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ordenamiento y paginación</h6>
</div>`,
    opts: [
        "db.estudiantes.find().sort({ edad: 1 }).limit(3)",
        "db.estudiantes.find().sort({ edad: -1 }).limit(3)",
        "db.estudiantes.find().orderBy('edad').take(3)",
        "db.estudiantes.find().limit(3).sort({ edad: 1 })"
    ],
    ans: 0,
    exp: "sort({ edad: 1 }) ordena ascendente (de menor a mayor). limit(3) toma los primeros 3. El orden importa: sort antes de limit."
},

{
    unit: "MongoDB - Clase 1: Conectar y ver",
    diff: "easy",
    q: "Acabas de abrir MongoDB en VS Code. Escribe el comando para ver qué base de datos está seleccionada actualmente.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Solo una letra, dos caracteres</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: comandos básicos</h6>
</div>`,
    opts: ["db", "show dbs", "use", "db.current"],
    ans: 0,
    exp: "db (sin paréntesis) muestra la base actual. Por defecto sale 'test'. Es el comando más básico para saber dónde estás."
},

{
    unit: "MongoDB - Clase 1: Crear base",
    diff: "easy",
    q: "El profe dice: 'Vamos a trabajar con la base de datos escuela'. Escribe el comando para seleccionar (o crear) esa base.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Se escribe 'use' pero en VS Code lleva paréntesis</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de bases</h6>
</div>`,
    opts: ["use('escuela')", "use escuela", "db.escuela", "create escuela"],
    ans: 0,
    exp: "En VS Code playground: use('escuela'). En la terminal normal: use escuela. La base se crea realmente cuando insertas el primer documento."
},

{
    unit: "MongoDB - Clase 1: Crear colección",
    diff: "easy",
    q: "Ahora que estás en la base 'escuela', escribe el comando para crear una colección llamada 'alumnos'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: db.createCollection('nombre')</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de colecciones</h6>
</div>`,
    opts: ["db.createCollection('alumnos')", "db.alumnos.create()", "createCollection alumnos", "db.newCollection('alumnos')"],
    ans: 0,
    exp: "db.createCollection('alumnos') crea la colección. También se crea sola cuando insertas el primer documento: db.alumnos.insertOne({})"
},

{
    unit: "MongoDB - Clase 1: Insertar",
    diff: "easy",
    q: "Escribe el comando para insertar UN alumno con nombre 'Lucía' y edad 18 en la colección 'alumnos'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertOne recibe un objeto con llaves {}</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción de documentos</h6>
</div>`,
    opts: [
        "db.alumnos.insertOne({ nombre: 'Lucía', edad: 18 })",
        "db.alumnos.insert({ nombre: 'Lucía', edad: 18 })",
        "db.alumnos.add({ nombre: 'Lucía', edad: 18 })",
        "insert into alumnos values ('Lucía', 18)"
    ],
    ans: 0,
    exp: "insertOne es el comando moderno. Los campos van entre llaves, separados por comas. Los strings van entre comillas simples o dobles."
},

{
    unit: "MongoDB - Clase 1: Ver datos",
    diff: "easy",
    q: "Escribe el comando para ver TODOS los alumnos de la colección 'alumnos'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find sin filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas básicas</h6>
</div>`,
    opts: ["db.alumnos.find()", "db.alumnos.findAll()", "db.alumnos.all()", "select * from alumnos"],
    ans: 0,
    exp: "find() devuelve todos los documentos. Para verlos bonitos: db.alumnos.find().pretty()"
},

{
    unit: "MongoDB - Clase 1: Insertar varios",
    diff: "medium",
    q: "Escribe el comando para insertar TRES alumnos de una sola vez: 'Pedro' (19), 'Ana' (20), 'Luis' (21).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany recibe un ARRAY de objetos [ {}, {}, {} ]</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción múltiple</h6>
</div>`,
    opts: [
        "db.alumnos.insertMany([{ nombre: 'Pedro', edad: 19 }, { nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 21 }])",
        "db.alumnos.insertMany({ nombre: 'Pedro', edad: 19 }, { nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 21 })",
        "db.alumnos.insert([{ nombre: 'Pedro', edad: 19 }, { nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 21 }])",
        "db.alumnos.addMany([Pedro, Ana, Luis])"
    ],
    ans: 0,
    exp: "insertMany necesita un ARRAY. Los corchetes [] son el array. Cada documento va entre llaves {}."
},

//FILTRAR Y PREGUNTAR A LA BASE

{
    unit: "MongoDB - Clase 2: Filtrar",
    diff: "medium",
    q: "Escribe el comando para encontrar al alumno que se llama 'Ana'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find con filtro { campo: valor }</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas con filtro</h6>
</div>`,
    opts: [
        "db.alumnos.find({ nombre: 'Ana' })",
        "db.alumnos.find({ nombre: 'Ana' }).pretty()",
        "db.alumnos.where('nombre', 'Ana')",
        "db.alumnos.find().filter('nombre', 'Ana')"
    ],
    ans: 0,
    exp: "find({ nombre: 'Ana' }) busca exactamente ese nombre. Es sensible a mayúsculas: 'ana' no es igual a 'Ana'."
},

{
    unit: "MongoDB - Clase 2: Mayor que",
    diff: "medium",
    q: "Escribe el comando para encontrar alumnos mayores de 19 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Usa $gt (greater than) dentro de llaves</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de comparación</h6>
</div>`,
    opts: [
        "db.alumnos.find({ edad: { $gt: 19 } })",
        "db.alumnos.find({ edad: { >: 19 } })",
        "db.alumnos.find({ edad > 19 })",
        "db.alumnos.find().where('edad > 19')"
    ],
    ans: 0,
    exp: "$gt es el operador. La sintaxis es { campo: { $gt: valor } }. También existen: $lt (menor), $gte (mayor o igual), $lte (menor o igual)."
},

{
    unit: "MongoDB - Clase 2: Entre edades",
    diff: "medium",
    q: "Escribe el comando para encontrar alumnos con edad entre 18 y 21 (inclusive).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Combina $gte y $lte</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: rangos</h6>
</div>`,
    opts: [
        "db.alumnos.find({ edad: { $gte: 18, $lte: 21 } })",
        "db.alumnos.find({ edad: { $between: [18, 21] } })",
        "db.alumnos.find({ edad: 18, 21 })",
        "db.alumnos.find().where('edad >= 18 and edad <= 21')"
    ],
    ans: 0,
    exp: "Puedes poner múltiples condiciones dentro del mismo campo. $gte es 'mayor o igual', $lte es 'menor o igual'."
},

{
    unit: "MongoDB - Clase 2: Varias ciudades",
    diff: "medium",
    q: "Ahora la colección tiene campo 'ciudad'. Escribe el comando para encontrar alumnos de 'Madrid' o 'Barcelona'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Puedes usar $in o $or</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores lógicos</h6>
</div>`,
    opts: [
        "db.alumnos.find({ ciudad: { $in: ['Madrid', 'Barcelona'] } })",
        "db.alumnos.find({ ciudad: 'Madrid' || ciudad: 'Barcelona' })",
        "db.alumnos.find({ $or: [{ ciudad: 'Madrid' }, { ciudad: 'Barcelona' }] })",
        "db.alumnos.find({ ciudad: ['Madrid', 'Barcelona'] })"
    ],
    ans: 0,
    exp: "$in es más corto cuando buscas varios valores en el MISMO campo. $or es para condiciones en diferentes campos."
},

{
    unit: "MongoDB - Clase 2: Actualizar",
    diff: "medium",
    q: "Escribe el comando para cambiar la edad de 'Pedro' a 22 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualizaciones</h6>
</div>`,
    opts: [
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { $set: { edad: 22 } })",
        "db.alumnos.update({ nombre: 'Pedro' }, { edad: 22 })",
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { edad: 22 })",
        "db.alumnos.update({ nombre: 'Pedro' }, { $set: { edad: 22 } })"
    ],
    ans: 0,
    exp: "SIN $set reemplaza TODO el documento. CON $set solo cambia el campo que indicas. SIEMPRE usa $set a menos que sepas lo que haces."
},

{
    unit: "MongoDB - Clase 2: Sumar edad",
    diff: "medium",
    q: "Escribe el comando para aumentar en 1 la edad de TODOS los alumnos.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateMany con $inc</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: incrementos</h6>
</div>`,
    opts: [
        "db.alumnos.updateMany({}, { $inc: { edad: 1 } })",
        "db.alumnos.updateAll({}, { $inc: { edad: 1 } })",
        "db.alumnos.updateMany({ edad: { $exists: true } }, { $inc: { edad: 1 } })",
        "db.alumnos.update({}, { $inc: { edad: 1 } }, { multi: true })"
    ],
    ans: 0,
    exp: "{} vacío significa 'todos los documentos'. $inc incrementa el valor. Si el campo no existe, lo crea con el valor del incremento."
},

{
    unit: "MongoDB - Clase 2: Eliminar",
    diff: "medium",
    q: "Escribe el comando para eliminar al alumno llamado 'Luis'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: deleteOne con filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación</h6>
</div>`,
    opts: [
        "db.alumnos.deleteOne({ nombre: 'Luis' })",
        "db.alumnos.remove({ nombre: 'Luis' })",
        "db.alumnos.delete({ nombre: 'Luis' })",
        "db.alumnos.drop({ nombre: 'Luis' })"
    ],
    ans: 0,
    exp: "deleteOne elimina el PRIMERO que encuentra. deleteMany elimina TODOS los que cumplen el filtro. remove() está deprecado."
},

{
    unit: "MongoDB - Clase 2: Solo nombres",
    diff: "medium",
    q: "Escribe el comando para ver SOLO los nombres de los alumnos (sin ver edad, sin ver _id).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: segundo parámetro de find (proyección)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: proyección</h6>
</div>`,
    opts: [
        "db.alumnos.find({}, { nombre: 1, _id: 0 })",
        "db.alumnos.find({}, 'nombre')",
        "db.alumnos.find().only('nombre')",
        "db.alumnos.find({}, { nombre: true })"
    ],
    ans: 0,
    exp: "1 significa 'mostrar', 0 significa 'ocultar'. _id se muestra por defecto, por eso hay que poner _id: 0."
},

//ORDENAR, AGRUPAR Y CONTAR (lo que seguro viene en la prueba)

{
    unit: "MongoDB - Clase 3: Ordenar",
    diff: "medium",
    q: "Escribe el comando para ver los alumnos ordenados por edad (del más joven al más viejo).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: sort(1) es ascendente</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ordenamiento</h6>
</div>`,
    opts: [
        "db.alumnos.find().sort({ edad: 1 })",
        "db.alumnos.find().sort({ edad: -1 })",
        "db.alumnos.find().orderBy('edad')",
        "db.alumnos.find().sort('edad')"
    ],
    ans: 0,
    exp: "sort({ edad: 1 }) = ascendente (1, 2, 3). sort({ edad: -1 }) = descendente (3, 2, 1)."
},

{
    unit: "MongoDB - Clase 3: Los más viejos",
    diff: "medium",
    q: "Escribe el comando para ver los 3 alumnos de mayor edad.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: sort descendente + limit</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ordenamiento + límite</h6>
</div>`,
    opts: [
        "db.alumnos.find().sort({ edad: -1 }).limit(3)",
        "db.alumnos.find().sort({ edad: 1 }).limit(3)",
        "db.alumnos.find().limit(3).sort({ edad: -1 })",
        "db.alumnos.find().sort({ edad: -1 }).take(3)"
    ],
    ans: 0,
    exp: "PRIMERO ordenas, LUEGO limitas. El orden importa: sort antes de limit."
},

{
    unit: "MongoDB - Clase 3: Contar",
    diff: "medium",
    q: "Escribe el comando para contar cuántos alumnos hay en total.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: countDocuments</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: conteo</h6>
</div>`,
    opts: [
        "db.alumnos.countDocuments()",
        "db.alumnos.find().count()",
        "db.alumnos.count()",
        "db.alumnos.size()"
    ],
    ans: 0,
    exp: "countDocuments() es el método moderno. find().count() está deprecado pero aún funciona."
},

{
    unit: "MongoDB - Clase 3: Contar con filtro",
    diff: "medium",
    q: "Escribe el comando para contar cuántos alumnos tienen más de 20 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: countDocuments acepta filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: conteo con condición</h6>
</div>`,
    opts: [
        "db.alumnos.countDocuments({ edad: { $gt: 20 } })",
        "db.alumnos.find({ edad: { $gt: 20 } }).count()",
        "db.alumnos.count({ edad: { $gt: 20 } })",
        "db.alumnos.find({ edad: { $gt: 20 } }).length()"
    ],
    ans: 0,
    exp: "countDocuments() recibe el mismo filtro que find(). Es más eficiente que hacer find().count() porque no trae los documentos."
},

{
    unit: "MongoDB - Clase 3: Agrupar",
    diff: "hard",
    q: "Escribe el comando para agrupar alumnos por ciudad y contar cuántos hay en cada una.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: aggregate con $group</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation pipeline</h6>
</div>`,
    opts: [
        "db.alumnos.aggregate([ { $group: { _id: '$ciudad', total: { $sum: 1 } } } ])",
        "db.alumnos.group({ key: { ciudad: 1 }, reduce: 'count++' })",
        "db.alumnos.aggregate().group('ciudad').count()",
        "db.alumnos.find().groupBy('ciudad')"
    ],
    ans: 0,
    exp: "aggregate recibe un ARRAY de etapas. $group agrupa. _id es por qué campo agrupas (con $ adelante). $sum: 1 cuenta."
},

{
    unit: "MongoDB - Clase 3: Promedio",
    diff: "hard",
    q: "Escribe el comando para calcular el promedio de edad de todos los alumnos.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: aggregate con $group y $avg, _id: null</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation con promedios</h6>
</div>`,
    opts: [
        "db.alumnos.aggregate([ { $group: { _id: null, promedio: { $avg: '$edad' } } } ])",
        "db.alumnos.aggregate([ { $avg: '$edad' } ])",
        "db.alumnos.find().avg('edad')",
        "db.alumnos.aggregate([ { $project: { promedio: { $avg: '$edad' } } } ])"
    ],
    ans: 0,
    exp: "_id: null agrupa TODOS los documentos en un solo grupo. $avg calcula el promedio del campo indicado."
},

//LO QUE SEGURO PREGUNTA EN LA PRUEBA (arrays y relaciones)


{
    unit: "MongoDB - Clase 4: Arrays",
    diff: "hard",
    q: "Ahora cada alumno tiene un array 'cursos' (ej: cursos: ['matemáticas', 'lengua']). Escribe el comando para encontrar alumnos que llevan 'matemáticas'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: buscar dentro de array es igual que buscar en campo normal</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas en arrays</h6>
</div>`,
    opts: [
        "db.alumnos.find({ cursos: 'matemáticas' })",
        "db.alumnos.find({ cursos: { $in: ['matemáticas'] } })",
        "db.alumnos.find({ 'cursos.matemáticas': true })",
        "db.alumnos.find({ cursos: /matemáticas/ })"
    ],
    ans: 0,
    exp: "MongoDB busca automáticamente dentro del array. No necesitas operador especial para buscar un valor."
},

{
    unit: "MongoDB - Clase 4: Arrays",
    diff: "hard",
    q: "Ahora cada alumno tiene un array 'cursos' (ej: cursos: ['matemáticas', 'lengua']). Escribe el comando para encontrar alumnos que llevan 'matemáticas'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: buscar dentro de array es igual que buscar en campo normal</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas en arrays</h6>
</div>`,
    opts: [
        "db.alumnos.find({ cursos: 'matemáticas' })",
        "db.alumnos.find({ cursos: { $in: ['matemáticas'] } })",
        "db.alumnos.find({ 'cursos.matemáticas': true })",
        "db.alumnos.find({ cursos: /matemáticas/ })"
    ],
    ans: 0,
    exp: "MongoDB busca automáticamente dentro del array. No necesitas operador especial para buscar un valor."
},

{
    unit: "MongoDB - Clase 4: Arrays múltiples",
    diff: "hard",
    q: "Escribe el comando para encontrar alumnos que llevan matemáticas Y física (ambas).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $all busca TODOS los elementos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array</h6>
</div>`,
    opts: [
        "db.alumnos.find({ cursos: { $all: ['matemáticas', 'física'] } })",
        "db.alumnos.find({ cursos: 'matemáticas', cursos: 'física' })",
        "db.alumnos.find({ $and: [{ cursos: 'matemáticas' }, { cursos: 'física' }] })",
        "db.alumnos.find({ cursos: ['matemáticas', 'física'] })"
    ],
    ans: 0,
    exp: "$all asegura que el array contenga TODOS los valores especificados. El orden no importa."
},

{
    unit: "MongoDB - Clase 4: Agregar a array",
    diff: "hard",
    q: "Escribe el comando para agregar el curso 'historia' al array de cursos de 'Pedro' (sin duplicados).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $addToSet evita duplicados</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de arrays</h6>
</div>`,
    opts: [
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { $addToSet: { cursos: 'historia' } })",
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { $push: { cursos: 'historia' } })",
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { $set: { cursos: 'historia' } })",
        "db.alumnos.updateOne({ nombre: 'Pedro' }, { $add: { cursos: 'historia' } })"
    ],
    ans: 0,
    exp: "$addToSet agrega SOLO si no existe. $push agrega siempre (puede crear duplicados)."
},

{
    unit: "MongoDB - Clase 4: Quitar de array",
    diff: "hard",
    q: "Escribe el comando para quitar el curso 'lengua' del array de cursos de 'Ana'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull elimina del array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de array</h6>
</div>`,
    opts: [
        "db.alumnos.updateOne({ nombre: 'Ana' }, { $pull: { cursos: 'lengua' } })",
        "db.alumnos.updateOne({ nombre: 'Ana' }, { $pop: { cursos: 'lengua' } })",
        "db.alumnos.updateOne({ nombre: 'Ana' }, { $remove: { cursos: 'lengua' } })",
        "db.alumnos.updateOne({ nombre: 'Ana' }, { $unset: { cursos: 'lengua' } })"
    ],
    ans: 0,
    exp: "$pull elimina TODAS las ocurrencias del valor en el array. $pop elimina el primero o el último, no por valor."
},


{
    unit: "MongoDB - Clase 4: Relaciones (lookup)",
    diff: "hard",
    q: "Tienes dos colecciones: 'alumnos' y 'cursos'. Cada alumno tiene campo 'cursosIds' con IDs de cursos. Escribe el comando para hacer un JOIN y traer los datos completos de los cursos de cada alumno.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: aggregate con $lookup</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: relaciones entre colecciones</h6>
</div>`,
    opts: [
        "db.alumnos.aggregate([ { $lookup: { from: 'cursos', localField: 'cursosIds', foreignField: '_id', as: 'cursosData' } } ])",
        "db.alumnos.aggregate([ { $join: { collection: 'cursos', on: 'cursosIds = _id' } } ])",
        "db.alumnos.find().populate('cursos')",
        "db.alumnos.aggregate([ { $lookup: { from: 'cursos', localField: '_id', foreignField: 'alumnoId', as: 'cursos' } } ])"
    ],
    ans: 0,
    exp: "$lookup es el JOIN de MongoDB. from es la colección a unir. localField es el campo en la colección actual. foreignField es el campo en la otra colección. as es el nombre del array resultado."
},

{
    unit: "MongoDB - Clase 5: Índices",
    diff: "hard",
    q: "Escribe el comando para crear un índice en el campo 'nombre' para que las búsquedas sean más rápidas.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con 1 o -1</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: optimización</h6>
</div>`,
    opts: [
        "db.alumnos.createIndex({ nombre: 1 })",
        "db.alumnos.addIndex('nombre')",
        "db.alumnos.index({ nombre: 'asc' })",
        "db.alumnos.createIndex('nombre')"
    ],
    ans: 0,
    exp: "createIndex({ campo: 1 }) para ascendente, -1 para descendente. El índice mejora las búsquedas por ese campo."
},

{
    unit: "MongoDB - Clase 5: Índice único",
    diff: "hard",
    q: "Escribe el comando para que el campo 'email' no pueda tener valores repetidos.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con unique: true</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: unicidad</h6>
</div>`,
    opts: [
        "db.alumnos.createIndex({ email: 1 }, { unique: true })",
        "db.alumnos.uniqueIndex({ email: 1 })",
        "db.alumnos.createIndex({ email: 'unique' })",
        "db.alumnos.addIndex({ email: 1 }, 'unique')"
    ],
    ans: 0,
    exp: "unique: true previene duplicados. Si intentas insertar un email repetido, MongoDB lanza error."
},

{
    unit: "MongoDB - Clase 5: Validación",
    diff: "hard",
    q: "Escribe el comando para crear la colección 'alumnos' con validación: nombre obligatorio (string) y edad mayor a 0.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createCollection con validator y $jsonSchema</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de datos</h6>
</div>`,
    opts: [
        "db.createCollection('alumnos', { validator: { $jsonSchema: { bsonType: 'object', required: ['nombre'], properties: { nombre: { bsonType: 'string' }, edad: { bsonType: 'int', minimum: 1 } } } } })",
        "db.createCollection('alumnos', { validator: { nombre: 'string', edad: { $gt: 0 } } })",
        "db.alumnos.createValidator({ nombre: 'string', edad: { min: 1 } })",
        "db.createCollection('alumnos', { schema: { nombre: String, edad: Number } })"
    ],
    ans: 0,
    exp: "La validación con $jsonSchema es la más completa. required: ['nombre'] hace obligatorio ese campo. minimum valida el valor mínimo."
},

{
    unit: "MongoDB - Simulacro de prueba",
    diff: "hard",
    q: "El profe pide: 'Crear una base de datos biblioteca, una colección libros, insertar 3 libros con título, autor y año, y mostrar los libros publicados después del 2020'. Escribe el código completo (línea por línea).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use, createCollection, insertMany, find con $gt</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: todo lo visto en clase</h6>
</div>`,
    opts: [
        "use('biblioteca'); db.createCollection('libros'); db.libros.insertMany([{ titulo: 'Libro1', autor: 'Autor1', año: 2021 }, { titulo: 'Libro2', autor: 'Autor2', año: 2022 }, { titulo: 'Libro3', autor: 'Autor3', año: 2019 }]); db.libros.find({ año: { $gt: 2020 } });",
        "use biblioteca; create libros; insert into libros values ...; select * from libros where año > 2020;",
        "db.biblioteca.createCollection('libros'); db.libros.add(...); db.libros.filter(año > 2020);",
        "use('biblioteca'); db.libros.insert(...); db.libros.find({ año > 2020 });"
    ],
    ans: 0,
    exp: "Línea 1: use('biblioteca') crea/selecciona la base. Línea 2: createCollection crea la colección. Línea 3: insertMany inserta los 3 libros. Línea 4: find con $gt filtra años > 2020."
},

{
    unit: "MongoDB - Simulacro de prueba",
    diff: "hard",
    q: "El profe pide: 'Actualizar el año del libro 'Cien años de soledad' a 2023, luego mostrar cuántos libros hay publicados después del 2000'. Escribe el código completo.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set, luego countDocuments con $gt</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualizaciones y conteos</h6>
</div>`,
    opts: [
        "db.libros.updateOne({ titulo: 'Cien años de soledad' }, { $set: { año: 2023 } }); db.libros.countDocuments({ año: { $gt: 2000 } });",
        "db.libros.update({ titulo: 'Cien años de soledad' }, { año: 2023 }); db.libros.find({ año > 2000 }).count();",
        "db.libros.updateOne({ titulo: 'Cien años de soledad' }, { año: 2023 }); db.libros.count({ año: { $gt: 2000 } });",
        "db.libros.update({ titulo: 'Cien años de soledad' }, { $set: { año: 2023 } }); db.libros.find({ año: { $gt: 2000 } }).length();"
    ],
    ans: 0,
    exp: "Primero updateOne con $set (importante el $set). Luego countDocuments con el filtro { año: { $gt: 2000 } }."
},


//SOLO CREAR
{
    unit: "MongoDB - Simulacro Crear",
    diff: "hard",
    q: "Crea una base de datos llamada 'empresa'. Dentro, crea una colección llamada 'empleados'. Inserta un empleado con nombre 'Carlos', puesto 'ingeniero', salario 3000.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use, createCollection, insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: crear base, colección y documento</h6>
</div>`,
    opts: [
        "use('empresa'); db.createCollection('empleados'); db.empleados.insertOne({ nombre: 'Carlos', puesto: 'ingeniero', salario: 3000 });",
        "use empresa; create empleados; insert into empleados values ('Carlos', 'ingeniero', 3000);",
        "db.empresa.createCollection('empleados'); db.empleados.add({ nombre: 'Carlos', puesto: 'ingeniero', salario: 3000 });",
        "create database empresa; create collection empleados; insert document nombre='Carlos';"
    ],
    ans: 0,
    exp: "use('empresa') crea/selecciona la base. createCollection('empleados') crea la colección. insertOne agrega el primer documento."
},

{
    unit: "MongoDB - Simulacro Crear",
    diff: "hard",
    q: "Crea una base 'universidad'. Crea una colección 'estudiantes'. Inserta TRES estudiantes de una sola vez: ('Ana', 20), ('Luis', 22), ('Sofia', 21).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany con array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción múltiple</h6>
</div>`,
    opts: [
        "use('universidad'); db.createCollection('estudiantes'); db.estudiantes.insertMany([{ nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 22 }, { nombre: 'Sofia', edad: 21 }]);",
        "use('universidad'); db.estudiantes.insertMany({ nombre: 'Ana', edad: 20 }, { nombre: 'Luis', edad: 22 }, { nombre: 'Sofia', edad: 21 });",
        "use universidad; create estudiantes; insert into estudiantes values ('Ana',20),('Luis',22),('Sofia',21);",
        "db.createCollection('universidad'); db.estudiantes.insert(...);"
    ],
    ans: 0,
    exp: "insertMany recibe un ARRAY de documentos. Los corchetes [] son importantes."
},

{
    unit: "MongoDB - Simulacro Crear",
    diff: "hard",
    q: "Crea una base 'tienda'. Crea una colección 'productos'. Inserta un producto con nombre 'Laptop', precio 1200, y otro producto con nombre 'Mouse', precio 25.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany o dos insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción de múltiples documentos</h6>
</div>`,
    opts: [
        "use('tienda'); db.createCollection('productos'); db.productos.insertMany([{ nombre: 'Laptop', precio: 1200 }, { nombre: 'Mouse', precio: 25 }]);",
        "use('tienda'); db.productos.insertOne({ nombre: 'Laptop', precio: 1200 }); db.productos.insertOne({ nombre: 'Mouse', precio: 25 });",
        "use tienda; create productos; insert into productos values ('Laptop',1200); insert into productos values ('Mouse',25);",
        "db.createCollection('tienda'); db.productos.add(...);"
    ],
    ans: 0,
    exp: "Ambas opciones son válidas. insertMany es más eficiente para varios documentos."
},

{
    unit: "MongoDB - Simulacro Crear",
    diff: "hard",
    q: "Crea una base 'biblioteca'. Crea una colección 'libros'. Inserta un libro con título 'El Quijote', autor 'Cervantes', año 1605.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use, createCollection, insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación completa</h6>
</div>`,
    opts: [
        "use('biblioteca'); db.createCollection('libros'); db.libros.insertOne({ titulo: 'El Quijote', autor: 'Cervantes', año: 1605 });",
        "use biblioteca; create libros; insert into libros (titulo, autor, año) values ('El Quijote', 'Cervantes', 1605);",
        "db.biblioteca.createCollection('libros'); db.libros.add({ titulo: 'El Quijote', autor: 'Cervantes', año: 1605 });",
        "create database biblioteca; create collection libros; insert document titulo='El Quijote';"
    ],
    ans: 0,
    exp: "use('biblioteca') crea la base. createCollection('libros') crea la colección. insertOne inserta el documento."
},

{
    unit: "MongoDB - Simulacro Crear",
    diff: "hard",
    q: "Crea una base 'hospital'. Crea una colección 'pacientes'. Inserta un paciente con nombre 'Maria', enfermedad 'gripe', habitacion 204.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: misma estructura que antes</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de entidades</h6>
</div>`,
    opts: [
        "use('hospital'); db.createCollection('pacientes'); db.pacientes.insertOne({ nombre: 'Maria', enfermedad: 'gripe', habitacion: 204 });",
        "use('hospital'); db.pacientes.insertOne({ nombre: 'Maria', enfermedad: 'gripe', habitacion: 204 });",
        "use hospital; create pacientes; insert into pacientes values ('Maria', 'gripe', 204);",
        "db.createCollection('hospital'); db.pacientes.insertOne(...);"
    ],
    ans: 0,
    exp: "createCollection es opcional porque insertOne también crea la colección si no existe. Pero el profe puede pedirla explícitamente."
},

{
    unit: "MongoDB - Simulacro Índices",
    diff: "hard",
    q: "Crea una base 'redsocial'. Crea una colección 'usuarios'. Inserta un usuario con email 'juan@mail.com'. Luego crea un índice único en el campo email.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con unique: true</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices únicos</h6>
</div>`,
    opts: [
        "use('redsocial'); db.createCollection('usuarios'); db.usuarios.insertOne({ email: 'juan@mail.com' }); db.usuarios.createIndex({ email: 1 }, { unique: true });",
        "use('redsocial'); db.usuarios.insertOne({ email: 'juan@mail.com' }); db.usuarios.uniqueIndex({ email: 1 });",
        "use redsocial; create usuarios; insert into usuarios values ('juan@mail.com'); create unique index on usuarios(email);",
        "db.createCollection('redsocial'); db.usuarios.insert(...); db.usuarios.addIndex({ email: 'unique' });"
    ],
    ans: 0,
    exp: "createIndex({ email: 1 }) crea el índice. { unique: true } evita emails duplicados."
},

{
    unit: "MongoDB - Simulacro Índices",
    diff: "hard",
    q: "Crea una base 'inmobiliaria'. Crea una colección 'propiedades'. Crea un índice compuesto en los campos 'ciudad' y 'precio'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con dos campos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices compuestos</h6>
</div>`,
    opts: [
        "use('inmobiliaria'); db.createCollection('propiedades'); db.propiedades.createIndex({ ciudad: 1, precio: -1 });",
        "use('inmobiliaria'); db.propiedades.createIndex({ ciudad: 1, precio: 1 });",
        "use inmobiliaria; create propiedades; create index on propiedades(ciudad, precio);",
        "db.inmobiliaria.createCollection('propiedades'); db.propiedades.addIndex('ciudad', 'precio');"
    ],
    ans: 0,
    exp: "Índice compuesto con dos campos. 1 = ascendente, -1 = descendente."
},

//SIMULACROS CON VALIDACIÓN 

{
    unit: "MongoDB - Simulacro Validación",
    diff: "hard",
    q: "Crea una base 'escuela'. Crea una colección 'profesores' que valide que el campo 'nombre' es obligatorio y de tipo string.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createCollection con validator y $jsonSchema</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de esquemas</h6>
</div>`,
    opts: [
        "use('escuela'); db.createCollection('profesores', { validator: { $jsonSchema: { bsonType: 'object', required: ['nombre'], properties: { nombre: { bsonType: 'string' } } } } });",
        "use('escuela'); db.profesores.createValidator({ nombre: 'string' });",
        "use escuela; create profesores with validation (nombre string not null);",
        "db.createCollection('escuela'); db.profesores.validate({ nombre: { type: String } });"
    ],
    ans: 0,
    exp: "required: ['nombre'] hace obligatorio el campo. bsonType: 'string' valida el tipo."
},


{
    unit: "MongoDB - Simulacro Validación",
    diff: "hard",
    q: "Crea una base 'tienda'. Crea una colección 'productos' que valide que el precio sea mayor o igual a 0 y que el nombre sea obligatorio.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: usar minimum en el campo precio</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de rangos</h6>
</div>`,
    opts: [
        "use('tienda'); db.createCollection('productos', { validator: { $jsonSchema: { bsonType: 'object', required: ['nombre'], properties: { nombre: { bsonType: 'string' }, precio: { bsonType: 'int', minimum: 0 } } } } });",
        "use('tienda'); db.productos.createValidator({ nombre: 'string', precio: { $gte: 0 } });",
        "use tienda; create productos with validation (nombre string not null, precio int >= 0);",
        "db.createCollection('tienda'); db.productos.validate({ nombre: String, precio: { min: 0 } });"
    ],
    ans: 0,
    exp: "minimum: 0 asegura precio no negativo. required: ['nombre'] asegura que siempre tenga nombre."
},

{
    unit: "MongoDB - Simulacro Validación",
    diff: "hard",
    q: "Crea una base 'hotel'. Crea una colección 'habitaciones' que valide que el número de habitación esté entre 100 y 500, y que el campo 'tipo' sea solo 'simple', 'doble' o 'suite'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:180px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: usar minimum, maximum y enum</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación con rangos y enumerados</h6>
</div>`,
    opts: [
        "use('hotel'); db.createCollection('habitaciones', { validator: { $jsonSchema: { bsonType: 'object', properties: { numero: { bsonType: 'int', minimum: 100, maximum: 500 }, tipo: { bsonType: 'string', enum: ['simple', 'doble', 'suite'] } } } } });",
        "use('hotel'); db.habitaciones.createValidator({ numero: { $between: [100, 500] }, tipo: ['simple', 'doble', 'suite'] });",
        "use hotel; create habitaciones with validation (numero int between 100 and 500, tipo in ('simple','doble','suite'));",
        "db.createCollection('hotel'); db.habitaciones.validate({ numero: { min: 100, max: 500 }, tipo: { enum: [...] } });"
    ],
    ans: 0,
    exp: "minimum y maximum definen el rango. enum restringe a valores específicos."
},

{
    unit: "MongoDB - Simulacro Arrays",
    diff: "hard",
    q: "Crea una base 'cursos'. Crea una colección 'alumnos'. Inserta un alumno con nombre 'Pedro' y un array de notas [7, 8, 9].",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: array se escribe con corchetes []</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: documentos con arrays</h6>
</div>`,
    opts: [
        "use('cursos'); db.createCollection('alumnos'); db.alumnos.insertOne({ nombre: 'Pedro', notas: [7, 8, 9] });",
        "use('cursos'); db.alumnos.insertOne({ nombre: 'Pedro', notas: 7, 8, 9 });",
        "use cursos; create alumnos; insert into alumnos values ('Pedro', [7,8,9]);",
        "db.createCollection('cursos'); db.alumnos.insert({ nombre: 'Pedro', notas: '7,8,9' });"
    ],
    ans: 0,
    exp: "Los arrays se escriben entre corchetes: [valor1, valor2, valor3]"
},

{
    unit: "MongoDB - Simulacro Arrays",
    diff: "hard",
    q: "Crea una base 'redsocial'. Crea una colección 'usuarios'. Inserta un usuario con nombre 'Ana' y un array de amigos ['Luis', 'Carlos', 'Sofia'].",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: array de strings</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: documentos con arrays</h6>
</div>`,
    opts: [
        "use('redsocial'); db.createCollection('usuarios'); db.usuarios.insertOne({ nombre: 'Ana', amigos: ['Luis', 'Carlos', 'Sofia'] });",
        "use('redsocial'); db.usuarios.insertOne({ nombre: 'Ana', amigos: 'Luis,Carlos,Sofia' });",
        "use redsocial; create usuarios; insert into usuarios values ('Ana', ['Luis','Carlos','Sofia']);",
        "db.createCollection('redsocial'); db.usuarios.insert({ nombre: 'Ana', amigos: 'Luis', 'Carlos', 'Sofia' });"
    ],
    ans: 0,
    exp: "Los arrays pueden contener strings, números, objetos, o cualquier tipo de dato."
},

//SIMULACROS COMPLETOS

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'videoclub'. Crea una colección 'peliculas'. Inserta 2 películas: ('Inception', 2010, 'Sci-Fi') y ('Titanic', 1997, 'Romance'). Luego crea un índice en el campo 'año'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use, createCollection, insertMany, createIndex</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación completa</h6>
</div>`,
    opts: [
        "use('videoclub'); db.createCollection('peliculas'); db.peliculas.insertMany([{ titulo: 'Inception', año: 2010, genero: 'Sci-Fi' }, { titulo: 'Titanic', año: 1997, genero: 'Romance' }]); db.peliculas.createIndex({ año: 1 });",
        "use('videoclub'); db.peliculas.insertMany([{ titulo: 'Inception', año: 2010, genero: 'Sci-Fi' }, { titulo: 'Titanic', año: 1997, genero: 'Romance' }]); db.peliculas.createIndex({ año: 1 });",
        "use videoclub; create peliculas; insert into peliculas values ...; create index on peliculas(año);",
        "db.createCollection('videoclub'); db.peliculas.insert(...); db.peliculas.index({ año: 1 });"
    ],
    ans: 0,
    exp: "Orden: 1) use, 2) createCollection, 3) insertMany, 4) createIndex"
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'restaurante'. Crea una colección 'platos' con validación: campo 'nombre' obligatorio, 'precio' mayor a 0. Inserta un plato 'Paella' con precio 15.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createCollection con validator, luego insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación + inserción</h6>
</div>`,
    opts: [
        "use('restaurante'); db.createCollection('platos', { validator: { $jsonSchema: { bsonType: 'object', required: ['nombre'], properties: { nombre: { bsonType: 'string' }, precio: { bsonType: 'int', minimum: 1 } } } } }); db.platos.insertOne({ nombre: 'Paella', precio: 15 });",
        "use('restaurante'); db.platos.insertOne({ nombre: 'Paella', precio: 15 }); db.platos.createValidator({ nombre: 'string', precio: { $gt: 0 } });",
        "use restaurante; create platos with validation; insert into platos values ('Paella',15);",
        "db.createCollection('restaurante'); db.platos.validate({ nombre: String, precio: { min: 1 } }); db.platos.insert({ nombre: 'Paella', precio: 15 });"
    ],
    ans: 0,
    exp: "Primero crear la colección con validación, luego insertar el documento que cumple la validación."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'deportes'. Crea una colección 'equipos'. Inserta un equipo con nombre 'Real Madrid', jugadores ['Courtois', 'Modric', 'Vinicius']. Crea un índice en el campo 'nombre'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: array de jugadores, índice en nombre</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: arrays + índices</h6>
</div>`,
    opts: [
        "use('deportes'); db.createCollection('equipos'); db.equipos.insertOne({ nombre: 'Real Madrid', jugadores: ['Courtois', 'Modric', 'Vinicius'] }); db.equipos.createIndex({ nombre: 1 });",
        "use('deportes'); db.equipos.insertOne({ nombre: 'Real Madrid', jugadores: 'Courtois,Modric,Vinicius' }); db.equipos.createIndex({ nombre: 1 });",
        "use deportes; create equipos; insert into equipos values ('Real Madrid', ['Courtois','Modric','Vinicius']); create index on equipos(nombre);",
        "db.createCollection('deportes'); db.equipos.insert({ nombre: 'Real Madrid', jugadores: [...] }); db.equipos.index({ nombre: 1 });"
    ],
    ans: 0,
    exp: "El array se escribe con corchetes. El índice en nombre acelera búsquedas por ese campo."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'instituto'. Crea dos colecciones: 'alumnos' y 'profesores'. Inserta un alumno ('Juan', 18) y un profesor ('Maria', 'matematicas').",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: dos createCollection y dos insertOne</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: múltiples colecciones</h6>
</div>`,
    opts: [
        "use('instituto'); db.createCollection('alumnos'); db.createCollection('profesores'); db.alumnos.insertOne({ nombre: 'Juan', edad: 18 }); db.profesores.insertOne({ nombre: 'Maria', asignatura: 'matematicas' });",
        "use('instituto'); db.alumnos.insertOne({ nombre: 'Juan', edad: 18 }); db.profesores.insertOne({ nombre: 'Maria', asignatura: 'matematicas' });",
        "use instituto; create alumnos, profesores; insert into alumnos values ('Juan',18); insert into profesores values ('Maria','matematicas');",
        "db.createCollection('instituto'); db.alumnos.insert(...); db.profesores.insert(...);"
    ],
    ans: 0,
    exp: "Se puede crear ambas colecciones primero con createCollection, o se crean automáticamente al insertar."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'agenda'. Crea una colección 'contactos' con validación: 'telefono' debe ser string y obligatorio. Inserta un contacto con nombre 'Luis' y telefono '123456789'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: required y bsonType</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de strings</h6>
</div>`,
    opts: [
        "use('agenda'); db.createCollection('contactos', { validator: { $jsonSchema: { bsonType: 'object', required: ['telefono'], properties: { telefono: { bsonType: 'string' } } } } }); db.contactos.insertOne({ nombre: 'Luis', telefono: '123456789' });",
        "use('agenda'); db.contactos.insertOne({ nombre: 'Luis', telefono: '123456789' }); db.contactos.createValidator({ telefono: 'string' });",
        "use agenda; create contactos with validation (telefono string not null); insert into contactos values ('Luis','123456789');",
        "db.createCollection('agenda'); db.contactos.validate({ telefono: String }); db.contactos.insert({ nombre: 'Luis', telefono: '123456789' });"
    ],
    ans: 0,
    exp: "required: ['telefono'] hace que el campo sea obligatorio. bsonType: 'string' valida que sea texto."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'concesionario'. Crea una colección 'coches'. Inserta 3 coches: (Seat Ibiza, 12000), (Renault Clio, 11000), (Ford Focus, 15000). Crea un índice compuesto en 'modelo' y 'precio'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany, luego createIndex con dos campos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índice compuesto</h6>
</div>`,
    opts: [
        "use('concesionario'); db.createCollection('coches'); db.coches.insertMany([{ modelo: 'Seat Ibiza', precio: 12000 }, { modelo: 'Renault Clio', precio: 11000 }, { modelo: 'Ford Focus', precio: 15000 }]); db.coches.createIndex({ modelo: 1, precio: 1 });",
        "use('concesionario'); db.coches.insertMany([...]); db.coches.createIndex({ modelo: 1, precio: -1 });",
        "use concesionario; create coches; insert into coches values ...; create index on coches(modelo, precio);",
        "db.createCollection('concesionario'); db.coches.insert(...); db.coches.index({ modelo: 1, precio: 1 });"
    ],
    ans: 0,
    exp: "Índice compuesto con ambos campos en orden ascendente (1)."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'cine'. Crea una colección 'salas' con validación: 'numero' entre 1 y 10, 'capacidad' mayor a 0. Inserta una sala con numero 5 y capacidad 100.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: minimum, maximum, minimum en capacidad</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de números</h6>
</div>`,
    opts: [
        "use('cine'); db.createCollection('salas', { validator: { $jsonSchema: { bsonType: 'object', properties: { numero: { bsonType: 'int', minimum: 1, maximum: 10 }, capacidad: { bsonType: 'int', minimum: 1 } } } } }); db.salas.insertOne({ numero: 5, capacidad: 100 });",
        "use('cine'); db.salas.insertOne({ numero: 5, capacidad: 100 }); db.salas.createValidator({ numero: { $between: [1,10] }, capacidad: { $gt: 0 } });",
        "use cine; create salas with validation (numero int between 1 and 10, capacidad int > 0); insert into salas values (5,100);",
        "db.createCollection('cine'); db.salas.validate({ numero: { min: 1, max: 10 }, capacidad: { min: 1 } }); db.salas.insert({ numero: 5, capacidad: 100 });"
    ],
    ans: 0,
    exp: "minimum y maximum definen el rango. En capacidad solo minimum porque no hay límite superior."
},

{
    unit: "MongoDB - Simulacro Completo",
    diff: "hard",
    q: "Crea una base 'musica'. Crea una colección 'canciones'. Inserta una canción con titulo 'Bohemian Rhapsody', artista 'Queen', y un array de generos ['rock', 'opera']. Crea un índice en el campo 'artista'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: array de strings, índice en artista</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: arrays + índices</h6>
</div>`,
    opts: [
        "use('musica'); db.createCollection('canciones'); db.canciones.insertOne({ titulo: 'Bohemian Rhapsody', artista: 'Queen', generos: ['rock', 'opera'] }); db.canciones.createIndex({ artista: 1 });",
        "use('musica'); db.canciones.insertOne({ titulo: 'Bohemian Rhapsody', artista: 'Queen', generos: 'rock,opera' }); db.canciones.createIndex({ artista: 1 });",
        "use musica; create canciones; insert into canciones values ('Bohemian Rhapsody','Queen',['rock','opera']); create index on canciones(artista);",
        "db.createCollection('musica'); db.canciones.insert(...); db.canciones.index({ artista: 1 });"
    ],
    ans: 0,
    exp: "Array de strings: ['rock', 'opera']. Índice en artista para buscar rápido por ese campo."
},

//SIMULACROS DE ELIMINACIÓN 

{
    unit: "MongoDB - Simulacro Eliminar",
    diff: "hard",
    q: "Crea una base 'temporal'. Crea una colección 'prueba'. Inserta un documento cualquiera. Luego elimina la colección completa.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:100px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: drop() para eliminar colección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de colecciones</h6>
</div>`,
    opts: [
        "use('temporal'); db.createCollection('prueba'); db.prueba.insertOne({ dato: 'test' }); db.prueba.drop();",
        "use('temporal'); db.prueba.insertOne({ dato: 'test' }); db.prueba.delete();",
        "use temporal; create prueba; insert into prueba values ('test'); drop prueba;",
        "db.createCollection('temporal'); db.prueba.insert(...); db.prueba.remove();"
    ],
    ans: 0,
    exp: "drop() elimina la colección y todos sus documentos. deleteMany({}) solo elimina documentos pero mantiene la colección."
},


{
    unit: "MongoDB - Simulacro Eliminar",
    diff: "hard",
    q: "Crea una base 'prueba'. Crea una colección 'datos'. Inserta 3 documentos. Luego elimina la base de datos completa.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: dropDatabase()</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de bases de datos</h6>
</div>`,
    opts: [
        "use('prueba'); db.createCollection('datos'); db.datos.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]); db.dropDatabase();",
        "use('prueba'); db.datos.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]); db.drop();",
        "use prueba; create datos; insert into datos values (1),(2),(3); drop database;",
        "db.createCollection('prueba'); db.datos.insert(...); db.prueba.drop();"
    ],
    ans: 0,
    exp: "db.dropDatabase() elimina la base actual completa. Cuidado con este comando."
},



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
    },


//NIVEL 1 - BÁSICO (Conceptos fundamentales)


    {
    unit: "MongoDB - Conceptos Básicos",
    diff: "easy",
    q: "¿Cómo se llama la unidad de almacenamiento equivalente a una 'fila' en SQL?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: En MongoDB se guardan como BSON</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: terminología NoSQL</h6>
</div>`,
    opts: ["Documento", "Registro", "Tupla", "Campo"],
    ans: 0,
    exp: "En MongoDB, un documento es equivalente a una fila en SQL. Los documentos están en formato BSON (JSON binario)."
},

{
    unit: "MongoDB - Conceptos Básicos",
    diff: "easy",
    q: "¿Cómo se llama el equivalente a una 'tabla' en SQL?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Agrupa documentos relacionados</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: terminología NoSQL</h6>
</div>`,
    opts: ["Colección", "Base de datos", "Cluster", "Shard"],
    ans: 0,
    exp: "Una colección agrupa documentos similares, equivalente a una tabla en SQL pero sin esquema fijo."
},

{
    unit: "MongoDB - Conceptos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra todas las bases de datos en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Show databases</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: comandos de administración</h6>
</div>`,
    opts: ["show dbs", "show databases", "db.list()", "list databases"],
    ans: 0,
    exp: "show dbs lista todas las bases de datos. También funciona 'show databases' en algunas versiones."
},

{
    unit: "MongoDB - Conceptos Básicos",
    diff: "easy",
    q: "¿Qué comando selecciona o crea una base de datos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> miBase</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Use database</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: navegación entre bases de datos</h6>
</div>`,
    opts: ["use", "select", "db", "connect"],
    ans: 0,
    exp: "use miBase selecciona la base de datos. Si no existe, se crea al insertar el primer documento."
},

{
    unit: "MongoDB - CRUD Básico",
    diff: "easy",
    q: "Completa el comando para insertar un documento en la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({nombre: "Juan", edad: 25})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Insert one document</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones de escritura</h6>
</div>`,
    opts: ["db.usuarios.insertOne", "db.usuarios.insert", "db.usuarios.save", "db.usuarios.add"],
    ans: 0,
    exp: "db.coleccion.insertOne(documento) inserta un documento. insert() está deprecado, se recomienda insertOne o insertMany."
},

{
    unit: "MongoDB - CRUD Básico",
    diff: "easy",
    q: "Completa el comando para encontrar todos los documentos de la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Find all documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones de lectura</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.findAll", "db.usuarios.select", "db.usuarios.read"],
    ans: 0,
    exp: "db.usuarios.find({}) devuelve todos los documentos. El query vacío {} significa 'sin filtro'."
},

{
    unit: "MongoDB - CRUD Básico",
    diff: "easy",
    q: "Completa el comando para actualizar un documento (cambiar edad de Juan a 26):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({nombre: "Juan"}, {$set: {edad: 26}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Update one document</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones de actualización</h6>
</div>`,
    opts: ["db.usuarios.updateOne", "db.usuarios.update", "db.usuarios.modify", "db.usuarios.change"],
    ans: 0,
    exp: "db.usuarios.updateOne(filtro, operación) actualiza el primer documento que coincide. $set es el operador para modificar campos."
},

{
    unit: "MongoDB - CRUD Básico",
    diff: "easy",
    q: "Completa el comando para eliminar un documento de la colección 'usuarios' donde nombre es 'Juan':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({nombre: "Juan"})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Delete one document</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones de eliminación</h6>
</div>`,
    opts: ["db.usuarios.deleteOne", "db.usuarios.remove", "db.usuarios.delete", "db.usuarios.drop"],
    ans: 0,
    exp: "db.usuarios.deleteOne(filtro) elimina el primer documento que coincide. remove() está deprecado."
},


{
    unit: "MongoDB - Conceptos Básicos",
    diff: "easy",
    q: "Empareja cada concepto SQL con su equivalente en MongoDB",
    extra: `
<div class="extra-content">
<table style="width:100%;border-collapse:collapse;margin-bottom:1rem;">
<thead>
  <tr><th style="border:1px solid #ddd;padding:8px;">SQL</th><th style="border:1px solid #ddd;padding:8px;">MongoDB</th><th style="border:1px solid #ddd;padding:8px;">Tu respuesta</th></tr>
</thead>
<tbody>
  <tr><td style="border:1px solid #ddd;padding:8px;">Fila</td><td style="border:1px solid #ddd;padding:8px;">_______</td><td style="border:1px solid #ddd;padding:8px;"><input style="width:100%;"></td></tr>
  <tr><td style="border:1px solid #ddd;padding:8px;">Tabla</td><td style="border:1px solid #ddd;padding:8px;">_______</td><td style="border:1px solid #ddd;padding:8px;"><input style="width:100%;"></td></tr>
  <tr><td style="border:1px solid #ddd;padding:8px;">Base de datos</td><td style="border:1px solid #ddd;padding:8px;">_______</td><td style="border:1px solid #ddd;padding:8px;"><input style="width:100%;"></td></tr>
</tbody>
</table>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Documento, Colección, Base de datos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: mapeo conceptual SQL a NoSQL</h6>
</div>`,
    opts: ["Documento, Colección, Base de datos", "Registro, Tabla, Esquema", "Tupla, Conjunto, Almacén", "Campo, Grupo, DB"],
    ans: 0,
    exp: "Fila = Documento, Tabla = Colección, Base de datos = Base de datos (mismo nombre)."
},

{
    unit: "MongoDB - CRUD Básico",
    diff: "easy",
    q: "¿Qué comando muestra el contenido de la colección 'usuarios' de forma legible?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">().pretty()</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Formato legible</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: formato de salida</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.findAll", "db.usuarios.select", "db.usuarios.show"],
    ans: 0,
    exp: ".pretty() formatea la salida con indentación, más fácil de leer que el formato compacto."
},

//NIVEL 2 - INTERMEDIO (Filtros, Operadores, Proyección)

{
    unit: "MongoDB - Consultas",
    diff: "medium",
    q: "Completa el comando para encontrar usuarios con edad mayor a 18:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({edad: {$gt: 18}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Operador de comparación mayor que</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de consulta</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.where", "db.usuarios.filter", "db.usuarios.select"],
    ans: 0,
    exp: "db.usuarios.find({edad: {$gt: 18}}). Los operadores de comparación: $gt (mayor), $lt (menor), $gte, $lte, $eq, $ne."
},

{
    unit: "MongoDB - Consultas",
    diff: "medium",
    q: "Completa el comando para encontrar usuarios que tengan 20, 25 o 30 años:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({edad: {$in: [20, 25, 30]}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Operador que coincide con cualquier valor de un array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores lógicos</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.whereIn", "db.usuarios.findIn", "db.usuarios.selectIn"],
    ans: 0,
    exp: "$in busca documentos donde el campo coincida con cualquier valor del array. También existe $nin (not in)."
},


{
    unit: "MongoDB - Proyección",
    diff: "medium",
    q: "Completa el comando para mostrar solo el campo 'nombre' y excluir '_id' de los usuarios:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({}, {nombre: 1, _id: 0})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Proyección con 1 (incluir) y 0 (excluir)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: proyección de campos</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.project", "db.usuarios.select", "db.usuarios.only"],
    ans: 0,
    exp: "El segundo argumento de find() es la proyección. 1 = incluir, 0 = excluir. _id se muestra por defecto, hay que excluirlo explícitamente."
},

{
    unit: "MongoDB - Consultas",
    diff: "medium",
    q: "Completa el comando para encontrar usuarios que NO tengan campo 'email':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({email: {$exists: false}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Verificar existencia de campo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operador de existencia</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.whereMissing", "db.usuarios.findMissing", "db.usuarios.filterExists"],
    ans: 0,
    exp: "$exists: false encuentra documentos donde el campo no existe. $exists: true encuentra donde el campo existe (incluso si es null)."
},

{
    unit: "MongoDB - Consultas",
    diff: "medium",
    q: "Completa el comando para encontrar usuarios cuyo nombre empiece con 'J':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({nombre: {$regex: /^J/}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Expresión regular</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda con patrones</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.findRegex", "db.usuarios.match", "db.usuarios.whereLike"],
    ans: 0,
    exp: "$regex permite buscar con expresiones regulares. /^J/ significa 'empieza con J'. También se puede usar $options para case-insensitive: /^j/i."
},

{
    unit: "MongoDB - Ordenamiento y Límites",
    diff: "medium",
    q: "Completa el comando para ordenar usuarios por edad descendente y mostrar los 5 más jóvenes (edad ascendente en realidad) o más viejos:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">().sort({edad: -1}).limit(5)</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: sort (1 ascendente, -1 descendente) y limit</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ordenamiento y paginación</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.orderBy", "db.usuarios.findAll", "db.usuarios.all"],
    ans: 0,
    exp: ".sort({edad: -1}) ordena por edad descendente (mayor a menor). .limit(5) limita a 5 resultados. También existe .skip() para paginación."
},

{
    unit: "MongoDB - CRUD Avanzado",
    diff: "medium",
    q: "Completa el comando para insertar múltiples documentos de una vez:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{nombre: "Ana", edad: 20}, {nombre: "Luis", edad: 30}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Insert multiple documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción por lotes</h6>
</div>`,
    opts: ["db.usuarios.insertMany", "db.usuarios.insertAll", "db.usuarios.bulkInsert", "db.usuarios.addMany"],
    ans: 0,
    exp: "insertMany() inserta un array de documentos en una sola operación, más eficiente que múltiples insertOne()."
},

{
    unit: "MongoDB - CRUD Avanzado",
    diff: "medium",
    q: "Completa el comando para actualizar múltiples documentos (todos los usuarios con edad < 18 a 'menor'):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({edad: {$lt: 18}}, {$set: {tipo: "menor"}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Update many documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización múltiple</h6>
</div>`,
    opts: ["db.usuarios.updateMany", "db.usuarios.updateAll", "db.usuarios.update", "db.usuarios.modifyMany"],
    ans: 0,
    exp: "updateMany() actualiza todos los documentos que cumplen el filtro. update() sin multi: true solo actualiza el primero."
},

{
    unit: "MongoDB - CRUD Avanzado",
    diff: "medium",
    q: "Completa el comando para eliminar todos los documentos de la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Delete many with empty filter</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación masiva</h6>
</div>`,
    opts: ["db.usuarios.deleteMany", "db.usuarios.drop", "db.usuarios.removeAll", "db.usuarios.clear"],
    ans: 0,
    exp: "deleteMany({}) elimina todos los documentos pero mantiene la colección. drop() elimina la colección completa (índices incluidos)."
},

{
    unit: "MongoDB - Consultas",
    diff: "medium",
    q: "Completa el comando para contar cuántos usuarios tienen edad mayor a 18:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({edad: {$gt: 18}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Count documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: conteo de documentos</h6>
</div>`,
    opts: ["db.usuarios.countDocuments", "db.usuarios.find().count", "db.usuarios.count", "db.usuarios.size"],
    ans: 0,
    exp: "countDocuments() es el método recomendado para contar documentos. find().count() está deprecado."
},

{
    unit: "MongoDB - Arrays",
    diff: "hard",
    q: "Completa el comando para encontrar usuarios que tengan 'python' en su array de habilidades:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({habilidades: "python"})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Query directa sobre array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consulta en arrays</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.findInArray", "db.usuarios.whereArray", "db.usuarios.matchArray"],
    ans: 0,
    exp: "MongoDB permite consultar directamente sobre arrays: {habilidades: 'python'} encuentra documentos donde 'python' esté en el array habilidades."
},

{
    unit: "MongoDB - Arrays",
    diff: "hard",
    q: "Completa el comando para encontrar usuarios que tengan 'python' Y 'java' en habilidades:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({habilidades: {$all: ["python", "java"]}})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $all operador para múltiples condiciones en array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array</h6>
</div>`,
    opts: ["db.usuarios.find", "db.usuarios.findWithAll", "db.usuarios.matchAll", "db.usuarios.arrayAll"],
    ans: 0,
    exp: "$all selecciona documentos donde el array contenga TODOS los elementos especificados. El orden no importa."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline de agregación para agrupar usuarios por edad y contar cuántos hay:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$group: {_id: "$edad", total: {$sum: 1}}}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $group con $sum</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation framework</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.groupBy", "db.usuarios.pipeline", "db.usuarios.aggregation"],
    ans: 0,
    exp: "aggregate() ejecuta un pipeline de etapas. $group agrupa por _id, $sum: 1 cuenta documentos por grupo."
},


{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para calcular el promedio de edad de los usuarios:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$group: {_id: null, promedio: {$avg: "$edad"}}}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $avg en $group</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: funciones de agregación</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.avg", "db.usuarios.average", "db.usuarios.groupAvg"],
    ans: 0,
    exp: "_id: null agrupa todos los documentos en un solo grupo. $avg calcula el promedio del campo especificado."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para filtrar usuarios mayores de 18 y luego proyectar solo nombre y edad:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$match: {edad: {$gt: 18}}}, {$project: {nombre: 1, edad: 1, _id: 0}}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $match para filtrar, $project para seleccionar campos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: etapas de pipeline</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.find", "db.usuarios.pipeline", "db.usuarios.filter"],
    ans: 0,
    exp: "$match filtra documentos (como find), $project selecciona/transforma campos. Las etapas se ejecutan en orden."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para descomponer un array de 'tags' en documentos separados:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$unwind: "$tags"}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $unwind descompone arrays</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: desnormalización de arrays</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.unwind", "db.usuarios.explode", "db.usuarios.splitArray"],
    ans: 0,
    exp: "$unwind crea un documento por cada elemento del array. Útil para agrupar o filtrar por elementos individuales."
},
{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para ordenar por edad descendente y limitar a 10:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$sort: {edad: -1}}, {$limit: 10}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $sort luego $limit</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ordenamiento y límite en aggregation</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.sortLimit", "db.usuarios.order", "db.usuarios.top"],
    ans: 0,
    exp: "En aggregation, $sort y $limit son etapas separadas. El orden importa: $sort antes de $limit para obtener los primeros N ordenados."
},

{
    unit: "MongoDB - Índices",
    diff: "hard",
    q: "Completa el comando para crear un índice en el campo 'email' (único):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({email: 1}, {unique: true})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: createIndex con opción unique</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: optimización de consultas</h6>
</div>`,
    opts: ["db.usuarios.createIndex", "db.usuarios.addIndex", "db.usuarios.index", "db.usuarios.ensureIndex"],
    ans: 0,
    exp: "createIndex({email: 1}) crea índice ascendente. {unique: true} previene valores duplicados. 1 = ascendente, -1 = descendente."
},


{
    unit: "MongoDB - Índices",
    diff: "hard",
    q: "Completa el comando para ver todos los índices de la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">()</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Get all indexes</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: administración de índices</h6>
</div>`,
    opts: ["db.usuarios.getIndexes", "db.usuarios.indexes", "db.usuarios.showIndexes", "db.usuarios.listIndexes"],
    ans: 0,
    exp: "getIndexes() muestra todos los índices de la colección, incluyendo el índice por defecto en _id."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para hacer una búsqueda con múltiples condiciones ($and implícito):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">([{$match: {edad: {$gt: 18}, ciudad: "Madrid"}}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Múltiples condiciones en $match</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtros compuestos</h6>
</div>`,
    opts: ["db.usuarios.aggregate", "db.usuarios.find", "db.usuarios.filter", "db.usuarios.match"],
    ans: 0,
    exp: "En $match, múltiples condiciones se combinan con $and implícito (todas deben cumplirse). Para $or se usa explícitamente."
},

//NIVEL 4 - EXPERTO (Lookups, Transactions, Replica Sets, Sharding)

{
    unit: "MongoDB - Lookup (Join)",
    diff: "expert",
    q: "Completa el pipeline para hacer un join entre 'pedidos' y 'usuarios' usando userId:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.pedidos.aggregate([{
  $lookup: {
    from: "usuarios",
    localField: "userId",
    foreignField: "_id",
    as: "______"
  }
}])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Nombre del array de salida</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: joins en MongoDB</h6>
</div>`,
    opts: ["usuario_info", "join", "usuarios", "resultado"],
    ans: 0,
    exp: "$lookup realiza un left outer join. El campo 'as' define el nombre del array donde se almacenan los documentos coincidentes."
},

{
    unit: "MongoDB - Lookup Avanzado",
    diff: "expert",
    q: "Completa el pipeline para hacer un lookup con subpipeline (filtros adicionales):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.pedidos.aggregate([{
  $lookup: {
    from: "usuarios",
    let: { uid: "$userId" },
    pipeline: [
      { $match: { $expr: { $eq: ["$_id", "$$uid"] } } },
      { $project: { nombre: 1, email: 1 } }
    ],
    as: "______"
  }
}])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Array de salida</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: joins complejos</h6>
</div>`,
    opts: ["usuario", "datos", "resultado", "usuarios"],
    ans: 0,
    exp: "El subpipeline permite filtrar y proyectar antes de unir. Se usa $expr para comparar campos de diferentes colecciones."
},

{
    unit: "MongoDB - Transacciones",
    diff: "expert",
    q: "¿Qué comando inicia una transacción en MongoDB (sesión)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Necesita una sesión</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: ACID en MongoDB</h6>
</div>`,
    opts: ["session.startTransaction()", "db.startTransaction()", "beginTransaction", "transaction.start()"],
    ans: 0,
    exp: "Las transacciones requieren una sesión explícita: session = db.getMongo().startSession(); session.startTransaction()."
},

{
    unit: "MongoDB - Transacciones",
    diff: "expert",
    q: "¿Qué comando confirma (commit) una transacción en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Commit transaction</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: finalización de transacciones</h6>
</div>`,
    opts: ["session.commitTransaction()", "db.commit()", "transaction.commit()", "commit()"],
    ans: 0,
    exp: "Después de las operaciones, session.commitTransaction() aplica los cambios. session.abortTransaction() los cancela."
},

{
    unit: "MongoDB - Replica Sets",
    diff: "expert",
    q: "¿Qué comando verifica el estado del replica set?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Replica set status</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: alta disponibilidad</h6>
</div>`,
    opts: ["rs.status()", "replica.status()", "db.status()", "sh.status()"],
    ans: 0,
    exp: "rs.status() muestra miembros del replica set, su estado (PRIMARY/SECONDARY) y lag de replicación."
},

{
    unit: "MongoDB - Replica Sets",
    diff: "expert",
    q: "¿Qué comando configura un replica set?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Initiate replica set</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: configuración de alta disponibilidad</h6>
</div>`,
    opts: ["rs.initiate()", "rs.start()", "replica.init()", "rs.config()"],
    ans: 0,
    exp: "rs.initiate() inicia el replica set con la configuración por defecto o con un documento de configuración pasado como argumento."
},

{
    unit: "MongoDB - Sharding",
    diff: "expert",
    q: "¿Qué comando habilita sharding en una base de datos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> miBase</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Enable sharding for database</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: escalabilidad horizontal</h6>
</div>`,
    opts: ["sh.enableSharding", "db.enableSharding", "shardDatabase", "enableShard"],
    ans: 0,
    exp: "sh.enableSharding('miBase') permite hacer sharding en esa base de datos. Luego hay que shardear cada colección con sh.shardCollection()."
},

{
    unit: "MongoDB - Sharding",
    diff: "expert",
    q: "Completa el comando para shardear una colección usando 'userId' como clave de shard:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">("miBase.usuarios", {userId: "hashed"})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Shard collection with hashed key</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: distribución de datos</h6>
</div>`,
    opts: ["sh.shardCollection", "db.shardCollection", "shard.collection", "shardCollection"],
    ans: 0,
    exp: "sh.shardCollection() define la clave de sharding. 'hashed' distribuye uniformemente, 'ranged' ordena por rangos."
},

{
    unit: "MongoDB - Índices Avanzados",
    diff: "expert",
    q: "Completa el comando para crear un índice compuesto (edad ascendente, nombre descendente):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;">({edad: 1, nombre: -1})</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Múltiples campos en índice</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices complejos</h6>
</div>`,
    opts: ["db.usuarios.createIndex", "db.usuarios.addIndex", "db.usuarios.index", "db.usuarios.ensureIndex"],
    ans: 0,
    exp: "El orden de los campos en un índice compuesto importa para las consultas. El índice soporta consultas en los campos con orden de prefijo."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "expert",
    q: "Completa el pipeline para calcular el precio total de cada pedido (sumando items.precio * items.cantidad):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.pedidos.aggregate([{
  $addFields: {
    total: {
      $sum: {
        $map: {
          input: "$items",
          as: "item",
          in: { $multiply: ["$$item.precio", "$$item.cantidad"] }
        }
      }
    }
  }
}])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $map itera sobre array, $multiply multiplica, $sum acumula</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: transformaciones complejas en aggregation</h6>
</div>`,
    opts: ["db.pedidos.aggregate", "db.pedidos.calculate", "db.pedidos.update", "db.pedidos.mapReduce"],
    ans: 0,
    exp: "$map transforma cada elemento del array, $sum suma los resultados. Es la forma moderna de MapReduce en aggregation pipeline."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para agrupar por ciudad y obtener el promedio de edad:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.usuarios.aggregate([
  { $group: { _id: "$ciudad", promedioEdad: { $_______: "$edad" } } }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Operador para calcular promedio</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation - operadores de grupo</h6>
</div>`,
    opts: ["avg", "average", "mean", "promedio"],
    ans: 0,
    exp: "$avg calcula el promedio de los valores numéricos en el grupo. También existen $sum, $min, $max, $first, $last."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para filtrar documentos donde el array 'tags' tenga al menos 3 elementos:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.articulos.aggregate([
  { $match: { $expr: { $_______: [ { $size: "$tags" }, 3 ] } } }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Operador de comparación mayor o igual</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: $expr y operadores de comparación</h6>
</div>`,
    opts: ["gte", "gt", "ge", ">="],
    ans: 0,
    exp: "$gte (greater than or equal) compara dos valores. $size obtiene la longitud del array. $expr permite usar operadores de aggregation en $match."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para concatenar nombre y apellido en un campo 'nombreCompleto':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.usuarios.aggregate([
  { $addFields: { nombreCompleto: { $_______: ["$nombre", " ", "$apellido"] } } }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Operador para unir strings</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de string</h6>
</div>`,
    opts: ["concat", "concatStrings", "join", "merge"],
    ans: 0,
    exp: "$concat une strings en el orden especificado. También existen $toLower, $toUpper, $substr, $strLenBytes."
},

{
    unit: "MongoDB - Updates Avanzados",
    diff: "hard",
    q: "Completa el comando para agregar un valor a un array sin duplicados (si no existe):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.usuarios.updateOne(
  { nombre: "Juan" },
  { $_______: { hobbies: "futbol" } }
)
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Add to set (sin duplicados)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de actualización de arrays</h6>
</div>`,
    opts: ["addToSet", "push", "add", "append"],
    ans: 0,
    exp: "$addToSet agrega un valor al array solo si no existe ya. $push agrega siempre (permite duplicados)."
},

{
    unit: "MongoDB - Updates Avanzados",
    diff: "hard",
    q: "Completa el comando para eliminar el primer elemento de un array:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.usuarios.updateOne(
  { nombre: "Juan" },
  { $_______: { hobbies: -1 } }
)
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Pop from array (-1 primero, 1 último)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de actualización de arrays</h6>
</div>`,
    opts: ["pop", "pull", "remove", "delete"],
    ans: 0,
    exp: "$pop elimina el primer elemento (-1) o el último (1) del array. $pull elimina elementos que coinciden con un valor específico."
},

{
    unit: "MongoDB - Validation",
    diff: "hard",
    q: "Completa el comando para crear una colección con validación de esquema (edad debe ser > 0):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "edad"],
      properties: {
        nombre: { bsonType: "string" },
        edad: { bsonType: "int", minimum: 1 }
      }
    }
  }
})
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: JsonSchema validator</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: validación de esquemas</h6>
</div>`,
    opts: ["db.createCollection", "db.create", "db.newCollection", "db.addCollection"],
    ans: 0,
    exp: "createCollection con validator permite definir reglas de validación. $jsonSchema es el formato estándar JSON Schema."
},

{
    unit: "MongoDB - Índices",
    diff: "hard",
    q: "Completa el comando para crear un índice de texto en los campos 'titulo' y 'descripcion':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.articulos.createIndex({
  titulo: "text",
  descripcion: "text"
})
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Text index</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda de texto completo</h6>
</div>`,
    opts: ["text", "string", "searchable", "fulltext"],
    ans: 0,
    exp: "El índice de texto permite búsquedas con $text. Se puede especificar weights para dar peso a ciertos campos."
},

{
    unit: "MongoDB - Consultas",
    diff: "hard",
    q: "Completa la consulta para búsqueda de texto que contenga 'mongodb' pero no 'sql':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.articulos.find({
  $text: { $search: "mongodb -sql" }
})
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Text search syntax</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda con exclusión</h6>
</div>`,
    opts: ["db.articulos.find", "db.articulos.search", "db.articulos.textSearch", "db.articulos.query"],
    ans: 0,
    exp: "En $text, el signo menos (-) excluye palabras. Las palabras sin signo son obligatorias. Las frases van entre comillas dobles."
},

{
    unit: "MongoDB - VS Code Extension",
    diff: "hard",
    q: "En VS Code con extensión MongoDB, ¿qué comando abre el playground para ejecutar consultas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Playground file</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: MongoDB VS Code extension</h6>
</div>`,
    opts: ["Create MongoDB Playground", "New Playground", "Open MongoDB Shell", "Start MongoDB Session"],
    ans: 0,
    exp: "Ctrl+Shift+P → 'Create MongoDB Playground' o usar el ícono de MongoDB en la barra lateral. Los playgrounds usan extensión .mongodb."
},

{
    unit: "MongoDB - Change Streams",
    diff: "expert",
    q: "Completa el código para escuchar cambios en tiempo real en la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
const changeStream = db.usuarios.watch();
changeStream.on("change", (change) => {
  console.log("Cambio detectado:", change.operationType);
});
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Método para watch changes</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: reactividad en MongoDB</h6>
</div>`,
    opts: ["watch", "listen", "onChange", "track"],
    ans: 0,
    exp: ".watch() abre un change stream. Requiere replica set. operationType puede ser: insert, update, delete, replace, etc."
},

{
    unit: "MongoDB - Change Streams",
    diff: "expert",
    q: "Completa el pipeline para filtrar solo operaciones 'insert' en un change stream:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
const changeStream = db.usuarios.watch([
  { $match: { operationType: "_______" } }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Tipo de operación para inserción</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtrado en change streams</h6>
</div>`,
    opts: ["insert", "create", "add", "new"],
    ans: 0,
    exp: "operationType puede ser 'insert', 'update', 'delete', 'replace', 'invalidate'. Se puede usar aggregation pipeline para filtrar."
},

{
    unit: "MongoDB - Transactions",
    diff: "expert",
    q: "Completa el código para una transacción con retry (reintento automático):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
const session = db.getMongo().startSession();
session.startTransaction({
  readConcern: { level: "majority" },
  writeConcern: { w: "majority" },
  retryWrites: _______
});
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Retry writes boolean</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: configuración de transacciones</h6>
</div>`,
    opts: ["true", "false", "yes", "1"],
    ans: 0,
    exp: "retryWrites: true permite reintentos automáticos en caso de fallos transitorios (replica set). Requiere driver compatible."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "expert",
    q: "Completa el pipeline para hacer una búsqueda facetada (múltiples agregaciones simultáneas):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.productos.aggregate([
  {
    $_______: {
      "porCategoria": [ { $group: { _id: "$categoria", count: { $sum: 1 } } } ],
      "porPrecio": [ { $bucket: { groupBy: "$precio", boundaries: [0, 100, 500, 1000] } } ]
    }
  }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Multiple aggregations in one stage</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: facetas y bucketing</h6>
</div>`,
    opts: ["facet", "multiGroup", "parallel", "branch"],
    ans: 0,
    exp: "$facet permite ejecutar múltiples pipelines de agregación en paralelo sobre el mismo conjunto de documentos. Ideal para dashboards y filtros."
},

{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "expert",
    q: "Completa el pipeline para agrupar documentos en rangos de precios (buckets):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.productos.aggregate([
  {
    $_______: {
      groupBy: "$precio",
      boundaries: [0, 50, 100, 200, 500],
      default: "Otros",
      output: { count: { $sum: 1 } }
    }
  }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Bucket stage</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agrupación por rangos</h6>
</div>`,
    opts: ["bucket", "range", "bin", "histogram"],
    ans: 0,
    exp: "$bucket agrupa documentos en rangos definidos por boundaries. Los valores fuera del rango van a 'default'. También existe $bucketAuto para rangos automáticos."
},

{
    unit: "MongoDB - VS Code Integration",
    diff: "expert",
    q: "En VS Code, ¿qué archivo se crea para ejecutar consultas MongoDB de forma interactiva?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Extensión del archivo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: MongoDB VS Code extension</h6>
</div>`,
    opts: [".mongodb", ".mongo", ".js", ".json"],
    ans: 0,
    exp: "Los playgrounds de MongoDB en VS Code usan extensión .mongodb. Se ejecutan con el botón 'Run' o Ctrl+Shift+P → 'Run MongoDB Playground'."
},

{
    unit: "MongoDB - Performance",
    diff: "expert",
    q: "Completa el comando para obtener el plan de ejecución de una consulta:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.usuarios.find({ edad: { $gt: 18 } }).______()
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Execution plan</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: optimización de consultas</h6>
</div>`,
    opts: ["explain", "plan", "analyze", "profile"],
    ans: 0,
    exp: ".explain() muestra el plan de ejecución. 'executionStats' da detalles de documentos escaneados, tiempo, etc. 'queryPlanner' muestra planes candidatos."
},


{
    unit: "MongoDB - Performance",
    diff: "expert",
    q: "Completa el comando para habilitar el profiling de consultas lentas (>100ms):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.setProfilingLevel(_______, { slowms: 100 })
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Nivel de profiling (0=off, 1=slow, 2=all)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: monitoreo de performance</h6>
</div>`,
    opts: ["1", "0", "2", "3"],
    ans: 0,
    exp: "Nivel 1: solo consultas lentas. Nivel 2: todas las consultas. Las consultas se guardan en system.profile."
},

{
    unit: "MongoDB - Backup",
    diff: "expert",
    q: "Completa el comando mongodump para hacer backup solo de la colección 'usuarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">terminal&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: MongoDB dump tool</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: respaldo de datos</h6>
</div>`,
    opts: ["mongodump --collection usuarios", "mongoexport --collection usuarios", "mongoimport --collection usuarios", "mongorestore --collection usuarios"],
    ans: 0,
    exp: "mongodump crea backup binario BSON. --collection especifica una colección. mongorestore restaura. mongoexport/mongoimport son para JSON/CSV."
},

{
    unit: "MongoDB - Security",
    diff: "expert",
    q: "Completa el comando para crear un usuario con rol de lectura/escritura en la base de datos 'miDB':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.createUser({
  user: "lector",
  pwd: "password123",
  roles: [{ role: "______", db: "miDB" }]
})
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Rol de lectura/escritura</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: autenticación y autorización</h6>
</div>`,
    opts: ["readWrite", "read", "dbOwner", "userAdmin"],
    ans: 0,
    exp: "readWrite permite leer y modificar datos. read solo lectura. dbOwner también puede administrar índices y roles. userAdmin solo gestiona usuarios."
},


{
    unit: "MongoDB - Aggregation Pipeline",
    diff: "hard",
    q: "Completa el pipeline para obtener el primer elemento de un array 'comentarios':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
db.articulos.aggregate([
  { $project: { primerComentario: { $arrayElemAt: [ "$comentarios", 0 ] } } }
])
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $arrayElemAt recibe [array, posición]</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array</h6>
</div>`,
    opts: ["$arrayElemAt", "$first", "$getElement", "$indexOfArray"],
    ans: 0,
    exp: "$arrayElemAt devuelve el elemento en una posición específica: { $arrayElemAt: [ \"$array\", 0 ] }. La posición 0 es el primer elemento."
},

{
    unit: "MongoDB - VS Code Setup",
    diff: "easy",
    q: "¿Qué extensión de VS Code se usa para trabajar con MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Extensión oficial de MongoDB</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: instalación de herramientas</h6>
</div>`,
    opts: ["MongoDB for VS Code", "MongoDB Compass", "Mongo Shell", "MongoDB Atlas"],
    ans: 0,
    exp: "MongoDB for VS Code (creada por MongoDB) permite conectarse a bases de datos, ejecutar playgrounds y visualizar datos. Se instala desde el marketplace de VS Code."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "easy",
    q: "¿Qué extensión de archivo usan los playgrounds de MongoDB en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Extensión específica de MongoDB</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: archivos de MongoDB</h6>
</div>`,
    opts: [".mongodb", ".mongo", ".js", ".json"],
    ans: 0,
    exp: "Los playgrounds usan extensión .mongodb. VS Code los reconoce automáticamente y permite ejecutar código MongoDB con sintaxis resaltada."
},

{
    unit: "MongoDB - VS Code Connection",
    diff: "easy",
    q: "¿Qué comando se usa en VS Code para conectar a MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Conexión a base de datos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: configuración de conexión</h6>
</div>`,
    opts: ["Add MongoDB Connection", "Connect to Database", "New Connection", "MongoDB: Connect"],
    ans: 0,
    exp: "En la barra lateral de MongoDB, hacer clic en 'Add MongoDB Connection' o usar Ctrl+Shift+P → 'MongoDB: Add Connection'."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "¿Qué atajo de teclado ejecuta el código seleccionado en un playground de MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Ejecutar código</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: atajos de teclado</h6>
</div>`,
    opts: ["Ctrl+Enter (Cmd+Enter en Mac)", "F5", "Shift+Enter", "Ctrl+Shift+P"],
    ans: 0,
    exp: "Ctrl+Enter ejecuta el bloque seleccionado o la línea actual. También hay un botón 'Run' sobre cada bloque."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "Completa el playground para crear una base de datos 'escuela' y colección 'estudiantes' en VS Code:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('_______');
db.createCollection('_______');
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Primero la base, luego la colección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de bases y colecciones</h6>
</div>`,
    opts: ["escuela, estudiantes", "escuela, estudiante", "db, estudiantes", "test, estudiantes"],
    ans: 0,
    exp: "use('escuela') selecciona/crea la base de datos. createCollection('estudiantes') crea la colección. En playgrounds se usa use('nombre') con paréntesis."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "Completa el playground para insertar un documento en la colección 'estudiantes':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______({ nombre: "Ana", edad: 20 });
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Insert one document</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD en playground</h6>
</div>`,
    opts: ["insertOne", "insert", "add", "save"],
    ans: 0,
    exp: "insertOne() inserta un documento. insertMany() inserta múltiples. En playgrounds se puede ejecutar línea por línea con Ctrl+Enter."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "Completa el playground para encontrar todos los estudiantes mayores de 18 años:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______({ edad: { $gt: 18 } });
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Find documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consultas en playground</h6>
</div>`,
    opts: ["find", "select", "query", "get"],
    ans: 0,
    exp: "find() devuelve un cursor. En playgrounds, los resultados se muestran en una pestaña separada. Se puede usar .pretty() para formato legible."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "¿Qué comando en el playground muestra todas las colecciones de la base de datos actual?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Get collection names</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inspección de bases de datos</h6>
</div>`,
    opts: ["db.getCollectionNames()", "show collections", "listCollections", "db.collections()"],
    ans: 0,
    exp: "db.getCollectionNames() devuelve un array con los nombres de las colecciones. También funciona 'show collections' en la shell nativa."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "¿Qué comando en el playground elimina la colección 'estudiantes'?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Drop collection</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de colecciones</h6>
</div>`,
    opts: ["db.estudiantes.drop()", "db.dropCollection('estudiantes')", "db.estudiantes.remove()", "db.estudiantes.delete()"],
    ans: 0,
    exp: "db.estudiantes.drop() elimina la colección y todos sus índices. db.dropCollection('estudiantes') es equivalente."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para actualizar un estudiante y si no existe, crearlo:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______(
  { nombre: "Luis" },
  { $set: { edad: 22 } },
  { upsert: true }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Update with upsert option</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: upsert (update or insert)</h6>
</div>`,
    opts: ["updateOne", "update", "upsert", "save"],
    ans: 0,
    exp: "updateOne con { upsert: true } actualiza si existe, o inserta si no existe. updateMany hace lo mismo pero para múltiples documentos."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para eliminar todos los estudiantes con edad menor a 18:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______({ edad: { $lt: 18 } });
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Delete many documents</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación masiva</h6>
</div>`,
    opts: ["deleteMany", "remove", "delete", "drop"],
    ans: 0,
    exp: "deleteMany() elimina todos los documentos que cumplen el filtro. deleteOne() elimina solo el primero."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para crear un índice único en el campo 'email':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______({ email: 1 }, { unique: true });
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Create index with unique option</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices en playground</h6>
</div>`,
    opts: ["createIndex", "addIndex", "ensureIndex", "index"],
    ans: 0,
    exp: "createIndex() crea el índice. 1 = ascendente, -1 = descendente. { unique: true } previene emails duplicados."
},


{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para hacer una agregación que agrupe estudiantes por ciudad:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______([
  { $group: { _id: "$ciudad", total: { $sum: 1 } } }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Aggregation pipeline</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: aggregation en playground</h6>
</div>`,
    opts: ["aggregate", "group", "pipeline", "agg"],
    ans: 0,
    exp: "aggregate() ejecuta el pipeline. Los resultados se muestran como documentos en la salida del playground."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para hacer un join entre 'estudiantes' y 'cursos' usando studentId:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.aggregate([
  {
    $lookup: {
      from: "cursos",
      localField: "_id",
      foreignField: "estudianteId",
      as: "______"
    }
  }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Nombre del array de salida del join</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: joins en aggregation</h6>
</div>`,
    opts: ["cursos", "cursosMatriculados", "joinResult", "cursosData"],
    ans: 0,
    exp: "El campo 'as' define el nombre del array donde se guardan los documentos unidos. Puede ser cualquier nombre descriptivo."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "¿Qué comando en el playground muestra todas las bases de datos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Show databases in playground</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: administración de bases</h6>
</div>`,
    opts: ["show dbs", "db.adminCommand('listDatabases')", "db.getMongo().getDBNames()", "Todas las anteriores"],
    ans: 3,
    exp: "Las tres opciones funcionan en playgrounds. 'show dbs' es la más simple. db.adminCommand({listDatabases:1}) da más detalles."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para hacer una búsqueda de texto (requiere índice text):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.articulos._______({ $text: { $search: "mongodb" } });
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Find with text search</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda de texto</h6>
</div>`,
    opts: ["find", "search", "textSearch", "findText"],
    ans: 0,
    exp: "find() con operador $text realiza la búsqueda. Requiere índice de texto creado previamente con createIndex({ campo: 'text' })."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "medium",
    q: "¿Cómo se comenta una línea en un playground .mongodb?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Comentario en línea</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: sintaxis del playground</h6>
</div>`,
    opts: ["//", "#", "/*", "--"],
    ans: 0,
    exp: "Los playgrounds usan // para comentarios de una línea y /* */ para comentarios multilínea. La extensión .mongodb usa sintaxis similar a JavaScript."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para exportar resultados a JSON:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
const resultados = db.estudiantes.find().toArray();
_______
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Comando para exportar en VS Code</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: exportación de datos</h6>
</div>`,
    opts: ["console.log(JSON.stringify(resultados, null, 2))", "print(resultados)", "resultados", "export resultados"],
    ans: 0,
    exp: "console.log() imprime los resultados en la consola del playground. Se puede copiar la salida. También hay botón 'Export' en la pestaña de resultados."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "hard",
    q: "Completa el playground para crear una vista sobre estudiantes mayores de edad:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db._______("mayoresEdad", "estudiantes", [
  { $match: { edad: { $gte: 18 } } }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Create view</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: vistas en MongoDB</h6>
</div>`,
    opts: ["createView", "createCollection", "view", "create"],
    ans: 0,
    exp: "createView() crea una vista virtual. Las vistas son de solo lectura y se actualizan automáticamente con los datos de origen."
},

{
    unit: "MongoDB - VS Code Playground",
    diff: "easy",
    q: "¿Qué atajo de teclado abre la paleta de comandos en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">vscode&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Comandos de VS Code</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: navegación en VS Code</h6>
</div>`,
    opts: ["Ctrl+Shift+P", "Ctrl+P", "F1", "Todas las anteriores"],
    ans: 3,
    exp: "Ctrl+Shift+P y F1 abren la paleta de comandos. Desde ahí se pueden ejecutar 'MongoDB: Create Playground', 'MongoDB: Add Connection', etc."
},


// VS Code + Proyectos Reales

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para hacer un update que incremente la edad en 1 a todos los estudiantes:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______(
  { },
  { $inc: { edad: 1 } }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Update many with increment</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de actualización</h6>
</div>`,
    opts: ["updateMany", "updateAll", "update", "modifyMany"],
    ans: 0,
    exp: "$inc incrementa el valor numérico. updateMany con filtro vacío {} afecta a todos los documentos."
},


{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para renombrar el campo 'nombre' a 'nombreCompleto':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.updateMany(
  { },
  { $rename: { "nombre": "_______" } }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Nuevo nombre del campo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: renombrado de campos</h6>
</div>`,
    opts: ["nombreCompleto", "name", "fullName", "nuevoNombre"],
    ans: 0,
    exp: "$rename cambia el nombre del campo. El valor es el nombre antiguo, la clave es el nuevo nombre."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para eliminar el campo 'telefono' de todos los documentos:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.updateMany(
  { },
  { $unset: { "telefono": "_______" } }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: El valor puede ser cualquier string</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de campos</h6>
</div>`,
    opts: ["", "true", "1", "delete"],
    ans: 0,
    exp: "$unset elimina el campo. El valor (usualmente '') no importa, puede ser 0, null, o cualquier string."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para hacer un upsert que inserte o actualice:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.updateOne(
  { email: "juan@mail.com" },
  { $set: { nombre: "Juan", edad: 25 } },
  { _______ : true }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Opción para upsert</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: upsert (update or insert)</h6>
</div>`,
    opts: ["upsert", "insertIfNotFound", "create", "updateOrInsert"],
    ans: 0,
    exp: "upsert: true crea el documento si no existe. Si existe, lo actualiza con $set."
},


{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para agregar un elemento al array 'hobbies' sin duplicados:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.updateOne(
  { nombre: "Ana" },
  { $_______ : { hobbies: "lectura" } }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Add to set (no duplicados)</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array</h6>
</div>`,
    opts: ["addToSet", "push", "add", "appendToSet"],
    ans: 0,
    exp: "$addToSet agrega si el valor no existe en el array. $push agrega siempre (permite duplicados)."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para eliminar un elemento específico del array 'hobbies':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.updateOne(
  { nombre: "Ana" },
  { $_______ : { hobbies: "lectura" } }
);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Pull from array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array</h6>
</div>`,
    opts: ["pull", "pop", "remove", "delete"],
    ans: 0,
    exp: "$pull elimina todas las ocurrencias del valor especificado en el array. $pop elimina el primero o el último."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para obtener el tamaño del array 'hobbies':",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.aggregate([
  { $project: { cantidadHobbies: { $_______ : "$hobbies" } } }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Size of array</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operadores de array en aggregation</h6>
</div>`,
    opts: ["size", "length", "count", "cardinality"],
    ans: 0,
    exp: "$size devuelve el número de elementos del array. En $match se usa $expr y $gte para filtrar por tamaño mínimo."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para crear un índice compuesto (edad ascendente, nombre descendente):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.createIndex({
  edad: 1,
  nombre: _______
});
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Orden descendente</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: índices compuestos</h6>
</div>`,
    opts: ["-1", "desc", "0", "-1"],
    ans: 0,
    exp: "1 = ascendente, -1 = descendente. El orden de los campos en el índice afecta qué consultas lo usan."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para ver el plan de ejecución de una consulta:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes.find({ edad: { $gt: 18 } })._______("executionStats");
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Execution plan</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: optimización de consultas</h6>
</div>`,
    opts: ["explain", "plan", "analyze", "profile"],
    ans: 0,
    exp: ".explain('executionStats') muestra estadísticas de ejecución: documentos escaneados, tiempo, si usó índice."
},

{
    unit: "MongoDB - VS Code Projects",
    diff: "expert",
    q: "Completa el playground para hacer un bulkWrite (múltiples operaciones en una sola llamada):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
use('escuela');
db.estudiantes._______([
  { insertOne: { document: { nombre: "Luis", edad: 22 } } },
  { updateOne: { filter: { nombre: "Ana" }, update: { $set: { edad: 26 } } } },
  { deleteOne: { filter: { nombre: "Pedro" } } }
]);
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Bulk operations</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones por lotes</h6>
</div>`,
    opts: ["bulkWrite", "batchWrite", "bulk", "writeMany"],
    ans: 0,
    exp: "bulkWrite ejecuta múltiples operaciones en orden. Más eficiente que hacerlas individualmente porque reduce rondas de red."
},



     ];



registrarAsignatura('bd_no_estructurados', BANK.bd_no_estructurados);
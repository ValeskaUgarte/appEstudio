window.BANK = window.BANK || {};
BANK.bd_no_estructurados = [

    //SITUACION 1 CURSOS ONLINE

    {
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "easy",
    q: "Situación: Cursos online. Inserta un curso con _id: 1, nombre 'Introducción a MongoDB', instructor embebido y arreglo de estudiantes.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: usa insertOne con subdocumento e array embebido</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción con subdocumentos y arreglos</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').insertOne({ _id: 1, nombre: 'Introducción a MongoDB', instructor: { nombre: 'María López', correo: 'maria@edu.com' }, estudiantes: [] });",
        "db.getCollection('cursos').insert({ nombre: 'Introducción a MongoDB' });",
        "db.getCollection('cursos').insertMany({ _id: 1, nombre: 'Introducción a MongoDB' });",
        "db.cursos.add({ _id: 1, nombre: 'Introducción a MongoDB' });"
    ],
    ans: 0,
    exp: "Se usa insertOne() con el documento completo incluyendo subdocumento instructor y arreglo estudiantes embebido."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "easy",
    q: "Situación: Cursos online. Inserta tres cursos a la vez con distintos instructores usando un solo comando.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: inserción múltiple con un arreglo de documentos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción múltiple</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').insertMany([{ _id: 2, nombre: 'Introducción a BD' }, { _id: 3, nombre: 'Visualización de datos' }, { _id: 4, nombre: 'Datos NoSQL' }]);",
        "db.getCollection('cursos').insertOne([{ _id: 2 }, { _id: 3 }, { _id: 4 }]);",
        "db.getCollection('cursos').insert({ _id: 2 }, { _id: 3 }, { _id: 4 });",
        "db.getCollection('cursos').addMany([{ _id: 2 }, { _id: 3 }]);"
    ],
    ans: 0,
    exp: "insertMany() recibe un arreglo [] con todos los documentos a insertar en una sola operación."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "easy",
    q: "Situación: Cursos online. Obtén todos los cursos cuyo nombre sea 'Introducción a MongoDB'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: búsqueda por campo exacto</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con filtro simple</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').find({ nombre: 'Introducción a MongoDB' }).toArray();",
        "db.getCollection('cursos').find('Introducción a MongoDB');",
        "db.getCollection('cursos').search({ nombre: 'Introducción a MongoDB' });",
        "db.getCollection('cursos').findOne('Introducción a MongoDB');"
    ],
    ans: 0,
    exp: "find() recibe un objeto filtro con el campo y valor exacto a buscar."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "easy",
    q: "Situación: Cursos online. Actualiza el estado del curso con _id: 1 a 'finalizado'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: usa $set para modificar un campo específico</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización con operador $set</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $set: { estado: 'finalizado' } });",
        "db.getCollection('cursos').update({ _id: 1 }, { estado: 'finalizado' });",
        "db.getCollection('cursos').updateOne({ _id: 1 }, { estado: 'finalizado' });",
        "db.getCollection('cursos').set({ _id: 1 }, { estado: 'finalizado' });"
    ],
    ans: 0,
    exp: "updateOne() requiere el operador $set para modificar solo el campo indicado sin reemplazar todo el documento."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "medium",
    q: "Situación: Cursos online. Agrega un nuevo estudiante { nombre: 'Luis Rojas', progreso: 90 } al arreglo estudiantes del curso con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: operador para agregar elementos a un arreglo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de subdocumento en arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $push: { estudiantes: { nombre: 'Luis Rojas', progreso: 90 } } });",
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $set: { estudiantes: { nombre: 'Luis Rojas', progreso: 90 } } });",
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $add: { estudiantes: { nombre: 'Luis Rojas', progreso: 90 } } });",
        "db.getCollection('cursos').push({ _id: 1 }, { estudiantes: { nombre: 'Luis Rojas', progreso: 90 } });"
    ],
    ans: 0,
    exp: "$push agrega un nuevo elemento al final de un arreglo existente sin reemplazar los anteriores."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "medium",
    q: "Situación: Cursos online. Elimina al estudiante 'Ana Díaz' del arreglo estudiantes del curso con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: operador para eliminar elementos de un arreglo por condición</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de elemento en arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $pull: { estudiantes: { nombre: 'Ana Díaz' } } });",
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $pop: { estudiantes: { nombre: 'Ana Díaz' } } });",
        "db.getCollection('cursos').updateOne({ _id: 1 }, { $remove: { estudiantes: { nombre: 'Ana Díaz' } } });",
        "db.getCollection('cursos').deleteOne({ 'estudiantes.nombre': 'Ana Díaz' });"
    ],
    ans: 0,
    exp: "$pull elimina del arreglo todos los elementos que cumplan la condición indicada."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "medium",
    q: "Situación: Cursos online. Obtén los cursos donde al menos un estudiante tenga progreso mayor a 70.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para campo dentro de arreglo + operador de comparación</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro en campo de subdocumento dentro de arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').find({ 'estudiantes.progreso': { $gt: 70 } }).toArray();",
        "db.getCollection('cursos').find({ estudiantes: { progreso: { $gt: 70 } } }).toArray();",
        "db.getCollection('cursos').find({ 'estudiantes.progreso': { $gte: 70 } }).toArray();",
        "db.getCollection('cursos').find({ progreso: { $gt: 70 } }).toArray();"
    ],
    ans: 0,
    exp: "Se usa notación de punto 'estudiantes.progreso' para acceder al campo dentro del arreglo, y $gt para mayor estricto."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "hard",
    q: "Situación: Cursos online. Muestra la cantidad de estudiantes inscritos en cada curso.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: pipeline de agregación con $project y $size</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con operador de tamaño de arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').aggregate([{ $project: { nombre: 1, totalEstudiantes: { $size: '$estudiantes' } } }]);",
        "db.getCollection('cursos').aggregate([{ $count: { estudiantes: '$estudiantes' } }]);",
        "db.getCollection('cursos').find({}, { nombre: 1, totalEstudiantes: { $size: '$estudiantes' } });",
        "db.getCollection('cursos').aggregate([{ $group: { _id: '$nombre', total: { $sum: '$estudiantes' } } }]);"
    ],
    ans: 0,
    exp: "aggregate() con $project y $size permite calcular el tamaño de un arreglo y mostrarlo como campo nuevo."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "hard",
    q: "Situación: Cursos online. Calcula el progreso promedio de los estudiantes en cada curso.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $avg sobre un campo de arreglo de subdocumentos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con promedio sobre arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').aggregate([{ $project: { nombre: 1, promedioProgreso: { $avg: '$estudiantes.progreso' } } }]);",
        "db.getCollection('cursos').aggregate([{ $group: { _id: '$nombre', promedio: { $avg: '$progreso' } } }]);",
        "db.getCollection('cursos').aggregate([{ $project: { promedio: { $mean: '$estudiantes.progreso' } } }]);",
        "db.getCollection('cursos').find({}, { promedioProgreso: { $avg: '$estudiantes.progreso' } });"
    ],
    ans: 0,
    exp: "$avg sobre 'estudiantes.progreso' dentro de $project calcula el promedio del campo progreso en todo el arreglo embebido."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "easy",
    q: "Situación: Cursos online. Obtén todos los cursos ordenados por fecha de creación de más reciente a más antiguo.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: encadena .sort() con valor -1 para descendente</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con ordenamiento</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').find({}).sort({ fechaCreacion: -1 }).toArray();",
        "db.getCollection('cursos').find({}).sort({ fechaCreacion: 1 }).toArray();",
        "db.getCollection('cursos').find({}).orderBy({ fechaCreacion: -1 }).toArray();",
        "db.getCollection('cursos').sort({ fechaCreacion: -1 });"
    ],
    ans: 0,
    exp: ".sort({ campo: -1 }) ordena de mayor a menor (descendente). Con 1 sería ascendente."
},
{
    profe: true,
    unit: "MongoDB - Situación 1 (Cursos Online)",
    diff: "medium",
    q: "Situación: Cursos online. Muestra los cursos que tengan el campo correo dentro del subdocumento instructor.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: operador que verifica existencia de un campo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro con $exists en subdocumento</h6>
</div>`,
    opts: [
        "db.getCollection('cursos').find({ 'instructor.correo': { $exists: true } }).toArray();",
        "db.getCollection('cursos').find({ 'instructor.correo': { $has: true } }).toArray();",
        "db.getCollection('cursos').find({ instructor: { correo: { $exists: true } } }).toArray();",
        "db.getCollection('cursos').find({ 'instructor.correo': true }).toArray();"
    ],
    ans: 0,
    exp: "$exists: true verifica que el campo exista en el documento. Se usa notación de punto para llegar al campo del subdocumento."
},

//SITUACION 2 RESERVAS DE HOTEL

{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "easy",
    q: "Situación: Reservas de hotel. Inserta el documento base con _id: 1, huésped 'Luis Torres', dos habitaciones embebidas y estado 'confirmada'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertOne con subdocumento huesped y arreglo habitaciones</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción con subdocumentos y arreglos</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').insertOne({ _id: 1, huesped: { nombre: 'Luis Torres', correo: 'luis@email.com' }, habitaciones: [{ tipo: 'Suite', precioPorNoche: 120000, noches: 2 }], fechaIngreso: ISODate('2025-07-01'), estado: 'confirmada' });",
        "db.getCollection('reservas').insert({ huesped: 'Luis Torres', habitaciones: 'Suite' });",
        "db.getCollection('reservas').insertMany({ _id: 1, huesped: { nombre: 'Luis Torres' } });",
        "db.reservas.add({ _id: 1, huesped: 'Luis Torres' });"
    ],
    ans: 0,
    exp: "insertOne() con subdocumento huesped embebido y arreglo habitaciones con sus campos tipo, precioPorNoche y noches."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "easy",
    q: "Situación: Reservas de hotel. Obtén todas las reservas que incluyan una habitación de tipo 'Suite'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para campo dentro de arreglo embebido</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con filtro en arreglo de subdocumentos</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').find({ 'habitaciones.tipo': 'Suite' }).toArray();",
        "db.getCollection('reservas').find({ habitaciones: 'Suite' }).toArray();",
        "db.getCollection('reservas').find({ tipo: 'Suite' }).toArray();",
        "db.getCollection('reservas').find({ habitaciones: { tipo: 'Suite' } }).toArray();"
    ],
    ans: 0,
    exp: "Para buscar dentro de un arreglo de subdocumentos se usa notación de punto: 'habitaciones.tipo'."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "easy",
    q: "Situación: Reservas de hotel. Cambia el estado de la reserva con _id: 1 a 'cancelada'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set para modificar solo el campo estado</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de campo simple</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $set: { estado: 'cancelada' } });",
        "db.getCollection('reservas').update({ _id: 1 }, { estado: 'cancelada' });",
        "db.getCollection('reservas').updateOne({ _id: 1 }, { estado: 'cancelada' });",
        "db.getCollection('reservas').set({ _id: 1 }, { estado: 'cancelada' });"
    ],
    ans: 0,
    exp: "updateOne() con $set modifica solo el campo indicado sin afectar el resto del documento."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "medium",
    q: "Situación: Reservas de hotel. Agrega la habitación { tipo: 'Suite', precioPorNoche: 120000, noches: 1 } a la reserva con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $push agrega elementos a un arreglo existente</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $push: { habitaciones: { tipo: 'Suite', precioPorNoche: 120000, noches: 1 } } });",
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $set: { habitaciones: { tipo: 'Suite' } } });",
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $add: { habitaciones: { tipo: 'Suite' } } });",
        "db.getCollection('reservas').push({ _id: 1 }, { habitaciones: { tipo: 'Suite' } });"
    ],
    ans: 0,
    exp: "$push añade el nuevo subdocumento al arreglo habitaciones sin eliminar las habitaciones anteriores."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "medium",
    q: "Situación: Reservas de hotel. Elimina la habitación de tipo 'Individual' de la reserva con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull elimina elementos de un arreglo que cumplan una condición</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de elemento en arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $pull: { habitaciones: { tipo: 'Individual' } } });",
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $pop: { habitaciones: { tipo: 'Individual' } } });",
        "db.getCollection('reservas').updateOne({ _id: 1 }, { $remove: { habitaciones: { tipo: 'Individual' } } });",
        "db.getCollection('reservas').deleteOne({ 'habitaciones.tipo': 'Individual' });"
    ],
    ans: 0,
    exp: "$pull elimina del arreglo todos los subdocumentos que coincidan con la condición { tipo: 'Individual' }."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "hard",
    q: "Situación: Reservas de hotel. Calcula el total de cada reserva (precioPorNoche × noches) y muestra las que superen los 200000.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: pipeline con $project + $map + $multiply, luego $match</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con cálculo sobre arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').aggregate([{ $project: { huesped: 1, total: { $sum: { $map: { input: '$habitaciones', as: 'hab', in: { $multiply: ['$$hab.precioPorNoche', '$$hab.noches'] } } } } } }, { $match: { total: { $gt: 200000 } } }]);",
        "db.getCollection('reservas').aggregate([{ $match: { total: { $gt: 200000 } } }]);",
        "db.getCollection('reservas').find({ total: { $gt: 200000 } }).toArray();",
        "db.getCollection('reservas').aggregate([{ $group: { _id: '$huesped', total: { $sum: '$precioPorNoche' } } }, { $match: { total: { $gt: 200000 } } }]);"
    ],
    ans: 0,
    exp: "Se usa $map para iterar el arreglo habitaciones, $multiply para precio × noches, $sum para sumar todo, y $match para filtrar."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "medium",
    q: "Situación: Reservas de hotel. Obtén reservas cuya fechaIngreso esté entre el 2025-07-01 y el 2025-09-30.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $gte y $lte para rango de fechas con ISODate</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro por rango de fechas</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').find({ fechaIngreso: { $gte: ISODate('2025-07-01'), $lte: ISODate('2025-09-30') } }).toArray();",
        "db.getCollection('reservas').find({ fechaIngreso: { $gt: '2025-07-01', $lt: '2025-09-30' } }).toArray();",
        "db.getCollection('reservas').find({ fechaIngreso: { between: ['2025-07-01', '2025-09-30'] } }).toArray();",
        "db.getCollection('reservas').find({ fechaIngreso: ISODate('2025-07-01') }).toArray();"
    ],
    ans: 0,
    exp: "$gte (mayor o igual) y $lte (menor o igual) definen un rango. Las fechas deben ir con ISODate() para comparación correcta."
},
{
    profe: true,
    unit: "MongoDB - Situación 2 (Reservas de Hotel)",
    diff: "easy",
    q: "Situación: Reservas de hotel. Busca reservas donde el nombre del huésped contenga 'Luis'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $regex para búsqueda parcial de texto, $options: 'i' para ignorar mayúsculas</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda con expresión regular en subdocumento</h6>
</div>`,
    opts: [
        "db.getCollection('reservas').find({ 'huesped.nombre': { $regex: 'Luis', $options: 'i' } }).toArray();",
        "db.getCollection('reservas').find({ 'huesped.nombre': 'Luis' }).toArray();",
        "db.getCollection('reservas').find({ huesped: { nombre: /Luis/ } }).toArray();",
        "db.getCollection('reservas').find({ nombre: { $contains: 'Luis' } }).toArray();"
    ],
    ans: 0,
    exp: "$regex permite búsqueda parcial de texto. $options: 'i' hace la búsqueda insensible a mayúsculas/minúsculas."
},


//SITUACION 3 PEDIDOS DE COMIDA

{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "easy",
    q: "Situación: Pedidos de comida. Inserta el pedido base con _id: 1, cliente 'Sofía Rojas', platos embebidos Pizza y Bebida, y estado 'en preparación'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertOne con subdocumento cliente y arreglo platos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción con subdocumentos y arreglos</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').insertOne({ _id: 1, cliente: { nombre: 'Sofía Rojas', direccion: 'Av. Siempre Viva 123' }, platos: [{ nombre: 'Pizza', cantidad: 1, precio: 10000 }, { nombre: 'Bebida', cantidad: 2, precio: 2000 }], fecha: ISODate('2025-06-20'), estado: 'en preparación' });",
        "db.getCollection('pedidos').insert({ cliente: 'Sofía Rojas', platos: 'Pizza' });",
        "db.getCollection('pedidos').insertMany({ _id: 1, cliente: { nombre: 'Sofía Rojas' } });",
        "db.pedidos.add({ _id: 1, cliente: 'Sofía Rojas' });"
    ],
    ans: 0,
    exp: "insertOne() con subdocumento cliente embebido, arreglo platos con nombre, cantidad y precio, y fecha con ISODate."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "easy",
    q: "Situación: Pedidos de comida. Obtén todos los pedidos que incluyan el plato 'Pizza'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para campo nombre dentro del arreglo platos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro en campo de arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').find({ 'platos.nombre': 'Pizza' }).toArray();",
        "db.getCollection('pedidos').find({ platos: 'Pizza' }).toArray();",
        "db.getCollection('pedidos').find({ nombre: 'Pizza' }).toArray();",
        "db.getCollection('pedidos').find({ platos: { nombre: 'Pizza' } }).toArray();"
    ],
    ans: 0,
    exp: "Notación de punto 'platos.nombre' busca dentro de cada elemento del arreglo platos el campo nombre igual a 'Pizza'."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "easy",
    q: "Situación: Pedidos de comida. Cambia el estado del pedido con _id: 1 a 'entregado'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de campo simple</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $set: { estado: 'entregado' } });",
        "db.getCollection('pedidos').update({ _id: 1 }, { estado: 'entregado' });",
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { estado: 'entregado' });",
        "db.getCollection('pedidos').set({ _id: 1 }, { estado: 'entregado' });"
    ],
    ans: 0,
    exp: "updateOne() con $set modifica solo el campo estado sin reemplazar el documento completo."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "medium",
    q: "Situación: Pedidos de comida. Agrega el plato { nombre: 'Postre', cantidad: 1, precio: 3000 } al pedido con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $push para agregar elementos al arreglo platos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $push: { platos: { nombre: 'Postre', cantidad: 1, precio: 3000 } } });",
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $set: { platos: { nombre: 'Postre' } } });",
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $add: { platos: { nombre: 'Postre' } } });",
        "db.getCollection('pedidos').push({ _id: 1 }, { platos: { nombre: 'Postre' } });"
    ],
    ans: 0,
    exp: "$push agrega el nuevo subdocumento al arreglo platos manteniendo los platos anteriores intactos."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "medium",
    q: "Situación: Pedidos de comida. Elimina el plato 'Bebida' del pedido con _id: 1.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull elimina elementos del arreglo por condición</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de elemento en arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $pull: { platos: { nombre: 'Bebida' } } });",
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $pop: { platos: { nombre: 'Bebida' } } });",
        "db.getCollection('pedidos').updateOne({ _id: 1 }, { $remove: { platos: { nombre: 'Bebida' } } });",
        "db.getCollection('pedidos').deleteOne({ 'platos.nombre': 'Bebida' });"
    ],
    ans: 0,
    exp: "$pull elimina del arreglo platos todos los elementos donde nombre sea 'Bebida'."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "hard",
    q: "Situación: Pedidos de comida. Calcula el total de cada pedido (cantidad × precio) y muestra los que superen los 15000.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $map para iterar platos, $multiply para cantidad × precio, $sum para total, $match para filtrar</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con cálculo sobre arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').aggregate([{ $project: { cliente: 1, total: { $sum: { $map: { input: '$platos', as: 'plato', in: { $multiply: ['$$plato.cantidad', '$$plato.precio'] } } } } } }, { $match: { total: { $gt: 15000 } } }]);",
        "db.getCollection('pedidos').aggregate([{ $match: { total: { $gt: 15000 } } }]);",
        "db.getCollection('pedidos').find({ total: { $gt: 15000 } }).toArray();",
        "db.getCollection('pedidos').aggregate([{ $group: { _id: '$cliente', total: { $sum: '$precio' } } }, { $match: { total: { $gt: 15000 } } }]);"
    ],
    ans: 0,
    exp: "$map recorre el arreglo platos, $multiply multiplica cantidad × precio por cada plato, $sum suma todo y $match filtra los mayores a 15000."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "medium",
    q: "Situación: Pedidos de comida. Muestra la cantidad de platos en cada pedido.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $project con $size sobre el arreglo platos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con tamaño de arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').aggregate([{ $project: { cliente: 1, totalPlatos: { $size: '$platos' } } }]);",
        "db.getCollection('pedidos').aggregate([{ $count: { platos: '$platos' } }]);",
        "db.getCollection('pedidos').find({}, { totalPlatos: { $size: '$platos' } });",
        "db.getCollection('pedidos').aggregate([{ $group: { _id: '$cliente', total: { $sum: '$platos' } } }]);"
    ],
    ans: 0,
    exp: "$size dentro de $project calcula el número de elementos en el arreglo platos para cada documento."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "easy",
    q: "Situación: Pedidos de comida. Obtén los pedidos realizados exactamente en la fecha 2025-06-20.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: filtro exacto con ISODate</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro por fecha exacta</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').find({ fecha: ISODate('2025-06-20') }).toArray();",
        "db.getCollection('pedidos').find({ fecha: '2025-06-20' }).toArray();",
        "db.getCollection('pedidos').find({ fecha: { $eq: '2025-06-20' } }).toArray();",
        "db.getCollection('pedidos').find({ fecha: new Date('2025-06-20') }).toArray();"
    ],
    ans: 0,
    exp: "ISODate() es el formato correcto para comparar fechas en MongoDB. Usar solo el string de texto no funciona para comparación de fechas."
},
{
    profe: true,
    unit: "MongoDB - Situación 3 (Pedidos de Comida)",
    diff: "easy",
    q: "Situación: Pedidos de comida. Obtén los pedidos donde la dirección del cliente contenga 'Siempre Viva'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $regex con notación de punto para subdocumento cliente</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: búsqueda con expresión regular en subdocumento</h6>
</div>`,
    opts: [
        "db.getCollection('pedidos').find({ 'cliente.direccion': { $regex: 'Siempre Viva', $options: 'i' } }).toArray();",
        "db.getCollection('pedidos').find({ direccion: { $contains: 'Siempre Viva' } }).toArray();",
        "db.getCollection('pedidos').find({ 'cliente.direccion': 'Siempre Viva' }).toArray();",
        "db.getCollection('pedidos').find({ cliente: { direccion: /Siempre Viva/ } }).toArray();"
    ],
    ans: 0,
    exp: "$regex busca coincidencia parcial en texto. $options: 'i' ignora mayúsculas. Notación de punto accede al subdocumento cliente."
},

//CENTROMEDIC0

{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Crea la base de datos centro_medico y selecciónala para trabajar.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: comando para cambiar o crear una base de datos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: gestión de base de datos</h6>
</div>`,
    opts: [
        "use('centro_medico');",
        "db.createDatabase('centro_medico');",
        "create database centro_medico;",
        "db.use('centro_medico');"
    ],
    ans: 0,
    exp: "use('nombre_bd') selecciona la base de datos. Si no existe, MongoDB la crea automáticamente al insertar el primer documento."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Inserta un paciente con rut, nombre, edad, dirección embebida, teléfono e historial con al menos una atención.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertOne con subdocumento direccion y arreglo historial</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción con múltiples subdocumentos</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').insertOne({ rut: '12.345.678-9', nombre: 'María González', edad: 45, direccion: { ciudad: 'Santiago', comuna: 'Maipú' }, telefono: '+56912345678', historial: [{ fecha: '2026-03-10', motivo: 'Dolor abdominal', diagnostico: 'Gastritis', tratamiento: 'Omeprazol', medico: 'Dr. Pérez' }] });",
        "db.getCollection('pacientes').insert({ rut: '12.345.678-9', nombre: 'María González' });",
        "db.getCollection('pacientes').insertMany({ rut: '12.345.678-9', historial: [] });",
        "db.pacientes.add({ rut: '12.345.678-9', nombre: 'María González' });"
    ],
    ans: 0,
    exp: "insertOne() con subdocumento direccion embebido y arreglo historial con los campos fecha, motivo, diagnóstico, tratamiento y médico."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Obtén todos los pacientes de la colección.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find sin filtros devuelve todos los documentos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura sin filtro</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').find({}).toArray();",
        "db.getCollection('pacientes').findAll();",
        "db.getCollection('pacientes').find();",
        "db.getCollection('pacientes').getAll().toArray();"
    ],
    ans: 0,
    exp: "find({}) con filtro vacío retorna todos los documentos. .toArray() lo muestra correctamente en Compass."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Busca un paciente por su RUT exacto '12.345.678-9'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: filtro exacto por campo rut</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con filtro simple</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').find({ rut: '12.345.678-9' }).toArray();",
        "db.getCollection('pacientes').findOne('12.345.678-9');",
        "db.getCollection('pacientes').find({ id: '12.345.678-9' }).toArray();",
        "db.getCollection('pacientes').search({ rut: '12.345.678-9' });"
    ],
    ans: 0,
    exp: "find() con filtro { rut: '12.345.678-9' } busca el documento exacto. findOne() también sirve pero find().toArray() es más explícito."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Lista los pacientes que viven en la comuna 'Maipú'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para acceder al campo dentro del subdocumento direccion</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro en subdocumento embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').find({ 'direccion.comuna': 'Maipú' }).toArray();",
        "db.getCollection('pacientes').find({ direccion: { comuna: 'Maipú' } }).toArray();",
        "db.getCollection('pacientes').find({ comuna: 'Maipú' }).toArray();",
        "db.getCollection('pacientes').find({ 'direccion.comuna': { $eq: 'Maipú' } }).toArray();"
    ],
    ans: 0,
    exp: "Notación de punto 'direccion.comuna' accede al campo comuna dentro del subdocumento embebido direccion."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "medium",
    q: "Centro médico. Muestra los pacientes que tengan el diagnóstico 'Gastritis' en alguna atención de su historial.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para campo dentro del arreglo historial</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: filtro en arreglo de subdocumentos</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').find({ 'historial.diagnostico': 'Gastritis' }).toArray();",
        "db.getCollection('pacientes').find({ historial: { diagnostico: 'Gastritis' } }).toArray();",
        "db.getCollection('pacientes').find({ diagnostico: 'Gastritis' }).toArray();",
        "db.getCollection('pacientes').find({ 'historial.diagnostico': { $has: 'Gastritis' } }).toArray();"
    ],
    ans: 0,
    exp: "MongoDB automáticamente busca en todos los elementos del arreglo historial cuando se usa notación de punto 'historial.diagnostico'."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "medium",
    q: "Centro médico. Muestra solo el historial médico del paciente con rut '12.345.678-9', sin mostrar el _id.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: segundo parámetro de find() es proyección, 1 incluye y 0 excluye</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: proyección de campos en lectura</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').find({ rut: '12.345.678-9' }, { historial: 1, _id: 0 }).toArray();",
        "db.getCollection('pacientes').find({ rut: '12.345.678-9' }, { historial: true }).toArray();",
        "db.getCollection('pacientes').find({ rut: '12.345.678-9' }).select('historial').toArray();",
        "db.getCollection('pacientes').find({ rut: '12.345.678-9' }, { exclude: '_id', include: 'historial' }).toArray();"
    ],
    ans: 0,
    exp: "El segundo parámetro de find() es la proyección: 1 incluye el campo, 0 lo excluye. _id se excluye explícitamente con 0."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Actualiza el teléfono del paciente con rut '12.345.678-9' a '+56999999999'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set para modificar solo el campo telefono</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de campo simple</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9' }, { $set: { telefono: '+56999999999' } });",
        "db.getCollection('pacientes').update({ rut: '12.345.678-9' }, { telefono: '+56999999999' });",
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9' }, { telefono: '+56999999999' });",
        "db.getCollection('pacientes').set({ rut: '12.345.678-9' }, { telefono: '+56999999999' });"
    ],
    ans: 0,
    exp: "updateOne() con $set actualiza solo el campo indicado. Sin $set se reemplazaría todo el documento."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "medium",
    q: "Centro médico. Agrega una nueva atención médica al historial del paciente con rut '15.678.432-1'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $push para agregar al arreglo historial</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $push: { historial: { fecha: '2026-04-15', motivo: 'Control general', diagnostico: 'Saludable', tratamiento: 'Ninguno', medico: 'Dra. Soto' } } });",
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $set: { historial: { fecha: '2026-04-15' } } });",
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $add: { historial: { fecha: '2026-04-15' } } });",
        "db.getCollection('pacientes').push({ rut: '15.678.432-1' }, { historial: { fecha: '2026-04-15' } });"
    ],
    ans: 0,
    exp: "$push agrega el nuevo subdocumento de atención al arreglo historial sin eliminar las atenciones anteriores."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "hard",
    q: "Centro médico. Modifica el diagnóstico de la atención del '2026-03-10' del paciente con rut '12.345.678-9' a 'Gastritis crónica'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: operador $ posicional para modificar el elemento del arreglo que coincidió en el filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de campo dentro de subdocumento en arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9', 'historial.fecha': '2026-03-10' }, { $set: { 'historial.$.diagnostico': 'Gastritis crónica' } });",
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9' }, { $set: { 'historial.diagnostico': 'Gastritis crónica' } });",
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9' }, { $set: { historial: { diagnostico: 'Gastritis crónica' } } });",
        "db.getCollection('pacientes').updateOne({ rut: '12.345.678-9', fecha: '2026-03-10' }, { $set: { diagnostico: 'Gastritis crónica' } });"
    ],
    ans: 0,
    exp: "El operador posicional $ hace referencia al elemento del arreglo que coincidió con la condición del filtro. 'historial.$.diagnostico' modifica solo ese elemento."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "easy",
    q: "Centro médico. Elimina el paciente con rut '11.111.111-1'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: deleteOne elimina el primer documento que coincida</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de documento</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').deleteOne({ rut: '11.111.111-1' });",
        "db.getCollection('pacientes').remove({ rut: '11.111.111-1' });",
        "db.getCollection('pacientes').drop({ rut: '11.111.111-1' });",
        "db.getCollection('pacientes').delete({ rut: '11.111.111-1' });"
    ],
    ans: 0,
    exp: "deleteOne() elimina el primer documento que coincida con el filtro. remove() está obsoleto en versiones recientes de MongoDB."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "medium",
    q: "Centro médico. Elimina la atención del '2026-02-15' del historial del paciente con rut '15.678.432-1'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull con la condición de fecha para eliminar el subdocumento del arreglo</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de elemento en arreglo embebido</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $pull: { historial: { fecha: '2026-02-15' } } });",
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $pop: { historial: { fecha: '2026-02-15' } } });",
        "db.getCollection('pacientes').deleteOne({ rut: '15.678.432-1', 'historial.fecha': '2026-02-15' });",
        "db.getCollection('pacientes').updateOne({ rut: '15.678.432-1' }, { $remove: { historial: { fecha: '2026-02-15' } } });"
    ],
    ans: 0,
    exp: "$pull con la condición { fecha: '2026-02-15' } elimina del arreglo historial el subdocumento que tenga esa fecha."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "medium",
    q: "Centro médico. Elimina todos los pacientes que no tengan ninguna atención en su historial.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $size para verificar arreglo vacío, deleteMany para eliminar múltiples</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación múltiple con condición en arreglo</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').deleteMany({ historial: { $size: 0 } });",
        "db.getCollection('pacientes').deleteMany({ historial: [] });",
        "db.getCollection('pacientes').deleteMany({ historial: { $empty: true } });",
        "db.getCollection('pacientes').remove({ historial: { $size: 0 } });"
    ],
    ans: 0,
    exp: "deleteMany() elimina todos los documentos que coincidan. $size: 0 filtra los que tienen el arreglo historial vacío."
},
{
    profe: true,
    unit: "MongoDB - Centro Médico (Fichas Clínicas)",
    diff: "hard",
    q: "Centro médico. Muestra los pacientes con más de 2 atenciones médicas en su historial, ordenados de mayor a menor cantidad.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $project con $size, luego $match con $gt y finalmente $sort</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: agregación con filtro y ordenamiento</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').aggregate([{ $project: { nombre: 1, totalAtenciones: { $size: '$historial' } } }, { $match: { totalAtenciones: { $gt: 2 } } }, { $sort: { totalAtenciones: -1 } }]);",
        "db.getCollection('pacientes').find({ historial: { $gt: 2 } }).sort({ historial: -1 }).toArray();",
        "db.getCollection('pacientes').aggregate([{ $match: { historial: { $gt: 2 } } }, { $sort: { historial: -1 } }]);",
        "db.getCollection('pacientes').aggregate([{ $group: { _id: '$nombre', total: { $sum: '$historial' } } }, { $sort: { total: -1 } }]);"
    ],
    ans: 0,
    exp: "Pipeline de 3 etapas: $project calcula el tamaño, $match filtra los mayores a 2, $sort ordena descendente por totalAtenciones."
},


 //CONCEPTOS GENERALES NOSQL Y MONGODB

 {
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Qué tipo de base de datos es MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// ¿Cuál describe mejor a MongoDB?</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en cómo almacena los datos</h6>
</div>`,
    opts: [
        "Base de datos orientada a documentos que almacena datos en formato BSON (similar a JSON).",
        "Base de datos relacional que almacena datos en tablas con filas y columnas.",
        "Base de datos de grafos que almacena nodos y relaciones entre ellos.",
        "Base de datos clave-valor que solo almacena pares simples de llave y valor."
    ],
    ans: 0,
    exp: "MongoDB es una base de datos NoSQL orientada a documentos. Almacena datos en BSON (Binary JSON), lo que permite estructuras flexibles y anidadas sin esquema fijo."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Cuál es la diferencia principal entre una colección en MongoDB y una tabla en SQL?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// SQL → tabla | MongoDB → ?</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en si los documentos deben tener la misma estructura</h6>
</div>`,
    opts: [
        "Una colección no impone un esquema fijo, los documentos pueden tener distintos campos entre sí.",
        "Una colección siempre requiere que todos los documentos tengan exactamente los mismos campos.",
        "Una colección solo puede almacenar datos de tipo texto, no números ni fechas.",
        "Una colección equivale a una fila en SQL, no a una tabla completa."
    ],
    ans: 0,
    exp: "En SQL las tablas tienen esquema rígido (todas las filas deben seguir la misma estructura). En MongoDB una colección agrupa documentos que pueden tener campos distintos, lo que da flexibilidad para modelar datos variables."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Qué es un documento en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// { nombre: "Ana", edad: 30 } → esto es un...</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: equivalente a una fila en SQL</h6>
</div>`,
    opts: [
        "La unidad básica de datos en MongoDB, similar a un objeto JSON con pares campo-valor.",
        "Un archivo de texto plano que contiene las instrucciones de la base de datos.",
        "El equivalente a una base de datos completa en MongoDB.",
        "Una consulta guardada para reutilizarse en el futuro."
    ],
    ans: 0,
    exp: "Un documento es la unidad básica de datos en MongoDB, equivalente a una fila en SQL. Se representa como un objeto con pares campo-valor, y puede contener subdocumentos y arreglos anidados."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Para qué sirve el campo _id en un documento de MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// { _id: ObjectId('...'), nombre: "Ana" }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en identificación única</h6>
</div>`,
    opts: [
        "Es el identificador único de cada documento dentro de una colección. MongoDB lo genera automáticamente si no se especifica.",
        "Es un campo opcional que sirve solo para ordenar los documentos alfabéticamente.",
        "Es el nombre de la colección a la que pertenece el documento.",
        "Es un contador automático que indica cuántos documentos hay en la colección."
    ],
    ans: 0,
    exp: "_id es obligatorio y único por documento. Si no se especifica al insertar, MongoDB genera un ObjectId automáticamente. Equivale a la clave primaria (PRIMARY KEY) en SQL."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Qué ventaja tiene embeber subdocumentos (como instructor o cliente) dentro de un documento en lugar de usar una colección separada?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// { cliente: { nombre: "Ana", direccion: "..." } }</span>
<span style="color:#888;">// vs colección separada de clientes</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en cuántas consultas necesitas para obtener toda la información</h6>
</div>`,
    opts: [
        "Se obtiene toda la información en una sola consulta sin necesidad de hacer joins entre colecciones.",
        "Los subdocumentos embebidos ocupan menos espacio en disco que las colecciones separadas.",
        "Los subdocumentos embebidos permiten usar SQL directamente sobre esos datos.",
        "MongoDB solo puede hacer consultas sobre datos embebidos, no sobre colecciones relacionadas."
    ],
    ans: 0,
    exp: "Embeber datos relacionados en un mismo documento permite recuperar toda la información en una sola lectura. En SQL se necesitarían JOINs entre tablas. Es ideal cuando los datos siempre se consultan juntos."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Cuándo conviene usar un arreglo embebido (como historial o estudiantes) dentro de un documento?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// { historial: [ {fecha: ...}, {fecha: ...} ] }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en la relación entre el documento padre y los elementos del arreglo</h6>
</div>`,
    opts: [
        "Cuando los elementos del arreglo pertenecen exclusivamente al documento padre y siempre se consultan juntos.",
        "Cuando los elementos del arreglo se comparten entre muchos documentos distintos.",
        "Cuando el arreglo puede crecer indefinidamente sin ningún límite de tamaño.",
        "Cuando se necesita hacer consultas complejas de agregación sobre los elementos del arreglo."
    ],
    ans: 0,
    exp: "Los arreglos embebidos son ideales para datos de 'uno a muchos' donde los elementos pertenecen al documento padre (ej: atenciones de un paciente, platos de un pedido). Si los elementos se comparten entre documentos, es mejor usar referencias."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Qué diferencia hay entre insertOne() e insertMany() en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// insertOne({...}) vs insertMany([{...},{...}])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: observa qué recibe cada uno como parámetro</h6>
</div>`,
    opts: [
        "insertOne() inserta un solo documento, insertMany() recibe un arreglo e inserta múltiples documentos a la vez.",
        "insertOne() es más lento que insertMany() porque valida cada campo del documento.",
        "insertMany() solo funciona si todos los documentos tienen exactamente los mismos campos.",
        "insertOne() e insertMany() son equivalentes, la diferencia es solo sintáctica."
    ],
    ans: 0,
    exp: "insertOne() recibe un objeto {} e inserta un documento. insertMany() recibe un arreglo [] y permite insertar varios documentos en una sola operación, lo que es más eficiente que múltiples insertOne()."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Por qué es importante usar $set en updateOne() en lugar de pasar el documento directamente?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// ¿Qué pasa si haces esto?</span>
<span style="color:#888;">// updateOne({_id:1}, { estado: 'activo' })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en qué le pasa al resto de los campos del documento</h6>
</div>`,
    opts: [
        "Sin $set, MongoDB reemplaza el documento completo por el objeto pasado, perdiendo todos los demás campos.",
        "Sin $set, MongoDB lanza un error y no realiza ninguna modificación.",
        "Sin $set, MongoDB actualiza todos los documentos de la colección en lugar de solo uno.",
        "No hay diferencia, $set es solo una convención de estilo sin efecto real."
    ],
    ans: 0,
    exp: "Sin $set, updateOne() reemplaza el documento completo. Si haces updateOne({_id:1}, {estado:'activo'}), el documento quedará solo con {_id:1, estado:'activo'} y perderá todos los demás campos. $set modifica solo los campos especificados."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Cuál es la diferencia entre $push y $set al actualizar un arreglo embebido?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// $push vs $set sobre un arreglo</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en qué le pasa a los elementos anteriores del arreglo</h6>
</div>`,
    opts: [
        "$push agrega un elemento al arreglo conservando los existentes. $set reemplaza el arreglo completo por el nuevo valor.",
        "$push reemplaza el arreglo completo. $set agrega un elemento al final sin borrar los anteriores.",
        "$push y $set hacen lo mismo sobre arreglos, solo cambia la sintaxis.",
        "$push solo funciona con arreglos de números, $set funciona con cualquier tipo de dato."
    ],
    ans: 0,
    exp: "$push añade un elemento al final del arreglo sin tocar los anteriores. $set reemplaza el arreglo completo. Para agregar atenciones, platos o habitaciones sin perder los existentes, siempre se usa $push."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Para qué sirve el operador $pull en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// $pull: { estudiantes: { nombre: 'Ana' } }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: es la operación contraria a $push</h6>
</div>`,
    opts: [
        "Elimina del arreglo todos los elementos que cumplan la condición especificada.",
        "Extrae un elemento del arreglo y lo devuelve como resultado de la consulta.",
        "Elimina el arreglo completo del documento.",
        "Mueve un elemento de un arreglo a otro arreglo dentro del mismo documento."
    ],
    ans: 0,
    exp: "$pull elimina del arreglo todos los subdocumentos o valores que coincidan con la condición. Es la operación inversa de $push. deleteOne() elimina documentos completos, $pull elimina elementos dentro de un arreglo."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "hard",
    q: "¿Qué hace el operador posicional $ en una actualización como { $set: { 'historial.$.diagnostico': 'Nuevo' } }?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// updateOne(</span>
<span style="color:#888;">//   { rut: '...', 'historial.fecha': '2026-03-10' },</span>
<span style="color:#888;">//   { $set: { 'historial.$.diagnostico': 'Nuevo' } }</span>
<span style="color:#888;">// )</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: el $ actúa como un índice dinámico</h6>
</div>`,
    opts: [
        "Representa la posición del primer elemento del arreglo que coincidió con la condición del filtro, permitiendo modificar solo ese elemento.",
        "Representa todos los elementos del arreglo y aplica la modificación a cada uno de ellos.",
        "Es una variable global que siempre apunta al último elemento insertado en el arreglo.",
        "Indica que se debe crear un nuevo elemento en el arreglo si no existe ninguno que coincida."
    ],
    ans: 0,
    exp: "El operador $ posicional hace referencia al índice del elemento que coincidió con la condición del filtro. Permite modificar un campo dentro de un subdocumento específico del arreglo sin afectar los demás elementos."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Qué diferencia hay entre deleteOne() y deleteMany() en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// deleteOne({ estado: 'inactivo' })</span>
<span style="color:#888;">// deleteMany({ estado: 'inactivo' })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en cuántos documentos elimina cada uno</h6>
</div>`,
    opts: [
        "deleteOne() elimina el primer documento que coincida con el filtro. deleteMany() elimina todos los documentos que coincidan.",
        "deleteOne() elimina todos los documentos de la colección. deleteMany() elimina solo el último.",
        "deleteOne() requiere el campo _id obligatoriamente. deleteMany() acepta cualquier filtro.",
        "No hay diferencia funcional, deleteMany() es simplemente un alias más moderno de deleteOne()."
    ],
    ans: 0,
    exp: "deleteOne() elimina un solo documento (el primero que coincida). deleteMany() elimina todos los que coincidan con el filtro. Para limpiar registros masivos como pacientes sin historial se usa deleteMany()."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "hard",
    q: "¿Qué hace un pipeline de agregación en MongoDB y en qué se diferencia de un find()?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// aggregate([{ $project: {...} }, { $match: {...} }])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en transformaciones encadenadas</h6>
</div>`,
    opts: [
        "Un pipeline procesa los documentos en etapas secuenciales donde la salida de una etapa es la entrada de la siguiente, permitiendo transformar, calcular y filtrar datos.",
        "Un pipeline es simplemente un find() con múltiples filtros aplicados al mismo tiempo.",
        "Un pipeline solo sirve para contar documentos, no puede calcular sumas ni promedios.",
        "Un pipeline funciona igual que find() pero es más lento porque procesa los datos dos veces."
    ],
    ans: 0,
    exp: "aggregate() procesa documentos en etapas ($project, $match, $sort, $group). Cada etapa transforma los datos y los pasa a la siguiente. find() solo filtra y proyecta, no puede calcular campos nuevos ni hacer operaciones matemáticas sobre arreglos."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "hard",
    q: "¿Para qué se usa $map dentro de un pipeline de agregación en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// $map: { input: '$platos', as: 'p', in: { $multiply: ['$$p.cantidad', '$$p.precio'] } }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: recorre cada elemento del arreglo y aplica una operación</h6>
</div>`,
    opts: [
        "Itera sobre cada elemento de un arreglo y aplica una expresión, retornando un nuevo arreglo con los resultados transformados.",
        "Crea un mapa de índices para acelerar las búsquedas dentro de arreglos embebidos.",
        "Une dos arreglos de documentos distintos en uno solo.",
        "Filtra los elementos de un arreglo que cumplan una condición, eliminando los que no la cumplan."
    ],
    ans: 0,
    exp: "$map recorre cada elemento del arreglo (como $platos), aplica la expresión definida en 'in' a cada uno (como multiplicar cantidad × precio), y retorna un nuevo arreglo con los resultados. Luego $sum puede sumar ese arreglo."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Qué hace $exists: true en una consulta de MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// find({ 'instructor.correo': { $exists: true } })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: útil en colecciones donde no todos los documentos tienen los mismos campos</h6>
</div>`,
    opts: [
        "Filtra los documentos que tengan ese campo presente, independientemente de su valor.",
        "Verifica que el campo exista y que su valor no sea null ni vacío.",
        "Crea el campo en los documentos que no lo tengan con un valor por defecto.",
        "Lanza un error si el campo no existe en algún documento de la colección."
    ],
    ans: 0,
    exp: "$exists: true retorna solo los documentos que tienen ese campo definido. Es útil en MongoDB porque al no tener esquema fijo, algunos documentos pueden no tener ciertos campos. $exists: false retorna los que no tienen el campo."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Qué hace $regex en una consulta de MongoDB y cuándo se usa?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// find({ nombre: { $regex: 'Luis', $options: 'i' } })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: búsqueda parcial de texto</h6>
</div>`,
    opts: [
        "Permite buscar documentos cuyo campo contenga un patrón de texto, sin necesitar coincidencia exacta.",
        "Convierte el valor del campo a una expresión regular antes de guardarlo.",
        "Solo funciona con campos de tipo ObjectId, no con texto normal.",
        "Reemplaza todos los valores del campo que coincidan con el patrón por un nuevo valor."
    ],
    ans: 0,
    exp: "$regex permite búsqueda de texto parcial usando expresiones regulares. $options: 'i' hace la búsqueda insensible a mayúsculas. Es útil para buscar por nombre, dirección o cualquier campo de texto sin conocer el valor exacto."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Para qué sirve el método .sort() encadenado a un find() en MongoDB?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// find({}).sort({ fechaCreacion: -1 })</span>
<span style="color:#888;">// ¿qué significa el -1?</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: 1 es ascendente, -1 es descendente</h6>
</div>`,
    opts: [
        "Ordena los documentos resultantes según el campo indicado. 1 es orden ascendente (A→Z, antiguo→reciente) y -1 es descendente (Z→A, reciente→antiguo).",
        "Limita la cantidad de documentos retornados al número indicado (1 o -1).",
        "Agrupa los documentos por el campo indicado antes de retornarlos.",
        ".sort() solo funciona con campos de tipo fecha, no con texto ni números."
    ],
    ans: 0,
    exp: ".sort({ campo: 1 }) ordena ascendente, .sort({ campo: -1 }) ordena descendente. Se encadena después de find() y antes de .toArray(). Funciona con fechas, números y texto."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "easy",
    q: "¿Cuál es la diferencia entre usar MongoDB Compass y VS Code con la extensión MongoDB para trabajar con bases de datos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// Compass = GUI visual</span>
<span style="color:#888;">// VS Code + extensión = editor + playground</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en el flujo de trabajo de un desarrollador</h6>
</div>`,
    opts: [
        "Compass es una interfaz gráfica visual ideal para explorar datos. VS Code con la extensión MongoDB Playground permite escribir y ejecutar scripts .js directamente desde el editor de código.",
        "Compass permite escribir código JavaScript avanzado. VS Code solo muestra los datos en formato tabla sin permitir consultas.",
        "Son exactamente iguales en funcionalidades, la diferencia es solo estética.",
        "VS Code solo sirve para conectarse a MongoDB Atlas en la nube, Compass solo para conexiones locales."
    ],
    ans: 0,
    exp: "Compass es ideal para explorar visualmente colecciones, ver documentos y ejecutar queries rápidas. VS Code con MongoDB for VS Code permite crear archivos .mongodb, escribir scripts completos con sintaxis resaltada y ejecutarlos como playground, lo que es más cómodo para desarrollar."
},
{
    profe: true,
    unit: "MongoDB - Conceptos NoSQL",
    diff: "medium",
    q: "¿Qué ventaja tiene usar ISODate() para almacenar fechas en MongoDB en lugar de guardarlas como string de texto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// ISODate('2025-07-01') vs '2025-07-01'</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en qué operaciones puedes hacer con fechas reales vs texto</h6>
</div>`,
    opts: [
        "ISODate almacena la fecha como tipo Date real, permitiendo comparaciones de rango ($gte, $lte), ordenamiento cronológico y cálculos de diferencia entre fechas.",
        "ISODate ocupa menos espacio en disco que un string de texto con la misma fecha.",
        "ISODate convierte automáticamente la fecha al idioma del usuario cuando se muestra.",
        "No hay diferencia práctica, MongoDB trata los strings de fecha igual que ISODate."
    ],
    ans: 0,
    exp: "Guardar fechas como ISODate() permite usar operadores de comparación ($gte, $lte) para filtrar por rangos de fechas, ordenarlas cronológicamente con .sort() y hacer cálculos. Con strings de texto solo se puede comparar exactamente, no por rango."
},

{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Qué extensión necesitas instalar en VS Code para trabajar con MongoDB Playground?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// Marketplace de VS Code</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: es la extensión oficial de MongoDB Inc.</h6>
</div>`,
    opts: [
        "MongoDB for VS Code (MongoDB Inc.)",
        "NoSQL Database (Microsoft)",
        "Database Client (cweijan)",
        "MongoDB Driver (npm)"
    ],
    ans: 0,
    exp: "La extensión oficial es 'MongoDB for VS Code' de MongoDB Inc. Permite conectarse a una instancia local o Atlas, explorar colecciones y ejecutar archivos .mongodb como Playground."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Con qué extensión de archivo se guarda un script de MongoDB Playground en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// situacion1_cursos.???</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: no es .sql ni .json</h6>
</div>`,
    opts: [
        ".mongodb",
        ".js",
        ".json",
        ".sql"
    ],
    ans: 0,
    exp: "Los scripts de MongoDB Playground se guardan con extensión .mongodb. VS Code los reconoce automáticamente y activa el modo Playground con autocompletado y botón Run."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Cómo se selecciona la base de datos a usar dentro de un archivo .mongodb en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// primera línea del archivo</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: se escribe al inicio del script</h6>
</div>`,
    opts: [
        "use('nombre_base_de_datos');",
        "db.connect('nombre_base_de_datos');",
        "SELECT DATABASE nombre_base_de_datos;",
        "db.createDatabase('nombre_base_de_datos');"
    ],
    ans: 0,
    exp: "use('nombre_bd') al inicio del archivo selecciona la base de datos. Si no existe, MongoDB la crea automáticamente al insertar el primer documento."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Cómo se ejecuta un script .mongodb en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// archivo centro_medico.mongodb abierto en VS Code</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: hay un botón verde en la parte superior del archivo</h6>
</div>`,
    opts: [
        "Con el botón 'Run Playground' (triángulo verde) que aparece en la parte superior del archivo .mongodb.",
        "Con el comando npm run mongodb en la terminal.",
        "Haciendo clic derecho y seleccionando 'Execute SQL'.",
        "Con el atajo Ctrl+F5 igual que cualquier archivo JavaScript."
    ],
    ans: 0,
    exp: "Al abrir un archivo .mongodb, VS Code muestra un botón 'Run Playground' en la parte superior. También se puede usar el atajo Ctrl+Shift+P y buscar 'MongoDB: Run All Playground Blocks'."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Dónde aparece el resultado al ejecutar un Playground en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// después de Run Playground...</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: se abre automáticamente al lado del script</h6>
</div>`,
    opts: [
        "En un panel lateral derecho que VS Code abre automáticamente con el resultado en formato JSON.",
        "En la terminal integrada de VS Code como texto plano.",
        "En el navegador web en la dirección localhost:27017.",
        "En un archivo .txt que se crea automáticamente en la misma carpeta."
    ],
    ans: 0,
    exp: "El resultado aparece en un panel que VS Code abre a la derecha del archivo .mongodb, mostrando la salida del último bloque ejecutado en formato JSON legible."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "medium",
    q: "¿Por qué al ejecutar todo el script en VS Code solo se muestra el resultado de la última operación?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// el script tiene insertOne, insertMany, find...</span>
<span style="color:#888;">// pero solo muestra el resultado del find</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: comportamiento del Playground de VS Code</h6>
</div>`,
    opts: [
        "El Playground de VS Code ejecuta todas las operaciones pero solo muestra en el panel el resultado de la última línea del script.",
        "VS Code cancela las operaciones anteriores y solo ejecuta la última.",
        "Es un error de VS Code que se soluciona reinstalando la extensión.",
        "Solo ejecuta la última operación para evitar sobrecargar la base de datos."
    ],
    ans: 0,
    exp: "VS Code ejecuta todas las operaciones del script en orden, pero el panel de resultados solo muestra la salida de la última instrucción. Por eso se pone el find() o aggregate() que se quiere ver al final del script."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "medium",
    q: "¿Cómo se evita el error de duplicate key al ejecutar el script varias veces en VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// E11000 duplicate key error</span>
<span style="color:#888;">// dup key: { _id: 1 }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: limpiar antes de insertar</h6>
</div>`,
    opts: [
        "Poner db.getCollection('nombre').drop() al inicio del script para eliminar la colección antes de cada ejecución.",
        "Cambiar el _id por un número diferente cada vez que se ejecuta.",
        "Usar insertOrUpdate() en lugar de insertOne().",
        "Desconectarse y reconectarse a MongoDB antes de ejecutar."
    ],
    ans: 0,
    exp: "drop() al inicio del script elimina la colección completa antes de insertar. Así cada ejecución parte desde cero sin errores de _id duplicado. Es la práctica estándar en scripts de desarrollo y prueba."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "easy",
    q: "¿Cuál es la cadena de conexión estándar para conectarse a MongoDB local desde VS Code?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// MongoDB corre localmente en tu máquina</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: puerto por defecto de MongoDB</h6>
</div>`,
    opts: [
        "mongodb://localhost:27017",
        "http://localhost:3000/mongodb",
        "mongodb://localhost:8080",
        "localhost://mongodb:27017"
    ],
    ans: 0,
    exp: "MongoDB corre por defecto en el puerto 27017. La cadena de conexión local es mongodb://localhost:27017. En VS Code se ingresa al crear una nueva conexión en el panel de MongoDB."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "medium",
    q: "En VS Code, ¿cómo se estructura correctamente un archivo .mongodb para la situación de un centro médico?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// ¿cuál es el orden correcto?</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: primero seleccionar BD, luego limpiar, luego insertar, luego consultar</h6>
</div>`,
    opts: [
        "use('centro_medico') → drop() → insertOne/insertMany → operaciones CRUD → find/aggregate al final.",
        "insertOne/insertMany → use('centro_medico') → find() → drop().",
        "drop() → use('centro_medico') → find() → insertOne.",
        "find() → use('centro_medico') → drop() → insertMany."
    ],
    ans: 0,
    exp: "El orden correcto es: 1) use() para seleccionar la BD, 2) drop() para limpiar, 3) insertar los datos, 4) operaciones de update/delete, 5) la consulta que quieres ver al final para que aparezca en el panel de resultados."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "medium",
    q: "¿Cómo se accede al panel de MongoDB en VS Code para explorar las colecciones visualmente?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// barra lateral izquierda de VS Code</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: ícono de hoja con la letra M</h6>
</div>`,
    opts: [
        "Desde el ícono de MongoDB en la barra lateral izquierda, donde aparecen las conexiones, bases de datos y colecciones en forma de árbol.",
        "Desde el menú Terminal > New MongoDB Terminal.",
        "Abriendo el archivo package.json y ejecutando npm start.",
        "Desde View > Extensions > MongoDB > Open Panel."
    ],
    ans: 0,
    exp: "La extensión agrega un ícono en la barra lateral izquierda de VS Code. Al hacer clic se despliega un árbol con las conexiones, y dentro de cada una las bases de datos, colecciones y documentos para explorar visualmente."
},
{
    profe: true,
    unit: "MongoDB - VS Code Workflow",
    diff: "hard",
    q: "Al desarrollar en VS Code, ¿qué ventaja tiene escribir el script completo en un .mongodb en lugar de ejecutar cada comando por separado en Compass?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// script completo vs comandos sueltos</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: piensa en reproducibilidad y trabajo en equipo</h6>
</div>`,
    opts: [
        "El script .mongodb es reproducible, versionable con Git, se puede compartir con el equipo y recrea toda la base de datos desde cero con un solo Run.",
        "Los scripts .mongodb ejecutan más rápido que Compass porque usan menos memoria RAM.",
        "En VS Code se pueden ejecutar scripts SQL y MongoDB al mismo tiempo en el mismo archivo.",
        "Compass no permite insertar más de 10 documentos a la vez, VS Code no tiene ese límite."
    ],
    ans: 0,
    exp: "Un archivo .mongodb es código que se puede guardar, versionar con Git y compartir. Cualquier persona del equipo puede ejecutarlo y obtener exactamente la misma base de datos. Compass es útil para explorar pero no para reproducir el trabajo."
},


{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Necesitas crear y seleccionar la base de datos 'centro_medico' en tu archivo .mongodb. ¿Qué escribes en la primera línea?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// primera línea del archivo .mongodb</span>
<span style="color:#ffffff;">___('centro_medico');</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa el comando</h6>
</div>`,
    opts: [
        "use('centro_medico');",
        "connect('centro_medico');",
        "db.create('centro_medico');",
        "database('centro_medico');"
    ],
    ans: 0,
    exp: "use('nombre') selecciona la base de datos. Si no existe la crea automáticamente al insertar el primer documento."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Antes de insertar datos quieres limpiar la colección 'pacientes' para evitar errores de _id duplicado. ¿Qué escribes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">use('centro_medico');</span>
<span style="color:#ffffff;">db.getCollection('pacientes').___();</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa el comando</h6>
</div>`,
    opts: [
        "db.getCollection('pacientes').drop();",
        "db.getCollection('pacientes').delete();",
        "db.getCollection('pacientes').clear();",
        "db.getCollection('pacientes').remove();"
    ],
    ans: 0,
    exp: "drop() elimina la colección completa. Es lo que se pone al inicio del script para que cada ejecución parta desde cero sin errores de duplicado."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Inserta un paciente con rut, nombre y edad en la colección 'pacientes'. ¿Qué comando usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').___(</span>
<span style="color:#ffffff;">  { rut: '12.345.678-9', nombre: 'María', edad: 45 }</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa el comando: insertar un solo documento</h6>
</div>`,
    opts: [
        "insertOne",
        "insertMany",
        "insert",
        "add"
    ],
    ans: 0,
    exp: "insertOne() inserta un solo documento. Recibe un objeto {} con los campos del documento."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Necesitas insertar 3 pacientes a la vez. ¿Qué comando usas y cómo se pasan los documentos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').___(</span>
<span style="color:#ffffff;">  [ {rut:'...'}, {rut:'...'}, {rut:'...'} ]</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa el comando: insertar múltiples documentos</h6>
</div>`,
    opts: [
        "insertMany",
        "insertOne",
        "insertAll",
        "insert"
    ],
    ans: 0,
    exp: "insertMany() recibe un arreglo [ ] con todos los documentos a insertar. Cada documento va separado por coma dentro del arreglo."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Quieres ver todos los documentos de la colección 'pacientes'. ¿Qué escribes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#ffffff;">db.getCollection('pacientes').___({}).toArray();</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: leer todos los documentos</h6>
</div>`,
    opts: [
        "find",
        "get",
        "search",
        "select"
    ],
    ans: 0,
    exp: "find({}) con filtro vacío retorna todos los documentos. .toArray() muestra el resultado correctamente en el panel de VS Code."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "easy",
    q: "Busca el paciente cuyo rut sea exactamente '12.345.678-9'. ¿Qué escribes dentro del find()?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').find(</span>
<span style="color:#ffffff;">  { ___ }</span>
<span style="color:#888;">).toArray();</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa el filtro</h6>
</div>`,
    opts: [
        "{ rut: '12.345.678-9' }",
        "{ id: '12.345.678-9' }",
        "{ _id: '12.345.678-9' }",
        "{ rut == '12.345.678-9' }"
    ],
    ans: 0,
    exp: "El filtro es un objeto con el campo y el valor exacto que buscas. rut es el nombre del campo como está guardado en el documento."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Busca los pacientes que vivan en la comuna 'Maipú'. La dirección es un subdocumento embebido: { direccion: { comuna: 'Maipú' } }. ¿Qué filtro usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// el documento tiene esto:</span>
<span style="color:#888;">// direccion: { ciudad: 'Santiago', comuna: 'Maipú' }</span>
<span style="color:#ffffff;">find({ ___ })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para llegar al campo dentro del subdocumento</h6>
</div>`,
    opts: [
        "{ 'direccion.comuna': 'Maipú' }",
        "{ direccion: { comuna: 'Maipú' } }",
        "{ comuna: 'Maipú' }",
        "{ direccion.comuna: 'Maipú' }"
    ],
    ans: 0,
    exp: "Para buscar dentro de un subdocumento se usa notación de punto entre comillas: 'direccion.comuna'. Sin comillas da error de sintaxis en JavaScript."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Busca los pacientes que tengan el diagnóstico 'Gastritis' en alguna atención de su historial (arreglo embebido). ¿Qué filtro usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">// historial: [ { diagnostico: 'Gastritis', ... }, ... ]</span>
<span style="color:#ffffff;">find({ ___ })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: misma notación de punto pero sobre un arreglo</h6>
</div>`,
    opts: [
        "{ 'historial.diagnostico': 'Gastritis' }",
        "{ historial: { diagnostico: 'Gastritis' } }",
        "{ diagnostico: 'Gastritis' }",
        "{ historial: [ { diagnostico: 'Gastritis' } ] }"
    ],
    ans: 0,
    exp: "La notación de punto 'historial.diagnostico' busca en todos los elementos del arreglo historial. MongoDB revisa cada subdocumento del arreglo automáticamente."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Actualiza el teléfono del paciente con rut '12.345.678-9' a '+56999999999'. ¿Qué escribes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').___(</span>
<span style="color:#888;">  { rut: '12.345.678-9' },</span>
<span style="color:#ffffff;">  { ___: { telefono: '+56999999999' } }</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: comando y operador</h6>
</div>`,
    opts: [
        "updateOne + $set",
        "updateOne + $push",
        "update + $set",
        "updateOne + $add"
    ],
    ans: 0,
    exp: "updateOne() busca el primer documento que coincida. $set modifica solo el campo indicado sin tocar el resto del documento."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Agrega una nueva atención médica al arreglo historial del paciente con rut '12.345.678-9'. ¿Qué operador usas dentro del updateOne()?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').updateOne(</span>
<span style="color:#888;">  { rut: '12.345.678-9' },</span>
<span style="color:#ffffff;">  { ___: { historial: { fecha: '2026-04-15', diagnostico: 'Saludable' } } }</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: operador para agregar al arreglo</h6>
</div>`,
    opts: [
        "$push",
        "$set",
        "$add",
        "$insert"
    ],
    ans: 0,
    exp: "$push agrega el nuevo elemento al final del arreglo conservando todas las atenciones anteriores. $set reemplazaría el arreglo completo."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Elimina del arreglo historial la atención cuya fecha sea '2026-02-15' del paciente con rut '15.678.432-1'. ¿Qué operador usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').updateOne(</span>
<span style="color:#888;">  { rut: '15.678.432-1' },</span>
<span style="color:#ffffff;">  { ___: { historial: { fecha: '2026-02-15' } } }</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: operador para eliminar un elemento del arreglo</h6>
</div>`,
    opts: [
        "$pull",
        "$pop",
        "$remove",
        "$delete"
    ],
    ans: 0,
    exp: "$pull elimina del arreglo todos los elementos que coincidan con la condición. Es la operación inversa de $push."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Elimina el paciente con rut '11.111.111-1' de la colección. ¿Qué escribes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#ffffff;">db.getCollection('pacientes').___({ rut: '11.111.111-1' });</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: eliminar un documento</h6>
</div>`,
    opts: [
        "deleteOne",
        "deleteMany",
        "remove",
        "drop"
    ],
    ans: 0,
    exp: "deleteOne() elimina el primer documento que coincida con el filtro. drop() elimina la colección completa, no un documento específico."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Elimina todos los pacientes que tengan el historial vacío []. ¿Qué comando usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#ffffff;">db.getCollection('pacientes').___({ historial: { $size: 0 } });</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: eliminar múltiples documentos</h6>
</div>`,
    opts: [
        "deleteMany",
        "deleteOne",
        "drop",
        "remove"
    ],
    ans: 0,
    exp: "deleteMany() elimina todos los documentos que cumplan el filtro. $size: 0 filtra los que tienen el arreglo historial vacío."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "hard",
    q: "Modifica el diagnóstico de la atención del '2026-03-10' dentro del historial del paciente con rut '12.345.678-9'. ¿Qué escribes en el $set?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').updateOne(</span>
<span style="color:#888;">  { rut: '12.345.678-9', 'historial.fecha': '2026-03-10' },</span>
<span style="color:#ffffff;">  { $set: { '___': 'Gastritis crónica' } }</span>
<span style="color:#888;">);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: operador posicional $ para apuntar al elemento que coincidió</h6>
</div>`,
    opts: [
        "historial.$.diagnostico",
        "historial.diagnostico",
        "historial[0].diagnostico",
        "historial.*.diagnostico"
    ],
    ans: 0,
    exp: "El $ posicional representa el índice del elemento del arreglo que coincidió en el filtro. 'historial.$.diagnostico' modifica solo ese subdocumento sin tocar los demás."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "hard",
    q: "Quieres mostrar la cantidad de atenciones de cada paciente. ¿Qué pipeline de agregación escribes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('pacientes').aggregate([</span>
<span style="color:#ffffff;">  { $project: { nombre: 1, total: { ___: '$historial' } } }</span>
<span style="color:#888;">]);</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: operador que cuenta elementos de un arreglo</h6>
</div>`,
    opts: [
        "$size",
        "$count",
        "$sum",
        "$length"
    ],
    ans: 0,
    exp: "$size dentro de $project retorna el número de elementos del arreglo historial. Se usa dentro de aggregate() no de find()."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "hard",
    q: "Calcula el total de cada pedido multiplicando cantidad × precio de cada plato. ¿Qué operadores necesitas en el pipeline?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">{ $project: { total: { ___: { ___: {</span>
<span style="color:#888;">  input: '$platos', as: 'p',</span>
<span style="color:#ffffff;">  in: { ___: ['$$p.cantidad', '$$p.precio'] }</span>
<span style="color:#888;">} } } } }</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa los 3 operadores</h6>
</div>`,
    opts: [
        "$sum + $map + $multiply",
        "$count + $forEach + $multiply",
        "$total + $map + $times",
        "$sum + $filter + $multiply"
    ],
    ans: 0,
    exp: "$map recorre cada elemento del arreglo, $multiply multiplica los campos de cada elemento, $sum suma todos los resultados del $map para obtener el total."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Busca todos los pedidos cuya dirección del cliente contenga la palabra 'Siempre' sin importar mayúsculas. ¿Qué operadores usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">find({ 'cliente.direccion': { ___: 'Siempre', ___: 'i' } })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: búsqueda parcial de texto</h6>
</div>`,
    opts: [
        "$regex + $options",
        "$contains + $case",
        "$like + $options",
        "$search + $flags"
    ],
    ans: 0,
    exp: "$regex permite buscar texto parcial. $options: 'i' hace la búsqueda insensible a mayúsculas/minúsculas. Son los dos operadores que siempre van juntos para búsqueda de texto flexible."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Ordena los cursos por fecha de creación del más reciente al más antiguo. ¿Qué encadenas después del find()?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">db.getCollection('cursos').find({}).___(</span>
<span style="color:#ffffff;">  { fechaCreacion: ___ }</span>
<span style="color:#888;">).toArray();</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: método y valor para orden descendente</h6>
</div>`,
    opts: [
        "sort + -1",
        "orderBy + -1",
        "sort + 0",
        "order + 'desc'"
    ],
    ans: 0,
    exp: ".sort({ campo: -1 }) ordena descendente (más reciente primero). Con 1 sería ascendente (más antiguo primero)."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "medium",
    q: "Filtra las reservas cuya fechaIngreso esté entre el 2025-07-01 y el 2025-09-30. ¿Qué operadores usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">find({ fechaIngreso: {</span>
<span style="color:#ffffff;">  ___: ISODate('2025-07-01'),</span>
<span style="color:#ffffff;">  ___: ISODate('2025-09-30')</span>
<span style="color:#888;">} })</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa: operadores de rango</h6>
</div>`,
    opts: [
        "$gte + $lte",
        "$gt + $lt",
        "$from + $to",
        "$min + $max"
    ],
    ans: 0,
    exp: "$gte (mayor o igual) y $lte (menor o igual) definen un rango incluyendo los extremos. $gt y $lt excluyen los extremos. Para fechas siempre se usa ISODate()."
},
{
    profe: true,
    unit: "MongoDB - VS Code Práctica",
    diff: "hard",
    q: "Muestra solo los pacientes con más de 2 atenciones en su historial, ordenados de mayor a menor. ¿Cómo armas el pipeline?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">aggregate([</span>
<span style="color:#ffffff;">  { $project: { nombre: 1, total: { $size: '$historial' } } },</span>
<span style="color:#ffffff;">  { ___: { total: { $gt: 2 } } },</span>
<span style="color:#ffffff;">  { ___: { total: -1 } }</span>
<span style="color:#888;">])</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Completa las etapas del pipeline</h6>
</div>`,
    opts: [
        "$match + $sort",
        "$filter + $order",
        "$where + $sort",
        "$match + $group"
    ],
    ans: 0,
    exp: "$match filtra los documentos igual que find() pero dentro del pipeline. $sort ordena los resultados. El orden de las etapas importa: primero calcular, luego filtrar, luego ordenar."
},


 //Formativa 1 - Crear BD y Colección

 {
    profe: true,
    unit: "MongoDB - Formativa (Tienda)",
    diff: "medium",
    q: "Crea la base de datos 'tienda' y la colección 'clientes'.",
    extra: "...",
    opts: [
        "use('tienda');\ndb.createCollection('clientes');",
        "use('tienda');\ndb.clientes.create();",
        "create database tienda;\ncreate collection clientes;",
        "db.createDatabase('tienda');\ndb.createCollection('clientes');"
    ],
    ans: 0,
    exp: "use('tienda') crea la base. db.createCollection('clientes') crea la colección."
},

 {
    profe: true,
    unit: "MongoDB - Formativa",
    diff: "medium",
    q: "Dado el siguiente documento de cliente, escribe el comando para insertarlo en la colección 'clientes':\n\n{ _id: 1, nombre: \"Ana López\", email: \"ana@mail.com\", direccion: { ciudad: \"Santiago\", pais: \"Chile\" }, pedidos: [] }",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Usa insertOne con el documento dado</h6>
</div>`,
    opts: [
        "db.clientes.insertOne({ _id: 1, nombre: 'Ana López', email: 'ana@mail.com', direccion: { ciudad: 'Santiago', pais: 'Chile' }, pedidos: [] });",
        "db.clientes.insert({ _id: 1, nombre: 'Ana López' });",
        "db.clientes.insertOne({ nombre: 'Ana López', email: 'ana@mail.com' });",
        "db.clientes.insertOne({ _id: 1 });"
    ],
    ans: 0,
    exp: "db.clientes.insertOne() inserta un documento. El documento incluye _id: 1 proporcionado en el enunciado."
},




//Formativa 2 - Insertar primer cliente

{
    profe: true,
    unit: "MongoDB - Formativa (Tienda)",
    diff: "medium",
    q: "Usando el _id del cliente, actualiza la dirección del cliente con _id: 1 a { ciudad: 'Las Condes', pais: 'Chile' }.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con filtro por _id</h6>
</div>`,
    opts: [
        "db.clientes.updateOne({ _id: 1 }, { $set: { direccion: { ciudad: 'Las Condes', pais: 'Chile' } } });",
        "db.clientes.updateOne({ nombre: 'Ana López' }, { $set: { direccion: 'Las Condes' } });",
        "db.clientes.update({ _id: 1 }, { direccion: 'Las Condes' });",
        "db.clientes.updateOne({ _id: 1 }, { $push: { direccion: 'Las Condes' } });"
    ],
    ans: 0,
    exp: "Se usa _id: 1 como filtro porque es el identificador único. $set actualiza el subdocumento direccion."
},

//Formativa 3 - Insertar cliente con pedidos

{
    profe: true,
    unit: "MongoDB - Formativa (Tienda)",
    diff: "medium",
    q: "Inserta el siguiente cliente en la colección 'clientes':\n{ _id: 2, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', direccion: { ciudad: 'Valparaíso', pais: 'Chile' }, pedidos: [{ producto: 'Laptop', cantidad: 1, precio: 800 }] }",
    extra: "...",
    opts: [
        "db.clientes.insertOne({ _id: 2, nombre: 'Carlos Ruiz', email: 'carlos@mail.com', direccion: { ciudad: 'Valparaíso', pais: 'Chile' }, pedidos: [{ producto: 'Laptop', cantidad: 1, precio: 800 }] });",
        "db.clientes.insertOne({ nombre: 'Carlos Ruiz', pedidos: 'Laptop' });",
        "db.clientes.insertOne({ _id: 2 });",
        "db.clientes.insert({ _id: 2, nombre: 'Carlos Ruiz' });"
    ],
    ans: 0,
    exp: "insertOne inserta el documento con _id: 2 y su pedido."
},



//Formativa 4 - Insertar múltiples clientes

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "medium",
    q: "Situación: Tienda en línea. Inserta dos clientes de una sola vez:\n\n- 'Luis Pérez', email 'luis@mail.com', dirección { ciudad: 'Concepción', pais: 'Chile' }, pedidos: []\n- 'Marta Díaz', email 'marta@mail.com', dirección { ciudad: 'Santiago', pais: 'Chile' }, pedidos: [{ producto: 'Mouse', cantidad: 2, precio: 25 }]",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany con array de documentos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: inserción múltiple</h6>
</div>`,
    opts: [
        "db.clientes.insertMany([{ nombre: 'Luis Pérez', email: 'luis@mail.com', direccion: { ciudad: 'Concepción', pais: 'Chile' }, pedidos: [] }, { nombre: 'Marta Díaz', email: 'marta@mail.com', direccion: { ciudad: 'Santiago', pais: 'Chile' }, pedidos: [{ producto: 'Mouse', cantidad: 2, precio: 25 }] }]);",
        "db.clientes.insertMany({ nombre: 'Luis Pérez', email: 'luis@mail.com', direccion: { ciudad: 'Concepción', pais: 'Chile' }, pedidos: [] }, { nombre: 'Marta Díaz', email: 'marta@mail.com', direccion: { ciudad: 'Santiago', pais: 'Chile' }, pedidos: [{ producto: 'Mouse', cantidad: 2, precio: 25 }] });",
        "db.clientes.insert({ nombre: 'Luis Pérez' }); db.clientes.insert({ nombre: 'Marta Díaz' });",
        "db.clientes.insertOne([{ nombre: 'Luis Pérez' }, { nombre: 'Marta Díaz' }]);"
    ],
    ans: 0,
    exp: "insertMany recibe un ARRAY de documentos. Cada documento tiene su propia estructura con dirección y pedidos."
},

//Formativa 5 - Ver todos los clientes

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "easy",
    q: "Situación: Tienda en línea. Muestra todos los clientes de la colección.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:40px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find sin filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura de documentos</h6>
</div>`,
    opts: [
        "db.clientes.find();",
        "db.clientes.findAll();",
        "db.clientes.find({});",
        "db.clientes.all();"
    ],
    ans: 0,
    exp: "db.clientes.find() devuelve todos los documentos de la colección, incluyendo dirección y pedidos."
},

//Formativa 6 - Buscar clientes por ciudad

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "medium",
    q: "Situación: Tienda en línea. Muestra los clientes que viven en la ciudad 'Santiago'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:50px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: notación de punto para subdocumento</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con filtro en subdocumento</h6>
</div>`,
    opts: [
        "db.clientes.find({ 'direccion.ciudad': 'Santiago' });",
        "db.clientes.find({ direccion: { ciudad: 'Santiago' } });",
        "db.clientes.find({ ciudad: 'Santiago' });",
        "db.clientes.find({ 'direccion.ciudad': 'Santiago' }).pretty();"
    ],
    ans: 0,
    exp: "Para buscar en subdocumentos se usa notación de punto: 'direccion.ciudad'."
},

//Formativa 7 - Actualizar dirección de un cliente

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "hard",
    q: "Situación: Tienda en línea. Actualiza la dirección de 'Ana López' a { ciudad: 'Las Condes', pais: 'Chile' }.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:80px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set y subdocumento</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: actualización de subdocumentos</h6>
</div>`,
    opts: [
        "db.clientes.updateOne({ nombre: 'Ana López' }, { $set: { direccion: { ciudad: 'Las Condes', pais: 'Chile' } } });",
        "db.clientes.updateOne({ nombre: 'Ana López' }, { $set: { 'direccion.ciudad': 'Las Condes', 'direccion.pais': 'Chile' } });",
        "db.clientes.updateOne({ nombre: 'Ana López' }, { direccion: { ciudad: 'Las Condes', pais: 'Chile' } });",
        "db.clientes.updateOne({ nombre: 'Ana López' }, { $push: { direccion: { ciudad: 'Las Condes', pais: 'Chile' } } });"
    ],
    ans: 0,
    exp: "Ambas opciones son válidas. $set con el subdocumento completo reemplaza la dirección. La segunda opción actualiza solo los campos específicos."
},

//Formativa 8 - Agregar pedido a cliente

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "hard",
    q: "Situación: Tienda en línea. Agrega un nuevo pedido a 'Carlos Ruiz': producto 'Teclado', cantidad 1, precio 60.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:80px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $push agrega al array pedidos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: creación de subdocumentos</h6>
</div>`,
    opts: [
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $push: { pedidos: { producto: 'Teclado', cantidad: 1, precio: 60 } } });",
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $addToSet: { pedidos: { producto: 'Teclado', cantidad: 1, precio: 60 } } });",
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $set: { pedidos: { producto: 'Teclado', cantidad: 1, precio: 60 } } });",
        "db.clientes.insertOne({ nombre: 'Carlos Ruiz', pedidos: { producto: 'Teclado', cantidad: 1, precio: 60 } });"
    ],
    ans: 0,
    exp: "$push agrega un nuevo subdocumento al array pedidos. Se añade al final del array."
},


//Formativa 9 - Eliminar pedido específico

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "hard",
    q: "Situación: Tienda en línea. Elimina del cliente 'Carlos Ruiz' el pedido del producto 'Mouse' (si existe).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:80px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull elimina del array por coincidencia</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: eliminación de subdocumentos</h6>
</div>`,
    opts: [
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $pull: { pedidos: { producto: 'Mouse' } } });",
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $pop: { pedidos: -1 } });",
        "db.clientes.updateOne({ nombre: 'Carlos Ruiz' }, { $unset: { pedidos: { producto: 'Mouse' } } });",
        "db.clientes.deleteOne({ nombre: 'Carlos Ruiz', 'pedidos.producto': 'Mouse' });"
    ],
    ans: 0,
    exp: "$pull elimina del array pedidos el subdocumento que coincide con { producto: 'Mouse' }. Elimina todas las coincidencias."
},

//Formativa 10 - Ver solo nombres y pedidos

{
    profe: true,
    unit: "MongoDB - Evaluación Formativa (Tienda)",
    diff: "medium",
    q: "Situación: Tienda en línea. Muestra solo el nombre y los pedidos de todos los clientes (excluyendo email y dirección).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:50px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: proyección { nombre: 1, pedidos: 1, _id: 0 }</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: lectura con proyección</h6>
</div>`,
    opts: [
        "db.clientes.find({}, { nombre: 1, pedidos: 1, _id: 0 });",
        "db.clientes.find({}, { nombre: 1, pedidos: 1 });",
        "db.clientes.find().only('nombre', 'pedidos');",
        "db.clientes.find({}, { nombre: true, pedidos: true });"
    ],
    ans: 0,
    exp: "La proyección { nombre: 1, pedidos: 1, _id: 0 } muestra solo nombre y pedidos. _id: 0 lo oculta porque se muestra por defecto."
},

//EVALUACIÓN SUMATIVA Situación: Clínica Veterinaria con Historial de Atenciones

//Sumativa 1 - Crear BD y Colección

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "hard",
    q: "Situación: Clínica Veterinaria. Crea la base de datos 'veterinaria' y la colección 'mascotas'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:60px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: use para base, createCollection para colección</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: gestión de BD y colecciones (2.1.2)</h6>
</div>`,
    opts: [
        "use('veterinaria'); db.createCollection('mascotas');",
        "use('veterinaria'); db.mascotas.create();",
        "create database veterinaria; create collection mascotas;",
        "db.createDatabase('veterinaria'); db.createCollection('mascotas');"
    ],
    ans: 0,
    exp: "use('veterinaria') crea/selecciona la base. db.createCollection('mascotas') crea la colección donde irán las mascotas con su historial."
},


//Sumativa 2 - Insertar primera mascota

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "hard",
    q: "Situación: Clínica Veterinaria. Inserta una mascota: nombre 'Luna', especie 'perro', edad 3, historial con una atención: fecha '2024-01-15', motivo 'vacuna', veterinario 'Dr. Pérez'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:120px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: historial es un array, la atención va entre llaves dentro de corchetes</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - creación (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.insertOne({ nombre: 'Luna', especie: 'perro', edad: 3, historial: [{ fecha: '2024-01-15', motivo: 'vacuna', veterinario: 'Dr. Pérez' }] });",
        "db.mascotas.insertOne({ nombre: 'Luna', especie: 'perro', edad: 3, historial: { fecha: '2024-01-15', motivo: 'vacuna', veterinario: 'Dr. Pérez' } });",
        "db.mascotas.insert({ nombre: 'Luna', especie: 'perro', edad: 3, historial: 'vacuna' });",
        "db.mascotas.insertOne({ nombre: 'Luna', especie: 'perro', edad: 3 }); db.mascotas.updateOne({ nombre: 'Luna' }, { $push: { historial: { fecha: '2024-01-15', motivo: 'vacuna', veterinario: 'Dr. Pérez' } } });"
    ],
    ans: 0,
    exp: "historial es un ARRAY, por eso se escribe entre corchetes []. Dentro del array, cada atención es un objeto entre llaves {} con fecha, motivo y veterinario."
},

//Sumativa 3 - Insertar múltiples mascotas

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "hard",
    q: "Situación: Clínica Veterinaria. Inserta dos mascotas de una sola vez:\n\n- 'Max', gato, edad 5, historial: [{ fecha: '2024-02-10', motivo: 'desparasitación', veterinario: 'Dra. López' }]\n- 'Lola', perro, edad 2, historial: []",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:150px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: insertMany con array de documentos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - creación (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.insertMany([{ nombre: 'Max', especie: 'gato', edad: 5, historial: [{ fecha: '2024-02-10', motivo: 'desparasitación', veterinario: 'Dra. López' }] }, { nombre: 'Lola', especie: 'perro', edad: 2, historial: [] }]);",
        "db.mascotas.insertMany({ nombre: 'Max', especie: 'gato', edad: 5, historial: { fecha: '2024-02-10', motivo: 'desparasitación', veterinario: 'Dra. López' } }, { nombre: 'Lola', especie: 'perro', edad: 2, historial: [] });",
        "db.mascotas.insert({ nombre: 'Max' }); db.mascotas.insert({ nombre: 'Lola' });",
        "db.mascotas.insertOne([{ nombre: 'Max' }, { nombre: 'Lola' }]);"
    ],
    ans: 0,
    exp: "insertMany recibe un ARRAY de documentos. Cada documento tiene su propio array historial (con atención o vacío)."
},

//Sumativa 4 - Ver todas las mascotas

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "easy",
    q: "Situación: Clínica Veterinaria. Muestra todas las mascotas de la colección.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:40px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find sin filtro</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - lectura (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.find();",
        "db.mascotas.findAll();",
        "db.mascotas.find({});",
        "db.mascotas.all();"
    ],
    ans: 0,
    exp: "db.mascotas.find() devuelve todas las mascotas con su nombre, especie, edad y el array historial completo."
},

//Sumativa 5 - Buscar mascotas por especie

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "medium",
    q: "Situación: Clínica Veterinaria. Muestra las mascotas que son 'gato'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:40px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: find con filtro { especie: 'gato' }</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - lectura con filtro (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.find({ especie: 'gato' });",
        "db.mascotas.find({ especie: 'gato' }).pretty();",
        "db.mascotas.where({ especie: 'gato' });",
        "db.mascotas.find().filter({ especie: 'gato' });"
    ],
    ans: 0,
    exp: "find({ especie: 'gato' }) filtra solo las mascotas cuya especie es exactamente 'gato'."
},

//Sumativa 6 - Agregar atención a historial

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "hard",
    q: "Situación: Clínica Veterinaria. Agrega una nueva atención al historial de 'Luna': fecha '2024-06-10', motivo 'consulta general', veterinario 'Dra. López'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:80px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $push agrega al array historial</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - creación de subdocumentos (2.1.4)</h6>
</div>`,
    opts: [
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $push: { historial: { fecha: '2024-06-10', motivo: 'consulta general', veterinario: 'Dra. López' } } });",
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $addToSet: { historial: { fecha: '2024-06-10', motivo: 'consulta general', veterinario: 'Dra. López' } } });",
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $set: { historial: { fecha: '2024-06-10', motivo: 'consulta general', veterinario: 'Dra. López' } } });",
        "db.mascotas.insertOne({ nombre: 'Luna', historial: { fecha: '2024-06-10', motivo: 'consulta general', veterinario: 'Dra. López' } });"
    ],
    ans: 0,
    exp: "$push agrega un nuevo subdocumento al array historial. Se añade al final del array."
},

//Sumativa 7 - Actualizar edad de mascota

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "medium",
    q: "Situación: Clínica Veterinaria. 'Luna' ha cumplido años. Actualiza su edad de 3 a 4 años.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:60px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: updateOne con $set</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - actualización de documentos (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $set: { edad: 4 } });",
        "db.mascotas.updateOne({ nombre: 'Luna' }, { edad: 4 });",
        "db.mascotas.update({ nombre: 'Luna' }, { $set: { edad: 4 } });",
        "db.mascotas.updateMany({ nombre: 'Luna' }, { edad: 4 });"
    ],
    ans: 0,
    exp: "updateOne actualiza el primer documento que coincide. $set es necesario para solo cambiar la edad sin borrar otros campos."
},

//Sumativa 8 - Eliminar atención del historial

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "hard",
    q: "Situación: Clínica Veterinaria. Elimina del historial de 'Luna' la atención con fecha '2024-01-15'.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:80px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: $pull elimina del array por coincidencia</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - eliminación de subdocumentos (2.1.4)</h6>
</div>`,
    opts: [
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $pull: { historial: { fecha: '2024-01-15' } } });",
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $pop: { historial: -1 } });",
        "db.mascotas.updateOne({ nombre: 'Luna' }, { $unset: { historial: { fecha: '2024-01-15' } } });",
        "db.mascotas.deleteOne({ nombre: 'Luna', 'historial.fecha': '2024-01-15' });"
    ],
    ans: 0,
    exp: "$pull elimina del array historial el subdocumento que coincide con { fecha: '2024-01-15' }."
},

//Sumativa 9 - Mostrar solo nombre e historial

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "medium",
    q: "Situación: Clínica Veterinaria. Muestra solo el nombre y el historial de todas las mascotas (excluyendo especie y edad).",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:50px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: proyección { nombre: 1, historial: 1, _id: 0 }</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - lectura con proyección (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.find({}, { nombre: 1, historial: 1, _id: 0 });",
        "db.mascotas.find({}, { nombre: 1, historial: 1 });",
        "db.mascotas.find().only('nombre', 'historial');",
        "db.mascotas.find({}, { nombre: true, historial: true });"
    ],
    ans: 0,
    exp: "La proyección { nombre: 1, historial: 1, _id: 0 } muestra solo nombre e historial. _id: 0 lo oculta."
},

//Sumativa 10 - Eliminar mascota completa

{
    profe: true,
    unit: "MongoDB - Evaluación Sumativa (Veterinaria)",
    diff: "medium",
    q: "Situación: Clínica Veterinaria. La mascota 'Max' ya no está en la clínica. Elimina su documento completo.",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">playground.mongodb&gt;</span> <span contenteditable="true" style="outline:none;color:#ffffff;height:60px;"></span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: deleteOne con filtro por nombre</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: operaciones CRUD - eliminación de documentos (2.1.3)</h6>
</div>`,
    opts: [
        "db.mascotas.deleteOne({ nombre: 'Max' });",
        "db.mascotas.deleteMany({ nombre: 'Max' });",
        "db.mascotas.remove({ nombre: 'Max' });",
        "db.mascotas.drop({ nombre: 'Max' });"
    ],
    ans: 0,
    exp: "deleteOne elimina el primer documento que coincide con { nombre: 'Max' }. deleteMany eliminaría todos los 'Max' si hubiera varios."
},

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
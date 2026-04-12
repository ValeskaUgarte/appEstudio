window.BANK = window.BANK || {};
BANK.bd_estructurados = [
     {
        unit: "SQL",
        diff: "hard",
        case: "Tienes una tabla 'Ventas'. Quieres obtener el total vendido por cada vendedor, pero solo mostrar a aquellos que vendieron más de $1,000,000 en total.",
        q: "¿Qué cláusula se usa para filtrar resultados después de una agregación (SUM, AVG)?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Orden de ejecución</th><th>Cláusula SQL</th></tr>
        </thead>
        <tbody>
        <tr><td>1. Agrupar</td><td>GROUP BY vendedor_id</td></tr>
        <tr><td>2. Filtrar grupo</td><td><input type="text" size="10" placeholder="???"> SUM(monto) > 1000000</td></tr>
        </tbody>
        </table>
        `,
        opts: ["HAVING", "WHERE", "ORDER BY", "LIMIT"],
        ans: 0,
        exp: "WHERE filtra filas antes de agrupar. HAVING filtra los grupos resultantes después de aplicar funciones de agregado como SUM()."
    },

    {
        unit: "SQL",
        diff: "medium",
        case: "Quieres listar todos los 'Clientes' y sus 'Pedidos'. Si un cliente no tiene pedidos, igual debe aparecer en la lista con valores NULL en los campos del pedido.",
        q: "¿Qué tipo de JOIN garantiza que no se pierdan los registros de la tabla izquierda (Clientes)?",
        extra: `
        <table class="subnet-table">
        <thead>
        <tr><th>Tipo Join</th><th>Resultado</th></tr>
        </thead>
        <tbody>
        <tr><td>INNER JOIN</td><td>Solo los que coinciden en ambas</td></tr>
        <tr><td><input type="text" size="10" placeholder="???"> JOIN</td><td>Todo lo de la izquierda + coincidencias</td></tr>
        </tbody>
        </table>
        `,
        opts: ["LEFT", "RIGHT", "OUTER", "CROSS"],
        ans: 0,
        exp: "El LEFT JOIN mantiene la integridad de la tabla primaria (izquierda), siendo vital para reportes donde quieres ver ausencias de datos."
    },
    // ==================== SQL - OPTIMIZACIÓN (INDEX) ====================
    {
        unit: "SQL",
        diff: "hard",
        case: "Una consulta SELECT en una tabla con 10 millones de registros tarda 15 segundos en responder cuando buscas por 'rut_cliente'.",
        q: "¿Qué objeto de base de datos debes crear para acelerar las búsquedas sin cambiar la consulta?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Comando</th><th>Efecto</th></tr></thead>
        <tbody>
        <tr><td>CREATE <input type="text" size="10" placeholder="???"> idx_rut</td><td>Mejora velocidad de lectura</td></tr>
        </tbody>
        </table>
        `,
        opts: ["INDEX", "VIEW", "TRIGGER", "PROCEDURE"],
        ans: 0,
        exp: "Un INDEX crea una estructura de datos (B-Tree generalmente) que permite al motor encontrar filas rápidamente sin escanear toda la tabla."
    },

    // ==================== SQL - SUBQUERIES ====================
    {
        unit: "SQL",
        diff: "hard",
        case: "Necesitas encontrar los nombres de los productos cuyo precio es mayor al precio promedio de toda la tienda.",
        q: "¿Cómo se llama la técnica de poner un SELECT dentro de la cláusula WHERE?",
        extra: `
        <table class="subnet-table">
        <thead><tr><th>Uso</th><th>Código</th></tr></thead>
        <tbody>
        <tr><td>Filtro dinámico</td><td>WHERE precio > (<input type="text" size="10" placeholder="???"> AVG...)</td></tr>
        </tbody>
        </table>
        `,
        opts: ["Subquery (Subconsulta)", "Join", "Union", "Group By"],
        ans: 0,
        exp: "Las subconsultas permiten realizar cálculos intermedios (como el promedio) para usarlos como filtro en la consulta principal."
    }

    



     ];



registrarAsignatura('bd_estructurados', BANK.bd_estructurados);
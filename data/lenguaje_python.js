window.BANK = window.BANK || {};
BANK.lenguaje_python = [
    
    // ==================== NIVEL BÁSICO (110 preguntas) ====================
    
    // === Variables y Tipos de Datos ===
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué tipo de dato es 3.14?",
        opts: ["int", "float", "decimal", "double"],
        ans: 1, exp: "Los números con decimales son de tipo float"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué función convierte un valor a string?",
        opts: ["str()", "int()", "float()", "string()"],
        ans: 0, exp: "str() convierte cualquier valor a string"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Cuál es el resultado de bool(0)?",
        opts: ["True", "False", "None", "Error"],
        ans: 1, exp: "0, None, listas vacías son False"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print(5 // 2)",
        opts: ["2.5", "2", "2.0", "3"],
        ans: 1, exp: "// es división entera, resultado 2"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué operador da el resto de una división?",
        opts: ["/", "//", "%", "mod"],
        ans: 2, exp: "% es el operador módulo (resto)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print(2 ** 3)",
        opts: ["6", "8", "9", "5"],
        ans: 1, exp: "** es el operador de potencia: 2³ = 8"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué tipo de dato es True?",
        opts: ["int", "bool", "boolean", "str"],
        ans: 1, exp: "True y False son de tipo bool"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Cómo se escribe un comentario de una línea?",
        opts: ["// comentario", "/* comentario */", "# comentario", "<!-- comentario -->"],
        ans: 2, exp: "El símbolo # inicia comentarios en Python"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print('Hola' * 3)",
        opts: ["Hola3", "HolaHolaHola", "Error", "HHHaaa"],
        ans: 1, exp: "* con strings los repite"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Cuál es la forma correcta de crear una variable?",
        opts: ["var nombre = 'Juan'", "nombre = 'Juan'", "let nombre = 'Juan'", "const nombre = 'Juan'"],
        ans: 1, exp: "Python usa asignación directa sin palabra clave"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué función devuelve la longitud de un string?",
        opts: ["length()", "count()", "len()", "size()"],
        ans: 2, exp: "len() devuelve la longitud de secuencias"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print(type([]))",
        opts: ["<class 'tuple'>", "<class 'list'>", "<class 'array'>", "<class 'dict'>"],
        ans: 1, exp: "[] es una lista vacía"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print(type({}))",
        opts: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
        ans: 3, exp: "{} es un diccionario vacío"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Cuál es la salida? print(10 / 3)",
        opts: ["3", "3.3333333333333335", "3.33", "Error"],
        ans: 1, exp: "/ siempre devuelve float en Python 3"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué palabra clave se usa para definir una constante por convención?",
        opts: ["const", "final", "No existe", "let"],
        ans: 2, exp: "Python no tiene constantes, se usa MAYÚSCULAS por convención"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print('5' + '3')",
        opts: ["8", "53", "Error", "5+3"],
        ans: 1, exp: "+ concatena strings"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Cuál es el resultado de int(3.9)?",
        opts: ["3.9", "4", "3", "Error"],
        ans: 2, exp: "int() trunca, no redondea"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué imprime? print(round(3.7))",
        opts: ["3", "3.7", "4", "4.0"],
        ans: 2, exp: "round() redondea al entero más cercano"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Variables y Tipos", diff: "easy",
        q: "¿Qué valor tiene None?",
        opts: ["0", "False", "Nada/null", "Vacio"],
        ans: 2, exp: "None representa ausencia de valor"
    },

    // === Strings ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método convierte un string a mayúsculas?",
        opts: ["upper()", "lower()", "capitalize()", "toUpper()"],
        ans: 0, exp: "upper() convierte a mayúsculas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método elimina espacios al inicio y final?",
        opts: ["trim()", "strip()", "clean()", "remove()"],
        ans: 1, exp: "strip() elimina espacios en blanco"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('Python'[0])",
        opts: ["P", "y", "t", "h"],
        ans: 0, exp: "Los índices empiezan en 0"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('Python'[-1])",
        opts: ["P", "y", "n", "o"],
        ans: 2, exp: "-1 accede al último carácter"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método busca una subcadena?",
        opts: ["search()", "find()", "locate()", "index_of()"],
        ans: 1, exp: "find() devuelve la posición o -1"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('Python'.replace('y', 'i'))",
        opts: ["Pithon", "Python", "Pytion", "Pithon"],
        ans: 0, exp: "replace() reemplaza caracteres"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('hola mundo'.split())",
        opts: ["['hola', 'mundo']", "['hola mundo']", "['hola','mundo']", "['hola', 'mundo']"],
        ans: 3, exp: "split() divide por espacios"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método une una lista de strings?",
        opts: ["concat()", "join()", "merge()", "combine()"],
        ans: 1, exp: "join() une strings con un separador"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print(' '.join(['a','b','c']))",
        opts: ["abc", "a b c", "a,b,c", "['a','b','c']"],
        ans: 1, exp: "join() usa el separador ' '"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método verifica si empieza con algo?",
        opts: ["startwith()", "starts_with()", "startswith()", "beginwith()"],
        ans: 2, exp: "startswith() es el método correcto"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('abc'.upper())",
        opts: ["abc", "ABC", "Abc", "aBc"],
        ans: 1, exp: "upper() convierte a mayúsculas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('ABC'.lower())",
        opts: ["ABC", "abc", "Abc", "aBc"],
        ans: 1, exp: "lower() convierte a minúsculas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('python'.capitalize())",
        opts: ["PYTHON", "Python", "python", "PythON"],
        ans: 1, exp: "capitalize() pone primera mayúscula"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué método verifica si es alfanumérico?",
        opts: ["isalpha()", "isdigit()", "isalnum()", "isnumeric()"],
        ans: 2, exp: "isalnum() verifica letras y números"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print('123'.isdigit())",
        opts: ["True", "False", "None", "Error"],
        ans: 0, exp: "isdigit() devuelve True si son dígitos"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué formato de string usa f-strings?",
        opts: ["%s", ".format()", "f'texto {var}'", "String.format()"],
        ans: 2, exp: "f-strings usan f antes de las comillas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? nombre='Ana'; print(f'Hola {nombre}')",
        opts: ["Hola Ana", "Hola {nombre}", "Hola nombre", "Error"],
        ans: 0, exp: "f-strings insertan variables"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué caracter escapa una nueva línea?",
        opts: ["\\n", "\\t", "\\r", "\\b"],
        ans: 0, exp: "\\n es salto de línea"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué caracter escapa una tabulación?",
        opts: ["\\n", "\\t", "\\r", "\\b"],
        ans: 1, exp: "\\t es tabulación"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Strings", diff: "easy",
        q: "¿Qué imprime? print(len('Python'))",
        opts: ["5", "6", "7", "4"],
        ans: 1, exp: "len() cuenta caracteres: 6"

    // === Listas ===
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Cómo se crea una lista vacía?",
        opts: ["list()", "[]", "Ambas", "{}"],
        ans: 2, exp: "[] y list() crean listas vacías"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método añade un elemento al final?",
        opts: ["push()", "add()", "append()", "insert()"],
        ans: 2, exp: "append() añade al final"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método elimina el último elemento?",
        opts: ["remove()", "delete()", "pop()", "del()"],
        ans: 2, exp: "pop() elimina y devuelve el último"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método ordena una lista?",
        opts: ["order()", "sort()", "sorted()", "arrange()"],
        ans: 1, exp: "sort() ordena in-place"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué función devuelve una lista ordenada sin modificar la original?",
        opts: ["sort()", "order()", "sorted()", "arrange()"],
        ans: 2, exp: "sorted() devuelve nueva lista"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método invierte una lista?",
        opts: ["reverse()", "reversed()", "invert()", "flip()"],
        ans: 0, exp: "reverse() invierte in-place"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3] + [4,5]",
        opts: ["[1,2,3,4,5]", "[5,7]", "Error", "[[1,2,3],[4,5]]"],
        ans: 0, exp: "+ concatena listas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3] * 2",
        opts: ["[1,2,3,1,2,3]", "[2,4,6]", "Error", "[1,2,3,2]"],
        ans: 0, exp: "* repite la lista"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método inserta en una posición específica?",
        opts: ["append()", "insert()", "add()", "push()"],
        ans: 1, exp: "insert(pos, elemento) inserta en posición"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3].index(2)",
        opts: ["0", "1", "2", "3"],
        ans: 1, exp: "index() devuelve la posición del elemento"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método cuenta ocurrencias?",
        opts: ["count()", "len()", "size()", "occur()"],
        ans: 0, exp: "count() cuenta cuántas veces aparece"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3,2].count(2)",
        opts: ["1", "2", "3", "0"],
        ans: 1, exp: "El 2 aparece dos veces"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método elimina el primer elemento con valor X?",
        opts: ["pop()", "remove()", "delete()", "discard()"],
        ans: 1, exp: "remove() elimina por valor"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3][1:3]",
        opts: ["[1,2]", "[2,3]", "[1,2,3]", "[2]"],
        ans: 1, exp: "slicing: desde índice 1 hasta 3 (excluido)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3][:2]",
        opts: ["[1,2]", "[2,3]", "[1,2,3]", "[1]"],
        ans: 0, exp: "[:2] desde inicio hasta índice 2"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3][2:]",
        opts: ["[1,2]", "[2,3]", "[3]", "[1]"],
        ans: 2, exp: "[2:] desde índice 2 hasta el final"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3,4,5][::2]",
        opts: ["[1,2,3]", "[2,4]", "[1,3,5]", "[1,2,3,4,5]"],
        ans: 2, exp: "[::2] toma elementos de 2 en 2"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué imprime? [1,2,3][::-1]",
        opts: ["[1,2,3]", "[3,2,1]", "[1,2]", "[2,1,3]"],
        ans: 1, exp: "[::-1] invierte la lista"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué método extiende una lista con otra?",
        opts: ["append()", "extend()", "add()", "concat()"],
        ans: 1, exp: "extend() añade múltiples elementos"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Listas", diff: "easy",
        q: "¿Qué diferencia hay entre append y extend?",
        opts: ["append añade un elemento, extend añade iterable", "Son iguales", "append solo strings", "extend solo números"],
        ans: 0, exp: "append añade un elemento, extend añade cada elemento del iterable"
    },

    // === Tuplas ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Cuál es la principal diferencia entre lista y tupla?",
        opts: ["La tupla es mutable", "La lista es inmutable", "La tupla es inmutable", "Son iguales"],
        ans: 2, exp: "Las tuplas no se pueden modificar"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Cómo se crea una tupla?",
        opts: ["[]", "{}", "()", "<>"],
        ans: 2, exp: "Las tuplas usan paréntesis"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? type((1,2,3))",
        opts: ["<class 'list'>", "<class 'tuple'>", "<class 'set'>", "<class 'dict'>"],
        ans: 1, exp: "(1,2,3) es una tupla"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? (1,2,3)[1]",
        opts: ["1", "2", "3", "Error"],
        ans: 1, exp: "Se accede por índice igual que listas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? len((1,2,3))",
        opts: ["2", "3", "4", "1"],
        ans: 1, exp: "len() funciona con tuplas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Se puede modificar una tupla después de creada?",
        opts: ["Sí", "No", "Depende", "Solo si es pequeña"],
        ans: 1, exp: "Las tuplas son inmutables"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Cómo se crea una tupla de un solo elemento?",
        opts: ["(1)", "(1,)", "[1]", "{1}"],
        ans: 1, exp: "Se necesita la coma: (1,)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? tuple([1,2,3])",
        opts: ["[1,2,3]", "(1,2,3)", "{1,2,3}", "Error"],
        ans: 1, exp: "tuple() convierte lista a tupla"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? (1,2,3).count(2)",
        opts: ["0", "1", "2", "3"],
        ans: 1, exp: "count() funciona en tuplas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Tuplas", diff: "easy",
        q: "¿Qué imprime? 1 in (1,2,3)",
        opts: ["True", "False", "None", "Error"],
        ans: 0, exp: "in verifica pertenencia"
    },

    // === Diccionarios ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Cómo se crea un diccionario?",
        opts: ["[]", "{}", "()", "<>"],
        ans: 1, exp: "Los diccionarios usan llaves"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué imprime? {'a':1,'b':2}['a']",
        opts: ["1", "2", "a", "b"],
        ans: 0, exp: "Se accede por clave"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método devuelve las claves de un diccionario?",
        opts: ["values()", "items()", "keys()", "get()"],
        ans: 2, exp: "keys() devuelve las claves"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método devuelve los valores?",
        opts: ["keys()", "values()", "items()", "get()"],
        ans: 1, exp: "values() devuelve los valores"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método devuelve pares clave-valor?",
        opts: ["keys()", "values()", "items()", "pairs()"],
        ans: 2, exp: "items() devuelve tuplas (clave, valor)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método obtiene un valor con clave segura?",
        opts: ["get()", "pop()", "extract()", "obtain()"],
        ans: 0, exp: "get() devuelve None si no existe la clave"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué imprime? {'a':1}.get('b', 0)",
        opts: ["None", "0", "Error", "1"],
        ans: 1, exp: "get con valor por defecto"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método elimina una clave?",
        opts: ["remove()", "delete()", "pop()", "discard()"],
        ans: 2, exp: "pop() elimina y devuelve el valor"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método actualiza con otro diccionario?",
        opts: ["merge()", "update()", "combine()", "add()"],
        ans: 1, exp: "update() fusiona diccionarios"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Se pueden usar listas como claves de diccionario?",
        opts: ["Sí", "No", "Depende", "Solo si son pequeñas"],
        ans: 1, exp: "Las claves deben ser inmutables"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Se pueden usar tuplas como claves?",
        opts: ["Sí", "No", "Depende", "Solo números"],
        ans: 0, exp: "Las tuplas son inmutables, sí se pueden"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué imprime? len({'a':1,'b':2,'c':3})",
        opts: ["2", "3", "4", "6"],
        ans: 1, exp: "len() cuenta el número de pares"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Cómo se elimina una clave con del?",
        opts: ["del d['clave']", "d.del('clave')", "delete d['clave']", "d.remove('clave')"],
        ans: 0, exp: "del d['clave'] elimina la entrada"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué método vacía un diccionario?",
        opts: ["clear()", "empty()", "remove_all()", "clean()"],
        ans: 0, exp: "clear() elimina todos los elementos"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Diccionarios", diff: "easy",
        q: "¿Qué imprime? dict([('a',1),('b',2)])",
        opts: ["{'a':1,'b':2}", "{'a':1,'b':2}", "[('a',1),('b',2)]", "Error"],
        ans: 1, exp: "dict() convierte lista de tuplas a diccionario"
    },

    // === Sets ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué característica tienen los sets?",
        opts: ["Permiten duplicados", "Están ordenados", "Elementos únicos", "Son inmutables"],
        ans: 2, exp: "Los sets no permiten elementos duplicados"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Cómo se crea un set?",
        opts: ["[]", "{}", "set()", "()"],
        ans: 2, exp: "set() o {} pero {} es dict vacío"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué imprime? {1,2,3} | {3,4,5}",
        opts: ["{1,2,3,4,5}", "{3}", "{1,2,3}", "{1,2,3,3,4,5}"],
        ans: 0, exp: "| es unión de sets"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué imprime? {1,2,3} & {3,4,5}",
        opts: ["{1,2,3,4,5}", "{3}", "{1,2,3}", "{}"],
        ans: 1, exp: "& es intersección"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué imprime? {1,2,3} - {3,4,5}",
        opts: ["{1,2}", "{4,5}", "{1,2,3}", "{3}"],
        ans: 0, exp: "- es diferencia"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué imprime? {1,2,3} ^ {3,4,5}",
        opts: ["{1,2,3,4,5}", "{3}", "{1,2,4,5}", "{}"],
        ans: 2, exp: "^ es diferencia simétrica"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué método añade un elemento al set?",
        opts: ["append()", "add()", "insert()", "push()"],
        ans: 1, exp: "add() añade un elemento al set"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué método elimina un elemento?",
        opts: ["remove()", "discard()", "Ambos", "delete()"],
        ans: 2, exp: "remove() da error si no existe, discard() no"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Cómo se crea un frozenset?",
        opts: ["set()", "frozenset()", "freezeset()", "fset()"],
        ans: 1, exp: "frozenset() crea un set inmutable"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Sets", diff: "easy",
        q: "¿Qué método verifica si es subconjunto?",
        opts: ["subset()", "issubset()", "sub()", "issub()"],
        ans: 1, exp: "issubset() verifica subconjunto"
    },

    // === Condicionales ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué palabra clave inicia un condicional?",
        opts: ["if", "then", "when", "condition"],
        ans: 0, exp: "if es la palabra clave para condicionales"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué palabra clave se usa para 'si no'?",
        opts: ["else", "elif", "otherwise", "then"],
        ans: 0, exp: "else es el caso contrario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué palabra clave es 'si no si'?",
        opts: ["else", "elif", "elseif", "elsif"],
        ans: 1, exp: "elif es else if en Python"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? x=5; print('Mayor' if x>3 else 'Menor')",
        opts: ["Mayor", "Menor", "Error", "None"],
        ans: 0, exp: "Operador ternario condicional"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador es igualdad?",
        opts: ["=", "==", "===", "!="],
        ans: 1, exp: "== compara igualdad"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador es diferente?",
        opts: ["!=", "<>", "!==", "=/="],
        ans: 0, exp: "!= es diferente de"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador lógico es Y?",
        opts: ["&&", "&", "and", "AND"],
        ans: 2, exp: "and es el operador lógico Y"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador lógico es O?",
        opts: ["||", "|", "or", "OR"],
        ans: 2, exp: "or es el operador lógico O"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué operador lógico es NO?",
        opts: ["!", "not", "~", "NOT"],
        ans: 1, exp: "not es el operador de negación"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if 0: print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 1, exp: "0 es False, se ejecuta else"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if '': print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 1, exp: "String vacío es False"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if []: print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 1, exp: "Lista vacía es False"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if None: print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 1, exp: "None es False"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if 'Hola': print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 0, exp: "String no vacío es True"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Condicionales", diff: "easy",
        q: "¿Qué imprime? if [1]: print('A') else: print('B')",
        opts: ["A", "B", "Error", "Nada"],
        ans: 0, exp: "Lista no vacía es True"
    },

    // === Bucles ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué palabra clave inicia un bucle for?",
        opts: ["for", "while", "loop", "iterate"],
        ans: 0, exp: "for itera sobre secuencias"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué función genera una secuencia numérica?",
        opts: ["range()", "seq()", "numbers()", "series()"],
        ans: 0, exp: "range() genera números"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i in range(3): print(i, end=' ')",
        opts: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
        ans: 0, exp: "range(3) = 0,1,2"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i in range(1,4): print(i, end=' ')",
        opts: ["1 2 3", "1 2 3 4", "0 1 2 3", "1 2"],
        ans: 0, exp: "range(1,4) = 1,2,3"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i in range(0,10,2): print(i, end=' ')",
        opts: ["0,2,4,6,8", "0,2,4,6,8,10", "2,4,6,8", "0,1,2,3,4"],
        ans: 0, exp: "range(inicio, fin, paso)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué palabra clave termina un bucle prematuramente?",
        opts: ["stop", "exit", "break", "continue"],
        ans: 2, exp: "break sale del bucle"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué palabra clave salta a la siguiente iteración?",
        opts: ["skip", "next", "continue", "pass"],
        ans: 2, exp: "continue salta a la siguiente iteración"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué palabra clave no hace nada?",
        opts: ["skip", "pass", "continue", "null"],
        ans: 1, exp: "pass es un placeholder"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? i=0; while i<3: print(i); i+=1",
        opts: ["0 1 2", "0 1 2 3", "1 2 3", "Error"],
        ans: 0, exp: "while se ejecuta mientras la condición sea True"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i in 'Hola': print(i, end='')",
        opts: ["H o l a", "Hola", "H", "Error"],
        ans: 1, exp: "for itera sobre cada carácter"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i in [1,2,3]: print(i*2, end=' ')",
        opts: ["1 2 3", "2 4 6", "2 3 4", "1 4 9"],
        ans: 1, exp: "Multiplica cada elemento por 2"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué palabra clave ejecuta código si no hubo break?",
        opts: ["else", "finally", "complete", "end"],
        ans: 0, exp: "for-else se ejecuta si no hay break"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué función da índice y valor en un bucle?",
        opts: ["range()", "enumerate()", "zip()", "index()"],
        ans: 1, exp: "enumerate() devuelve (índice, valor)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué imprime? for i, c in enumerate('abc'): print(i,c)",
        opts: ["0 a 1 b 2 c", "a0 b1 c2", "Error", "abc"],
        ans: 0, exp: "enumerate() da índice y carácter"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Bucles", diff: "easy",
        q: "¿Qué función itera sobre múltiples secuencias?",
        opts: ["enumerate()", "zip()", "range()", "map()"],
        ans: 1, exp: "zip() combina iterables"
    },

    // === Funciones ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué palabra clave define una función?",
        opts: ["func", "define", "def", "function"],
        ans: 2, exp: "def define funciones en Python"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué palabra clave devuelve un valor?",
        opts: ["return", "output", "result", "give"],
        ans: 0, exp: "return devuelve el valor"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué imprime? def suma(a,b): return a+b; print(suma(2,3))",
        opts: ["5", "23", "Error", "None"],
        ans: 0, exp: "La función suma correctamente"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué imprime una función sin return?",
        opts: ["0", "None", "Error", "Vacio"],
        ans: 1, exp: "Sin return devuelve None"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué son los parámetros por defecto?",
        opts: ["Parámetros obligatorios", "Parámetros con valor predeterminado", "Parámetros infinitos", "Solo strings"],
        ans: 1, exp: "def f(x=10) asigna valor por defecto"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Cómo se llama una variable definida dentro de una función?",
        opts: ["Global", "Local", "Constante", "Externa"],
        ans: 1, exp: "Las variables dentro de funciones son locales"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué palabra clave usa una variable global dentro de función?",
        opts: ["global", "nonlocal", "extern", "outside"],
        ans: 0, exp: "global permite modificar variable global"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué es el scope de una variable?",
        opts: ["Su valor", "Su tipo", "Su ámbito de visibilidad", "Su tamaño"],
        ans: 2, exp: "Scope es dónde puede usarse la variable"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Cómo se llama una función dentro de sí misma?",
        opts: ["Iteración", "Recursión", "Looping", "Repetición"],
        ans: 1, exp: "Recursión es llamarse a sí misma"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Funciones", diff: "easy",
        q: "¿Qué imprime? def f(x): return x*2; print(f(f(2)))",
        opts: ["4", "6", "8", "2"],
        ans: 2, exp: "f(2)=4, f(4)=8"
    },

    // === Input/Output ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué función imprime en consola?",
        opts: ["print()", "output()", "console()", "write()"],
        ans: 0, exp: "print() es la función de salida"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué función lee entrada del usuario?",
        opts: ["read()", "input()", "scan()", "get()"],
        ans: 1, exp: "input() lee del teclado"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué tipo devuelve input()?",
        opts: ["int", "float", "str", "bool"],
        ans: 2, exp: "input() siempre devuelve string"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Cómo se abre un archivo para lectura?",
        opts: ["open('file.txt', 'r')", "open('file.txt', 'w')", "open('file.txt', 'a')", "file('file.txt')"],
        ans: 0, exp: "'r' es modo lectura"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué modo abre un archivo para escritura?",
        opts: ["'r'", "'w'", "'a'", "'x'"],
        ans: 1, exp: "'w' es modo escritura (sobrescribe)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué modo abre para añadir al final?",
        opts: ["'r'", "'w'", "'a'", "'x'"],
        ans: 2, exp: "'a' es modo append"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué método lee todo el contenido de un archivo?",
        opts: ["read()", "readline()", "readlines()", "scan()"],
        ans: 0, exp: "read() lee todo el archivo"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué método escribe en un archivo?",
        opts: ["write()", "print()", "output()", "save()"],
        ans: 0, exp: "write() escribe strings en archivo"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué palabra clave cierra un archivo automáticamente?",
        opts: ["close", "with", "as", "open"],
        ans: 1, exp: "with asegura que se cierre el archivo"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué imprime? print('A','B',sep='-')",
        opts: ["A-B", "AB", "A B", "A,B"],
        ans: 0, exp: "sep define el separador"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Input/Output", diff: "easy",
        q: "¿Qué imprime? print('A', end='')",
        opts: ["A\n", "A", "A ", "A\t"],
        ans: 1, exp: "end='' evita el salto de línea"
    },

    // === Módulos ===
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué palabra clave importa un módulo?",
        opts: ["include", "import", "using", "require"],
        ans: 1, exp: "import es la palabra clave"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Cómo se importa una función específica?",
        opts: ["import function from math", "from math import sqrt", "import math.sqrt", "include sqrt"],
        ans: 1, exp: "from modulo import funcion"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué alias se usa para numpy comúnmente?",
        opts: ["np", "np", "nd", "num"],
        ans: 1, exp: "import numpy as np"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué módulo da funciones matemáticas?",
        opts: ["math", "calc", "mathematics", "numbers"],
        ans: 0, exp: "math es el módulo matemático"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué módulo da números aleatorios?",
        opts: ["random", "rand", "aleatorio", "rnd"],
        ans: 0, exp: "random genera números aleatorios"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué función de random da float entre 0 y 1?",
        opts: ["randint()", "random()", "uniform()", "choice()"],
        ans: 1, exp: "random() devuelve float en [0,1)"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué función de random da entero entre a y b?",
        opts: ["rand()", "randint()", "random()", "choice()"],
        ans: 1, exp: "randint(a,b) da entero entre a y b"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué módulo da fecha y hora?",
        opts: ["time", "datetime", "calendar", "date"],
        ans: 1, exp: "datetime es el módulo principal"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué función de os ejecuta comandos del sistema?",
        opts: ["cmd()", "system()", "execute()", "run()"],
        ans: 1, exp: "os.system() ejecuta comandos"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Módulos", diff: "easy",
        q: "¿Qué módulo maneja rutas de archivos?",
        opts: ["os.path", "sys.path", "filepath", "path"],
        ans: 0, exp: "os.path tiene funciones para rutas"
    },

    // ==================== NIVEL INTERMEDIO (110 preguntas) ====================

    // === List/Dict/Set Comprehensions ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? [x*2 for x in range(4)]",
        opts: ["[0,1,2,3]", "[0,2,4,6]", "[1,2,3,4]", "[2,4,6,8]"],
        ans: 1, exp: "Multiplica cada elemento por 2"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? [x for x in range(10) if x%2==0]",
        opts: ["[0,2,4,6,8]", "[1,3,5,7,9]", "[0,1,2,3,4]", "[2,4,6,8]"],
        ans: 0, exp: "Filtra números pares"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? {x: x**2 for x in range(3)}",
        opts: ["{0:0,1:1,2:4}", "{0:0,1:1,2:2}", "{0:1,1:2,2:3}", "{0:0,1:1,2:3}"],
        ans: 0, exp: "Dict comprehension: clave-valor"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? {x for x in 'abca'}",
        opts: ["{'a','b','c'}", "{'a','b','c','a'}", "{'a','b','c'}", "['a','b','c']"],
        ans: 2, exp: "Set comprehension elimina duplicados"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? [x+y for x in [1,2] for y in [3,4]]",
        opts: ["[4,5,5,6]", "[4,5,6,7]", "[1,2,3,4]", "[3,4,5,6]"],
        ans: 0, exp: "Producto cartesiano: 1+3=4,1+4=5,2+3=5,2+4=6"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? [(x,y) for x in range(2) for y in range(2)]",
        opts: ["[(0,0),(0,1),(1,0),(1,1)]", "[(0,0),(1,1)]", "[(0,1),(1,0)]", "[(0,0),(0,1)]"],
        ans: 0, exp: "Genera todas las combinaciones"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué hace? [x for x in range(5) if x>2]",
        opts: ["[0,1,2,3,4]", "[3,4]", "[0,1,2]", "[2,3,4]"],
        ans: 1, exp: "Filtra números mayores a 2"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? [x if x%2==0 else -x for x in range(5)]",
        opts: ["[0,-1,2,-3,4]", "[0,1,2,3,4]", "[0,-1,-2,-3,-4]", "[0,1,-2,3,-4]"],
        ans: 0, exp: "Operador ternario en comprehension"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué genera? {i: chr(65+i) for i in range(3)}",
        opts: ["{0:'A',1:'B',2:'C'}", "{0:65,1:66,2:67}", "{'A':0,'B':1,'C':2}", "{0:'a',1:'b',2:'c'}"],
        ans: 0, exp: "chr(65)='A', chr(66)='B', etc"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comprehensions", diff: "medium",
        q: "¿Qué es más eficiente? [x for x in range(1000)] vs list(range(1000))",
        opts: ["Primero", "Segundo", "Igual", "Depende"],
        ans: 2, exp: "Son equivalentes en rendimiento"
    },

    // === Funciones Lambda ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué palabra clave crea funciones anónimas?",
        opts: ["lambda", "def", "anon", "function"],
        ans: 0, exp: "lambda crea funciones sin nombre"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Cuál es el resultado de? (lambda x: x*2)(5)",
        opts: ["5", "10", "25", "Error"],
        ans: 1, exp: "La lambda multiplica 5*2 = 10"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué hace? lambda x, y: x+y",
        opts: ["Multiplica", "Suma", "Resta", "Divide"],
        ans: 1, exp: "Suma los dos argumentos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Cómo se usa lambda con sorted?",
        opts: ["sorted(lista, key=lambda x: x[1])", "sorted(lambda x: x[1], lista)", "lambda sorted(lista)", "sorted(lista, lambda)"],
        ans: 0, exp: "key recibe función lambda"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué imprime? list(map(lambda x: x**2, [1,2,3]))",
        opts: ["[1,2,3]", "[1,4,9]", "[2,4,6]", "[1,3,5]"],
        ans: 1, exp: "map aplica lambda a cada elemento"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué imprime? list(filter(lambda x: x>2, [1,2,3,4]))",
        opts: ["[1,2,3,4]", "[3,4]", "[1,2]", "[2,3,4]"],
        ans: 1, exp: "filter mantiene elementos que cumplen condición"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué imprime? reduce(lambda x,y: x+y, [1,2,3,4])",
        opts: ["10", "24", "1+2+3+4", "Error"],
        ans: 0, exp: "reduce acumula: (((1+2)+3)+4)=10"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Qué módulo tiene reduce?",
        opts: ["functools", "itertools", "builtins", "operator"],
        ans: 0, exp: "reduce está en functools"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Cuántas expresiones puede tener una lambda?",
        opts: ["Una", "Dos", "Múltiples", "Infinitas"],
        ans: 0, exp: "Lambda solo permite una expresión"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Lambda", diff: "medium",
        q: "¿Puede una lambda tener return?",
        opts: ["Sí", "No", "Depende", "Solo con paréntesis"],
        ans: 1, exp: "La expresión se devuelve implícitamente"
    },

    // === Decoradores ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué símbolo se usa para aplicar un decorador?",
        opts: ["#", "@", "$", "&"],
        ans: 1, exp: "@nombre_decorador se pone encima de la función"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace un decorador?",
        opts: ["Modifica una función", "Crea una función", "Elimina una función", "Renombra una función"],
        ans: 0, exp: "Un decorador añade funcionalidad a otra función"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Cuál es la sintaxis básica de un decorador?",
        opts: ["def decorador(func): return wrapper", "decorador func():", "@decorador def func()", "Ambas B y C"],
        ans: 3, exp: "Se define y se aplica con @"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué decorador convierte un método en propiedad?",
        opts: ["@staticmethod", "@classmethod", "@property", "@abstractmethod"],
        ans: 2, exp: "@property permite acceder como atributo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué decorador define método de clase?",
        opts: ["@staticmethod", "@classmethod", "@property", "@abstractmethod"],
        ans: 1, exp: "@classmethod recibe la clase como cls"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué decorador define método estático?",
        opts: ["@staticmethod", "@classmethod", "@property", "@abstractmethod"],
        ans: 0, exp: "@staticmethod no recibe self ni cls"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué módulo tiene wraps para decoradores?",
        opts: ["functools", "itertools", "decorator", "wrapper"],
        ans: 0, exp: "functools.wraps preserva metadatos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué problema resuelve functools.wraps?",
        opts: ["Velocidad", "Conservar __name__ y __doc__", "Memoria", "Sintaxis"],
        ans: 1, exp: "wraps preserva los metadatos de la función original"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Se pueden apilar múltiples decoradores?",
        opts: ["Sí", "No", "Solo dos", "Depende"],
        ans: 0, exp: "Se aplican de abajo hacia arriba"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué imprime? @deco1 @deco2 def f(): pass",
        opts: ["deco1(deco2(f))", "deco2(deco1(f))", "Error", "deco1 y deco2"],
        ans: 0, exp: "Se aplican desde el más cercano a la función"

    // === Manejo de Excepciones ===
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué bloque captura excepciones?",
        opts: ["try", "catch", "except", "error"],
        ans: 2, exp: "except captura excepciones"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué bloque se ejecuta SIEMPRE?",
        opts: ["else", "except", "finally", "end"],
        ans: 2, exp: "finally se ejecuta siempre"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué bloque se ejecuta si no hay excepción?",
        opts: ["else", "except", "finally", "then"],
        ans: 0, exp: "else se ejecuta si no hay excepción"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué palabra clave lanza una excepción?",
        opts: ["throw", "raise", "except", "error"],
        ans: 1, exp: "raise lanza una excepción"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Cuál es la excepción base de todas?",
        opts: ["Exception", "BaseException", "Error", "Throwable"],
        ans: 0, exp: "Exception es la base para excepciones normales"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué excepción atrapa división por cero?",
        opts: ["ValueError", "TypeError", "ZeroDivisionError", "ArithmeticError"],
        ans: 2, exp: "ZeroDivisionError es específica"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué excepción atrapa índice fuera de rango?",
        opts: ["KeyError", "IndexError", "ValueError", "OutOfRangeError"],
        ans: 1, exp: "IndexError para listas, KeyError para diccionarios"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué excepción atrapa conversión inválida?",
        opts: ["TypeError", "ValueError", "SyntaxError", "NameError"],
        ans: 1, exp: "ValueError: int('abc')"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Qué imprime? try: 1/0 except ZeroDivisionError: print('error')",
        opts: ["error", "0", "Infinity", "Exception"],
        ans: 0, exp: "Se captura la excepción"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Excepciones", diff: "medium",
        q: "¿Cómo se capturan múltiples excepciones?",
        opts: ["except (Error1, Error2):", "except Error1, Error2:", "except Error1 then Error2:", "Ambas A y B"],
        ans: 0, exp: "Se usa una tupla de excepciones"
    },

    // === Args y Kwargs ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué significa *args en una función?",
        opts: ["Argumentos nombrados", "Tupla de argumentos posicionales", "Diccionario", "Solo un argumento"],
        ans: 1, exp: "*args recoge argumentos como tupla"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué significa **kwargs?",
        opts: ["Tupla", "Lista", "Diccionario de argumentos nombrados", "Solo uno"],
        ans: 2, exp: "**kwargs recoge argumentos nombrados como diccionario"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué imprime? def f(*args): print(args); f(1,2,3)",
        opts: ["[1,2,3]", "(1,2,3)", "{1,2,3}", "1,2,3"],
        ans: 1, exp: "args es una tupla"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué imprime? def f(**kwargs): print(kwargs); f(a=1,b=2)",
        opts: ["{'a':1,'b':2}", "{'a':1,'b':2}", "[('a',1),('b',2)]", "a=1,b=2"],
        ans: 1, exp: "kwargs es un diccionario"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué orden es correcto en parámetros?",
        opts: ["*args, **kwargs, normales", "normales, *args, **kwargs", "**kwargs, *args, normales", "normales, **kwargs, *args"],
        ans: 1, exp: "Primero normales, luego *args, luego **kwargs"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Cómo se desempaqueta una lista en argumentos?",
        opts: ["*lista", "**lista", "lista*", "lista**"],
        ans: 0, exp: "*lista desempaqueta en argumentos posicionales"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Cómo se desempaqueta un diccionario?",
        opts: ["*dict", "**dict", "dict*", "dict**"],
        ans: 1, exp: "**dict desempaqueta en argumentos nombrados"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué imprime? def f(a,b): return a+b; print(f(*[2,3]))",
        opts: ["5", "23", "Error", "[2,3]"],
        ans: 0, exp: "*[2,3] desempaqueta a 2,3"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Qué imprime? def f(a,b): return a+b; print(f(**{'a':2,'b':3}))",
        opts: ["5", "23", "Error", "{2,3}"],
        ans: 0, exp: "**dict asigna por clave"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Args Kwargs", diff: "medium",
        q: "¿Puede una función tener *args y **kwargs juntos?",
        opts: ["Sí", "No", "Solo en Python 3", "Depende"],
        ans: 0, exp: "Es común usarlos juntos para máxima flexibilidad"
    },

    // === Métodos de clase y estáticos ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué recibe como primer parámetro un método de instancia?",
        opts: ["cls", "self", "static", "instance"],
        ans: 1, exp: "self es la convención para la instancia"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué recibe @classmethod como primer parámetro?",
        opts: ["self", "cls", "class", "type"],
        ans: 1, exp: "cls es la convención para la clase"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Un @staticmethod recibe algún parámetro especial?",
        opts: ["Sí, self", "Sí, cls", "No, ninguno", "Depende"],
        ans: 2, exp: "Los métodos estáticos no reciben self ni cls"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Puede un @classmethod modificar atributos de clase?",
        opts: ["Sí", "No", "Solo lectura", "Solo instancia"],
        ans: 0, exp: "cls permite acceder y modificar atributos de clase"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué método se llama al crear una instancia?",
        opts: ["__init__", "__new__", "__call__", "__str__"],
        ans: 0, exp: "__init__ inicializa la instancia"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué método se llama antes de __init__?",
        opts: ["__call__", "__new__", "__pre__", "__create__"],
        ans: 1, exp: "__new__ crea la instancia, __init__ la inicializa"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué método representa la representación en string?",
        opts: ["__str__", "__repr__", "__format__", "__unicode__"],
        ans: 1, exp: "__repr__ es para desarrolladores"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué diferencia __str__ de __repr__?",
        opts: ["Ninguna", "__str__ para usuarios, __repr__ para debug", "__repr__ para usuarios", "Son iguales"],
        ans: 1, exp: "__str__ es legible, __repr__ es unambiguous"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué método permite usar len() en un objeto?",
        opts: ["__len__", "__size__", "__count__", "__length__"],
        ans: 0, exp: "__len__ debe devolver un entero"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Métodos", diff: "medium",
        q: "¿Qué método permite usar obj[indice]?",
        opts: ["__get__", "__getitem__", "__index__", "__access__"],
        ans: 1, exp: "__getitem__ implementa indexación"
    },

    // === Zip y Enumerate ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué hace enumerate()?",
        opts: ["Combina listas", "Añade índices a un iterable", "Ordena elementos", "Filtra elementos"],
        ans: 1, exp: "enumerate() devuelve (índice, valor)"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué imprime? list(enumerate(['a','b','c']))",
        opts: ["[(0,'a'),(1,'b'),(2,'c')]", "[(1,'a'),(2,'b'),(3,'c')]", "[('a',0),('b',1),('c',2)]", "['a','b','c']"],
        ans: 0, exp: "enumerate empieza en 0 por defecto"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Cómo se empieza enumerate en 1?",
        opts: ["enumerate(iter, 1)", "enumerate(1, iter)", "enumerate(start=1)", "enumerate(iter, start=1)"],
        ans: 3, exp: "enumerate(iterable, start=1)"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué hace zip()?",
        opts: ["Comprime archivos", "Combina iterables en tuplas", "Ordena listas", "Filtra datos"],
        ans: 1, exp: "zip() empareja elementos de múltiples iterables"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué imprime? list(zip([1,2], ['a','b']))",
        opts: ["[(1,'a'),(2,'b')]", "[(1,2),('a','b')]", "[[1,'a'],[2,'b']]", "[(1,2,'a','b')]"],
        ans: 0, exp: "zip() crea tuplas con elementos correspondientes"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué pasa si las listas tienen diferente longitud?",
        opts: ["Error", "Se detiene en la más corta", "Rellena con None", "Rellena con 0"],
        ans: 1, exp: "zip() se detiene en el iterable más corto"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué módulo tiene zip_longest?",
        opts: ["functools", "itertools", "collections", "builtins"],
        ans: 1, exp: "itertools.zip_longest rellena valores"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Cómo se desempaqueta zip?",
        opts: ["list(zip(*lista))", "zip(lista)", "unzip(lista)", "zip(*lista) descomprime"],
        ans: 3, exp: "zip(*lista) deshace el zip original"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué imprime? dict(zip(['a','b'],[1,2]))",
        opts: ["{'a':1,'b':2}", "{'a':1,'b':2}", "{a:1,b:2}", "['a',1,'b',2]"],
        ans: 1, exp: "zip() crea pares para dict"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Zip Enumerate", diff: "medium",
        q: "¿Qué imprime? list(zip([1,2,3], [4,5]))",
        opts: ["[(1,4),(2,5)]", "[(1,4),(2,5),(3,None)]", "Error", "[(1,4,5),(2,)]"],
        ans: 0, exp: "Se detiene en la lista más corta"
    },

    // === Context Managers ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué palabra clave se usa con context managers?",
        opts: ["as", "in", "for", "try"],
        ans: 0, exp: "with ... as ..."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué métodos implementa un context manager?",
        opts: ["__init__, __del__", "__enter__, __exit__", "__start__, __end__", "__open__, __close__"],
        ans: 1, exp: "__enter__ y __exit__ son los métodos del protocolo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué módulo tiene contextlib?",
        opts: ["builtins", "sys", "contextlib", "withlib"],
        ans: 2, exp: "contextlib tiene helpers para context managers"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué decorador de contextlib convierte generador en context manager?",
        opts: ["@context", "@contextmanager", "@with", "@manager"],
        ans: 1, exp: "@contextmanager es el decorador"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué hace with open('f.txt') as f?",
        opts: ["Solo abre", "Abre y cierra automáticamente", "Solo cierra", "Lee el archivo"],
        ans: 1, exp: "with cierra el archivo automáticamente"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Se pueden anidar context managers?",
        opts: ["Sí", "No", "Solo dos", "Con comas"],
        ans: 0, exp: "Se pueden anidar o usar with A, B"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué imprime? with open('test.txt','w') as f: f.write('hola')",
        opts: ["hola", "4", "Error", "None"],
        ans: 1, exp: "write() devuelve el número de caracteres"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué hace __exit__ con excepciones?",
        opts: ["Las ignora", "Las relanza", "Puede suprimirlas", "Las elimina"],
        ans: 2, exp: "Si __exit__ devuelve True, suprime la excepción"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué hace contextlib.suppress?",
        opts: ["Suprime excepciones", "Lanza excepciones", "Registra excepciones", "Ignora todo"],
        ans: 0, exp: "Suprime tipos específicos de excepciones"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Context Managers", diff: "medium",
        q: "¿Qué hace contextlib.redirect_stdout?",
        opts: ["Redirige a archivo", "Ignora stdout", "Duplica stdout", "Cierra stdout"],
        ans: 0, exp: "Redirige la salida estándar"
    },

    // === Herencia y Polimorfismo ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué función verifica la clase de un objeto?",
        opts: ["type()", "isinstance()", "class()", "issubclass()"],
        ans: 1, exp: "isinstance() es más flexible con herencia"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué función verifica subclase?",
        opts: ["issubclass()", "isinstance()", "subclass()", "issub()"],
        ans: 0, exp: "issubclass(A, B) verifica si A es subclase de B"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Cómo se llama a un método de la clase padre?",
        opts: ["super().metodo()", "parent.metodo()", "base.metodo()", "self.metodo_padre()"],
        ans: 0, exp: "super() da acceso a la clase padre"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Python soporta herencia múltiple?",
        opts: ["Sí", "No", "Solo con mixins", "Limitada"],
        ans: 0, exp: "Python soporta herencia múltiple"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué orden de resolución de métodos usa Python?",
        opts: ["DFS", "BFS", "C3 Linearization", "Preorder"],
        ans: 2, exp: "MRO (Method Resolution Order) usa algoritmo C3"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Cómo se ve el MRO de una clase?",
        opts: ["Clase.__mro__", "Clase.mro()", "Ambas", "mro(Clase)"],
        ans: 2, exp: "Ambas funcionan"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué es el polimorfismo?",
        opts: ["Múltiples formas", "Una sola forma", "Sin formas", "Herencia"],
        ans: 0, exp: "Polimorfismo = muchas formas, mismo interfaz"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué es duck typing?",
        opts: ["Si camina como pato...", "Tipado fuerte", "Tipado estático", "Sin tipos"],
        ans: 0, exp: "Duck typing: 'si suena como pato, es un pato'"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué clase es padre de todas?",
        opts: ["object", "class", "type", "base"],
        ans: 0, exp: "object es la clase base universal"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Herencia", diff: "medium",
        q: "¿Qué es una clase abstracta?",
        opts: ["No se puede instanciar", "Solo métodos abstractos", "No tiene métodos", "Es una interfaz"],
        ans: 0, exp: "ABC (Abstract Base Class) no se instancia"
    },

    // === Módulos y Paquetes ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué archivo define un paquete?",
        opts: ["__init__.py", "__main__.py", "setup.py", "package.py"],
        ans: 0, exp: "__init__.py marca un directorio como paquete"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué variable contiene el nombre del módulo?",
        opts: ["__name__", "__file__", "__main__", "__module__"],
        ans: 0, exp: "__name__ es el nombre del módulo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué valor tiene __name__ cuando se ejecuta directamente?",
        opts: ["__main__", "main", "__module__", "True"],
        ans: 0, exp: "__name__ == '__main__' para ejecución directa"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué importa 'from module import *'?",
        opts: ["Todo", "Solo funciones", "Lo que define __all__", "Nada"],
        ans: 2, exp: "__all__ controla qué se importa con *"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Cómo se recargan módulos?",
        opts: ["reload()", "importlib.reload()", "refresh()", "reimport()"],
        ans: 1, exp: "importlib.reload() recarga un módulo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué módulo da acceso a sys.path?",
        opts: ["os", "sys", "path", "site"],
        ans: 1, exp: "sys.path es la ruta de búsqueda de módulos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Cómo se añade una ruta a sys.path?",
        opts: ["sys.path.add()", "sys.path.append()", "path.append()", "add_path()"],
        ans: 1, exp: "sys.path es una lista, se usa append()"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué es un namespace package?",
        opts: ["Paquete sin __init__.py", "Paquete con __init__.py", "Paquete vacío", "Paquete de nombres"],
        ans: 0, exp: "Namespace packages distribuyen código en múltiples directorios"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué módulo instala paquetes?",
        opts: ["pip", "setuptools", "distutils", "Ambos A y B"],
        ans: 3, exp: "pip usa setuptools y distutils"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Módulos", diff: "medium",
        q: "¿Qué archivo define dependencias?",
        opts: ["requirements.txt", "dependencies.txt", "setup.cfg", "Pipfile"],
        ans: 0, exp: "requirements.txt es el estándar"
    },

    // === Iteradores y Generadores ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué método debe tener un iterador?",
        opts: ["__iter__ y __next__", "__iter__ y __getitem__", "__next__ solo", "__iter__ solo"],
        ans: 0, exp: "__iter__ devuelve iterador, __next__ da elementos"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué excepción lanza __next__ al terminar?",
        opts: ["StopIteration", "IndexError", "EOFError", "EndOfIteration"],
        ans: 0, exp: "StopIteration indica fin de la iteración"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué función convierte cualquier iterable en iterador?",
        opts: ["iter()", "next()", "iterator()", "make_iter()"],
        ans: 0, exp: "iter(objeto) devuelve el iterador"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué palabra clave usa un generador?",
        opts: ["return", "yield", "emit", "generate"],
        ans: 1, exp: "yield produce valores y pausa la función"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Un generador es un iterador?",
        opts: ["Sí", "No", "A veces", "Depende"],
        ans: 0, exp: "Los generadores implementan el protocolo iterador"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué guarda la memoria de un generador?",
        opts: ["Todo", "El estado actual", "Nada", "La lista completa"],
        ans: 1, exp: "Los generadores son lazy, guardan solo el estado"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué imprime? def gen(): yield 1; yield 2; list(gen())",
        opts: ["[1,2]", "(1,2)", "1 2", "Error"],
        ans: 0, exp: "list() consume el generador"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Se puede usar return en generador?",
        opts: ["Sí", "No", "Solo sin valor", "Solo con yield"],
        ans: 2, exp: "return termina y puede tener un valor en StopIteration"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué hace yield from?",
        opts: ["Delega a otro generador", "Crea subgenerador", "Concatena", "Todos"],
        ans: 3, exp: "yield from delega a subgeneradores"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Iteradores", diff: "medium",
        q: "¿Qué módulo tiene generadores infinitos?",
        opts: ["functools", "itertools", "collections", "generator"],
        ans: 1, exp: "itertools.count(), cycle(), repeat()"
    },

    // === Decoradores avanzados intermedios ===
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @lru_cache?",
        opts: ["Cachea resultados", "Aumenta velocidad", "Reduce memoria", "Optimiza bucles"],
        ans: 0, exp: "lru_cache memoiza resultados de funciones"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué módulo tiene lru_cache?",
        opts: ["itertools", "functools", "cachetools", "collections"],
        ans: 1, exp: "functools.lru_cache"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @dataclass?",
        opts: ["Crea clases de datos", "Crea decoradores", "Crea iteradores", "Crea generadores"],
        ans: 0, exp: "@dataclass genera __init__, __repr__, etc automáticamente"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué módulo tiene dataclass?",
        opts: ["dataclasses", "data", "classes", "attrs"],
        ans: 0, exp: "from dataclasses import dataclass"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @singledispatch?",
        opts: ["Sobrecarga de funciones", "Singleton", "Dispatch único", "Multimétodos"],
        ans: 0, exp: "@singledispatch permite sobrecarga por tipo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @abstractmethod?",
        opts: ["Define método abstracto", "Define método concreto", "Define clase abstracta", "Define interfaz"],
        ans: 0, exp: "Requiere que las subclases implementen el método"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué módulo tiene abstractmethod?",
        opts: ["abc", "abstract", "interfaces", "ABC"],
        ans: 0, exp: "from abc import abstractmethod"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @staticmethod?",
        opts: ["Método sin self", "Método con self", "Método de clase", "Propiedad"],
        ans: 0, exp: "No recibe parámetros especiales"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @classmethod?",
        opts: ["Recibe clase", "Recibe instancia", "Recibe nada", "Recibe ambos"],
        ans: 0, exp: "Recibe cls como primer parámetro"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Decoradores", diff: "medium",
        q: "¿Qué hace @property?",
        opts: ["Convierte método en atributo", "Crea propiedad solo lectura", "Crea getter/setter", "Todos"],
        ans: 3, exp: "@property define getter, @método.setter define setter"
    },

    // ==================== NIVEL AVANZADO (110 preguntas) ====================

    // === Metaclases ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué es una metaclase?",
        opts: ["Clase de clases", "Clase normal", "Método especial", "Decorador"],
        ans: 0, exp: "Las metaclases crean y modifican clases"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué metaclase usa Python por defecto?",
        opts: ["object", "type", "class", "Meta"],
        ans: 1, exp: "type es la metaclase por defecto"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Cómo se especifica una metaclase?",
        opts: ["metaclass='Meta'", "__metaclass__ = Meta", "class A(metaclass=Meta)", "meta=Meta"],
        ans: 2, exp: "class A(metaclass=Meta):"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué método de metaclase se llama al crear clase?",
        opts: ["__new__", "__init__", "__call__", "__create__"],
        ans: 0, exp: "__new__ crea la clase, __init__ la inicializa"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué método de metaclase se llama al instanciar?",
        opts: ["__new__", "__init__", "__call__", "__instance__"],
        ans: 2, exp: "metaclase.__call__ llama a clase.__new__ e __init__"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué hace type('A', (), {})?",
        opts: ["Crea clase A", "Crea instancia", "Crea metaclase", "Error"],
        ans: 0, exp: "type(nombre, bases, dict) crea clase dinámicamente"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué son los descriptores?",
        opts: ["Atributos con comportamiento", "Decoradores", "Metaclases", "Iteradores"],
        ans: 0, exp: "Descriptores controlan acceso a atributos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué métodos definen un descriptor?",
        opts: ["__get__, __set__, __delete__", "__getattr__, __setattr__", "__get__, __set__", "__get__, __set__, __del__"],
        ans: 0, exp: "Descriptor protocol: __get__, __set__, __delete__"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué es un descriptor de datos?",
        opts: ["Implementa __set__", "Implementa solo __get__", "Implementa __delete__", "Implementa __get__ y __set__"],
        ans: 3, exp: "Descriptor de datos tiene __set__ y/o __delete__"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Metaclases", diff: "hard",
        q: "¿Qué prioridad tiene un descriptor de datos?",
        opts: ["Alta sobre __dict__", "Baja sobre __dict__", "Igual", "Depende"],
        ans: 0, exp: "Los descriptores de datos tienen prioridad sobre el __dict__ de la instancia"
    },

    // === Asyncio ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué palabra clave define una función asíncrona?",
        opts: ["async", "await", "asynchronous", "coroutine"],
        ans: 0, exp: "async def define corrutinas"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué palabra clave espera una corrutina?",
        opts: ["async", "await", "wait", "yield"],
        ans: 1, exp: "await suspende hasta que la corrutina termina"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué función ejecuta una corrutina?",
        opts: ["asyncio.run()", "asyncio.start()", "asyncio.execute()", "asyncio.launch()"],
        ans: 0, exp: "asyncio.run() es el punto de entrada"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué tipo de concurrencia usa asyncio?",
        opts: ["Multithreading", "Multiprocessing", "Concurrencia cooperativa", "Paralelismo real"],
        ans: 2, exp: "Asyncio usa un solo hilo con event loop"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué función crea tareas?",
        opts: ["asyncio.create_task()", "asyncio.task()", "asyncio.new_task()", "asyncio.start_task()"],
        ans: 0, exp: "create_task() programa la corrutina en el event loop"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué función espera múltiples tareas?",
        opts: ["asyncio.wait()", "asyncio.gather()", "asyncio.all()", "Ambas A y B"],
        ans: 3, exp: "wait() y gather() tienen usos diferentes"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué es un event loop?",
        opts: ["Bucle de eventos", "Bucle infinito", "Bucle síncrono", "Bucle de hilos"],
        ans: 0, exp: "El event loop coordina las corrutinas"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué módulo es el predecesor de asyncio?",
        opts: ["twisted", "gevent", "tornado", "curio"],
        ans: 0, exp: "Twisted influenció asyncio"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué es 'async with'?",
        opts: ["Context manager asíncrono", "Bucle asíncrono", "Condicional asíncrono", "Con with normal"],
        ans: 0, exp: "Async context manager usa __aenter__ y __aexit__"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Asyncio", diff: "hard",
        q: "¿Qué es 'async for'?",
        opts: ["Iteración asíncrona", "Bucle asíncrono", "For normal", "While asíncrono"],
        ans: 0, exp: "Async for itera sobre async iterables"
    },

    // === Threading ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué módulo maneja hilos?",
        opts: ["thread", "threading", "multithread", "threads"],
        ans: 1, exp: "threading es el módulo de alto nivel"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué es GIL?",
        opts: ["Global Interpreter Lock", "General Input Language", "Graphic Interface Layer", "Generic Iteration Loop"],
        ans: 0, exp: "GIL solo permite un hilo ejecutando Python bytecode"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Para qué tareas sirve threading?",
        opts: ["CPU-bound", "I/O-bound", "Ambas", "Ninguna"],
        ans: 1, exp: "Threading es bueno para I/O-bound por el GIL"
    },
    {
        proff: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué método inicia un hilo?",
        opts: ["start()", "run()", "begin()", "launch()"],
        ans: 0, exp: "start() inicia el hilo, run() es el código"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué método espera que un hilo termine?",
        opts: ["wait()", "join()", "stop()", "sleep()"],
        ans: 1, exp: "join() bloquea hasta que el hilo termina"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué clase de threading sincroniza hilos?",
        opts: ["Lock", "Semaphore", "Event", "Todos"],
        ans: 3, exp: "Todas son primitivas de sincronización"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué hace RLock?",
        opts: ["Lock reentrante", "Lock normal", "Lock rápido", "Lock global"],
        ans: 0, exp: "RLock puede ser adquirido múltiples veces por el mismo hilo"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué problema soluciona Queue?",
        opts: ["Comunicación entre hilos", "Velocidad", "Memoria", "GIL"],
        ans: 0, exp: "Queue es thread-safe para intercambiar datos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué es ThreadLocal?",
        opts: ["Datos por hilo", "Datos globales", "Datos compartidos", "Datos estáticos"],
        ans: 0, exp: "ThreadLocal almacena datos específicos de cada hilo"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Threading", diff: "hard",
        q: "¿Qué es un deadlock?",
        opts: ["Bloqueo mutuo", "Carrera de datos", "Hilo infinito", "Error de memoria"],
        ans: 0, exp: "Dos hilos esperando recursos del otro"
    },

    // === Multiprocessing ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué módulo es para multiprocesos?",
        opts: ["multithread", "multiprocessing", "process", "parallel"],
        ans: 1, exp: "multiprocessing elude el GIL"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Para qué tareas es bueno multiprocessing?",
        opts: ["I/O-bound", "CPU-bound", "Ambas", "Ninguna"],
        ans: 1, exp: "Multiprocessing es para CPU-bound por procesos separados"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué clase crea un proceso?",
        opts: ["Thread", "Process", "Task", "Worker"],
        ans: 1, exp: "multiprocessing.Process"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué función crea pool de procesos?",
        opts: ["Pool()", "ProcessPool()", "ThreadPool()", "WorkerPool()"],
        ans: 0, exp: "multiprocessing.Pool()"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué método de Pool mapea función a lista?",
        opts: ["map()", "apply()", "run()", "execute()"],
        ans: 0, exp: "pool.map(f, iterable)"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué objeto comparte datos entre procesos?",
        opts: ["Value", "Array", "Manager", "Todos"],
        ans: 3, exp: "Value, Array, Manager, Queue son compartidos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué es más pesado?",
        opts: ["Thread", "Process", "Igual", "Depende"],
        ans: 1, exp: "Process crea espacio de memoria independiente"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué es fork?",
        opts: ["Copiar proceso", "Crear hilo", "Matar proceso", "Unir procesos"],
        ans: 0, exp: "fork() duplica el proceso actual"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué es shared memory?",
        opts: ["Memoria compartida", "Memoria privada", "Memoria virtual", "Memoria cache"],
        ans: 0, exp: "Multiprocessing puede usar memoria compartida"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Multiprocessing", diff: "hard",
        q: "¿Qué es un lock en multiprocessing?",
        opts: ["Sincronización", "Exclusión mutua", "Control de acceso", "Todos"],
        ans: 3, exp: "Lock previene condiciones de carrera"
    },

    // === Decoradores avanzados ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Cuántos niveles de anidamiento necesita un decorador con argumentos?",
        opts: ["1", "2", "3", "4"],
        ans: 2, exp: "1: argumentos, 2: función, 3: wrapper"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @wraps de functools?",
        opts: ["Preserva metadatos", "Añade wrapping", "Crea wrapper", "Optimiza"],
        ans: 0, exp: "wraps copia __name__, __doc__, etc"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Se puede decorar una clase?",
        opts: ["Sí", "No", "Solo métodos", "Solo funciones"],
        ans: 0, exp: "Los decoradores de clase modifican clases"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué es un decorador de clases?",
        opts: ["Modifica clases", "Crea clases", "Elimina clases", "Copia clases"],
        ans: 0, exp: "Recibe una clase y devuelve otra"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué es una fábrica de decoradores?",
        opts: ["Función que crea decoradores", "Decorador que crea funciones", "Decorador simple", "Metaclase"],
        ans: 0, exp: "Devuelve un decorador basado en parámetros"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @singledispatch?",
        opts: ["Sobrecarga por tipo", "Singleton", "Dispatch único", "Multidispatch"],
        ans: 0, exp: "Registra implementaciones para diferentes tipos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @lru_cache(maxsize=None)?",
        opts: ["Cache infinito", "Cache limitado", "Sin cache", "Cache temporal"],
        ans: 0, exp: "maxsize=None es caché sin límite"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @total_ordering?",
        opts: ["Completa métodos de orden", "Ordena clases", "Compara clases", "Ordena objetos"],
        ans: 0, exp: "Implementa todos los comparadores con solo __eq__ y __lt__"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @dataclass(frozen=True)?",
        opts: ["Clase inmutable", "Clase mutable", "Clase congelada", "Clase estática"],
        ans: 0, exp: "frozen=True hace instancias inmutables"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Decoradores Avanzados", diff: "hard",
        q: "¿Qué hace @contextmanager?",
        opts: ["Convierte generador en context manager", "Crea contexto", "Maneja excepciones", "Crea with"],
        ans: 0, exp: "from contextlib import contextmanager"
    },

    // === Cython y Extensión ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué extensión tienen los archivos Cython?",
        opts: [".c", ".pyx", ".cy", ".pxd"],
        ans: 1, exp: ".pyx para código Cython"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué palabra clave declara variables estáticas en Cython?",
        opts: ["cdef", "def", "cpdef", "static"],
        ans: 0, exp: "cdef declara variables/funciones C"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué diferencia cpdef de cdef?",
        opts: ["cpdef es visible en Python", "cpdef es más rápido", "cpdef es más lento", "Sin diferencia"],
        ans: 0, exp: "cpdef genera wrapper Python y función C"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué archivo declara interfaces en Cython?",
        opts: [".pxd", ".pyx", ".pyd", ".h"],
        ans: 0, exp: ".pxd para declaraciones"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué módulo compila Cython?",
        opts: ["cythonize", "setup", "build", "compile"],
        ans: 0, exp: "from Cython.Build import cythonize"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué es el GIL?",
        opts: ["Bloqueo global", "Manejo de memoria", "Recolección basura", "Cython"],
        ans: 0, exp: "GIL limita concurrencia en Python puro"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Cómo se libera el GIL en Cython?",
        opts: ["with nogil:", "nogil:", "release_gil()", "free_gil()"],
        ans: 0, exp: "with nogil: bloque sin GIL"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué hace memoryview en Cython?",
        opts: ["Acceso eficiente a arrays", "Memoria compartida", "Vista de memoria", "Todos"],
        ans: 3, exp: "Memoryviews para acceso rápido a buffers"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué módulo de Python extiende con C?",
        opts: ["ctypes", "cffi", "pybind11", "Todos"],
        ans: 3, exp: "Múltiples formas de extender Python con C"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Cython", diff: "hard",
        q: "¿Qué hace pybind11?",
        opts: ["C++ bindings", "C bindings", "Python bindings", "Cython bindings"],
        ans: 0, exp: "pybind11 conecta C++ con Python"
    },

    // === Optimización y Profiling ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué módulo mide tiempo de ejecución?",
        opts: ["timeit", "profile", "cProfile", "Todos"],
        ans: 3, exp: "timeit para código pequeño, cProfile para perfiles"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué función de timeit repite código?",
        opts: ["timeit()", "repeat()", "run()", "execute()"],
        ans: 1, exp: "repeat() ejecuta timeit() múltiples veces"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué módulo perfila memoria?",
        opts: ["memory_profiler", "tracemalloc", "pympler", "Todos"],
        ans: 3, exp: "Múltiples herramientas de profiling de memoria"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué hace line_profiler?",
        opts: ["Profiling línea por línea", "Profiling función", "Profiling memoria", "Profiling tiempo"],
        ans: 0, exp: "Mide tiempo por línea de código"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué hace @profile en memory_profiler?",
        opts: ["Mide memoria línea por línea", "Mide tiempo", "Mide CPU", "Mide I/O"],
        ans: 0, exp: "Decorador para medir memoria"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué es lazy evaluation?",
        opts: ["Evaluación perezosa", "Evaluación temprana", "Evaluación estricta", "Evaluación parcial"],
        ans: 0, exp: "Calcula solo cuando es necesario"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué es un generador?",
        opts: ["Evaluación lazy", "Evaluación eager", "Ambas", "Ninguna"],
        ans: 0, exp: "Generadores producen valores bajo demanda"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué hace sys.setrecursionlimit()?",
        opts: ["Cambia límite recursión", "Aumenta recursión", "Disminuye recursión", "Elimina límite"],
        ans: 0, exp: "Cambia el límite de profundidad de recursión"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué es el tail recursion?",
        opts: ["Recursión de cola", "Recursión infinita", "Recursión simple", "Recursión binaria"],
        ans: 0, exp: "Python no optimiza recursión de cola"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Profiling", diff: "hard",
        q: "¿Qué hace __slots__?",
        opts: ["Ahorra memoria", "Añade métodos", "Añade atributos", "Ralentiza"],
        ans: 0, exp: "__slots__ evita __dict__, ahorrando memoria"
    },

    // === Patrones de diseño ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón garantiza una sola instancia?",
        opts: ["Singleton", "Factory", "Builder", "Prototype"],
        ans: 0, exp: "Singleton: una única instancia"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón crea objetos sin especificar clase concreta?",
        opts: ["Factory", "Abstract Factory", "Builder", "Prototype"],
        ans: 0, exp: "Factory Method delega creación a subclases"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón construye objetos complejos paso a paso?",
        opts: ["Builder", "Factory", "Prototype", "Singleton"],
        ans: 0, exp: "Builder separa construcción de representación"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón clona objetos?",
        opts: ["Prototype", "Singleton", "Factory", "Builder"],
        ans: 0, exp: "Prototype crea copias de objetos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón permite cambiar comportamiento en runtime?",
        opts: ["Strategy", "Observer", "Decorator", "Adapter"],
        ans: 0, exp: "Strategy encapsula algoritmos intercambiables"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón notifica cambios a múltiples objetos?",
        opts: ["Observer", "Strategy", "Command", "Mediator"],
        ans: 0, exp: "Observer: sujeto observable notifica observadores"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón añade responsabilidades dinámicamente?",
        opts: ["Decorator", "Adapter", "Facade", "Proxy"],
        ans: 0, exp: "Decorator envuelve objetos para añadir funcionalidad"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón controla acceso a otro objeto?",
        opts: ["Proxy", "Adapter", "Facade", "Bridge"],
        ans: 0, exp: "Proxy actúa como intermediario"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón simplifica interfaz de subsistema?",
        opts: ["Facade", "Adapter", "Proxy", "Bridge"],
        ans: 0, exp: "Facade provee interfaz unificada"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Patrones", diff: "hard",
        q: "¿Qué patrón convierte interfaz incompatible?",
        opts: ["Adapter", "Facade", "Proxy", "Bridge"],
        ans: 0, exp: "Adapter permite colaborar clases incompatibles"
    },

    // === Weak References ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué módulo maneja referencias débiles?",
        opts: ["weakref", "gc", "sys", "ref"],
        ans: 0, exp: "weakref permite referencias sin impedir garbage collection"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué crea weakref.ref()?",
        opts: ["Referencia débil", "Referencia fuerte", "Referencia cíclica", "Referencia global"],
        ans: 0, exp: "Devuelve None si el objeto fue recolectado"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué es WeakKeyDictionary?",
        opts: ["Dict con claves débiles", "Dict con valores débiles", "Dict normal", "Dict cíclico"],
        ans: 0, exp: "Claves débiles, si se eliminan, desaparecen"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué es WeakValueDictionary?",
        opts: ["Valores débiles", "Claves débiles", "Ambos débiles", "Ninguno"],
        ans: 0, exp: "Valores débiles, si se eliminan, desaparecen"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué problema solucionan weakref?",
        opts: ["Referencias cíclicas", "Memory leaks", "GC lento", "Todos"],
        ans: 3, exp: "Previenen ciclos que impiden GC"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué módulo fuerza garbage collection?",
        opts: ["gc", "weakref", "sys", "collect"],
        ans: 0, exp: "gc.collect() fuerza GC"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué son las referencias cíclicas?",
        opts: ["A se refiere a B y B a A", "Referencia circular", "Referencia débil", "Referencia fuerte"],
        ans: 0, exp: "Ciclos pueden causar memory leaks"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué función verifica si weakref está vivo?",
        opts: ["ref() is not None", "ref.alive()", "ref.exists()", "ref.valid()"],
        ans: 0, exp: "Llamar a la weakref devuelve objeto o None"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué es WeakSet?",
        opts: ["Set con elementos débiles", "Set con elementos fuertes", "Set normal", "Set cíclico"],
        ans: 0, exp: "WeakSet contiene referencias débiles a elementos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "WeakRef", diff: "hard",
        q: "¿Qué es un callback en weakref?",
        opts: ["Función cuando se elimina objeto", "Función cuando se crea", "Función normal", "Decorador"],
        ans: 0, exp: "Se registra callback para notificar eliminación"
    },

    // === MRO y Herencia Avanzada ===
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué algoritmo usa Python 3 para MRO?",
        opts: ["C3 linearization", "DFS", "BFS", "Dijkstra"],
        ans: 0, exp: "C3 es el algoritmo de resolución de métodos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué función muestra el MRO?",
        opts: ["__mro__", "mro()", "Ambas", "get_mro()"],
        ans: 2, exp: "Clase.__mro__ o Clase.mro()"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué es el diamante de la muerte?",
        opts: ["Herencia múltiple en diamante", "Herencia simple", "Herencia jerárquica", "Herencia híbrida"],
        ans: 0, exp: "Problema con herencia múltiple y MRO"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Cómo resuelve Python el diamante?",
        opts: ["C3 garantiza orden consistente", "Primera clase", "Última clase", "Error"],
        ans: 0, exp: "C3 mantiene un orden lineal"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué es un mixin?",
        opts: ["Clase que añade funcionalidad", "Clase base", "Clase abstracta", "Metaclase"],
        ans: 0, exp: "Mixin es para herencia múltiple, añade métodos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué orden tiene el MRO por defecto?",
        opts: ["Primero clase, luego padres izquierda a derecha", "Primero padres, luego clase", "Solo padres", "Solo clase"],
        ans: 0, exp: "MRO: clase, luego padres en orden"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué es super() en herencia múltiple?",
        opts: ["Sigue el MRO", "Solo primer padre", "Solo segundo padre", "Error"],
        ans: 0, exp: "super() sigue el MRO correctamente"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Puede cambiar el MRO dinámicamente?",
        opts: ["Sí, con metaclases", "No", "Solo en runtime", "Con decoradores"],
        ans: 0, exp: "Metaclases pueden modificar el MRO"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué hace type.__mro__?",
        opts: ["Muestra MRO de type", "Error", "Muestra object", "Muestra clase"],
        ans: 0, exp: "type tiene su propio MRO"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "MRO", diff: "hard",
        q: "¿Qué es un ABC?",
        opts: ["Abstract Base Class", "Abstract Basic Class", "Advanced Base Class", "Absolute Base Class"],
        ans: 0, exp: "ABC del módulo abc"
    },

    {
    profe: false, intermedio: true, avanzado: false, unit: "Depuración", diff: "medium",
    q: "¿Qué error tiene este código?\ndef calcular_media(lista):\n    return sum(lista) / len(lista)\nprint(calcular_media([1,2,3,4]))",
    opts: ["Funciona correctamente", "Error si lista vacía", "Error de sintaxis", "sum no existe"],
    ans: 1, exp: "Si lista=[] → ZeroDivisionError. Debe validar lista vacía"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Depuración", diff: "medium",
    q: "Analiza: x = [1,2,3]; y = x; y.append(4); print(x). ¿Qué imprime y por qué?",
    opts: ["[1,2,3] porque y es copia", "[1,2,3,4] porque apuntan al mismo objeto", "Error", "[1,2,3] porque x no cambia"],
    ans: 1, exp: "y = x no copia, ambas variables apuntan a la misma lista"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Depuración", diff: "medium",
    q: "¿Qué error lanza? def f(x=[]): x.append(1); return x; print(f()); print(f())",
    opts: ["TypeError", "Lista acumula valores", "NameError", "Funciona sin error"],
    ans: 1, exp: "El default [] se crea UNA sola vez → [1] luego [1,1] (efecto colateral)"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Depuración", diff: "medium",
    q: "Corrige: for i in range(10):\n    print(i)\n    if i == 5:\n        break\nelse:\n    print('Terminó')",
    opts: ["Falta indentación", "else nunca se ejecuta con break", "range mal", "print sobra"],
    ans: 1, exp: "for-else: else solo si NO hay break"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Depuración", diff: "medium",
    q: "¿Qué error? x = 10; def cambiar(): x = 20; cambiar(); print(x)",
    opts: ["Error global/local", "Imprime 10", "Imprime 20", "NameError"],
    ans: 1, exp: "x dentro es local, no modifica la global"
},

// === COMPLETAR CÓDIGO (Rellenar fragmento) ===
{
    profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
    q: "Completa para que invierta un string: def invertir(s):\n    return s[___]",
    opts: ["::-1", ":-1", "::1", "[::-1]"],
    ans: 0, exp: "s[::-1] invierte el string"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
    q: "Completa: numeros = [1,2,3,4,5]; pares = [x for x in numeros if ___]",
    opts: ["x % 2 == 0", "x / 2 == 0", "x // 2 == 0", "x % 2 != 0"],
    ans: 0, exp: "Filtra números pares: x % 2 == 0"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
    q: "Completa el decorador: def mi_decorador(func):\n    def wrapper(*args, **kwargs):\n        print('Antes')\n        resultado = ___(*args, **kwargs)\n        print('Después')\n        return resultado\n    return wrapper",
    opts: ["func", "wrapper", "resultado", "decorador"],
    ans: 0, exp: "Se llama a la función original 'func'"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
    q: "Completa: archivo = open('datos.txt', 'r'); contenido = archivo.___(); archivo.close()",
    opts: ["read()", "write()", "close()", "open()"],
    ans: 0, exp: "read() lee el contenido del archivo"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
    q: "Completa para filtrar números > 10: lista = [5,12,8,15,3]; filtrados = list(filter(___ x: x > 10, lista))",
    opts: ["lambda", "def", "function", "filter"],
    ans: 0, exp: "filter(lambda x: x>10, lista)"
},

// === PREDECIR SALIDA (Código complejo) ===
{
    profe: false, intermedio: true, avanzado: false, unit: "Predicción", diff: "medium",
    q: "¿Qué imprime? def func(a,b=[]):\n    b.append(a)\n    return b\nprint(func(1))\nprint(func(2))",
    opts: ["[1] y [2]", "[1] y [1,2]", "[1] y [1]", "Error"],
    ans: 1, exp: "La lista default persiste entre llamadas"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Predicción", diff: "medium",
    q: "¿Qué imprime? x = [1,2,3]; y = x[:]; y.append(4); print(x)",
    opts: ["[1,2,3,4]", "[1,2,3]", "[4]", "Error"],
    ans: 1, exp: "[:] crea una copia superficial, x no cambia"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Predicción", diff: "medium",
    q: "¿Qué imprime? for i in range(3):\n    for j in range(2):\n        if i == j:\n            break\n    print(i, j)",
    opts: ["0 0, 1 0, 2 1", "0 0, 1 1, 2 2", "0 0, 1 0, 2 0", "Error"],
    ans: 0, exp: "break solo rompe el bucle interno"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Predicción", diff: "medium",
    q: "¿Qué imprime? def gen():\n    yield 1\n    yield 2\n    return 3\ng = gen()\nprint(next(g))\nprint(next(g))\nprint(next(g))",
    opts: ["1,2,3", "1,2,StopIteration", "1,2,None", "Error"],
    ans: 1, exp: "return 3 se convierte en valor de StopIteration"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Predicción", diff: "medium",
    q: "¿Qué imprime? a = [1,2,3]; b = a; a = [4,5,6]; print(b)",
    opts: ["[4,5,6]", "[1,2,3]", "Error", "[1,2,3,4,5,6]"],
    ans: 1, exp: "reasignar 'a' no afecta a 'b' que sigue apuntando a la lista original"
},

// === REFACTORIZACIÓN (Mejorar código) ===
{
    profe: false, intermedio: true, avanzado: false, unit: "Refactorización", diff: "medium",
    q: "¿Cómo refactorizas? if x == True: return True else: return False",
    opts: ["return x", "return x == True", "return bool(x)", "return True if x else False"],
    ans: 0, exp: "return x es más simple y equivalente"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Refactorización", diff: "medium",
    q: "Refactoriza: lista = []; for i in range(10): lista.append(i*2)",
    opts: ["lista = [i*2 for i in range(10)]", "lista = map(i*2, range(10))", "lista = list(range(0,20,2))", "A y C son correctas"],
    ans: 3, exp: "Ambas opciones mejoran el código"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Refactorización", diff: "medium",
    q: "Refactoriza: with open('f.txt','r') as f: datos = f.read()\n# procesar datos\nf.close()",
    opts: ["Eliminar f.close()", "Añadir f.flush()", "Mover close antes", "Está bien"],
    ans: 0, exp: "with ya cierra automáticamente, close() sobra"
},

// === OPTIMIZACIÓN (Eficiencia) ===
{
    profe: false, intermedio: true, avanzado: false, unit: "Optimización", diff: "medium",
    q: "¿Qué es más eficiente para buscar si un elemento existe?",
    opts: ["lista = [1,2,3]; if 2 in lista", "set_ = {1,2,3}; if 2 in set_", "tupla = (1,2,3); if 2 in tupla", "Son iguales"],
    ans: 1, exp: "set tiene búsqueda O(1), lista O(n)"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Optimización", diff: "medium",
    q: "¿Qué es mejor para concatenar muchos strings?",
    opts: ["s += texto", "s = s + texto", "' '.join(lista)", "s = ''.join(lista)"],
    ans: 3, exp: "join() es O(n), + es O(n²) por inmutabilidad"
},
{
    profe: false, intermedio: true, avanzado: false, unit: "Optimización", diff: "medium",
    q: "Optimiza: resultado = []\nfor i in range(1000):\n    if i % 2 == 0:\n        resultado.append(i*2)",
    opts: ["[i*2 for i in range(1000) if i%2==0]", "list(map(lambda i: i*2, filter(lambda i: i%2==0, range(1000))))", "Ambas", "Ninguna"],
    ans: 2, exp: "Ambas son más eficientes y legibles"
},


// ==================== NIVEL AVANZADO REAL (con análisis profundo) ====================

// === DEPURACIÓN AVANZADA ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Depuración avanzada", diff: "hard",
    q: "¿Qué error de memoria puede ocurrir? def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\nfib(1000)",
    opts: ["RecursionError", "MemoryError", "StackOverflow", "A y C"],
    ans: 3, exp: "RecursionError por profundidad, además de ineficiencia O(2^n)"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Depuración avanzada", diff: "hard",
    q: "Analiza: from threading import Thread\nx = 0\ndef incrementa():\n    global x\n    for _ in range(1000000):\n        x += 1\nt1 = Thread(target=incrementa)\nt2 = Thread(target=incrementa)\nt1.start(); t2.start()\nt1.join(); t2.join()\nprint(x). ¿Qué problema hay?",
    opts: ["GIL evita problema", "Race condition, x < 2000000", "Funciona bien", "Deadlock"],
    ans: 1, exp: "x += 1 no es atómico, hay condición de carrera"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Depuración avanzada", diff: "hard",
    q: "¿Qué pasa? class A:\n    def __init__(self):\n        self.lista = []\n    def __getattr__(self, name):\n        return self.lista[name]\na = A()\nprint(a[0])",
    opts: ["Funciona", "TypeError: 'A' no es subscriptable", "IndexError", "Recursión infinita"],
    ans: 1, exp: "Se necesita __getitem__ para indexación, no __getattr__"
},

// === COMPLETAR CÓDIGO AVANZADO ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Completar avanzado", diff: "hard",
    q: "Completa el decorador que mide tiempo: import time\ndef temporizador(func):\n    def wrapper(*args, **kwargs):\n        inicio = ___(...)\n        resultado = func(*args, **kwargs)\n        print(f'Tiempo: {time.time() - inicio}')\n        return resultado\n    return wrapper",
    opts: ["time.time()", "time.now()", "time.clock()", "time.perf_counter()"],
    ans: 3, exp: "time.perf_counter() es más preciso para medir"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Completar avanzado", diff: "hard",
    q: "Completa el generador infinito: def pares():\n    n = 0\n    while True:\n        ___ n\n        n += 2",
    opts: ["return", "yield", "print", "next"],
    ans: 1, exp: "yield convierte la función en generador"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Completar avanzado", diff: "hard",
    q: "Completa la metaclase: class Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['version'] = 1.0\n        return ___.__new__(cls, name, bases, dct)",
    opts: ["super()", "type", "object", "cls"],
    ans: 0, exp: "super().__new__ llama a la metaclase padre"
},

// === PREDECIR SALIDA AVANZADA ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Predicción avanzada", diff: "hard",
    q: "¿Qué imprime? def decorador(func):\n    def wrapper():\n        print('A')\n        func()\n        print('B')\n    return wrapper\n@decorador\ndef hola():\n    print('C')\nhola()",
    opts: ["A C B", "C A B", "A B C", "C B A"],
    ans: 0, exp: "El decorador envuelve: antes (A), función (C), después (B)"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Predicción avanzada", diff: "hard",
    q: "¿Qué imprime? import sys\na = [1,2,3]\nb = a\nprint(sys.getrefcount(a))  # Aprox",
    opts: ["1", "2", "3", "4"],
    ans: 2, exp: "Referencias: a, b, y argumento de getrefcount"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Predicción avanzada", diff: "hard",
    q: "¿Qué imprime? def gen():\n    yield 1\n    yield 2\n    yield 3\ng = gen()\nprint(list(g))\nprint(list(g))",
    opts: ["[1,2,3] y [1,2,3]", "[1,2,3] y []", "[1,2,3] y None", "Error"],
    ans: 1, exp: "Los generadores se agotan después de iterarlos"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Predicción avanzada", diff: "hard",
    q: "¿Qué imprime? class A:\n    pass\nclass B(A):\n    pass\nclass C(A):\n    pass\nclass D(B,C):\n    pass\nprint(D.__mro__)",
    opts: ["(D,B,C,A,object)", "(D,B,A,C,object)", "(D,C,B,A,object)", "(D,B,A,object,C)"],
    ans: 0, exp: "MRO con C3: D,B,C,A,object"
},

// === REFACTORIZACIÓN AVANZADA ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Refactorización avanzada", diff: "hard",
    q: "Refactoriza usando async/await: def fetch_urls(urls):\n    resultados = []\n    for url in urls:\n        resultados.append(requests.get(url))\n    return resultados",
    opts: ["Usar threading", "Usar asyncio y aiohttp", "Usar multiprocessing", "Está bien así"],
    ans: 1, exp: "Para I/O concurrente, asyncio es más eficiente"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Refactorización avanzada", diff: "hard",
    q: "Refactoriza para evitar recursión: def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n-1)",
    opts: ["Usar reduce", "Usar bucle iterativo", "Usar math.factorial", "B y C son correctas"],
    ans: 3, exp: "Iterativo evita recursión, math.factorial es nativo"
},

// === OPTIMIZACIÓN AVANZADA ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Optimización avanzada", diff: "hard",
    q: "¿Qué técnica usas para cachear resultados de funciones costosas?",
    opts: ["@lru_cache", "@cached", "Variables globales", "Archivos"],
    ans: 0, exp: "functools.lru_cache memoiza automáticamente"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Optimización avanzada", diff: "hard",
    q: "¿Qué hace __slots__ en una clase?",
    opts: ["Ahorra memoria", "Aumenta velocidad", "Evita __dict__", "Todos"],
    ans: 3, exp: "__slots__ reduce memoria y mejora velocidad"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Optimización avanzada", diff: "hard",
    q: "Para procesar un archivo de 10GB ¿qué usas?",
    opts: ["read() todo", "readlines()", "iteraci\u00f3n línea por l\u00ednea", "cargar en RAM"],
    ans: 2, exp: "for linea in archivo: procesa sin cargar todo"
},

// === ANÁLISIS DE PERFORMANCE ===
{
    profe: false, intermedio: false, avanzado: true, unit: "Performance", diff: "hard",
    q: "¿Qué herramienta usas para encontrar cuello de botella?",
    opts: ["cProfile", "pdb", "logging", "print"],
    ans: 0, exp: "cProfile perfiliza el código"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Performance", diff: "hard",
    q: "Analiza: ¿por qué es lento? resultado = []\nfor i in range(10000):\n    resultado = resultado + [i]",
    opts: ["Crea nueva lista cada iteración O(n²)", "Append es lento", "Range es lento", "Ninguna"],
    ans: 0, exp: "Concatenar con + copia toda la lista"
},
{
    profe: false, intermedio: false, avanzado: true, unit: "Performance", diff: "hard",
    q: "¿Qué es más rápido?",
    opts: ["if x in set_largo", "if x in lista_larga", "Son iguales", "Depende del valor"],
    ans: 0, exp: "set es O(1), lista es O(n)"
},

// ==================== ERRORES DE SINTAXIS (SyntaxError) ====================
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores de Sintaxis", diff: "easy",
        q: "¿Qué error tiene este código?\n\nedad = 20\nif edad > 18\n    print('Eres mayor de edad')",
        opts: ["Falta ':' después del if", "Falta indentación", "Variable no definida", "Error de tipo"],
        ans: 0, exp: "Falta el ':' al final de la línea if"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores de Sintaxis", diff: "easy",
        q: "¿Qué error tiene este código?\n\nwhile True print('Hola mundo')",
        opts: ["Faltan paréntesis", "Falta ':' después del while", "Falta indentación", "True está mal escrito"],
        ans: 1, exp: "Sintaxis correcta: while True: print('Hola mundo')"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores de Sintaxis", diff: "easy",
        q: "¿Qué error tiene este código?\n\nfor i in range(10)\n    print(i)",
        opts: ["range mal escrito", "Falta ':' después del for", "i no está definida", "Faltan paréntesis"],
        ans: 1, exp: "Sintaxis correcta: for i in range(10):"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores de Sintaxis", diff: "easy",
        q: "¿Qué error tiene este código?\n\ndef suma(a b):\n    return a + b",
        opts: ["Falta ':' después de def", "Falta la coma entre a y b", "return mal escrito", "Faltan paréntesis"],
        ans: 1, exp: "Los parámetros deben separarse con coma: def suma(a, b):"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores de Sintaxis", diff: "easy",
        q: "¿Qué error tiene este código?\n\nprint('Hola mundo'",
        opts: ["Falta la comilla de cierre", "Falta el paréntesis de cierre", "Falta el string", "Ambos A y B"],
        ans: 3, exp: "Faltan: la comilla de cierre y el paréntesis"
    },

    // ==================== ERRORES DE EJECUCIÓN (Runtime Errors) ====================
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\n10 * (1/0)",
        opts: ["SyntaxError", "ZeroDivisionError", "TypeError", "NameError"],
        ans: 1, exp: "División por cero: ZeroDivisionError: division by zero"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\n4 + spam * 3",
        opts: ["SyntaxError", "ZeroDivisionError", "TypeError", "NameError"],
        ans: 3, exp: "'spam' no está definido: NameError: name 'spam' is not defined"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\n'2' + 2",
        opts: ["SyntaxError", "ZeroDivisionError", "TypeError", "NameError"],
        ans: 2, exp: "No se puede concatenar str con int: TypeError"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\nlista = [1, 2, 3]\nprint(lista[5])",
        opts: ["KeyError", "IndexError", "TypeError", "ValueError"],
        ans: 1, exp: "Índice fuera de rango: IndexError: list index out of range"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\ndic = {'a': 1, 'b': 2}\nprint(dic['c'])",
        opts: ["IndexError", "KeyError", "TypeError", "AttributeError"],
        ans: 1, exp: "La clave 'c' no existe: KeyError: 'c'"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "¿Qué error produce este código?\n\nint('hola')",
        opts: ["TypeError", "ValueError", "SyntaxError", "NameError"],
        ans: 1, exp: "No se puede convertir 'hola' a entero: ValueError"
    },

    // ==================== ERRORES DE INDENTACIÓN ====================
    {
        profe: true, intermedio: false, avanzado: false, unit: "Indentación", diff: "easy",
        q: "¿Qué error tiene este código?\n\ndef saludar():\nprint('Hola')\nprint('Mundo')",
        opts: ["Falta ':'", "Falta indentación en print", "Faltan paréntesis", "print mal escrito"],
        ans: 1, exp: "El bloque dentro de la función debe tener indentación"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Indentación", diff: "easy",
        q: "¿Qué error tiene este código?\n\nif True:\n    print('A')\n  print('B')",
        opts: ["Indentación inconsistente", "Falta ':'", "True está mal", "print mal escrito"],
        ans: 0, exp: "No se pueden mezclar 4 espacios con 2 espacios"
    },

    // ==================== COMPLETAR CÓDIGO (BÁSICO) ====================
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar Código", diff: "easy",
        q: "Completa el código para leer del teclado:\n\nimport sys\nname = sys.stdin.___()\nprint('Hello ' + name)",
        opts: ["read()", "readline()", "input()", "scan()"],
        ans: 1, exp: "sys.stdin.readline() lee una línea de la entrada"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar Código", diff: "easy",
        q: "Completa el bucle for para recorrer la tupla:\n\nmylist = ('iPhone', 'Pixel', 'Samsung')\n___ i in mylist:\n    print(i)",
        opts: ["while", "for", "foreach", "iterate"],
        ans: 1, exp: "for i in mylist: itera sobre cada elemento"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar Código", diff: "easy",
        q: "Completa la definición de la lista:\n\nmylist = ___'iPhone', 'Pixel', 'Samsung'___",
        opts: ["( ... )", "{ ... }", "[ ... ]", "< ... >"],
        ans: 2, exp: "Las listas usan corchetes: ['iPhone', 'Pixel', 'Samsung']"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar Código", diff: "easy",
        q: "Completa la definición de la tupla:\n\nmyTuple = ___'iPhone', 'Pixel', 'Samsung'___",
        opts: ["[ ... ]", "{ ... }", "( ... )", "< ... >"],
        ans: 2, exp: "Las tuplas usan paréntesis: ('iPhone', 'Pixel', 'Samsung')"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar Código", diff: "easy",
        q: "Completa la definición del conjunto (set):\n\nmyset = ___'iPhone', 'Pixel', 'Samsung'___",
        opts: ["[ ... ]", "( ... )", "{ ... }", "< ... >"],
        ans: 2, exp: "Los sets usan llaves: {'iPhone', 'Pixel', 'Samsung'}"
    },

    // ==================== ANÁLISIS DE CÓDIGO (¿Qué hace?) ====================
    {
        profe: true, intermedio: false, avanzado: false, unit: "Análisis de Código", diff: "easy",
        q: "¿Qué hace este código?\n\nmylist = ['iPhone', 'Pixel', 'Samsung']\nfor i in mylist:\n    print(i)",
        opts: ["Imprime la lista completa", "Imprime cada elemento en una línea", "Imprime el primer elemento", "Da error"],
        ans: 1, exp: "El bucle for recorre e imprime cada elemento"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Análisis de Código", diff: "easy",
        q: "¿Qué imprime este código?\n\nmyTuple = ('iPhone', 'Pixel', 'Samsung')\nmyTuple[1] = 'OnePlus'\nprint(myTuple)",
        opts: ["('iPhone', 'OnePlus', 'Samsung')", "Error: las tuplas son inmutables", "('OnePlus', 'Pixel', 'Samsung')", "['iPhone', 'OnePlus', 'Samsung']"],
        ans: 1, exp: "Las tuplas no se pueden modificar después de creadas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Análisis de Código", diff: "easy",
        q: "¿Qué imprime este código?\n\nmyset = {'iPhone', 'Pixel', 'Samsung', 'iPhone'}\nprint(myset)",
        opts: ["{'iPhone', 'Pixel', 'Samsung', 'iPhone'}", "{'iPhone', 'Pixel', 'Samsung'}", "['iPhone', 'Pixel', 'Samsung']", "('iPhone', 'Pixel', 'Samsung')"],
        ans: 1, exp: "Los sets eliminan automáticamente los duplicados"
    },

    // ==================== INTERMEDIO - ERRORES MÁS COMPLEJOS ====================
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "¿Qué error produce este código?\n\ndef suma(a=[]):\n    a.append(1)\n    return a\nprint(suma())\nprint(suma())",
        opts: ["TypeError", "NameError", "Lista acumula valores [1] luego [1,1]", "SyntaxError"],
        ans: 2, exp: "El valor por defecto mutable persiste entre llamadas"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "¿Qué error produce este código?\n\nx = 10\ndef cambiar():\n    x = 20\ncambiar()\nprint(x)",
        opts: ["NameError", "Imprime 10 (x global no cambió)", "Imprime 20", "SyntaxError"],
        ans: 1, exp: "x dentro de la función es local, no modifica la global"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "¿Qué error produce este código?\n\nclass A:\n    pass\na = A()\nprint(a.x)",
        opts: ["KeyError", "IndexError", "AttributeError", "TypeError"],
        ans: 2, exp: "El objeto no tiene atributo 'x': AttributeError"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "¿Qué error produce este código?\n\nfrom math import sqrt\nprint(sqrt(-1))",
        opts: ["ValueError", "TypeError", "NameError", "MathDomainError"],
        ans: 0, exp: "Raíz cuadrada de número negativo: ValueError: math domain error"
    },

    // ==================== INTERMEDIO - COMPLETAR CÓDIGO ====================
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar Código", diff: "medium",
        q: "Completa la comprensión de listas:\n\nnumeros = [1, 2, 3, 4, 5]\npares = [x for x in numeros if ___]",
        opts: ["x % 2 == 0", "x / 2 == 0", "x // 2 == 0", "x % 2 != 0"],
        ans: 0, exp: "x % 2 == 0 filtra los números pares"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar Código", diff: "medium",
        q: "Completa el decorador:\n\ndef mi_decorador(func):\n    def wrapper(*args, **kwargs):\n        print('Antes')\n        resultado = ___(*args, **kwargs)\n        print('Después')\n        return resultado\n    return wrapper",
        opts: ["func", "wrapper", "decorador", "resultado"],
        ans: 0, exp: "Se llama a la función original 'func'"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar Código", diff: "medium",
        q: "Completa el manejador de contexto:\n\nwith ___('archivo.txt', 'r') as f:\n    contenido = f.read()",
        opts: ["open", "file", "read", "write"],
        ans: 0, exp: "open() es la función para abrir archivos"
    },

    // ==================== INTERMEDIO - PREDECIR SALIDA ====================
    {
        profe: false, intermedio: true, avanzado: false, unit: "Predecir Salida", diff: "medium",
        q: "¿Qué imprime este código?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        opts: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        ans: 1, exp: "y = x hace que ambas apunten al mismo objeto"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Predecir Salida", diff: "medium",
        q: "¿Qué imprime este código?\n\nfor i in range(3):\n    for j in range(2):\n        if i == j:\n            break\n    print(i, j)",
        opts: ["0 0, 1 0, 2 1", "0 0, 1 1, 2 2", "0 0, 1 0, 2 0", "Error"],
        ans: 0, exp: "break solo rompe el bucle interno, no el externo"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Predecir Salida", diff: "medium",
        q: "¿Qué imprime este código?\n\ndef gen():\n    yield 1\n    yield 2\ng = gen()\nprint(list(g))\nprint(list(g))",
        opts: ["[1,2] y [1,2]", "[1,2] y []", "[1,2] y None", "Error"],
        ans: 1, exp: "Los generadores se agotan después de iterarlos"
    },

    // ==================== AVANZADO - ERRORES COMPLEJOS ====================
    {
        profe: false, intermedio: false, avanzado: true, unit: "Errores Avanzados", diff: "hard",
        q: "¿Qué error produce este código?\n\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\nfib(1000)",
        opts: ["MemoryError", "RecursionError", "StackOverflow", "Ambos B y C"],
        ans: 3, exp: "RecursionError por profundidad máxima excedida"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Errores Avanzados", diff: "hard",
        q: "¿Qué problema tiene este código con hilos?\n\nfrom threading import Thread\nx = 0\ndef inc():\n    global x\n    for _ in range(1000000):\n        x += 1\nt1 = Thread(target=inc)\nt2 = Thread(target=inc)\nt1.start(); t2.start()\nt1.join(); t2.join()\nprint(x)",
        opts: ["Deadlock", "Race condition (x < 2000000)", "GIL evita problema", "SyntaxError"],
        ans: 1, exp: "x += 1 no es atómico, hay condición de carrera"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Errores Avanzados", diff: "hard",
        q: "¿Qué error produce este código?\n\ndef funcion():\n    return\n    print('Esto no se ejecuta')\nprint(funcion())",
        opts: ["SyntaxError", "IndentationError", "Imprime None", "NameError"],
        ans: 2, exp: "return vacío devuelve None, el código después es inalcanzable"
    },

    // ==================== AVANZADO - COMPLETAR CÓDIGO COMPLEJO ====================
    {
        profe: false, intermedio: false, avanzado: true, unit: "Completar Avanzado", diff: "hard",
        q: "Completa la metaclase:\n\nclass Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['version'] = 1.0\n        return ___.__new__(cls, name, bases, dct)",
        opts: ["super()", "type", "object", "cls"],
        ans: 0, exp: "super().__new__() llama a la metaclase padre"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Completar Avanzado", diff: "hard",
        q: "Completa el generador infinito:\n\ndef pares():\n    n = 0\n    while True:\n        ___ n\n        n += 2",
        opts: ["return", "yield", "print", "next"],
        ans: 1, exp: "yield convierte la función en generador"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Completar Avanzado", diff: "hard",
        q: "Completa el decorador con argumentos:\n\ndef repetir(veces):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(___):\n                resultado = func(*args, **kwargs)\n            return resultado\n        return wrapper\n    return decorador",
        opts: ["veces", "args", "kwargs", "func"],
        ans: 0, exp: "Se usa el parámetro 'veces' del decorador"
    },

    // ==================== AVANZADO - PREDECIR SALIDA COMPLEJA ====================
    {
        profe: false, intermedio: false, avanzado: true, unit: "Predecir Salida", diff: "hard",
        q: "¿Qué imprime este código?\n\nclass A:\n    pass\nclass B(A):\n    pass\nclass C(A):\n    pass\nclass D(B, C):\n    pass\nprint(D.__mro__)",
        opts: ["(D, B, C, A, object)", "(D, B, A, C, object)", "(D, C, B, A, object)", "(D, B, A, object, C)"],
        ans: 0, exp: "MRO con algoritmo C3: D, B, C, A, object"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Predecir Salida", diff: "hard",
        q: "¿Qué imprime este código?\n\ndef decorador(func):\n    def wrapper():\n        print('A')\n        func()\n        print('B')\n    return wrapper\n@decorador\ndef hola():\n    print('C')\nhola()",
        opts: ["A C B", "C A B", "A B C", "C B A"],
        ans: 0, exp: "El decorador ejecuta: antes (A), función (C), después (B)"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Predecir Salida", diff: "hard",
        q: "¿Qué imprime este código?\n\ndef f(x, lista=[]):\n    lista.append(x)\n    return lista\nprint(f(1))\nprint(f(2))",
        opts: ["[1] y [2]", "[1] y [1,2]", "[1] y [1]", "Error"],
        ans: 1, exp: "La lista mutable por defecto persiste entre llamadas"
    },
     {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Sintaxis", diff: "easy",
        q: "Codigo:\n\nedad = 20\nif edad > 18\n    print('Eres mayor de edad')\n\nError:\nFile script.py, line 2\n    if edad > 18\n               ^\nSyntaxError: invalid syntax\n\nQue falta?",
        opts: ["Dos puntos : al final del if", "Parentesis en edad", "Comilla en print", "Indentacion"],
        ans: 0, exp: "Falta : despues de la condicion if"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Sintaxis", diff: "easy",
        q: "Codigo:\n\nwhile True print('Hello world')\n\nError:\nFile stdin, line 1\n    while True print('Hello world')\n               ^^^^^\nSyntaxError: invalid syntax\n\nQue falta?",
        opts: ["Dos puntos : despues de True", "Parentesis en print", "Comillas", "Indentacion"],
        ans: 0, exp: "Falta : despues de while True"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\n10 * (1/0)\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\n    10 * (1/0)\n          ~^~\nZeroDivisionError: division by zero\n\nQue error es?",
        opts: ["ZeroDivisionError", "TypeError", "NameError", "SyntaxError"],
        ans: 0, exp: "Division por cero"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\n4 + spam * 3\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\n    4 + spam * 3\n        ^^^^\nNameError: name 'spam' is not defined\n\nQue error es?",
        opts: ["NameError", "TypeError", "ZeroDivisionError", "SyntaxError"],
        ans: 0, exp: "spam no esta definido"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\n'2' + 2\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\n    '2' + 2\n    ~~~~^~~\nTypeError: can only concatenate str (not int) to str\n\nQue error es?",
        opts: ["TypeError", "NameError", "ValueError", "SyntaxError"],
        ans: 0, exp: "No se puede sumar str con int"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nlista = [1, 2, 3]\nprint(lista[5])\n\nError:\nTraceback (most recent call last):\n  File stdin, line 2, in module\n    print(lista[5])\nIndexError: list index out of range\n\nQue error es?",
        opts: ["IndexError", "KeyError", "TypeError", "ValueError"],
        ans: 0, exp: "Indice 5 fuera del rango de la lista"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nd = {'a': 1, 'b': 2}\nprint(d['c'])\n\nError:\nTraceback (most recent call last):\n  File stdin, line 2, in module\n    print(d['c'])\nKeyError: 'c'\n\nQue error es?",
        opts: ["KeyError", "IndexError", "TypeError", "ValueError"],
        ans: 0, exp: "La clave c no existe en el diccionario"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nint('hola')\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\n    int('hola')\nValueError: invalid literal for int() with base 10: 'hola'\n\nQue error es?",
        opts: ["ValueError", "TypeError", "NameError", "SyntaxError"],
        ans: 0, exp: "No se puede convertir hola a entero"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "Codigo:\n\ndef agregar_valor(valor, lista=[]):\n    lista.append(valor)\n    return lista\n\nprint(agregar_valor(1))\nprint(agregar_valor(2))\nprint(agregar_valor(3))\n\nSalida:\n[1]\n[1, 2]\n[1, 2, 3]\n\nPor que la lista acumula valores?",
        opts: ["El default [] se crea una sola vez", "La lista es global", "Error en la funcion", "Por el return"],
        ans: 0, exp: "Los parametros por defecto mutables persisten entre llamadas"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "Codigo:\n\nx = 10\n\ndef cambiar():\n    x = 20\n\ncambiar()\nprint(x)\n\nSalida:\n10\n\nPor que no cambio a 20?",
        opts: ["x dentro es local", "La funcion no se ejecuta", "Error de sintaxis", "x es inmutable"],
        ans: 0, exp: "La variable dentro de la funcion es local, no modifica la global"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Errores Runtime", diff: "hard",
        q: "Codigo:\n\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(1000))\n\nError:\nTraceback (most recent call last):\n  File stdin, line 5, in fibonacci\n    return fibonacci(n-1) + fibonacci(n-2)\n  [Previous line repeated 995 more times]\nRecursionError: maximum recursion depth exceeded\n\nCual es la solucion?",
        opts: ["Usar iteracion en lugar de recursion", "Aumentar limite de recursion", "Usar caching", "Todas las anteriores"],
        ans: 3, exp: "Se puede usar iteracion, sys.setrecursionlimit, o lru_cache"
    },

    // ==================== COMPLETAR CODIGO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa el codigo para leer del teclado:\n\nimport sys\nname = sys.stdin.______()\nprint('Hello ' + name)",
        opts: ["readline", "read", "input", "scan"],
        ans: 0, exp: "sys.stdin.readline() lee una linea de entrada"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa el bucle for:\n\nmylist = ('iPhone', 'Pixel', 'Samsung')\n______ i in mylist:\n    print(i)",
        opts: ["for", "while", "if", "foreach"],
        ans: 0, exp: "for i in mylist: itera sobre cada elemento de la tupla"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa la definicion de la lista:\n\nmylist = ______'iPhone', 'Pixel', 'Samsung'______\nprint(mylist)\n\n# Salida: ['iPhone', 'Pixel', 'Samsung']",
        opts: ["[ ... ]", "( ... )", "{ ... }", "< ... >"],
        ans: 0, exp: "Las listas usan corchetes [ ]"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa la definicion de la tupla:\n\nmyTuple = ______'iPhone', 'Pixel', 'Samsung'______\nprint(myTuple)\n\n# Salida: ('iPhone', 'Pixel', 'Samsung')",
        opts: ["( ... )", "[ ... ]", "{ ... }", "< ... >"],
        ans: 0, exp: "Las tuplas usan parentesis ( )"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa la definicion del conjunto (set):\n\nmyset = ______'iPhone', 'Pixel', 'Samsung'______\nprint(myset)\n\n# Salida: {'iPhone', 'Pixel', 'Samsung'}",
        opts: ["{ ... }", "[ ... ]", "( ... )", "< ... >"],
        ans: 0, exp: "Los sets usan llaves { }"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa la comprehension de lista:\n\nnumeros = [1, 2, 3, 4, 5, 6]\npares = [x for x in numeros if ______]\nprint(pares)\n\n# Salida: [2, 4, 6]",
        opts: ["x % 2 == 0", "x / 2 == 0", "x // 2 == 0", "x % 2 != 0"],
        ans: 0, exp: "x % 2 == 0 filtra los numeros pares"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa la comprehension de diccionario:\n\ncuadrados = {x: ______ for x in range(1, 4)}\nprint(cuadrados)\n\n# Salida: {1: 1, 2: 4, 3: 9}",
        opts: ["x**2", "x*2", "x+x", "pow(x,1)"],
        ans: 0, exp: "x**2 calcula el cuadrado de x"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa el decorador:\n\ndef mi_decorador(func):\n    def wrapper(*args, **kwargs):\n        print('Antes de la funcion')\n        resultado = ______(*args, **kwargs)\n        print('Despues de la funcion')\n        return resultado\n    return wrapper\n\n@mi_decorador\ndef saludar():\n    print('Hola')\n\nsaludar()\n\n# Salida:\n# Antes de la funcion\n# Hola\n# Despues de la funcion",
        opts: ["func", "wrapper", "decorador", "resultado"],
        ans: 0, exp: "Se llama a la funcion original 'func'"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa el manejador de contexto:\n\nwith ______('archivo.txt', 'r') as f:\n    contenido = f.read()\n    print(contenido)",
        opts: ["open", "file", "read", "write"],
        ans: 0, exp: "open() es la funcion para abrir archivos"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Completar", diff: "hard",
        q: "Completa el generador:\n\ndef generador_pares():\n    n = 0\n    while True:\n        ______ n\n        n += 2\n\ng = generador_pares()\nprint(next(g))  # 0\nprint(next(g))  # 2\nprint(next(g))  # 4",
        opts: ["yield", "return", "print", "next"],
        ans: 0, exp: "yield convierte la funcion en generador"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Completar", diff: "hard",
        q: "Completa el decorador con argumentos:\n\ndef repetir(veces):\n    def decorador(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(______):\n                resultado = func(*args, **kwargs)\n            return resultado\n        return wrapper\n    return decorador\n\n@repetir(3)\ndef hola():\n    print('Hola')\n\nhola()\n\n# Salida:\n# Hola\n# Hola\n# Hola",
        opts: ["veces", "args", "kwargs", "func"],
        ans: 0, exp: "Se usa el parametro 'veces' del decorador externo"
    },

    // ==================== ANALISIS DE CODIGO EXTENSO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Analisis", diff: "easy",
        q: "Analiza el siguiente codigo:\n\nmylist = ['iPhone', 'Pixel', 'Samsung']\nfor i in mylist:\n    print(i)\n\nQue imprime?",
        opts: ["iPhone Pixel Samsung (cada uno en nueva linea)", "['iPhone', 'Pixel', 'Samsung']", "iPhone", "Error"],
        ans: 0, exp: "El bucle for recorre e imprime cada elemento de la lista"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Analisis", diff: "easy",
        q: "Analiza el siguiente codigo:\n\nmyTuple = ('iPhone', 'Pixel', 'Samsung')\nmyTuple[1] = 'OnePlus'\nprint(myTuple)\n\nQue sucede?",
        opts: ["Error: las tuplas son inmutables", "Cambia el segundo elemento a OnePlus", "Se duplica la tupla", "Borra el segundo elemento"],
        ans: 0, exp: "Las tuplas no se pueden modificar despues de creadas"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Analisis", diff: "easy",
        q: "Analiza el siguiente codigo:\n\nmyset = {'iPhone', 'Pixel', 'Samsung', 'iPhone'}\nprint(myset)\n\nQue imprime?",
        opts: ["{'iPhone', 'Pixel', 'Samsung'}", "{'iPhone', 'Pixel', 'Samsung', 'iPhone'}", "['iPhone', 'Pixel', 'Samsung']", "('iPhone', 'Pixel', 'Samsung')"],
        ans: 0, exp: "Los sets eliminan automaticamente los elementos duplicados"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Analisis", diff: "medium",
        q: "Analiza el siguiente codigo:\n\ndef funcion_externa(x):\n    def funcion_interna(y):\n        return x + y\n    return funcion_interna\n\nsuma_5 = funcion_externa(5)\nresultado = suma_5(3)\nprint(resultado)\n\nQue imprime?",
        opts: ["8", "5", "3", "Error"],
        ans: 0, exp: "Es un closure: funcion_interna recuerda que x=5, luego 5+3=8"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Analisis", diff: "medium",
        q: "Analiza el siguiente codigo:\n\nnumeros = [1, 2, 3, 4, 5]\ncuadrados = list(map(lambda x: x**2, numeros))\nprint(cuadrados)\n\nQue imprime?",
        opts: ["[1, 4, 9, 16, 25]", "[1, 2, 3, 4, 5]", "[2, 4, 6, 8, 10]", "[1, 4, 9, 16, 25, 36]"],
        ans: 0, exp: "map aplica lambda que eleva al cuadrado cada elemento"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Analisis", diff: "hard",
        q: "Analiza el siguiente codigo:\n\nclass A:\n    pass\n\nclass B(A):\n    pass\n\nclass C(A):\n    pass\n\nclass D(B, C):\n    pass\n\nprint(D.__mro__)\n\nQue imprime?",
        opts: ["(D, B, C, A, object)", "(D, B, A, C, object)", "(D, C, B, A, object)", "(D, B, A, object, C)"],
        ans: 0, exp: "El Method Resolution Order (MRO) sigue el algoritmo C3"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Analisis", diff: "hard",
        q: "Analiza el siguiente codigo asincrono:\n\nimport asyncio\n\nasync def tarea1():\n    await asyncio.sleep(1)\n    return 'Tarea 1'\n\nasync def tarea2():\n    await asyncio.sleep(2)\n    return 'Tarea 2'\n\nasync def main():\n    resultados = await asyncio.gather(tarea1(), tarea2())\n    print(resultados)\n\nasyncio.run(main())\n\nQue imprime?",
        opts: ["['Tarea 1', 'Tarea 2']", "['Tarea 2', 'Tarea 1']", "Tarea 1 Tarea 2", "Error"],
        ans: 0, exp: "gather ejecuta ambas tareas concurrentemente y mantiene el orden"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Analisis", diff: "hard",
        q: "Analiza el siguiente codigo con metaclase:\n\nclass Meta(type):\n    def __new__(cls, nombre, bases, dct):\n        dct['version'] = '1.0'\n        return super().__new__(cls, nombre, bases, dct)\n\nclass MiClase(metaclass=Meta):\n    pass\n\nprint(MiClase.version)\n\nQue imprime?",
        opts: ["1.0", "None", "Error", "version"],
        ans: 0, exp: "La metaclase agrega el atributo version a la clase"
    },

    // ==================== DETECTAR ERROR EN FRAGMENTO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Detectar Error", diff: "easy",
        q: "Encuentra el error en este codigo:\n\nmi_lista = [1, 2, 3, 4, 5]\nprint(mi_lista[5])",
        opts: ["Indice fuera de rango", "Lista mal definida", "print mal escrito", "Faltan parentesis"],
        ans: 0, exp: "El indice 5 no existe porque la lista tiene indices 0,1,2,3,4"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Detectar Error", diff: "easy",
        q: "Encuentra el error en este codigo:\n\nmi_diccionario = {'a': 1, 'b': 2, 'c': 3}\nprint(mi_diccionario['d'])",
        opts: ["La clave 'd' no existe", "Diccionario mal definido", "print mal escrito", "Faltan comillas"],
        ans: 0, exp: "La clave 'd' no existe en el diccionario, lanza KeyError"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Detectar Error", diff: "medium",
        q: "Encuentra el error en este codigo:\n\nd = {'a': 1, 'b': 2}\nfor k in d:\n    d['c'] = 3\n    print(k)",
        opts: ["Modificar diccionario durante iteracion", "Clave duplicada", "Variable k no definida", "Print incorrecto"],
        ans: 0, exp: "No se puede modificar el tamaño del diccionario mientras se itera"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Detectar Error", diff: "medium",
        q: "Encuentra el error en este codigo:\n\nlista = [1, 2, 3]\nfor i in range(len(lista)):\n    lista.pop(i)\nprint(lista)",
        opts: ["Los indices cambian al eliminar elementos", "pop no existe", "range mal usado", "print incorrecto"],
        ans: 0, exp: "Al eliminar elementos, los indices se desplazan y se sale del rango"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Detectar Error", diff: "hard",
        q: "Encuentra el error en este codigo con hilos:\n\nfrom threading import Thread\n\nx = 0\n\ndef incrementar():\n    global x\n    for _ in range(1000000):\n        x += 1\n\nt1 = Thread(target=incrementar)\nt2 = Thread(target=incrementar)\nt1.start()\nt2.start()\nt1.join()\nt2.join()\nprint(x)\n\nQue problema tiene?",
        opts: ["Race condition, x < 2000000", "Deadlock", "GIL impide ejecucion", "SyntaxError"],
        ans: 0, exp: "x += 1 no es atomico, hay condicion de carrera entre los hilos"
    },

    // ==================== MAS ERRORES CON TRACEBACK ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nNone + 5\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\nTypeError: unsupported operand type(s) for +: 'NoneType' and 'int'\n\nQue error es?",
        opts: ["TypeError", "ValueError", "NameError", "SyntaxError"],
        ans: 0, exp: "No se puede sumar None con int"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nlen(123)\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\nTypeError: object of type 'int' has no len()\n\nQue error es?",
        opts: ["TypeError", "ValueError", "NameError", "SyntaxError"],
        ans: 0, exp: "len() solo funciona con secuencias, no con enteros"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Errores Runtime", diff: "easy",
        q: "Codigo:\n\nimport modulo_que_no_existe\n\nError:\nTraceback (most recent call last):\n  File stdin, line 1, in module\nModuleNotFoundError: No module named 'modulo_que_no_existe'\n\nQue error es?",
        opts: ["ModuleNotFoundError", "ImportError", "Ambos", "SyntaxError"],
        ans: 2, exp: "El modulo no existe en el sistema"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Errores Runtime", diff: "medium",
        q: "Codigo:\n\nfrom math import sqrt\nprint(sqrt(-1))\n\nError:\nTraceback (most recent call last):\n  File stdin, line 2, in module\nValueError: math domain error\n\nQue error es?",
        opts: ["ValueError", "TypeError", "NameError", "MathError"],
        ans: 0, exp: "Raiz cuadrada de numero negativo no esta definida en reales"
    },

    // ==================== COMPLETAR CODIGO EXTENSO ====================
    
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa el codigo para crear una lista:\n\n# Una lista es una coleccion ordenada que puede modificarse\n# Las listas se especifican entre corchetes\n\nmylist = ______'iPhone', 'Pixel', 'Samsung'______\nprint(mylist)\n\n# Salida esperada: ['iPhone', 'Pixel', 'Samsung']",
        opts: ["[ ]", "( )", "{ }", "< >"],
        ans: 0, exp: "Las listas usan corchetes [ ]"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa el codigo para crear una tupla:\n\n# Una tupla es una coleccion ordenada que NO puede modificarse\n# Las tuplas se especifican entre parentesis\n\nmyTuple = ______'iPhone', 'Pixel', 'Samsung'______\nprint(myTuple)\n\n# Salida esperada: ('iPhone', 'Pixel', 'Samsung')",
        opts: ["( )", "[ ]", "{ }", "< >"],
        ans: 0, exp: "Las tuplas usan parentesis ( )"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Completar", diff: "easy",
        q: "Completa el codigo para crear un set:\n\n# Un conjunto es una coleccion NO ordenada ni indexada\n# Los conjuntos se especifican entre llaves\n\nmyset = ______'iPhone', 'Pixel', 'Samsung'______\nprint(myset)\n\n# Salida esperada: {'iPhone', 'Pixel', 'Samsung'}",
        opts: ["{ }", "[ ]", "( )", "< >"],
        ans: 0, exp: "Los sets usan llaves { }"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa el codigo para usar enumerate:\n\nfrutas = ['manzana', 'pera', 'uva']\nfor ______, fruta in enumerate(frutas):\n    print(f'Indice {i}: {fruta}')\n\n# Salida esperada:\n# Indice 0: manzana\n# Indice 1: pera\n# Indice 2: uva",
        opts: ["i", "x", "indice", "posicion"],
        ans: 0, exp: "enumerate devuelve (indice, valor), se usa i para el indice"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Completar", diff: "medium",
        q: "Completa el codigo para usar zip:\n\nnombres = ['Ana', 'Luis', 'Carlos']\nedades = [25, 30, 28]\nfor nombre, edad in ______(nombres, edades):\n    print(f'{nombre} tiene {edad} anos')\n\n# Salida esperada:\n# Ana tiene 25 anos\n# Luis tiene 30 anos\n# Carlos tiene 28 anos",
        opts: ["zip", "enumerate", "map", "filter"],
        ans: 0, exp: "zip() combina dos o mas listas en tuplas"
    },

    // ==================== MAS CODIGO PARA ANALIZAR ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "Analisis", diff: "medium",
        q: "Analiza el siguiente codigo:\n\nnumeros = [1, 2, 3, 4, 5]\npares = list(filter(lambda x: x % 2 == 0, numeros))\nprint(pares)\n\nQue imprime?",
        opts: ["[2, 4]", "[1, 2, 3, 4, 5]", "[1, 3, 5]", "[2, 4, 6]"],
        ans: 0, exp: "filter() filtra solo los elementos que cumplen la condicion (pares)"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Analisis", diff: "medium",
        q: "Analiza el siguiente codigo:\n\nnumeros = [3, 1, 4, 1, 5, 9, 2]\nnumeros.sort()\nprint(numeros)\n\nQue imprime?",
        opts: ["[1, 1, 2, 3, 4, 5, 9]", "[3, 1, 4, 1, 5, 9, 2]", "[9, 5, 4, 3, 2, 1, 1]", "Error"],
        ans: 0, exp: "sort() ordena la lista in-place de menor a mayor"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Analisis", diff: "medium",
        q: "Analiza el siguiente codigo:\n\noriginal = [1, 2, 3]\ncopia = original[:]\ncopia.append(4)\nprint(original)\n\nQue imprime?",
        opts: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        ans: 0, exp: "[:] crea una copia superficial, original no se modifica"
    },

    // ==================== PREGUNTAS DE DEPURACION CON TRACEBACK ====================
    
    {
        profe: false, intermedio: true, avanzado: false, unit: "Depurar", diff: "medium",
        q: "Depura este codigo:\n\ndef dividir(a, b):\n    return a / b\n\nprint(dividir(10, 0))\n\nError:\nTraceback (most recent call last):\n  File stdin, line 4, in module\n    print(dividir(10, 0))\n  File stdin, line 2, in dividir\n    return a / b\nZeroDivisionError: division by zero\n\nComo lo arreglas?",
        opts: ["Validar que b no sea cero", "Usar try/except", "Ambas", "Ninguna"],
        ans: 2, exp: "Se puede validar o capturar la excepcion"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Depurar", diff: "medium",
        q: "Depura este codigo:\n\ndef obtener_valor(dic, clave):\n    return dic[clave]\n\nmi_dic = {'a': 1, 'b': 2}\nprint(obtener_valor(mi_dic, 'c'))\n\nError:\nTraceback (most recent call last):\n  File stdin, line 5, in module\n    print(obtener_valor(mi_dic, 'c'))\n  File stdin, line 2, in obtener_valor\n    return dic[clave]\nKeyError: 'c'\n\nComo lo arreglas?",
        opts: ["Usar get() con default", "Usar try/except", "Ambas", "Ninguna"],
        ans: 2, exp: "get() devuelve None si no existe, o se puede capturar KeyError"
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Depurar", diff: "hard",
        q: "Depura este codigo con recursion:\n\ndef factorial(n):\n    return n * factorial(n-1)\n\nprint(factorial(5))\n\nError:\nTraceback (most recent call last):\n  File stdin, line 4, in module\n    print(factorial(5))\n  File stdin, line 2, in factorial\n    return n * factorial(n-1)\n  [Previous line repeated 995 more times]\nRecursionError: maximum recursion depth exceeded\n\nCual es el error?",
        opts: ["Falta caso base (n <= 1)", "Demasiadas recursion", "Variable mal nombrada", "Print incorrecto"],
        ans: 0, exp: "Falta el caso base que detenga la recursion, ej: if n <= 1: return 1"
    }
    

];

registrarAsignatura('lenguaje_python', BANK.lenguaje_python);
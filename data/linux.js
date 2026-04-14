window.BANK = window.BANK || {};
BANK.linux = [

    // ============================================
// LINUX - 50 preguntas mixtas
// ============================================

// PREGUNTA 1 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el contenido de un directorio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span id="console-input-1" contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<p><strong>💡 Pista:</strong> Lista el contenido. Viene de "list".</p>
</div>
</div>`,
    opts: ["ls", "cd", "pwd", "dir"],
    ans: 0,
    exp: "El comando 'ls' (list) muestra el contenido del directorio actual.\n" +
         "Opciones útiles:\n" +
         "  ls -l  → lista detallada (permisos, tamaño, fecha)\n" +
         "  ls -a  → muestra archivos ocultos\n" +
         "  ls -la → combinación de ambas"
},

// PREGUNTA 2 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el directorio actual en el que te encuentras?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<p><strong>💡 Pista:</strong> Significa "Print Working Directory".</p>
</div>
</div>`,
    opts: ["pwd", "cd", "ls", "where"],
    ans: 0,
    exp: "El comando 'pwd' (Print Working Directory) imprime la ruta absoluta del directorio actual.\n" +
         "Ejemplo de salida:\n" +
         "  /home/usuario/documentos"
},

// PREGUNTA 3 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando se usa para cambiar de directorio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> /home/usuario/documentos</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Change Directory".</p>
</div>`,
    opts: ["cd", "mv", "ls", "chdir"],
    ans: 0,
    exp: "El comando 'cd' (Change Directory) permite navegar entre directorios.\n" +
         "Ejemplos:\n" +
         "  cd /home/usuario  → va a esa ruta absoluta\n" +
         "  cd ..             → sube un nivel\n" +
         "  cd ~              → va al directorio home\n" +
         "  cd -              → vuelve al directorio anterior"
},

// PREGUNTA 4 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando crea un directorio nuevo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> nueva_carpeta</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Make Directory".</p>
</div>`,
    opts: ["mkdir", "touch", "newdir", "create"],
    ans: 0,
    exp: "El comando 'mkdir' (Make Directory) crea un nuevo directorio.\n" +
         "Ejemplos:\n" +
         "  mkdir carpeta           → crea una carpeta\n" +
         "  mkdir -p a/b/c          → crea directorios anidados\n" +
         "  mkdir carpeta1 carpeta2 → crea múltiples directorios"
},

// PREGUNTA 5 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando elimina un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Remove". ¡Cuidado, no hay papelera!</p>
</div>`,
    opts: ["rm", "del", "erase", "delete"],
    ans: 0,
    exp: "El comando 'rm' (Remove) elimina archivos y directorios.\n" +
         "Ejemplos:\n" +
         "  rm archivo.txt     → elimina un archivo\n" +
         "  rm -r carpeta/     → elimina directorio y su contenido\n" +
         "  rm -f archivo.txt  → fuerza la eliminación sin preguntar\n" +
         "  rm -rf carpeta/    → elimina recursivo y forzado (¡peligroso!)"
},

// PREGUNTA 6 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando copia un archivo de una ubicación a otra?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> origen.txt destino.txt</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Copy".</p>
</div>`,
    opts: ["cp", "mv", "copy", "clone"],
    ans: 0,
    exp: "El comando 'cp' (Copy) copia archivos o directorios.\n" +
         "Ejemplos:\n" +
         "  cp archivo.txt copia.txt       → copia un archivo\n" +
         "  cp archivo.txt /home/usuario/  → copia a otro directorio\n" +
         "  cp -r carpeta/ destino/        → copia directorio completo"
},

// PREGUNTA 7 - Básico - Comandos básicos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando mueve o renombra un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> viejo.txt nuevo.txt</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Move". Sirve también para renombrar.</p>
</div>`,
    opts: ["mv", "cp", "rename", "move"],
    ans: 0,
    exp: "El comando 'mv' (Move) mueve o renombra archivos y directorios.\n" +
         "Ejemplos:\n" +
         "  mv viejo.txt nuevo.txt         → renombra el archivo\n" +
         "  mv archivo.txt /home/usuario/  → mueve a otro directorio\n" +
         "  mv carpeta1/ carpeta2/         → mueve o renombra carpeta"
},

// PREGUNTA 8 - Básico - Archivos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el contenido de un archivo de texto en la terminal?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "concatenate".</p>
</div>`,
    opts: ["cat", "read", "show", "print"],
    ans: 0,
    exp: "El comando 'cat' (concatenate) muestra el contenido de archivos.\n" +
         "Ejemplos:\n" +
         "  cat archivo.txt              → muestra el contenido\n" +
         "  cat archivo1.txt archivo2.txt → concatena y muestra ambos\n" +
         "  cat -n archivo.txt           → muestra con números de línea"
},

// PREGUNTA 9 - Básico - Archivos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando crea un archivo vacío o actualiza su fecha de modificación?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> nuevo_archivo.txt</span>
</div>
<p><strong>💡 Pista:</strong> Como "tocar" el archivo sin escribir nada.</p>
</div>`,
    opts: ["touch", "mkdir", "new", "create"],
    ans: 0,
    exp: "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha de acceso/modificación si ya existe.\n" +
         "Ejemplos:\n" +
         "  touch archivo.txt           → crea archivo vacío\n" +
         "  touch archivo1.txt archivo2.txt → crea múltiples archivos"
},

// PREGUNTA 10 - Básico - Archivos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando busca texto dentro de archivos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> "error" /var/log/syslog</span>
</div>
<p><strong>💡 Pista:</strong> "Global Regular Expression Print".</p>
</div>`,
    opts: ["grep", "find", "search", "locate"],
    ans: 0,
    exp: "El comando 'grep' busca patrones de texto en archivos.\n" +
         "Ejemplos:\n" +
         "  grep 'error' archivo.txt       → busca la palabra 'error'\n" +
         "  grep -i 'error' archivo.txt    → sin distinguir mayúsculas\n" +
         "  grep -r 'error' /var/log/      → búsqueda recursiva\n" +
         "  grep -n 'error' archivo.txt    → muestra número de línea"
},

// PREGUNTA 11 - Medio - Permisos
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué significan los permisos 'rwxr-xr--' en un archivo?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr><th>Grupo</th><th>Permisos</th><th>Lectura (r)</th><th>Escritura (w)</th><th>Ejecución (x)</th></tr>
</thead>
<tbody>
  <tr><td>Propietario</td><td>rwx</td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td></tr>
  <tr><td>Grupo</td><td>r-x</td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td></tr>
  <tr><td>Otros</td><td>r--</td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td><td><input placeholder="¿Puede?"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "Propietario: lectura/escritura/ejecución | Grupo: lectura/ejecución | Otros: solo lectura",
        "Propietario: lectura/escritura | Grupo: lectura/escritura | Otros: ejecución",
        "Propietario: todos los permisos | Grupo: todos | Otros: ninguno",
        "Propietario: lectura/ejecución | Grupo: escritura | Otros: lectura/escritura"
    ],
    ans: 0,
    exp: "Los permisos en Linux se dividen en 3 grupos de 3 caracteres:\n" +
         "  rwxr-xr--\n" +
         "  ||||||||\n" +
         "  rwx → Propietario: puede leer (r), escribir (w) y ejecutar (x)\n" +
         "  r-x → Grupo: puede leer (r) y ejecutar (x), NO escribir (-)\n" +
         "  r-- → Otros: solo puede leer (r), NO escribir ni ejecutar\n\n" +
         "Equivalencia numérica:\n" +
         "  r=4, w=2, x=1\n" +
         "  rwx = 4+2+1 = 7\n" +
         "  r-x = 4+0+1 = 5\n" +
         "  r-- = 4+0+0 = 4\n" +
         "  → chmod 754 archivo"
},

// PREGUNTA 12 - Medio - Permisos
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando cambia los permisos de un archivo?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr><th>Notación</th><th>Comando</th><th>Resultado</th></tr>
</thead>
<tbody>
  <tr><td>Numérica</td><td><input placeholder="comando 755 archivo.txt"></td><td>rwxr-xr-x</td></tr>
  <tr><td>Simbólica</td><td><input placeholder="comando +x archivo.txt"></td><td>Agrega ejecución</td></tr>
</tbody>
</table>
<p><strong>💡 Pista:</strong> Viene de "Change Mode".</p>
</div>`,
    opts: ["chmod", "chown", "chgrp", "setperm"],
    ans: 0,
    exp: "El comando 'chmod' (Change Mode) cambia los permisos de archivos.\n\n" +
         "Notación numérica:\n" +
         "  chmod 755 archivo → rwxr-xr-x\n" +
         "  chmod 644 archivo → rw-r--r--\n" +
         "  chmod 777 archivo → rwxrwxrwx (¡peligroso!)\n\n" +
         "Notación simbólica:\n" +
         "  chmod +x archivo  → agrega ejecución a todos\n" +
         "  chmod u+w archivo → agrega escritura al propietario\n" +
         "  chmod o-r archivo → quita lectura a otros"
},

// PREGUNTA 13 - Medio - Permisos
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué valor numérico corresponde a los permisos 'rwxr--r--'?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr><th>Grupo</th><th>Permisos</th><th>r (4)</th><th>w (2)</th><th>x (1)</th><th>Total</th></tr>
</thead>
<tbody>
  <tr><td>Propietario</td><td>rwx</td><td>4</td><td>2</td><td>1</td><td><input placeholder="suma"></td></tr>
  <tr><td>Grupo</td><td>r--</td><td>4</td><td>0</td><td>0</td><td><input placeholder="suma"></td></tr>
  <tr><td>Otros</td><td>r--</td><td>4</td><td>0</td><td>0</td><td><input placeholder="suma"></td></tr>
  <tr><td colspan="5"><strong>Valor chmod</strong></td><td><input placeholder="3 dígitos"></td></tr>
</tbody>
</table>
</div>`,
    opts: ["744", "755", "644", "711"],
    ans: 0,
    exp: "Cálculo de permisos numéricos:\n" +
         "  r=4, w=2, x=1, -=0\n\n" +
         "  Propietario: rwx = 4+2+1 = 7\n" +
         "  Grupo:       r-- = 4+0+0 = 4\n" +
         "  Otros:       r-- = 4+0+0 = 4\n\n" +
         "  Resultado: chmod 744 archivo\n\n" +
         "Usos comunes:\n" +
         "  chmod 755 → archivos ejecutables o directorios\n" +
         "  chmod 644 → archivos de texto normales\n" +
         "  chmod 600 → archivos privados (ej: claves SSH)"
},

// PREGUNTA 14 - Medio - Permisos
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando cambia el propietario de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@linux:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> usuario:grupo archivo.txt</span>
</div>
<p><strong>💡 Pista:</strong> Viene de "Change Owner".</p>
</div>`,
    opts: ["chown", "chmod", "chgrp", "usermod"],
    ans: 0,
    exp: "El comando 'chown' (Change Owner) cambia el propietario y/o grupo de un archivo.\n\n" +
         "Ejemplos:\n" +
         "  chown usuario archivo.txt          → cambia propietario\n" +
         "  chown usuario:grupo archivo.txt    → cambia propietario y grupo\n" +
         "  chown -R usuario:grupo carpeta/    → recursivo en directorio\n\n" +
         "Nota: requiere permisos de root (sudo)"
},

// PREGUNTA 15 - Medio - Usuarios
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando muestra los usuarios que están actualmente conectados al sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#888;">Salida esperada:</div>
<div>usuario  pts/0  2026-04-13 10:30 (192.168.1.5)</div>
<div>root     tty1   2026-04-13 09:00</div>
</div>
</div>`,
    opts: ["who", "users", "whoami", "id"],
    ans: 0,
    exp: "El comando 'who' muestra los usuarios conectados al sistema.\n\n" +
         "Comandos relacionados:\n" +
         "  who        → usuarios conectados con detalles\n" +
         "  whoami     → muestra solo tu usuario actual\n" +
         "  w          → usuarios conectados + qué están haciendo\n" +
         "  id         → muestra UID, GID y grupos del usuario actual\n" +
         "  last       → historial de logins"
},

// PREGUNTA 16 - Medio - Usuarios
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando agrega un nuevo usuario al sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@linux:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> nuevo_usuario</span>
</div>
<p><strong>💡 Pista:</strong> También existe una versión más interactiva con 'add' al final.</p>
</div>`,
    opts: ["useradd", "adduser", "newuser", "createuser"],
    ans: 0,
    exp: "El comando 'useradd' crea un nuevo usuario en el sistema.\n\n" +
         "Ejemplos:\n" +
         "  useradd usuario               → crea usuario básico\n" +
         "  useradd -m usuario            → crea con directorio home\n" +
         "  useradd -m -s /bin/bash usuario → con home y shell bash\n" +
         "  useradd -G sudo usuario       → agrega al grupo sudo\n\n" +
         "Diferencia:\n" +
         "  useradd → comando de bajo nivel\n" +
         "  adduser → más amigable, hace preguntas interactivas (Debian/Ubuntu)"
},

// PREGUNTA 17 - Medio - Usuarios
{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué archivo contiene la lista de usuarios del sistema Linux?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#888;"># Ejemplo de línea en el archivo:</div>
<div>root:x:0:0:root:/root:/bin/bash</div>
<div>usuario:x:1000:1000::/home/usuario:/bin/bash</div>
</div>
<table class="subnet-table" style="margin-top:0.5rem;">
<thead><tr><th>Campo</th><th>Valor en ejemplo</th><th>Descripción</th></tr></thead>
<tbody>
  <tr><td>1</td><td>usuario</td><td><input placeholder="¿Qué es?"></td></tr>
  <tr><td>2</td><td>x</td><td><input placeholder="¿Qué es?"></td></tr>
  <tr><td>3</td><td>1000</td><td><input placeholder="¿Qué es?"></td></tr>
  <tr><td>6</td><td>/home/usuario</td><td><input placeholder="¿Qué es?"></td></tr>
</tbody>
</table>
</div>`,
    opts: ["/etc/passwd", "/etc/users", "/etc/shadow", "/var/users"],
    ans: 0,
    exp: "El archivo '/etc/passwd' contiene la información de todos los usuarios.\n\n" +
         "Formato de cada línea (7 campos separados por ':'):\n" +
         "  usuario:x:1000:1000:Nombre Completo:/home/usuario:/bin/bash\n\n" +
         "  Campo 1: nombre de usuario\n" +
         "  Campo 2: contraseña (x = guardada en /etc/shadow)\n" +
         "  Campo 3: UID (User ID)\n" +
         "  Campo 4: GID (Group ID)\n" +
         "  Campo 5: comentario/nombre completo\n" +
         "  Campo 6: directorio home\n" +
         "  Campo 7: shell por defecto\n\n" +
         "Las contraseñas cifradas están en /etc/shadow (solo root puede leerlo)"
},

// PREGUNTA 18 - Medio - Procesos
{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando muestra los procesos en ejecución en tiempo real?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#aaa;">top - 10:30:01 up 2 days | Tasks: 120 total</div>
<div style="color:#aaa;">%Cpu(s): 5.2 us | MiB Mem: 8000 total</div>
<div style="color:#fff;">PID    USER    %CPU  %MEM  COMMAND</div>
<div>1234   root    2.0   0.5   apache2</div>
<div>5678   usuario 0.5   1.2   firefox</div>
</div>
<p><strong>💡 Pista:</strong> Se actualiza automáticamente cada pocos segundos.</p>
</div>`,
    opts: ["top", "ps", "htop", "jobs"],
    ans: 0,
    exp: "El comando 'top' muestra los procesos en ejecución en tiempo real.\n\n" +
         "Comandos relacionados:\n" +
         "  top          → monitor interactivo en tiempo real\n" +
         "  htop         → versión mejorada y visual de top\n" +
         "  ps aux       → lista estática de todos los procesos\n" +
         "  ps -ef       → todos los procesos con formato completo\n\n" +
         "Teclas útiles dentro de top:\n" +
         "  q → salir\n" +
         "  k → matar proceso (pide PID)\n" +
         "  M → ordenar por memoria\n" +
         "  P → ordenar por CPU"
},

// PREGUNTA 19 - Medio - Procesos
{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando termina un proceso usando su PID?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> 1234</span>
</div>
<table class="subnet-table">
<thead><tr><th>Señal</th><th>Número</th><th>Descripción</th></tr></thead>
<tbody>
  <tr><td>SIGTERM</td><td>15</td><td>Termina con gracia (por defecto)</td></tr>
  <tr><td>SIGKILL</td><td>9</td><td>Termina forzado (no ignorable)</td></tr>
</tbody>
</table>
</div>`,
    opts: ["kill", "stop", "end", "terminate"],
    ans: 0,
    exp: "El comando 'kill' envía señales a procesos, por defecto SIGTERM (15).\n\n" +
         "Ejemplos:\n" +
         "  kill 1234       → termina proceso PID 1234 (SIGTERM)\n" +
         "  kill -9 1234    → fuerza terminación (SIGKILL)\n" +
         "  kill -15 1234   → igual al kill normal\n" +
         "  killall firefox → mata todos los procesos llamados firefox\n" +
         "  pkill firefox   → similar a killall\n\n" +
         "Para encontrar el PID:\n" +
         "  ps aux | grep firefox\n" +
         "  pgrep firefox"
},

// PREGUNTA 20 - Medio - Disco
{
    unit: "Linux - Sistema de Archivos",
    diff: "medium",
    q: "¿Qué comando muestra el espacio disponible en disco?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#fff;">Filesystem      Size  Used Avail Use% Mounted on</div>
<div>/dev/sda1        50G   20G   28G  42% /</div>
<div>tmpfs           3.9G     0  3.9G   0% /dev/shm</div>
</div>
<p><strong>💡 Pista:</strong> Viene de "Disk Free".</p>
</div>`,
    opts: ["df -h", "du -h", "lsblk", "fdisk -l"],
    ans: 0,
    exp: "El comando 'df' (Disk Free) muestra el espacio en disco.\n\n" +
         "Ejemplos:\n" +
         "  df -h          → muestra en formato legible (GB, MB)\n" +
         "  df -h /home    → espacio solo en /home\n" +
         "  df -T          → muestra tipo de sistema de archivos\n\n" +
         "Comandos relacionados:\n" +
         "  du -h carpeta/ → muestra tamaño de una carpeta\n" +
         "  du -sh *       → tamaño de cada elemento en directorio actual\n" +
         "  lsblk          → lista dispositivos de bloque"
},

// PREGUNTA 21 - Medio - Redes
{
    unit: "Linux - Redes",
    diff: "medium",
    q: "¿Qué comando muestra la configuración de red de las interfaces?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#fff;">eth0: flags=4163  mtu 1500</div>
<div>      inet 192.168.1.100  netmask 255.255.255.0</div>
<div>      inet6 fe80::1  prefixlen 64</div>
<div>      ether 00:11:22:33:44:55</div>
</div>
<p><strong>💡 Pista:</strong> Es el moderno reemplazo de ifconfig.</p>
</div>`,
    opts: ["ip addr", "ifconfig", "netstat", "ipconfig"],
    ans: 0,
    exp: "El comando 'ip addr' muestra la configuración de interfaces de red.\n\n" +
         "Comandos equivalentes/relacionados:\n" +
         "  ip addr show          → muestra todas las interfaces\n" +
         "  ip addr show eth0     → solo interfaz eth0\n" +
         "  ifconfig              → comando antiguo (aún funciona)\n" +
         "  ip link               → estado de interfaces\n\n" +
         "Otros comandos de red:\n" +
         "  ip route              → tabla de enrutamiento\n" +
         "  ip neigh              → tabla ARP\n" +
         "  ss -tuln              → puertos abiertos (reemplaza netstat)"
},

// PREGUNTA 22 - Medio - Redes
{
    unit: "Linux - Redes",
    diff: "medium",
    q: "¿Qué comando prueba la conectividad hacia una dirección IP o dominio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#aaa;">PING 8.8.8.8 (8.8.8.8): 56 bytes de datos</div>
<div>64 bytes de 8.8.8.8: icmp_seq=0 ttl=118 time=12.3 ms</div>
<div>64 bytes de 8.8.8.8: icmp_seq=1 ttl=118 time=11.8 ms</div>
</div>
</div>`,
    opts: ["ping", "traceroute", "nslookup", "curl"],
    ans: 0,
    exp: "El comando 'ping' envía paquetes ICMP para verificar conectividad.\n\n" +
         "Ejemplos:\n" +
         "  ping 8.8.8.8          → ping continuo a Google DNS\n" +
         "  ping -c 4 8.8.8.8     → solo 4 paquetes\n" +
         "  ping google.com       → también acepta dominios\n\n" +
         "Comandos relacionados:\n" +
         "  traceroute ip         → muestra la ruta hasta el destino\n" +
         "  nslookup dominio      → consulta DNS\n" +
         "  dig dominio           → consulta DNS detallada\n" +
         "  curl url              → hace peticiones HTTP"
},

// PREGUNTA 23 - Medio - Redes
{
    unit: "Linux - Redes",
    diff: "medium",
    q: "¿Qué comando muestra los puertos abiertos y conexiones activas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#fff;">Netid  State   Local Address:Port   Peer Address:Port</div>
<div>tcp    LISTEN  0.0.0.0:22          0.0.0.0:*</div>
<div>tcp    LISTEN  0.0.0.0:80          0.0.0.0:*</div>
<div>tcp    ESTAB   192.168.1.5:22      192.168.1.10:54321</div>
</div>
<p><strong>💡 Pista:</strong> Es el reemplazo moderno de netstat.</p>
</div>`,
    opts: ["ss -tuln", "netstat -an", "ip addr", "lsof -i"],
    ans: 0,
    exp: "El comando 'ss' (Socket Statistics) muestra conexiones de red y puertos.\n\n" +
         "Opciones:\n" +
         "  ss -tuln    → TCP/UDP, listening, numérico\n" +
         "  ss -t       → solo conexiones TCP\n" +
         "  ss -u       → solo conexiones UDP\n" +
         "  ss -p       → muestra el proceso que usa el socket\n\n" +
         "Comandos equivalentes:\n" +
         "  netstat -tuln  → versión antigua (misma función)\n" +
         "  lsof -i        → procesos con conexiones de red\n\n" +
         "Puerto 22 = SSH | Puerto 80 = HTTP | Puerto 443 = HTTPS"
},

// PREGUNTA 24 - Difícil - Redes
{
    unit: "Linux - Redes",
    diff: "hard",
    case: "El servidor tiene la interfaz 'enp3s0' sin IP asignada. Debes asignarle la IP 192.168.10.50/24 de forma temporal.",
    q: "¿Cuál es el comando correcto para asignar la IP?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@servidor:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Parámetro</th><th>Valor</th></tr></thead>
<tbody>
  <tr><td>Interfaz</td><td>enp3s0</td></tr>
  <tr><td>IP</td><td>192.168.10.50</td></tr>
  <tr><td>Prefijo</td><td>/24</td></tr>
  <tr><td>Tipo</td><td>Temporal (se pierde al reiniciar)</td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "ip addr add 192.168.10.50/24 dev enp3s0",
        "ifconfig enp3s0 192.168.10.50 netmask 255.255.255.0",
        "ip addr set 192.168.10.50/24 enp3s0",
        "network enp3s0 add 192.168.10.50/24"
    ],
    ans: 0,
    exp: "Para asignar una IP temporal con el comando 'ip':\n\n" +
         "  ip addr add 192.168.10.50/24 dev enp3s0\n\n" +
         "Verificar:\n" +
         "  ip addr show enp3s0\n\n" +
         "Para activar la interfaz si está caída:\n" +
         "  ip link set enp3s0 up\n\n" +
         "Para eliminar la IP:\n" +
         "  ip addr del 192.168.10.50/24 dev enp3s0\n\n" +
         "⚠️ Esta configuración es temporal y se pierde al reiniciar.\n" +
         "Para hacerla permanente en Ubuntu/Debian:\n" +
         "  Editar /etc/netplan/00-installer-config.yaml"
},

// PREGUNTA 25 - Difícil - Redes
{
    unit: "Linux - Redes",
    diff: "hard",
    case: "Necesitas verificar qué ruta toma el tráfico para llegar a 8.8.8.8 desde tu servidor Linux.",
    q: "¿Qué comando muestra la tabla de enrutamiento actual del sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#fff;">default via 192.168.1.1 dev eth0 proto static</div>
<div>192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100</div>
</div>
<p><strong>💡 Pista:</strong> Muestra hacia dónde va el tráfico.</p>
</div>`,
    opts: ["ip route show", "netstat -r", "route -n", "ip route list"],
    ans: 0,
    exp: "El comando 'ip route show' muestra la tabla de enrutamiento.\n\n" +
         "Interpretación de la salida:\n" +
         "  default via 192.168.1.1 dev eth0\n" +
         "  → Todo el tráfico sin ruta específica va al gateway 192.168.1.1\n\n" +
         "  192.168.1.0/24 dev eth0\n" +
         "  → La red local está directamente conectada por eth0\n\n" +
         "Comandos equivalentes:\n" +
         "  ip route show    → moderno\n" +
         "  ip route list    → igual al anterior\n" +
         "  route -n         → antiguo, muestra lo mismo\n" +
         "  netstat -r       → también antiguo\n\n" +
         "Para agregar una ruta:\n" +
         "  ip route add 10.0.0.0/8 via 192.168.1.254"
},

// PREGUNTA 26 - Difícil - Permisos
{
    unit: "Linux - Permisos y Usuarios",
    diff: "hard",
    case: "El script deploy.sh debe ser ejecutable solo por el propietario, legible por el grupo y sin ningún permiso para otros.",
    q: "¿Qué comando chmod aplicas?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr><th>Grupo</th><th>Permisos requeridos</th><th>r(4)</th><th>w(2)</th><th>x(1)</th><th>Valor</th></tr>
</thead>
<tbody>
  <tr><td>Propietario</td><td>ejecutar</td><td><input placeholder="0 o 4"></td><td><input placeholder="0 o 2"></td><td><input placeholder="0 o 1"></td><td><input placeholder="suma"></td></tr>
  <tr><td>Grupo</td><td>leer</td><td><input placeholder="0 o 4"></td><td><input placeholder="0 o 2"></td><td><input placeholder="0 o 1"></td><td><input placeholder="suma"></td></tr>
  <tr><td>Otros</td><td>ninguno</td><td><input placeholder="0 o 4"></td><td><input placeholder="0 o 2"></td><td><input placeholder="0 o 1"></td><td><input placeholder="suma"></td></tr>
  <tr><td colspan="5"><strong>Comando completo</strong></td><td><input placeholder="chmod ??? deploy.sh"></td></tr>
</tbody>
</table>
</div>`,
    opts: ["chmod 140 deploy.sh", "chmod 740 deploy.sh", "chmod 440 deploy.sh", "chmod 100 deploy.sh"],
    ans: 0,
    exp: "Análisis de permisos requeridos:\n\n" +
         "  Propietario: solo ejecutar → --x = 0+0+1 = 1\n" +
         "  Grupo:       solo leer     → r-- = 4+0+0 = 4\n" +
         "  Otros:       ninguno       → --- = 0+0+0 = 0\n\n" +
         "  Resultado: chmod 140 deploy.sh\n\n" +
         "Verificación:\n" +
         "  ls -l deploy.sh\n" +
         "  --xr----- 1 usuario grupo ... deploy.sh\n\n" +
         "Nota: Es inusual que el propietario no pueda leer su propio archivo.\n" +
         "En la práctica se usaría chmod 740 (rwxr-----) para el propietario con todos los permisos."
},

// PREGUNTA 27 - Difícil - Sistema
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "Necesitas ver las últimas 50 líneas del log del sistema en tiempo real para monitorear errores.",
    q: "¿Qué comando usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@linux:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> /var/log/syslog</span>
</div>
<p><strong>💡 Pista:</strong> Combina ver el final del archivo + seguimiento en vivo.</p>
</div>`,
    opts: ["tail -f -n 50 /var/log/syslog", "cat -50 /var/log/syslog", "head -50 /var/log/syslog", "less +F /var/log/syslog"],
    ans: 0,
    exp: "El comando correcto es:\n" +
         "  tail -f -n 50 /var/log/syslog\n\n" +
         "Opciones:\n" +
         "  -f      → sigue el archivo en tiempo real (follow)\n" +
         "  -n 50   → muestra las últimas 50 líneas\n\n" +
         "Comandos relacionados:\n" +
         "  tail -f archivo     → sigue en tiempo real (últimas 10 por defecto)\n" +
         "  tail -n 100 archivo → últimas 100 líneas sin seguimiento\n" +
         "  head -n 20 archivo  → primeras 20 líneas\n" +
         "  less archivo        → paginador interactivo\n\n" +
         "Para logs del sistema moderno (systemd):\n" +
         "  journalctl -f       → logs en tiempo real\n" +
         "  journalctl -n 50    → últimas 50 entradas\n" +
         "  journalctl -u nginx → logs de un servicio específico"
},

// PREGUNTA 28 - Difícil - Sistema
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "Un servidor web Apache2 no está respondiendo. Necesitas verificar su estado, reiniciarlo y asegurarte de que inicie automáticamente al arrancar.",
    q: "¿Cuál es la secuencia correcta de comandos systemctl?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead><tr><th>Tarea</th><th>Comando</th></tr></thead>
<tbody>
  <tr><td>Ver estado del servicio</td><td><input placeholder="systemctl ..."></td></tr>
  <tr><td>Reiniciar el servicio</td><td><input placeholder="systemctl ..."></td></tr>
  <tr><td>Habilitar inicio automático</td><td><input placeholder="systemctl ..."></td></tr>
  <tr><td>Verificar que está habilitado</td><td><input placeholder="systemctl ..."></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "systemctl status apache2 → systemctl restart apache2 → systemctl enable apache2",
        "service apache2 status → service apache2 restart → systemctl enable apache2",
        "systemctl check apache2 → systemctl reload apache2 → systemctl start apache2",
        "ps aux | grep apache2 → kill apache2 → systemctl start apache2"
    ],
    ans: 0,
    exp: "Gestión de servicios con systemctl:\n\n" +
         "  systemctl status apache2   → ver estado actual\n" +
         "  systemctl start apache2    → iniciar servicio\n" +
         "  systemctl stop apache2     → detener servicio\n" +
         "  systemctl restart apache2  → reiniciar servicio\n" +
         "  systemctl reload apache2   → recarga configuración sin reiniciar\n" +
         "  systemctl enable apache2   → habilitar inicio automático al arrancar\n" +
         "  systemctl disable apache2  → deshabilitar inicio automático\n" +
         "  systemctl is-enabled apache2 → verificar si está habilitado\n\n" +
         "Diferencia restart vs reload:\n" +
         "  restart → mata y reinicia el proceso (interrumpe conexiones)\n" +
         "  reload  → recarga la configuración sin interrumpir conexiones"
},

// PREGUNTA 29 - Difícil - Bash
{
    unit: "Linux - Bash y Scripts",
    diff: "hard",
    case: "Tienes un directorio con 1000 archivos .log y necesitas encontrar todos los que contienen la palabra 'CRITICAL' y guardar el resultado en un archivo llamado 'errores_criticos.txt'.",
    q: "¿Cuál es el comando correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:/var/log$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Componente</th><th>Tu respuesta</th></tr></thead>
<tbody>
  <tr><td>Comando de búsqueda</td><td><input placeholder="grep, find, cat..."></td></tr>
  <tr><td>Patrón a buscar</td><td><input placeholder="'CRITICAL'"></td></tr>
  <tr><td>Archivos destino</td><td><input placeholder="*.log"></td></tr>
  <tr><td>Redirigir salida</td><td><input placeholder="> o >>"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "grep -r 'CRITICAL' *.log > errores_criticos.txt",
        "find *.log | grep 'CRITICAL' > errores_criticos.txt",
        "cat *.log | grep CRITICAL >> errores_criticos.txt",
        "grep 'CRITICAL' *.log | save errores_criticos.txt"
    ],
    ans: 0,
    exp: "El comando correcto es:\n" +
         "  grep -r 'CRITICAL' *.log > errores_criticos.txt\n\n" +
         "Desglose:\n" +
         "  grep         → busca patrones de texto\n" +
         "  -r           → recursivo (busca también en subdirectorios)\n" +
         "  'CRITICAL'   → patrón a buscar\n" +
         "  *.log        → en todos los archivos .log\n" +
         "  >            → redirige la salida (sobreescribe el archivo)\n" +
         "  >>           → redirige la salida (agrega al archivo)\n\n" +
         "Variantes útiles:\n" +
         "  grep -rl 'CRITICAL' *.log     → solo nombres de archivos\n" +
         "  grep -c 'CRITICAL' *.log      → cuenta ocurrencias por archivo\n" +
         "  grep -n 'CRITICAL' app.log    → muestra número de línea"
},

// PREGUNTA 30 - Difícil - Bash
{
    unit: "Linux - Bash y Scripts",
    diff: "hard",
    case: "Necesitas crear un script bash que haga backup de /var/www/html comprimido con la fecha actual en el nombre del archivo.",
    q: "¿Cuál es el script correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#aaa;">#!/bin/bash</div>
<div contenteditable="true" style="outline:none;color:#fff;min-height:60px;">## Escribe el script aquí</div>
</div>
</div>`,
    opts: [
        '#!/bin/bash\nFECHA=$(date +%Y%m%d)\ntar -czf /backup/html_$FECHA.tar.gz /var/www/html',
        '#!/bin/bash\ntar -czf /backup/html_$(date).tar.gz /var/www/html',
        '#!/bin/bash\nzip /backup/html_$DATE.zip /var/www/html',
        '#!/bin/bash\ncp -r /var/www/html /backup/html_backup'
    ],
    ans: 0,
    exp: "El script correcto:\n" +
         "  #!/bin/bash\n" +
         "  FECHA=$(date +%Y%m%d)\n" +
         "  tar -czf /backup/html_$FECHA.tar.gz /var/www/html\n\n" +
         "Desglose:\n" +
         "  #!/bin/bash        → shebang, indica que es script bash\n" +
         "  $(date +%Y%m%d)    → ejecuta 'date' y guarda resultado\n" +
         "  %Y = año (2026), %m = mes (04), %d = día (13)\n" +
         "  tar -czf           → crea (-c) archivo comprimido gzip (-z) en archivo (-f)\n\n" +
         "Para ejecutar el script:\n" +
         "  chmod +x backup.sh\n" +
         "  ./backup.sh\n\n" +
         "Para automatizar con cron (todos los días a las 2am):\n" +
         "  crontab -e\n" +
         "  0 2 * * * /ruta/backup.sh"
},

// PREGUNTA 31 - Medio - Sistema de Archivos
{
    unit: "Linux - Sistema de Archivos",
    diff: "medium",
    q: "¿Qué comando busca archivos en el sistema por nombre u otras características?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> / -name "*.conf" -type f</span>
</div>
<p><strong>💡 Pista:</strong> Busca en el árbol de directorios.</p>
</div>`,
    opts: ["find", "locate", "grep", "which"],
    ans: 0,
    exp: "El comando 'find' busca archivos y directorios con muchos criterios.\n\n" +
         "Ejemplos:\n" +
         "  find / -name '*.conf'           → busca archivos .conf en todo el sistema\n" +
         "  find /home -name 'archivo.txt'  → busca en /home\n" +
         "  find . -type f -size +10M       → archivos mayores a 10MB\n" +
         "  find . -mtime -7                → modificados en los últimos 7 días\n" +
         "  find . -perm 777                → archivos con permisos 777\n" +
         "  find . -user root               → archivos del usuario root\n\n" +
         "Diferencia con locate:\n" +
         "  find   → busca en tiempo real (lento pero actualizado)\n" +
         "  locate → busca en base de datos (rápido pero puede estar desactualizado)"
},

// PREGUNTA 32 - Medio - Archivos
{
    unit: "Linux - Comandos Básicos",
    diff: "medium",
    q: "¿Qué hace el comando 'wc -l archivo.txt'?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div><span style="color:#888;">usuario@linux:~$</span> wc -l archivo.txt</div>
<div style="color:#fff;">42 archivo.txt</div>
</div>
<table class="subnet-table" style="margin-top:0.5rem;">
<thead><tr><th>Opción</th><th>Función</th></tr></thead>
<tbody>
  <tr><td>wc -l</td><td><input placeholder="¿Qué cuenta?"></td></tr>
  <tr><td>wc -w</td><td><input placeholder="¿Qué cuenta?"></td></tr>
  <tr><td>wc -c</td><td><input placeholder="¿Qué cuenta?"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "Cuenta el número de líneas del archivo",
        "Cuenta el número de palabras del archivo",
        "Cuenta el número de caracteres del archivo",
        "Muestra el tamaño del archivo en bytes"
    ],
    ans: 0,
    exp: "El comando 'wc' (Word Count) cuenta líneas, palabras y caracteres.\n\n" +
         "Opciones:\n" +
         "  wc -l archivo → cuenta líneas\n" +
         "  wc -w archivo → cuenta palabras\n" +
         "  wc -c archivo → cuenta bytes/caracteres\n" +
         "  wc archivo    → muestra los tres valores\n\n" +
         "Uso común con pipes:\n" +
         "  ls | wc -l              → cuántos archivos hay en el directorio\n" +
         "  grep 'error' log | wc -l → cuántas líneas tienen 'error'\n" +
         "  cat archivo | wc -w     → cuántas palabras tiene el archivo"
},

// PREGUNTA 33 - Medio - Redirección
{
    unit: "Linux - Bash y Scripts",
    diff: "medium",
    q: "¿Qué diferencia hay entre '>' y '>>' en la redirección de salida?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div><span style="color:#888;">$</span> echo "línea1" > archivo.txt</div>
<div><span style="color:#888;">$</span> echo "línea2" > archivo.txt</div>
<div style="color:#aaa;"># ¿Qué contiene archivo.txt?</div>
<div contenteditable="true" style="outline:none;color:#fff;"> </div>
<br>
<div><span style="color:#888;">$</span> echo "línea1" >> archivo.txt</div>
<div><span style="color:#888;">$</span> echo "línea2" >> archivo.txt</div>
<div style="color:#aaa;"># ¿Qué contiene archivo.txt ahora?</div>
<div contenteditable="true" style="outline:none;color:#fff;"> </div>
</div>
</div>`,
    opts: [
        "> sobreescribe el archivo | >> agrega al final del archivo",
        "> agrega al final | >> sobreescribe el archivo",
        "Ambos sobreescriben, pero >> pide confirmación",
        "> crea el archivo | >> lo elimina si existe"
    ],
    ans: 0,
    exp: "Diferencia entre > y >>:\n\n" +
         "  > (sobreescribe):\n" +
         "    echo 'línea1' > archivo.txt  → archivo contiene: línea1\n" +
         "    echo 'línea2' > archivo.txt  → archivo contiene: línea2 (línea1 eliminada)\n\n" +
         "  >> (agrega):\n" +
         "    echo 'línea1' >> archivo.txt → archivo contiene: línea1\n" +
         "    echo 'línea2' >> archivo.txt → archivo contiene: línea1 y línea2\n\n" +
         "Otros operadores de redirección:\n" +
         "  < archivo   → redirige la entrada desde un archivo\n" +
         "  2>          → redirige errores (stderr)\n" +
         "  2>&1        → redirige stderr a stdout\n" +
         "  | (pipe)    → pasa la salida de un comando al siguiente"
},

// PREGUNTA 34 - Medio - Compresión
{
    unit: "Linux - Sistema de Archivos",
    diff: "medium",
    q: "¿Qué comando descomprime un archivo .tar.gz?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.tar.gz</span>
</div>
<table class="subnet-table">
<thead><tr><th>Opción tar</th><th>Significado</th></tr></thead>
<tbody>
  <tr><td>-x</td><td><input placeholder="¿Qué hace?"></td></tr>
  <tr><td>-z</td><td><input placeholder="¿Qué hace?"></td></tr>
  <tr><td>-f</td><td><input placeholder="¿Qué hace?"></td></tr>
  <tr><td>-v</td><td><input placeholder="¿Qué hace?"></td></tr>
</tbody>
</table>
</div>`,
    opts: ["tar -xzf archivo.tar.gz", "tar -czf archivo.tar.gz", "unzip archivo.tar.gz", "gunzip -r archivo.tar.gz"],
    ans: 0,
    exp: "Para descomprimir un .tar.gz:\n" +
         "  tar -xzf archivo.tar.gz\n\n" +
         "Opciones de tar:\n" +
         "  -c → crear archivo (create)\n" +
         "  -x → extraer archivo (extract)\n" +
         "  -z → usar compresión gzip (.gz)\n" +
         "  -j → usar compresión bzip2 (.bz2)\n" +
         "  -f → especifica el nombre del archivo\n" +
         "  -v → modo verboso (muestra archivos procesados)\n\n" +
         "Ejemplos completos:\n" +
         "  tar -czf backup.tar.gz carpeta/   → comprimir\n" +
         "  tar -xzf backup.tar.gz            → descomprimir\n" +
         "  tar -xzf backup.tar.gz -C /destino/ → descomprimir en directorio específico\n" +
         "  tar -tzf backup.tar.gz            → listar contenido sin extraer"
},

// PREGUNTA 35 - Medio - Pipes
{
    unit: "Linux - Bash y Scripts",
    diff: "medium",
    q: "¿Qué hace el siguiente comando? ls -la /etc | grep '^d' | wc -l",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div><span style="color:#888;">$</span> ls -la /etc | grep '^d' | wc -l</div>
<div style="color:#fff;">28</div>
</div>
<table class="subnet-table" style="margin-top:0.5rem;">
<thead><tr><th>Parte del comando</th><th>¿Qué hace?</th></tr></thead>
<tbody>
  <tr><td>ls -la /etc</td><td><input placeholder="explica"></td></tr>
  <tr><td>grep '^d'</td><td><input placeholder="explica"></td></tr>
  <tr><td>wc -l</td><td><input placeholder="explica"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "Cuenta cuántos directorios hay dentro de /etc",
        "Cuenta cuántos archivos ocultos hay en /etc",
        "Muestra el tamaño total de /etc",
        "Lista todos los archivos de /etc que empiezan con 'd'"
    ],
    ans: 0,
    exp: "Análisis del comando por partes:\n\n" +
         "  ls -la /etc      → lista todos los archivos de /etc con detalles\n" +
         "                     La primera letra indica el tipo: d=directorio, -=archivo, l=enlace\n\n" +
         "  grep '^d'        → filtra las líneas que EMPIEZAN (^) con 'd'\n" +
         "                     Es decir, solo las líneas de directorios\n\n" +
         "  wc -l            → cuenta las líneas resultantes\n\n" +
         "  Resultado: número de subdirectorios en /etc\n\n" +
         "El pipe ( | ) pasa la salida de un comando como entrada del siguiente.\n" +
         "Esta es una de las características más poderosas de Linux/bash."
},

// PREGUNTA 36 - Difícil - SSH
{
    unit: "Linux - Redes",
    diff: "hard",
    case: "Necesitas conectarte al servidor 192.168.1.50 con el usuario 'admin' usando SSH en el puerto 2222.",
    q: "¿Cuál es el comando correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@local:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Parámetro SSH</th><th>Valor</th></tr></thead>
<tbody>
  <tr><td>Usuario</td><td>admin</td></tr>
  <tr><td>IP servidor</td><td>192.168.1.50</td></tr>
  <tr><td>Puerto</td><td>2222</td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "ssh -p 2222 admin@192.168.1.50",
        "ssh admin@192.168.1.50 -port 2222",
        "ssh 192.168.1.50 -u admin -p 2222",
        "ssh admin:2222@192.168.1.50"
    ],
    ans: 0,
    exp: "El comando SSH correcto es:\n" +
         "  ssh -p 2222 admin@192.168.1.50\n\n" +
         "Sintaxis general:\n" +
         "  ssh [opciones] usuario@host\n\n" +
         "Opciones comunes:\n" +
         "  -p 2222        → especifica el puerto (por defecto es 22)\n" +
         "  -i clave.pem   → usa una clave privada específica\n" +
         "  -X             → habilita X11 forwarding (aplicaciones gráficas)\n" +
         "  -v             → modo verboso para debug\n\n" +
         "Para copiar archivos por SSH:\n" +
         "  scp -P 2222 archivo.txt admin@192.168.1.50:/destino/\n\n" +
         "Para montar sistema de archivos remoto:\n" +
         "  sshfs admin@192.168.1.50:/remoto /local -p 2222"
},

// PREGUNTA 37 - Difícil - Cron
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "Necesitas programar un script /home/usuario/backup.sh para que se ejecute todos los días de lunes a viernes a las 23:30.",
    q: "¿Cuál es la línea de cron correcta?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr><th>Campo</th><th>Minuto</th><th>Hora</th><th>Día mes</th><th>Mes</th><th>Día semana</th></tr>
</thead>
<tbody>
  <tr>
    <td>Valores válidos</td>
    <td>0-59</td><td>0-23</td><td>1-31</td><td>1-12</td>
    <td>0-7 (0,7=Dom)</td>
  </tr>
  <tr>
    <td>Tu respuesta</td>
    <td><input placeholder="min"></td>
    <td><input placeholder="hora"></td>
    <td><input placeholder="día">  </td>
    <td><input placeholder="mes"></td>
    <td><input placeholder="sem"></td>
  </tr>
</tbody>
</table>
</div>`,
    opts: [
        "30 23 * * 1-5 /home/usuario/backup.sh",
        "23 30 * * 1-5 /home/usuario/backup.sh",
        "30 23 1-5 * * /home/usuario/backup.sh",
        "* * * * 1-5 /home/usuario/backup.sh"
    ],
    ans: 0,
    exp: "La línea de cron correcta:\n" +
         "  30 23 * * 1-5 /home/usuario/backup.sh\n\n" +
         "Formato cron (5 campos + comando):\n" +
         "  [minuto] [hora] [día-mes] [mes] [día-semana] [comando]\n\n" +
         "Desglose:\n" +
         "  30   → minuto 30\n" +
         "  23   → hora 23 (11pm)\n" +
         "  *    → cualquier día del mes\n" +
         "  *    → cualquier mes\n" +
         "  1-5  → lunes(1) a viernes(5)\n\n" +
         "Ejemplos útiles:\n" +
         "  0 * * * *     → cada hora\n" +
         "  0 0 * * *     → todos los días a medianoche\n" +
         "  0 0 1 * *     → primer día de cada mes\n" +
         "  */5 * * * *   → cada 5 minutos\n\n" +
         "Para editar el crontab:\n" +
         "  crontab -e    → editar\n" +
         "  crontab -l    → listar\n" +
         "  crontab -r    → eliminar"
},

// PREGUNTA 38 - Difícil - Variables
{
    unit: "Linux - Bash y Scripts",
    diff: "hard",
    case: "Tienes el siguiente script bash y debes predecir su salida.",
    q: "¿Qué imprime este script?\n#!/bin/bash\nNOMBRE='Linux'\necho \"Hola $NOMBRE\"\necho 'Hola $NOMBRE'",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#aaa;">#!/bin/bash</div>
<div>NOMBRE='Linux'</div>
<div>echo "Hola $NOMBRE"</div>
<div>echo 'Hola $NOMBRE'</div>
<div style="color:#aaa;">## ¿Cuál es la salida?</div>
<div contenteditable="true" style="outline:none;color:#fff;min-height:40px;">Escribe la salida aquí</div>
</div>
</div>`,
    opts: [
        "Hola Linux\nHola $NOMBRE",
        "Hola $NOMBRE\nHola Linux",
        "Hola Linux\nHola Linux",
        "Hola $NOMBRE\nHola $NOMBRE"
    ],
    ans: 0,
    exp: "Diferencia entre comillas dobles y simples en bash:\n\n" +
         "  Comillas dobles \" \" → interpretan variables y caracteres especiales\n" +
         '    echo "Hola $NOMBRE" → imprime: Hola Linux\n\n' +
         "  Comillas simples ' ' → todo es literal, no interpreta nada\n" +
         "    echo 'Hola $NOMBRE' → imprime: Hola $NOMBRE\n\n" +
         "  Salida completa del script:\n" +
         "    Hola Linux\n" +
         "    Hola $NOMBRE\n\n" +
         "Otros casos:\n" +
         '  echo "Hoy es $(date)" → interpreta el comando date\n' +
         "  echo 'Hoy es $(date)' → imprime literal: Hoy es $(date)"
},

// PREGUNTA 39 - Difícil - Firewall
{
    unit: "Linux - Redes",
    diff: "hard",
    case: "Necesitas permitir tráfico entrante en el puerto 443 (HTTPS) usando ufw en Ubuntu.",
    q: "¿Cuál es el comando correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@ubuntu:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Tarea</th><th>Comando ufw</th></tr></thead>
<tbody>
  <tr><td>Ver estado del firewall</td><td><input placeholder="ufw ..."></td></tr>
  <tr><td>Permitir puerto 443</td><td><input placeholder="ufw ..."></td></tr>
  <tr><td>Bloquear puerto 23</td><td><input placeholder="ufw ..."></td></tr>
  <tr><td>Activar el firewall</td><td><input placeholder="ufw ..."></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "ufw allow 443/tcp",
        "ufw open 443",
        "ufw permit 443/tcp",
        "iptables -A INPUT -p tcp --dport 443 -j ACCEPT"
    ],
    ans: 0,
    exp: "Comandos UFW (Uncomplicated Firewall) para Ubuntu:\n\n" +
         "  ufw status           → ver estado y reglas\n" +
         "  ufw status verbose   → estado detallado\n" +
         "  ufw enable           → activar firewall\n" +
         "  ufw disable          → desactivar firewall\n\n" +
         "Permitir tráfico:\n" +
         "  ufw allow 443/tcp    → permite TCP en puerto 443\n" +
         "  ufw allow 22         → permite SSH (TCP y UDP)\n" +
         "  ufw allow 'Nginx HTTPS' → por nombre de servicio\n\n" +
         "Bloquear tráfico:\n" +
         "  ufw deny 23          → bloquea Telnet\n" +
         "  ufw deny from 192.168.1.100 → bloquea una IP\n\n" +
         "Eliminar reglas:\n" +
         "  ufw delete allow 443/tcp"
},

// PREGUNTA 40 - Difícil - Gestión de paquetes
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "En un servidor Ubuntu necesitas instalar nginx, asegurarte de que esté actualizado y luego verificar su versión.",
    q: "¿Cuál es la secuencia correcta de comandos?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead><tr><th>Tarea</th><th>Comando</th></tr></thead>
<tbody>
  <tr><td>Actualizar lista de paquetes</td><td><input placeholder="apt ..."></td></tr>
  <tr><td>Instalar nginx</td><td><input placeholder="apt ..."></td></tr>
  <tr><td>Verificar versión instalada</td><td><input placeholder="nginx ..."></td></tr>
  <tr><td>Ver estado del servicio</td><td><input placeholder="systemctl ..."></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "apt update → apt install nginx → nginx -v → systemctl status nginx",
        "apt upgrade → apt install nginx → nginx --version → service nginx status",
        "apt-get update → apt-get upgrade nginx → nginx -v → ps aux | grep nginx",
        "apt update && apt upgrade → install nginx → check nginx version"
    ],
    ans: 0,
    exp: "Secuencia correcta en Ubuntu/Debian:\n\n" +
         "  sudo apt update              → actualiza la lista de paquetes disponibles\n" +
         "  sudo apt install nginx       → instala nginx\n" +
         "  nginx -v                     → muestra la versión de nginx\n" +
         "  systemctl status nginx       → verifica el estado del servicio\n\n" +
         "Diferencia entre update y upgrade:\n" +
         "  apt update  → solo actualiza la lista de paquetes (no instala nada)\n" +
         "  apt upgrade → instala las actualizaciones disponibles\n\n" +
         "Otros comandos apt útiles:\n" +
         "  apt remove nginx             → desinstala nginx\n" +
         "  apt purge nginx              → desinstala + elimina configuración\n" +
         "  apt autoremove               → elimina dependencias no usadas\n" +
         "  apt search nginx             → busca paquetes\n" +
         "  apt show nginx               → información del paquete"
},

// PREGUNTA 41 - Fácil - Atajos
{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué hace la combinación de teclas Ctrl+C en la terminal?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div><span style="color:#888;">$</span> ping 8.8.8.8</div>
<div>64 bytes de 8.8.8.8: icmp_seq=1 time=12ms</div>
<div>64 bytes de 8.8.8.8: icmp_seq=2 time=11ms</div>
<div style="color:#aaa;">[presionas Ctrl+C]</div>
<div contenteditable="true" style="outline:none;color:#fff;"> </div>
</div>
</div>`,
    opts: [
        "Interrumpe/cancela el proceso en ejecución",
        "Copia el texto seleccionado",
        "Cierra la terminal",
        "Pausa el proceso temporalmente"
    ],
    ans: 0,
    exp: "Ctrl+C envía la señal SIGINT al proceso en primer plano, interrumpiéndolo.\n\n" +
         "Atajos útiles en terminal Linux:\n" +
         "  Ctrl+C → interrumpe el proceso actual\n" +
         "  Ctrl+Z → pausa el proceso (lo manda al background)\n" +
         "  Ctrl+D → cierra la sesión / envía EOF\n" +
         "  Ctrl+L → limpia la pantalla (igual que 'clear')\n" +
         "  Ctrl+A → va al inicio de la línea\n" +
         "  Ctrl+E → va al final de la línea\n" +
         "  Ctrl+R → búsqueda en historial de comandos\n" +
         "  Tab    → autocompletado\n" +
         "  ↑ ↓    → navegar historial de comandos"
},

// PREGUNTA 42 - Fácil - Info sistema
{
    unit: "Linux - Sistema",
    diff: "easy",
    q: "¿Qué comando muestra información sobre el sistema operativo Linux instalado?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#fff;">Linux servidor 5.15.0-91-generic #101-Ubuntu SMP</div>
<div style="color:#fff;">x86_64 x86_64 x86_64 GNU/Linux</div>
</div>
<p><strong>💡 Pista:</strong> Viene de "Unix Name".</p>
</div>`,
    opts: ["uname -a", "sysinfo", "os-release", "hostinfo"],
    ans: 0,
    exp: "El comando 'uname' muestra información del sistema.\n\n" +
         "Opciones:\n" +
         "  uname -a → toda la información\n" +
         "  uname -r → versión del kernel\n" +
         "  uname -s → nombre del sistema operativo\n" +
         "  uname -m → arquitectura (x86_64, arm64, etc.)\n\n" +
         "Otros comandos de info del sistema:\n" +
         "  cat /etc/os-release   → distribución y versión\n" +
         "  lsb_release -a        → info de la distribución (Ubuntu/Debian)\n" +
         "  hostnamectl           → hostname y sistema\n" +
         "  uptime                → tiempo que lleva encendido el sistema"
},

// PREGUNTA 43 - Medio - Variables de entorno
{
    unit: "Linux - Bash y Scripts",
    diff: "medium",
    q: "¿Qué comando muestra todas las variables de entorno del sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div>PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin</div>
<div>HOME=/home/usuario</div>
<div>USER=usuario</div>
<div>SHELL=/bin/bash</div>
<div>LANG=es_CL.UTF-8</div>
</div>
</div>`,
    opts: ["env", "printenv", "set", "export"],
    ans: 0,
    exp: "El comando 'env' muestra todas las variables de entorno.\n\n" +
         "Comandos relacionados:\n" +
         "  env              → muestra todas las variables de entorno\n" +
         "  printenv         → igual que env\n" +
         "  printenv PATH    → muestra solo la variable PATH\n" +
         "  echo $HOME       → muestra el valor de una variable específica\n" +
         "  set              → muestra variables + funciones del shell\n\n" +
         "Variables de entorno importantes:\n" +
         "  $PATH   → directorios donde se buscan los comandos\n" +
         "  $HOME   → directorio del usuario\n" +
         "  $USER   → nombre del usuario actual\n" +
         "  $SHELL  → shell por defecto\n" +
         "  $PWD    → directorio actual\n\n" +
         "Para crear/exportar una variable:\n" +
         "  export MI_VAR='valor'"
},

// PREGUNTA 44 - Medio - Enlaces
{
    unit: "Linux - Sistema de Archivos",
    diff: "medium",
    q: "¿Qué diferencia hay entre un enlace simbólico (soft link) y un enlace duro (hard link)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<div><span style="color:#aaa;"># Crear enlace simbólico:</span></div>
<div>ln -s /ruta/original /ruta/enlace</div>
<br>
<div><span style="color:#aaa;"># Crear enlace duro:</span></div>
<div>ln /ruta/original /ruta/enlace</div>
</div>
<table class="subnet-table">
<thead><tr><th>Característica</th><th>Soft link</th><th>Hard link</th></tr></thead>
<tbody>
  <tr><td>Si se elimina el original</td><td><input placeholder="¿qué pasa?"></td><td><input placeholder="¿qué pasa?"></td></tr>
  <tr><td>Puede enlazar directorios</td><td><input placeholder="Sí/No"></td><td><input placeholder="Sí/No"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "Soft link: apunta a la ruta (se rompe si se elimina el original) | Hard link: apunta al mismo inode (el archivo persiste)",
        "Soft link: copia el archivo | Hard link: apunta a la ruta original",
        "Soft link: solo para directorios | Hard link: solo para archivos de texto",
        "Son exactamente iguales, solo cambia el comando de creación"
    ],
    ans: 0,
    exp: "Diferencias entre tipos de enlace:\n\n" +
         "Enlace simbólico (soft link):\n" +
         "  ln -s original.txt enlace.txt\n" +
         "  → Apunta a la RUTA del archivo original\n" +
         "  → Si se elimina el original, el enlace se 'rompe' (dangling link)\n" +
         "  → Puede enlazar directorios\n" +
         "  → Puede cruzar sistemas de archivos distintos\n" +
         "  → ls -la muestra: enlace.txt -> original.txt\n\n" +
         "Enlace duro (hard link):\n" +
         "  ln original.txt enlace.txt\n" +
         "  → Apunta al mismo INODE (mismos datos en disco)\n" +
         "  → Si se elimina el original, el enlace sigue funcionando\n" +
         "  → No puede enlazar directorios\n" +
         "  → No puede cruzar sistemas de archivos\n" +
         "  → Ambos archivos son indistinguibles"
},

// PREGUNTA 45 - Medio - Historial
{
    unit: "Linux - Bash y Scripts",
    diff: "medium",
    q: "¿Qué comando muestra el historial de comandos ejecutados en la terminal?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div>  497  ls -la</div>
<div>  498  cd /var/log</div>
<div>  499  cat syslog</div>
<div>  500  grep error syslog</div>
</div>
<p><strong>💡 Pista:</strong> También puedes usar !! para repetir el último comando.</p>
</div>`,
    opts: ["history", "log", "last", "recent"],
    ans: 0,
    exp: "El comando 'history' muestra el historial de comandos.\n\n" +
         "Usos:\n" +
         "  history        → muestra todos los comandos\n" +
         "  history 20     → muestra los últimos 20\n" +
         "  history | grep ssh → busca comandos SSH en el historial\n\n" +
         "Atajos del historial:\n" +
         "  !!             → repite el último comando\n" +
         "  !500           → ejecuta el comando número 500\n" +
         "  !ssh           → ejecuta el último comando que empezó con 'ssh'\n" +
         "  Ctrl+R         → búsqueda inversa en el historial\n\n" +
         "El historial se guarda en:\n" +
         "  ~/.bash_history  → para bash\n" +
         "  ~/.zsh_history   → para zsh"
},

// PREGUNTA 46 - Difícil - Monitoreo
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "El servidor tiene alta carga de CPU. Necesitas identificar qué proceso está consumiendo más recursos y luego terminarlo.",
    q: "¿Cuál es la secuencia correcta de comandos?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead><tr><th>Paso</th><th>Tarea</th><th>Comando</th></tr></thead>
<tbody>
  <tr><td>1</td><td>Ver procesos ordenados por CPU</td><td><input placeholder="comando"></td></tr>
  <tr><td>2</td><td>Obtener el PID del proceso problemático</td><td><input placeholder="comando"></td></tr>
  <tr><td>3</td><td>Terminar el proceso</td><td><input placeholder="comando PID"></td></tr>
  <tr><td>4</td><td>Verificar que terminó</td><td><input placeholder="comando"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "top (ordenar con P) → anotar PID → kill -9 PID → ps aux | grep PID",
        "ps aux → kill proceso → top → verify",
        "htop → stop proceso → reboot → check",
        "cat /proc/cpu → find PID → terminate PID → check /var/log"
    ],
    ans: 0,
    exp: "Secuencia para identificar y terminar un proceso problemático:\n\n" +
         "1) top → presionar 'P' para ordenar por CPU\n" +
         "   o: ps aux --sort=-%cpu | head -10\n\n" +
         "2) Anotar el PID del proceso que más consume\n" +
         "   o: pgrep nombre_proceso\n\n" +
         "3) Terminar el proceso:\n" +
         "   kill PID        → intenta terminar con gracia (SIGTERM)\n" +
         "   kill -9 PID     → fuerza la terminación (SIGKILL)\n\n" +
         "4) Verificar que terminó:\n" +
         "   ps aux | grep PID\n" +
         "   o volver a top\n\n" +
         "Alternativa rápida:\n" +
         "   htop → seleccionar proceso → F9 → SIGKILL\n\n" +
         "Siempre intentar SIGTERM antes de SIGKILL,\n" +
         "ya que SIGTERM permite al proceso limpiar recursos."
},

// PREGUNTA 47 - Difícil - Logs
{
    unit: "Linux - Sistema",
    diff: "hard",
    case: "Necesitas ver los logs del servicio nginx de los últimos 30 minutos para diagnosticar un error.",
    q: "¿Qué comando de journalctl usas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">root@linux:~#</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Opción journalctl</th><th>Función</th></tr></thead>
<tbody>
  <tr><td>-u servicio</td><td><input placeholder="¿qué filtra?"></td></tr>
  <tr><td>--since</td><td><input placeholder="¿qué hace?"></td></tr>
  <tr><td>-f</td><td><input placeholder="¿qué hace?"></td></tr>
  <tr><td>-p err</td><td><input placeholder="¿qué filtra?"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        'journalctl -u nginx --since "30 minutes ago"',
        'journalctl nginx -t 30m',
        'journalctl --service=nginx --last=30',
        'cat /var/log/nginx/error.log | tail -30m'
    ],
    ans: 0,
    exp: "El comando correcto es:\n" +
         '  journalctl -u nginx --since "30 minutes ago"\n\n' +
         "Opciones útiles de journalctl:\n" +
         "  -u nginx              → filtra por servicio nginx\n" +
         '  --since "1 hour ago"  → desde hace 1 hora\n' +
         '  --since "2026-04-13"  → desde una fecha\n' +
         '  --until "2026-04-13 12:00" → hasta una hora\n' +
         "  -f                    → sigue en tiempo real\n" +
         "  -n 100                → últimas 100 líneas\n" +
         "  -p err                → solo errores\n" +
         "  -p warning            → advertencias y superior\n\n" +
         "Combinaciones útiles:\n" +
         '  journalctl -u nginx -f                    → logs nginx en tiempo real\n' +
         '  journalctl -u nginx -p err --since today  → errores de hoy\n' +
         "  journalctl --disk-usage                   → espacio usado por logs"
},

// PREGUNTA 48 - Difícil - SCP
{
    unit: "Linux - Redes",
    diff: "hard",
    case: "Necesitas copiar el directorio /var/www/html completo desde tu máquina local al servidor remoto 192.168.1.50, usuario deploy, puerto 22, en la ruta /var/backups/.",
    q: "¿Cuál es el comando scp correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@local:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<table class="subnet-table">
<thead><tr><th>Parámetro</th><th>Valor</th></tr></thead>
<tbody>
  <tr><td>Origen (local)</td><td>/var/www/html</td></tr>
  <tr><td>Usuario remoto</td><td>deploy</td></tr>
  <tr><td>IP servidor</td><td>192.168.1.50</td></tr>
  <tr><td>Destino (remoto)</td><td>/var/backups/</td></tr>
  <tr><td>¿Directorio completo?</td><td>Sí</td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "scp -r /var/www/html deploy@192.168.1.50:/var/backups/",
        "scp /var/www/html deploy@192.168.1.50:/var/backups/",
        "scp -r deploy@192.168.1.50:/var/www/html /var/backups/",
        "rsync /var/www/html deploy@192.168.1.50:/var/backups/"
    ],
    ans: 0,
    exp: "El comando correcto es:\n" +
         "  scp -r /var/www/html deploy@192.168.1.50:/var/backups/\n\n" +
         "Desglose:\n" +
         "  scp       → Secure Copy (copia por SSH)\n" +
         "  -r        → recursivo (necesario para directorios)\n" +
         "  origen    → /var/www/html (local)\n" +
         "  destino   → deploy@192.168.1.50:/var/backups/\n\n" +
         "Otros ejemplos scp:\n" +
         "  scp archivo.txt user@host:/destino/          → copia archivo local a remoto\n" +
         "  scp user@host:/remoto/archivo.txt /local/    → copia remoto a local\n" +
         "  scp -P 2222 archivo.txt user@host:/destino/  → con puerto específico\n\n" +
         "Alternativa más eficiente para sincronización:\n" +
         "  rsync -avz /var/www/html deploy@192.168.1.50:/var/backups/"
},

// PREGUNTA 49 - Difícil - Bash condicional
{
    unit: "Linux - Bash y Scripts",
    diff: "hard",
    case: "Escribe un script que verifique si el archivo /etc/nginx/nginx.conf existe. Si existe, muestra 'Configuración encontrada'. Si no, muestra 'Archivo no encontrado'.",
    q: "¿Cuál es el script correcto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;">
<div style="color:#aaa;">#!/bin/bash</div>
<div contenteditable="true" style="outline:none;color:#fff;min-height:80px;">## Escribe el script aquí</div>
</div>
</div>`,
    opts: [
        '#!/bin/bash\nif [ -f /etc/nginx/nginx.conf ]; then\n  echo "Configuración encontrada"\nelse\n  echo "Archivo no encontrado"\nfi',
        '#!/bin/bash\nif exists /etc/nginx/nginx.conf; then\n  echo "Configuración encontrada"\nfi',
        '#!/bin/bash\ncheck -f /etc/nginx/nginx.conf\necho "Configuración encontrada"',
        '#!/bin/bash\nif /etc/nginx/nginx.conf == true; then\n  echo "Configuración encontrada"\nfi'
    ],
    ans: 0,
    exp: "El script correcto:\n" +
         "  #!/bin/bash\n" +
         "  if [ -f /etc/nginx/nginx.conf ]; then\n" +
         '    echo "Configuración encontrada"\n' +
         "  else\n" +
         '    echo "Archivo no encontrado"\n' +
         "  fi\n\n" +
         "Operadores de archivos en bash:\n" +
         "  -f archivo  → verdadero si existe y es un archivo regular\n" +
         "  -d archivo  → verdadero si existe y es un directorio\n" +
         "  -e archivo  → verdadero si existe (cualquier tipo)\n" +
         "  -r archivo  → verdadero si tiene permiso de lectura\n" +
         "  -w archivo  → verdadero si tiene permiso de escritura\n" +
         "  -x archivo  → verdadero si tiene permiso de ejecución\n" +
         "  -s archivo  → verdadero si existe y no está vacío\n\n" +
         "Estructura if-else en bash:\n" +
         "  if [ condición ]; then\n" +
         "    comandos\n" +
         "  elif [ otra_condición ]; then\n" +
         "    otros_comandos\n" +
         "  else\n" +
         "    comandos_por_defecto\n" +
         "  fi"
},

// PREGUNTA 50 - Difícil - Análisis completo
{
    unit: "Linux - Bash y Scripts",
    diff: "hard",
    case: "Tienes el siguiente pipeline y debes explicar qué hace cada parte:\ncat /var/log/auth.log | grep 'Failed password' | awk '{print $11}' | sort | uniq -c | sort -rn | head -10",
    q: "¿Qué hace este comando completo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<div style="color:#aaa;">cat /var/log/auth.log | grep 'Failed password' | awk '{print $11}' | sort | uniq -c | sort -rn | head -10</div>
</div>
<table class="subnet-table">
<thead><tr><th>Parte del comando</th><th>¿Qué hace?</th></tr></thead>
<tbody>
  <tr><td>cat /var/log/auth.log</td><td><input placeholder="explica"></td></tr>
  <tr><td>grep 'Failed password'</td><td><input placeholder="explica"></td></tr>
  <tr><td>awk '{print $11}'</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort</td><td><input placeholder="explica"></td></tr>
  <tr><td>uniq -c</td><td><input placeholder="explica"></td></tr>
  <tr><td>sort -rn</td><td><input placeholder="explica"></td></tr>
  <tr><td>head -10</td><td><input placeholder="explica"></td></tr>
</tbody>
</table>
</div>`,
    opts: [
        "Muestra las 10 IPs que más intentos fallidos de SSH tienen (posibles ataques de fuerza bruta)",
        "Muestra los 10 usuarios que fallaron al iniciar sesión",
        "Muestra los últimas 10 líneas del log de autenticación",
        "Cuenta cuántos usuarios tienen contraseña fallida en el sistema"
    ],
    ans: 0,
    exp: "Este comando analiza intentos fallidos de SSH (detección de fuerza bruta):\n\n" +
         "  cat /var/log/auth.log     → lee el log de autenticación\n" +
         "  grep 'Failed password'    → filtra solo los intentos fallidos\n" +
         "  awk '{print $11}'         → extrae el campo 11 (la IP de origen)\n" +
         "  sort                      → ordena las IPs alfabéticamente\n" +
         "  uniq -c                   → cuenta ocurrencias únicas\n" +
         "  sort -rn                  → ordena numéricamente de mayor a menor\n" +
         "  head -10                  → muestra solo las 10 primeras\n\n" +
         "Salida típica (IP → cantidad de intentos):\n" +
         "    342 192.168.1.200\n" +
         "    128 10.0.0.55\n" +
         "     45 172.16.0.10\n\n" +
         "Este tipo de análisis es fundamental en ciberseguridad para:\n" +
         "  → Detectar ataques de fuerza bruta\n" +
         "  → Identificar IPs a bloquear con fail2ban o ufw"
},

     ];



registrarAsignatura('linux', BANK.linux);
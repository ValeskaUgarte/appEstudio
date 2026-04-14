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
<h6><p>💡 Pista: Lista el contenido. Viene de "list".</p></h6>
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
<h6><p>💡 Pista: Significa "Print Working Directory".</p></h6>
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
<h6><p>💡 Pista: Viene de "Change Directory".</p></h6>
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
<h6><p>💡 Pista: Viene de "Make Directory".</p></h6>
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
<h6><p>💡 Pista: Viene de "Remove". ¡Cuidado, no hay papelera!</p></h6>
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
<h6><p>💡 Pista:Viene de "Copy".</p></h6>
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
<h6><p>💡 Pista: Viene de "Move". Sirve también para renombrar.</p></h6>
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
<h6><p>💡 Pista: Viene de "concatenate".</p></h6>
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
<h6><p>💡 Pista: Como "tocar" el archivo sin escribir nada.</p></h6>
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
<h6><p>💡 Pista: "Global Regular Expression Print".</p></h6>
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
<h6><p>💡 Pista: Viene de "Change Mode".</p></h6>
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
<h6><p>💡 Pista: Viene de "Change Owner".</p></h6>
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
<h6><p>💡 Pista: También existe una versión más interactiva con 'add' al final.</p></h6>
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
<h6><p>💡 Pista: Se actualiza automáticamente cada pocos segundos.</p></h6>
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
<h6><p>💡 Pista:Viene de "Disk Free".</p></h6>
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
<h6><p>💡 Pista: Es el moderno reemplazo de ifconfig.</p></h6>
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
<h6><p>💡 Pista: Es el reemplazo moderno de netstat.</p></h6>
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
<h6><p>💡 Pista: Muestra hacia dónde va el tráfico.</p></h6>
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
<h6><p>💡 Pista: Combina ver el final del archivo + seguimiento en vivo.</p></h6>
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
<h6><p>💡 Pista: Busca en el árbol de directorios.</p></h6>
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
<h6><p>💡 Pista: Viene de "Unix Name".</p></h6>
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
<h6><p>💡 Pista: También puedes usar !! para repetir el último comando.</p></h6>
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

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el contenido de un directorio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Viene de "list".</p></h6>
</div>
</div>`,
    opts: ["ls", "cd", "pwd", "dir"],
    ans: 0,
    exp: "✅ El comando 'ls' (list) muestra el contenido del directorio actual.\n\n" +
         "📌 Opciones útiles:\n" +
         "   ls -l  → lista detallada (permisos, tamaño, fecha)\n" +
         "   ls -a  → muestra archivos ocultos (empiezan con .)\n" +
         "   ls -la → combinación de ambas\n" +
         "   ls -h  → tamaños legibles (1K, 2M, 3G)"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra la ruta del directorio actual?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Print Working Directory.</p></h6>
</div>
</div>`,
    opts: ["pwd", "cd", "ls", "whereami"],
    ans: 0,
    exp: "✅ El comando 'pwd' (Print Working Directory) imprime la ruta absoluta del directorio actual.\n\n" +
         "📌 Ejemplo de salida:\n" +
         "   usuario@linux:~$ pwd\n" +
         "   /home/usuario\n\n" +
         "   usuario@linux:~/documentos$ pwd\n" +
         "   /home/usuario/documentos"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando se usa para cambiar de directorio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> /home/usuario/documentos</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Change Directory.</p></h6>
</div>
</div>`,
    opts: ["cd", "mv", "ls", "chdir"],
    ans: 0,
    exp: "✅ El comando 'cd' (Change Directory) permite navegar entre directorios.\n\n" +
         "📌 Ejemplos:\n" +
         "   cd /home/usuario  → va a esa ruta absoluta\n" +
         "   cd ..             → sube un nivel\n" +
         "   cd ~              → va al directorio home\n" +
         "   cd -              → vuelve al directorio anterior\n" +
         "   cd               → sin argumentos, va al home"
},


{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando crea un nuevo directorio?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> mis_archivos</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Make Directory.</p></h6>
</div>
</div>`,
    opts: ["mkdir", "touch", "create", "md"],
    ans: 0,
    exp: "✅ 'mkdir' (Make Directory) crea uno o más directorios.\n\n" +
         "📌 Ejemplos:\n" +
         "   mkdir nuevo      → crea 'nuevo' en el directorio actual\n" +
         "   mkdir -p a/b/c   → crea directorios padres si no existen\n" +
         "   mkdir dir1 dir2  → crea múltiples directorios\n" +
         "   mkdir -m 755 dir → crea con permisos específicos"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando elimina un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Remove file.</p>
<p>⚠️ Cuidado: ¡No hay papelera de reciclaje!</p></h6>
</div>
</div>`,
    opts: ["rm", "del", "delete", "remove"],
    ans: 0,
    exp: "✅ 'rm' (Remove) elimina archivos de forma permanente.\n\n" +
         "📌 Ejemplos:\n" +
         "   rm archivo.txt      → elimina el archivo\n" +
         "   rm -r directorio/   → elimina recursivamente (directorio + contenido)\n" +
         "   rm -f archivo       → fuerza la eliminación sin preguntar\n" +
         "   rm -rf directorio/  → ⚠️ PELIGROSO: elimina todo sin confirmación\n\n" +
         "💡 Para más seguridad, algunos usan 'trash' o 'safe-rm'"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando copia archivos o directorios?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> origen.txt destino.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Copy.</p></h6>
</div>
</div>`,
    opts: ["cp", "copy", "mv", "dd"],
    ans: 0,
    exp: "✅ 'cp' (Copy) copia archivos o directorios.\n\n" +
         "📌 Ejemplos:\n" +
         "   cp a.txt b.txt       → copia a.txt a b.txt\n" +
         "   cp -r dir1/ dir2/    → copia directorio recursivamente\n" +
         "   cp -i a.txt b.txt    → pregunta antes de sobrescribir\n" +
         "   cp -v a.txt b.txt    → modo verbose (muestra lo que hace)\n" +
         "   cp -u a.txt b.txt    → copia solo si origen es más nuevo"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando mueve o renombra archivos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> viejo.txt nuevo.txt</span>
</div>
<div class="work-area">
<h6><p><💡 Pista:Move.</p></h6>
</div>
</div>`,
    opts: ["mv", "move", "rename", "cp -r"],
    ans: 0,
    exp: "✅ 'mv' (Move) mueve o renombra archivos/directorios.\n\n" +
         "📌 Ejemplos:\n" +
         "   mv a.txt b.txt       → renombra a.txt a b.txt\n" +
         "   mv archivo/ carpeta/ → mueve archivo dentro de carpeta/\n" +
         "   mv *.txt carpeta/    → mueve todos los .txt a carpeta/\n" +
         "   mv -i a.txt b.txt    → pregunta antes de sobrescribir\n\n" +
         "💡 Diferencia con cp: mv no duplica, solo cambia la ubicación"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra las primeras líneas de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> -n 20 archivo.log</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: La cabeza del archivo.</p></h6>
</div>
</div>`,
    opts: ["head", "tail", "cat", "less"],
    ans: 0,
    exp: "✅ 'head' muestra las primeras líneas de un archivo (por defecto 10).\n\n" +
         "📌 Ejemplos:\n" +
         "   head archivo.txt     → primeras 10 líneas\n" +
         "   head -n 20 archivo   → primeras 20 líneas\n" +
         "   head -c 100 archivo  → primeros 100 bytes\n" +
         "   head -q *.txt        → modo silencioso (no muestra nombres)"
},


{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra las últimas líneas de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> -f archivo.log</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: La cola del archivo.</p>
<p>🔥 Importante:La opción -f es muy usada para logs en tiempo real.</p></h6>
</div>
</div>`,
    opts: ["tail", "head", "cat", "follow"],
    ans: 0,
    exp: "✅ 'tail' muestra las últimas líneas de un archivo (por defecto 10).\n\n" +
         "📌 Ejemplos:\n" +
         "   tail archivo.txt      → últimas 10 líneas\n" +
         "   tail -n 20 archivo    → últimas 20 líneas\n" +
         "   tail -f archivo.log   → SIGUE el archivo en tiempo real (Ctrl+C para salir)\n" +
         "   tail -f -n 100 log    → muestra últimas 100 y sigue\n\n" +
         "💡 'tail -f' es esencial para monitorear logs de servidores"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el contenido completo de un archivo en la terminal?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Concatena y muestra.</p></h6>
</div>
</div>`,
    opts: ["cat", "echo", "print", "show"],
    ans: 0,
    exp: "✅ 'cat' (concatenate) muestra el contenido completo de uno o más archivos.\n\n" +
         "📌 Ejemplos:\n" +
         "   cat archivo.txt        → muestra el contenido\n" +
         "   cat a.txt b.txt        → muestra a.txt y luego b.txt\n" +
         "   cat > nuevo.txt        → crea archivo (Ctrl+D para guardar)\n" +
         "   cat a.txt b.txt > c.txt → concatena a y b en c\n" +
         "   cat -n archivo.txt     → muestra con números de línea"
},

//NIVEL 2 - INTERMEDIO (Permisos, procesos, filtros)

{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando cambia los permisos de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> 755 script.sh</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Change Mode.</p>
<p>📊 Formato octal: 4=r, 2=w, 1=x</p></h6>
</div>
</div>`,
    opts: ["chmod", "chown", "chgrp", "perm"],
    ans: 0,
    exp: "✅ 'chmod' (Change Mode) modifica permisos de archivos/directorios.\n\n" +
         "📌 Notación octal:\n" +
         "   7 = rwx (4+2+1), 6 = rw-, 5 = r-x, 4 = r--\n" +
         "   chmod 755 archivo → dueño:rwx, grupo:r-x, otros:r-x\n\n" +
         "📌 Notación simbólica:\n" +
         "   chmod u+x archivo   → añade ejecución al dueño\n" +
         "   chmod go-w archivo  → quita escritura a grupo y otros\n" +
         "   chmod a=r archivo   → todos solo lectura"
},

{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando cambia el dueño de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> root:admin archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Change Owner.</p>
<p>⚠️ Normalmente requiere sudo.</p></h6>
</div>
</div>`,
    opts: ["chown", "chmod", "chgrp", "owner"],
    ans: 0,
    exp: "✅ 'chown' (Change Owner) cambia el dueño y/o grupo de un archivo.\n\n" +
         "📌 Ejemplos:\n" +
         "   chown root archivo       → dueño root, grupo sin cambios\n" +
         "   chown :admin archivo     → grupo admin, dueño sin cambios\n" +
         "   chown root:admin archivo → dueño root y grupo admin\n" +
         "   chown -R usuario:grupo /ruta/ → recursivo\n\n" +
         "💡 En RedHat/CentOS también se usa 'chown usuario.grupo'"
},

{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando muestra los procesos en ejecución?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> aux | grep nginx</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Process Status.</p>
<p>📊 Opciones comunes:a (todos), u (usuario), x (sin terminal)</p></h6>
</div>
</div>`,
    opts: ["ps", "top", "htop", "pidof"],
    ans: 0,
    exp: "✅ 'ps' (Process Status) muestra información de procesos.\n\n" +
         "📌 Opciones útiles:\n" +
         "   ps aux       → todos los procesos (formato BSD)\n" +
         "   ps -ef       → todos los procesos (formato System V)\n" +
         "   ps -u juan   → procesos del usuario juan\n" +
         "   ps -p 1234   → información del PID 1234\n\n" +
         "💡 'top' o 'htop' son interactivos y actualizan en tiempo real"
},

{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando termina un proceso por su PID?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> -9 1234</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Enviar señal a proceso.</p>
<p>🔢 Señales comunes: 15=TERM (suave), 9=KILL (forzoso)</p></h6>
</div>
</div>`,
    opts: ["kill", "pkill", "killall", "terminate"],
    ans: 0,
    exp: "✅ 'kill' envía señales a procesos (por defecto SIGTERM - 15).\n\n" +
         "📌 Ejemplos:\n" +
         "   kill 1234           → SIGTERM (terminación limpia)\n" +
         "   kill -9 1234        → SIGKILL (terminación forzosa)\n" +
         "   kill -15 1234       → mismo que sin opción\n" +
         "   kill -STOP 1234     → pausa el proceso\n" +
         "   kill -CONT 1234     → reanuda proceso pausado\n\n" +
         "💡 pkill mata por nombre, killall mata todos con ese nombre"
},

{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando busca líneas que coinciden con un patrón?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> "error" archivo.log</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Global Regular Expression Print.</p>
<p>🔍 Esencial para buscar en logs.</p></h6>
</div>
</div>`,
    opts: ["grep", "awk", "sed", "find"],
    ans: 0,
    exp: "✅ 'grep' filtra líneas que coinciden con un patrón.\n\n" +
         "📌 Ejemplos:\n" +
         "   grep error log.txt        → líneas con 'error'\n" +
         "   grep -i error log.txt     → ignorando mayúsculas\n" +
         "   grep -r 'TODO' ./src/     → busca recursivamente en directorios\n" +
         "   grep -v '#' config.conf   → líneas que NO contienen #\n" +
         "   grep -E 'error|warning'   → expresión regular extendida\n" +
         "   grep -c 'error' log.txt   → solo cuenta coincidencias\n" +
         "   grep --color 'error' log  → resalta el patrón"
},


{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando cuenta líneas, palabras y caracteres?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> -l archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Word Count.</p>
<p>📊 Muy usado con pipes: cat archivo | wc -l</p></h6>
</div>
</div>`,
    opts: ["wc", "count", "stat", "du"],
    ans: 0,
    exp: "✅ 'wc' (Word Count) cuenta líneas, palabras y caracteres.\n\n" +
         "📌 Opciones:\n" +
         "   wc archivo.txt      → líneas, palabras, caracteres\n" +
         "   wc -l archivo.txt   → solo líneas\n" +
         "   wc -w archivo.txt   → solo palabras\n" +
         "   wc -c archivo.txt   → solo bytes\n" +
         "   wc -m archivo.txt   → solo caracteres (UTF-8)\n\n" +
         "💡 Uso típico: cat log.txt | grep error | wc -l"
},

{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando ordena líneas de texto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> -r archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Ordena alfabéticamente.</p></h6>
</div>
</div>`,
    opts: ["sort", "uniq", "order", "arrange"],
    ans: 0,
    exp: "✅ 'sort' ordena líneas alfabéticamente o numéricamente.\n\n" +
         "📌 Ejemplos:\n" +
         "   sort archivo.txt           → orden ascendente\n" +
         "   sort -r archivo.txt        → orden descendente\n" +
         "   sort -n numeros.txt        → orden numérico\n" +
         "   sort -u archivo.txt        → elimina duplicados\n" +
         "   sort -t: -k2 /etc/passwd   → ordena por 2do campo (delimitador :)\n" +
         "   sort -h tamaños.txt        → orden humano (1K, 2M, 3G)"
},

{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando elimina líneas duplicadas adyacentes?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Unique.</p>
<p>⚠️Solo elimina duplicados CONSECUTIVOS. Usar 'sort' primero.</p></h6>
</div>
</div>`,
    opts: ["uniq", "sort -u", "unique", "dedup"],
    ans: 0,
    exp: "✅ 'uniq' elimina líneas duplicadas ADYACENTES.\n\n" +
         "📌 Ejemplos:\n" +
         "   uniq archivo.txt            → elimina duplicados consecutivos\n" +
         "   sort archivo.txt | uniq     → elimina TODOS los duplicados\n" +
         "   uniq -c archivo.txt         → muestra conteo de repeticiones\n" +
         "   uniq -d archivo.txt         → solo muestra duplicados\n" +
         "   uniq -u archivo.txt         → solo muestra líneas únicas\n\n" +
         "💡 Atajo: sort -u hace sort + uniq"
},

{
    unit: "Linux - Redirección y Pipes",
    diff: "medium",
    q: "¿Qué operador redirige la salida estándar a un archivo (sobrescribe)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> archivo.txt</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Mayor que.</p>
<p>📁Cuidado: ¡borra el contenido anterior!</p></h6>
</div>
</div>`,
    opts: [">", ">>", "<", "|"],
    ans: 0,
    exp: "✅ '>' redirige stdout a un archivo (SOBRESCRIBE).\n\n" +
         "📌 Redirecciones:\n" +
         "   comando > archivo    → stdout al archivo (sobrescribe)\n" +
         "   comando >> archivo   → stdout al archivo (añade)\n" +
         "   comando 2> error.log → stderr al archivo\n" +
         "   comando &> todo.log  → stdout y stderr al mismo archivo\n" +
         "   comando > archivo 2>&1 → stdout y stderr (otra forma)\n" +
         "   comando < archivo    → stdin desde archivo\n\n" +
         "💡 Ejemplo: ls -la > listado.txt"
},

{
    unit: "Linux - Redirección y Pipes",
    diff: "medium",
    q: "¿Qué operador conecta la salida de un comando con la entrada de otro?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span><span style="color:#aaa;"> grep error</span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Tubería.</p>
<p>🔗 Encadena comandos: ls -la | grep .txt | wc -l</p></h6>
</div>
</div>`,
    opts: ["|", ">", "<", "&"],
    ans: 0,
    exp: "✅ '|' (pipe) conecta stdout de un comando con stdin del siguiente.\n\n" +
         "📌 Ejemplos:\n" +
         "   ls -la | grep '.txt'        → filtra archivos .txt\n" +
         "   cat log.txt | grep error | wc -l → cuenta errores\n" +
         "   ps aux | sort -rnk3 | head -5 → top 5 procesos por CPU\n" +
         "   history | grep ssh | tail -10 → últimos 10 comandos ssh\n\n" +
         "💡 El pipe es la base del 'filosofía Unix': hacer una cosa bien y encadenar."
},

//NIVEL 3 - AVANZADO (Scripting, variables, condiciones)

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Cuál es la sintaxis correcta para un 'if' en bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Los espacios son OBLIGATORIOS.</p></h6>
</div>
</div>`,
    opts: [
        "if [ $edad -gt 18 ]; then echo 'mayor'; fi",
        "if ($edad > 18) { echo 'mayor' }",
        "if [ $edad > 18 ] then echo mayor end",
        "if ((edad > 18)) then echo 'mayor' fi"
    ],
    ans: 0,
    exp: "✅ Sintaxis correcta: if [ condicion ]; then comando; fi\n\n" +
         "📌 Operadores numéricos:\n" +
         "   -eq (igual), -ne (no igual), -gt (mayor que)\n" +
         "   -lt (menor que), -ge (mayor o igual), -le (menor o igual)\n\n" +
         "📌 Operadores de string:\n" +
         "   = (igual), != (diferente), -z (vacío), -n (no vacío)\n\n" +
         "📌 Operadores de archivos:\n" +
         "   -f (existe y es archivo), -d (directorio), -x (ejecutable)\n\n" +
         "💡 Los ESPACIOS dentro de [ ] son obligatorios"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Cuál es la sintaxis correcta para un 'if' en bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6>Pista:
<p>💡 Pista: Los espacios son OBLIGATORIOS.</p></h6>
</div>
</div>`,
    opts: [
        "if [ $edad -gt 18 ]; then echo 'mayor'; fi",
        "if ($edad > 18) { echo 'mayor' }",
        "if [ $edad > 18 ] then echo mayor end",
        "if ((edad > 18)) then echo 'mayor' fi"
    ],
    ans: 0,
    exp: "✅ Sintaxis correcta: if [ condicion ]; then comando; fi\n\n" +
         "📌 Operadores numéricos:\n" +
         "   -eq (igual), -ne (no igual), -gt (mayor que)\n" +
         "   -lt (menor que), -ge (mayor o igual), -le (menor o igual)\n\n" +
         "📌 Operadores de string:\n" +
         "   = (igual), != (diferente), -z (vacío), -n (no vacío)\n\n" +
         "📌 Operadores de archivos:\n" +
         "   -f (existe y es archivo), -d (directorio), -x (ejecutable)\n\n" +
         "💡 Los ESPACIOS dentro de [ ] son obligatorios"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Cómo se obtiene el primer argumento de un script bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Variables especiales del script.</p>
<p>📌 $0 = nombre del script, $1 = primer argumento</p></h6>
</div>
</div>`,
    opts: ["$1", "$0", "$#", "$@"],
    ans: 0,
    exp: "✅ '$1' es el primer argumento del script.\n\n" +
         "📌 Variables de argumentos:\n" +
         "   $0  → nombre del script\n" +
         "   $1, $2, $3... → argumentos posicionales\n" +
         "   $#  → número de argumentos\n" +
         "   $@  → todos los argumentos como palabras separadas\n" +
         "   $*  → todos los argumentos como una sola palabra\n\n" +
         "📌 Ejemplo:\n" +
         "   #!/bin/bash\n" +
         "   echo 'Script:' $0\n" +
         "   echo 'Primer argumento:' $1\n" +
         "   echo 'Total argumentos:' $#"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué comando se usa para ejecutar un script bash correctamente?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: El script necesita permiso de ejecución o se llama con bash.</p></h6>
</div>
</div>`,
    opts: [
        "bash script.sh o ./script.sh (con chmod +x)",
        "sh script.sh",
        "source script.sh",
        "todas las anteriores son correctas"
    ],
    ans: 3,
    exp: "✅ TODAS son formas válidas, pero con diferencias:\n\n" +
         "📌 Formas de ejecutar un script:\n" +
         "   ./script.sh      → necesita chmod +x, usa shebang (#!)\n" +
         "   bash script.sh   → ejecuta con bash (no necesita +x)\n" +
         "   sh script.sh     → ejecuta con sh (shell más básico)\n" +
         "   source script.sh → ejecuta en el shell ACTUAL (variables persisten)\n" +
         "   . script.sh      → igual que source\n\n" +
         "💡 source es útil para scripts que modifican el entorno (ej: setear variables)"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué comando en un script muestra 'Hola Mundo' en la terminal?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Imprimir texto.</p></h6>
</div>
</div>`,
    opts: ["echo", "print", "printf", "output"],
    ans: 0,
    exp: "✅ 'echo' imprime texto en la terminal.\n\n" +
         "📌 Ejemplos:\n" +
         "   echo 'Hola Mundo'        → Hola Mundo\n" +
         "   echo -n 'Sin salto'      → no añade newline\n" +
         "   echo -e 'Línea1\\nLínea2' → interpreta escapes (\\n, \\t)\n" +
         "   echo $variable           → imprime valor de variable\n\n" +
         "📌 Alternativa 'printf':\n" +
         "   printf 'Nombre: %s\\n' 'Juan' → más control de formato"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Cómo se declara y se usa una variable en bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Las variables NO tienen tipo, todo son strings.</p></h6>
</div>
</div>`,
    opts: [
        "nombre='Juan' y echo $nombre",
        "set nombre = 'Juan' y echo %nombre%",
        "var nombre = 'Juan' y print nombre",
        "string nombre 'Juan' y echo {nombre}"
    ],
    ans: 0,
    exp: "✅ Sintaxis: variable=valor (SIN espacios alrededor del =)\n\n" +
         "📌 Ejemplos:\n" +
         "   nombre='Juan'           → asignación\n" +
         "   echo $nombre            → muestra 'Juan'\n" +
         "   edad=25                 → números también son strings\n" +
         "   lista=(uno dos tres)    → array\n" +
         "   readonly PI=3.1416      → variable de solo lectura\n" +
         "   unset nombre            → elimina variable\n\n" +
         "💡 Usar ${variable} para evitar ambigüedades: echo \"${nombre}Apellido\""
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué estructura de bucle recorre una lista de elementos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Itera sobre elementos.</p></h6>
</div>
</div>`,
    opts: [
        "for i in {1..10}; do echo $i; done",
        "while [ $i -le 10 ]; do echo $i; i=$((i+1)); done",
        "until [ $i -gt 10 ]; do echo $i; i=$((i+1)); done",
        "foreach i (1..10) { echo $i }"
    ],
    ans: 0,
    exp: "✅ 'for' itera sobre una lista de elementos.\n\n" +
         "📌 Sintaxis del for:\n" +
         "   for variable in lista; do comandos; done\n\n" +
         "📌 Ejemplos:\n" +
         "   for i in {1..10}; do echo $i; done              → números 1 al 10\n" +
         "   for archivo in *.txt; do echo $archivo; done    → archivos .txt\n" +
         "   for usuario in $(cat /etc/passwd | cut -d: -f1); do\n" +
         "       echo $usuario\n" +
         "   done\n\n" +
         "📌 For estilo C:\n" +
         "   for ((i=0; i<10; i++)); do echo $i; done"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Cómo se lee entrada del usuario en un script?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Read input.</p></h6>
</div>
</div>`,
    opts: ["read", "input", "get", "scan"],
    ans: 0,
    exp: "✅ 'read' lee entrada del usuario desde stdin.\n\n" +
         "📌 Ejemplos:\n" +
         "   read nombre                → guarda en variable 'nombre'\n" +
         "   read -p 'Nombre: ' nombre  → muestra prompt antes\n" +
         "   read -s password           → modo silencioso (no muestra tecleo)\n" +
         "   read -t 5 variable         → timeout de 5 segundos\n" +
         "   read -n 1 respuesta        → lee solo 1 carácter\n\n" +
         "📌 Ejemplo completo:\n" +
         "   #!/bin/bash\n" +
         "   read -p '¿Cuál es tu nombre? ' nombre\n" +
         "   echo \"Hola $nombre\""
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué comando permite hacer operaciones aritméticas en bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista:Double parentheses.</p></h6>
</div>
</div>`,
    opts: ["$(( ))", "expr", "let", "todas las anteriores"],
    ans: 3,
    exp: "✅ Todas son formas válidas de hacer aritmética en bash.\n\n" +
         "📌 Formas de calcular:\n" +
         "   resultado=$((5 + 3))        → sintaxis moderna (recomendada)\n" +
         "   expr 5 + 3                  → comando externo (lento)\n" +
         "   let resultado=5+3           → comando interno\n" +
         "   ((resultado = 5 + 3))       → otra forma\n\n" +
         "📌 Operadores:\n" +
         "   +, -, *, /, % (módulo)\n" +
         "   ** o ^ (exponente)\n\n" +
         "📌 Ejemplo:\n" +
         "   a=10\n" +
         "   b=3\n" +
         "   suma=$((a + b))\n" +
         "   echo \"Suma: $suma\""
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué símbolo se usa para comentarios en bash?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista:Hash.</p></h6>
</div>
</div>`,
    opts: ["#", "//", "/*", "--"],
    ans: 0,
    exp: "✅ '#' inicia un comentario (todo lo que sigue se ignora).\n\n" +
         "📌 Ejemplos:\n" +
         "   # Esto es un comentario\n" +
         "   nombre='Juan'  # comentario al final de línea\n\n" +
         "📌 Comentarios de múltiples líneas (truco):\n" +
         "   : '\n" +
         "   Esto es un comentario\n" +
         "   de varias líneas\n" +
         "   '\n\n" +
         "📌 Shebang: #!/bin/bash (NO es comentario, es el intérprete)"
},

{
    unit: "Linux - Scripting Bash",
    diff: "hard",
    q: "¿Qué comando hace que un script termine con un código de salida específico?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista:Exit status.</p></h6>
<h6><p>📊0 = éxito, ≠0 = error.</p></h6>
</div>
</div>`,
    opts: ["exit", "return", "end", "stop"],
    ans: 0,
    exp: "✅ 'exit' termina el script y retorna un código.\n\n" +
         "📌 Ejemplos:\n" +
         "   exit 0      → éxito\n" +
         "   exit 1      → error genérico\n" +
         "   exit 127    → comando no encontrado\n\n" +
         "📌 Ver código de salida del último comando:\n" +
         "   echo $?     → muestra el código\n\n" +
         "📌 Ejemplo con if:\n" +
         "   if [ -f archivo.txt ]; then\n" +
         "       echo 'Existe'\n" +
         "       exit 0\n" +
         "   else\n" +
         "       echo 'No existe'\n" +
         "       exit 1\n" +
         "   fi"
},

//NIVEL 4 - EXPERTO (Systemd, redes, administración)

{
    unit: "Linux - Systemd y Servicios",
    diff: "expert",
    q: "¿Qué comando inicia un servicio en systemd?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: System Control.</p></h6>
<h6><p>🔄 Reemplaza a 'service' y 'chkconfig'.</p></h6>
</div>
</div>`,
    opts: [
        "systemctl start servicio",
        "systemctl enable servicio",
        "systemctl activate servicio",
        "service start servicio"
    ],
    ans: 0,
    exp: "✅ 'systemctl start servicio' inicia un servicio.\n\n" +
         "📌 Comandos systemctl más usados:\n" +
         "   systemctl start servicio     → inicia ahora\n" +
         "   systemctl stop servicio      → detiene ahora\n" +
         "   systemctl restart servicio   → reinicia\n" +
         "   systemctl reload servicio    → recarga configuración (sin reiniciar)\n" +
         "   systemctl status servicio    → estado actual\n" +
         "   systemctl enable servicio    → inicia al boot\n" +
         "   systemctl disable servicio   → no inicia al boot\n" +
         "   systemctl is-active servicio → verifica si está activo"
},

{
    unit: "Linux - Systemd y Servicios",
    diff: "expert",
    q: "¿Dónde se definen los servicios de systemd?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Unit files.</p></h6>
</div>
</div>`,
    opts: [
        "/etc/systemd/system/ y /usr/lib/systemd/system/",
        "/etc/init.d/",
        "/etc/rc.d/",
        "/var/lib/systemd/"
    ],
    ans: 0,
    exp: "✅ Los archivos .service están en:\n\n" +
         "📌 Ubicaciones:\n" +
         "   /usr/lib/systemd/system/ → servicios del sistema (no modificar)\n" +
         "   /etc/systemd/system/     → servicios personalizados (modificar aquí)\n" +
         "   /run/systemd/system/     → servicios en tiempo de ejecución\n\n" +
         "📌 Crear un servicio personalizado:\n" +
         "   sudo nano /etc/systemd/system/mi-servicio.service\n\n" +
         "📌 Recargar después de crear/modificar:\n" +
         "   sudo systemctl daemon-reload"
},

{
    unit: "Linux - Redes",
    diff: "expert",
    q: "¿Qué comando muestra las interfaces de red y sus IPs?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
</h6><p>💡 Pista: Nuevo comando reemplaza a ifconfig.</p></h6>
</div>
</div>`,
    opts: [
        "ip addr",
        "ifconfig",
        "netstat -i",
        "route -n"
    ],
    ans: 0,
    exp: "✅ 'ip addr' (o 'ip a') muestra interfaces y direcciones IP.\n\n" +
         "📌 Comandos de red modernos (iproute2):\n" +
         "   ip addr show      → interfaces y IPs\n" +
         "   ip link set eth0 up/down → activar/desactivar interfaz\n" +
         "   ip route show     → tabla de routing\n" +
         "   ip neigh show     → tabla ARP\n\n" +
         "📌 Comandos antiguos (deprecados):\n" +
         "   ifconfig, route, arp\n\n" +
         "💡 En algunas distribuciones mínimas, instalar con: sudo apt install iproute2"
},

{
    unit: "Linux - Redes",
    diff: "expert",
    q: "¿Qué comando prueba conectividad con un host remoto?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Envía paquetes ICMP.</p></h6>
</div>
</div>`,
    opts: ["ping", "traceroute", "nmap", "telnet"],
    ans: 0,
    exp: "✅ 'ping' prueba conectividad básica con ICMP echo request.\n\n" +
         "📌 Ejemplos:\n" +
         "   ping google.com        → ping continuo (Ctrl+C para parar)\n" +
         "   ping -c 4 google.com   → solo 4 paquetes\n" +
         "   ping -i 2 google.com   → intervalo de 2 segundos\n" +
         "   ping -s 1400 google.com → tamaño de paquete 1400 bytes\n\n" +
         "📌 Herramientas relacionadas:\n" +
         "   traceroute google.com   → ruta de los paquetes\n" +
         "   mtr google.com          → ping + traceroute en tiempo real\n" +
         "   telnet host puerto      → probar puerto TCP"
},

{
    unit: "Linux - Redes",
    diff: "expert",
    q: "¿Qué comando muestra los puertos en escucha y conexiones activas?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Network statistics.</p>
<p>📊 Opción -tulpn muestra puertos TCP/UDP con PID.</p></h6>
</div>
</div>`,
    opts: ["ss", "netstat", "lsof -i", "todas las anteriores"],
    ans: 3,
    exp: "✅ ss, netstat y lsof -i muestran información de puertos.\n\n" +
         "📌 Comando ss (moderno, más rápido):\n" +
         "   ss -tulpn   → TCP/UDP escuchando, mostrar PIDs\n\n" +
         "📌 Comando netstat (tradicional):\n" +
         "   netstat -tulpn   → igual\n\n" +
         "📌 lsof (list open files):\n" +
         "   lsof -i :80      → qué proceso usa el puerto 80\n" +
         "   lsof -i tcp      → todas las conexiones TCP\n\n" +
         "💡 'ss' es el reemplazo moderno de 'netstat'"
},

{
    unit: "Linux - Administración del Sistema",
    diff: "expert",
    q: "¿Qué comando muestra el uso de disco en el sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Disk Free.</p></h6>
</div>
</div>`,
    opts: ["df", "du", "fdisk", "lsblk"],
    ans: 0,
    exp: "✅ 'df' (Disk Free) muestra espacio usado/libre en particiones.\n\n" +
         "📌 Opciones útiles:\n" +
         "   df -h          → tamaños legibles (G, M, K)\n" +
         "   df -i          → uso de inodos\n" +
         "   df -T          → tipo de sistema de archivos\n" +
         "   df /home       → solo esa partición\n\n" +
         "📌 Comandos relacionados:\n" +
         "   du -sh *       → tamaño de cada archivo/directorio (Disk Usage)\n" +
         "   lsblk          → lista dispositivos de bloque\n" +
         "   fdisk -l       → tabla de particiones (requiere sudo)"
},

{
    unit: "Linux - Administración del Sistema",
    diff: "expert",
    q: "¿Qué comando muestra el consumo de memoria RAM y swap?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Free memory.</p></h6>
</div>
</div>`,
    opts: ["free", "vmstat", "top", "htop"],
    ans: 0,
    exp: "✅ 'free' muestra memoria RAM y swap.\n\n" +
         "📌 Opciones:\n" +
         "   free -h        → legible (GB, MB)\n" +
         "   free -s 2      → actualiza cada 2 segundos\n" +
         "   free -t        → muestra totales\n\n" +
         "📌 Salida típica:\n" +
         "               total   used   free   shared  buff/cache   available\n" +
         "   Mem:       15934   3242   8765     245       3926       11894\n" +
         "   Swap:       2048      0   2048\n\n" +
         "💡 'available' es la memoria real disponible (incluye caché que puede liberarse)"
},

{
    unit: "Linux - Permisos Avanzados",
    diff: "expert",
    q: "¿Qué comando permite permisos más granulares que los estándar (usuario/grupo/otros)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Access Control Lists.</p></h6>
</div>
</div>`,
    opts: ["setfacl", "chmod", "chattr", "setcap"],
    ans: 0,
    exp: "✅ 'setfacl' (Set File ACL) permite permisos por usuario/grupo específico.\n\n" +
         "📌 Comandos ACL:\n" +
         "   setfacl -m u:juan:rwx archivo   → da permisos a usuario juan\n" +
         "   setfacl -m g:developers:r archivo → al grupo developers\n" +
         "   setfacl -x u:juan archivo       → remueve ACL\n" +
         "   getfacl archivo                 → ver ACLs\n\n" +
         "📌 Ejemplo: dar solo lectura a un usuario específico sin cambiar dueño:\n" +
         "   setfacl -m u:invitado:r archivo.conf"
},

{
    unit: "Linux - Procesos Avanzados",
    diff: "expert",
    q: "¿Qué comando ejecuta un proceso con prioridad modificada?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6><p>💡 Pista: Cambia la 'niceness'.</p>
<p>Rango: -20 (más prioridad) a 19 (menos prioridad).</p></h6>
</div>
</div>`,
    opts: ["nice", "renice", "chrt", "taskset"],
    ans: 0,
    exp: "✅ 'nice' ejecuta un comando con prioridad modificada.\n\n" +
         "📌 Ejemplos:\n" +
         "   nice -n 10 comando    → prioridad baja (10)\n" +
         "   nice -n -5 comando    → prioridad alta (-5, requiere sudo)\n" +
         "   renice -n 15 -p 1234  → cambia prioridad de proceso en ejecución\n\n" +
         "📌 Comandos relacionados:\n" +
         "   chrt -f 50 comando    → prioridad en tiempo real (SCHED_FIFO)\n" +
         "   taskset -c 0,1 comando → fija a CPUs específicas\n\n" +
         "💡 Prioridad más baja (19) = proceso 'nice' con otros"
},

{
    unit: "Linux - Logs y Monitoreo",
    diff: "expert",
    q: "¿Qué comando muestra logs en tiempo real de systemd?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#00ff00;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#fff;"> </span>
</div>
<div class="work-area">
<h6>💡 Pista: Journal Control.</h6>
</div>
</div>`,
    opts: ["journalctl", "dmesg", "tail -f /var/log/syslog", "logwatch"],
    ans: 0,
    exp: "✅ 'journalctl' consulta logs del systemd journal.\n\n" +
         "📌 Ejemplos:\n" +
         "   journalctl -f              → sigue logs en tiempo real\n" +
         "   journalctl -u nginx        → logs de un servicio específico\n" +
         "   journalctl --since today   → logs desde hoy\n" +
         "   journalctl -p err          → solo errores\n" +
         "   journalctl -k              → logs del kernel\n" +
         "   journalctl -n 50           → últimas 50 líneas\n\n" +
         "📌 Logs tradicionales (sin systemd):\n" +
         "   /var/log/syslog (Debian) o /var/log/messages (RedHat)\n" +
         "   dmesg → logs del kernel"
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra la versión del kernel de Linux?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Unix name, opción -r</h6>
<h6 style="margin:8px 0;color:#555;">Rango: comandos de información del sistema</h6>
</div>`,
    opts: ["uname -r", "uname -a", "version", "cat /proc/version"],
    ans: 0,
    exp: "uname -r muestra solo la versión del kernel. uname -a muestra toda la información del sistema."
},


{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el manual de otro comando?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> ls</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Manual pages</h6>
<h6 style="margin:8px 0;color:#555;">Rango: documentación integrada</h6>
</div>`,
    opts: ["man", "help", "info", "doc"],
    ans: 0,
    exp: "man comando muestra el manual. Ejemplo: man ls. help es para comandos internos del shell. info es más detallado."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el historial de comandos ejecutados?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6style="margin:8px 0;color:#555;">Pista: Recuerda lo que escribiste antes</h6>
<h6 style="margin:8px 0;color:#555;">Rango: comandos de usuario</h6>
</div>`,
    opts: ["history", "hist", "cat ~/.bash_history", "fc -l"],
    ans: 0,
    exp: "history muestra la lista de comandos previos. También se puede usar fc -l o ver directamente cat ~/.bash_history."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando crea un archivo vacío o actualiza su fecha de modificación?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> nuevo.txt</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Tocar un archivo</h6>
<h6 style="margin:8px 0;color:#555;">Rango: creación de archivos</h6>
</div>`,
    opts: ["touch", "echo >", "cat >", "create"],
    ans: 0,
    exp: "touch archivo crea archivo vacío si no existe, o actualiza timestamp si existe. echo > también crea pero con contenido."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra la ruta completa del ejecutable de un comando?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> ls</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Which command?</h6>
<h6 style="margin:8px 0;color:#555;">Rango: localización de binarios</h6>
</div>`,
    opts: ["which", "whereis", "find", "type"],
    ans: 0,
    exp: "which muestra la ruta del ejecutable. whereis muestra más ubicaciones (bin, source, man). type es para comandos del shell."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando cuenta líneas, palabras y caracteres de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> -l archivo.txt</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Word count</h6>
<h6 style="margin:8px 0;color:#555;">Rango: procesamiento de texto</h6>
</div>`,
    opts: ["wc", "count", "stat", "nl"],
    ans: 0,
    exp: "wc cuenta líneas (-l), palabras (-w), caracteres (-c). nl numera líneas pero no cuenta."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra el contenido de un archivo paginado (con scroll)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> archivo.log</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Less is more</h6>
<h6 style="margin:8px 0;color:#555;">Rango: visualización de archivos grandes</h6>
</div>`,
    opts: ["less", "more", "view", "pager"],
    ans: 0,
    exp: "less permite navegar (flechas, /buscar, q para salir). more es anterior pero menos funcional."
},


{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "Empareja cada comando con su función",
    extra: `
<div class="extra-content">
<table style="width:100%;border-collapse:collapse;margin-bottom:1rem;">
<thead><tr style="background:#333;color:#fff;"><th style="padding:8px;">Comando</th><th style="padding:8px;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #ddd;">echo</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="Escribe A, B o C"></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;">date</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="Escribe A, B o C"></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;">cal</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="Escribe A, B o C"></td></tr>
</tbody>
</table>
<div style="background:#f5f5f5;padding:0.8rem;border-radius:8px;">
<p style="margin:4px 0;">A: Muestra calendario</p>
<p style="margin:4px 0;">B: Muestra fecha y hora</p>
<p style="margin:4px 0;">C: Imprime texto en pantalla</p>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Son comandos de salida básica</h6>
</div>`,
    opts: ["echo=C, date=B, cal=A", "echo=B, date=C, cal=A", "echo=C, date=A, cal=B", "echo=A, date=B, cal=C"],
    ans: 0,
    exp: "echo imprime texto, date muestra fecha/hora, cal muestra calendario."
},

{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando muestra la diferencia entre dos archivos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> archivo1.txt archivo2.txt</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Difference</h6>
<h6 style="margin:8px 0;color:#555;">Rango: comparación de archivos</h6>
</div>`,
    opts: ["diff", "cmp", "comm", "compare"],
    ans: 0,
    exp: "diff muestra diferencias línea a línea. cmp muestra primera diferencia byte a byte. comm compara archivos ordenados."
},



{
    unit: "Linux - Comandos Básicos",
    diff: "easy",
    q: "¿Qué comando busca archivos por nombre en el sistema?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> / -name \"*.txt\"</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Find files</h6>
<h6 style="margin:8px 0;color:#555;">Rango: búsqueda de archivos</h6>
</div>`,
    opts: ["find", "locate", "grep", "search"],
    ans: 0,
    exp: "find busca en tiempo real. locate busca en base de datos (más rápido pero puede estar desactualizada)."
},

{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando permite ejecutar comandos como superusuario?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> apt update</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Super User DO</h6>
<h6 style="margin:8px 0;color:#555;">Rango: administración del sistema</h6>
</div>`,
    opts: ["sudo", "su", "root", "admin"],
    ans: 0,
    exp: "sudo ejecuta un comando como root (si el usuario está en sudoers). su cambia al usuario root completamente."
},

{
    unit: "Linux - Permisos y Usuarios",
    diff: "medium",
    q: "¿Qué comando cambia el grupo propietario de un archivo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> developers archivo.txt</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Change group</h6>
<h6 style="margin:8px 0;color:#555;">Rango: gestión de grupos</h6>
</div>`,
    opts: ["chgrp", "chown", "chmod", "groupmod"],
    ans: 0,
    exp: "chgrp grupo archivo cambia el grupo. chown usuario:grupo archivo cambia ambos."
},

{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando muestra el árbol de procesos con sus PIDs?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Process tree</h6>
<h6 style="margin:8px 0;color:#555;">Rango: jerarquía de procesos</h6>
</div>`,
    opts: ["pstree", "ps -ef --forest", "tree -p", "htop"],
    ans: 0,
    exp: "pstree muestra árbol. pstree -p incluye PIDs. ps -ef --forest también muestra jerarquía."
},

{
    unit: "Linux - Procesos",
    diff: "medium",
    q: "¿Qué comando mata todos los procesos con un nombre específico?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> firefox</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Kill all by name</h6>
<h6 style="margin:8px 0;color:#555;">Rango: terminación de procesos</h6>
</div>`,
    opts: ["killall", "pkill", "kill -9", "kill -15"],
    ans: 0,
    exp: "killall mata todos los procesos con ese nombre. pkill mata por patrón (ej: pkill -f 'python script.py')."
},


{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando extrae columnas de texto delimitado?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> -d: -f1 /etc/passwd</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Cut columns</h6>
<h6 style="margin:8px 0;color:#555;">Rango: procesamiento de texto</h6>
</div>`,
    opts: ["cut", "awk", "sed", "colrm"],
    ans: 0,
    exp: "cut extrae columnas. cut -d: -f1 /etc/passwd muestra solo usuarios. awk '{print $1}' también funciona pero más potente."
},


{
    unit: "Linux - Filtros y Procesamiento",
    diff: "medium",
    q: "¿Qué comando transforma texto (mayúsculas, minúsculas, etc.)?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> 'a-z' 'A-Z' archivo.txt</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Translate characters</h6>
<h6 style="margin:8px 0;color:#555;">Rango: transformación de texto</h6>
</div>`,
    opts: ["tr", "sed", "awk", "perl"],
    ans: 0,
    exp: "tr traduce o elimina caracteres. Ejemplo: tr 'a-z' 'A-Z' mayusculas. echo 'hola' | tr 'a-z' 'A-Z' = HOLA."
},


{
    unit: "Linux - Redirección y Pipes",
    diff: "medium",
    q: "Completa la tabla de redirecciones",
    extra: `
<div class="extra-content">
<table style="width:100%;border-collapse:collapse;margin-bottom:1rem;">
<thead><tr style="background:#333;color:#fff;"><th style="padding:8px;">Operador</th><th style="padding:8px;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #ddd;">&gt;</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="¿Qué hace?"></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;">&gt;&gt;</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="¿Qué hace?"></td></tr>
<tr><td style="padding:8px;border:1px solid #ddd;">2&gt;</td><td style="padding:8px;border:1px solid #ddd;"><input style="width:95%;" placeholder="¿Qué hace?"></td></tr>
</tbody>
</table>
<h6 style="margin:8px 0;color:#555;">Pista: Redirige salida estándar y errores</h6>
<h6 style="margin:8px 0;color:#555;">Rango: redirección de flujos</h6>
</div>`,
    opts: [
        "> = stdout (sobrescribe), >> = stdout (añade), 2> = stderr",
        "> = stdout (añade), >> = stdout (sobrescribe), 2> = stderr",
        "> = stderr, >> = stdout, 2> = stdout y stderr",
        "> = redirige todo, >> = pipe, 2> = stdin"
    ],
    ans: 0,
    exp: "> redirige stdout sobrescribiendo. >> redirige stdout añadiendo. 2> redirige stderr. &> redirige ambos."
},


{
    unit: "Linux - Redirección y Pipes",
    diff: "medium",
    q: "¿Qué operador envía la salida de un comando como entrada de otro?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> grep error</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Tubería</h6>
<h6 style="margin:8px 0;color:#555;">Rango: comunicación entre procesos</h6>
</div>`,
    opts: ["|", ">", "<", "&"],
    ans: 0,
    exp: "El pipe (|) conecta stdout de un comando con stdin del siguiente. Ejemplo: ls -la | grep .txt | wc -l"
},


{
    unit: "Linux - Variables de Entorno",
    diff: "medium",
    q: "¿Qué comando muestra todas las variables de entorno?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Environment</h6>
<h6 style="margin:8px 0;color:#555;">Rango: entorno del shell</h6>
</div>`,
    opts: ["env", "printenv", "set", "export"],
    ans: 0,
    exp: "env y printenv muestran variables de entorno. set muestra también variables locales y funciones."
},

{
    unit: "Linux - Variables de Entorno",
    diff: "medium",
    q: "¿Qué comando define una variable de entorno para procesos hijos?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> MI_VAR='valor'</span>
</div>
<h6 style="margin:8px 0;color:#555;">Pista: Exportar variable</h6>
<h6 style="margin:8px 0;color:#555;">Rango: herencia de variables</h6>
</div>`,
    opts: ["export", "declare -x", "set -a", "env"],
    ans: 0,
    exp: "export MI_VAR=valor hace que la variable esté disponible en procesos hijo. Sin export, es solo local."
},


{
    unit: "Linux - Scripting Avanzado",
    diff: "expert",
    q: "Completa el script que procesa argumentos con getopts:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
#!/bin/bash
while getopts "f:n:h" opt; do
    case $opt in
        f) archivo="_______" ;;
        n) numero="_______" ;;
        h) echo "Uso: script -f archivo -n numero"; exit 0 ;;
        ?) echo "Opción inválida"; exit 1 ;;
    esac
done
echo "Archivo: $archivo, Número: $numero"
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: getopts asigna la opción a una variable, el argumento a otra</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: procesamiento de argumentos en scripts</h6>
</div>`,
    opts: ["$OPTARG", "$opt", "$1", "$2"],
    ans: 0,
    exp: "getopts almacena el argumento de la opción en la variable OPTARG. En el caso, -f archivo → $OPTARG='archivo'."
},


{
    unit: "Linux - Scripting Avanzado",
    diff: "expert",
    q: "¿Qué hace este script? `#!/bin/bash; exec 3<> /dev/tcp/192.168.1.1/80; echo -e 'GET / HTTP/1.1\\nHost: test\\n\\n' >&3; cat <&3`",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Redirección con /dev/tcp</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: bash network redirections</h6>
</div>`,
    opts: [
        "Abre conexión TCP al puerto 80, envía petición HTTP y muestra respuesta",
        "Escanea puertos del 1 al 80",
        "Crea un socket de escucha en puerto 80",
        "Hace ping a 192.168.1.1"
    ],
    ans: 0,
    exp: "exec 3<> /dev/tcp/host/puerto abre descriptor 3 para lectura/escritura. Luego envía HTTP request y lee respuesta."
},

{
    unit: "Linux - Scripting Avanzado",
    diff: "expert",
    q: "Completa el trap para limpiar archivos temporales al salir:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
#!/bin/bash
tempfile=$(mktemp)
trap "_______" EXIT
# ... script ...
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Trap ejecuta comandos al recibir señales</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: manejo de señales y limpieza</h6>
</div>`,
    opts: ["rm -f $tempfile", "echo 'Saliendo'", "exit 1", "trap - EXIT"],
    ans: 0,
    exp: "trap 'rm -f $tempfile' EXIT asegura que el archivo temporal se borre cuando el script termine (normal o por señal)."
},


{
    unit: "Linux - awk Avanzado",
    diff: "expert",
    q: "Completa el comando awk para sumar la columna 3 de un archivo CSV:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> -F',' '{_______} END {print total}' datos.csv</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: awk acumula en variable</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: procesamiento de columnas</h6>
</div>`,
    opts: ["total += $3", "sum $3", "total = total + $col3", "acumular($3)"],
    ans: 0,
    exp: "total += $3 acumula el valor de la tercera columna. Al final, END imprime el total."
},


{
    unit: "Linux - sed Avanzado",
    diff: "expert",
    q: "¿Qué comando sed elimina líneas vacías y las que solo contienen espacios?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> '/^[[:space:]]*$/d' archivo.txt</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: d elimina líneas que coinciden con patrón</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: expresiones regulares en sed</h6>
</div>`,
    opts: ["sed", "awk", "grep", "ed"],
    ans: 0,
    exp: "sed -E '/^[[:space:]]*$/d' elimina líneas vacías o con solo espacios/tabs."
},


{
    unit: "Linux - sed Avanzado",
    diff: "expert",
    q: "Completa el comando sed para intercambiar la primera y última palabra de cada línea:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> 's/^\\([^ ]*\\) \\(.*\\) \\([^ ]*\\)$/_______/' archivo.txt</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Usar backreferences \\1 \\2 \\3</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: grupos de captura en sed</h6>
</div>`,
    opts: ["\\\\3 \\\\2 \\\\1", "\\\\1 \\\\2 \\\\3", "\\\\3 \\\\1 \\\\2", "\\\\1 \\\\3 \\\\2"],
    ans: 0,
    exp: "\\\\3 es la última palabra, \\\\1 la primera, \\\\2 el medio. Así se intercambian primera y última."
},

{
    unit: "Linux - awk Avanzado",
    diff: "expert",
    q: "Completa el comando awk para extraer IPs únicas de un log de acceso, excluyendo localhost:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> '_______ && !/127\\.0\\.0\\.1/ {print $1}' access.log | sort -u</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Filtra líneas que contengan patrón de IP</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: expresiones regulares en awk</h6>
</div>`,
    opts: ["/[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+/", "/^[0-9]/", "/ip/", "NR>1"],
    ans: 0,
    exp: "La expresión /[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+/ detecta direcciones IPv4. Luego se excluye localhost y se imprimen únicas."
},

{
    unit: "Linux - awk Avanzado",
    diff: "expert",
    q: "Completa el comando awk para calcular el promedio de la columna 5, excluyendo ceros:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> '$5 > 0 {sum+=_______; count++} END {print sum/count}' datos.txt</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Campo 5</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: cálculos aritméticos en awk</h6>
</div>`,
    opts: ["$5", "5", "col5", "campo5"],
    ans: 0,
    exp: "Se acumula el valor del campo 5 (con $5) solo cuando es positivo, luego se divide entre el contador."
},




//Systemd y Servicios


{
    unit: "Linux - systemd Avanzado",
    diff: "expert",
    q: "Completa el archivo .service para que el servicio se reinicie siempre automáticamente:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<pre style="background:#1e1e1e;color:#ffffff;padding:1rem;border-radius:8px;font-family:monospace;font-size:13px;">
[Unit]
Description=Mi servicio

[Service]
ExecStart=/usr/bin/mi-app
Restart=_______
RestartSec=10

[Install]
WantedBy=multi-user.target
</pre>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Valores para Restart: no, on-failure, always, on-abnormal</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: configuración de systemd</h6>
</div>`,
    opts: ["always", "on-failure", "on-abnormal", "no"],
    ans: 0,
    exp: "Restart=always reinicia siempre, incluso si el servicio termina con código 0. on-failure solo si falla."
},

{
    unit: "Linux - systemd Avanzado",
    diff: "expert",
    q: "¿Qué comando permite ver logs de un servicio desde el boot actual?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> -u nginx -b</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Journal desde boot actual</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: consulta de logs con journalctl</h6>
</div>`,
    opts: ["journalctl", "systemctl logs", "loginctl", "systemd-journal"],
    ans: 0,
    exp: "journalctl -u servicio -b muestra logs desde el último boot. journalctl -u servicio -b -1 muestra del boot anterior."
},

// Redes y Troubleshooting


{
    unit: "Linux - Redes Avanzado",
    diff: "expert",
    q: "¿Qué comando muestra las conexiones TCP establecidas con sus PIDs?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Socket statistics, estado established</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: monitoreo de conexiones de red</h6>
</div>`,
    opts: ["ss -t state established -p", "netstat -an | grep EST", "lsof -i tcp", "nmap localhost"],
    ans: 0,
    exp: "ss -t state established -p muestra conexiones TCP establecidas y los PIDs de los procesos. ss es más rápido que netstat."
},


{
    unit: "Linux - Troubleshooting",
    diff: "expert",
    q: "Un proceso no responde y no se puede matar con kill -9. ¿Qué comando permite depurar qué está haciendo?",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> -p 1234</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Trace system calls</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: depuración de procesos</h6>
</div>`,
    opts: ["strace", "gdb", "ltrace", "perf"],
    ans: 0,
    exp: "strace -p PID muestra las llamadas al sistema que hace el proceso. Si está bloqueado en una syscall, se ve cuál."
},

//NIVEL EXPERTO - sed Transformaciones Complejas

{
    unit: "Linux - sed Avanzado",
    diff: "expert",
    q: "Completa el comando sed para convertir fechas de DD/MM/YYYY a YYYY-MM-DD:",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> 's_\\([0-9][0-9]\\)/\\([0-9][0-9]\\)/\\([0-9][0-9][0-9][0-9]\\)________\_' fechas.txt</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: Reordenar grupos capturados</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: transformación de formatos de fecha</h6>
</div>`,
    opts: ["\\\\3-\\\\2-\\\\1", "\\\\1-\\\\2-\\\\3", "\\\\3-\\\\1-\\\\2", "\\\\2-\\\\1-\\\\3"],
    ans: 0,
    exp: "\\\\3 es el año, \\\\2 el mes, \\\\1 el día. Así se reordena a YYYY-MM-DD."
},

{
    unit: "Linux - sed Avanzado",
    diff: "expert",
    q: "Completa el comando sed para eliminar líneas entre dos marcadores (incluyéndolos):",
    extra: `
<div class="extra-content">
<div class="console-box" style="background:#1e1e1e;color:#ffffff;font-family:monospace;padding:1rem;border-radius:8px;margin-bottom:1rem;">
<span style="color:#888;">usuario@linux:~$</span> <span contenteditable="true" style="outline:none;color:#ffffff;"> </span><span style="color:#aaa;"> '/INICIO/,/FIN/_______' archivo.txt</span>
</div>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Pista: d elimina, pero en rangos</h6>
<h6 style="margin:4px 0;color:#888;font-size:0.75rem;">Rango: rangos en sed</h6>
</div>`,
    opts: ["d", "p", "c", "s/.*//"],
    ans: 0,
    exp: "sed '/INICIO/,/FIN/d' elimina desde la línea que contiene INICIO hasta la que contiene FIN."
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
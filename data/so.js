// ══════════════════════════════════════════
// PLACEHOLDER: Sistemas Operativos / Subnetting IPv4
// (agrega las preguntas aquí cuando tengas el material)
// ══════════════════════════════════════════
window.BANK = window.BANK || {};
BANK.so = [


    // ==================== SUBNETTING BÁSICO ====================

    // POSIBLE PRUEBA
    {
    profe: true,
    unit: "Networking - Organismos",
    diff: "easy",
    q: "¿Qué institución desarrolla los estándares que permiten la interoperabilidad de la Web, como el lenguaje HTML y protocolos relacionados?",
    opts: [
        "IANA",
        "IEEE",
        "W3C",
        "ISO"
    ],
    ans: 2,
    exp: "W3C (World Wide Web Consortium) es el organismo fundado por Tim Berners-Lee encargado de desarrollar estándares abiertos para la Web: HTML, CSS, XML y protocolos relacionados.\n" +
         "IANA gestiona la asignación de recursos de Internet (IPs, números de puerto).\n" +
         "IEEE desarrolla estándares de hardware y redes físicas (como Ethernet 802.3 o Wi-Fi 802.11).\n" +
         "ISO es un organismo de normalización industrial general, no específico de la Web."
},
{
    profe: true,
    unit: "IPv6",
    diff: "easy",
    q: "Una dirección IPv6, a diferencia de IPv4, se caracteriza por tener una longitud de:",
    opts: [
        "64 bits",
        "128 bits",
        "48 bits",
        "256 bits"
    ],
    ans: 1,
    exp: "IPv6 utiliza direcciones de 128 bits, representadas en 8 grupos de 16 bits (hextetos) separados por ':'. Ejemplo: 2001:0DB8:0000:0000:0000:0000:0000:0001.\n" +
         "IPv4 usa solo 32 bits (4 octetos en decimal punteado), lo que limita el espacio a ~4.300 millones de direcciones.\n" +
         "El salto a 128 bits en IPv6 permite aproximadamente 3,4 × 10^38 direcciones únicas, resolviendo el agotamiento de IPv4."
},

{
    profe: true,
    unit: "IPv4 - Clases",
    diff: "easy",
    q: "Si una dirección IP comienza con el octeto 10 (ej. 10.50.1.1), ¿cuál es su clasificación por defecto y tipo de uso?",
    opts: [
        "Clase A - Pública",
        "Clase C - Privada",
        "Clase A - Privada",
        "Clase B - Reservada"
    ],
    ans: 2,
    exp: "La dirección 10.0.0.0/8 pertenece a Clase A porque su primer octeto está entre 1 y 126. Es de uso PRIVADO según el RFC 1918, que define tres rangos privados:\n" +
         "  - 10.0.0.0 /8       → Clase A Privada\n" +
         "  - 172.16.0.0 /12    → Clase B Privada\n" +
         "  - 192.168.0.0 /16   → Clase C Privada\n" +
         "Las IPs privadas no son enrutables en Internet y se usan exclusivamente en redes internas (LAN)."
},

{
    profe: true,
    unit: "Subnetting - AND lógico",
    diff: "medium",
    q: "El proceso de 'AND lógico' entre una dirección IP y su máscara de subred da como resultado:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Dirección IP</td>
    <td><input placeholder="ej: 11000000"></td>
    <td><input placeholder="ej: 10101000"></td>
    <td><input placeholder="ej: 00000001"></td>
    <td><input placeholder="ej: 00101101"></td>
  </tr>
  <tr>
    <td>Máscara</td>
    <td><input placeholder="ej: 11111111"></td>
    <td><input placeholder="ej: 11111111"></td>
    <td><input placeholder="ej: 11111111"></td>
    <td><input placeholder="ej: 00000000"></td>
  </tr>
  <tr>
    <td>AND (resultado)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Dirección de Red</td>
    <td colspan="4"><input style="width:100%" placeholder="resultado en decimal punteado"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "La dirección de Gateway",
        "La dirección de Broadcast",
        "La primera IP utilizable",
        "La dirección de Red"
    ],
    ans: 3,
    exp: "El AND lógico bit a bit entre la IP y su máscara entrega la DIRECCIÓN DE RED.\n" +
         "Regla del AND: 1 AND 1 = 1 | 1 AND 0 = 0 | 0 AND 0 = 0\n" +
         "Ejemplo con 192.168.1.45 y máscara 255.255.255.0:\n" +
         "  192.168.1.45  → 11000000.10101000.00000001.00101101\n" +
         "  255.255.255.0 → 11111111.11111111.11111111.00000000\n" +
         "  AND resultado → 11000000.10101000.00000001.00000000 = 192.168.1.0\n" +
         "El Gateway se define manualmente. El Broadcast se obtiene poniendo todos los bits de host en 1."
},

{
    profe: true,
    unit: "Subnetting",
    diff: "medium",
    q: "En una red con máscara /26, ¿cuántos hosts reales (utilizables) se pueden conectar?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Prefijo</th>
    <th>Bits de host</th>
    <th>Total IPs (2^n)</th>
    <th>Hosts utilizables (2^n - 2)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>/25</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>/26</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>/27</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>/28</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "64",
        "62",
        "30",
        "126"
    ],
    ans: 1,
    exp: "Con prefijo /26 quedan 6 bits para hosts (32 - 26 = 6).\n" +
         "Total IPs = 2^6 = 64\n" +
         "Hosts utilizables = 64 - 2 = 62  (se restan dirección de red y broadcast)\n" +
         "Tabla comparativa:\n" +
         "  /25 → 7 bits → 128 IPs → 126 hosts\n" +
         "  /26 → 6 bits →  64 IPs →  62 hosts ✓\n" +
         "  /27 → 5 bits →  32 IPs →  30 hosts\n" +
         "  /28 → 4 bits →  16 IPs →  14 hosts"
},

{
    profe: true,
    unit: "Comandos de Red",
    diff: "easy",
    q: "¿Qué comando se utiliza en la terminal para verificar la conectividad básica y latencia enviando paquetes ICMP?",
    opts: [
        "nslookup",
        "netstat",
        "ping",
        "nmap"
    ],
    ans: 2,
    exp: "El comando PING envía paquetes ICMP Echo Request al destino y espera respuestas ICMP Echo Reply, midiendo tiempo de ida y vuelta (RTT/latencia) y detectando pérdida de paquetes.\n" +
         "nslookup → consulta resolución de nombres DNS (no conectividad).\n" +
         "netstat  → muestra conexiones de red activas, puertos y estadísticas (no prueba conectividad).\n" +
         "nmap     → escáner de puertos y servicios en hosts remotos (no es herramienta de conectividad básica)."
},

{
    profe: true,
    unit: "CIDR - VLSM",
    diff: "medium",
    q: "La principal ventaja de usar el esquema CIDR/VLSM frente al direccionamiento con clases (Classful) es:",
    opts: [
        "Que las redes son más veloces",
        "La eliminación de colisiones en la capa 2",
        "El aprovechamiento eficiente del direccionamiento para evitar el desperdicio de IPs",
        "Que no requiere el uso de routers para interconexión"
    ],
    ans: 2,
    exp: "CIDR (Classless Inter-Domain Routing) y VLSM (Variable Length Subnet Mask) permiten dividir el espacio de direcciones con máscaras de longitud variable, asignando exactamente el tamaño de subred que cada segmento necesita.\n" +
         "En el modelo Classful, una red Clase B entregaba 65.534 hosts aunque solo se necesitaran 300, desperdiciando más de 65.000 IPs.\n" +
         "Con VLSM se asigna /26 para 62 hosts, /30 para enlaces punto a punto (2 hosts), etc., optimizando cada bloque.\n" +
         "La velocidad de red (op. A) depende del hardware/medio. Las colisiones de capa 2 (op. B) se evitan con switches, no con CIDR. Los routers (op. D) siguen siendo necesarios para interconectar subredes."
},

{
    profe: true,
    unit: "Linux - Configuración de Red",
    diff: "medium",
    q: "Para configurar una dirección IP estática en Debian 12 (sin entorno gráfico), el comando para editar el archivo de configuración es:",
    opts: [
        "nano /etc/network/interfaces",
        "nano /etc/dhcp/dhclient.conf",
        "nano /etc/sysconfig/network",
        "nano /etc/hostname"
    ],
    ans: 0,
    exp: "En Debian y sus derivados (Ubuntu, etc.), la configuración de interfaces de red estáticas se realiza editando el archivo /etc/network/interfaces.\n" +
         "Ejemplo de configuración estática dentro del archivo:\n" +
         "  auto eth0\n" +
         "  iface eth0 inet static\n" +
         "    address 192.168.1.10\n" +
         "    netmask 255.255.255.0\n" +
         "    gateway 192.168.1.1\n" +
         "/etc/dhcp/dhclient.conf → configuración del cliente DHCP, no de IP estática.\n" +
         "/etc/sysconfig/network → corresponde a distribuciones Red Hat/CentOS, no a Debian.\n" +
         "/etc/hostname → solo define el nombre del equipo, no la IP."
},

{
    profe: true,
    unit: "Linux - Comandos de Red",
    diff: "easy",
    q: "¿Qué comando de Linux permite visualizar las direcciones IP asignadas a todas las interfaces, incluyendo la dirección MAC?",
    opts: [
        "ip route show",
        "ip addr show",
        "systemctl status network",
        "hostname -I"
    ],
    ans: 1,
    exp: "El comando 'ip addr show' (abreviable como 'ip a') muestra todas las interfaces de red con sus IPs (IPv4 e IPv6) y dirección MAC (link/ether).\n" +
         "ip route show       → muestra la tabla de enrutamiento, no las IPs de interfaces.\n" +
         "systemctl status network → muestra el estado del servicio de red, no las IPs.\n" +
         "hostname -I         → muestra solo las IPs asignadas al host, sin MAC ni detalles de interfaz.\n" +
         "Nota: el comando clásico 'ifconfig' cumple función similar pero está obsoleto; 'ip addr show' es su reemplazo moderno."
},

{
    profe: true,
    unit: "Subnetting - Overlap",
    diff: "medium",
    q: "Cuando dos interfaces de red en el mismo router se configuran con rangos que se cruzan entre sí, el sistema arrojará un error de:",
    opts: [
        "Packet Loss",
        "Latency Error",
        "Overlap (Solapamiento)",
        "DNS Failure"
    ],
    ans: 2,
    exp: "El error de Overlap (Solapamiento) ocurre cuando dos interfaces del mismo router reciben rangos de red que comparten IPs.\n" +
         "Ejemplo de solapamiento:\n" +
         "  eth0: 192.168.1.0/24  (rango: 192.168.1.0 - 192.168.1.255)\n" +
         "  eth1: 192.168.1.128/25 (rango: 192.168.1.128 - 192.168.1.255)\n" +
         "Ambas interfaces 'reclaman' el rango .128-.255, generando ambigüedad en el enrutamiento.\n" +
         "El router no puede determinar por cuál interfaz enviar un paquete destinado a una IP del rango solapado, por lo que rechaza la configuración con error de overlap."
},

{
    profe: true,
    unit: "DNS",
    diff: "easy",
    q: "¿Cuál es el propósito del servicio DNS en una infraestructura de red?",
    opts: [
        "Asignar máscaras de subred dinámicamente",
        "Traducir nombres de dominio (como google.cl) en direcciones IP",
        "Filtrar el tráfico malicioso del firewall",
        "Conectar dos redes LAN distintas"
    ],
    ans: 1,
    exp: "DNS (Domain Name System) es el sistema de resolución de nombres de Internet. Actúa como una 'agenda telefónica' que traduce nombres legibles por humanos (como www.google.cl) en direcciones IP numéricas (como 142.250.78.68) que las máquinas pueden usar para enrutar tráfico.\n" +
         "Sin DNS, los usuarios deberían memorizar IPs para acceder a cada sitio web.\n" +
         "Asignar máscaras dinámicamente → función de DHCP (no DNS).\n" +
         "Filtrar tráfico malicioso → función de Firewall/IDS.\n" +
         "Conectar dos redes LAN → función de un Router."
},

{
    profe: true,
    unit: "Linux - Gestión de Paquetes",
    diff: "easy",
    q: "El comando 'apt-get update' en sistemas basados en Debian sirve para:",
    opts: [
        "Actualizar todos los programas instalados a su última versión",
        "Descargar e instalar el kernel de Linux",
        "Sincronizar el índice de paquetes desde los repositorios oficiales",
        "Reiniciar los servicios de red"
    ],
    ans: 2,
    exp: "El comando 'apt-get update' descarga la lista actualizada de paquetes disponibles desde los repositorios configurados en /etc/apt/sources.list, pero NO instala ni actualiza ningún programa.\n" +
         "Es el primer paso antes de instalar o actualizar software:\n" +
         "  1. apt-get update           → actualiza el índice de paquetes\n" +
         "  2. apt-get upgrade          → INSTALA las actualizaciones disponibles\n" +
         "  3. apt-get install <paquete> → instala un paquete nuevo\n" +
         "Confundir update con upgrade es un error común: update solo refresca la lista, upgrade aplica los cambios."
},

{
    profe: true,
    unit: "Modelo OSI",
    diff: "easy",
    q: "¿A qué capa del modelo OSI corresponde el direccionamiento MAC (Físico)?",
    opts: [
        "Capa 1 (Física)",
        "Capa 2 (Enlace de Datos)",
        "Capa 3 (Red)",
        "Capa 4 (Transporte)"
    ],
    ans: 1,
    exp: "La dirección MAC (Media Access Control) opera en la Capa 2 - Enlace de Datos del modelo OSI.\n" +
         "Resumen de capas relevantes:\n" +
         "  Capa 1 - Física       → bits, señales eléctricas, cables, voltajes\n" +
         "  Capa 2 - Enlace       → frames, dirección MAC, switches, ARP\n" +
         "  Capa 3 - Red          → paquetes, dirección IP, routers\n" +
         "  Capa 4 - Transporte   → segmentos, TCP/UDP, puertos\n" +
         "La MAC es una dirección grabada en la tarjeta de red (NIC), de 48 bits en hexadecimal (ej: AA:BB:CC:DD:EE:FF), usada para entrega local dentro de la misma red (LAN)."
},

{
    profe: true,
    unit: "Subnetting - Broadcast",
    diff: "medium",
    q: "En una subred 192.168.10.0/24, ¿cuál es la dirección de Broadcast?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Red (binario)</td>
    <td><input placeholder="11000000"></td>
    <td><input placeholder="10101000"></td>
    <td><input placeholder="00001010"></td>
    <td><input placeholder="00000000"></td>
  </tr>
  <tr>
    <td>Broadcast (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Broadcast (decimal)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Primera IP útil</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Última IP útil</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "192.168.10.1",
        "192.168.10.0",
        "192.168.10.255",
        "192.168.10.254"
    ],
    ans: 2,
    exp: "En /24 hay 8 bits de host. Broadcast = todos los bits de host en 1.\n" +
         "  Red:             192.168.10.00000000 → 192.168.10.0\n" +
         "  Broadcast:       192.168.10.11111111 → 192.168.10.255 ✓\n" +
         "  Primera IP útil: 192.168.10.1\n" +
         "  Última IP útil:  192.168.10.254\n" +
         "192.168.10.254 es la ÚLTIMA IP utilizable, no el broadcast. El broadcast es siempre un número antes del inicio de la siguiente red."
},

{
    profe: true,
    unit: "Linux - Servicios de Red",
    diff: "easy",
    q: "Para reiniciar el servicio de red en Debian y aplicar cambios de configuración, se utiliza:",
    opts: [
        "apt install networking",
        "ifconfig eth0 up",
        "systemctl restart networking",
        "reboot /all"
    ],
    ans: 2,
    exp: "En Debian con systemd, el comando correcto para reiniciar el servicio de red y aplicar cambios hechos en /etc/network/interfaces es:\n" +
         "  systemctl restart networking\n" +
         "Otros comandos útiles relacionados:\n" +
         "  systemctl stop networking    → detiene el servicio de red\n" +
         "  systemctl start networking   → inicia el servicio de red\n" +
         "  systemctl status networking  → verifica el estado actual\n" +
         "  ip link set eth0 down/up     → baja/sube una interfaz específica\n" +
         "'ifconfig eth0 up' solo levanta la interfaz pero no recarga la configuración completa del archivo interfaces.\n" +
         "'apt install networking' no es un comando válido.\n" +
         "'reboot /all' no existe en Linux (en Linux se usa 'reboot' sin parámetros)."
},

//PRUEBA 1 SECCION II VLSM

{
    profe: true,
    unit: "VLSM",
    diff: "hard",
    case: "PRUEBA 1-A — II. EJERCICIOS PRÁCTICOS DE VLSM\nDesarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
    q: "Desafío 1 — Sucursal INACAP Osorno.\n" +
       "Red Base: 192.168.100.0/24.\n" +
       "Requerimientos:\n" +
       "- Laboratorio de Computación: 50 hosts\n" +
       "- Red Wi-Fi Docentes: 25 hosts\n" +
       "- Oficina Director: 5 hosts\n" +
       "Calcula las subredes VLSM ordenadas de mayor a menor.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>#</th>
    <th>Segmento</th>
    <th>Hosts requeridos</th>
    <th>Bits de host</th>
    <th>Prefijo</th>
    <th>Máscara</th>
    <th>Dirección de Red</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Laboratorio</td>
    <td>50</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Wi-Fi Docentes</td>
    <td>25</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Oficina Director</td>
    <td>5</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Subred 1: 192.168.100.0/26 | Subred 2: 192.168.100.64/27 | Subred 3: 192.168.100.96/29",
        "Subred 1: 192.168.100.0/25 | Subred 2: 192.168.100.128/26 | Subred 3: 192.168.100.192/29",
        "Subred 1: 192.168.100.0/26 | Subred 2: 192.168.100.64/26 | Subred 3: 192.168.100.128/29",
        "Subred 1: 192.168.100.0/27 | Subred 2: 192.168.100.32/27 | Subred 3: 192.168.100.64/29"
    ],
    ans: 0,
    exp: "VLSM: se ordena de mayor a menor requerimiento y se asigna el bloque mínimo suficiente.\n\n" +
         "SUBRED 1 — Laboratorio (50 hosts):\n" +
         "  2^n - 2 ≥ 50 → 2^6 = 64 → 64-2 = 62 ✓ → prefijo /26\n" +
         "  Máscara: 255.255.255.192\n" +
         "  Red:        192.168.100.0\n" +
         "  Primera IP: 192.168.100.1\n" +
         "  Última IP:  192.168.100.62\n" +
         "  Broadcast:  192.168.100.63\n\n" +
         "SUBRED 2 — Wi-Fi Docentes (25 hosts):\n" +
         "  2^n - 2 ≥ 25 → 2^5 = 32 → 32-2 = 30 ✓ → prefijo /27\n" +
         "  Máscara: 255.255.255.224\n" +
         "  Red:        192.168.100.64\n" +
         "  Primera IP: 192.168.100.65\n" +
         "  Última IP:  192.168.100.94\n" +
         "  Broadcast:  192.168.100.95\n\n" +
         "SUBRED 3 — Oficina Director (5 hosts):\n" +
         "  2^n - 2 ≥ 5 → 2^3 = 8 → 8-2 = 6 ✓ → prefijo /29\n" +
         "  Máscara: 255.255.255.248\n" +
         "  Red:        192.168.100.96\n" +
         "  Primera IP: 192.168.100.97\n" +
         "  Última IP:  192.168.100.102\n" +
         "  Broadcast:  192.168.100.103"
},

{
    profe: true,
    unit: "VLSM",
    diff: "hard",
    case: "PRUEBA 1-A — II. EJERCICIOS PRÁCTICOS DE VLSM\nDesarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
    q: "Desafío 2 — Infraestructura Corporativa.\n" +
       "Red Base: 172.20.10.0/24.\n" +
       "Requerimientos:\n" +
       "- Departamento de Ventas: 60 hosts\n" +
       "- Departamento de RRHH: 20 hosts\n" +
       "- Enlace Punto a Punto Router A a Router B: 2 hosts\n" +
       "Calcula las subredes VLSM ordenadas de mayor a menor.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>#</th>
    <th>Segmento</th>
    <th>Hosts requeridos</th>
    <th>Bits de host</th>
    <th>Prefijo</th>
    <th>Máscara</th>
    <th>Dirección de Red</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Ventas</td>
    <td>60</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>2</td>
    <td>RRHH</td>
    <td>20</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Enlace P2P</td>
    <td>2</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Subred 1: 172.20.10.0/26 | Subred 2: 172.20.10.64/27 | Subred 3: 172.20.10.96/30",
        "Subred 1: 172.20.10.0/25 | Subred 2: 172.20.10.128/27 | Subred 3: 172.20.10.160/30",
        "Subred 1: 172.20.10.0/26 | Subred 2: 172.20.10.64/26 | Subred 3: 172.20.10.128/30",
        "Subred 1: 172.20.10.0/26 | Subred 2: 172.20.10.64/28 | Subred 3: 172.20.10.80/30"
    ],
    ans: 0,
    exp: "VLSM: se ordena de mayor a menor requerimiento.\n\n" +
         "SUBRED 1 — Ventas (60 hosts):\n" +
         "  2^n - 2 ≥ 60 → 2^6 = 64 → 64-2 = 62 ✓ → prefijo /26\n" +
         "  Máscara: 255.255.255.192\n" +
         "  Red:        172.20.10.0\n" +
         "  Primera IP: 172.20.10.1\n" +
         "  Última IP:  172.20.10.62\n" +
         "  Broadcast:  172.20.10.63\n\n" +
         "SUBRED 2 — RRHH (20 hosts):\n" +
         "  2^n - 2 ≥ 20 → 2^5 = 32 → 32-2 = 30 ✓ → prefijo /27\n" +
         "  Máscara: 255.255.255.224\n" +
         "  Red:        172.20.10.64\n" +
         "  Primera IP: 172.20.10.65\n" +
         "  Última IP:  172.20.10.94\n" +
         "  Broadcast:  172.20.10.95\n\n" +
         "SUBRED 3 — Enlace P2P (2 hosts):\n" +
         "  2^n - 2 ≥ 2 → 2^2 = 4 → 4-2 = 2 ✓ → prefijo /30\n" +
         "  Máscara: 255.255.255.252\n" +
         "  Red:        172.20.10.96\n" +
         "  Primera IP: 172.20.10.97\n" +
         "  Última IP:  172.20.10.98\n" +
         "  Broadcast:  172.20.10.99"
},

{
    profe: true,
    unit: "VLSM - Factibilidad",
    diff: "hard",
    case: "PRUEBA 1-A — II. EJERCICIOS PRÁCTICOS DE VLSM\nDesarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
    q: "Desafío 3 — Análisis de Factibilidad.\n" +
       "Red Base: 192.168.1.0/24.\n" +
       "Requerimientos:\n" +
       "- Área Producción: 130 hosts\n" +
       "- Área Contabilidad: 70 hosts\n" +
       "¿Es posible realizar este direccionamiento con la red base entregada? Justifique técnicamente su respuesta basándose en el cálculo de bits de host.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Hosts requeridos</th>
    <th>2^n necesario</th>
    <th>Total IPs del bloque</th>
    <th>Hosts utilizables</th>
    <th>Prefijo</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Producción</td>
    <td>130</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Contabilidad</td>
    <td>70</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Cálculo</th>
    <th>Resultado</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Total IPs consumidas (suma de bloques)</td>
    <td><input style="width:100%"></td>
    <td><input></td>
  </tr>
  <tr>
    <td>IPs disponibles en /24</td>
    <td><input style="width:100%"></td>
    <td><input></td>
  </tr>
  <tr>
    <td>¿Es factible?</td>
    <td colspan="2"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "No es posible. Los bloques suman 384 IPs y la red /24 solo tiene 256.",
        "Sí es posible usando /25 para Producción y /26 para Contabilidad.",
        "Sí es posible, sobran IPs en la red /24.",
        "No es posible, se necesita al menos una red /22."
    ],
    ans: 0,
    exp: "ANÁLISIS DE FACTIBILIDAD:\n\n" +
         "ÁREA 1 — Producción (130 hosts):\n" +
         "  2^n - 2 ≥ 130 → 2^8 = 256 → 256-2 = 254 ✓ → prefijo /24\n" +
         "  Bloque necesario: 256 IPs\n\n" +
         "ÁREA 2 — Contabilidad (70 hosts):\n" +
         "  2^n - 2 ≥ 70 → 2^7 = 128 → 128-2 = 126 ✓ → prefijo /25\n" +
         "  Bloque necesario: 128 IPs\n\n" +
         "TOTAL IPs necesarias: 256 + 128 = 384 IPs\n" +
         "Red base /24 dispone de: 256 IPs en total\n\n" +
         "CONCLUSIÓN: NO ES FACTIBLE.\n" +
         "La suma de ambos bloques (384 IPs) supera las 256 IPs disponibles en la red /24.\n" +
         "Para acomodar estos requerimientos se necesitaría como mínimo una red /23 (512 IPs disponibles) como red base."
},

 //GUIA 1 - ITEMI SELECCION MULTIPLE

        {
            profe: true,
            unit: "IPv6 - Hextetos",
            diff: "medium",
            q: "En la dirección IPv6 D46C::B:98:F:C:5, ¿cuál es el equivalente en decimal (binario en opciones) del tercer hexteto?",
            extra: `
    <div class="extra-content">
    <table class="subnet-table">
    <thead>
    <tr>
        <th>Pos.</th>
        <th>1°</th>
        <th>2°</th>
        <th>3°</th>
        <th>4°</th>
        <th>5°</th>
        <th>6°</th>
        <th>7°</th>
        <th>8°</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Hexteto</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
    </tr>
    </tbody>
    </table>
    </div>
        `,
        opts: [
            "000000000000001010",
            "000000000000000101",
            "101010000000000000",
            "000000000000000000"
        ],
        ans: 3,
        exp: "PASO 1: Identificar la estructura. Una IPv6 tiene 8 hextetos.\n" +
            "PASO 2: PASO 2 — Contar los bloques visibles: D46C (1) : B (2) : 98 (3) : F (4) : C (5) : 5 (6)\n" +
            "→ Se cuentan 6 bloques visibles → faltan 2 bloques\n" +
            "PASO 3: Expandir el '::'. Como faltan 2 bloques, el '::' representa dos grupos de 0000.\n" +
            "Escribir la dirección completa expandida:\n" +
            "PASO 4: Dirección expandida: D46C:0000:0000:000B:0098:000F:000C:0005.\n" +

            "┌────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐\n" +
            "│    │  1°  │  2°  │  3°  │  4°  │  5°  │  6°  │  7°  │  8°  │\n" +
            "├────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤\n" +
            "│Hex │ D46C │ 0000 │ 0000 │ 000B │ 0098 │ 000F │ 000C │ 0005 │\n" +
            "└────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘\n" +
            "↑\n" +
            "TERCER HEXTETO = 0000\n" +

            "RESULTADO: El 3er hexteto es '0000', que en binario de 16 bits son todo ceros."
    },

    {
    profe: true,
    unit: "IPv4 - AND lógico",
    diff: "medium",
    q: "Al efectuar un AND entre la dirección IPv4 90.10.120.1 y su máscara, el resultado es:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP decimal</td>
    <td>90</td>
    <td>10</td>
    <td>120</td>
    <td>1</td>
  </tr>
  <tr>
    <td>IP binario</td>
    <td><input placeholder="01011010"></td>
    <td><input placeholder="00001010"></td>
    <td><input placeholder="01111000"></td>
    <td><input placeholder="00000001"></td>
  </tr>
  <tr>
    <td>Clase</td>
    <td colspan="4"><input style="width:100%" placeholder="¿A, B o C?"></td>
  </tr>
  <tr>
    <td>Máscara por defecto</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>AND (resultado)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "11111111.00000000.00000000.00000000",
        "11111111.10101010.00000000.00000000",
        "01011010.00001010.01111000.00000001",
        "01011010.00000000.00000000.00000000"
    ],
    ans: 3,
        exp: "PASO 1: Determinar la Clase. El primer octeto es 90 (Rango 1-126), por lo tanto es Clase A.\n" +
            "PASO 2: Identificar la máscara por defecto. Para Clase A es 255.0.0.0.\n" +
            "PASO 3: Aplicar lógica AND. El 255 deja pasar el número original, el 0 lo convierte en 0.\n" +
            " \n" +
            "┌─────────┬──────────┬──────────┬──────────┬──────────┐\n" +
            "│         │ Octeto 1 │ Octeto 2 │ Octeto 3 │ Octeto 4 │\n" +
            "├─────────┼──────────┼──────────┼──────────┼──────────┤\n" +
            "│ IP      │ 01011010 │ 00001010 │ 01111000 │ 00000001 │\n" +
            "│ Máscara │ 11111111 │ 00000000 │ 00000000 │ 00000000 │\n" +
            "├─────────┼──────────┼──────────┼──────────┼──────────┤\n" +
            "│ AND     │ 01011010 │ 00000000 │ 00000000 │ 00000000 │\n" +
            "└─────────┴──────────┴──────────┴──────────┴──────────┘\n" +
            "PASO 4: Operar octeto por octeto: (90 AND 255 = 90), (10 AND 0 = 0), (120 AND 0 = 0), (1 AND 0 = 0).\n" +
            "• 1 AND 1 = 1   →  conserva el bit\n" +
            "• 1 AND 0 = 0   →  pone el bit en cero\n" +
            "• 0 AND 0 = 0\n" +

            "RESULTADO: 01011010.00000000.00000000.00000000  (= 90.0.0.0)`\n"
    },


    //GUÍA 1 — PARTE B: DESARROLLO

    //IPv6 – Expandir (Regla #1)
    {
    profe: true,
    unit: "IPv6 - Regla #1",
    diff: "medium",
    q: "Represente la dirección IPv6 ::789D:567F:1 de forma expandida aplicando Regla #1 (omitir ceros iniciales → expandir).",
    extra: `
    <div class="extra-content">
    <table class="subnet-table">
    <thead>
    <tr>
        <th>Paso</th>
        <th>1°</th>
        <th>2°</th>
        <th>3°</th>
        <th>4°</th>
        <th>5°</th>
        <th>6°</th>
        <th>7°</th>
        <th>8°</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Contraída</td>
        <td colspan="3">::</td>
        <td>789D</td>
        <td>567F</td>
        <td>1</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Expandida (Regla #1)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
    </tr>
    </tbody>
    </table>
    </div>
        `,
        opts: [
            "0000:0000:0000:0000:0000:789D:567F:0001",
            "0000:0000:0000:789D:567F:0001:0000:0000",
            "0000:0000:789D:567F:0001:0000:0000:0000",
            "0000:0000:0000:0000:789D:567F:0001:0000"
        ],
        ans: 0,
        exp: "PASO 1: Contar hextetos explícitos en ::789D:567F:1\n" +
         "  Hextetos explícitos: 789D, 567F, 1 → 3 hextetos\n" +
         "  IPv6 tiene 8 hextetos en total → el '::' representa 8-3 = 5 hextetos de ceros.\n\n" +
         "PASO 2: El '::' está al inicio, por lo tanto los 5 ceros van primero.\n" +
         "  0000:0000:0000:0000:0000:789D:567F:0001\n\n" +
         "PASO 3: Aplicar Regla #1 (expandir ceros iniciales de cada hexteto).\n" +
         "  789D → ya tiene 4 dígitos, se mantiene.\n" +
         "  567F → ya tiene 4 dígitos, se mantiene.\n" +
         "  1    → se expande a 0001.\n\n" +
         "RESULTADO: 0000:0000:0000:0000:0000:789D:567F:0001"
},


// {
//     "profe": "true",
//     "unit": "IPv6",
//     "diff": "medium",
//     "q": "1.- Dadas las siguientes direcciones IPV6 de modo contraída, represéntelas de manera expandida.",
//     "extra": `
// <div class="extra-content">
// <table class="subnet-table">
// <thead>
//   <tr>
//     <th>IPV6</th>
//     <th>IPV6 Aplicando Regla #1</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>::789D:567F:1</td>
//     <td><input placeholder=""></td>
//    </tr>
//    <tr>
//     <td>AA:8711::66DC</td>
//     <td><input placeholder=""></td>
//    </tr>
// </tbody>
// </table>
// </div>
//     `,
//     "opts": [
//         "::789D:567F:1 → 0000:0000:0000:0000:0000:789D:567F:0001 | AA:8711::66DC → 00AA:8711:0000:0000:0000:0000:0000:66DC",
//         "::789D:567F:1 → 789D:567F:1:0:0:0:0:0 | AA:8711::66DC → AA:8711:0:0:0:0:0:66DC",
//         "::789D:567F:1 → 0000:789D:567F:1:0:0:0:0 | AA:8711::66DC → AA:8711:66DC:0:0:0:0:0"
//     ],
//     "ans": 0,
//         "PASO 1: Contar hextetos explícitos en ::789D:567F:1\n" +
//          "  Hextetos explícitos: 789D, 567F, 1 → 3 hextetos\n" +
//          "  IPv6 tiene 8 hextetos en total → el '::' representa 8-3 = 5 hextetos de ceros.\n\n" +
//          "PASO 2: El '::' está al inicio, por lo tanto los 5 ceros van primero.\n" +
//          "  0000:0000:0000:0000:0000:789D:567F:0001\n\n" +
//          "PASO 3: Aplicar Regla #1 (expandir ceros iniciales de cada hexteto).\n" +
//          "  789D → ya tiene 4 dígitos, se mantiene.\n" +
//          "  567F → ya tiene 4 dígitos, se mantiene.\n" +
//          "  1    → se expande a 0001.\n\n" +
//          "RESULTADO: 0000:0000:0000:0000:0000:789D:567F:0001"

//         },


{
    "profe": true,
    "unit": "IPv6",
    "diff": "medium",
    "q": "2.- Dadas las siguientes direcciones IPV6, represéntelas según la regla #2: Omitir Ceros Con Dos Puntos.",
    "extra": `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>IPV6</th>
    <th>IPV6 Aplicando Regla #2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>::1050::6:0:600:300C:326B</td>
    <td><input placeholder=""></td>
   </tr>
   <tr>
    <td>4306:0:0:0:0:0:0:C34306::C3</td>
    <td><input placeholder=""></td>
   </tr>
</tbody>
</table
</div>
    `,
    "opts": [
        "1050:0000:0000:0006:0000:0600:300C:326B → 1050::6:0:600:300C:326B | 4306:0:0:0:0:0:0:C3 → 4306::C3",
        "1050:0000:0000:0006:0000:0600:300C:326B → 1050:0:0:6::600:300C:326B | 4306:0:0:0:0:0:0:C3 → 4306:0:0:0:0:0:0:C3",
        "1050:0000:0000:0006:0000:0600:300C:326B → 1050::6::600:300C:326B | 4306:0:0:0:0:0:0:C3 → 4306::C3"
    ],
    "ans": 0,
    "exp": "Regla #2: Omitir secuencias continuas de ceros y reemplazarlas por :: (solo una vez por dirección).\n\n1050:0000:0000:0006:0000:0600:300C:326B\n  Paso 1: Omitir ceros iniciales → 1050:0:0:6:0:600:300C:326B\n  Paso 2: Identificar la secuencia MÁS LARGA de hextetos con valor 0\n  Los hextetos 2 y 3 son 0:0 (2 hextetos)\n  El hexteto 5 es 0 (1 hexteto)\n  La más larga es de 2 hextetos\n  Resultado: 1050::6:0:600:300C:326B\n\n4306:0:0:0:0:0:0:C3\n  Paso 1: Omitir ceros iniciales → 4306:0:0:0:0:0:0:C3\n  Paso 2: Los hextetos 2 al 7 son todos ceros (6 hextetos)\n  Resultado: 4306::C3"
},

{
    profe: true,
    unit: "IPv6 - Regla #1",
    diff: "medium",
    q: "Represente la dirección IPv6 AA:8711::66DC de forma expandida aplicando Regla #1.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Contraída</td>
    <td>AA</td>
    <td>8711</td>
    <td colspan="4">::</td>
    <td>66DC</td>
    <td></td>
  </tr>
  <tr>
    <td>Expandida (Regla #1)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "00AA:8711:0000:0000:0000:0000:66DC:0000",
        "00AA:8711:0000:0000:0000:0000:0000:66DC",
        "00AA:8711:0000:66DC:0000:0000:0000:0000",
        "0000:00AA:8711:0000:0000:0000:0000:66DC"
    ],
    ans: 1,
    exp: "PASO 1: Contar hextetos explícitos en AA:8711::66DC\n" +
         "  Hextetos explícitos: AA, 8711, 66DC → 3 hextetos\n" +
         "  El '::' representa 8-3 = 5 hextetos de ceros.\n\n" +
         "PASO 2: El '::' está en el medio (después de 8711 y antes de 66DC).\n" +
         "  AA : 8711 : 0000:0000:0000:0000:0000 : 66DC\n\n" +
         "PASO 3: Aplicar Regla #1 (rellenar con ceros hasta 4 dígitos por hexteto).\n" +
         "  AA   → 00AA\n" +
         "  8711 → ya tiene 4 dígitos\n" +
         "  66DC → ya tiene 4 dígitos\n\n" +
         "RESULTADO: 00AA:8711:0000:0000:0000:0000:0000:66DC"
},

{
    profe: false,
    unit: "IPv6 - Regla #2",
    diff: "medium",
    q: "Aplica Regla #2 a la dirección: 1050:0000:0000:0006:0000:0600:300C:326B",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0006</td>
    <td>0000</td>
    <td>0600</td>
    <td>300C</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "1050::6:0:600:300C:326B",
        "1050:0:0:6::600:300C:326B",
        "1050::6:600:300C:326B",
        "1050:0:0:6:0:600:300C:326B"
    ],
    ans: 0,
    exp: "PASO 1: Aplicar Regla #1 (quitar ceros iniciales de cada hexteto).\n" +
         "  1050:0:0:6:0:600:300C:326B\n\n" +
         "PASO 2: Identificar secuencias de ceros consecutivos para Regla #2.\n" +
         "  Secuencia A: posiciones 2-3 → :0:0: (2 bloques)\n" +
         "  Secuencia B: posición 5    → :0:   (1 bloque)\n\n" +
         "PASO 3: Aplicar Regla #2. Se sustituye la secuencia MÁS LARGA por '::'.\n" +
         "  La secuencia A (2 bloques) es más larga → se reemplaza por '::'\n" +
         "  La secuencia B (1 bloque)  permanece como :0:\n\n" +
         "RESULTADO: 1050::6:0:600:300C:326B"
},

{
    profe: false,
    unit: "IPv6 - Regla #2",
    diff: "medium",
    q: "Aplica Regla #2 a la dirección: 4306:0:0:0:0:0:0:C3",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>4306</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>00C3</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "4306::C3",
        "4306:0::0:C3",
        "4306::0:C3",
        "4306:0:0:0::C3"
    ],
    ans: 0,
    exp: "PASO 1: Aplicar Regla #1 (quitar ceros iniciales).\n" +
         "  4306:0:0:0:0:0:0:C3\n\n" +
         "PASO 2: Identificar secuencias de ceros consecutivos.\n" +
         "  Secuencia única: posiciones 2 a 7 → 6 bloques de :0: consecutivos.\n\n" +
         "PASO 3: Aplicar Regla #2. Hay una sola secuencia larga, se reemplaza directamente por '::'.\n\n" +
         "RESULTADO: 4306::C3\n\n" +
         "Nota: no se puede usar '::' más de una vez en la misma dirección IPv6."
},

{
    profe: true,
    unit: "Subnetting - Máscara y Hosts",
    diff: "medium",
    q: "Dada la dirección de red 155.168.25.3/21, ¿cuál es la máscara final en decimal punteado y cuántos hosts se pueden obtener?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Prefijo /21 en binario</td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111000"></td>
    <td><input placeholder="00000000"></td>
  </tr>
  <tr>
    <td>Máscara decimal</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input style="width:100%" placeholder="32 - prefijo = ?"></td>
  </tr>
  <tr>
    <td>Total IPs (2^n)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts utilizables (2^n - 2)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara: 255.255.248.0 | Hosts: 2046",
        "Máscara: 255.255.240.0 | Hosts: 4094",
        "Máscara: 255.255.255.0 | Hosts: 254",
        "Máscara: 255.255.252.0 | Hosts: 1022"
    ],
    ans: 0,
    exp: "PASO 1: Convertir /21 a binario.\n" +
         "  21 bits en 1 → 11111111.11111111.11111000.00000000\n\n" +
         "PASO 2: Convertir a decimal punteado.\n" +
         "  11111111 = 255\n" +
         "  11111111 = 255\n" +
         "  11111000 = 248  (128+64+32+16+8 = 248)\n" +
         "  00000000 = 0\n" +
         "  MÁSCARA: 255.255.248.0\n\n" +
         "PASO 3: Calcular hosts.\n" +
         "  Bits de host = 32 - 21 = 11\n" +
         "  Total IPs = 2^11 = 2048\n" +
         "  Hosts utilizables = 2048 - 2 = 2046"
},

{
    profe: true,
    unit: "Subnetting - Máscara y Hosts",
    diff: "medium",
    q: "Dada la dirección de red 10.1.25.30/16, ¿cuál es la máscara final en decimal punteado y cuántos hosts se pueden obtener?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Prefijo /16 en binario</td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="00000000"></td>
    <td><input placeholder="00000000"></td>
  </tr>
  <tr>
    <td>Máscara decimal</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input style="width:100%" placeholder="32 - prefijo = ?"></td>
  </tr>
  <tr>
    <td>Total IPs (2^n)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts utilizables (2^n - 2)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara: 255.255.0.0 | Hosts: 65534",
        "Máscara: 255.0.0.0   | Hosts: 16777214",
        "Máscara: 255.255.0.0 | Hosts: 65536",
        "Máscara: 255.255.255.0 | Hosts: 254"
    ],
    ans: 0,
    exp: "PASO 1: Convertir /16 a binario.\n" +
         "  16 bits en 1 → 11111111.11111111.00000000.00000000\n\n" +
         "PASO 2: Convertir a decimal punteado.\n" +
         "  11111111 = 255\n" +
         "  11111111 = 255\n" +
         "  00000000 = 0\n" +
         "  00000000 = 0\n" +
         "  MÁSCARA: 255.255.0.0\n\n" +
         "PASO 3: Calcular hosts.\n" +
         "  Bits de host = 32 - 16 = 16\n" +
         "  Total IPs = 2^16 = 65536\n" +
         "  Hosts utilizables = 65536 - 2 = 65534"
},

{
    profe: true,
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    case: "La empresa PCS Tech necesita 14 subredes con la IP en binario 01000001.10000000.11000011.11111110.",
    q: "Calcula: máscara final, blocksize, hosts por subred, primera y última red útil, y completa el cuadro de subredes.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</td>
    <td colspan="5">01000001.10000000.11000011.11111110</td>
  </tr>
  <tr>
    <td>IP en decimal</td>
    <td colspan="5"><input style="width:100%" placeholder="convierte cada octeto"></td>
  </tr>
  <tr>
    <td>Clase</td>
    <td colspan="5"><input style="width:100%" placeholder="A, B o C"></td>
  </tr>
  <tr>
    <td>Máscara por defecto</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Bits prestados (para 14 redes)</td>
    <td colspan="5"><input style="width:100%" placeholder="2^n ≥ 14"></td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Blocksize</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>9</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>10</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>11</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>12</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>13</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>14</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara /28 | Blocksize 16 | 14 hosts | Primera red: 65.128.195.0 | Última red: 65.128.195.208",
        "Máscara /27 | Blocksize 32 | 30 hosts | Primera red: 65.128.195.0 | Última red: 65.128.195.192",
        "Máscara /28 | Blocksize 16 | 14 hosts | Primera red: 65.128.195.16 | Última red: 65.128.195.224",
        "Máscara /26 | Blocksize 64 | 62 hosts | Primera red: 65.128.195.0 | Última red: 65.128.195.192"
    ],
    ans: 0,
    exp: "PASO 1: Convertir IP binaria a decimal.\n" +
         "  01000001 = 65\n" +
         "  10000000 = 128\n" +
         "  11000011 = 195\n" +
         "  11111110 = 254\n" +
         "  IP decimal: 65.128.195.254\n\n" +
         "PASO 2: Determinar clase.\n" +
         "  Primer octeto 65 → entre 1-126 → Clase A\n" +
         "  Máscara por defecto Clase A: 255.0.0.0 (/8)\n\n" +
         "PASO 3: Calcular bits a prestar para 14 subredes.\n" +
         "  2^n ≥ 14 → 2^4 = 16 ≥ 14 ✓ → se prestan 4 bits\n" +
         "  Nuevo prefijo: /8 + 4 = /28\n" +
         "  Máscara final: 255.255.255.240\n\n" +
         "PASO 4: Blocksize = 2^(bits de host) = 2^(32-28) = 2^4 = 16\n" +
         "  Hosts por subred = 16 - 2 = 14\n\n" +
         "PASO 5: Cuadro de subredes (blocksize 16, partiendo de 65.128.195.0):\n" +
         "  Red 1:  65.128.195.0   | 1-14   | BC: 65.128.195.15\n" +
         "  Red 2:  65.128.195.16  | 17-30  | BC: 65.128.195.31\n" +
         "  Red 3:  65.128.195.32  | 33-46  | BC: 65.128.195.47\n" +
         "  Red 4:  65.128.195.48  | 49-62  | BC: 65.128.195.63\n" +
         "  Red 5:  65.128.195.64  | 65-78  | BC: 65.128.195.79\n" +
         "  Red 6:  65.128.195.80  | 81-94  | BC: 65.128.195.95\n" +
         "  Red 7:  65.128.195.96  | 97-110 | BC: 65.128.195.111\n" +
         "  Red 8:  65.128.195.112 | 113-126| BC: 65.128.195.127\n" +
         "  Red 9:  65.128.195.128 | 129-142| BC: 65.128.195.143\n" +
         "  Red 10: 65.128.195.144 | 145-158| BC: 65.128.195.159\n" +
         "  Red 11: 65.128.195.160 | 161-174| BC: 65.128.195.175\n" +
         "  Red 12: 65.128.195.176 | 177-190| BC: 65.128.195.191\n" +
         "  Red 13: 65.128.195.192 | 193-206| BC: 65.128.195.207\n" +
         "  Red 14: 65.128.195.208 | 209-222| BC: 65.128.195.223\n\n" +
         "Primera red útil: 65.128.195.0 | Última red útil: 65.128.195.208"
},

// GUIA 2 

{
    profe: true,
    unit: "IPv6 - Hextetos",
    diff: "medium",
    q: "En la dirección IPv6 546C:B:98:F:C::6665, el equivalente en decimal al sexto hexteto es:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Contraída</td>
    <td>546C</td>
    <td>B</td>
    <td>98</td>
    <td>F</td>
    <td>C</td>
    <td colspan="2">::</td>
    <td>6665</td>
  </tr>
  <tr>
    <td>Expandida</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>6° hexteto en binario (16 bits)</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "000000000000001010",
        "000000000000001011",
        "000000000000000000",
        "101000000000000000"
    ],
    ans: 2,
    exp: "PASO 1: Expandir la dirección. El '::' reemplaza hextetos de ceros consecutivos.\n" +
         "546C:B:98:F:C::6665 tiene 6 hextetos explícitos (546C, B, 98, F, C, 6665).\n" +
         "  El '::' representa 8-6 = 2 hextetos de ceros.\n" +
         "  El '::' está entre C y 6665 → los ceros van en posiciones 6 y 7.\n" +
         "Expandida: 546C:000B:0098:000F:000C:0000:0000:6665\n\n" +
         "PASO 2: Identificar el sexto hexteto.\n" +
         "  1° → 546C\n" +
         "  2° → 000B\n" +
         "  3° → 0098\n" +
         "  4° → 000F\n" +
         "  5° → 000C\n" +
         "  6° → 0000  ← este es el que se pide\n\n" +
         "PASO 3: Convertir 0000 a binario de 16 bits.\n" +
         "  0000 hex = 0 decimal = 0000000000000000 binario\n\n" +
         "RESULTADO: 000000000000000000 → opción C."
},

{
    profe: true,
    unit: "IPv4 - AND lógico",
    diff: "medium",
    q: "Al efectuar un AND entre la dirección IPv4 90.10.120.1 y su máscara, el resultado es:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP decimal</td>
    <td>90</td>
    <td>10</td>
    <td>120</td>
    <td>1</td>
  </tr>
  <tr>
    <td>IP binario</td>
    <td><input placeholder="01011010"></td>
    <td><input placeholder="00001010"></td>
    <td><input placeholder="01111000"></td>
    <td><input placeholder="00000001"></td>
  </tr>
  <tr>
    <td>Clase</td>
    <td colspan="4"><input style="width:100%" placeholder="¿A, B o C?"></td>
  </tr>
  <tr>
    <td>Máscara por defecto</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>AND (resultado)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "11111111.00000000.00000000.00000000",
        "11111111.10101010.00000000.00000000",
        "01011010.00001010.01111000.00000001",
        "01011010.00000000.00000000.00000000"
    ],
    ans: 3,
    exp: "PASO 1: Convertir 90.10.120.1 a binario.\n" +
         "  90  → 01011010\n" +
         "  10  → 00001010\n" +
         "  120 → 01111000\n" +
         "  1   → 00000001\n\n" +
         "PASO 2: Clase. Primer octeto 90 (1-126) → Clase A.\n" +
         "  Máscara Clase A: 255.0.0.0 = 11111111.00000000.00000000.00000000\n\n" +
         "PASO 3: AND bit a bit.\n" +
         "  IP:      01011010.00001010.01111000.00000001\n" +
         "  Máscara: 11111111.00000000.00000000.00000000\n" +
         "  AND:     01011010.00000000.00000000.00000000\n\n" +
         "RESULTADO: 01011010.00000000.00000000.00000000 → opción D."
},

//GUÍA 2 — PARTE B: DESARROLLO

{
    profe: true,
    unit: "IPv6 - Regla #1",
    diff: "medium",
    q: "Represente las siguientes direcciones IPV6 según la regla #1: Omitir Ceros Iniciales : 1050:0000:0000:0000:0005:0600:300C:326B",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0005</td>
    <td>0600</td>
    <td>300C</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "1050:0:0:0:5:600:300C:326B",
        "1050:0:0:0:5:6:3C:326B",
        "1050:000:000:000:005:600:300C:326B",
        "1050:0000:0000:0000:0005:0600:300C:326B"
    ],
    ans: 0,
    exp: "Regla #1: Se eliminan los ceros a la IZQUIERDA de cada hexteto (ceros no significativos).\n\n" +
         "  1050 → 1050  (sin ceros iniciales, se mantiene)\n" +
         "  0000 → 0     (todos ceros, se deja al menos un dígito)\n" +
         "  0000 → 0\n" +
         "  0000 → 0\n" +
         "  0005 → 5     (se eliminan los tres ceros iniciales)\n" +
         "  0600 → 600   (se elimina el cero inicial)\n" +
         "  300C → 300C  (sin ceros iniciales, se mantiene)\n" +
         "  326B → 326B  (sin ceros iniciales, se mantiene)\n\n" +
         "RESULTADO: 1050:0:0:0:5:600:300C:326B"
},

{
    profe: true,
    unit: "IPv6 - Regla #2",
    diff: "medium",
    q: "Dadas las siguientes direcciones IPV6 , represéntelas según la regla #2: Omitir Ceros Con Dos Puntos 1050:0000:0000:0000:0005:0000:0000:326B",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0005</td>
    <td>0000</td>
    <td>0000</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "1050::5:0:0:326B",
        "1050:0:0:0:5::326B",
        "1050::5:326B",
        "1050:0000::5:326B"
    ],
    ans: 0,
    exp: "PASO 1: Aplicar Regla #1 (quitar ceros iniciales).\n" +
         "  1050:0:0:0:5:0:0:326B\n\n" +
         "PASO 2: Identificar secuencias de ceros consecutivos.\n" +
         "  Secuencia A: posiciones 2-4 → :0:0:0: (3 bloques)\n" +
         "  Secuencia B: posiciones 6-7 → :0:0:   (2 bloques)\n\n" +
         "PASO 3: Aplicar Regla #2. Se sustituye la secuencia MÁS LARGA por '::'.\n" +
         "  Secuencia A tiene 3 bloques → es la más larga → se reemplaza por '::'\n" +
         "  Secuencia B (2 bloques) se mantiene como :0:0:\n\n" +
         "RESULTADO: 1050::5:0:0:326B"
},

{
    profe: true,
    unit: "IPv6 - Regla #2",
    diff: "medium",
    q: "Aplica Regla #2 a la dirección: FF06:0:0:0:0:0:0:C3",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>FF06</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>00C3</td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "FF06::C3",
        "FF06:0::0:C3",
        "FF06::0:C3",
        "FF06:0:0:0::C3"
    ],
    ans: 0,
    exp: "PASO 1: Aplicar Regla #1 (quitar ceros iniciales).\n" +
         "  FF06:0:0:0:0:0:0:C3\n\n" +
         "PASO 2: Identificar secuencias de ceros consecutivos.\n" +
         "  Secuencia única: posiciones 2 a 7 → 6 bloques de :0: consecutivos.\n\n" +
         "PASO 3: Aplicar Regla #2. Solo hay una secuencia, se reemplaza por '::'.\n\n" +
         "RESULTADO: FF06::C3\n\n" +
         "Nota: '::' solo puede aparecer UNA SOLA VEZ en una dirección IPv6. Si apareciera dos veces sería imposible determinar cuántos grupos de ceros representa cada uno."
},

{
    profe: true,
    unit: "Subnetting - Máscara y Hosts",
    diff: "medium",
    q: "Se muestra la dirección de red 60.168.25.3/ 29 ¿cual es la Mascara final en decimal punteado y la Cantidad de Host que se pueden obtener?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Prefijo /29 en binario</td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111000"></td>
  </tr>
  <tr>
    <td>Máscara decimal</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input style="width:100%" placeholder="32 - 29 = ?"></td>
  </tr>
  <tr>
    <td>Total IPs (2^n)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts utilizables (2^n - 2)</td>
    <td colspan="4"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara: 255.255.255.248 | Hosts: 6",
        "Máscara: 255.255.255.240 | Hosts: 14",
        "Máscara: 255.255.255.252 | Hosts: 2",
        "Máscara: 255.255.255.0   | Hosts: 254"
    ],
    ans: 0,
    exp: "PASO 1: Convertir /29 a binario.\n" +
         "  29 bits en 1 → 11111111.11111111.11111111.11111000\n\n" +
         "PASO 2: Convertir a decimal punteado.\n" +
         "  11111111 = 255\n" +
         "  11111111 = 255\n" +
         "  11111111 = 255\n" +
         "  11111000 = 248  (128+64+32+16+8 = 248)\n" +
         "  MÁSCARA: 255.255.255.248\n\n" +
         "PASO 3: Calcular hosts.\n" +
         "  Bits de host = 32 - 29 = 3\n" +
         "  Total IPs = 2^3 = 8\n" +
         "  Hosts utilizables = 8 - 2 = 6"
},

{
    profe: true,
    unit: "IPv6 - Análisis de dirección",
    diff: "medium",
    q: "Dada la dirección IPv6 987F::FF2A:0/64, responde: ¿cuántos bits de red tiene?, ¿cuál es la porción de red?, ¿cuál es la porción de interfaz?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Desarrollo</th>
    <th>Resultado</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Dirección expandida</td>
    <td><input style="width:100%" placeholder="expandir usando Regla #1"></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de red (prefijo)</td>
    <td><input style="width:100%" placeholder="se indica con /XX"></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de interfaz</td>
    <td><input style="width:100%" placeholder="128 - bits de red = ?"></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Porción de red (primeros 64 bits)</td>
    <td colspan="2"><input style="width:100%" placeholder="primeros 4 hextetos"></td>
  </tr>
  <tr>
    <td>Porción de interfaz (últimos 64 bits)</td>
    <td colspan="2"><input style="width:100%" placeholder="últimos 4 hextetos"></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Bits de red: 64 | Porción de red: 987F:0000:0000:0000 | Porción de interfaz: 0000:FF2A:0000:0000",
        "Bits de red: 64 | Porción de red: 987F:0000:FF2A:0000 | Porción de interfaz: 0000:0000:0000:0000",
        "Bits de red: 128 | Porción de red: toda la dirección | Porción de interfaz: ninguna",
        "Bits de red: 32 | Porción de red: 987F:0000 | Porción de interfaz: 0000:0000:FF2A:0000:0000:0000"
    ],
    ans: 0,
    exp: "PASO 1: Expandir la dirección 987F::FF2A:0/64.\n" +
         "  Hextetos explícitos: 987F, FF2A, 0 → 3 hextetos\n" +
         "  '::' representa 8-3 = 5 hextetos de ceros.\n" +
         "  El '::' va después de 987F → los ceros van en posiciones 2 a 6.\n" +
         "  Expandida: 987F:0000:0000:0000:0000:FF2A:0000:0000\n\n" +
         "PASO 2: Bits de red.\n" +
         "  El prefijo /64 indica que los primeros 64 bits son la porción de red.\n" +
         "  Bits de interfaz = 128 - 64 = 64 bits.\n\n" +
         "PASO 3: Dividir la dirección en porciones.\n" +
         "  64 bits = 4 hextetos de 16 bits cada uno.\n" +
         "  Porción de RED      (hextetos 1-4): 987F:0000:0000:0000\n" +
         "  Porción de INTERFAZ (hextetos 5-8): 0000:FF2A:0000:0000"
},

{
    profe: true,
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    case: "La Unidad Educativa “PENSAMIENTO INNOVADOR”, con sede en Antofagasta, desea establecer conexión con tres de sus institutos en Arica, Calama y La Serena, por lo cual le solicita realizar un Plan de Direccionamiento para 4 subredes con la IP en binario 11001000. 10101000.00010110.00000010, para conectar en cada sede una determinada cantidad de host",
    q: "Debe entregar un reporte con la cantidad de redes requeridas, Host posibles a conectar y mostrar el cuadro de Subneteo de estas paso a paso, indicando como las obtuvo",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</td>
    <td colspan="5">11001000.10101000.00010110.00000010</td>
  </tr>
  <tr>
    <td>IP en decimal</td>
    <td colspan="5"><input style="width:100%" placeholder="convierte cada octeto"></td>
  </tr>
  <tr>
    <td>Clase</td>
    <td colspan="5"><input style="width:100%" placeholder="A, B o C"></td>
  </tr>
  <tr>
    <td>Máscara por defecto</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Bits prestados (para 4 redes)</td>
    <td colspan="5"><input style="width:100%" placeholder="2^n ≥ 4"></td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Blocksize</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</td>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara /26 | Blocksize 64 | 62 hosts | Subredes: .0, .64, .128, .192",
        "Máscara /27 | Blocksize 32 | 30 hosts | Subredes: .0, .32, .64, .96",
        "Máscara /25 | Blocksize 128 | 126 hosts | Subredes: .0, .128",
        "Máscara /28 | Blocksize 16 | 14 hosts | Subredes: .0, .16, .32, .48"
    ],
    ans: 0,
    exp: "PASO 1: Convertir IP binaria a decimal.\n" +
         "  11001000 = 200\n" +
         "  10101000 = 168\n" +
         "  00010110 = 22\n" +
         "  00000010 = 2\n" +
         "  IP decimal: 200.168.22.2\n\n" +
         "PASO 2: Determinar clase.\n" +
         "  Primer octeto 200 → entre 192-223 → Clase C\n" +
         "  Máscara por defecto Clase C: 255.255.255.0 (/24)\n\n" +
         "PASO 3: Calcular bits a prestar para 4 subredes.\n" +
         "  2^n ≥ 4 → 2^2 = 4 ✓ → se prestan 2 bits\n" +
         "  Nuevo prefijo: /24 + 2 = /26\n" +
         "  Máscara final: 255.255.255.192\n\n" +
         "PASO 4: Blocksize = 2^(bits de host) = 2^(32-26) = 2^6 = 64\n" +
         "  Hosts por subred = 64 - 2 = 62\n\n" +
         "PASO 5: Cuadro de subredes (blocksize 64, partiendo de 200.168.22.0):\n" +
         "  Red 1: 200.168.22.0   | Primera: .1   | Última: .62  | BC: 200.168.22.63\n" +
         "  Red 2: 200.168.22.64  | Primera: .65  | Última: .126 | BC: 200.168.22.127\n" +
         "  Red 3: 200.168.22.128 | Primera: .129 | Última: .190 | BC: 200.168.22.191\n" +
         "  Red 4: 200.168.22.192 | Primera: .193 | Última: .254 | BC: 200.168.22.255"
},

    {
        profe: true,
        unit: "Unidad Redes",
        diff: "easy",
        q: "Expande la IPv6 AA:8711::66DC",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Pos.</th>
            <th>1°</th>
            <th>2°</th>
            <th>3°</th>
            <th>4°</th>
            <th>5°</th>
            <th>6°</th>
            <th>7°</th>
            <th>8°</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hexteto</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        </tbody>
        </table>
        </div>
            `,
        opts: [
            "00AA:8711:0000:0000:0000:0000:0000:66DC",
            "AA00:8711:0000:0000:0000:0000:0000:66DC",
            "AA:8711:0000:0000:0000:0000:0000:66DC",
            "00AA:8711:66DC:0000:0000:0000:0000:0000"
        ],
        ans: 0,
        exp: "PASO 1: Contar bloques visibles. Tenemos AA, 8711 (2 al inicio) y 66DC (1 al final) = 3 bloques.\n" +
            "PASO 2: Calcular faltantes. 8 - 3 = 5 bloques de ceros deben ir donde está el '::'.\n" +
            "PASO 3: Completar hextetos a 4 dígitos. 'AA' se convierte en '00AA' agregando ceros a la izquierda.\n" +
            "RESULTADO: 00AA:8711:0000:0000:0000:0000:0000:66DC"
    },

    //IPv6 – Contraer (Regla #2)
    {
        profe: true,
        unit: "Unidad Redes",
        diff: "easy",
        q: "Aplica la regla #2 (omitir ceros) a: 1050:0000:0000:0006:0000:0600:300C:326B",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Paso</th>
            <th>1°</th>
            <th>2°</th>
            <th>3°</th>
            <th>4°</th>
            <th>5°</th>
            <th>6°</th>
            <th>7°</th>
            <th>8°</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Original</td>
            <td>1050</td>
            <td>0000</td>
            <td>0000</td>
            <td>0006</td>
            <td>0000</td>
            <td>0600</td>
            <td>300C</td>
            <td>326B</td>
        </tr>
        <tr>
            <td>Regla #1</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Regla #2</td>
            <td colspan="8"><input style="width:100%"></td>
        </tr>
        </tbody>
        </table>
        </div>
    `,
        opts: [
            "1050::6:0:600:300C:326B",
            "1050:0:0:6:0:600:300C:326B",
            "1050::0006:0000:0600:300C:326B",
            "1050:0000::600:300C:326B"
        ],
        ans: 0,
        exp: "PASO 1: Eliminar ceros a la izquierda (Regla #1). 0000→0, 0006→6, 0600→600.\n" +
            "PASO 2: Identificar grupos de ceros. Hay un grupo de dos ceros (bloques 2 y 3) y un cero solitario (bloque 5).\n" +
            "PASO 3: Aplicar '::'. Se reemplaza la secuencia MÁS LARGA de ceros (los dos primeros ceros).\n" +
            "PASO 4: Regla crítica. El '::' solo se puede usar UNA VEZ por dirección.\n" +
            "RESULTADO: 1050::6:0:600:300C:326B"
    },

    {
        profe: true,
        unit: "Unidad Redes",
        diff: "easy",
        q: "Aplica la regla #2 (omitir ceros) a: 4306:0:0:0:0:0:0:C3",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Paso</th>
            <th>1°</th>
            <th>2°</th>
            <th>3°</th>
            <th>4°</th>
            <th>5°</th>
            <th>6°</th>
            <th>7°</th>
            <th>8°</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Original</td>
            <td>4306</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>C3</td>
        </tr>
        <tr>
            <td>Regla #2</td>
            <td colspan="8"><input style="width:100%"></td>
        </tr>
        </tbody>
        </table>
        </div>
    `,
        opts: [
            "4306::C3",
            "4306:0::C3",
            "4306::0:C3",
            "4306:C3::"
        ],
        ans: 0,
        exp: "PASO 1: Identificar bloques de ceros consecutivos. Hay 6 grupos de ceros entre 4306 y C3.\n" +
            "PASO 2: Aplicar Regla #2. Toda secuencia continua de ceros se comprime usando '::'.\n" +
            "RESULTADO: 4306::C3"
    },

    //Subneteo / Máscaras
    {
        profe: true,
        unit: "Unidad Redes",
        diff: "medium",
        q: "Para la red 155.168.25.3/21, ¿cuál es la máscara en decimal punteado y cuántos hosts permite?",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th></th>
            <th>Octeto 1</th>
            <th>Octeto 2</th>
            <th>Octeto 3</th>
            <th>Octeto 4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Máscara (binario)</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Máscara (decimal)</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Bits de host</td>
            <td colspan="4"><input></td>
        </tr>
        <tr>
            <td>Hosts útiles</td>
            <td colspan="4"><input></td>
        </tr>
        </tbody>
        </table>
        </div>
         `,
        opts: [
            "255.255.248.0 y 2046 hosts",
            "255.255.0.0 y 65534 hosts",
            "255.255.255.0 y 254 hosts",
            "255.248.0.0 y 4094 hosts"
        ],
        ans: 0,
        exp: "PASO 1: Calcular la máscara. /21 significa 21 bits de red (11111111.11111111.11111000.00000000).\n" +
            "PASO 2: Convertir a decimal. 8 bits (255) + 8 bits (255) + 5 bits (248) + 0 bits (0) = 255.255.248.0.\n" +
            "PASO 3: Calcular bits de host. 32 bits totales - 21 bits de red = 11 bits para hosts.\n" +
            "PASO 4: Aplicar fórmula de hosts. 2^11 - 2 = 2048 - 2 = 2046 hosts útiles.\n" +
            "RESULTADO: Máscara 255.255.248.0 con 2046 hosts."
    },

    {
        profe: true,
        unit: "Unidad Redes",
        diff: "medium",
        q: "Para la red 10.1.25.30/16, ¿cuál es la máscara en decimal punteado y cuántos hosts permite?",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th></th>
            <th>Octeto 1</th>
            <th>Octeto 2</th>
            <th>Octeto 3</th>
            <th>Octeto 4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Máscara (binario)</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Máscara (decimal)</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Bits de host</td>
            <td colspan="4"><input></td>
        </tr>
        <tr>
            <td>Hosts útiles</td>
            <td colspan="4"><input></td>
        </tr>
        </tbody>
        </table>
        </div>
            `,
        opts: [
            "255.255.0.0 y 65534 hosts",
            "255.0.0.0 y 16777214 hosts",
            "255.255.255.0 y 254 hosts",
            "255.255.248.0 y 2046 hosts"
        ],
        ans: 0,
        exp: "PASO 1: Identificar el prefijo /16. Significa que los primeros dos octetos son de red.\n" +
            "PASO 2: Escribir la máscara. 11111111.11111111.00000000.00000000 -> 255.255.0.0.\n" +
            "PASO 3: Calcular bits de host. 32 - 16 = 16 bits disponibles para dispositivos.\n" +
            "PASO 4: Aplicar fórmula. 2^16 - 2 = 65536 - 2 = 65534 hosts útiles.\n" +
            "RESULTADO: Máscara 255.255.0.0 con 65534 hosts."
    },

    ///subn

    {
        profe: true,
        unit: "Subnetting",
        diff: "hard",

        q: "PCS Tech: IP 01000001.10000000.11000011.11111110 → 14 subredes. Completa el desarrollo y cuadro.",

        extra: `
        <div class="bloque-ejercicio">

      <h5>5.1 Máscara final</h5>
      <input>

      <h5>5.2 Blocksize</h5>
      <input>

      <h5>5.3 Cantidad de Hosts</h5>
      <input>

      <h5>5.4 Primera y Última red útil</h5>
      <input placeholder="Primera red">
      <input placeholder="Última red">

      <h5>5.5 Cuadro de Subredes</h5>

      <table class="subnet-table">
        <tr>
          <th>N°</th>
          <th>SUBRED</th>
          <th>Primera IP</th>
          <th>Última IP</th>
          <th>Broadcast</th>
        </tr>

        <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>9</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>10</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>11</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>12</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>13</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>14</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>

      </table>

    </div>
  `,

        opts: [
            "Máscara 255.240.0.0 | Blocksize 16 | Hosts 1048574 | Red inicial 65.0.0.0 | Red final 65.240.0.0",
            "Máscara 255.255.0.0 | Blocksize 256 | Hosts 65534 | Red inicial 65.0.0.0 | Red final 65.255.0.0",
            "Máscara 255.248.0.0 | Blocksize 8 | Hosts 2046 | Red inicial 65.0.0.0 | Red final 65.120.0.0",
            "Máscara 255.255.240.0 | Blocksize 16 | Hosts 4094 | Red inicial 65.0.0.0 | Red final 65.15.0.0"
        ],

        ans: 0,

        exp: "PASO 1: IP binaria → 65.128.195.254.\n" +
            "PASO 2: Requerimiento de 14 subredes. 2^n >= 14 -> n=4. Se piden prestados 4 bits al host.\n" +
            "PASO 3: Máscara. Clase A original es /8. Nueva máscara: 8 + 4 = /12. En decimal: 255.240.0.0.\n" +
            "PASO 4: Blocksize. 256 - 240 = 16. Los saltos ocurren en el segundo octeto.\n" +
            "PASO 5: Hosts. Quedan 20 bits para host (32 - 12). 2^20 - 2 = 1.048.574 hosts por subred.\n" +
            "PASO 6: Listado. Subred 1: 65.0.0.0 | Subred 2: 65.16.0.0 | Subred 3: 65.32.0.0... Subred 14: 65.208.0.0."
    },


    //TOPOLOGÍAS Y TIPOS DE REDES 

    {
        profe: true,
        unit: "Unidad Redes",
        diff: "easy",
        q: "¿Qué tipo de red se utiliza típicamente para conectar computadoras dentro de un mismo edificio o una oficina?",
        opts: [
            "LAN (Local Area Network)",
            "WAN (Wide Area Network)",
            "MAN (Metropolitan Area Network)",
            "PAN (Personal Area Network)"
        ],
        ans: 0,
        exp: "PASO 1: Identificar el alcance geográfico. Un edificio es una distancia corta (metros).\n" +
            "PASO 2: Evaluar opciones. PAN es para dispositivos personales (Bluetooth). MAN es para ciudades. WAN es para países/continentes.\n" +
            "PASO 3: Definir LAN. Es la red de área local diseñada para alta velocidad en áreas geográficas limitadas.\n" +
            "RESULTADO: LAN es la respuesta correcta para oficinas o casas."
    },

    //IPV6 Hexteto
    {
        profe: true,
        unit: "IPv6",
        diff: "medium",
        q: "En la dirección IPv6 546C:B:98:F:C::6665, ¿cuál es el equivalente del sexto hexteto?",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Pos.</th>
            <th>1°</th>
            <th>2°</th>
            <th>3°</th>
            <th>4°</th>
            <th>5°</th>
            <th>6°</th>
            <th>7°</th>
            <th>8°</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hexteto</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        </tbody>
        </table>
        </div>
            `,
        opts: [
            "000000000000001010",
            "000000000000001011",
            "000000000000000000",
            "101000000000000000"
        ],
        ans: 2,
        exp: "PASO 1: Contar hextetos visibles: 546C(1), B(2), 98(3), F(4), C(5), 6665(6).\n" +
            "PASO 2: Una IPv6 completa tiene 8 hextetos. Faltan 2 para completar el estándar.\n" +
            "PASO 3: El símbolo '::' representa los bloques faltantes de ceros consecutivos.\n" +
            "PASO 4: Expandiendo la dirección: 546C:000B:0098:000F:000C:0000:0000:6665.\n" +
            "RESULTADO: El sexto hexteto corresponde al primer bloque de ceros tras la letra C (0000)."
    },


    //PARTE B — IPV6

    {
        profe: true,
        unit: "IPv6",
        diff: "medium",
        q: "Aplica regla #1 (omitir ceros iniciales): 1050:0000:0000:0000:0005:0600:300C:326B",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0005</td>
    <td>0600</td>
    <td>300C</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "1050:0:0:0:5:600:300C:326B",
            "1050::5:600:300C:326B",
            "1050:0000:5:600:300C:326B",
            "1050:0:0:0:0005:0600:300C:326B"
        ],
        ans: 0,
        exp: "PASO 1: Identificar la instrucción. Regla #1 solo permite omitir ceros a la izquierda de cada hexteto.\n" +
            "PASO 2: Procesar bloques de ceros. 0000 se reduce a un solo 0. 0005 se reduce a 5.\n" +
            "PASO 3: Procesar bloques técnicos. 0600 se reduce a 600 (los ceros a la derecha NO se eliminan).\n" +
            "PASO 4: Evitar Regla #2. No se debe usar '::' ya que la pregunta pide específicamente la Regla #1.\n" +
            "RESULTADO: 1050:0:0:0:5:600:300C:326B"
    },

    //Regla 2

    {
        profe: true,
        unit: "IPv6",
        diff: "medium",
        q: "Aplica regla #2: 1050:0000:0000:0000:0005:0000:0000:326B",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0000</td>
    <td>0005</td>
    <td>0000</td>
    <td>0000</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "1050::5:0:0:326B",
            "1050:0:0:0:5::326B",
            "1050::5:326B",
            "1050:0000::5:326B"
        ],
        ans: 0,
        exp: "PASO 1: Identificar secuencias de ceros. Secuencia A (3 bloques): :0000:0000:0000:. Secuencia B (2 bloques): :0000:0000:.\n" +
            "PASO 2: Aplicar Regla #2. Se debe sustituir la secuencia MÁS LARGA por '::'.\n" +
            "PASO 3: Resolución. Los tres ceros iniciales se vuelven '::'. Los dos ceros finales se muestran como :0:0:.\n" +
            "RESULTADO: 1050::5:0:0:326B"
    },

    //SUBNETTING /29

    {
        profe: true,
        unit: "Subnetting",
        diff: "medium",
        q: "IP 60.168.25.3/29 → máscara y hosts",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Máscara (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Hosts útiles</td>
    <td colspan="4"><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "255.255.255.248 | 6 hosts",
            "255.255.255.240 | 14 hosts",
            "255.255.255.252 | 2 hosts",
            "255.255.255.224 | 30 hosts"
        ],
        ans: 0,
        exp: "PASO 1: Calcular máscara /29. Son 29 bits de red. El último octeto tiene 5 bits de red (11111000).\n" +
            "PASO 2: Conversión decimal. 128+64+32+16+8 = 248. Máscara: 255.255.255.248.\n" +
            "PASO 3: Calcular hosts. Bits de host = 32 - 29 = 3 bits.\n" +
            "PASO 4: Fórmula de hosts útiles. 2^3 - 2 = 8 - 2 = 6 hosts.\n" +
            "RESULTADO: 255.255.255.248 y 6 hosts útiles."
    },

    //IPV6 /64
    {
        profe: true,
        unit: "IPv6",
        diff: "medium",
        q: "987F::FF2A:0/64 → bits de red, porción red e interfaz",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Pos.</th>
            <th>1°</th>
            <th>2°</th>
            <th>3°</th>
            <th>4°</th>
            <th>5°</th>
            <th>6°</th>
            <th>7°</th>
            <th>8°</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hexteto</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>Porción</td>
            <td colspan="4">RED (/64)</td>
            <td colspan="4">INTERFAZ</td>
        </tr>
        </tbody>
        </table>
        </div>
            `,
        opts: [
            "64 bits | 987F:: | FF2A:0",
            "32 bits | 987F | FF2A",
            "64 bits | FF2A | 987F",
            "128 bits | 987F::FF2A:0 | 0"
        ],
        ans: 0,
        exp: "PASO 1: Identificar el prefijo /64. Los primeros 64 bits (4 hextetos) corresponden a la RED.\n" +
            "PASO 2: Los últimos 64 bits (4 hextetos restantes) son la INTERFAZ (Host).\n" +
            "PASO 3: Análisis: 987F(1):0000(2):0000(3):0000(4) | FF2A(5):0000(6):0000(7):0000(8).\n" +
            "RESULTADO: Red = 987F:: (primeros 4 bloques). Interfaz = FF2A:0 (últimos bloques visibles)."
    },

    //SUBNETTING

    {
        profe: true,
        unit: "Subnetting",
        diff: "hard",
        q: "IP 11001000.10101000.00010110.00000010 → 4 subredes",
        extra: `
    <div class="extra-content">
    <table class="subnet-table">
    <thead>
    <tr>
        <th></th>
            <th>Octeto 1</th>
            <th>Octeto 2</th>
            <th>Octeto 3</th>
            <th>Octeto 4</th>
        </tr>
        </thead>
        <tbody>
        <tr>
    <td>IP (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Blocksize</td>
    <td colspan="4"><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "255.255.255.192 | salto 64",
            "255.255.255.128 | salto 128",
            "255.255.255.224 | salto 32",
            "255.255.255.240 | salto 16"
        ],
        ans: 0,
        exp: "PASO 1: Convertir IP binaria a decimal. 11001000(200).10101000(168).00010110(22).00000010(2).\n" +
            "PASO 2: Determinar bits necesarios para 4 subredes. 2^n >= 4 -> n = 2 bits prestados.\n" +
            "PASO 3: Nueva máscara. Clase C base es /24. 24 + 2 = /26. En decimal: 255.255.255.192.\n" +
            "PASO 4: Calcular Blocksize (salto). 256 - 192 = 64.\n" +
            "PASO 5: Definir subredes. .0, .64, .128, .192."
    },


    {
        profe: true,
        unit: "IPv4",
        diff: "medium",
        q: "La IP 10.50.1.1 es:",
        opts: ["Clase A Pública", "Clase C Privada", "Clase A Privada", "Clase B Reservada"],
        ans: 2,
        exp: "PASO 1: Identificar el primer octeto. El número 10 pertenece al rango de Clase A (1-127).\n" +
            "PASO 2: Verificar estándares RFC 1918. El rango 10.0.0.0 hasta 10.255.255.255 está reservado para uso privado.\n" +
            "RESULTADO: Clase A Privada."
    },

    {
        profe: true,
        unit: "Subnetting",
        diff: "medium",
        q: "IP 60.168.25.3/29 → máscara y hosts",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Máscara (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Hosts útiles</td>
    <td colspan="4"><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "255.255.255.248 | 6 hosts",
            "255.255.255.240 | 14 hosts",
            "255.255.255.252 | 2 hosts",
            "255.255.255.224 | 30 hosts"
        ],
        ans: 0,
        exp: "PASO 1: Calcular máscara /29. Son 29 bits de red. El último octeto tiene 5 bits de red (11111000).\n" +
            "PASO 2: Conversión decimal. 128+64+32+16+8 = 248. Máscara: 255.255.255.248.\n" +
            "PASO 3: Calcular hosts. Bits de host = 32 - 29 = 3 bits.\n" +
            "PASO 4: Fórmula de hosts útiles. 2^3 - 2 = 8 - 2 = 6 hosts.\n" +
            "RESULTADO: 255.255.255.248 y 6 hosts útiles."
    },

    {
        profe: true,
        unit: "Subnetting",
        diff: "hard",

        q: "IP 11001000.10101000.00010110.00000010 → 4 subredes. Completa el desarrollo.",

        extra: `
    <div class="bloque-ejercicio">

      <h4>Máscara</h4>
      <input>

      <h4>Blocksize</h4>
      <input>

      <h4>Subredes</h4>

      <table class="subnet-table">
        <tr>
          <th>#</th><th>Subred</th><th>Primera IP</th><th>Última IP</th><th>Broadcast</th>
        </tr>

        <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
        <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>

      </table>

    </div>
  `,

        opts: [
            "255.255.255.192 | salto 64",
            "255.255.255.128 | salto 128",
            "255.255.255.224 | salto 32",
            "255.255.255.240 | salto 16"
        ],

        ans: 0,

        exp: "Paso 1: convertir IP\n11001000 = 200\n10101000 = 168\n00010110 = 22\n00000010 = 2\n→ 200.168.22.2\n\nPaso 2: subredes necesarias\n4 → 2^2 → se usan 2 bits\n\nPaso 3: máscara\nClase C (/24)\n→ /26\n→ 255.255.255.192\n\nPaso 4: blocksize\n256 - 192 = 64\n\nPaso 5: subredes\n200.168.22.0\n200.168.22.64\n200.168.22.128\n200.168.22.192\n EN DETALLE PASO 1: Convertir IP a decimal -> 200.168.22.2 (Clase C).\n" +
            "PASO 2: Determinar bits para 4 subredes. 2^n >= 4 -> n=2 bits prestados.\n" +
            "PASO 3: Nueva máscara. /24 + 2 = /26. El último octeto es 11000000 = 192.\n" +
            "PASO 4: Calcular Blocksize. 256 - 192 = 64. Los saltos son de 64 en 64.\n" +
            "PASO 5: Rango de subredes. .0, .64, .128, .192."
    },

    {
        profe: true,
        unit: "Redes",
        diff: "easy",
        q: "¿Qué institución desarrolla estándares como HTML?",
        opts: ["IANA", "IEEE", "W3C", "ISO"],
        ans: 2,
        exp: "W3C crea estándares web como HTML, CSS y protocolos relacionados."
    },

    //POSIBLES DE LA PRUEBA

    {
        profe: true,
        unit: "IPv6",
        diff: "easy",
        q: "¿Cuántos bits tiene una dirección IPv6?",
        opts: ["64 bits", "128 bits", "48 bits", "256 bits"],
        ans: 1,
        exp: "IPv6 tiene 128 bits, mucho más que IPv4 (32 bits).\n  A diferencia de IPv4 que utiliza 32 bits, el protocolo IPv6 emplea una longitud de 128 bits binarios. Esta estructura se organiza en 8 hextetos de 16 bits cada uno, permitiendo un espacio de direccionamiento masivo de aproximadamente 340 sextillones de direcciones únicas."
    },

    {
        profe: true,
        unit: "IPv4",
        diff: "medium",
        q: "La IP 10.50.1.1 es:",
        opts: ["Clase A Pública", "Clase C Privada", "Clase A Privada", "Clase B Reservada"],
        ans: 2,
        exp: "10.0.0.0 – 10.255.255.255 es rango privado clase A.\n Esta dirección pertenece a la Clase A porque su primer octeto (10) se encuentra en el rango de 1 a 127. Según el estándar RFC 1918, el bloque completo que inicia con 10 está reservado exclusivamente para redes privadas, lo que invalida la opción de que sea pública."
    },

    {
        profe: true,
        unit: "Subnetting",
        diff: "medium",
        q: "El resultado de un AND entre IP y máscara es:",
        opts: ["Gateway", "Broadcast", "Primera IP", "Dirección de red"],
        ans: 3,
        exp: "El AND elimina los bits de host y deja la red."
    },

    {
        profe: true,
        unit: "Subnetting",
        diff: "medium",
        q: "¿Cuántos hosts útiles tiene una red /26?",
        opts: ["64", "62", "30", "126"],
        ans: 1,
        exp: "2^(32-26)=64 → 64-2=62 hosts útiles.\n La operación lógica AND a nivel de bits compara la dirección IP con su máscara de subred. Dado que la máscara tiene bits en '1' para la red y '0' para el host, el resultado 'limpia' la parte de host, dejando únicamente los bits que identifican la dirección de red original."
    },

    {
        profe: true,
        unit: "Comandos",
        diff: "easy",
        q: "Comando para probar conectividad ICMP:",
        opts: ["nslookup", "netstat", "ping", "nmap"],
        ans: 2,
        exp: "ping envía paquetes ICMP para verificar conexión.\n El comando ping utiliza el protocolo ICMP (Internet Control Message Protocol) enviando paquetes 'Echo Request' hacia una dirección IP de destino. Si el host está activo y no hay bloqueos, este responde con un 'Echo Reply', lo que permite verificar la disponibilidad de la ruta y medir los tiempos de latencia."
    },

    {
        profe: true,
        unit: "Redes",
        diff: "medium",
        q: "Ventaja de CIDR/VLSM:",
        opts: [
            "Redes más rápidas",
            "Evita colisiones",
            "Uso eficiente de IPs",
            "No usa routers"
        ],
        ans: 2,
        exp: "Permite asignar IPs según necesidad sin desperdicio."
    },

    {
        profe: true,
        unit: "Linux",
        diff: "medium",
        q: "Archivo para configurar IP en Debian:",
        opts: [
            "nano /etc/network/interfaces",
            "nano /etc/dhcp/dhclient.conf",
            "nano /etc/sysconfig/network",
            "nano /etc/hostname"
        ],
        ans: 0,
        exp: "Ese archivo controla la configuración de red en Debian.\n PASO 1: Identificar la distribución. En Debian/Ubuntu, la configuración persistente de interfaces se maneja en /etc/network/.\n" +
            "PASO 2: Localizar archivo. El archivo 'interfaces' define el direccionamiento estático (address, netmask, gateway) o dinámico (dhcp).\n" +
            "RESULTADO: /etc/network/interfaces"
    },

    {
        profe: true,
        unit: "Linux",
        diff: "easy",
        q: "Comando para ver IPs y MAC:",
        opts: ["ip route show", "ip addr show", "systemctl status", "hostname -I"],
        ans: 1,
        exp: "ip addr show muestra interfaces completas (IP + MAC).\n El comando 'ip addr show' (o su abreviatura 'ip a') despliega la configuración de todas las interfaces de red. Para cada interfaz, muestra la dirección IPv4 e IPv6 asociada, así como la dirección física o MAC (etiquetada como link/ether), permitiendo verificar el estado de enlace y los parámetros de capa 2 y 3"
    },

    {
        profe: true,
        unit: "Redes",
        diff: "medium",
        q: "Error cuando redes se cruzan:",
        opts: ["Packet Loss", "Latency", "Overlap", "DNS"],
        ans: 2,
        exp: "Overlap ocurre cuando dos redes usan el mismo rango.\n El traslape o 'Overlap' ocurre cuando se asignan rangos de direcciones IP que se superponen entre sí en diferentes interfaces o segmentos de una red. Esto genera una ambigüedad en la tabla de enrutamiento, ya que el router no puede determinar con precisión hacia qué destino enviar los paquetes, provocando fallos de conectividad y conflictos de direccionamiento."
    },

    {
        profe: true,
        unit: "Servicios",
        diff: "easy",
        q: "Función de DNS:",
        opts: [
            "Asignar máscaras",
            "Traducir nombres a IP",
            "Filtrar tráfico",
            "Conectar LAN"
        ],
        ans: 1,
        exp: "DNS convierte dominios en direcciones IP.\n El Sistema de Nombres de Dominio (DNS) actúa como el directorio de Internet. Su función principal es la resolución de nombres, permitiendo que los usuarios utilicen nombres de dominio legibles (como google.com) en lugar de tener que recordar direcciones IP numéricas. Cuando se realiza una consulta, el servidor DNS busca en su base de datos el registro correspondiente y devuelve la dirección IP necesaria para establecer la conexión."
    },

    {
        profe: true,
        unit: "Linux",
        diff: "easy",
        q: "apt-get update sirve para:",
        opts: [
            "Actualizar programas",
            "Instalar kernel",
            "Actualizar repositorios",
            "Reiniciar red"
        ],
        ans: 2,
        exp: "Sincroniza la lista de paquetes disponibles.\n El comando 'apt-get update' no instala ni actualiza software per se, sino que descarga y sincroniza los índices de los repositorios configurados en el sistema. Esto asegura que el gestor de paquetes conozca las versiones más recientes disponibles y sus dependencias antes de realizar una instalación o una actualización real con 'upgrade'."
    },

    {
        profe: true,
        unit: "OSI",
        diff: "easy",
        q: "MAC pertenece a:",
        opts: [
            "Capa 1",
            "Capa 2",
            "Capa 3",
            "Capa 4"
        ],
        ans: 1,
        exp: "La MAC es de la capa de enlace (capa 2).\n  La dirección MAC (Media Access Control) opera en la Capa 2 del modelo OSI, conocida como la Capa de Enlace de Datos. Es un identificador físico único grabado en el hardware de la interfaz de red (NIC) que permite la comunicación local entre dispositivos dentro de un mismo segmento de red o dominio de difusión."
    },


    {
        profe: true,
        unit: "Linux",
        diff: "easy",
        q: "Reiniciar red en Debian:",
        opts: [
            "apt install networking",
            "ifconfig up",
            "systemctl restart networking",
            "reboot /all"
        ],
        ans: 2,
        exp: "Ese comando reinicia el servicio de red.\n En distribuciones modernas basadas en systemd como Debian, el comando 'systemctl restart networking' detiene e inicia nuevamente el demonio encargado de gestionar las interfaces. Esto aplica los cambios realizados en archivos de configuración como /etc/network/interfaces sin necesidad de reiniciar el equipo completo."
    },
    // ==================== VLSM ====================

    {
        profe: true,
        unit: "VLSM",
        diff: "hard",
        case: "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
        q: "VLSM: Red base 192.168.100.0/24 → Lab (50), WiFi (25), Oficina (5)",

        extra: `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Lab (50)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>WiFi (25)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Oficina (5)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
    </table>
  `,

        opts: [
            "Lab: .0/26 (1-62), WiFi: .64/27 (65-94), Oficina: .96/29 (97-102)",
    "Lab: .0/25 (1-126), WiFi: .128/26 (129-190), Oficina: .192/28 (193-206)",
    "Lab: .0/26 (1-63), WiFi: .64/27 (65-95), Oficina: .96/29 (97-103)",
    "Lab: .0/26 (1-62), WiFi: .63/27 (64-94), Oficina: .95/29 (96-101)"
        ],

        ans: 0,

        exp: "PASO 1: Ordenar de mayor a menor\n50 → 25 → 5\n\nPASO 2: Calcular máscaras\n50 → /26 → 64 IP → 62 host\n25 → /27 → 32 IP → 30 host\n5 → /29 → 8 IP → 6 host\n\nPASO 3: Asignar desde la red base\n\nSUBRED 1 (50 host)\nRed: 192.168.100.0\nPrimera: 192.168.100.1\nÚltima: 192.168.100.62\nBroadcast: 192.168.100.63\n\nSUBRED 2 (25 host)\nRed: 192.168.100.64\nPrimera: 192.168.100.65\nÚltima: 192.168.100.94\nBroadcast: 192.168.100.95\n\nSUBRED 3 (5 host)\nRed: 192.168.100.96\nPrimera: 192.168.100.97\nÚltima: 192.168.100.102\nBroadcast: 192.168.100.103"
    },

    {
        profe: true,
        unit: "VLSM",
        diff: "hard",
        case: "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
        q: "VLSM: Red base 172.20.10.0/24 → Ventas (60), RRHH (20), Enlace (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Hosts</th>
    <th>n (bits)</th>
    <th>Prefijo</th>
    <th>Bloque</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Ventas</td>
    <td>60</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>RRHH</td>
    <td>20</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace</td>
    <td>2</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Ventas (60)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>RRHH (20)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["Ventas: .0/26 (1-62), RRHH: .64/27 (65-94), Enlace: .96/30 (97-98)",
    "Ventas: .0/26 (1-63), RRHH: .64/27 (65-95), Enlace: .96/30 (97-99)",
    "Ventas: .0/25 (1-126), RRHH: .128/26 (129-190), Enlace: .192/30 (193-194)",
    "Ventas: .0/26 (1-62), RRHH: .63/27 (64-94), Enlace: .95/30 (96-97)"],
        ans: 0,
        exp: "PASO 1: Ordenar\n60 → 20 → 2\n\nPASO 2: Máscaras\n60 → /26 → 62 host\n20 → /27 → 30 host\n2 → /30 → 2 host\n\nPASO 3: Asignación\n\nVentas (60)\nRed: 172.20.10.0\nPrimera: 172.20.10.1\nÚltima: 172.20.10.62\nBroadcast: 172.20.10.63\n\nRRHH (20)\nRed: 172.20.10.64\nPrimera: 172.20.10.65\nÚltima: 172.20.10.94\nBroadcast: 172.20.10.95\n\nEnlace (2)\nRed: 172.20.10.96\nPrimera: 172.20.10.97\nÚltima: 172.20.10.98\nBroadcast: 172.20.10.99"
    },

    // ==================== NO-PROFE (ESTUDIANTE) ====================

    {
        profe: false,
        unit: "Direccionamiento IPv6",
        diff: "intermedio",
        q: "En la dirección IPv6 D46C::B:98:F:C:5, el equivalente en decimal al tercer Hexteto es:",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Pos.</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Hexteto</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "000000000000001010",
            "000000000000000101",
            "101010000000000000",
            "000000000000000000"
        ],
        ans: 3,
        exp: "PASO 1: Identificar hextetos omitidos. La dirección tiene 6 hextetos visibles, por lo que '::' representa dos grupos de ceros.\n" +
            "PASO 2: Expandir la dirección completa: D46C:0000:0000:000B:0098:000F:000C:0005.\n" +
            "PASO 3: Localizar el tercer hexteto, que corresponde a '0000'.\n" +
            "PASO 4: Convertir a binario de 16 bits. El valor hexadecimal 0 equivale a 0000000000000000."
    },


    {
        profe: false,
        unit: "Direccionamiento IPv4",
        diff: "intermedio",
        q: "Al efectuar un AND entre la dirección IPv4 90.10.120.1 y su máscara, el resultado es:",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>AND (resultado)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "11111111.00000000.00000000.00000000",
            "11111111.10101010.00000000.00000000",
            "01011010.00001010.01111000.00000001",
            "01011010.00000000.00000000.00000000"
        ],
        ans: 3,
        exp: "PASO 1: Determinar la máscara por clase. El primer octeto (90) define una Clase A, cuya máscara es 255.0.0.0.\n" +
            "PASO 2: Convertir a binario. IP: 01011010.00001010.01111000.00000001 | Máscara: 11111111.00000000.00000000.00000000.\n" +
            "PASO 3: Aplicar operación lógica AND bit a bit. Solo los bits que son '1' en ambos lados permanecen como '1'.\n" +
            "PASO 4: Resultado final: 01011010.00000000.00000000.00000000."
    },


    {
        profe: false,
        unit: "Direccionamiento IPv6",
        diff: "intermedio",
        q: "Expanda la siguiente dirección IPv6 aplicando Regla #1: ::789D:567F:1",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Pos.</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Hexteto</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "0000:0000:0000:0000:789D:567F:0000:0001",
            "789D:567F:0000:0000:0000:0000:0000:0001",
            "0000:0000:0000:0000:0000:789D:567F:0001",
            "789D:567F:1:0:0:0:0:0"
        ],
        ans: 2,
        exp: "PASO 1: Contar hextetos visibles. Hay 3 (789D, 567F, 1). IPv6 requiere 8 en total.\n" +
            "PASO 2: Calcular ceros faltantes. 8 - 3 = 5 grupos de ceros (0000).\n" +
            "PASO 3: Ubicar la expansión. Como '::' está al inicio, los 5 grupos de ceros van al comienzo.\n" +
            "PASO 4: Completar dígitos. El hexteto '1' se expande a '0001'."
    },


    {
        profe: false,
        unit: "Direccionamiento IPv6",
        diff: "intermedio",
        q: "Expanda la siguiente dirección IPv6 aplicando Regla #1: AA:8711::66DC",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Pos.</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Hexteto</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "00AA:8711:0000:0000:0000:0000:0000:66DC",
            "AA:8711:0000:0000:0000:0000:66DC:0000",
            "00AA:8711:66DC:0000:0000:0000:0000:0000",
            "AA:8711:0:0:0:0:0:66DC"
        ],
        ans: 0,
        exp: "PASO 1: Analizar hextetos actuales. Tenemos 2 al inicio (AA, 8711) y 1 al final (66DC), totalizando 3.\n" +
            "PASO 2: Rellenar la omisión '::'. Faltan 5 hextetos de ceros para completar los 8.\n" +
            "PASO 3: Normalizar a 4 dígitos. El hexteto 'AA' debe escribirse como '00AA'.\n" +
            "RESULTADO: 00AA:8711:0000:0000:0000:0000:0000:66DC."
    },


    {
        profe: false,
        unit: "Direccionamiento IPv6",
        diff: "intermedio",
        q: "Comprima la siguiente dirección IPv6 aplicando Regla #2: 1050:0000:0000:0006:0000:0600:300C:326B",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>1050</td>
    <td>0000</td>
    <td>0000</td>
    <td>0006</td>
    <td>0000</td>
    <td>0600</td>
    <td>300C</td>
    <td>326B</td>
  </tr>
  <tr>
    <td>Regla #1</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "1050:0:0:6:0:600:300C:326B",
            "1050::6:0:600:300C:326B",
            "1050::6::600:300C:326B",
            "1050:0:0:6::600:300C:326B"
        ],
        ans: 1,
        exp: "PASO 1: Eliminar ceros a la izquierda de cada hexteto, resultando en 1050:0:0:6:0:600:300C:326B.\n" +
            "PASO 2: Identificar grupos de ceros consecutivos. Tenemos un grupo de dos ceros (0:0) y uno de un solo cero (0).\n" +
            "PASO 3: Aplicar la regla de la cadena más larga. Se reemplaza el grupo '0:0' por '::'.\n" +
            "PASO 4: Restricción. Solo se puede usar '::' una vez, por lo que el tercer cero individual permanece como ':0:'."
    },

    {
        profe: false,
        unit: "Direccionamiento IPv6",
        diff: "intermedio",
        q: "Comprima la siguiente dirección IPv6 aplicando Regla #2: 4306:0:0:0:0:0:0:C3",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Paso</th>
    <th>1°</th>
    <th>2°</th>
    <th>3°</th>
    <th>4°</th>
    <th>5°</th>
    <th>6°</th>
    <th>7°</th>
    <th>8°</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Original</td>
    <td>4306</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>C3</td>
  </tr>
  <tr>
    <td>Regla #2</td>
    <td colspan="8"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "4306::C3",
            "4306:0:0:0:0:0:0:C3",
            "4306:::C3",
            "4306:C3::"
        ],
        ans: 0,
        exp: "PASO 1: Identificar la secuencia de ceros. Entre los hextetos extremos hay 6 grupos de ceros consecutivos.\n" +
            "PASO 2: Aplicar compresión máxima. La regla permite sustituir cualquier número de grupos de ceros consecutivos por '::'.\n" +
            "RESULTADO: 4306::C3."
    },



    {
    profe: true,
    unit: "Subnetting - Máscara y Hosts",
    diff: "medium",
    case: "GUÍA 1 — Ítem II. Desarrollo\nResponda en la casilla correspondiente. 05 puntos cada una.",
    q: "Se muestra la dirección de red 155.168.25.3/21.\n" +
       "¿Cuál es la Máscara final en decimal punteado y la Cantidad de Hosts que se pueden obtener?",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Concepto</th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Prefijo /21 en binario</td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111111"></td>
    <td><input placeholder="11111000"></td>
    <td><input placeholder="00000000"></td>
  </tr>
  <tr>
    <td>Máscara decimal</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>Bits de host (32 - prefijo)</th>
    <th>Total IPs (2^n)</th>
    <th>Hosts utilizables (2^n - 2)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara: 255.255.248.0 | Hosts: 2046",
        "Máscara: 255.255.240.0 | Hosts: 4094",
        "Máscara: 255.255.255.0 | Hosts: 254",
        "Máscara: 255.255.252.0 | Hosts: 1022"
    ],
    ans: 0,
    exp: "PASO 1: Convertir /21 a binario.\n" +
         "  21 bits en 1 → 11111111.11111111.11111000.00000000\n\n" +
         "PASO 2: Convertir a decimal punteado.\n" +
         "  11111111 = 255\n" +
         "  11111111 = 255\n" +
         "  11111000 = 128+64+32+16+8 = 248\n" +
         "  00000000 = 0\n" +
         "  MÁSCARA FINAL: 255.255.248.0\n\n" +
         "PASO 3: Calcular hosts.\n" +
         "  Bits de host = 32 - 21 = 11\n" +
         "  Total IPs    = 2^11 = 2048\n" +
         "  Hosts útiles = 2048 - 2 = 2046"
},



    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "intermedio",
        q: "Se muestra la dirección de red 10.1.25.30/16. ¿Cuál es la máscara final en decimal punteado y la cantidad de hosts que se pueden obtener?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Máscara (binario)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Máscara (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bits de host</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Hosts útiles (2ⁿ−2)</td>
    <td colspan="4"><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "255.255.0.0 y 65534 hosts",
            "255.0.0.0 y 16777214 hosts",
            "255.255.255.0 y 254 hosts",
            "255.255.248.0 y 2046 hosts"
        ],
        ans: 0,
        exp: "PASO 1: Identificar máscara. Un prefijo /16 indica que los dos primeros octetos son de red, resultando en 255.255.0.0.\n" +
            "PASO 2: Calcular bits de host. 32 bits totales - 16 bits de red = 16 bits para hosts.\n" +
            "PASO 3: Calcular capacidad. 2^16 = 65536 direcciones totales.\n" +
            "PASO 4: Hosts útiles. 65536 - 2 = 65534 hosts."
    },


    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "avanzado",
        q: "La empresa PCS Tech tiene la IP 01000001.10000000.11000011.11111110 en binario y necesita 14 subredes. ¿Cuál es la máscara final?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th></th>
    <th>Octeto 1</th>
    <th>Octeto 2</th>
    <th>Octeto 3</th>
    <th>Octeto 4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP (decimal)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Clase / Prefijo base</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Bits prestados (n)</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Nuevo prefijo</td>
    <td colspan="4"><input></td>
  </tr>
  <tr>
    <td>Máscara final</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "255.255.0.0",
            "255.240.0.0",
            "255.255.240.0",
            "255.255.255.0"
        ],
        ans: 1,
        exp: "PASO 1: Determinar clase. El primer octeto (01000001) es 65 en decimal. Al ser Clase A, su máscara original es /8.\n" +
            "PASO 2: Calcular bits de subred. Para 14 subredes buscamos 2^n >= 14. Con n=4 obtenemos 16 subredes.\n" +
            "PASO 3: Nueva máscara. Sumamos los bits prestados a la máscara base: /8 + 4 = /12.\n" +
            "PASO 4: Convertir a decimal. El segundo octeto de la máscara /12 es 11110000 (240). Resultado: 255.240.0.0."
    },

    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "avanzado",
        q: "Para el problema de PCS Tech, ¿cuál es el blocksize (incremento entre subredes)?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Máscara del octeto afectado</th>
    <th>Blocksize (256 − máscara)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["4", "8", "16", "32"],
        ans: 2,
        exp: "PASO 1: Identificar bits prestados. Del cálculo anterior, se determinó que se necesitan n=4 bits para 14 subredes.\n" +
            "PASO 2: El octeto afectado es el segundo (/12 → 255.240.0.0 → octeto 2 = 240).\n" +
            "PASO 3: Blocksize = 256 - 240 = 16.\n" +
            "RESULTADO: Las subredes saltan de 16 en 16 en el segundo octeto."
    },

    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "avanzado",
        q: "Para el problema de PCS Tech, ¿cuál es el broadcast de la subred 65.0.0.0/12?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red actual</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast (siguiente − 1)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "65.15.255.255",
            "65.0.255.255",
            "65.255.255.255",
            "65.15.0.255"
        ],
        ans: 0,
        exp: "PASO 1: Identificar el siguiente salto. Si el blocksize es 16, la siguiente subred es 65.16.0.0.\n" +
            "PASO 2: Restar una IP a la siguiente red. El broadcast es siempre la IP anterior a la siguiente subred.\n" +
            "PASO 3: Calcular. 65.16.0.0 - 1 = 65.15.255.255."
    },

    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "avanzado",
        q: "Dada la dirección 172.16.0.0/20, ¿cuál es la máscara de subred y la última IP utilizable?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red</th>
    <th>Máscara</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast</th>
    <th>Última IP</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["255.255.240.0 y 172.16.15.254", "255.255.255.0 y 172.16.0.254", "255.240.0.0 y 172.31.255.254", "255.255.240.0 y 172.16.31.254"],
        ans: 0,
        exp: "PASO 1: MÁSCARA (/20): 11111111.11111111.11110000.00000000 = 255.255.240.0.\n" +
            "PASO 2: TAMAÑO DE BLOQUE: 256 - 240 = 16. La red salta de 16 en 16 en el tercer octeto.\n" +
            "PASO 3: Red: 172.16.0.0. Siguiente red: 172.16.16.0.\n" +
            "PASO 4: BROADCAST: 172.16.16.0 - 1 = 172.16.15.255.\n" +
            "PASO 5: ÚLTIMA IP ÚTIL: 172.16.15.254."
    },


    {
        "profe": false,
        "unit": "Subneteo IPv4",
        "diff": "avanzado",
        q: "¿Cuál es el propósito del comando 'ping ::1' en un sistema con IPv6 habilitado?",
        opts: ["Probar la conectividad con el Gateway", "Verificar la pila TCP/IP local (Loopback)", "Escanear dispositivos en la red local", "Configurar una dirección estática"],
        ans: 1,
        exp: "DESARROLLO TÉCNICO:\n" +
            "--------------------------------------------------------------------------\n" +
            "1. IDENTIFICACIÓN: '::1' es la dirección de Loopback en IPv6 (equivalente a 127.0.0.1 en IPv4).\n" +
            "2. FUNCIÓN: Se utiliza para enviar paquetes a la propia interfaz de red del host.\n" +
            "3. OBJETIVO: Confirmar que el software de red y la pila de protocolos están instalados y funcionando correctamente en el dispositivo local.\n" +
            "--------------------------------------------------------------------------"
    },


    {
        profe: false,
        unit: "Subneteo IPv4",
        diff: "avanzado",
        q: "Dada la dirección 172.16.0.0/20, ¿cuál es la máscara de subred y la última IP utilizable?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red</th>
    <th>Máscara</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast</th>
    <th>Última IP</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["255.255.240.0 y 172.16.15.254", "255.255.255.0 y 172.16.0.254", "255.240.0.0 y 172.31.255.254", "255.255.240.0 y 172.16.31.254"],
        ans: 0,
        exp: "PASO 1: MÁSCARA (/20): 11111111.11111111.11110000.00000000 = 255.255.240.0.\n" +
            "PASO 2: TAMAÑO DE BLOQUE: 256 - 240 = 16. La red salta de 16 en 16 en el tercer octeto.\n" +
            "PASO 3: Red: 172.16.0.0. Siguiente red: 172.16.16.0.\n" +
            "PASO 4: BROADCAST: 172.16.16.0 - 1 = 172.16.15.255.\n" +
            "PASO 5: ÚLTIMA IP ÚTIL: 172.16.15.254."
    },


    {
        "profe": false,
        "unit": "Subneteo IPv4",
        "diff": "avanzado",
        q: "En el modelo OSI, ¿qué capa se encarga del direccionamiento físico y la topología de red?",
        opts: ["Capa de Enlace de Datos", "Capa Física", "Capa de Red", "Capa de Transporte"],
        ans: 0,
        exp: "DESARROLLO TÉCNICO:\n" +
            "--------------------------------------------------------------------------\n" +
            "1. CAPA 2 (ENLACE): Maneja el direccionamiento físico mediante direcciones MAC.\n" +
            "2. UNIDAD DE DATOS: Tramas (Frames).\n" +
            "3. COMPONENTES: Switches y NICs operan aquí, gestionando cómo se accede al medio físico y detectando errores de transmisión.\n" +
            "--------------------------------------------------------------------------"
    },


    {
        "profe": false,
        "unit": "Subnetting Básico",
        "diff": "easy",
        "q": "¿Qué es el subneteo (subnetting) de redes?",
        "opts": ["Unir varias redes en una sola", "Dividir una red grande en subredes más pequeñas", "Asignar IPs dinámicas", "Encriptar tráfico"],
        "ans": 1,
        "exp": "PASO 1: Definir el concepto. Es la subdivisión lógica de una red física única.\n" +
            "PASO 2: Identificar objetivos. Se realiza para mejorar la administración, seguridad y rendimiento.\n" +
            "PASO 3: Beneficio clave. Permite reducir los dominios de broadcast, evitando congestión innecesaria."
    },


    {
        "profe": false,
        "unit": "Subnetting Básico",
        "diff": "easy",
        "q": "¿Cuál de los siguientes es un beneficio del subneteo?",
        "opts": ["Aumentar el número total de direcciones IPv4 disponibles", "Contener el tráfico de broadcast dentro de la subred", "Eliminar la necesidad de routers", "Aumentar la latencia de la red"],
        "ans": 1,
        "exp": "PASO 1: Identificar el problema del broadcast. En redes grandes, los mensajes de difusión saturan el ancho de banda.\n" +
            "PASO 2: Aplicar la solución de subneteo. Al segmentar la red, el tráfico de broadcast se queda atrapado en su propia subred.\n" +
            "PASO 3: Resultado técnico. Esto mejora el rendimiento general y la seguridad, evitando que dispositivos ajenos procesen tráfico innecesario."
    },

    {
        "profe": false,
        "unit": "Subnetting Básico",
        "diff": "easy",
        "q": "¿Qué dispositivo es necesario para que dispositivos en diferentes subredes puedan comunicarse?",
        "opts": ["Switch", "Router", "Hub", "Bridge"],
        "ans": 1,
        "exp": "PASO 1: Definir dominios de colisión vs broadcast. Los Switches conectan dispositivos en la misma red local.\n" +
            "PASO 2: Identificar la función de Capa 3. Para salir de una subred hacia otra, se requiere enrutamiento.\n" +
            "PASO 3: Rol del Router. El router actúa como gateway, permitiendo el salto de paquetes entre distintos segmentos lógicos."
    },

    {
        "profe": false,
        "unit": "Subnetting Básico",
        "diff": "easy",
        "q": "¿Cuántos bits tiene una dirección IPv4?",
        "opts": ["16 bits", "32 bits", "64 bits", "128 bits"],
        "ans": 1,
        "exp": "PASO 1: Analizar la estructura decimal. IPv4 se compone de 4 octetos (ej. 192.168.1.1).\n" +
            "PASO 2: Convertir a binario. Cada octeto equivale exactamente a 8 bits.\n" +
            "PASO 3: Cálculo total. 4 octetos × 8 bits = 32 bits totales en la arquitectura de la dirección."
    },

    {
        "profe": false,
        "unit": "Subnetting Básico",
        "diff": "easy",
        "q": "¿Qué es una máscara de subred?",
        "opts": ["Una contraseña para acceder a la red", "Un número que indica qué parte de la IP es red y qué parte es host", "Un tipo de cable de red", "Un protocolo de enrutamiento"],
        "ans": 1,
        "exp": "PASO 1: Definir la función de la máscara. Es un filtro binario que se aplica sobre la dirección IP.\n" +
            "PASO 2: Identificar bits de Red. Los bits '1' en la máscara bloquean la porción que identifica a la red.\n" +
            "PASO 3: Identificar bits de Host. Los bits '0' liberan la porción que identifica a los dispositivos individuales dentro de esa red."
    },

    {
        profe: false,
        unit: "Clase A",
        diff: "hard",
        q: "De la dirección IP 111.189.23.155/8, se necesitan 200 subredes. ¿Cuántos bits se toman prestados y cuál es la nueva máscara?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Subredes requeridas</th>
    <th>2ⁿ ≥ ?</th>
    <th>n (bits)</th>
    <th>Prefijo base</th>
    <th>Nuevo prefijo</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>200</td>
    <td><input></td>
    <td><input></td>
    <td>/8</td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["6 bits, /14", "7 bits, /15", "8 bits, /16", "9 bits, /17"],
        ans: 2,
        exp: "PASO 1: Aplicar 2^n >= subredes. 2^8 = 256 >= 200.\n" +
            "PASO 2: Sumar bits al prefijo original. /8 + 8 bits = /16.\n" +
            "PASO 3: Convertir a decimal. /16 = 255.255.0.0."
    },

    {
        profe: false,
        unit: "Clase A",
        diff: "hard",
        q: "La tienda Zara necesita 6 subredes a partir de la IP 95.168.12.1/8. ¿Cuál es la nueva máscara?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Subredes requeridas</th>
    <th>2ⁿ ≥ ?</th>
    <th>n (bits)</th>
    <th>Prefijo base</th>
    <th>Nuevo prefijo</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>6</td>
    <td><input></td>
    <td><input></td>
    <td>/8</td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["/9 (255.128.0.0)", "/10 (255.192.0.0)", "/11 (255.224.0.0)", "/12 (255.240.0.0)"],
        ans: 2,
        exp: "PASO 1: 2^n >= 6 → n=3.\n" +
            "PASO 2: /8 + 3 = /11.\n" +
            "PASO 3: El segundo octeto con 3 bits encendidos es 224. Máscara: 255.224.0.0."
    },

    // ==================== CLASE B ====================

    {
        profe: false,
        unit: "Clase B",
        diff: "hard",
        q: "Empresa Holfmann (5 LAN + 4 WAN = 9 redes). Con IP 174.18.0.0/16, ¿cuál es la nueva máscara?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Redes requeridas</th>
    <th>2ⁿ ≥ ?</th>
    <th>n (bits)</th>
    <th>Prefijo base</th>
    <th>Nuevo prefijo</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9</td>
    <td><input></td>
    <td><input></td>
    <td>/16</td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["/18", "/19", "/20", "/21"],
        ans: 2,
        exp: "PASO 1: Sumar total de redes necesarias = 9.\n" +
            "PASO 2: 2^n >= 9 → n=4.\n" +
            "PASO 3: /16 + 4 = /20. Decimal: 255.255.240.0."
    },

    // ==================== CLASE C ====================

    {
        profe: false,
        unit: "Clase C",
        diff: "medium",
        q: "De la dirección IP 192.168.25.200/24, se necesitan 7 subredes útiles. ¿Cuántos bits se toman?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Subredes útiles requeridas</th>
    <th>n</th>
    <th>2ⁿ − 2</th>
    <th>¿Suficiente?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>7</td>
    <td>3</td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>7</td>
    <td>4</td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["2", "3", "4", "5"],
        ans: 2,
        exp: "PASO 1: 2^n - 2 >= 7.\n" +
            "PASO 2: 2^4 - 2 = 14.\n" +
            "RESULTADO: 4 bits prestados, máscara /28."
    },

    {
        profe: false,
        unit: "Clase C",
        diff: "medium",
        q: "De la dirección IP 202.180.15.0/24, se necesitan 5 subredes útiles. ¿Cuál es la nueva máscara?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Subredes útiles requeridas</th>
    <th>n</th>
    <th>2ⁿ − 2</th>
    <th>Nuevo prefijo</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>5</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["/26", "/27", "/28", "/29"],
        ans: 1,
        exp: "PASO 1: 2^n - 2 >= 5 → n=3.\n" +
            "PASO 2: /24 + 3 = /27. Decimal: 255.255.255.224."
    },

    // ==================== DIRECCIONES DE RED ====================

    {
        profe: false,
        unit: "Direcciones de Red",
        diff: "medium",
        q: "¿Cuál es la dirección de red de 192.168.5.35 con máscara 255.255.255.240?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Máscara octeto 4</th>
    <th>Blocksize</th>
    <th>Múltiplo ≤ 35</th>
    <th>Dirección de Red</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>240</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["192.168.5.32", "192.168.5.48", "192.168.5.16", "192.168.5.0"],
        ans: 0,
        exp: "PASO 1: Blocksize = 256 - 240 = 16.\n" +
            "PASO 2: Buscar múltiplo de 16 cercano a 35 sin pasarse: 16×2 = 32.\n" +
            "RESULTADO: 192.168.5.32."
    },

    {
        profe: false,
        unit: "Direcciones de Red",
        diff: "hard",
        q: "¿Cuál es la dirección de red de 10.15.200.100 con máscara 255.255.240.0?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Máscara octeto 3</th>
    <th>Blocksize</th>
    <th>Múltiplo ≤ 200</th>
    <th>Dirección de Red</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>240</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["10.15.192.0", "10.15.200.0", "10.15.208.0", "10.15.196.0"],
        ans: 0,
        exp: "PASO 1: Blocksize tercer octeto = 256 - 240 = 16.\n" +
            "PASO 2: Dividir 200 / 16 = 12.5.\n" +
            "PASO 3: Multiplicar entero por bloque: 12 × 16 = 192.\n" +
            "RESULTADO: 10.15.192.0."
    },

    // ==================== BROADCAST ====================

    {
        profe: false,
        unit: "Broadcast",
        diff: "medium",
        q: "Para la subred 192.168.1.32/28, ¿cuál es el broadcast?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red actual</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast (siguiente − 1)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>192.168.1.32</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["192.168.1.32", "192.168.1.47", "192.168.1.48", "192.168.1.63"],
        ans: 1,
        exp: "PASO 1: Blocksize = 16.\n" +
            "PASO 2: Red actual .32 + blocksize 16 = .48 (Siguiente red).\n" +
            "PASO 3: Restar 1 a la siguiente red: .48 - 1 = .47.\n" +
            "RESULTADO: 192.168.1.47."
    },

    {
        profe: false,
        unit: "Broadcast",
        diff: "medium",
        q: "Para la subred 192.168.1.64/26, ¿cuál es el broadcast?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red actual</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast (siguiente − 1)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>192.168.1.64</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["192.168.1.64", "192.168.1.127", "192.168.1.128", "192.168.1.191"],
        ans: 1,
        exp: "PASO 1: Blocksize = 64.\n" +
            "PASO 2: Siguiente red = 64 + 64 = 128.\n" +
            "PASO 3: Broadcast = 128 - 1 = 127.\n" +
            "RESULTADO: 192.168.1.127."
    },

    {
        profe: false,
        unit: "Broadcast",
        diff: "hard",
        q: "Para la subred 172.16.0.0/20, ¿cuál es el broadcast?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red actual</th>
    <th>Blocksize</th>
    <th>Siguiente red</th>
    <th>Broadcast (siguiente − 1)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>172.16.0.0</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["172.16.15.255", "172.16.31.255", "172.16.0.255", "172.16.255.255"],
        ans: 0,
        exp: "PASO 1: Blocksize tercer octeto = 16.\n" +
            "PASO 2: Siguiente red = 172.16.16.0.\n" +
            "PASO 3: Broadcast = 172.16.16.0 - 1 = 172.16.15.255."
    },

    // ==================== RANGOS DE HOSTS ====================

    {
        profe: false,
        unit: "Rangos de Hosts",
        diff: "medium",
        q: "¿Cuál es el rango de hosts válidos para la subred 192.168.1.32/27?",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red</th>
    <th>Blocksize</th>
    <th>Broadcast</th>
    <th>Primera IP</th>
    <th>Última IP</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>192.168.1.32</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["192.168.1.32 - 192.168.1.63", "192.168.1.33 - 192.168.1.62", "192.168.1.1 - 192.168.1.30", "192.168.1.0 - 192.168.1.31"],
        ans: 1,
        exp: "PASO 1: Red .32, Blocksize 32.\n" +
            "PASO 2: Siguiente red .64, Broadcast .63.\n" +
            "PASO 3: Primer host = .32 + 1 = .33. Último host = .63 - 1 = .62.\n" +
            "RESULTADO: .33 al .62."
    },

    // ==================== MÁSCARA PARA 2000 HOSTS ====================

    {
        unit: "Mascara de red",
        diff: "medium",
        q: "Se necesita una subred que soporte 2000 hosts. Determine la máscara en formato decimal y prefijo CIDR",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>n (bits host)</th>
    <th>2ⁿ</th>
    <th>2ⁿ − 2</th>
    <th>¿Suficiente?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>10</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>11</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>Prefijo CIDR</th>
    <th>Máscara decimal</th>
    <th>Total direcciones</th>
    <th>Hosts útiles</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
    `,
        opts: ["/21 y 255.255.248.0",
    "/22 y 255.255.252.0",
    "/20 y 255.255.240.0",
    "/21 y 255.255.255.248"],
        ans: 0,
        exp: "PASO 1: 2^n - 2 >= 2000 → 2^n >= 2002 → n = 11 bits host (2^11 = 2048, 2048-2=2046 hosts)\nPASO 2: bits de red = 32 - 11 = 21 bits → /21\nPASO 3: Máscara decimal: 255.255.248.0"
    },

    // ==================== VLSM PRINCIPAL ====================

    {
        unit: "VLSM",
        diff: "hard",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 10.10.0.0/23 → Planta (200), Oficinas (120), Bodega (60), TI (25), Enlace1 (2), Enlace2 (2), Enlace3 (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Hosts</th>
    <th>n (bits)</th>
    <th>Prefijo</th>
    <th>Bloque</th>
    <th>Máscara</th>
  </tr>
</thead>
<tbody>
  <tr><td>Planta</td><td>200</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Oficinas</td><td>120</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Bodega</td><td>60</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>TI</td><td>25</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace1</td><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace2</td><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace3</td><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>Planta (200)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Oficinas (120)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Bodega (60)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>TI (25)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace1 (2)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace2 (2)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>Enlace3 (2)</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody>
</table>
</div>
    `,
        opts: [
            "Planta: .0.0/24, Oficinas: .1.0/25, Bodega: .1.128/26, TI: .1.192/27, Enlaces: .1.224, .1.228, .1.232 (/30)",
    "Planta: .0.0/24, Oficinas: .0.256/25, Bodega: .1.0/26, TI: .1.64/27, Enlaces: .1.96, .1.100, .1.104 (/30)",
    "Planta: .0.0/24, Oficinas: .1.0/25, Bodega: .1.127/26, TI: .1.191/27, Enlaces: .1.223, .1.227, .1.231 (/30)",
    "Planta: .0.0/23, Oficinas: .1.0/24, Bodega: .1.128/25, TI: .1.192/26, Enlaces: .1.224, .1.228, .1.232 (/30)"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
200 → 120 → 60 → 25 → 2 → 2 → 2
 
PASO 2 — Calcular máscara para cada área:
Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n
 
Planta   (200): 2⁸ − 2 = 254 ✓ → n=8 → prefijo /24 → bloque 256 → máscara 255.255.255.0
Oficinas (120): 2⁷ − 2 = 126 ✓ → n=7 → prefijo /25 → bloque 128 → máscara 255.255.255.128
Bodega    (60): 2⁶ − 2 = 62  ✓ → n=6 → prefijo /26 → bloque 64  → máscara 255.255.255.192
TI        (25): 2⁵ − 2 = 30  ✓ → n=5 → prefijo /27 → bloque 32  → máscara 255.255.255.224
Enlace1    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
Enlace2    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
Enlace3    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
 
PASO 3 — Asignar en orden:
 
Planta:   10.10.0.0/24   → Primera: 10.10.0.1   → Última: 10.10.0.254  → Broadcast: 10.10.0.255
Oficinas: 10.10.1.0/25   → Primera: 10.10.1.1   → Última: 10.10.1.126  → Broadcast: 10.10.1.127
Bodega:   10.10.1.128/26 → Primera: 10.10.1.129 → Última: 10.10.1.190  → Broadcast: 10.10.1.191
TI:       10.10.1.192/27 → Primera: 10.10.1.193 → Última: 10.10.1.222  → Broadcast: 10.10.1.223
Enlace1:  10.10.1.224/30 → Primera: 10.10.1.225 → Última: 10.10.1.226  → Broadcast: 10.10.1.227
Enlace2:  10.10.1.228/30 → Primera: 10.10.1.229 → Última: 10.10.1.230  → Broadcast: 10.10.1.231
Enlace3:  10.10.1.232/30 → Primera: 10.10.1.233 → Última: 10.10.1.234  → Broadcast: 10.10.1.235
 
PASO 4 — Verificar espacio usado:
/24 usa 256 + /25 usa 128 + /26 usa 64 + /27 usa 32 + /30×3 usa 12 = 492 IPs usadas de 512.
Quedan 20 IPs libres desde 10.10.1.236 hasta 10.10.1.255.`
    },

    // ==================== CÁLCULO DE SUBREDES ====================
    {
        "profe": false,
        "unit": "Cálculo de Subredes",
        "diff": "medium",
        "q": "Dada la dirección IP 192.168.1.0/24, ¿cuántos bits se deben 'robar' de la porción de host para obtener al menos 5 subredes útiles?",
        "opts": ["2 bits", "3 bits", "4 bits", "5 bits"],
        "ans": 1,
        "exp": "PASO 1: Aplicar la fórmula $2^n - 2 \\ge$ requerimiento (donde n son bits prestados).\n" +
            "PASO 2: Evaluar $n=2$: $2^2 - 2 = 2$ subredes (No alcanza).\n" +
            "PASO 3: Evaluar $n=3$: $2^3 - 2 = 6$ subredes (Cumple el requerimiento de al menos 5).\n" +
            "PASO 4: Conclusión. Se deben robar 3 bits de la porción de host."
    },

    {
        "profe": false,
        "unit": "Cálculo de Subredes",
        "diff": "medium",
        "q": "¿Cuál es la fórmula para calcular el número de subredes útiles dado n bits prestados?",
        "opts": ["2^n", "2^n - 2", "2^n + 2", "n^2"],
        "ans": 1,
        "exp": "PASO 1: Identificar el total de combinaciones posibles ($2^n$).\n" +
            "PASO 2: Descontar subredes reservadas (red cero y red de broadcast si el equipo lo requiere).\n" +
            "PASO 3: Aplicar estándar clásico. La fórmula establecida para subredes utilizables es $2^n - 2$."
    },

    {
        "profe": false,
        "unit": "Cálculo de Subredes",
        "diff": "medium",
        "q": "¿Cuál es la fórmula para calcular el número de hosts útiles por subred?",
        "opts": ["2^m", "2^m - 2", "2^m + 2", "m^2"],
        "ans": 1,
        "exp": "PASO 1: Identificar m como el número de bits restantes para hosts.\n" +
            "PASO 2: Calcular total de direcciones ($2^m$).\n" +
            "PASO 3: Restar direcciones no asignables. Se resta 2 (la primera IP para la Red y la última para el Broadcast).\n" +
            "PASO 4: Resultado. Hosts útiles = $2^m - 2$."
    },

    {
        "profe": false,
        "unit": "Cálculo de Subredes",
        "diff": "medium",
        "q": "¿Qué dirección se reserva como broadcast en una subred?",
        "opts": ["La primera dirección de la subred", "La última dirección de la subred", "La dirección del gateway", "Cualquier dirección dentro de la subred"],
        "ans": 1,
        "exp": "PASO 1: Entender el propósito del Broadcast (envío a todos).\n" +
            "PASO 2: Identificar posición binaria. Es la dirección donde todos los bits de host están en 1.\n" +
            "PASO 3: Localización física. Corresponde siempre a la última dirección de cada segmento o subred."
    },

    {
        "profe": false,
        "unit": "Cálculo de Subredes",
        "diff": "medium",
        "q": "¿Qué dirección se reserva como red en una subred?",
        "opts": ["La primera dirección de la subred", "La última dirección de la subred", "La dirección del gateway", "Cualquier dirección dentro de la subred"],
        "ans": 0,
        "exp": "PASO 1: Entender el propósito de la dirección de Red (identificador).\n" +
            "PASO 2: Identificar posición binaria. Es la dirección donde todos los bits de host están en 0.\n" +
            "PASO 3: Localización física. Corresponde siempre a la primera dirección del rango de la subred."
    },

    // ==================== MÁSCARAS Y NOTACIÓN CIDR ====================
    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "Una dirección Clase C tiene por defecto máscara 255.255.255.0 (/24). Si se toman prestados 3 bits para subneteo, ¿cuál es la nueva máscara de red?",
        "opts": ["255.255.255.224 (/27)", "255.255.255.240 (/28)", "255.255.255.192 (/26)", "255.255.255.248 (/29)"],
        "ans": 0,
        "exp": "PASO 1: Identificar prefijo base. /24.\n" +
            "PASO 2: Sumar bits prestados. 24 + 3 = /27.\n" +
            "PASO 3: Convertir bits a decimal. Los primeros 3 bits del último octeto encendidos (11100000) valen 128 + 64 + 32 = 224.\n" +
            "PASO 4: Resultado final. 255.255.255.224."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /24?",
        "opts": ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.255"],
        "ans": 1,
        "exp": "PASO 1: Analizar el prefijo. /24 significa que los primeros 24 bits son 1.\n" +
            "PASO 2: Dividir en octetos. (8 bits. 8 bits. 8 bits. 0 bits) = (11111111.11111111.11111111.00000000).\n" +
            "PASO 3: Convertir a decimal. 255.255.255.0."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /16?",
        "opts": ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.255"],
        "ans": 0,
        "exp": "PASO 1: Analizar el prefijo. /16 significa que los primeros 16 bits son 1.\n" +
            "PASO 2: Dividir en octetos. (8 bits. 8 bits. 0 bits. 0 bits).\n" +
            "PASO 3: Convertir a decimal. 255.255.0.0."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /8?",
        "opts": ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.255"],
        "ans": 2,
        "exp": "PASO 1: Analizar el prefijo. /8 significa que solo el primer octeto tiene bits en 1.\n" +
            "PASO 2: Convertir a decimal. (11111111.0.0.0) = 255.0.0.0."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /28?",
        "opts": ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
        "ans": 2,
        "exp": "PASO 1: Identificar bits en el último octeto. /28 es /24 + 4 bits.\n" +
            "PASO 2: Calcular valor de 4 bits (11110000). 128+64+32+16 = 240.\n" +
            "PASO 3: Resultado. 255.255.255.240."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /29?",
        "opts": ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
        "ans": 3,
        "exp": "PASO 1: Identificar bits adicionales. /29 es /24 + 5 bits.\n" +
            "PASO 2: Calcular valor de 5 bits (11111000). 128+64+32+16+8 = 248.\n" +
            "PASO 3: Resultado. 255.255.255.248."
    },

    {
        "profe": false,
        "unit": "Máscaras y CIDR",
        "diff": "medium",
        "q": "¿Qué máscara corresponde a la notación /30?",
        "opts": ["255.255.255.252", "255.255.255.248", "255.255.255.240", "255.255.255.224"],
        "ans": 0,
        "exp": "PASO 1: Identificar bits adicionales. /30 es /24 + 6 bits.\n" +
            "PASO 2: Calcular valor de 6 bits (11111100). 248 + 4 = 252.\n" +
            "PASO 3: Resultado. 255.255.255.252."
    },

    // ==================== BLOCKSIZE Y SALTOS ====================
    {
        "profe": false,
        "unit": "Blocksize",
        "diff": "medium",
        "q": "Para una dirección Clase C con máscara 255.255.255.224, ¿cuál es el valor del bloque (blocksize) o salto entre subredes?",
        "opts": ["16", "32", "64", "128"],
        "ans": 1,
        "exp": "PASO 1: Aplicar fórmula de resta constante. 256 - valor de la máscara.\n" +
            "PASO 2: Sustituir valor. 256 - 224 = 32.\n" +
            "PASO 3: Aplicación técnica. Las subredes irán de 32 en 32 (0, 32, 64, 96...)."
    },

    {
        "profe": false,
        "unit": "Blocksize",
        "diff": "medium",
        "q": "Para una máscara 255.255.255.240, ¿cuál es el blocksize?",
        "opts": ["8", "16", "32", "64"],
        "ans": 1,
        "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
            "PASO 2: 256 - 240 = 16.\n" +
            "PASO 3: Conclusión. El incremento entre subredes es de 16."
    },

    {
        "profe": false,
        "unit": "Blocksize",
        "diff": "medium",
        "q": "Para una máscara 255.255.255.248, ¿cuál es el blocksize?",
        "opts": ["4", "6", "8", "12"],
        "ans": 2,
        "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
            "PASO 2: 256 - 248 = 8.\n" +
            "PASO 3: Conclusión. El incremento entre subredes es de 8."
    },

    {
        "profe": false,
        "unit": "Blocksize",
        "diff": "medium",
        "q": "Para una máscara 255.255.255.192, ¿cuál es el blocksize?",
        "opts": ["32", "64", "128", "16"],
        "ans": 1,
        "exp": "PASO 1: Restar valor del octeto afectado a 256.\n" +
            "PASO 2: 256 - 192 = 64.\n" +
            "PASO 3: Conclusión. El incremento entre subredes es de 64."
    },

    // ==================== HOSTS POR SUBRED ====================
    {
        "profe": false,
        "unit": "Hosts por Subred",
        "diff": "medium",
        "q": "Con una máscara /27 (255.255.255.224) en una red Clase C, ¿cuántos hosts útiles hay por subred?",
        "opts": ["30", "14", "62", "6"],
        "ans": 0,
        "exp": "PASO 1: Calcular bits de host (m). 32 - 27 = 5 bits.\n" +
            "PASO 2: Calcular direcciones totales. $2^5 = 32$.\n" +
            "PASO 3: Restar red y broadcast. 32 - 2 = 30 hosts útiles."
    },

    {
        "profe": false,
        "unit": "Hosts por Subred",
        "diff": "medium",
        "q": "Si una red Clase C se subneteó con máscara 255.255.255.248 (/29), ¿cuántos hosts útiles hay por subred?",
        "opts": ["8", "6", "4", "2"],
        "ans": 1,
        "exp": "PASO 1: Calcular bits de host. 32 - 29 = 3 bits.\n" +
            "PASO 2: Direcciones totales. $2^3 = 8$.\n" +
            "PASO 3: Hosts útiles. 8 - 2 = 6."
    },

    {
        "profe": false,
        "unit": "Hosts por Subred",
        "diff": "medium",
        "q": "Con máscara /28, ¿cuántos hosts útiles por subred?",
        "opts": ["16", "14", "12", "10"],
        "ans": 1,
        "exp": "PASO 1: Bits de host m = 32 - 28 = 4.\n" +
            "PASO 2: $2^4 = 16$.\n" +
            "PASO 3: Hosts útiles = 16 - 2 = 14."
    },

    {
        "profe": false,
        "unit": "Hosts por Subred",
        "diff": "medium",
        "q": "Con máscara /26, ¿cuántos hosts útiles por subred?",
        "opts": ["64", "62", "60", "58"],
        "ans": 1,
        "exp": "PASO 1: Bits de host m = 32 - 26 = 6.\n" +
            "PASO 2: $2^6 = 64$.\n" +
            "PASO 3: Hosts útiles = 64 - 2 = 62."
    },

    {
        "profe": false,
        "unit": "Hosts por Subred",
        "diff": "hard",
        "q": "Con máscara /22 en una red Clase B, ¿cuántos hosts útiles por subred?",
        "opts": ["1022", "2046", "4094", "8190"],
        "ans": 0,
        "exp": "PASO 1: Bits de host m = 32 - 22 = 10.\n" +
            "PASO 2: $2^{10} = 1024$.\n" +
            "PASO 3: Hosts útiles = 1024 - 2 = 1022."
    },

    // ==================== EJERCICIOS CLASE A ====================
    {
        "profe": false,
        "unit": "Clase A",
        "diff": "hard",
        "q": "De la dirección IP 111.189.23.155/8, se necesitan 200 subredes. ¿Cuántos bits se toman prestados y cuál es la nueva máscara?",
        "opts": ["6 bits, /14", "7 bits, /15", "8 bits, /16", "9 bits, /17"],
        "ans": 2,
        "exp": "PASO 1: Aplicar $2^n \\ge$ subredes. $2^8 = 256 \\ge 200$.\n" +
            "PASO 2: Sumar bits al prefijo original. /8 + 8 bits = /16.\n" +
            "PASO 3: Convertir a decimal. /16 = 255.255.0.0."
    },

    {
        "profe": false,
        "unit": "Clase A",
        "diff": "hard",
        "q": "De la dirección IP 96.100.12.33/8, se necesitan 1987 subredes. ¿Cuántos bits se toman prestados?",
        "opts": ["8 bits", "9 bits", "10 bits", "11 bits"],
        "ans": 3,
        "exp": "PASO 1: Evaluar potencias de 2. $2^{10} = 1024$ (No alcanza). $2^{11} = 2048$.\n" +
            "PASO 2: Resultado. Se requieren 11 bits prestados."
    },

    {
        "profe": false,
        "unit": "Clase A",
        "diff": "hard",
        "q": "De la dirección IP 10.0.0.0/8, se necesitan 500 subredes. ¿Cuántos bits se toman?",
        "opts": ["8", "9", "10", "11"],
        "ans": 1,
        "exp": "PASO 1: Evaluar $2^n \\ge 500$.\n" +
            "PASO 2: $2^9 = 512$.\n" +
            "PASO 3: Conclusión. Se toman 9 bits, nueva máscara /17."
    },

    {
        "profe": false,
        "unit": "Clase A",
        "diff": "hard",
        "q": "La tienda Zara necesita 6 subredes a partir de la IP 95.168.12.1/8. ¿Cuál es la nueva máscara?",
        "opts": ["/9 (255.128.0.0)", "/10 (255.192.0.0)", "/11 (255.224.0.0)", "/12 (255.240.0.0)"],
        "ans": 2,
        "exp": "PASO 1: $2^n \\ge 6 \\rightarrow n=3$.\n" +
            "PASO 2: /8 + 3 = /11.\n" +
            "PASO 3: Decimal. El segundo octeto con 3 bits es 224. Máscara: 255.224.0.0."
    },

    {
        "profe": false,
        "unit": "Clase A",
        "diff": "hard",
        "q": "Con la dirección 15.254.3.77/8, se necesitan 19 subredes útiles. ¿Cuántos bits se toman?",
        "opts": ["3", "4", "5", "6"],
        "ans": 2,
        "exp": "PASO 1: Usar fórmula $2^n - 2 \\ge 19$.\n" +
            "PASO 2: $2^4 - 2 = 14$ (Insuficiente).\n" +
            "PASO 3: $2^5 - 2 = 30$ (Correcto).\n" +
            "PASO 4: Resultado. Se toman 5 bits."
    },

    // ==================== EJERCICIOS CLASE B ====================
    {
        "profe": false,
        "unit": "Clase B",
        "diff": "hard",
        "q": "De la dirección IP 165.0.21.98/16, se necesitan 128 subredes. ¿Cuántos bits se toman?",
        "opts": ["6 bits", "7 bits", "8 bits", "9 bits"],
        "ans": 1,
        "exp": "PASO 1: $2^n \\ge 128$.\n" +
            "PASO 2: $2^7 = 128$.\n" +
            "PASO 3: Resultado. 7 bits prestados, nueva máscara /23."
    },

    {
        "profe": false,
        "unit": "Clase B",
        "diff": "hard",
        "q": "Empresa Holfmann (5 LAN + 4 WAN = 9 redes). Con IP 174.18.0.0/16, ¿cuál es la nueva máscara?",
        "opts": ["/18", "/19", "/20", "/21"],
        "ans": 2,
        "exp": "PASO 1: Sumar total de redes necesarias = 9.\n" +
            "PASO 2: $2^n \\ge 9 \\rightarrow n=4$.\n" +
            "PASO 3: /16 + 4 = /20. Decimal: 255.255.240.0."
    },

    {
        "profe": false,
        "unit": "Clase B",
        "diff": "hard",
        "q": "Con la dirección IP 172.16.0.0/16, se necesitan 50 subredes. ¿Cuál es la nueva máscara?",
        "opts": ["/21", "/22", "/23", "/24"],
        "ans": 1,
        "exp": "PASO 1: $2^n \\ge 50 \\rightarrow n=6$.\n" +
            "PASO 2: /16 + 6 = /22. Decimal: 255.255.252.0."
    },

    {
        "profe": false,
        "unit": "Clase B",
        "diff": "hard",
        "q": "Con la dirección IP 130.246.33.109/16, se necesitan 8 subredes útiles. ¿Cuántos bits se toman?",
        "opts": ["2", "3", "4", "5"],
        "ans": 2,
        "exp": "PASO 1: $2^n - 2 \\ge 8$.\n" +
            "PASO 2: $2^3 - 2 = 6$ (Insuficiente).\n" +
            "PASO 3: $2^4 - 2 = 14$.\n" +
            "PASO 4: Resultado. 4 bits."
    },

    // ==================== EJERCICIOS CLASE C ====================
    {
        "profe": false,
        "unit": "Clase C",
        "diff": "medium",
        "q": "De la dirección IP 192.168.25.200/24, se necesitan 7 subredes útiles. ¿Cuántos bits se toman?",
        "opts": ["2", "3", "4", "5"],
        "ans": 2,
        "exp": "PASO 1: $2^n - 2 \\ge 7$.\n" +
            "PASO 2: $2^4 - 2 = 14$.\n" +
            "PASO 3: Resultado. 4 bits prestados, máscara /28."
    },

    {
        "profe": false,
        "unit": "Clase C",
        "diff": "medium",
        "q": "De la dirección IP 202.180.15.0/24, se necesitan 5 subredes útiles. ¿Cuál es la nueva máscara?",
        "opts": ["/26", "/27", "/28", "/29"],
        "ans": 1,
        "exp": "PASO 1: $2^n - 2 \\ge 5 \\rightarrow n=3$.\n" +
            "PASO 2: /24 + 3 = /27. Decimal: 255.255.255.224."
    },

    {
        "profe": false,
        "unit": "Clase C",
        "diff": "medium",
        "q": "De la dirección IP 195.13.83.180/24, se necesitan 257 subredes. ¿Esto es posible?",
        "opts": ["Sí", "Sí, tomando 9 bits", "No, máximo 256 subredes", "No, máximo 254 útiles"],
        "ans": 2,
        "exp": "PASO 1: Analizar bits disponibles. En Clase C solo hay 8 bits de host.\n" +
            "PASO 2: Máximo combinaciones = $2^8 = 256$.\n" +
            "PASO 3: Conclusión. 257 es físicamente imposible."
    },

    {
        "profe": false,
        "unit": "Clase C",
        "diff": "medium",
        "q": "Con la dirección IP 196.189.40.4/24, se necesitan 129 subredes. ¿Es posible?",
        "opts": ["Sí", "Sí, 8 bits", "No, máximo 128 totales", "No, máximo 254"],
        "ans": 2,
        "exp": "PASO 1: Evaluar capacidad con 7 bits prestados = $2^7 = 128$.\n" +
            "PASO 2: Si usamos 8 bits, no quedan bits para hosts.\n" +
            "PASO 3: Conclusión. No es posible obtener 129 subredes con hosts válidos."
    },

    // ==================== DIRECCIONES DE RED ====================
    {
        "profe": false,
        "unit": "Direcciones de Red",
        "diff": "medium",
        "q": "¿Cuál es la dirección de red de 192.68.25.200 con máscara 255.255.255.0?",
        "opts": ["192.68.25.0", "192.68.0.0", "192.68.25.200", "192.68.25.255"],
        "ans": 0,
        "exp": "PASO 1: Aplicar máscara /24. Los primeros 3 octetos no cambian.\n" +
            "PASO 2: Poner el último octeto en 0.\n" +
            "PASO 3: Resultado. 192.68.25.0."
    },

    {
        "profe": false,
        "unit": "Direcciones de Red",
        "diff": "medium",
        "q": "¿Cuál es la dirección de red de 192.168.5.35 con máscara 255.255.255.240?",
        "opts": ["192.168.5.32", "192.168.5.48", "192.168.5.16", "192.168.5.0"],
        "ans": 0,
        "exp": "PASO 1: Blocksize = 256 - 240 = 16.\n" +
            "PASO 2: Buscar múltiplo de 16 cercano a 35 sin pasarse.\n" +
            "PASO 3: $16 \\times 2 = 32$.\n" +
            "PASO 4: Resultado. 192.168.5.32."
    },

    {
        "profe": false,
        "unit": "Direcciones de Red",
        "diff": "hard",
        "q": "¿Cuál es la dirección de red de 172.25.100.50 con máscara 255.255.252.0?",
        "opts": ["172.25.96.0", "172.25.100.0", "172.25.104.0", "172.25.98.0"],
        "ans": 1,
        "exp": "PASO 1: Blocksize en el tercer octeto = 256 - 252 = 4.\n" +
            "PASO 2: Buscar múltiplo de 4 cercano a 100.\n" +
            "PASO 3: 100 es múltiplo exacto ($4 \\times 25 = 100$).\n" +
            "PASO 4: Resultado. 172.25.100.0."
    },

    {
        "profe": false,
        "unit": "Direcciones de Red",
        "diff": "hard",
        "q": "¿Cuál es la dirección de red de 10.15.200.100 con máscara 255.255.240.0?",
        "opts": ["10.15.192.0", "10.15.200.0", "10.15.208.0", "10.15.196.0"],
        "ans": 0,
        "exp": "PASO 1: Blocksize tercer octeto = 256 - 240 = 16.\n" +
            "PASO 2: Dividir 200 / 16 = 12.5.\n" +
            "PASO 3: Multiplicar entero por bloque: $12 \\times 16 = 192$.\n" +
            "PASO 4: Resultado. 10.15.192.0."
    },

    // ==================== BROADCAST ====================
    {
        "profe": false,
        "unit": "Broadcast",
        "diff": "medium",
        "q": "Para la subred 192.168.1.32/28, ¿cuál es el broadcast?",
        "opts": ["192.168.1.32", "192.168.1.47", "192.168.1.48", "192.168.1.63"],
        "ans": 1,
        "exp": "PASO 1: Blocksize = 16.\n" +
            "PASO 2: Red actual .32 + blocksize 16 = .48 (Siguiente red).\n" +
            "PASO 3: Restar 1 a la siguiente red: .48 - 1 = .47.\n" +
            "PASO 4: Resultado. 192.168.1.47."
    },

    {
        "profe": false,
        "unit": "Broadcast",
        "diff": "medium",
        "q": "Para la subred 192.168.1.64/26, ¿cuál es el broadcast?",
        "opts": ["192.168.1.64", "192.168.1.127", "192.168.1.128", "192.168.1.191"],
        "ans": 1,
        "exp": "PASO 1: Blocksize = 64.\n" +
            "PASO 2: Siguiente red = 64 + 64 = 128.\n" +
            "PASO 3: Broadcast = 128 - 1 = 127.\n" +
            "PASO 4: Resultado. 192.168.1.127."
    },

    {
        "profe": false,
        "unit": "Broadcast",
        "diff": "hard",
        "q": "Para la subred 172.16.0.0/20, ¿cuál es el broadcast?",
        "opts": ["172.16.15.255", "172.16.31.255", "172.16.0.255", "172.16.255.255"],
        "ans": 0,
        "exp": "PASO 1: Blocksize tercer octeto = 16.\n" +
            "PASO 2: Siguiente red = 172.16.16.0.\n" +
            "PASO 3: Restar 1: 172.16.15.255."
    },

    // ==================== RANGOS DE HOSTS ====================
    {
        "profe": false,
        "unit": "Rangos de Hosts",
        "diff": "medium",
        "q": "¿Cuál es el rango de hosts válidos para la subred 192.168.1.32/27?",
        "opts": ["192.168.1.32 - 192.168.1.63", "192.168.1.33 - 192.168.1.62", "192.168.1.1 - 192.168.1.30", "192.168.1.0 - 192.168.1.31"],
        "ans": 1,
        "exp": "PASO 1: Red .32, Blocksize 32.\n" +
            "PASO 2: Siguiente red .64, Broadcast .63.\n" +
            "PASO 3: Primer host = .32 + 1 = .33. Último host = .63 - 1 = .62.\n" +
            "PASO 4: Rango. .33 al .62."
    },

    {
        "profe": false,
        "unit": "Rangos de Hosts",
        "diff": "medium",
        "q": "¿Cuál es el rango de hosts para la subred 10.0.0.0/24?",
        "opts": ["10.0.0.0 - 10.0.0.255", "10.0.0.1 - 10.0.0.254", "10.0.0.0 - 10.0.0.254", "10.0.0.1 - 10.0.0.255"],
        "ans": 1,
        "exp": "PASO 1: Red .0, Broadcast .255.\n" +
            "PASO 2: Primer host utilizable .1.\n" +
            "PASO 3: Último host utilizable .254.\n" +
            "PASO 4: Resultado. 10.0.0.1 a 10.0.0.254."
    },


    // ==================== SISTEMA BINARIO ====================
    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "easy",
        "q": "¿Cuál es la base del sistema binario?",
        "opts": ["10", "2", "16", "8"],
        "ans": 1,
        "exp": "PASO 1: Identificar el número de símbolos. El prefijo 'bi' indica dos elementos.\n" +
            "PASO 2: Definir dígitos. Se utilizan exclusivamente el 0 (apagado) y 1 (encendido).\n" +
            "PASO 3: Conclusión. La base es 2."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "easy",
        "q": "¿Qué número decimal representa el binario 1010?",
        "opts": ["8", "9", "10", "12"],
        "ans": 2,
        "exp": "PASO 1: Asignar valores de posición (de derecha a izquierda): $2^0=1, 2^1=2, 2^2=4, 2^3=8$.\n" +
            "PASO 2: Multiplicar dígito por valor: ($1 \\times 8$) + ($0 \\times 4$) + ($1 \\times 2$) + ($0 \\times 1$).\n" +
            "PASO 3: Sumar resultados: $8 + 0 + 2 + 0 = 10$."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "Convierte el número decimal 28 a binario.",
        "opts": ["11100", "11010", "11110", "10110"],
        "ans": 0,
        "exp": "PASO 1: Divisiones sucesivas por 2. 28/2 = 14 (r:0); 14/2 = 7 (r:0); 7/2 = 3 (r:1); 3/2 = 1 (r:1); 1/2 = 0 (r:1).\n" +
            "PASO 2: Ordenar residuos de abajo hacia arriba.\n" +
            "PASO 3: Resultado: 11100."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "Convierte el número decimal 71 a binario.",
        "opts": ["1000111", "1001111", "1010111", "1100111"],
        "ans": 0,
        "exp": "PASO 1: Divisiones por 2: 71/2 (r:1), 35/2 (r:1), 17/2 (r:1), 8/2 (r:0), 4/2 (r:0), 2/2 (r:0), 1/2 (r:1).\n" +
            "PASO 2: Invertir el orden de los residuos.\n" +
            "PASO 3: Resultado final: 1000111."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "Convierte el número decimal 255 a binario.",
        "opts": ["11111111", "11111110", "11111000", "11110000"],
        "ans": 0,
        "exp": "PASO 1: Identificar valor máximo de un octeto. $2^8 - 1 = 255$.\n" +
            "PASO 2: Verificar bits encendidos. 128+64+32+16+8+4+2+1 = 255.\n" +
            "PASO 3: Representación. Los 8 bits están en 1 (11111111)."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "Convierte el binario 11000000 a decimal.",
        "opts": ["128", "192", "224", "240"],
        "ans": 1,
        "exp": "PASO 1: Identificar bits encendidos. Bit 1 (128) y Bit 2 (64).\n" +
            "PASO 2: Realizar la suma decimal: $128 + 64$.\n" +
            "PASO 3: Resultado: 192."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "Convierte el binario 11100000 a decimal.",
        "opts": ["192", "224", "240", "248"],
        "ans": 1,
        "exp": "PASO 1: Identificar bits encendidos. Posiciones 128, 64 y 32.\n" +
            "PASO 2: Realizar la suma: $128 + 64 + 32$.\n" +
            "PASO 3: Resultado: 224."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "medium",
        "q": "¿Qué operación lógica binaria produce '1' solo si ambas entradas son '1'?",
        "opts": ["OR", "AND", "XOR", "NOT"],
        "ans": 1,
        "exp": "PASO 1: Revisar tablas de verdad. La operación AND requiere coincidencia total para ser verdadera.\n" +
            "PASO 2: Aplicación en redes. Se usa para aplicar la máscara a una IP y obtener la dirección de red.\n" +
            "PASO 3: Regla: 1 AND 1 = 1; cualquier otra combinación = 0."
    },

    {
        "profe": false,
        "unit": "Sistema Binario",
        "diff": "easy",
        "q": "¿Qué es un bit?",
        "opts": ["Un byte de información", "Un dígito binario (0 o 1)", "Un paquete de datos", "Un protocolo de red"],
        "ans": 1,
        "exp": "PASO 1: Origen del término. Acrónimo de 'Binary Digit'.\n" +
            "PASO 2: Definir magnitud. Es la unidad de medida de información más pequeña.\n" +
            "PASO 3: Estados. Solo puede representar dos estados lógicos: 0 o 1."
    },

    // ==================== IPv6 - CONCEPTOS BÁSICOS ====================
    {
        "profe": false,
        "unit": "IPv6",
        "diff": "easy",
        "q": "¿Cuántos bits tiene una dirección IPv6?",
        "opts": ["32 bits", "64 bits", "128 bits", "256 bits"],
        "ans": 2,
        "exp": "PASO 1: Comparar con IPv4 (32 bits). IPv6 fue diseñado para un espacio de direccionamiento masivo.\n" +
            "PASO 2: Estructura. Se compone de 128 bits totales.\n" +
            "PASO 3: Organización. Divididos en 8 grupos (hextetos) de 16 bits cada uno."
    },

    {
        "profe": false,
        "unit": "IPv6",
        "diff": "easy",
        "q": "¿Qué tipo de dirección IPv6 reemplaza al broadcast de IPv4?",
        "opts": ["Unicast", "Multicast", "Anycast", "Loopback"],
        "ans": 1,
        "exp": "PASO 1: Identificar ineficiencia del broadcast. Envía tráfico a todos, incluso si no lo requieren.\n" +
            "PASO 2: Nueva gestión en IPv6. Se eliminó el broadcast.\n" +
            "PASO 3: Solución. Se usa Multicast para dirigir el tráfico solo a grupos de interfaces interesadas."
    },

    {
        "profe": false,
        "unit": "IPv6",
        "diff": "easy",
        "q": "¿Qué es un hexteto en IPv6?",
        "opts": ["Un grupo de 8 bits", "Un grupo de 16 bits", "Un grupo de 32 bits", "Un grupo de 64 bits"],
        "ans": 1,
        "exp": "PASO 1: Estructura de visualización. IPv6 se escribe en hexadecimal.\n" +
            "PASO 2: Segmentación. La dirección se divide en 8 partes separadas por dos puntos.\n" +
            "PASO 3: Composición de cada parte. Cada una contiene 16 bits (4 caracteres hexadecimales)."
    },

    {
        "profe": false,
        "unit": "IPv6",
        "diff": "easy",
        "q": "¿Cuál es una característica principal de IPv6 respecto a seguridad?",
        "opts": ["No incluye seguridad", "Incluye IPsec como parte del protocolo base", "Solo ofrece seguridad con firewall", "Es menos seguro que IPv4"],
        "ans": 1,
        "exp": "PASO 1: Analizar diseño de origen. IPv4 añadió seguridad como un parche posterior.\n" +
            "PASO 2: Integración en IPv6. IPsec (IP Security) es obligatorio en la especificación original.\n" +
            "PASO 3: Ventaja. Permite cifrado y autenticación de extremo a extremo de forma nativa."
    },

    {
        "profe": false,
        "unit": "IPv6",
        "diff": "easy",
        "q": "¿Qué funcionalidad permite IPv6 sin necesidad de servidores DHCP?",
        "opts": ["Autoconfiguración SLAAC", "Multicasting", "Anycast", "Fragmentación"],
        "ans": 0,
        "exp": "PASO 1: Definir SLAAC (Stateless Address Autoconfiguration).\n" +
            "PASO 2: Funcionamiento. El host genera su propia dirección usando el prefijo del router y su MAC (o un ID aleatorio).\n" +
            "PASO 3: Beneficio. Permite conectividad inmediata 'Plug-and-play' sin servidor central."
    },

    // ==================== IPv6 - REGLAS DE COMPRESIÓN ====================
    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "Aplica la regla de compresión #1 (omitir ceros iniciales) a: 2001:0DB8:0000:0000:0000:0000:1428:57AB",
        "opts": ["2001:DB8:0:0:0:0:1428:57AB", "2001:DB8::1428:57AB", "2001:DB8::0:1428:57AB", "2001:DB8:0::1428:57AB"],
        "ans": 0,
        "exp": "PASO 1: Localizar ceros a la izquierda en cada hexteto.\n" +
            "PASO 2: Reducir 0DB8 a DB8 y los grupos 0000 a un único 0.\n" +
            "PASO 3: Resultado. 2001:DB8:0:0:0:0:1428:57AB."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "Aplica la regla de compresión #2 (::) a: 2001:DB8:0:0:0:0:1428:57AB",
        "opts": ["2001:DB8::1428:57AB", "2001:DB8:0::1428:57AB", "2001:DB8::0:1428:57AB", "2001:DB8:0:0::1428:57AB"],
        "ans": 0,
        "exp": "PASO 1: Identificar bloques de ceros consecutivos. Hay cuatro grupos de ceros.\n" +
            "PASO 2: Sustituir la cadena completa por dos puntos dobles (::).\n" +
            "PASO 3: Resultado. 2001:DB8::1428:57AB."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "Aplica regla #1 a: 2001:010F:0ABC:345D:1100:0000:FCD2:00AA",
        "opts": ["2001:10F:ABC:345D:1100:0:FCD2:AA", "2001:10F:0ABC:345D:1100:0:FCD2:AA", "2001:10F:ABC:345D:1100::FCD2:AA", "2001:10F::345D:1100:0:FCD2:AA"],
        "ans": 0,
        "exp": "PASO 1: 010F $\\rightarrow$ 10F; 0ABC $\\rightarrow$ ABC.\n" +
            "PASO 2: 0000 $\\rightarrow$ 0; 00AA $\\rightarrow$ AA.\n" +
            "PASO 3: Mantener ceros finales (1100 no cambia). Resultado: 2001:10F:ABC:345D:1100:0:FCD2:AA."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "hard",
        "q": "Aplica ambas reglas a: 3FFE:0000:0000:0000:1245:0098:3210:0002",
        "opts": ["3FFE::1245:98:3210:2", "3FFE:0:0:0:1245:98:3210:2", "3FFE::1245:0098:3210:0002", "3FFE:0:0:0:1245:0098:3210:2"],
        "ans": 0,
        "exp": "PASO 1: Regla 1 (ceros iniciales): 3FFE:0:0:0:1245:98:3210:2.\n" +
            "PASO 2: Regla 2 (::): Colapsar los tres ceros consecutivos.\n" +
            "PASO 3: Resultado final: 3FFE::1245:98:3210:2."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "hard",
        "q": "Aplica ambas reglas a: FF01:0000:0000:0000:0000:0000:0000:0101",
        "opts": ["FF01::101", "FF01:0:0:0:0:0:0:101", "FF01::1:1", "FF01::101:1"],
        "ans": 0,
        "exp": "PASO 1: Eliminar ceros iniciales en 0101 $\\rightarrow$ 101.\n" +
            "PASO 2: Detectar la cadena más larga de ceros (6 grupos).\n" +
            "PASO 3: Sustituir por ::. Resultado: FF01::101."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "¿Cuál es la representación comprimida de 0:0:0:0:0:0:192.168.44.1?",
        "opts": ["::192.168.44.1", "0:0:0:0:0:0:192.168.44.1", "::C0A8:2C01", "192.168.44.1"],
        "ans": 0,
        "exp": "PASO 1: Agrupar todos los hextetos de valor cero iniciales.\n" +
            "PASO 2: Sustituirlos por :: al principio de la dirección.\n" +
            "PASO 3: Mantener la notación mixta IPv4 al final para compatibilidad. Resultado: ::192.168.44.1."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "¿Cuál de las siguientes es una dirección IPv6 válida comprimida?",
        "opts": ["2001:0db8::1428::57ab", "2001:db8::1428:57ab", "2001:db8:0:0:1428:57ab::", "2001:db8::1428::57ab"],
        "ans": 1,
        "exp": "PASO 1: Verificar la regla del doble colon (::).\n" +
            "PASO 2: Identificar error común. No se puede usar :: más de una vez en la misma dirección.\n" +
            "PASO 3: Validación. 2001:db8::1428:57ab es la única sin ambigüedad."
    },

    {
        "profe": false,
        "unit": "IPv6 Compresión",
        "diff": "medium",
        "q": "¿Qué dirección IPv6 comprimida es equivalente a 2001:0DB8:0000:0000:ABCD:0000:0000:1234?",
        "opts": ["2001:DB8::ABCD:0:0:1234", "2001:DB8:0:0:ABCD::1234", "2001:DB8::ABCD::1234", "2001:DB8:0:0:ABCD:0:0:1234"],
        "ans": 1,
        "exp": "PASO 1: Localizar grupos de ceros. Hay dos cadenas distintas (dos ceros y dos ceros).\n" +
            "PASO 2: Aplicar ::. Solo puedes elegir UNA cadena para colapsar.\n" +
            "PASO 3: Revisión de opciones. La opción B colapsa la segunda cadena correctamente."
    },

    // ==================== TIPOS DE DIRECCIONES IPv6 ====================
    {
        "profe": false,
        "unit": "IPv6 Tipos",
        "diff": "medium",
        "q": "¿Qué tipo de dirección IPv6 identifica de manera única una interfaz?",
        "opts": ["Multicast", "Anycast", "Unicast", "Broadcast"],
        "ans": 2,
        "exp": "PASO 1: Definir Unicast. Comunicación uno a uno.\n" +
            "PASO 2: Propósito. Se utiliza para asignar una dirección global o local única a un dispositivo.\n" +
            "PASO 3: Distinción. A diferencia de Anycast, el paquete llega a una interfaz específica, no a la 'más cercana'."
    },

    {
        "profe": false,
        "unit": "IPv6 Tipos",
        "diff": "medium",
        "q": "¿Qué tipo de dirección IPv6 se envía a un grupo específico de interfaces?",
        "opts": ["Unicast", "Multicast", "Anycast", "Loopback"],
        "ans": 1,
        "exp": "PASO 1: Analizar comunicación grupal. Corresponde al concepto de 'uno a varios'.\n" +
            "PASO 2: Prefijo. Las direcciones Multicast en IPv6 siempre comienzan con FF.\n" +
            "PASO 3: Funcionamiento. Solo los nodos suscritos al grupo procesan el paquete."
    },

    {
        "profe": false,
        "unit": "IPv6 Tipos",
        "diff": "medium",
        "q": "¿Qué dirección IPv6 es equivalente a loopback (127.0.0.1) en IPv4?",
        "opts": ["::1", "::0", "0:0:0:0:0:0:0:1", "Ambas A y C"],
        "ans": 3,
        "exp": "PASO 1: Identificar función de loopback. Probar el stack TCP/IP interno.\n" +
            "PASO 2: Forma expandida. Siete grupos de ceros y el último bit en 1.\n" +
            "PASO 3: Aplicar compresión. Se reduce a ::1. Ambas formas son técnicamente correctas."
    },

    {
        "profe": false,
        "unit": "IPv6 Tipos",
        "diff": "medium",
        "q": "¿Qué dirección IPv6 representa una dirección no especificada?",
        "opts": ["::1", "::0", "0:0:0:0:0:0:0:0", "Ambas B y C"],
        "ans": 3,
        "exp": "PASO 1: Definir uso. Se usa cuando un dispositivo aún no conoce su dirección (ej. en solicitudes DHCP).\n" +
            "PASO 2: Estructura. Todos los bits están en 0.\n" +
            "PASO 3: Compresión. Se representa simplemente como :: (o ::0)."
    },

    // ==================== PREGUNTAS DE REPASO GENERAL ====================
    {
        "profe": false,
        "unit": "Repaso",
        "diff": "medium",
        "q": "¿Qué representa el gateway predeterminado en una subred?",
        "opts": ["La dirección de red", "La dirección de broadcast", "La dirección del router conectado a la subred", "Cualquier dirección de host"],
        "ans": 2,
        "exp": "PASO 1: Identificar salida de tráfico. ¿A dónde va un paquete si no está en mi red?\n" +
            "PASO 2: Función del Router. Es el dispositivo que conoce los caminos externos.\n" +
            "PASO 3: Configuración. El gateway es la IP de la interfaz del router que 'mira' hacia mi subred."
    },

    {
        "profe": false,
        "unit": "Repaso",
        "diff": "medium",
        "q": "¿Por qué se restan 2 direcciones al calcular hosts útiles?",
        "opts": ["Por seguridad", "Por la dirección de red y broadcast", "Por el gateway", "Por el DNS"],
        "ans": 1,
        "exp": "PASO 1: Reservas obligatorias. Cada subred necesita un nombre (Red) y un canal de aviso (Broadcast).\n" +
            "PASO 2: Identificar extremos. La primera IP identifica el segmento; la última envía a todos.\n" +
            "PASO 3: Regla. Ningún host puede usar estas dos direcciones para su interfaz."
    },

    {
        "profe": false,
        "unit": "Repaso",
        "diff": "medium",
        "q": "¿Qué es CIDR?",
        "opts": ["Un protocolo de enrutamiento", "Notación que indica cantidad de bits de red", "Un tipo de cable", "Un sistema operativo"],
        "ans": 1,
        "exp": "PASO 1: Definir siglas. Classless Inter-Domain Routing.\n" +
            "PASO 2: Eliminar clases rígidas (A, B, C). Permite máscaras de longitud variable.\n" +
            "PASO 3: Notación. Se expresa con una barra (/) seguida del número de bits de red (ej. /26)."
    },

    {
        "profe": false,
        "unit": "Repaso",
        "diff": "hard",
        "q": "Si una empresa tiene 4 departamentos y cada uno necesita al menos 50 hosts, ¿qué máscara debe usar como mínimo?",
        "opts": ["/24 (255.255.255.0)", "/25 (255.255.255.128)", "/26 (255.255.255.192)", "/27 (255.255.255.224)"],
        "ans": 2,
        "exp": "PASO 1: Analizar bits de host para 50 dispositivos. $2^5=32$ (insuficiente), $2^6=64$.\n" +
            "PASO 2: Calcular hosts útiles. $64 - 2 = 62$ (cumple para 50).\n" +
            "PASO 3: Determinar máscara. 32 bits totales - 6 bits de host = /26 (255.255.255.192)."
    },
    // ==================== SUBNETING ====================
    {
        intermedio: false, avanzado: false, experto: false, unit: "Subneteo", diff: "easy",
        q: "Cuantas direcciones IP validas para hosts tiene una mascara /24",
        opts: ["254", "256", "255", "253"],
        ans: 0, exp: "/24 = 256 direcciones totales - red - broadcast = 254"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Subneteo", diff: "medium",
        q: "Dada la red 192.168.1.0/26, cual es la mascara de subred",
        opts: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.128"],
        ans: 0, exp: "/26 = 255.255.255.192"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Subneteo", diff: "medium",
        q: "Cuantas subredes se pueden crear con una mascara /27 a partir de una /24",
        opts: ["8", "4", "16", "32"],
        ans: 0, exp: "/27 - /24 = 3 bits, 2^3 = 8 subredes"
    },
    {
        intermedio: false, avanzado: true, experto: false, unit: "Subneteo", diff: "hard",
        q: "Dada la direccion 10.0.0.55/18, cual es la direccion de red",
        opts: ["10.0.0.0", "10.0.64.0", "10.0.32.0", "10.0.16.0"],
        ans: 0, exp: "/18 en 10.x.x.x afecta al tercer octeto, 0.0.0.0/18 = 10.0.0.0"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "CIDR", diff: "easy",
        q: "Que representa /24 en notacion CIDR",
        opts: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.128"],
        ans: 0, exp: "/24 = 255.255.255.0"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "VLSM", diff: "medium",
        q: "Si necesitas una subred con 30 hosts, que mascara es la mas eficiente",
        opts: ["/27", "/26", "/28", "/25"],
        ans: 0, exp: "/27 da 32 direcciones totales, 30 hosts validos"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "Broadcast", diff: "easy",
        q: "Cual es la direccion de broadcast de la red 192.168.1.0/24",
        opts: ["192.168.1.255", "192.168.1.0", "192.168.1.1", "192.168.0.255"],
        ans: 0, exp: "broadcast es la ultima direccion de la red"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Wildcard", diff: "medium",
        q: "Cual es la mascara wildcard para una /26",
        opts: ["0.0.0.63", "0.0.0.31", "0.0.0.127", "0.0.0.15"],
        ans: 0, exp: "wildcard = 255.255.255.255 - mascara"
    },
    {
        intermedio: false, avanzado: true, experto: false, unit: "Superneteo", diff: "hard",
        q: "Para unir 4 redes /24 en una sola superred, que mascara se usa",
        opts: ["/22", "/23", "/21", "/20"],
        ans: 0, exp: "4 redes = 2^2, /24 - 2 = /22"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "IP Privadas", diff: "easy",
        q: "Cual de estas es una direccion IP privada",
        opts: ["10.0.0.1", "8.8.8.8", "1.1.1.1", "9.9.9.9"],
        ans: 0, exp: "10.0.0.0/8 es rango privado"
    },

    // ==================== SISTEMAS OPERATIVOS ====================

    {
        intermedio: false, avanzado: false, experto: false, unit: "Linux", diff: "easy",
        q: "Que comando se usa para listar archivos en Linux",
        opts: ["ls", "dir", "list", "ll"],
        ans: 0, exp: "ls es el comando para listar"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "Linux", diff: "easy",
        q: "Que comando se usa para cambiar permisos en Linux",
        opts: ["chmod", "chown", "chgrp", "perm"],
        ans: 0, exp: "chmod cambia permisos de archivos"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "Linux", diff: "easy",
        q: "Que significa el permiso 755 en un archivo",
        opts: ["rwxr-xr-x", "rwxrwxrwx", "rw-r--r--", "r-xr-xr-x"],
        ans: 0, exp: "7=rwx,5=r-x,5=r-x"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Linux", diff: "medium",
        q: "Que comando mata un proceso por su PID",
        opts: ["kill", "stop", "end", "terminate"],
        ans: 0, exp: "kill + PID termina el proceso"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Linux", diff: "medium",
        q: "Que comando muestra procesos en ejecucion",
        opts: ["ps", "top", "htop", "todos"],
        ans: 3, exp: "ps, top y htop muestran procesos"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "Windows", diff: "easy",
        q: "Que comando en CMD muestra la configuracion IP",
        opts: ["ipconfig", "ifconfig", "netstat", "ping"],
        ans: 0, exp: "ipconfig en Windows, ifconfig en Linux"
    },
    {
        intermedio: false, avanzado: false, experto: false, unit: "Windows", diff: "easy",
        q: "Que tecla abre el administrador de tareas en Windows",
        opts: ["Ctrl+Shift+Esc", "Ctrl+Alt+Del", "ambas", "ninguna"],
        ans: 2, exp: "ambas abren el administrador"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Procesos", diff: "medium",
        q: "Que es un proceso zombie",
        opts: ["proceso que ya termino pero su entrada sigue en tabla", "proceso que no responde", "proceso en espera", "proceso con prioridad baja"],
        ans: 0, exp: "zombie = proceso terminado esperando que el padre recoja su estado"
    },
    {
        intermedio: true, avanzado: false, experto: false, unit: "Memoria", diff: "medium",
        q: "Que es swapping",
        opts: ["mover paginas de memoria a disco", "intercambiar procesos", "priorizar procesos", "liberar memoria"],
        ans: 0, exp: "swap mueve memoria RAM a disco cuando falta espacio"
    },
    {
        intermedio: false, avanzado: true, experto: false, unit: "Planificacion", diff: "hard",
        q: "Que algoritmo de planificacion es apropiativo",
        opts: ["Round Robin", "FCFS", "SJF no apropiativo", "todos"],
        ans: 0, exp: "Round Robin asigna tiempo fijo y cambia"
    },

    {
        unit: "Mascara de red",
        diff: "medium",
        q: "Se necesita una subred que soporte 2000 hosts. Determine la máscara en formato decimal y prefijo CIDR",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>n (bits host)</th>
            <th>2ⁿ</th>
            <th>2ⁿ − 2</th>
            <th>¿Suficiente?</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>10</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        <tr>
            <td>11</td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        </tbody>
        </table>
        <br>
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Prefijo CIDR</th>
            <th>Máscara decimal</th>
            <th>Total direcciones</th>
            <th>Hosts útiles</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><input></td>
            <td><input></td>
            <td><input></td>
            <td><input></td>
        </tr>
        </tbody>
        </table>
        </div>
            `,
                opts: [
            "/21 y 255.255.248.0",
            "/22 y 255.255.252.0",
            "/20 y 255.255.240.0",
            "/21 y 255.255.255.248"
        ],
        ans: 0,
        exp: "PASO 1: Calcular bits de host (n). 2ⁿ - 2 ≥ 2000. Con n=11 tenemos 2048 - 2 = 2046 hosts útiles.\nPASO 2: Calcular el prefijo CIDR. 32 bits totales - 11 bits de host = 21 bits de red (/21).\nPASO 3: Determinar la máscara decimal. El prefijo /21 apaga 3 bits en el tercer octeto (256 - 2³ = 248), resultando en 255.255.248.0."
    },

    // ==================== VLSM ====================
    {
        unit: "VLSM",
        diff: "hard",
        case: "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor y especificar: Dirección de Red, Máscara (Prefijo), Primera IP usable, Última IP usable y Broadcast.",
        q: "VLSM: Red base 172.20.10.0/24 → Ventas (60), RRHH (20), Enlace (2)",
        extra: `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Ventas (60)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>RRHH (20)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Enlace (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
      
  `,
        opts: [
            "Ventas: .0/26, RRHH: .64/27, Enlace: .96/30",
            "Ventas: .0/26, RRHH: .64/26, Enlace: .128/30",
            "Ventas: .0/24, RRHH: .0/27, Enlace: .32/30",
            "Ventas: .128/26, RRHH: .192/27, Enlace: .224/30"
        ],
        ans: 0,
        exp: "PASO 1: Ordenar\n60 → 20 → 2\n\nPASO 2: Máscaras\n60 → /26 → 62 host\n20 → /27 → 30 host\n2 → /30 → 2 host\n\nPASO 3: Asignación\n\nSUBRED 1 (60)\nRed: 172.20.10.0\nPrimera: 172.20.10.1\nÚltima: 172.20.10.62\nBroadcast: 172.20.10.63\n\nSUBRED 2 (20)\nRed: 172.20.10.64\nPrimera: 172.20.10.65\nÚltima: 172.20.10.94\nBroadcast: 172.20.10.95\n\nSUBRED 3 (2)\nRed: 172.20.10.96\nPrimera: 172.20.10.97\nÚltima: 172.20.10.98\nBroadcast: 172.20.10.99"
    },

    // ==================== VLSM 2 ====================
    {
        unit: "VLSM",
        diff: "hard",
        case: "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 192.168.1.0/24 → Administracion (50), Finanzas (25), TI (10), Enlace1 (2), Enlace2 (2)",
        extra: `
      <table class="subnet-table">
      <tr>
        <th>Área</th>
        <th>Red</th>
        <th>Máscara</th>
        <th>Primera IP</th>
        <th>Última IP</th>
        <th>Broadcast</th>
      </tr>

      <tr>
        <td>Administracion (50)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Finanzas (25)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>TI (10)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Enlace1 (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>

      <tr>
        <td>Enlace2 (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
      
  `,
        opts: [
            "Admin: .0/26, Fin: .64/27, TI: .96/28, E1: .112/30, E2: .116/30",
            "Admin: .0/25, Fin: .128/26, TI: .192/27, E1: .224/30, E2: .228/30",
            "Admin: .0/26, Fin: .64/26, TI: .128/26, E1: .192/30, E2: .196/30",
            "Admin: .0/24, Fin: .0/25, TI: .0/26, E1: .0/30, E2: .4/30"
        ],
        ans: 0,
        exp: "PASO 1: Ordenar: 50, 25, 10, 2, 2\n\nPASO 2: Máscaras:\n50 → /26 (62 hosts)\n25 → /27 (30 hosts)\n10 → /28 (14 hosts)\n2 → /30 (2 hosts)\n\nPASO 3: Asignación:\nADMIN: 192.168.1.0/26, hosts 1-62, broadcast 63\nFINANZAS: 192.168.1.64/27, hosts 65-94, broadcast 95\nTI: 192.168.1.96/28, hosts 97-110, broadcast 111\nENLACE1: 192.168.1.112/30, hosts 113-114, broadcast 115\nENLACE2: 192.168.1.116/30, hosts 117-118, broadcast 119"
    },

    // ==================== DESARROLLO DE VLSM COMPLETO (PRUEBA 1 A) ====================
  {
    unit: "VLSM",
    diff: "hard",
    profe: true,
    case: "Desarrolle la tabla de direccionamiento para la red 10.10.0.0/16. Requerimientos: LAN A (4000 hosts), LAN B (2000 hosts), LAN C (1000 hosts), Enlaces (2 hosts c/u).",
    q: "Complete el cuadro de desarrollo y seleccione la opción de máscara correcta:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Subred</th>
    <th>ID de Red</th>
    <th>Máscara (Prefijo)</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>LAN A (4000)</td><td><input></td><td>/19</td><td><input></td></tr>
  <tr><td>LAN B (2000)</td><td><input></td><td>/21</td><td><input></td></tr>
  <tr><td>LAN C (1000)</td><td><input></td><td>/22</td><td><input></td></tr>
</tbody>
</table>
</div>`,
    opts: [
      "LAN A: /19, LAN B: /21, LAN C: /22",
      "LAN A: /20, LAN B: /22, LAN C: /23",
      "LAN A: /18, LAN B: /20, LAN C: /21",
      "Todas usan /24"
    ],
    ans: 0,
    exp: "4000 hosts necesitan 12 bits (2^12=4096). 32-12 = /20. *Nota: Si la guía especifica /19 es para dejar mayor holgura según el estándar del profesor.*"
  },

  // ==================== CUADRO DE CONVERSIÓN (GUÍA 1EJE) ====================
  {
    unit: "Fundamentos",
    diff: "medium",
    profe: true,
    case: "Complete el proceso de conversión de la dirección IP 192.168.10.1 a binario.",
    q: "Complete los octetos faltantes:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Octeto</th>
    <th>Decimal</th>
    <th>Binario</th>
  </tr>
</thead>
<tbody>
  <tr><td>1° Octeto</td><td>192</td><td><input value="11000000" readonly></td></tr>
  <tr><td>2° Octeto</td><td>168</td><td><input></td></tr>
  <tr><td>3° Octeto</td><td>10</td><td><input></td></tr>
  <tr><td>4° Octeto</td><td>1</td><td><input></td></tr>
</tbody>
</table>
</div>`,
    opts: ["10101000 | 00001010 | 00000001", "10101000 | 00001111 | 00000010", "11001000 | 00001010 | 00000001", "10101010 | 00001010 | 00000001"],
    ans: 0,
    exp: "168 = 10101000, 10 = 00001010, 1 = 00000001."
  },

  // ==================== CUADRO DE ENRUTAMIENTO (GUÍA 2) ====================
  {
    unit: "Routing",
    diff: "hard",
    profe: true,
    case: "Dada la siguiente tabla de enrutamiento, identifique la interfaz de salida para un paquete con destino 172.16.20.50.",
    q: "Analice la tabla y complete el campo de salida:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Red Destino</th>
    <th>Máscara</th>
    <th>Siguiente Salto / Interfaz</th>
  </tr>
</thead>
<tbody>
  <tr><td>172.16.0.0</td><td>255.255.0.0</td><td>GigabitEthernet0/0</td></tr>
  <tr><td>172.16.20.0</td><td>255.255.255.0</td><td>Serial0/1/0</td></tr>
  <tr><td>0.0.0.0</td><td>0.0.0.0</td><td>GigabitEthernet0/1</td></tr>
</tbody>
</table>
<p>Interfaz de salida: <input></p>
</div>`,
    opts: ["GigabitEthernet0/0", "Serial0/1/0", "GigabitEthernet0/1", "FastEthernet0/0"],
    ans: 1,
    exp: "Se aplica la regla de la 'coincidencia más larga' (Longest Match). La red 172.16.20.0/24 es más específica que la 172.16.0.0/16."
  },

  // ==================== CUADRO DE IPV6 (PRUEBA 1 A) ====================
  {
    unit: "IPv6",
    diff: "hard",
    profe: true,
    case: "Complete la tabla de abreviación de direcciones IPv6 aplicando las reglas de omitir ceros iniciales y el uso de doble dos puntos (::).",
    q: "Complete los espacios en blanco:",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>IPv6 Extendida</th>
    <th>IPv6 Abreviada</th>
  </tr>
</thead>
<tbody>
  <tr><td>2001:0DB8:0000:0000:1234:0000:0000:0001</td><td><input></td></tr>
  <tr><td>FE80:0000:0000:0000:0000:0000:0000:000A</td><td><input></td></tr>
</tbody>
</table>
</div>`,
    opts: [
      "2001:db8::1234:0:0:1 | fe80::a",
      "2001:db8:0:0:1234::1 | fe80::10",
      "2001:db8::1234::1 | fe80:0::a",
      "2001:db8:0000::1234:0000::1 | fe80::a"
    ],
    ans: 0,
    exp: "REGLA: Solo se puede usar '::' una vez. En la primera dirección se usa en el grupo más largo de ceros. En la segunda, se usa para colapsar todos los ceros intermedios."
  },

    // ==================== CÁLCULO DE MÁSCARA ====================
    {
        unit: "Mascara de red",
        diff: "medium",
        q: "Se necesita una subred que soporte 2000 hosts. Determine la máscara en formato decimal y prefijo CIDR",
        extra: `
      <div>
        <p>Hosts requeridos: 2000</p>
        <p>Máscara decimal: <input type="text" class="subnet-input" data-field="mascara_decimal"></p>
        <p>Prefijo CIDR: <input type="text" class="subnet-input" data-field="prefijo"></p>
        <p>Total de direcciones: <input type="text" class="subnet-input" data-field="total"></p>
        <p>Hosts útiles: <input type="text" class="subnet-input" data-field="hosts"></p>
      </div>
    `,
        opts: [
            "255.255.248.0 (/21)",
            "255.255.255.0 (/24)",
            "255.255.240.0 (/20)",
            "255.255.252.0 (/22)"
        ],
        ans: 0,
        exp: "PASO 1: 2^n - 2 >= 2000 → 2^n >= 2002 → n = 11 bits host (2^11 = 2048, 2048-2=2046 hosts)\nPASO 2: bits de red = 32 - 11 = 21 bits → /21\nPASO 3: Máscara decimal: 255.255.248.0"
    },

    {
        unit: "VLSM",
        diff: "hard",
        case: "Desarrolle el cálculo de subredes para los siguientes escenarios. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 192.168.1.0/24 → Administracion (50), Finanzas (25), TI (10), Enlace1 (2), Enlace2 (2)",
        extra: `
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Administracion (50)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Finanzas (25)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>TI (10)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace1 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace2 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
  `,
        opts: [
            "IP final del último enlace: .118",
            "IP final del último enlace: .254",
            "IP final del último enlace: .126",
            "IP final del último enlace: .110"
        ],
        ans: 0,
        exp: "PASO 1: Ordenar: 50, 25, 10, 2, 2\n\nPASO 2: Máscaras:\n50 → /26 (62 hosts)\n25 → /27 (30 hosts)\n10 → /28 (14 hosts)\n2 → /30 (2 hosts)\n\nPASO 3: Asignación:\nADMIN: 192.168.1.0/26, hosts 1-62, broadcast 63\nFINANZAS: 192.168.1.64/27, hosts 65-94, broadcast 95\nTI: 192.168.1.96/28, hosts 97-110, broadcast 111\nENLACE1: 192.168.1.112/30, hosts 113-114, broadcast 115\nENLACE2: 192.168.1.116/30, hosts 117-118, broadcast 119"
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuántos hosts útiles entrega una subred /26?",
        opts: ["62", "64", "30", "126"],
        ans: 0,
        exp: "Una /26 tiene 6 bits para hosts → 2⁶ = 64 direcciones totales. Se restan 2 (red y broadcast) → 62 hosts útiles. Regla: 2ⁿ − 2, donde n = 32 − prefijo = 32 − 26 = 6."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuántos hosts útiles entrega una subred /27?",
        opts: ["30", "32", "62", "28"],
        ans: 0,
        exp: "Una /27 tiene 5 bits para hosts → 2⁵ = 32 direcciones totales. Se restan 2 → 30 hosts útiles. n = 32 − 27 = 5 → 2⁵ − 2 = 30."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuántos hosts útiles entrega una subred /28?",
        opts: ["14", "16", "12", "30"],
        ans: 0,
        exp: "Una /28 tiene 4 bits para hosts → 2⁴ = 16 direcciones totales. Se restan 2 → 14 hosts útiles. n = 32 − 28 = 4 → 2⁴ − 2 = 14."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuántos hosts útiles entrega una subred /30?",
        opts: ["2", "4", "6", "30"],
        ans: 0,
        exp: "Una /30 tiene 2 bits para hosts → 2² = 4 direcciones totales. Se restan 2 → 2 hosts útiles. Se usa típicamente para enlaces punto a punto entre routers."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Qué máscara en decimal corresponde a /26?",
        opts: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.128"],
        ans: 0,
        exp: "/26 → 26 bits en 1 → los primeros 3 octetos son 255.255.255 y el cuarto tiene 11000000 en binario = 192. Truco: bloque /26 = 64 → 256 − 64 = 192."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Qué máscara en decimal corresponde a /27?",
        opts: ["255.255.255.224", "255.255.255.192", "255.255.255.240", "255.255.255.252"],
        ans: 0,
        exp: "/27 → bloque de 32 → 256 − 32 = 224 → 255.255.255.224. En binario el cuarto octeto es 11100000 = 224."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Qué máscara en decimal corresponde a /28?",
        opts: ["255.255.255.240", "255.255.255.224", "255.255.255.248", "255.255.255.192"],
        ans: 0,
        exp: "/28 → bloque de 16 → 256 − 16 = 240 → 255.255.255.240. En binario el cuarto octeto es 11110000 = 240."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Qué máscara en decimal corresponde a /30?",
        opts: ["255.255.255.252", "255.255.255.248", "255.255.255.240", "255.255.255.254"],
        ans: 0,
        exp: "/30 → bloque de 4 → 256 − 4 = 252 → 255.255.255.252. En binario el cuarto octeto es 11111100 = 252."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuál es la dirección de broadcast de la red 192.168.1.0/26?",
        opts: ["192.168.1.63", "192.168.1.64", "192.168.1.62", "192.168.1.127"],
        ans: 0,
        exp: "Red: 192.168.1.0/26 → bloque de 64 → la red ocupa de .0 a .63. El broadcast es siempre la última dirección del bloque → 192.168.1.63. Primera IP útil: .1, Última IP útil: .62."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuál es la dirección de broadcast de la red 192.168.1.64/27?",
        opts: ["192.168.1.95", "192.168.1.96", "192.168.1.94", "192.168.1.127"],
        ans: 0,
        exp: "Red: 192.168.1.64/27 → bloque de 32 → ocupa de .64 a .95. Broadcast = última dirección = 192.168.1.95. Primera útil: .65, Última útil: .94."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "¿Cuántos bits de host tiene una máscara /29?",
        opts: ["3", "4", "5", "2"],
        ans: 0,
        exp: "Bits de host = 32 − prefijo = 32 − 29 = 3 bits. Hosts útiles = 2³ − 2 = 6. Bloque = 2³ = 8. Máscara = 256 − 8 = 248 → 255.255.255.248."
    },

    {
        unit: "Subnetting",
        diff: "easy",
        profe: false,
        q: "Necesitas conectar 2 routers con un enlace punto a punto. ¿Qué prefijo usas?",
        opts: ["/30", "/29", "/28", "/31"],
        ans: 0,
        exp: "/30 entrega exactamente 2 hosts útiles (2² − 2 = 2), perfecto para un enlace punto a punto. /29 daría 6 hosts, desperdiciando 4 IPs. /31 es válido en algunos routers Cisco pero no es el estándar clásico de examen."
    },

    {
        unit: "VLSM",
        diff: "medium",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 10.0.0.0/24 → Ventas (60), Soporte (28), Enlace (2)",
        extra: `
        <div class="extra-content">
        <table class="subnet-table">
        <thead>
        <tr>
            <th>Área</th>
            <th>Red</th>
            <th>Máscara</th>
            <th>Primera IP</th>
            <th>Última IP</th>
            <th>Broadcast</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Ventas (60)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        </tr>
        <tr>
        <td>Soporte (28)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        </tr>
        <tr>
        <td>Enlace (2)</td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
        <td><input></td>
    </tr>
    </tbody>
    </table>
    </div>
    `,
        opts: [
            "Ventas: .0/26 (.1-.62), Soporte: .64/27 (.65-.94), Enlace: .96/30 (.97-.98)",
            "Ventas: .0/26 (.1-.63), Soporte: .64/27 (.65-.95), Enlace: .96/30 (.97-.99)",
            "Ventas: .0/25 (.1-.126), Soporte: .128/26 (.129-.190), Enlace: .192/30 (.193-.194)",
            "Ventas: .0/26 (.1-.62), Soporte: .63/27 (.64-.93), Enlace: .94/30 (.95-.96)"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
60 → 28 → 2

PASO 2 — Calcular máscara para cada área:
Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

Ventas (60): 2⁶ − 2 = 62 ✓ → n=6 → prefijo /26 → bloque 64 → máscara 255.255.255.192
Soporte (28): 2⁵ − 2 = 30 ✓ → n=5 → prefijo /27 → bloque 32 → máscara 255.255.255.224
Enlace  (2):  2² − 2 = 2  ✓ → n=2 → prefijo /30 → bloque 4  → máscara 255.255.255.252

PASO 3 — Asignar en orden (cada red empieza donde termina la anterior):

Ventas:  10.0.0.0/26   → Primera: 10.0.0.1   → Última: 10.0.0.62  → Broadcast: 10.0.0.63
         (siguiente red = 0 + 64 = 64)

Soporte: 10.0.0.64/27  → Primera: 10.0.0.65  → Última: 10.0.0.94  → Broadcast: 10.0.0.95
         (siguiente red = 64 + 32 = 96)

Enlace:  10.0.0.96/30  → Primera: 10.0.0.97  → Última: 10.0.0.98  → Broadcast: 10.0.0.99
         (siguiente red = 96 + 4 = 100)

PASO 4 — Verificar espacio usado:
/26 usa 64 IPs + /27 usa 32 IPs + /30 usa 4 IPs = 100 IPs usadas de 256 disponibles.
Quedan 156 IPs libres desde 10.0.0.100 hasta 10.0.0.255.`
    },

    {
        unit: "VLSM",
        diff: "medium",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 172.16.0.0/24 → RRHH (100), Contabilidad (50), Marketing (20), Enlace1 (2), Enlace2 (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>RRHH (100)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Contabilidad (50)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Marketing (20)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace1 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace2 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
  `,
        opts: [
            "RRHH: .0/25, Contabilidad: .128/26, Marketing: .192/27, Enlaces: .224/30 y .228/30",
            "RRHH: .0/25, Contabilidad: .128/26, Marketing: .192/27, Enlaces: .223/30 y .227/30",
            "RRHH: .0/26, Contabilidad: .64/26, Marketing: .128/27, Enlaces: .160/30 y .164/30",
            "RRHH: .0/25, Contabilidad: .127/26, Marketing: .191/27, Enlaces: .222/30 y .226/30"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
100 → 50 → 20 → 2 → 2

PASO 2 — Calcular máscara para cada área:
Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

RRHH        (100): 2⁷ − 2 = 126 ✓ → n=7 → prefijo /25 → bloque 128 → máscara 255.255.255.128
Contabilidad (50): 2⁶ − 2 = 62  ✓ → n=6 → prefijo /26 → bloque 64  → máscara 255.255.255.192
Marketing    (20): 2⁵ − 2 = 30  ✓ → n=5 → prefijo /27 → bloque 32  → máscara 255.255.255.224
Enlace1       (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
Enlace2       (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252

PASO 3 — Asignar en orden:

RRHH:         172.16.0.0/25   → Primera: 172.16.0.1   → Última: 172.16.0.126  → Broadcast: 172.16.0.127
              (siguiente red = 0 + 128 = 128)

Contabilidad: 172.16.0.128/26 → Primera: 172.16.0.129 → Última: 172.16.0.190  → Broadcast: 172.16.0.191
              (siguiente red = 128 + 64 = 192)

Marketing:    172.16.0.192/27 → Primera: 172.16.0.193 → Última: 172.16.0.222  → Broadcast: 172.16.0.223
              (siguiente red = 192 + 32 = 224)

Enlace1:      172.16.0.224/30 → Primera: 172.16.0.225 → Última: 172.16.0.226  → Broadcast: 172.16.0.227
              (siguiente red = 224 + 4 = 228)

Enlace2:      172.16.0.228/30 → Primera: 172.16.0.229 → Última: 172.16.0.230  → Broadcast: 172.16.0.231
              (siguiente red = 228 + 4 = 232)

PASO 4 — Verificar espacio usado:
/25 usa 128 + /26 usa 64 + /27 usa 32 + /30 usa 4 + /30 usa 4 = 232 IPs usadas de 256.
Quedan 24 IPs libres desde 172.16.0.232 hasta 172.16.0.255.`
    },

    {
        unit: "VLSM",
        diff: "medium",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 192.168.5.0/24 → Producción (110), Logística (55), Administración (25), Enlace (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Producción (110)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Logística (55)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Administración (25)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
  `,
        opts: [
            "Prod: .0/25, Log: .128/26, Admin: .192/27, Enlace: .224/30",
            "Prod: .0/25, Log: .128/26, Admin: .192/27, Enlace: .223/30",
            "Prod: .0/24, Log: .0/25, Admin: .128/26, Enlace: .192/30",
            "Prod: .0/25, Log: .127/26, Admin: .191/27, Enlace: .223/30"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
110 → 55 → 25 → 2

PASO 2 — Calcular máscara para cada área:
Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

Producción   (110): 2⁷ − 2 = 126 ✓ → n=7 → prefijo /25 → bloque 128 → máscara 255.255.255.128
Logística     (55): 2⁶ − 2 = 62  ✓ → n=6 → prefijo /26 → bloque 64  → máscara 255.255.255.192
Administración(25): 2⁵ − 2 = 30  ✓ → n=5 → prefijo /27 → bloque 32  → máscara 255.255.255.224
Enlace         (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252

PASO 3 — Asignar en orden:

Producción:    192.168.5.0/25   → Primera: 192.168.5.1   → Última: 192.168.5.126  → Broadcast: 192.168.5.127
               (siguiente red = 0 + 128 = 128)

Logística:     192.168.5.128/26 → Primera: 192.168.5.129 → Última: 192.168.5.190  → Broadcast: 192.168.5.191
               (siguiente red = 128 + 64 = 192)

Administración:192.168.5.192/27 → Primera: 192.168.5.193 → Última: 192.168.5.222  → Broadcast: 192.168.5.223
               (siguiente red = 192 + 32 = 224)

Enlace:        192.168.5.224/30 → Primera: 192.168.5.225 → Última: 192.168.5.226  → Broadcast: 192.168.5.227
               (siguiente red = 224 + 4 = 228)

PASO 4 — Verificar espacio usado:
/25 usa 128 + /26 usa 64 + /27 usa 32 + /30 usa 4 = 228 IPs usadas de 256.
Quedan 28 IPs libres desde 192.168.5.228 hasta 192.168.5.255.`
    },

    {
        unit: "VLSM",
        diff: "hard",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 10.10.0.0/23 → Planta (200), Oficinas (120), Bodega (60), TI (25), Enlace1 (2), Enlace2 (2), Enlace3 (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Planta (200)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Oficinas (120)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Bodega (60)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>TI (25)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace1 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace2 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace3 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
  `,
        opts: [
            "Planta: .0.0/24, Oficinas: .1.0/25, Bodega: .1.128/26, TI: .1.192/27, Enlaces: .1.224, .1.228, .1.232 (/30)",
            "Planta: .0.0/24, Oficinas: .0.128/25, Bodega: .0.192/26, TI: .1.0/27, Enlaces: .1.32, .1.36, .1.40 (/30)",
            "Planta: .0.0/23, Oficinas: .1.0/24, Bodega: .1.128/25, TI: .1.192/26, Enlaces: .1.224, .1.228, .1.232 (/30)",
            "Planta: .0.0/24, Oficinas: .1.0/25, Bodega: .1.128/26, TI: .1.192/27, Enlaces: .1.223, .1.227, .1.231 (/30)"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
200 → 120 → 60 → 25 → 2 → 2 → 2

PASO 2 — Entender la red base /23:
Una /23 tiene 9 bits de host → 2⁹ = 512 IPs totales.
Abarca: 10.10.0.0 hasta 10.10.1.255 (dos bloques /24 consecutivos).

PASO 3 — Calcular máscara para cada área:
Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

Planta   (200): 2⁸ − 2 = 254 ✓ → n=8 → prefijo /24 → bloque 256 → máscara 255.255.255.0
Oficinas (120): 2⁷ − 2 = 126 ✓ → n=7 → prefijo /25 → bloque 128 → máscara 255.255.255.128
Bodega    (60): 2⁶ − 2 = 62  ✓ → n=6 → prefijo /26 → bloque 64  → máscara 255.255.255.192
TI        (25): 2⁵ − 2 = 30  ✓ → n=5 → prefijo /27 → bloque 32  → máscara 255.255.255.224
Enlace1    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
Enlace2    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252
Enlace3    (2): 2² − 2 = 2   ✓ → n=2 → prefijo /30 → bloque 4   → máscara 255.255.255.252

PASO 4 — Asignar en orden:
Importante: al llegar a 10.10.0.255 el siguiente bloque continúa en 10.10.1.0

Planta:   10.10.0.0/24   → Primera: 10.10.0.1   → Última: 10.10.0.254  → Broadcast: 10.10.0.255
          (siguiente red = 10.10.1.0, pasamos al segundo bloque del /23)

Oficinas: 10.10.1.0/25   → Primera: 10.10.1.1   → Última: 10.10.1.126  → Broadcast: 10.10.1.127
          (siguiente red = 10.10.1.128)

Bodega:   10.10.1.128/26 → Primera: 10.10.1.129 → Última: 10.10.1.190  → Broadcast: 10.10.1.191
          (siguiente red = 10.10.1.192)

TI:       10.10.1.192/27 → Primera: 10.10.1.193 → Última: 10.10.1.222  → Broadcast: 10.10.1.223
          (siguiente red = 10.10.1.224)

Enlace1:  10.10.1.224/30 → Primera: 10.10.1.225 → Última: 10.10.1.226  → Broadcast: 10.10.1.227
          (siguiente red = 10.10.1.228)

Enlace2:  10.10.1.228/30 → Primera: 10.10.1.229 → Última: 10.10.1.230  → Broadcast: 10.10.1.231
          (siguiente red = 10.10.1.232)

Enlace3:  10.10.1.232/30 → Primera: 10.10.1.233 → Última: 10.10.1.234  → Broadcast: 10.10.1.235
          (siguiente red = 10.10.1.236)

PASO 5 — Verificar espacio usado:
/24 usa 256 + /25 usa 128 + /26 usa 64 + /27 usa 32 + /30×3 usa 12 = 492 IPs usadas de 512.
Quedan 20 IPs libres desde 10.10.1.236 hasta 10.10.1.255.`
    },

    {
        unit: "VLSM",
        diff: "hard",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 192.168.10.0/24 → Gerencia (14), Diseño (12), Contabilidad (6), Recepción (4), Enlace1 (2), Enlace2 (2)",
        extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Gerencia (14)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Diseño (12)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Contabilidad (6)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Recepción (4)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace1 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace2 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
  `,
        opts: [
            "Gerencia: .0/28, Diseño: .16/28, Contabilidad: .32/29, Recepción: .40/29, Enlaces: .48/30 y .52/30",
            "Gerencia: .0/28, Diseño: .16/28, Contabilidad: .32/30, Recepción: .36/30, Enlaces: .40/30 y .44/30",
            "Gerencia: .0/28, Diseño: .15/28, Contabilidad: .31/29, Recepción: .39/29, Enlaces: .47/30 y .51/30",
            "Gerencia: .0/27, Diseño: .32/27, Contabilidad: .64/28, Recepción: .80/28, Enlaces: .96/30 y .100/30"
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
14 → 12 → 6 → 4 → 2 → 2

        PASO 2 — Calcular máscara para cada área:
        Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

        Gerencia     (14): 2⁴ − 2 = 14 ✓ → n=4 → prefijo /28 → bloque 16 → máscara 255.255.255.240
        Diseño       (12): 2⁴ − 2 = 14 ✓ → n=4 → prefijo /28 → bloque 16 → máscara 255.255.255.240
                    (12 no cabe en /29 que da solo 6, así que también necesita /28)
        Contabilidad  (6): 2³ − 2 = 6  ✓ → n=3 → prefijo /29 → bloque 8  → máscara 255.255.255.248
        Recepción     (4): 2³ − 2 = 6  ✓ → n=3 → prefijo /29 → bloque 8  → máscara 255.255.255.248
                    (4 no cabe en /30 que da solo 2, necesita /29)
        Enlace1       (2): 2² − 2 = 2  ✓ → n=2 → prefijo /30 → bloque 4  → máscara 255.255.255.252
        Enlace2       (2): 2² − 2 = 2  ✓ → n=2 → prefijo /30 → bloque 4  → máscara 255.255.255.252

        PASO 3 — Asignar en orden:

        Gerencia:     192.168.10.0/28  → Primera: 192.168.10.1  → Última: 192.168.10.14  → Broadcast: 192.168.10.15
                    (siguiente red = 0 + 16 = 16)

        Diseño:       192.168.10.16/28 → Primera: 192.168.10.17 → Última: 192.168.10.30  → Broadcast: 192.168.10.31
                    (siguiente red = 16 + 16 = 32)

        Contabilidad: 192.168.10.32/29 → Primera: 192.168.10.33 → Última: 192.168.10.38  → Broadcast: 192.168.10.39
                    (siguiente red = 32 + 8 = 40)

        Recepción:    192.168.10.40/29 → Primera: 192.168.10.41 → Última: 192.168.10.46  → Broadcast: 192.168.10.47
                    (siguiente red = 40 + 8 = 48)

        Enlace1:      192.168.10.48/30 → Primera: 192.168.10.49 → Última: 192.168.10.50  → Broadcast: 192.168.10.51
                    (siguiente red = 48 + 4 = 52)

        Enlace2:      192.168.10.52/30 → Primera: 192.168.10.53 → Última: 192.168.10.54  → Broadcast: 192.168.10.55
                    (siguiente red = 52 + 4 = 56)

        PASO 4 — Verificar espacio usado:
        /28×2 usa 32 + /29×2 usa 16 + /30×2 usa 8 = 56 IPs usadas de 256.
        Quedan 200 IPs libres desde 192.168.10.56 hasta 192.168.10.255.

        ATENCIÓN — Truco para no equivocarse con hosts similares:
        Gerencia(14) y Diseño(12) → ambos necesitan /28 porque /29 solo da 6 hosts útiles.
        Recepción(4) → necesita /29 porque /30 solo da 2 hosts útiles, no alcanza para 4.`
    },

    {
        unit: "VLSM",
        diff: "hard",
        profe: false,
        case: "Desarrolle el cálculo de subredes para el siguiente escenario. Debe ordenar los requerimientos de mayor a menor.",
        q: "VLSM: Red base 192.168.1.0/24 → Administración (50), Finanzas (25), TI (10), Enlace1 (2), Enlace2 (2)",
        extra: `
    <div class="extra-content">
    <table class="subnet-table">
    <thead>
    <tr>
    <th>Área</th>
    <th>Red</th>
    <th>Máscara</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Administración (50)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Finanzas (25)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>TI (10)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace1 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
  <tr>
    <td>Enlace2 (2)</td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
    <td><input></td>
  </tr>
</tbody>
</table>
</div>
  `,
        opts: [
           "Admin: .0/26, Finanzas: .64/27, TI: .96/28, Enlaces: .112/30 y .116/30",
            "Admin: .0/26, Finanzas: .64/27, TI: .96/28, Enlaces: .111/30 y .115/30",
            "Admin: .0/26, Finanzas: .50/27, TI: .75/28, Enlaces: .85/30 y .89/30",
            "Admin: .0/25, Finanzas: .128/26, TI: .192/27, Enlaces: .224/30 y .228/30" 
        ],
        ans: 0,
        exp: `PASO 1 — Ordenar de mayor a menor:
        50 → 25 → 10 → 2 → 2

        PASO 2 — Calcular máscara para cada área:
        Fórmula: 2ⁿ − 2 ≥ hosts requeridos → prefijo = 32 − n

        Administración (50): 2⁶ − 2 = 62 ✓ → n=6 → prefijo /26 → bloque 64 → máscara 255.255.255.192
        Finanzas       (25): 2⁵ − 2 = 30 ✓ → n=5 → prefijo /27 → bloque 32 → máscara 255.255.255.224
        TI             (10): 2⁴ − 2 = 14 ✓ → n=4 → prefijo /28 → bloque 16 → máscara 255.255.255.240
        Enlace1         (2): 2² − 2 = 2  ✓ → n=2 → prefijo /30 → bloque 4  → máscara 255.255.255.252
        Enlace2         (2): 2² − 2 = 2  ✓ → n=2 → prefijo /30 → bloque 4  → máscara 255.255.255.252

        PASO 3 — Asignar en orden:

        Administración: 192.168.1.0/26   → Primera: 192.168.1.1   → Última: 192.168.1.62   → Broadcast: 192.168.1.63
                        (siguiente red = 0 + 64 = 64)

        Finanzas:       192.168.1.64/27  → Primera: 192.168.1.65  → Última: 192.168.1.94   → Broadcast: 192.168.1.95
                        (siguiente red = 64 + 32 = 96)

        TI:             192.168.1.96/28  → Primera: 192.168.1.97  → Última: 192.168.1.110  → Broadcast: 192.168.1.111
                        (siguiente red = 96 + 16 = 112)

        Enlace1:        192.168.1.112/30 → Primera: 192.168.1.113 → Última: 192.168.1.114  → Broadcast: 192.168.1.115
                        (siguiente red = 112 + 4 = 116)

        Enlace2:        192.168.1.116/30 → Primera: 192.168.1.117 → Última: 192.168.1.118  → Broadcast: 192.168.1.119
                        (siguiente red = 116 + 4 = 120)

        PASO 4 — Verificar espacio usado:
        /26 usa 64 + /27 usa 32 + /28 usa 16 + /30×2 usa 8 = 120 IPs usadas de 256.
        Quedan 136 IPs libres desde 192.168.1.120 hasta 192.168.1.255.`
    },

{
    profe: false,
    avanzado: true, 
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    q: "La empresa DataSecure necesita 30 subredes con la IP en binario 11000000.10101000.00001010.01100100. Calcula: máscara final, blocksize, hosts por subred, primera y última red útil, y completa el cuadro de subredes.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</th>
    <td colspan="5">11000000.10101000.00001010.01100100</td>
  </tr>
  <tr>
    <td>IP en decimal</th>
    <td colspan="5"><input style="width:100%" placeholder="convierte cada octeto"></td>
  </tr>
  <tr>
    <td>Clase</th>
    <td colspan="5"><input style="width:100%" placeholder="A, B o C"></td>
  </tr>
  <tr>
    <td>Máscara por defecto</th>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Bits prestados (para 30 redes)</th>
    <td colspan="5"><input style="width:100%" placeholder="2^n ≥ 30"></td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</th>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Blocksize</th>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</th>
    <td colspan="5"><input style="width:100%"></td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>9</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>10</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>11</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>12</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>13</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>14</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>15</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>16</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>17</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>18</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>19</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>20</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>21</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>22</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>23</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>24</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>25</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>26</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>27</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>28</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>29</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
  <tr><td>30</td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara /27 | Blocksize 32 | 30 hosts | Primera red: 192.168.10.0 | Última red: 192.168.10.224",
        "Máscara /26 | Blocksize 64 | 62 hosts | Primera red: 192.168.10.0 | Última red: 192.168.10.192",
        "Máscara /28 | Blocksize 16 | 14 hosts | Primera red: 192.168.10.0 | Última red: 192.168.10.240",
        "Máscara /27 | Blocksize 32 | 30 hosts | Primera red: 192.168.10.32 | Última red: 192.168.10.224"
    ],
    ans: 0,
    exp: "PASO 1: Convertir IP binaria a decimal.\n" +
         "  11000000 = 192\n" +
         "  10101000 = 168\n" +
         "  00001010 = 10\n" +
         "  01100100 = 100\n" +
         "  IP decimal: 192.168.10.100\n\n" +
         "PASO 2: Determinar clase.\n" +
         "  Primer octeto 192 → entre 192-223 → Clase C\n" +
         "  Máscara por defecto Clase C: 255.255.255.0 (/24)\n\n" +
         "PASO 3: Calcular bits a prestar para 30 subredes.\n" +
         "  2^n ≥ 30 → 2^5 = 32 ≥ 30 ✓ → se prestan 5 bits\n" +
         "  Nuevo prefijo: /24 + 5 = /29\n" +
         "  Máscara final: 255.255.255.248\n\n" +
         "PASO 4: Blocksize = 2^(bits de host) = 2^(32-29) = 2^3 = 8\n" +
         "  Hosts por subred = 8 - 2 = 6\n\n" +
         "PASO 5: Cuadro de subredes (blocksize 8, partiendo de 192.168.10.0):\n" +
         "  Red 1:  192.168.10.0   | 1-6    | BC: 192.168.10.7\n" +
         "  Red 2:  192.168.10.8   | 9-14   | BC: 192.168.10.15\n" +
         "  Red 3:  192.168.10.16  | 17-22  | BC: 192.168.10.23\n" +
         "  Red 4:  192.168.10.24  | 25-30  | BC: 192.168.10.31\n" +
         "  Red 5:  192.168.10.32  | 33-38  | BC: 192.168.10.39\n" +
         "  Red 6:  192.168.10.40  | 41-46  | BC: 192.168.10.47\n" +
         "  Red 7:  192.168.10.48  | 49-54  | BC: 192.168.10.55\n" +
         "  Red 8:  192.168.10.56  | 57-62  | BC: 192.168.10.63\n" +
         "  Red 9:  192.168.10.64  | 65-70  | BC: 192.168.10.71\n" +
         "  Red 10: 192.168.10.72  | 73-78  | BC: 192.168.10.79\n" +
         "  Red 11: 192.168.10.80  | 81-86  | BC: 192.168.10.87\n" +
         "  Red 12: 192.168.10.88  | 89-94  | BC: 192.168.10.95\n" +
         "  Red 13: 192.168.10.96  | 97-102 | BC: 192.168.10.103\n" +
         "  Red 14: 192.168.10.104 | 105-110| BC: 192.168.10.111\n" +
         "  Red 15: 192.168.10.112 | 113-118| BC: 192.168.10.119\n" +
         "  Red 16: 192.168.10.120 | 121-126| BC: 192.168.10.127\n" +
         "  Red 17: 192.168.10.128 | 129-134| BC: 192.168.10.135\n" +
         "  Red 18: 192.168.10.136 | 137-142| BC: 192.168.10.143\n" +
         "  Red 19: 192.168.10.144 | 145-150| BC: 192.168.10.151\n" +
         "  Red 20: 192.168.10.152 | 153-158| BC: 192.168.10.159\n" +
         "  Red 21: 192.168.10.160 | 161-166| BC: 192.168.10.167\n" +
         "  Red 22: 192.168.10.168 | 169-174| BC: 192.168.10.175\n" +
         "  Red 23: 192.168.10.176 | 177-182| BC: 192.168.10.183\n" +
         "  Red 24: 192.168.10.184 | 185-190| BC: 192.168.10.191\n" +
         "  Red 25: 192.168.10.192 | 193-198| BC: 192.168.10.199\n" +
         "  Red 26: 192.168.10.200 | 201-206| BC: 192.168.10.207\n" +
         "  Red 27: 192.168.10.208 | 209-214| BC: 192.168.10.215\n" +
         "  Red 28: 192.168.10.216 | 217-222| BC: 192.168.10.223\n" +
         "  Red 29: 192.168.10.224 | 225-230| BC: 192.168.10.231\n" +
         "  Red 30: 192.168.10.232 | 233-238| BC: 192.168.10.239\n\n" +
         "Primera red útil: 192.168.10.0 | Última red útil: 192.168.10.232"
},

{
    profe: false,
    avanzado: true,
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    q: "La empresa TechSolutions necesita 60 subredes con la IP en binario 10001101.01100100.11000011.01111010. Calcula: máscara final, blocksize, hosts por subred, primera y última red útil.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</th>
    <td colspan="5">10001101.01100100.11000011.01111010</td>
  </tr>
  <tr>
    <td>IP en decimal</th>
    <td colspan="5">141.100.195.122</td>
  </tr>
  <tr>
    <td>Clase</th>
    <td colspan="5">B</td>
  </tr>
  <tr>
    <td>Máscara por defecto</th>
    <td colspan="5">255.255.0.0 (/16)</td>
  </tr>
  <tr>
    <td>Bits prestados (para 60 redes)</th>
    <td colspan="5">6 (2^6 = 64 ≥ 60)</td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</th>
    <td colspan="5">/22 (255.255.252.0)</td>
  </tr>
  <tr>
    <td>Blocksize</th>
    <td colspan="5">1024</td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</th>
    <td colspan="5">1022</td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td>141.100.0.0</td><td>141.100.0.1</td><td>141.100.3.254</td><td>141.100.3.255</td></tr>
  <tr><td>2</td><td>141.100.4.0</td><td>141.100.4.1</td><td>141.100.7.254</td><td>141.100.7.255</td></tr>
  <tr><td>3</td><td>141.100.8.0</td><td>141.100.8.1</td><td>141.100.11.254</td><td>141.100.11.255</td></tr>
  <tr><td>4</td><td>141.100.12.0</td><td>141.100.12.1</td><td>141.100.15.254</td><td>141.100.15.255</td></tr>
  <tr><td>5</td><td>141.100.16.0</td><td>141.100.16.1</td><td>141.100.19.254</td><td>141.100.19.255</td></tr>
  <tr><td>6</td><td>141.100.20.0</td><td>141.100.20.1</td><td>141.100.23.254</td><td>141.100.23.255</td></tr>
  <tr><td>7</td><td>141.100.24.0</td><td>141.100.24.1</td><td>141.100.27.254</td><td>141.100.27.255</td></tr>
  <tr><td>8</td><td>141.100.28.0</td><td>141.100.28.1</td><td>141.100.31.254</td><td>141.100.31.255</td></tr>
  <tr><td>9</td><td>141.100.32.0</td><td>141.100.32.1</td><td>141.100.35.254</td><td>141.100.35.255</td></tr>
  <tr><td>10</td><td>141.100.36.0</td><td>141.100.36.1</td><td>141.100.39.254</td><td>141.100.39.255</td></tr>
  <tr><td colspan="5" style="text-align:center">... (50 subredes más, incrementando de 4 en 4)</td></tr>
  <tr><td>60</td><td>141.100.236.0</td><td>141.100.236.1</td><td>141.100.239.254</td><td>141.100.239.255</td></tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara /22 | Blocksize 1024 | 1022 hosts | Primera red: 141.100.0.0 | Última red: 141.100.236.0",
        "Máscara /21 | Blocksize 2048 | 2046 hosts | Primera red: 141.100.0.0 | Última red: 141.100.236.0",
        "Máscara /22 | Blocksize 1024 | 1022 hosts | Primera red: 141.100.4.0 | Última red: 141.100.240.0",
        "Máscara /23 | Blocksize 512 | 510 hosts | Primera red: 141.100.0.0 | Última red: 141.100.236.0"
    ],
    ans: 0,
    exp: "PASO 1: 10001101 = 141, 01100100 = 100, 11000011 = 195, 01111010 = 122 → IP 141.100.195.122\n" +
         "PASO 2: 141 está entre 128-191 → Clase B → máscara /16\n" +
         "PASO 3: 2^n ≥ 60 → n = 6 bits → /16 + 6 = /22 → 255.255.252.0\n" +
         "PASO 4: Blocksize = 2^(32-22) = 2^10 = 1024 → hosts = 1022\n" +
         "PASO 5: Subredes desde 141.100.0.0 hasta 141.100.236.0 (60 subredes con blocksize 1024)"
},

{
    profe: false,
    avanzado: true,
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    q: "La empresa DataFlow necesita 28 subredes con la IP en binario 01011010.11001100.10101010.00001111. Calcula: máscara final, blocksize, hosts por subred, primera y última red útil.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</th>
    <td colspan="5">01011010.11001100.10101010.00001111</td>
  </tr>
  <tr>
    <td>IP en decimal</th>
    <td colspan="5">90.204.170.15</td>
  </tr>
  <tr>
    <td>Clase</th>
    <td colspan="5">A</td>
  </tr>
  <tr>
    <td>Máscara por defecto</th>
    <td colspan="5">255.0.0.0 (/8)</td>
  </tr>
  <tr>
    <td>Bits prestados (para 28 redes)</th>
    <td colspan="5">5 (2^5 = 32 ≥ 28)</td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</th>
    <td colspan="5">/13 (255.248.0.0)</td>
  </tr>
  <tr>
    <td>Blocksize</th>
    <td colspan="5">524288</td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</th>
    <td colspan="5">524286</td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td>90.0.0.0</td><td>90.0.0.1</td><td>90.7.255.254</td><td>90.7.255.255</td></tr>
  <tr><td>2</td><td>90.8.0.0</td><td>90.8.0.1</td><td>90.15.255.254</td><td>90.15.255.255</td></tr>
  <tr><td>3</td><td>90.16.0.0</td><td>90.16.0.1</td><td>90.23.255.254</td><td>90.23.255.255</td></tr>
  <tr><td>4</td><td>90.24.0.0</td><td>90.24.0.1</td><td>90.31.255.254</td><td>90.31.255.255</td></tr>
  <tr><td>5</td><td>90.32.0.0</td><td>90.32.0.1</td><td>90.39.255.254</td><td>90.39.255.255</td></tr>
  <tr><td>6</td><td>90.40.0.0</td><td>90.40.0.1</td><td>90.47.255.254</td><td>90.47.255.255</td></tr>
  <tr><td>7</td><td>90.48.0.0</td><td>90.48.0.1</td><td>90.55.255.254</td><td>90.55.255.255</td></tr>
  <tr><td>8</td><td>90.56.0.0</td><td>90.56.0.1</td><td>90.63.255.254</td><td>90.63.255.255</td></tr>
  <tr><td>9</td><td>90.64.0.0</td><td>90.64.0.1</td><td>90.71.255.254</td><td>90.71.255.255</td></tr>
  <tr><td>10</td><td>90.72.0.0</td><td>90.72.0.1</td><td>90.79.255.254</td><td>90.79.255.255</td></tr>
  <tr><td colspan="5" style="text-align:center">... (18 subredes más, incrementando de 8 en 8 en el segundo octeto)</td></tr>
  <tr><td>28</td><td>90.216.0.0</td><td>90.216.0.1</td><td>90.223.255.254</td><td>90.223.255.255</td></tr>
</tbody>
</table>
</div>
    `,
    opts: [
        "Máscara /13 | Blocksize 524288 | 524286 hosts | Primera red: 90.0.0.0 | Última red: 90.216.0.0",
        "Máscara /14 | Blocksize 262144 | 262142 hosts | Primera red: 90.0.0.0 | Última red: 90.216.0.0",
        "Máscara /13 | Blocksize 524288 | 524286 hosts | Primera red: 90.8.0.0 | Última red: 90.224.0.0",
        "Máscara /12 | Blocksize 1048576 | 1048574 hosts | Primera red: 90.0.0.0 | Última red: 90.216.0.0"
    ],
    ans: 0,
    exp: "PASO 1: 01011010 = 90, 11001100 = 204, 10101010 = 170, 00001111 = 15 → IP 90.204.170.15\n" +
         "PASO 2: 90 está entre 1-126 → Clase A → máscara /8\n" +
         "PASO 3: 2^n ≥ 28 → n = 5 bits → /8 + 5 = /13 → 255.248.0.0\n" +
         "PASO 4: Blocksize = 2^(32-13) = 2^19 = 524288 → hosts = 524286\n" +
         "PASO 5: Subredes desde 90.0.0.0 hasta 90.216.0.0 (28 subredes con blocksize 524288)"
},


{
    profe: false,
    avanzado: true,
    unit: "Subnetting - VLSM Avanzado",
    diff: "hard",
    q: "La empresa NetSecure necesita 100 subredes con la IP en binario 11001010.00110111.10011000.11100010. Calcula: máscara final, blocksize, hosts por subred, primera y última red útil.",
    extra: `
<div class="extra-content">
<table class="subnet-table">
<thead>
  <tr>
    <th colspan="6">Datos previos</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>IP en binario</th>
    <td colspan="5">11001010.00110111.10011000.11100010</td>
  </tr>
  <tr>
    <td>IP en decimal</th>
    <td colspan="5">202.55.152.226</td>
  </tr>
  <tr>
    <td>Clase</th>
    <td colspan="5">C</td>
  </tr>
  <tr>
    <td>Máscara por defecto</th>
    <td colspan="5">255.255.255.0 (/24)</td>
  </tr>
  <tr>
    <td>Bits prestados (para 100 subredes)</th>
    <td colspan="5">7 (2^7 = 128 ≥ 100)</td>
  </tr>
  <tr>
    <td>Máscara final (prefijo)</th>
    <td colspan="5">/31 (255.255.255.254)</td>
  </tr>
  <tr>
    <td>Blocksize</th>
    <td colspan="5">2</td>
  </tr>
  <tr>
    <td>Hosts por subred (2^n - 2)</th>
    <td colspan="5">0</td>
  </tr>
</tbody>
</table>
<br>
<table class="subnet-table">
<thead>
  <tr>
    <th>N°</th>
    <th>Subred</th>
    <th>Primera IP</th>
    <th>Última IP</th>
    <th>Broadcast</th>
  </tr>
</thead>
<tbody>
  <tr><td>1</td><td>202.55.152.0</td><td>202.55.152.1</td><td>202.55.152.0</td><td>202.55.152.1</td></tr>
  <tr><td>2</td><td>202.55.152.2</td><td>202.55.152.3</td><td>202.55.152.2</td><td>202.55.152.3</td></tr>
  <tr><td>3</td><td>202.55.152.4</td><td>202.55.152.5</td><td>202.55.152.4</td><td>202.55.152.5</td></tr>
  <tr><td>4</td><td>202.55.152.6</td><td>202.55.152.7</td><td>202.55.152.6</td><td>202.55.152.7</td></tr>
  <tr><td>5</td><td>202.55.152.8</td><td>202.55.152.9</td><td>202.55.152.8</td><td>202.55.152.9</td></tr>
  <tr><td colspan="5" style="text-align:center">... (90 subredes más, incrementando de 2 en 2)</td></tr>
  <tr><td>100</td><td>202.55.152.198</td><td>202.55.152.199</td><td>202.55.152.198</td><td>202.55.152.199</td></tr>
</tbody>
</table>
<p style="font-size:12px; color:gray;">Nota: /31 es un enlace punto a punto, no tiene hosts útiles (0 hosts)</p>
</div>
    `,
    opts: [
        "Máscara /30 | Blocksize 4 | 2 hosts | Primera red: 202.55.152.0 | Última red: 202.55.152.196",
        "Máscara /31 | Blocksize 2 | 0 hosts | Primera red: 202.55.152.0 | Última red: 202.55.152.198",
        "Máscara /31 | Blocksize 2 | 0 hosts | Primera red: 202.55.152.2 | Última red: 202.55.152.200",
        "Máscara /29 | Blocksize 8 | 6 hosts | Primera red: 202.55.152.0 | Última red: 202.55.152.192"
    ],
    ans: 1,
    exp: "PASO 1: 11001010 = 202, 00110111 = 55, 10011000 = 152, 11100010 = 226 → IP 202.55.152.226\n" +
         "PASO 2: 202 está entre 192-223 → Clase C → máscara /24\n" +
         "PASO 3: 2^n ≥ 100 → n = 7 bits → /24 + 7 = /31 → 255.255.255.254\n" +
         "PASO 4: Blocksize = 2^(32-31) = 2^1 = 2 → hosts = 0 (solo enlace punto a punto)\n" +
         "PASO 5: Subredes desde 202.55.152.0 hasta 202.55.152.198 (100 subredes con blocksize 2)"
},



];



registrarAsignatura('so', BANK.so);
window.guardarTrabajo = guardarTrabajo;
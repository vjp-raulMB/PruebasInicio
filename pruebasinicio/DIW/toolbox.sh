#!/bin/bash

# --- FUNCIONES DE CALCULADORA (funciones1.sh) ---
calculadora() {
    clear
    echo "=== CALCULADORA BÁSICA ==="
    read -p "Número 1: " num1
    read -p "Número 2: " num2
    read -p "Operador (+, -, *, /): " operador

    case $operador in
        "+") resultado=$((num1 + num2));;
        "-") resultado=$((num1 - num2));;
        "*") resultado=$((num1 * num2));;
        "/")
            if [ $num2 -ne 0 ]; then
                resultado=$(echo "scale=2; $num1 / $num2" | bc)
            else
                echo "Error: división entre cero"
                read -p "Presiona [Enter] para continuar..."
                return
            fi
            ;;
        *) echo "Operador no válido"; read -p "Presiona [Enter] para continuar..."; return ;;
    esac
    echo "Resultado: $resultado"
    read -p "Presiona [Enter] para continuar..."
}

# --- FUNCIONES DE PALÍNDROMO (funciones2.sh) ---
es_palindromo() {
    clear
    echo "=== VERIFICAR PALÍNDROMO ==="
    read -p "Ingresa una palabra o frase: " entrada
    palabra=$(echo "$entrada" | tr '[:upper:]' '[:lower:]' | tr -d ' ')
    reversa=$(echo "$palabra" | rev)

    if [ "$palabra" == "$reversa" ]; then
        echo "'$entrada' ES un palíndromo"
    else
        echo "'$entrada' NO es un palíndromo"
    fi
    read -p "Presiona [Enter] para continuar..."
}

# --- GENERADOR DE CONTRASEÑAS (funciones3.sh) ---
generar_password() {
    clear
    echo "=== GENERADOR DE CONTRASEÑAS ==="
    read -p "Longitud de la contraseña (mínimo 6): " longitud
    if ! [[ "$longitud" =~ ^[0-9]+$ ]] || [ "$longitud" -lt 6 ]; then
        echo "Longitud inválida. Mínimo 6 caracteres."
        read -p "Presiona [Enter] para continuar..."
        return
    fi
    caracteres='A-Za-z0-9./!@#$%^&*'
    password=$(cat /dev/urandom | tr -dc "$caracteres" | head -c "$longitud")
    echo "Contraseña generada: $password"
    read -p "Presiona [Enter] para continuar..."
}

# --- CONTADOR DE ARCHIVOS (funciones4.sh) ---
contar_archivos() {
    clear
    echo "=== CONTADOR DE ARCHIVOS ==="
    read -p "Directorio a analizar (deja vacío para actual): " directorio
    directorio=${directorio:-.}

    if [ ! -d "$directorio" ]; then
        echo "El directorio no existe."
        read -p "Presiona [Enter] para continuar..."
        return
    fi

    txt=$(find "$directorio" -type f -name "*.txt" | wc -l)
    sh=$(find "$directorio" -type f -name "*.sh" | wc -l)
    py=$(find "$directorio" -type f -name "*.py" | wc -l)

    echo "Conteo de archivos en '$directorio':"
    echo "  .txt : $txt"
    echo "  .sh  : $sh"
    echo "  .py  : $py"
    read -p "Presiona [Enter] para continuar..."
}

# --- CALIFICADOR DE ESTUDIANTES (funciones5.sh) ---
calcular_nota() {
    local puntaje=$1
    if [ $puntaje -ge 90 ]; then echo "A"
    elif [ $puntaje -ge 80 ]; then echo "B"
    elif [ $puntaje -ge 70 ]; then echo "C"
    elif [ $puntaje -ge 60 ]; then echo "D"
    else echo "F"
    fi
}

procesar_estudiantes() {
    clear
    echo "=== CALIFICACIONES DE ESTUDIANTES ==="
    declare -A estudiantes=(
        ["Ana"]=95
        ["Luis"]=82
        ["Marta"]=73
        ["Carlos"]=58
    )

    for nombre in "${!estudiantes[@]}"; do
        nota=$(calcular_nota "${estudiantes[$nombre]}")
        echo "$nombre: ${estudiantes[$nombre]} -> $nota"
    done
    read -p "Presiona [Enter] para continuar..."
}

# --- MENÚ DE DISCOS (menu_discos.sh) ---
menu_discos() {
    while true; do
        clear
        echo "======================================="
        echo "   MONITORIZACIÓN DEL SISTEMA"
        echo "======================================="
        echo "1) Esquema de particiones y volúmenes"
        echo "2) Uso de espacio en disco"
        echo "3) Monitorización en vivo (top)"
        echo "4) Últimos 20 eventos del sistema"
        echo "5) Monitorizar eventos en tiempo real"
        echo "0) Volver al menú principal"
        echo "---------------------------------------"
        read -p "Elige una opción: " opcion

        case $opcion in
            1) clear; echo "-- Esquema de particiones --"; lsblk -f; read -p "Presiona [Enter]...";;
            2) clear; echo "-- Uso de espacio --"; df -hT; read -p "Presiona [Enter]...";;
            3) clear; echo "Presiona 'q' para salir de top."; sleep 2; top;;
            4) clear; echo "-- Últimos 20 eventos --"; sudo journalctl -n 20 --no-pager; read -p "Presiona [Enter]...";;
            5) clear; echo "Presiona Ctrl+C para detener."; sleep 2; sudo journalctl -f;;
            0) return ;;
            *) echo "Opción no válida."; sleep 1 ;;
        esac
    done
}

# --- MENÚ DEL SISTEMA (menu_sistema.sh) ---
crear_enlace() {
    clear
    echo "=== CREAR ENLACE ==="
    read -p "Ruta del fichero destino (existente): " destino
    [ ! -e "$destino" ] && echo "El fichero destino no existe." && read -p "Enter..." && return

    read -p "Ruta del enlace a crear: " enlace
    echo "Tipo de enlace:"
    echo "1) Enlace duro (ln)"
    echo "2) Enlace simbólico (ln -s)"
    read -p "Elige [1-2]: " tipo

    case $tipo in
        1) ln "$destino" "$enlace" && echo "Enlace duro creado." ;;
        2) ln -s "$destino" "$enlace" && echo "Enlace simbólico creado." ;;
        *) echo "Opción inválida." ;;
    esac
    read -p "Presiona [Enter]..."
}

info_sistema() {
    clear
    echo "=== INFORMACIÓN DEL SISTEMA ==="
    echo "Modelo de CPU:"; lscpu | grep "Model name"
    echo; echo "Número de CPUs:"; lscpu | grep "^CPU(s)"
    echo; echo "Velocidad del procesador:"; lscpu | grep "MHz"
    echo; echo "Uso de memoria RAM:"; free -h
    read -p "Presiona [Enter]..."
}

gestionar_paquetes() {
    clear
    echo "=== GESTIÓN DE PAQUETES ==="
    echo "1) Comprobar si un paquete está instalado"
    echo "2) Listar todos los paquetes instalados"
    read -p "Elige [1-2]: " opcion

    case $opcion in
        1)
            read -p "Nombre del paquete: " paquete
            if dpkg -s "$paquete" &>/dev/null; then
                echo "El paquete '$paquete' está instalado."
            else
                echo "El paquete '$paquete' NO está instalado."
            fi
            ;;
        2) dpkg -l | less ;;
        *) echo "Opción no válida." ;;
    esac
    read -p "Presiona [Enter]..."
}

menu_sistema() {
    while true; do
        clear
        echo "======== MENÚ DEL SISTEMA ========"
        echo "1) Crear enlace duro o simbólico"
        echo "2) Mostrar información del sistema"
        echo "3) Gestionar paquetes"
        echo "0) Volver al menú principal"
        echo "=================================="
        read -p "Selecciona [0-3]: " opcion

        case $opcion in
            1) crear_enlace ;;
            2) info_sistema ;;
            3) gestionar_paquetes ;;
            0) return ;;
            *) echo "Opción no válida."; sleep 1 ;;
        esac
    done
}

# --- HERRAMIENTAS DEL SISTEMA (sistema_tools.sh) ---
listar_procesos() {
    clear
    echo "--- Listado de procesos ---"
    ps aux | less
    read -p "Presiona [Enter]..."
}

terminar_proceso() {
    clear
    echo "--- Terminar un proceso ---"
    read -p "¿Deseas detener un proceso? (s/n): " respuesta
    [[ "$respuesta" != "s" ]] && echo "Operación cancelada." && read -p "Enter..." && return

    read -p "Introduce el PID del proceso: " pid
    if ps -p "$pid" > /dev/null 2>&1; then
        kill "$pid" && echo "Proceso $pid terminado." || echo "Error al terminar $pid."
    else
        echo "El proceso con PID $pid no existe."
    fi
    read -p "Presiona [Enter]..."
}

monitorizar_proceso() {
    clear
    echo "--- Monitorizar un proceso ---"
    read -p "Nombre del proceso a monitorizar: " nombre
    if ! pgrep "$nombre" > /dev/null 2>&1; then
        echo "No se encontró el proceso '$nombre'."
        read -p "Enter..." && return
    fi

    echo "Mostrando información (Ctrl+C para salir)..."
    while true; do
        clear
        echo "PID     USER     %CPU    %MEM    CMD"
        ps -C "$nombre" -o pid,user,%cpu,%mem,cmd --sort=-%cpu
        sleep 5
    done
}

programar_backup() {
    clear
    echo "--- Programar Backup con Cron ---"
    read -p "Directorio a respaldar: " origen
    [[ ! -d "$origen" ]] && echo "Directorio no existe." && read -p "Enter..." && return

    read -p "Directorio de destino: " destino
    mkdir -p "$destino"

    echo "Frecuencia:"
    echo "1. Diario (02:00)"
    echo "2. Semanal (Domingo 03:00)"
    echo "3. Mensual (Día 1, 04:00)"
    read -p "Opción [1-3]: " freq

    case $freq in
        1) cron_schedule="0 2 * * *" ;;
        2) cron_schedule="0 3 * * 0" ;;
        3) cron_schedule="0 4 1 * *" ;;
        *) echo "Opción inválida."; read -p "Enter..." && return ;;
    esac

    backup_file="$destino/backup_$(basename "$origen")_\$(date +\%Y-\%m-\%d).tar.gz"
    command="tar -czf $backup_file $origen"
    cron_job="$cron_schedule $command"

    (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
    [[ $? -eq 0 ]] && echo "Backup programado correctamente." || echo "Error al programar."
    echo "Línea añadida: $cron_job"
    read -p "Presiona [Enter]..."
}

menu_herramientas() {
    while true; do
        clear
        echo "=========================================="
        echo "    HERRAMIENTAS DE ADMINISTRACIÓN"
        echo "=========================================="
        echo "1. Listar procesos"
        echo "2. Terminar un proceso"
        echo "3. Monitorizar un proceso"
        echo "4. Programar backup"
        echo "0. Volver al menú principal"
        echo "------------------------------------------"
        read -p "Selecciona [0-4]: " opcion

        case $opcion in
            1) listar_procesos ;;
            2) terminar_proceso ;;
            3) monitorizar_proceso ;;
            4) programar_backup ;;
            0) return ;;
            *) echo "Opción no válida."; sleep 1 ;;
        esac
    done
}

# --- ADMINISTRACIÓN DE USUARIOS Y GRUPOS (admin_usuario.sh) ---
admin_usuario() {
    if [[ $EUID -ne 0 ]]; then
        clear
        echo "Este módulo requiere permisos de root."
        read -p "Presiona [Enter] para continuar..."
        return
    fi

    crear_usuario() {
        clear
        echo "=== CREAR USUARIO ==="
        read -p "Nombre del nuevo usuario: " usuario
        if id "$usuario" &>/dev/null; then
            echo "El usuario '$usuario' ya existe."
            read -p "Enter..." && return
        fi

        read -s -p "Contraseña para '$usuario': " passwd
        echo
        useradd -m "$usuario"
        echo "$usuario:$passwd" | chpasswd
        echo "Usuario '$usuario' creado correctamente."
        read -p "Presiona [Enter]..."
    }

    eliminar_usuario() {
        clear
        echo "=== ELIMINAR USUARIO ==="
        read -p "Nombre del usuario a eliminar: " usuario
        if id "$usuario" &>/dev/null; then
            userdel -r "$usuario"
            echo "Usuario '$usuario' eliminado."
        else
            echo "El usuario '$usuario' no existe."
        fi
        read -p "Enter..."
    }

    crear_grupo() {
        clear
        echo "=== CREAR GRUPO ==="
        read -p "Nombre del nuevo grupo: " grupo
        if getent group "$grupo" &>/dev/null; then
            echo "El grupo '$grupo' ya existe."
        else
            groupadd "$grupo"
            echo "Grupo '$grupo' creado."
        fi
        read -p "Enter..."
    }

    añadir_usuario_a_grupo() {
        clear
        echo "=== AÑADIR USUARIO A GRUPO ==="
        read -p "Usuario: " usuario
        if ! id "$usuario" &>/dev/null; then
            echo "El usuario '$usuario' no existe."
            read -p "Enter..." && return
        fi

        read -p "Grupo: " grupo
        if ! getent group "$grupo" &>/dev/null; then
            echo "El grupo '$grupo' no existe."
            read -p "Enter..." && return
        fi

        usermod -aG "$grupo" "$usuario"
        echo "Usuario '$usuario' añadido al grupo '$grupo'."
        read -p "Enter..."
    }

    listar_usuarios() {
        clear
        echo "=== LISTA DE USUARIOS ==="
        cut -d: -f1 /etc/passwd
        read -p "Enter..."
    }

    listar_grupos() {
        clear
        echo "=== LISTA DE GRUPOS ==="
        cut -d: -f1 /etc/group
        read -p "Enter..."
    }

    listar_usuarios_de_grupo() {
        clear
        echo "=== USUARIOS DE UN GRUPO ==="
        read -p "Nombre del grupo: " grupo
        if ! getent group "$grupo" &>/dev/null; then
            echo "El grupo '$grupo' no existe."
            read -p "Enter..." && return
        fi

        miembros=$(getent group "$grupo" | cut -d: -f4)
        if [[ -z "$miembros" ]]; then
            echo "El grupo '$grupo' no tiene usuarios."
        else
            echo "Usuarios en '$grupo': $miembros"
        fi
        read -p "Enter..."
    }

    while true; do
        clear
        echo "ADMINISTRACIÓN DE USUARIOS Y GRUPOS (ROOT)"
        echo "1) Crear usuario"
        echo "2) Eliminar usuario"
        echo "3) Crear grupo"
        echo "4) Añadir usuario a grupo"
        echo "5) Listar usuarios"
        echo "6) Listar grupos"
        echo "7) Listar usuarios de un grupo"
        echo "0) Volver al menú principal"
        read -p "Opción: " opcion

        case $opcion in
            1) crear_usuario ;;
            2) eliminar_usuario ;;
            3) crear_grupo ;;
            4) añadir_usuario_a_grupo ;;
            5) listar_usuarios ;;
            6) listar_grupos ;;
            7) listar_usuarios_de_grupo ;;
            0) return ;;
            *) echo "Opción no válida."; sleep 1 ;;
        esac
    done
}

# --- MENÚ PRINCIPAL ---
while true; do
    clear
    echo "=========================================="
    echo "     SISTEMA DE ADMINISTRACIÓN INTEGRADO"
    echo "=========================================="
    echo "1. Calculadora básica"
    echo "2. Verificar palíndromo"
    echo "3. Generar contraseña segura"
    echo "4. Contar archivos por tipo"
    echo "5. Calificar estudiantes"
    echo "6. Monitoreo de discos"
    echo "7. Gestión del sistema"
    echo "8. Herramientas de procesos y backup"
    echo "9. Administración de usuarios y grupos (root)"
    echo
    echo "0. Salir"
    echo "------------------------------------------"
    read -p "Selecciona una opción [0-9]: " opcion

    case $opcion in
        1) calculadora ;;
        2) es_palindromo ;;
        3) generar_password ;;
        4) contar_archivos ;;
        5) procesar_estudiantes ;;
        6) menu_discos ;;
        7) menu_sistema ;;
        8) menu_herramientas ;;
        9) admin_usuario ;;
        0) clear; echo "¡Hasta luego!"; exit 0 ;;
        *) echo "Opción no válida."; sleep 1 ;;
    esac
done
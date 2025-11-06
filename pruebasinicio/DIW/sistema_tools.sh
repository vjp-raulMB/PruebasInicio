#!/bin/bash

# ============================
# Script de gestión del sistema
# ============================

# --- Función: Listado de procesos ---
function listar_procesos() {
    clear
    echo -e "--- Listado de procesos del sistema ---\n"
    ps aux | less
}

# --- Función: Terminar un proceso ---
function terminar_proceso() {
    clear
    echo -e "--- Terminar un proceso ---\n"
    read -p "¿Deseas detener un proceso? (s/n): " respuesta
    if [[ "$respuesta" != "s" ]]; then
        echo "Operación cancelada."
        read -p "Presiona [Enter] para continuar..."
        return
    fi

    read -p "Introduce el PID del proceso que deseas terminar: " pid
    if ps -p "$pid" > /dev/null 2>&1; then
        kill "$pid"
        if [[ $? -eq 0 ]]; then
            echo "Proceso $pid terminado con éxito."
        else
            echo "Error al intentar terminar el proceso $pid."
        fi
    else
        echo "El proceso con PID $pid no existe."
    fi
    read -p "Presiona [Enter] para continuar..."
}

# --- Función: Monitorizar un proceso ---
function monitorizar_proceso() {
    clear
    echo -e "--- Monitorizar un proceso ---\n"
    read -p "Introduce el nombre del proceso a monitorizar: " nombre

    if ! pgrep "$nombre" > /dev/null 2>&1; then
        echo "No se encontró ningún proceso con el nombre '$nombre'."
        read -p "Presiona [Enter] para continuar..."
        return
    fi

    echo "Mostrando información del proceso '$nombre' (Ctrl + C para salir)..."
    while true; do
        clear
        echo "PID     USER     %CPU    %MEM    CMD"
        ps -C "$nombre" -o pid,user,%cpu,%mem,cmd
        sleep 5
    done
}

# --- Función: Programar Backup ---
function programar_backup() {

    clear
    echo -e "--- Programar Copia de Seguridad con Cron ---"
    read -p "Ruta absoluta del directorio a respaldar: " origen

    if [[ ! -d "$origen" ]]; then
        echo -e "Error: El directorio de origen no existe."
        read -p "Presiona [Enter] para continuar..."
        return
    fi

    read -p "Ruta absoluta del directorio de destino: " destino
    mkdir -p "$destino"

    echo "Selecciona la frecuencia:"
    echo "1. Diario (02:00h)"
    echo "2. Semanal (Domingos a las 03:00h)"
    echo "3. Mensual (Día 1 a las 04:00h)"
    read -p "Opción [1-3]: " freq

    local cron_schedule

    case $freq in
        1) cron_schedule="0 2 * * *" ;;
        2) cron_schedule="0 3 * * 0" ;;
        3) cron_schedule="0 4 1 * *" ;;
        *)
            echo -e "Opción no válida."
            read -p "Presiona [Enter] para continuar..."
            return ;;
    esac

    local backup_file="$destino/backup_$(basename "$origen")_\$(date +\%Y-\%m-\%d).tar.gz"
    local command="tar -czf $backup_file $origen"
    local cron_job="$cron_schedule $command"

    (crontab -l 2>/dev/null; echo "$cron_job") | crontab -

    if [[ $? -eq 0 ]]; then
        echo -e "Backup programado con éxito."
        echo "Se ha añadido la siguiente línea a 'crontab -l':"
        echo -e "$cron_job"
    else
        echo -e "Error al programar la tarea en cron."
    fi

    read -p "Presiona [Enter] para continuar..."
}

# --- Menú principal ---
while true; do
    clear
    echo "=========================================="
    echo "    🧠 Herramientas de Administración"
    echo "=========================================="
    echo "1. Listar procesos"
    echo "2. Terminar un proceso"
    echo "3. Monitorizar un proceso"
    echo "4. Programar backup"
    echo "5. Salir"
    echo "------------------------------------------"
    read -p "Selecciona una opción [1-5]: " opcion

    case $opcion in
        1) listar_procesos ;;
        2) terminar_proceso ;;
        3) monitorizar_proceso ;;
        4) programar_backup ;;
        5) echo "Saliendo..."; exit 0 ;;
        *) echo "Opción no válida."; sleep 1 ;;
    esac
done

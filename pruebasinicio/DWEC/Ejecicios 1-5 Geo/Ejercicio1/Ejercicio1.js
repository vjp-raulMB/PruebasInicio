// Inicializar el mapa
let map = L.map('map').setView([0, 0], 13); // Coordenadas iniciales temporales

// Añadir capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Definir icono personalizado
let customIcon = L.icon({
    iconUrl: 'https://i.pravatar.cc/150?img=68', // Imagen de ejemplo (avatar)
    iconSize: [50, 50], // Tamaño del icono
    iconAnchor: [25, 50], // Punto del icono que corresponde a la ubicación del marcador
    popupAnchor: [0, -50], // Punto desde donde se abrirá el popup
    className: 'rounded-marker' // Clase CSS opcional para estilos adicionales (redondear imagen)
});

let marker;

function updatePosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                console.log(`Posición actualizada: ${lat}, ${lng} (Precisión: ${accuracy}m)`);

                if (marker) {
                    // Si el marcador ya existe, actualizamos su posición
                    marker.setLatLng([lat, lng]);
                    map.setView([lat, lng]); // Opcional: centrar el mapa de nuevo
                } else {
                    // Si no existe, lo creamos
                    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
                    marker.bindPopup("<b>¡Estás aquí!</b>").openPopup();
                    map.setView([lat, lng], 15);
                }
            },
            (error) => {
                console.error("Error obteniendo la ubicación:", error);
                alert("No se pudo obtener tu ubicación. Asegúrate de permitir el acceso.");
            },
            {
                enableHighAccuracy: true
            }
        );
    } else {
        alert("Tu navegador no soporta geolocalización.");
    }
}

// Llamada inicial
updatePosition();

// Actualizar cada 30 segundos (30000 ms)
setInterval(updatePosition, 30000);

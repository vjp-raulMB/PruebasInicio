// Inicializar el mapa centrado en Cáceres
const map = L.map('map').setView([39.4753, -6.3724], 15);

// Añadir capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// URL del dataset de Open Data Cáceres
// Nota: Si esta URL falla (404 o CORS), verificar en el portal de opendata.caceres.es
const datasetUrl = './Ejercicio3.json';

// Función para cargar y mostrar los datos
async function loadBars() {
    try {
        const response = await fetch(datasetUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);

        // La estructura del JSON proporcionado es tipo SPARQL/RDF
        // Los datos están en data.results.bindings
        const items = data.results?.bindings || [];

        items.forEach(item => {
            // Extraer coordenadas (están dentro de la propiedad 'value')
            const lat = parseFloat(item.geo_lat?.value);
            const lon = parseFloat(item.geo_long?.value);

            if (!isNaN(lat) && !isNaN(lon)) {
                // Extraer información
                const name = item.rdfs_label?.value || 'Sin nombre';
                const phone = item.schema_telephone?.value || 'No disponible';

                // Sirve comida
                let servesFood = item.om_sirveComida?.value || 'No disponible';

                // Crear marcador
                const marker = L.marker([lat, lon]).addTo(map);

                // Crear contenido del popup
                const popupContent = `
                    <div class="popup-content">
                        <h3>${name}</h3>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                        <p><strong>Sirve comida:</strong> ${servesFood}</p>
                    </div>
                `;

                marker.bindPopup(popupContent);
            }
        });

    } catch (error) {
        console.error('Error al cargar los datos:', error);
        alert('Error al cargar los datos del archivo JSON local.');
    }
}

loadBars();

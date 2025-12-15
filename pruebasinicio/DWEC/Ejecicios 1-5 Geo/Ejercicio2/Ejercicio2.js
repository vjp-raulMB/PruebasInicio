// Inicializar el mapa centrado en Plasencia
let map = L.map('map').setView([40.035, -6.090], 14);

// Añadir capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// --- 1. El ayuntamiento de Plasencia (Marcador) ---
// Coordenadas: 40.0300, -6.0897
let ayuntamientoMarker = L.marker([40.0300, -6.0897]).addTo(map);
ayuntamientoMarker.bindPopup(`
    <div class="popup-content">
        <h3>Ayuntamiento de Plasencia</h3>
        <p>Casa Consistorial de la ciudad.</p>
        <a href="https://www.plasencia.es" target="_blank">Visitar web</a>
    </div>
`);

// --- 2. La Piscina bioclimática (Círculo) ---
// Coordenadas: 40.0447, -6.0850
let piscinaCircle = L.circle([40.0447, -6.0850], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.5,
    radius: 100 // Radio en metros
}).addTo(map);
piscinaCircle.bindPopup(`
    <div class="popup-content">
        <h3>Piscina Bioclimática</h3>
        <p>Instalación deportiva municipal.</p>
        <a href="https://www.plasencia.es/web/deportes/instalaciones-deportivas/piscina-bioclimatica" target="_blank">Visitar web</a>
    </div>
`);

// --- 3. El instituto (Polígono) - IES Parque de Monfragüe ---
// Centro: 40.0432, -6.0875
// Definimos un polígono aproximado alrededor del centro
let institutoPolygon = L.polygon([
    [40.0432, -6.0875],
    [40.0423, -6.0875],
    [40.0423, -6.0860],
    [40.0432, -6.0860]
], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5
}).addTo(map);
institutoPolygon.bindPopup(`
    <div class="popup-content">
        <h3>IES Valle del Jerte</h3>
        <p>Instituto de Educación Secundaria.</p>
        <a href="https://iesvallejertepla.educarex.es/" target="_blank">Visitar web</a>
    </div>
`);

// --- 4. La estación de trenes (Polígono) ---
// Centro: 40.0222, -6.0994
// Definimos un polígono aproximado
let estacionPolygon = L.polygon([
    [40.0230, -6.1005],
    [40.0230, -6.0985],
    [40.0215, -6.0985],
    [40.0215, -6.1005]
], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
estacionPolygon.bindPopup(`
    <div class="popup-content">
        <h3>Estación de Tren</h3>
        <p>Estación de ferrocarril de Plasencia.</p>
        <a href="https://www.adif.es" target="_blank">Visitar web</a>
    </div>
`);

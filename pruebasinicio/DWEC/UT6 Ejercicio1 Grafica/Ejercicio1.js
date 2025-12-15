const csvFileName = "spotify.csv";   // ← Cambia aquí si usaste otro nombre

    fetch(csvFileName)
      .then(r => {
        if (!r.ok) throw new Error(`No se encuentra "${csvFileName}".<br><br>
          • Renómbralo exactamente así (sin espacios)<br>
          • O cambia la línea 36 del código con el nombre exacto`);
        return r.text();
      })
      .then(text => {
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: results => procesarDatos(results.data),
          error: err => mostrarError("Error al leer el CSV: " + err)
        });
      })
      .catch(err => mostrarError(err.message));

    function mostrarError(msg) {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = msg;
    }

    function procesarDatos(data) {
      const genres = {};

      data.forEach(row => {
        if (!row.artist_genres || row.artist_genres === "N/A") return;
        const lista = row.artist_genres
          .toString()
          .split(/,\s*|\s+/)
          .map(g => g.trim().toLowerCase())
          .filter(Boolean);

        const pop = Number(row.artist_popularity) || 0;

        lista.forEach(g => {
          if (!genres[g]) genres[g] = { sum: 0, count: 0 };
          genres[g].sum += pop;
          genres[g].count += 1;
        });
      });

      const arr = Object.keys(genres).map(g => ({
        genre: g.charAt(0).toUpperCase() + g.slice(1),
        avg: genres[g].sum / genres[g].count,
        artists: genres[g].count
      }))
      .filter(x => x.artists >= 3)
      .sort((a,b) => b.avg - a.avg)
      .slice(0, 30);

      document.getElementById('loading').style.display = 'none';
      document.getElementById('chartContainer').style.display = 'block';

      new Chart(document.getElementById('genreChart'), {
        type: 'bar',
        data: {
          labels: arr.map(x => `${x.genre} (${x.artists})`),
          datasets: [{
            data: arr.map(x => x.avg.toFixed(1)),
            backgroundColor: '#1DB954',
            borderColor: '#1ed760',
            borderWidth: 2,
            borderRadius: 6
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Top 30 Géneros por Popularidad Promedio de Artistas', color: '#fff', font: {size: 18} }
          },
          scales: {
            x: { max: 100, ticks: { color: '#ccc' }, grid: { color: '#333' } },
            y: { ticks: { color: '#fff' }, grid: { display: false } }
          }
        }
      });
    }
let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener('readystatechange', procesarPeticion);
    peticionAjax.open('GET', 'https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json', true);
    peticionAjax.send();

    function procesarPeticion() {
      if (this.readyState === 4 && this.status === 200) {
        let datos = JSON.parse(this.responseText);
        procesarDatos(datos);
      }
    }

    function procesarDatos(objetoDatos) {
      const tablaBody = document.querySelector('#tabla-restaurantes tbody');
      tablaBody.innerHTML = "";

      for (let restaurante of objetoDatos.results.bindings) {
        const fila = document.createElement('tr');

        fila.innerHTML = `
          <td>${restaurante.rdfs_label?.value || '—'}</td>
          <td>${restaurante.om_tenedores?.value || '—'}</td>
          <td>${restaurante.schema_address_addressLocality?.value || '—'}</td>
          <td>${restaurante.schema_telephone?.value || '—'}</td>
          <td><a href="${restaurante.uri?.value}" target="_blank">Ver</a></td>
        `;

        tablaBody.appendChild(fila);
      }
    }

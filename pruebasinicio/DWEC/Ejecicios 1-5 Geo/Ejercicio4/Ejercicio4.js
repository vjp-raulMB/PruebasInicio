document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const btnEnviar = document.getElementById('btn-enviar');
    const mensajeDiv = document.getElementById('mensaje');

    const ageContainer = document.getElementById('age-input-container');
    const edadInput = document.getElementById('edad');
    const btnGuardarEdad = document.getElementById('btn-guardar-edad');

    const btnConsultar = document.getElementById('btn-consultar');
    const listaUsuarios = document.getElementById('lista-usuarios');

    let currentName = '';

    btnEnviar.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        if (!nombre) {
            alert('Por favor, introduce un nombre.');
            return;
        }

        currentName = nombre;
        const storedAge = localStorage.getItem(nombre);

        if (storedAge) {
            mensajeDiv.textContent = `Hola ${nombre}, tienes ${storedAge} años.`;
            mensajeDiv.style.color = '#00796b';
            ageContainer.classList.add('hidden');
        } else {
            mensajeDiv.textContent = `El usuario ${nombre} no existe. Por favor, introduce tu edad.`;
            mensajeDiv.style.color = '#d32f2f';
            ageContainer.classList.remove('hidden');
            edadInput.focus();
        }
    });

    btnGuardarEdad.addEventListener('click', () => {
        const edad = edadInput.value.trim();
        if (!edad) {
            alert('Por favor, introduce una edad válida.');
            return;
        }

        localStorage.setItem(currentName, edad);
        mensajeDiv.textContent = `Guardado: ${currentName} tiene ${edad} años.`;
        mensajeDiv.style.color = '#00796b';

        // Reset
        ageContainer.classList.add('hidden');
        nombreInput.value = '';
        edadInput.value = '';
        currentName = '';
    });

    btnConsultar.addEventListener('click', () => {
        listaUsuarios.classList.remove('hidden');
        listaUsuarios.innerHTML = '';
        if (localStorage.length === 0) {
            listaUsuarios.innerHTML = '<p>No hay usuarios registrados.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            const li = document.createElement('li');
            li.className = 'user-item';
            li.textContent = `Nombre: ${key}, Edad: ${value}`;
            ul.appendChild(li);
        }
        listaUsuarios.appendChild(ul);
    });
});

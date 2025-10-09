const div = document.querySelector('#contenedorGeneral');
if (div) {
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid red";
    div.style.color = "blue";
    div.style.backgroundColor = "#9e9e9e";
}

document.addEventListener('DOMContentLoaded', () => {
      const div = document.getElementById('contenedorGeneral');

      function actualizarDimensiones() {
        div.textContent = `${window.innerWidth} - ${window.innerHeight}`;
      }

      actualizarDimensiones();

      window.addEventListener('resize', actualizarDimensiones);
    });

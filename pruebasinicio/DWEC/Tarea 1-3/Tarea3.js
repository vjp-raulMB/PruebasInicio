let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener('readystatechange', procesarPeticion);
    peticionAjax.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    peticionAjax.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    peticionAjax.send();

    function procesarPeticion() {
      if (this.readyState === 4 && this.status === 200) {
        let objetoResultado = JSON.parse(this.responseText);
        procesarDatos(objetoResultado);
      }
    }
    function procesarDatos(objetoResultado) {
      const postsContainer = document.getElementById("posts");
        for (let post of objetoResultado) {
            crearPost(post, postsContainer);
        }
    }
 
function crearPost(post, container) {
    let div = document.createElement("div");
    div.classList.add("entrada");
    div.innerHTML =
        `<p><strong>TITULO:</strong> ${post.title}</p>
            <div>
                <p><strong>Contenido</strong>: ${post.body}</p>
                <button class="mostrarUsuario">Usuario del Post</button>
                <button class="mostrarComentarios">Mostrar Comentarios</button>
                <div class="usuario d-none">
                    <p><strong>NOMBRE USUARIO: </strong> <span id="nombreUser">Nombre</span></p>
                </div>
                <div class="comentarios d-none">
                    <p><strong>Comentarios: </strong></p>
                    <p>- Comentario 1: </p>
                    <p>- Comentario 2: </p>
                </div>
            </div>`;

    div.querySelector(".mostrarUsuario").addEventListener("click", function () {
        let usuarioDiv = div.querySelector(".usuario");
        if (usuarioDiv.className.includes("d-none")) {
            cargarUsuario(post.userId, div);
        } else {
            usuarioDiv.classList.toggle("d-none");
        }
    });
    container.appendChild(div);
}

function cargarUsuario(userId, postDiv) {
        let userRequest = new XMLHttpRequest();
        userRequest.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                let userData = JSON.parse(this.responseText);
                let nombreUserSpan = postDiv.querySelector("#nombreUser");
                nombreUserSpan.textContent = userData.name;
                let usuarioDiv = postDiv.querySelector(".usuario");
                usuarioDiv.classList.remove("d-none");
            }
        });
        userRequest.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`, true);
        userRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        userRequest.send();
}


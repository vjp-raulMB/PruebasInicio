function cambiarATwitter() {

    const enlace = document.querySelector('a');
    if (!enlace) return;

    enlace.id = "aTwitter";

    enlace.href = "https://www.twitter.com";

    enlace.textContent = "Twitter";

    if (enlace.hasAttribute("title")) {
        enlace.title = "Ir a Twitter";
    }
}

cambiarATwitter();

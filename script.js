const htmlElemento = document.documentElement;
const tema = htmlElemento.getAttribute("tema");
const botaoAbreMenuHamburguer = document.querySelector(".menu-hamburguer");
const linksNavegacao = document.querySelectorAll(".link-navegacao");

botaoAbreMenuHamburguer.addEventListener("click", () => {
    botaoAbreMenuHamburguer.classList.toggle("ativo");
});

linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
        botaoAbreMenuHamburguer.click();
    })
})
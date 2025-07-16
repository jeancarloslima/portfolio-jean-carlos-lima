const htmlElemento = document.documentElement;
const botaoTrocaTema = document.getElementById("btn-troca-tema");
const iconteBotaoTrocaTema = document.getElementById("icone-botao-troca-tema");
const botaoAbreMenuHamburguer = document.getElementById("menu-hamburguer");
const linksNavegacao = document.querySelectorAll(".link-navegacao");
let tema = htmlElemento.getAttribute("tema");

botaoTrocaTema.addEventListener("click", () => {
    if (tema === "escuro") {
        htmlElemento.setAttribute("tema", "claro");
        tema = htmlElemento.getAttribute("tema");
        iconteBotaoTrocaTema.classList.remove("fa-sun");
        iconteBotaoTrocaTema.classList.add("fa-moon");
    } else {
        htmlElemento.setAttribute("tema", "escuro");
        tema = htmlElemento.getAttribute("tema");
        iconteBotaoTrocaTema.classList.remove("fa-moon");
        iconteBotaoTrocaTema.classList.add("fa-sun");
    }
});

botaoAbreMenuHamburguer.addEventListener("click", () => {
    botaoAbreMenuHamburguer.classList.toggle("ativo");
});

linksNavegacao.forEach((link) => {
    link.addEventListener("click", () => {
        botaoAbreMenuHamburguer.click();
    })
})
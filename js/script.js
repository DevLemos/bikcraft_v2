// Ativar links do menu

const links = Array.from(document.querySelectorAll(".header-menu a"));
links.forEach(function (item) {
  const url = location.href;
  const href = item.href;
  if (url.includes(href)) item.classList.add("ativo");
});

// Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search);

parametros.forEach(function (item) {
  const elemento = document.querySelector(`#${item}`);
  if (elemento) elemento.checked = true;
});

// Perguntas frequentes

const perguntas = Array.from(document.querySelectorAll(".perguntas button"));
perguntas.forEach(function (pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
});

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  resposta.setAttribute("aria-expanded", ativa);
  console.log(resposta);
}

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", trocarimagem);
});

function trocarimagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) galeriaContainer.prepend(img);
}

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.ClipboardJS) {
  new ClipboardJS(".introducao-conteudo p");
}

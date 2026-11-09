// Carrossel da Geely Store
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const prevBTN = document.getElementById("prev");
const nextBTN = document.getElementById("next");

const total = items.length;
const INTERVALO = 5000; // troca de slide a cada 5 segundos
let active = 0;
let timer;

// Fecha o "Saiba Mais" de um slide
function fecharSaiba(item) {
    const botao = item.querySelector(".btn");
    const texto = item.querySelector(".saiba");
    botao.setAttribute("aria-expanded", "false");
    botao.textContent = "Saiba Mais";
    texto.hidden = true;
}

// Mostra o slide de número "novo"
function irPara(novo) {
    if (novo === active) return;

    items[active].classList.remove("active");
    items[active].setAttribute("aria-hidden", "true");
    dots[active].classList.remove("active");
    fecharSaiba(items[active]);

    // volta ao início depois do último e ao último antes do primeiro
    active = (novo + total) % total;

    items[active].classList.add("active");
    items[active].removeAttribute("aria-hidden");
    dots[active].classList.add("active");
    numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

// Avanço automático (para enquanto o "Saiba Mais" estiver aberto)
function iniciarTimer() {
    clearInterval(timer);
    timer = setInterval(() => irPara(active + 1), INTERVALO);
}

function pararTimer() {
    clearInterval(timer);
}

prevBTN.addEventListener("click", () => { irPara(active - 1); iniciarTimer(); });
nextBTN.addEventListener("click", () => { irPara(active + 1); iniciarTimer(); });

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => { irPara(index); iniciarTimer(); });
});

// Botão "Saiba Mais" abre e fecha o texto completo
document.querySelectorAll(".btn").forEach((botao) => {
    botao.addEventListener("click", () => {
        const texto = document.getElementById(botao.getAttribute("aria-controls"));
        const abrir = texto.hidden;
        texto.hidden = !abrir;
        botao.setAttribute("aria-expanded", String(abrir));
        botao.textContent = abrir ? "Mostrar menos" : "Saiba Mais";
        abrir ? pararTimer() : iniciarTimer();
    });
});

// Setas do teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") { irPara(active + 1); iniciarTimer(); }
    if (event.key === "ArrowLeft") { irPara(active - 1); iniciarTimer(); }
});

// Deslizar o dedo no celular
let inicioToque = null;
const area = document.querySelector(".container");
area.addEventListener("touchstart", (e) => { inicioToque = e.touches[0].clientX; }, { passive: true });
area.addEventListener("touchend", (e) => {
    if (inicioToque === null) return;
    const distancia = e.changedTouches[0].clientX - inicioToque;
    if (Math.abs(distancia) > 50) {
        irPara(distancia < 0 ? active + 1 : active - 1);
        iniciarTimer();
    }
    inicioToque = null;
});

iniciarTimer();

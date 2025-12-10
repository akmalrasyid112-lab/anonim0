const startBtn = document.getElementById("startBtn");
const countdownEl = document.getElementById("countdown");
const textEl = document.getElementById("text");
const music = document.getElementById("bgMusic");

let count = 3;

// Kata yang kamu mau muncul → hilang → ganti
const words = ["lagi", "hibernasi", "ya?", "sesusah itu kah?" , "hope u ace it" , "I'll be here waiting for u"];

startBtn.onclick = () => {
    startBtn.style.display = "none";
    countdownEl.style.display = "block";
    startCountdown();
    music.play();
};

function startCountdown() {
    let timer = setInterval(() => {
        countdownEl.textContent = count;
        countdownEl.style.animation = "pop 0.8s ease";

        count--;

        if (count < 0) {
            clearInterval(timer);
            countdownEl.style.display = "none";
            startTextReveal();
            startHearts();
        }
    }, 1000);
}

function startTextReveal() {
    let index = 0;

    let reveal = setInterval(() => {
        if (index < words.length) {
            textEl.style.opacity = 0;
            setTimeout(() => {
                textEl.textContent = words[index];
                textEl.style.animation = "fadeWords 1s ease forwards";
                index++;
            }, 250);
        } else {
            clearInterval(reveal);
        }
    }, 1500);
}

function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤";

        let size = Math.random() * 25 + 15;
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 120); // makin kecil → makin banyak hati
}

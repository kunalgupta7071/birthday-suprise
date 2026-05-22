
        function init() {
            createReasons();
            displayRandomQuote();
            setInterval(createHeart, 1000);
            setInterval(createBalloon, 3000);
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }

        function displayRandomQuote() {
            const quotes = [
                "May your 20s be as beautiful as your smile and as bright as your soul.",
                "20 looks absolutely magical on you. Keep shining like the star you are!",
                "Wishing you a year where every dream finds its way to reality. Happy 20th!",
                "You aren't just getting older; you're becoming a more exquisite version of yourself.",
                "May your journey be filled with aesthetic vibes, endless laughter, and true love."
            ];
            const quoteElement = document.getElementById('birthdayQuote');
            quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
        }
function blowCandle(){

    const cake = document.getElementById("cakeBox");
    const wish = document.getElementById("wishText");

    cake.innerHTML = "🍰";

    wish.style.display = "block";

    confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 }
    });

}
        function createReasons() {
            const reasons = ["Your Smile", "Your Kindness", "How you handle me", "Your dreams", "Your voice", "The way you laugh", "Your support", "Your style", "Your patience", "Your heart", "Your wisdom", "How you listen", "Your vibe", "Your strength", "Your loyalty", "Your cute anger", "Your morning energy", "Your hair", "Your care", "Simply being YOU."];
            const grid = document.getElementById('reasonsGrid');
            reasons.forEach((r, i) => {
                grid.innerHTML += `<div class="reason-card"><b>#${i+1}</b><p>${r}</p></div>`;
            });
        }

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }

        function createBalloon() {
            const balloon = document.createElement("div");
            balloon.classList.add("balloon");
            const colors = ['🎈', '💖', '✨', '🌸'];
            balloon.innerHTML = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.animationDuration = Math.random() * 5 + 5 + "s";
            document.body.appendChild(balloon);
            setTimeout(() => balloon.remove(), 10000);
        }

        function showMemory(card) {
            const span = card.querySelector('span');
            span.style.display = span.style.display === 'block' ? 'none' : 'block';
        }

        function getBlessing() {
            const blessings = ["Unlimited Smiles 😇", "Success in everything you touch 🚀", "Infinite Peace 🕊️", "A year full of surprises 🎁", "Staying this beautiful forever ✨"];
            document.getElementById('blessingText').innerText = blessings[Math.floor(Math.random() * blessings.length)];
            confetti({ particleCount: 50, spread: 50 });
        }

        function revealGift(el) {
            el.innerHTML = "💖";
            document.getElementById('secretWish').style.display = "block";
            confetti({ particleCount: 200, spread: 100 });
        }

        function toggleMusic() {
            const audio = document.getElementById('bdaySong');
            const vinyl = document.getElementById('vinylRecord');
            if (audio.paused) {
                audio.play();
                vinyl.style.animationPlayState = 'running';
                document.getElementById('musicStatus').innerText = "PLAYING";
            } else {
                audio.pause();
                vinyl.style.animationPlayState = 'paused';
                document.getElementById('musicStatus').innerText = "PAUSED";
            }
        }
        document.body.addEventListener("click", function () {

const audio = document.getElementById("bdaySong");

if(audio.paused){
audio.play();
}

}, { once: true });
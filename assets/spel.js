var timer; 
//Vänta tills allt är laddat för att köra js:n
document.addEventListener("DOMContentLoaded", function(){
    
    // definera olika HTML objekt som variabler 
    var start = document.getElementById('start');
    var game = document.getElementById('game');
    var ball = document.getElementById('ball');
    var scoreboard = document.getElementById('scoreboard');
    var clock = document.getElementById('clock');
    // definerar andra varibler som vi behöver
    var counter = 0;
    maxTime = 10;
    currentTime = 0;
    // definerar storlek på fönstre för att kunna flytta på bollen
    ww = window.innerWidth - 150;
    wh = window.innerHeight - 150;

    // start funktion. Sätter tid. Sätter Css-klassen "Gaming"
    start.onclick = function() {
        currentTime = 0;
        clock.innerHTML = maxTime;
        // så att det syns att spelet kör
        game.classList.add('gaming');
        // startar timern
        timer = window.setInterval(function(){
                updateTime();
            }, 1000);
        };
    // skapar en klick funktion för bollen. 
    ball.onclick = function() {
        // räknar poäng och uppdaterar HTMLen
        counter++;
        scoreboard.innerHTML = counter;
        // kallar på funktionen som flyttar bollen
       moveBall();
    };
});

// funktionen som flyttar på bollen
function moveBall(){
    // flyttar på bollen i höjdled. Random siffra mellan 0 och fönsters höjd
    ball.style.top = Math.floor(Math.random() * wh) + 'px';
    // flyttar på bollen i sidled. Random siffra mellan 0 och fönsters bred
    ball.style.left = Math.floor(Math.random() * ww) + 'px';
}

// funktionen som håller koll på tiden
function updateTime(){
    // tickar klockan framåt och uppdaterar HTMLen
    currentTime++;
    clock.innerHTML = maxTime - currentTime;
    // flyttar på bollen varannan sekund för ökad svårighet
    if (currentTime % 2 == 0) {
        moveBall();
    }
    // avslutar spelet utifallat tiden är ute
    if (currentTime == maxTime) {
        start.innerHTML = "Play Again?";
        game.classList.remove('gaming');
        clearInterval(timer);
    }
}
console.log(Math.floor(0.44));
console.log(Math.floor(0.84));
console.log(Math.random());

//Vänta tills allt är laddat för att köra js:n
document.addEventListener("DOMContentLoaded", function(){
    
    var start = document.getElementById('start');
    var game = document.getElementById('game');
    var ball = document.getElementById('ball');
    var counter = 0;
    var scoreboard = document.getElementById('scoreboard');
    var clock = document.getElementById('clock');
    var ww = window.innerWidth - 150;
    var wh = window.innerHeight - 150;
    
    start.onclick = function() {
        game.classList.add('gaming');
    };
    ball.onclick = function() {
        counter++;
        scoreboard.innerHTML = counter;
        ball.style.top = Math.floor(Math.random() * wh) + 'px';
        ball.style.left = Math.floor(Math.random() * ww) + 'px';
    };


});
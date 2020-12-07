var video = document.getElementById("myVideo");

var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Пауза";
    } else {
        video.pause();
        btn.innerHTML = "Воспроизвести";
    }
} 


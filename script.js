// Modo Oscuro

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('card').classList.toggle('dark-mode');
}

// Barra de progreso circular

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 50;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);
// Modo Oscuro

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('card').classList.toggle('dark-mode');
}

// Barra de progreso circular

let circularProgressHTML = document.querySelector(".circular-progress-html"),
    progressValueHTML = document.querySelector(".progress-value-html");
let progressStartValueHTML = 0,    
    progressEndValueHTML = 90,    
    speedHTML = 20;
    
let progressHTML = setInterval(() => {
    progressStartValueHTML++;
    progressValueHTML.textContent = `${progressStartValueHTML}%`
    circularProgressHTML.style.background = `conic-gradient(red ${progressStartValueHTML * 3.6}deg, #ededed 0deg)`
    if(progressStartValueHTML == progressEndValueHTML){
        clearInterval(progressHTML);
    }
}, speedHTML);

let circularProgressCSS = document.querySelector(".circular-progress-css"),
    progressValueCSS = document.querySelector(".progress-value-css");
let progressStartValueCSS = 0,    
    progressEndValueCSS = 70,    
    speedCSS = 20;
    
let progressCSS = setInterval(() => {
    progressStartValueCSS++;
    progressValueCSS.textContent = `${progressStartValueCSS}%`
    circularProgressCSS.style.background = `conic-gradient(blue ${progressStartValueCSS * 3.6}deg, #ededed 0deg)`
    if(progressStartValueCSS == progressEndValueCSS){
        clearInterval(progressCSS);
    }
}, speedCSS);

let circularProgressJS = document.querySelector(".circular-progress-js"),
    progressValueJS = document.querySelector(".progress-value-js");
let progressStartValueJS = 0,    
    progressEndValueJS = 50,    
    speedJS = 20;
    
let progressJS = setInterval(() => {
    progressStartValueJS++;
    progressValueJS.textContent = `${progressStartValueJS}%`
    circularProgressJS.style.background = `conic-gradient(purple ${progressStartValueJS * 3.6}deg, #ededed 0deg)`
    if(progressStartValueJS == progressEndValueJS){
        clearInterval(progressJS);
    }
}, speedJS);
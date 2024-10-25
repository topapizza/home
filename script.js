const button = document.getElementById('cpsbutton');
const h1 = document.getElementById('bestCPS');
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; 

cpsCounter = 0;
bestCps = 0;

/*---------Timer logic----------*/

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(TimerUpdate, 10);
        isRunning = true;
    }
    else{
        stop();
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false; 
    display.textContent = "00:00:00";
}
function TimerUpdate(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}



/*---------CPS logic----------*/

button.addEventListener('click', function() {
    cpsCounter ++;
    button.textContent = cpsCounter;

    setTimeout(function() {
        cpsCounter --;
        button.textContent = cpsCounter;
    }, 1000);
});


function update() {
    if(cpsCounter > bestCps){
        bestCps = cpsCounter;
    }
    h1.textContent = 'best:' + bestCps;

    requestAnimationFrame(update);
}

requestAnimationFrame(update);





/*---------Button logic----------*/

function goToYT(){
    window.location.href = "https://www.youtube.com";
}

function goToGitHub(){
    window.location.href = "https://www.github.com";
}

function goToChatGTP(){
    window.location.href = "https://chatgpt.com/?model=auto";
}

function goToDiscord(){
    window.location.href = "https://discord.com/";
}

function goToCopilot(){
    window.location.href = "https://copilot.microsoft.com";
}

function goToItchIO(){
    window.location.href = "https://itch.io";
}




const button = document.getElementById('cpsbutton');
const h1 = document.getElementById('bestCPS');

cpsCounter = 0;
bestCps = 0;

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

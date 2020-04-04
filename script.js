var text = document.getElementById("text");
var container = document.getElementById("container2");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breather(){
    container.className = 'container2 grow';
    setTimeout(() => {
        text.innerText="توقف"

        setTimeout(() => {
            container.className = 'container2 shrink';
            text.innerText="زفير"

            setTimeout(() => {
                text.innerText="شهيق"
            },breatheTime)
        },holdTime)
    },breatheTime);
}
breather();

setInterval(breather, totalTime);
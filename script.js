
//Fazendo o mario pular apertando qualquer tecla
const marioo = document.querySelector ('.marioo');
const pipe = document.querySelector ('.pipe');
//Quando pula ele adiciona uma nova classe e depois remove, fazendo isso em 500ms
const jump = () => {
    marioo.classList.add('jump');
    setTimeout(() => {
        marioo.classList.remove('jump');
    }, 500);
}
//fazendo o mario ir de vasco da gama
const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const mariooPosition = +window.getComputedStyle (marioo).bottom.replace('px', '');

        console.log(mariooPosition);

    if(pipePosition <= 120 && pipePosition > 0 && mariooPosition <80 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //fazendo o mario cair no cano parado kkkkkkkkkkkkkkkkkkkk

        marioo.style.animation = 'none';
        marioo.style.left = `${mariooPosition}px`;
        

        marioo.src = "./image/game-over.png";
        marioo.style.width = '400px';
        marioo.style.marginLeft = '0px'


    clearInterval(loop);
    }
}, 10);
document.addEventListener('keydown', jump);

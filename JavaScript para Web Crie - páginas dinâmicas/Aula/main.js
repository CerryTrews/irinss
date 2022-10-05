/*function tocaSomPom () {
        document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;
document.querySelector('.tecla_tim').onclick = tocaSomTim;
document.querySelector('.tecla_puff').onclick = tocaSomPuff;
document.querySelector('.tecla_splash').onclick = tocaSomSplash;
document.querySelector('.tecla_toim').onclick = tocaSomToim;
document.querySelector('.tecla_psh').onclick = tocaSomPsh;
document.querySelector('.tecla_tic').onclick = tocaSomTic;
document.querySelector('.tecla_tom').onclick = tocaSomTom;*/


// for (i=0; i < teclas.length; i++) {

//     const som = teclas[i].classList[1];
//     idAudio = `#som_${som}`;
    
// }

// tentar usar o for ainda

const teclas = document.querySelectorAll('.tecla');


function tocaSom (seletorAudio) { 

    const elemento = document.querySelector(seletorAudio).play();
    elemento.play();
}

for (i = 0; i < teclas.length; i++) {

    const tecla = teclas[i];
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeyDown = function(pressiona) {
       if (pressiona.code === 'Enter' || pressiona.code === 'Space') {
        tecla.classList.add('ativa');
    }
}
    tecla.onkeyUp = function() {
        
        tecla.classList.remove('ativa');
    
}

}



// let contador = 0;

// while (contador < teclas.length) {

//     const tecla = teclas[contador];
//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;
    
//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }
//     contador = contador+1;

// }


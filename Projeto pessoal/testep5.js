let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

let xRaquete = 5;
let yRaquete = 150;
let baseRaquete = 10;
let alturaRaquete = 70;
let probabilidade = Math.floor(Math.random() * 70);

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let velocidadeYOponente;
let chanceDeErro = 55;

let meusPontos = 0;
let pontosOponente = 0;

let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
 trilha.loop();
}


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete); 
  movimentaRaquete();
  colisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaOponente();
  colisaoOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function calculaChanceErro(){
  chanceErro = Math.round(Math.random()*140);
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha > (width - 10) || xBolinha < 10){
      velocidadeXBolinha *= -1;
      
}else{ 
  if (yBolinha > (height - 10) || yBolinha < 10){
    velocidadeYBolinha *= -1;
    
        }

    }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - 10 < 0){
    xBolinha = 23
    }
}


function mostraRaquete(x,y){
    rect(x, y, baseRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } else {
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10
    }
  }
}

 function colisaoRaquete(){
   if (xBolinha - 10 < xRaquete + baseRaquete && yBolinha - 10 < yRaquete + alturaRaquete && yBolinha + 10 > yRaquete) {
     velocidadeXBolinha *= -1;
     raquetada.play();
   
   }
 }

function calculaChanceErro(){
  chanceErro = Math.round(Math.random()*140);
}

function movimentaOponente() {
  velocidadeYOponente = yBolinha - 10 - yRaqueteOponente - baseRaquete /2 - chanceDeErro;
  yRaqueteOponente += velocidadeYOponente;
  }




function colisaoOponente(){
   if (xBolinha + 10 > xRaqueteOponente && yBolinha + 10 < yRaqueteOponente + alturaRaquete && yBolinha + 10 > yRaqueteOponente){
     velocidadeXBolinha *= -1;
   raquetada.play();
   }
 }

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(150, 10, 40, 20)
  
  fill(255)
  text(meusPontos, 170, 26)
  
  fill(color(255,140,0))
  rect(450,10, 40, 20)
  
  fill(255)
  text(pontosOponente, 470, 26)
}

function marcaPonto() {
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  } else {
    if (xBolinha < 10) {
      pontosOponente += 1;
      ponto.play();
    }
  }
}

if (pontosOponente > 10) {
  rapaz.play();
} else {
  if (meusPontos > 10) {
    elegosta.play();
  }
}
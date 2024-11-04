let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let raqueteRaio = 30;
let xRaquete1 = 5;
let yRaquete1 = 150;
let xRaquete2 = 600;
let yRaquete2 = 150;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  desenharMesa();

  actorBolinha();
  minhaRaquete1();
  minhaRaquete2();

  verificarColisaoRaquete1();
  verificarColisaoRaquete2();
}

function desenharMesa() {
  background(0, 0, 50);

  stroke(255);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);

  noFill();
  rect(0, 0, width, height);
}

function actorBolinha() {
  fill(255);
  noStroke();
  circle(xBolinha, yBolinha, diametro);

  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

  // Verifica colisão com as bordas laterais e superior/inferior.
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function minhaRaquete1() {
  fill(30); // Cor da raquete do jogador 1.
  noStroke();

  circle(xRaquete1, yRaquete1, raqueteRaio * 2);

  // Movimentação da raquete do jogador 1.
  if (keyIsDown(87) && yRaquete1 - raqueteRaio > 0) {
    // W para cima.
    yRaquete1 -= 5;
  }

  if (keyIsDown(83) && yRaquete1 + raqueteRaio < height) {
    // S para baixo.
    yRaquete1 += 5;
  }
}

function minhaRaquete2() {
  fill(30); // Cor da raquete do jogador 2.
  noStroke();

  circle(xRaquete2, yRaquete2, raqueteRaio * 2);

  // Movimentação da raquete do jogador 2.
  if (keyIsDown(UP_ARROW) && yRaquete2 - raqueteRaio > 0) {
    // Setas para cima.
    yRaquete2 -= 5;
  }

  if (keyIsDown(DOWN_ARROW) && yRaquete2 + raqueteRaio < height) {
    // Setas para baixo.
    yRaquete2 += 5;
  }
}

function verificarColisaoRaquete1() {
  // Calcula a distância entre o centro da bolinha e o centro da raquete do jogador 1.
  let distancia = dist(xBolinha, yBolinha, xRaquete1, yRaquete1);

  // Se a distância for menor ou igual à soma dos raios, houve colisão.
  if (distancia < raio + raqueteRaio && velocidadeXBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
}

function verificarColisaoRaquete2() {
  // Calcula a distância entre o centro da bolinha e o centro da raquete do jogador 2.
  let distancia = dist(xBolinha, yBolinha, xRaquete2, yRaquete2);

  // Se a distância for menor ou igual à soma dos raios, houve colisão.
  if (distancia < raio + raqueteRaio && velocidadeXBolinha > 0) {
    velocidadeXBolinha *= -1;
  }
}

function resetarBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
  velocidadeXBolinha = 6;
  velocidadeYBolinha = 6;
}

// environment
var screen = 0;
var score = 0;
var titleFont;

// words;
var list_of_four;
var list_of_five;
var list_of_seven;
var four;
var five;
var seven;


function preload() {
  titleFont = loadFont('lemonmilk.otf');
  list_of_four = [
    'play', 'hate', 'love', 'lion',
    'dave', 'atom', 'loss', 'kids',
    'star', 'blue', 'weak', 'hour'
  ];
  list_of_five = [
    'hello', 'alpha', 'birds', 'zebra',
    'green', 'ships', 'paris', 'small',
    'razor', 'plane', 'swamp', 'turbo'
  ];
  list_of_seven = [
    'approve', 'attends', 'audible', 'baboons',
    'babysit', 'crunchy', 'cupcake', 'galagos',
    'honesty', 'hoovers', 'ukulele', 'wizards'
  ];
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (screen == 0) screen_splash();
  else if (screen == 1) screen_learn();
  else if (screen == 2) screen_four();
}

function mousePressed() {
  if (screen == 0) {
    if ((mouseX > 200) && (mouseX < 400)) {
      if ((mouseY > 250) && (mouseY < 350)) {
        screen = 1;
        choose_words();
      }
    }
  } else if (screen == 1) {
    if ((mouseX > 400) && (mouseX < 560)) {
      if ((mouseY > 300) && (mouseY < 380)) {
        screen = 2;
      }
    }
  } else if (screen == 2) {
    
  }else {
    screen = 0;
  }
}

function choose_words() {
  four = random(list_of_four);
  five = random(list_of_five);
  seven = random(list_of_seven);
}

function screen_splash() {
  background('#003049');
  fill('#FCBF49');
  noStroke();
  textFont(titleFont);
  textAlign(CENTER, CENTER);
  textSize(100);
  text('Brainiac', width / 2, 100);
  textSize(30);
  fill('#D62828');
  text('A game by Prakriti Jain', width / 2, 175);
  rect(200, 250, 200, 100);
  textSize(50);
  fill('#FCBF49')
  text('Start', width / 2, 290)
}

function screen_learn() {
  background('#003049');
  noStroke();
  textFont(titleFont);
  textAlign(LEFT, TOP);
  fill('#D62828');
  textSize(30);
  text('four', 30, 40);
  text('five', 30, 140);
  text('seven', 30, 240);
  fill('#FCBF49');
  textSize(60);
  text(four, 40, 60);
  text(five, 40, 160);
  text(seven, 40, 260);
  rect(400, 300, 160, 80);
  fill('#D62828');
  text('>>>', 430, 300);
}

function screen_score() {
  
}

function screen_four() {
  background('#003049');
  noStroke();
  textFont(titleFont);
  fill('#D62828');
  textAlign(CENTER, CENTER);
  fill('#FCBF49');
}

function screen_five() {
  
}

function screen_seven() {
  
}
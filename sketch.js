let beat, analyzer;
function preload() {
  beat = loadSound('beat.mp3');
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');

  analyzer = new p5.Amplitude();
  analyzer.setInput (beat);
}


function mousePressed() {
  if (beat.isPlaying()) {
    beat.stop();
  } else {
    beat.loop();
  }
}

function draw() {

  background(10, 20, 55);
  
  let rms = 0
  if (analyzer.getLevel ()) {
    rms = analyzer.getLevel ();
  }

  fill(235, 64, 52);
  noStroke(0);

  for(let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {

      let x = 60 + col * 80;
      let y = 80 + row * 110 + (col % 2) * 45;
      let circleSize = 35 + rms * 350;

  ellipse(x, y, circleSize, circleSize);
    }
  }
}

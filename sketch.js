let defaultPath;
let imgBG;
let imgFG;
let dissolve;

let fileNum;

function setup() {
  createCanvas(1000, 600);
  imageMode(CENTER);

  fileNum = 0;
  defaultPath = "assets/0/";

  imgBG = loadImage(`${defaultPath}${fileNum}.jpeg`);
  imgFG = loadImage(`${defaultPath}${fileNum + 1}.jpeg`);

  dissolve = 0;
}

function draw() {
  background(255);
  tint(255, 255);
  image(imgBG, width / 2, height / 2);

  tint(255, dissolve);
  image(imgFG, width / 2, height / 2);
}

function mouseMoved() {
  if (dissolve != 255) {
    dissolve++;
  } else if (dissolve == 255) {
    fileNum++;
    if (fileNum < 7) {
      imgBG = loadImage(`${defaultPath}${fileNum}.jpeg`);
      imgFG = loadImage(`${defaultPath}${fileNum + 1}.jpeg`);
    }
    dissolve = 0;
  }
}

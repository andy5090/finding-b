let defaultPath;
let imgs;
let imgBG;
let imgFG;
let dissolve;

let fileNum;

function setup() {
  createCanvas(1000, 600);
  imageMode(CENTER);

  imgs = [];
  fileNum = 0;
  defaultPath = "0/";

  for (let i = 0; i < 8; i++) {
    imgs.push(loadImage(`assets/${defaultPath}${i}.jpeg`));
  }
  imgBG = imgs[fileNum];
  imgFG = imgs[fileNum + 1];

  dissolve = 0;
}

function draw() {
  background(255);
  tint(255, 255);
  image(imgBG, width / 2, height / 2);

  tint(255, dissolve);
  image(imgFG, width / 2, height / 2);

  rect();
}

function mouseMoved() {
  if (dissolve != 255) {
    dissolve++;
  } else if (dissolve == 255) {
    if (fileNum < 7) {
      fileNum++;
    } else {
      fileNum = 0;
    }

    imgBG = imgs[fileNum];
    imgFG = imgs[fileNum + 1];

    dissolve = 0;
  }
}

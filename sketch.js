let defaultPath;
let imgs;
let imgBG;
let imgFG;
let dissolve;

let reverse;

let fileNum;
let maxFileNum;

function setup() {
  createCanvas(displayWidth, displayHeight);
  imageMode(CENTER);

  imgs = [];
  fileNum = 0;
  reverse = false;
  defaultPath = "0/";
  maxFileNum = 8;

  for (let i = 0; i < maxFileNum; i++) {
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

  if (dissolve != 255) {
    dissolve++;
  } else if (dissolve == 255) {
    if (reverse) {
      fileNum--;
      if (fileNum > 0) {
        imgBG = imgs[fileNum];
        imgFG = imgs[fileNum - 1];
      } else {
        reverse = false;

        imgBG = imgs[fileNum];
        imgFG = imgs[fileNum + 1];
      }
    } else {
      fileNum++;
      if (fileNum < maxFileNum - 1) {
        imgBG = imgs[fileNum];
        imgFG = imgs[fileNum + 1];
      } else {
        reverse = true;

        imgBG = imgs[fileNum];
        imgFG = imgs[fileNum - 1];
      }
    }

    dissolve = 0;
  }
}

function mouseMoved() {}

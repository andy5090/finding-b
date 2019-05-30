let defaultPath;
let imgs;
let BimgBG;
let imgBG;
let imgFG;
let dissolve;

let reverse;

let fileNum;
let maxFileNum;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  imgs = [];
  fileNum = 0;
  reverse = false;
  defaultPath = "0/";
  maxFileNum = 14;

  for (let i = 0; i < maxFileNum; i++) {
    imgs.push(loadImage(`assets/${defaultPath}${i}.jpeg`));
  }

  imgBG = imgs[fileNum];
  imgFG = imgs[fileNum + 1];

  dissolve = 0;
}

function draw() {
  background(0);
  tint(255, 255);
  image(imgBG, width / 2, height / 2);
  imgBG.resize(windowWidth, windowHeight);

  tint(255, dissolve);
  image(imgFG, width / 2, height / 2);
  imgFG.resize(windowWidth, windowHeight);

  if (dissolve < 255) {
    dissolve += 10;
  } else if (dissolve >= 255) {
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

function mouseMoved() {
  if (mouseX > 0 && mouseX < 100) {
    imgBG.filter(THRESHOLD);
    imgFG.filter(THRESHOLD);
  } else if (mouseX > 100 && mouseX < 200) {
    imgBG.filter(GRAY);
    imgFG.filter(GRAY);
  } else if (mouseX > 200 && mouseX < 300) {
    imgBG.filter(OPAQUE);
    imgFG.filter(OPAQUE);
  } else if (mouseX > 300 && mouseX < 400) {
    imgBG.filter(INVERT);
    imgFG.filter(INVERT);
  } else if (mouseX > 400 && mouseX < 500) {
    imgBG.filter(POSTERIZE);
    imgFG.filter(POSTERIZE);
  } else if (mouseX > 500 && mouseX < 700) {
    imgBG.filter(BLUR);
    imgFG.filter(BLUR);
  }
}

function mouseClicked() {
  let fs = fullscreen();
  fullscreen(!fs);
}

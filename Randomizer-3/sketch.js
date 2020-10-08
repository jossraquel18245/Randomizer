let flowers =
[{
  name: "Rose",
  personality: "you have a quiet and traditional exterior, but inside, you are passionate, romantic and deep"
}, {
  name: "CherryBlossom",
  personality: "You are intelligent, honest and sweet. You are friendly to everybody and don't like conflict."
}, {
  name: "Sunflower",
  personality: "You're optimistic and cheerful. You create a place of love, happiness, and warmth."
}, {
  name: "BirdsOfParadise",
  personality: "you are attractive, energetic and highly dramatic"
}, {
  name: "Daisy",
  personality: "you are positive, morning person, full of life, & a loyal person. "
}, {
  name: "LotusFlower",
  personality: "you have a pure heart, you are quiet and reserved, you pick your friends carefully"
}, {
  name: "Lily",
  personality: "you are a family person, good provider, and protector"
}, {
  name: "Peony",
  personality: "you are sweet and appreciate small gestures."
}];

let randomIndex;
let animating = false;
let imagesofflowers = [];
let imageCounter = 0;
let margin = 20;

function preload() {
  for (let i = 0; i < flowers.length; i++) {
    imagesofflowers[i] = loadImage("assets/" + flowers[i].name + ".jpg")
  }
}

function setup() {
  createCanvas(800, 750);
  textSize(24);
  imageMode(CENTER);
  frameRate(4);

  //Set up the background and text for Click to get a Flower
  background(random(125, 136), random(205, 214), random(220, 250));
  text("Click to Get a Flower", 250, 50);
}

function draw() {
  if (animating == true) {
    // Randomly cycle through available images
    background(random(152), random(188, 255), random(127, 152));
    index = int(random(imagesofflowers.length));
    image(imagesofflowers[index], 400, 400);
  }
}


function mousePressed() {
  if (flowers.length > 0) {
    animating = true;
    setTimeout(randomizer, 2000);
  } else {
    background(random(200, 250));
    text("You have no more flowers!", 250, 50);
  }
}

function randomizer() {
  animating = false;
  background(random(130, 180), random(200, 225), random(240, 250));
  if (flowers.length > 0) {
    randomIndex = int(random(flowers.length));
    image(imagesofflowers[randomIndex], 400, 300);
    description = flowers[randomIndex].name + ":" + flowers[randomIndex].personality;
    text(description, 50, 600, 700, 150);

    // Remove the champion and its image from their corresponding lists
    flowers.splice(randomIndex, 1);
    imagesofflowers.splice(randomIndex, 1);
  }
}


let lolChampions = [{

  name: "Ashe",
  ability: "Arrow"
},{
  name: "Garen",
  ability: "Sword"

},{
  name: "Teemo",
  ability: "Poison"

},{
  name: "Volibear",
  ability: "Lightning"

},{
  name: "Annie",
  ability: "Tibers"

}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
  textSize(32);
  text ("Click to Randomize", 50,50);



}

function draw() {

  if(animating==true){
    ellipse(random(width), random(height), random(50,100));
    }

}

function randomizer(){
  animating = false;
  background(random (200,255),0,0);
  if (lolChampions.length >0){

    randomIndex= int(random(lolChampions.length));
    text(`${lolChampions[randomIndex].name} 's ability
      ${lolChampions[randomIndex].ability}`,50,50);

    lolChampions.splice(randomIndex, 1);
  }
  else {
    text("Nothing Left!", 50, 50)
  }
}



function mousePressed(){
  animating = true;
  setTimeout(randomizer,2000);


}

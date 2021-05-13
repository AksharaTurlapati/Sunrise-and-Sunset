const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var H;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    fill("drag");
    textSize(30);
    if(H >= 12){
        text("Time : " + H%12 + "PM", 50, 100);
    }
    else if(H == 0){
        text("Time : 12AM", 50, 100);
    }
    else {
        text("Time : " + H%12 + "AM", 50, 100);
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Detroit");
    //change the data in JSON format
    var responseJSON = await response.json()
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    H = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(H >= 4 && H <= 6){
        bg = "sunrise1.png";
    }
    else if(H > 6 && H <= 8) {
        bg = "sunrise2.png";
    }
    else if(H > 8 && H <= 11) {
        bg = "sunrise3.png";
    }
    else if(H > 11 && H <= 13) {
        bg = "sunrise4.png";
    }
    else if(H > 13 && H <= 15) {
        bg = "sunrise5.png";
    }
    else if(H > 15 && H <= 17) {
        bg = "sunrise6.png";
    }
    else if(H > 17 && H <= 18) {
        bg = "sunset7.png";
    }
    else if(H > 18 && H <= 19) {
        bg = "sunset8.png";
    }
    else if(H > 20 && H <= 23) {
        bg = "sunset9.png";
    } 
    else if(H > 23 && H <= 0) {
        bg = "sunset10.png";
    }
    else if(H > 0 && H <= 3) {
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}

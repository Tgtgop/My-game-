const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var player, playerdata
var Ground



function Preload(){
   
}

function setup(){
  canvas = createCanvas(1200,600);
  Ground = new ground(0, height - 1, width * 2, 1);
  player = new Player(100,100,width , height)

}

function Draw(){
    background(189)
    engine = Engine.create();
    world = engine.world;
    Ground.display()
    player.display()
  }
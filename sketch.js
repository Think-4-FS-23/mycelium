let particles = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  particles.push(new Particle(400, 400, 1));
  

  frameRate(12)
  background(0);
}

function draw() {
 
  for(let i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();

    let probability =0.98*(1- 1/particles.length);
    
    if(random(0,1)>probability && particles.length<2000){
      console.log("new particle", particles.length)
      let p = new Particle(particles[i].pos.x, particles[i].pos.y, particles[i].r);
      p.vel = particles[i].vel.copy();
      p.vel.rotate(random(-30,30));
      particles.push(p);
    }
  }
}

class Particle{
  constructor(x, y, r){
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate(random(0,360));
    this.r = r;
  }

  show(){
    let a = map(particles.length, 0, 2000, 100, 0);
    fill(255,a);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  update(){
    this.vel.rotate(random(-2,2))
    this.pos.add(this.vel);
  }
  
}
rightwristx=0;
leftwristx=0;
difference=0;

function setup() {
   video= createCapture(VIDEO);
   video.size(550,500);

  canvas= createCanvas(550,500);
  canvas.position(560,150);

  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialised");
}

function gotPoses(results) {
 if(results.length>0) {
   console.log(results);
   leftwristx=results[0].pose.leftWrist.x;
   rightwristx=results[0].pose.rightWrist.x;
    difference= floor(leftwristx-rightwristx);
    console.log("leftwristx="+ leftwristx+ " rightwristx="+ rightwristx+ "difference=" + difference)
}
}

function draw() {
    background('#0000FF');
    document.getElementById("font_size").innerHTML= "Font size of the text is "+ difference+"px";
    textSize(difference);
    fill('#FFFF00');
    text('VICTORY',50,400)
}
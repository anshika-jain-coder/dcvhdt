song=""
leftwristy=0;
rightwristy=0;
function preload(){
song=loadSound("1st.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftwristy=results[0].pose.leftwrist.y;
        rightwristy=results[0].pose.rightwrist.y;
console.log("leftwristy="+leftwristy);
console.log("rightwristy="+rightwristy);

    }
}
function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log('Posenet is intialized');
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play1();
    song.play2();
}

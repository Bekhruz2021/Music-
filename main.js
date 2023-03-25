song = "";

function preload() {
song = loadSound("music.mp3");
song = loadSound("music2.mp3");
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 600, 500);
}  
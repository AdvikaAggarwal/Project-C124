function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(590, 110);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#BAB86C');
}
function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose" , gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}

function modelloaded(){
    console.log("poseNet is initialized");
}
function draw(){
    image(video,0,0, 300,300);
}

function take_snapshot(){
    save("moustachioed.png");
}
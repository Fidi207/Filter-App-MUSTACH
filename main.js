nose_x = -10;
nose_y = -10;
function preload(){
    IMAGG = loadImage('https://i.postimg.cc/JzNDSJGg/clipart168854.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', getResult);
}

function modelLoaded(){
    console.log("Model Is Loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(IMAGG, nose_x - 20, nose_y + 10, 40, 20);
}
function take_pic(){
    save("I_am_an_artiste.png");
}

function getResult(arry){
    if (arry.length > 0){
        console.log(arry);
        nose_x = arry[0].pose.nose.x;
        nose_y = arry[0].pose.nose.y;
    }
    else{
        console.log("come here you idiot");
        nose_x = -10;
        nose_y = -10;
    }
}
window.addEventListener("mousedown", take_pic);
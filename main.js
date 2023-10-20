status1 = " ";
object = [];
alarm = "alarm.wav";
function preload(){
    image1 = loadImage("docat.avif");
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    object_detector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : BABY IS GETTING DETECTED";
}
function modelloaded(){
    console.log("it is working");
    status1 = true;
}
function draw(){
    image(video,0,0,380,380);
    if( status1  !=  " "){
        object_detector.detect(video,gotresult);
        r=random(255);
        g=random(255);
        b=random(255);
        if(object[i] == "person"){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="object is detected";
        document.getElementById("number").innerHTML="Number of objects detected are : "+object.length;
        fill(r,g,b);
        percent = floor(object[i].confidence*100);
        text(object[i].label +"  "+ percent+"%",object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
    }
}
else{
alarm.play();
}
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        object = result;  
    }
    }
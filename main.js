function setup(){
    canvas=createCanvas(600,480);
    canvas.position(200,100);
    video=createCapture();
    video.hide();
 
}


function draw(){
    image(video,0,0,500,380);
    fill(232, 3, 252);
    stroke(48, 3, 252);
    rect(520,80,70,70);
    rect(520,240,70,70);
    rect(520,405,70,70);
    rect(360,405,70,70);
    rect(190,405,70,70);
    rect(7,405,70,70);

  
}

function take_snapshot(){
    save('my_image.png'); 
}
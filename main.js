eye_x=0;
eye_y=0;


function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotPoses);
        }
        function gotPoses(results){
        if(results.length>0){
        console.log(results);
        eye_x=results[0].pose.leftEye.x-35;
        eye_y=results[0].pose.leftEye.y-30;
        console.log("Left Eye X= "+results[0].pose.leftEye.x);
        console.log("Left Eye Y="+results[0].pose.leftEye.y);
        }
        }
    function take_snapshot(){
        save('Grimm.png');
    }
    function preload(){
        Grimm_Flame=loadImage('grimmflame.png');
    }
    function draw(){
        image(video,0,0,300,300);
        image(Grimm_Flame,eye_x,eye_y,100,200);
    }
    function modelLoaded(){
        console.log("Model is Loaded")
    }
    
    